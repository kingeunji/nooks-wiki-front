<template>
  <div>
    <div class="search wrapper">
      <SearchForm />
    </div>

    <div class="result wrapper">
      <ResultItem v-for="(item, idx) in resultItems" :key="idx" v-bind:friend="item" />
    </div>
  </div>
</template>

<script>
import { friends } from "@/api/friends";
import SearchForm from "@/components/Search/SearchForm";
import ResultItem from "@/components/Search/ResultItem";

export default {
  components: { SearchForm, ResultItem },
  data() {
    return {
      resultItems: [],
      searchParams: {}
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await friends.search(this.searchParams);
      this.resultItems = response.data;
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  width: 900px;
  height: 270px;

  border-radius: 6px;
  position: relative;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;

  padding: 16px;
}
.result {
  width: 900px;
  position: relative;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;

  padding: 16px;
}
</style>