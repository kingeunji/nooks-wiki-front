<template>
  <div class="detail wrapper">
    <DetailInfo v-bind:detailInfo="detailInfo" />
  </div>
</template>

<script>
import DetailInfo from "@/components/Friends/DetailInfo";
import { friends } from "@/api/friends";
export default {
  components: { DetailInfo },
  data() {
    return {
      id: {},
      detailInfo: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await friends.detail(this.id);
      this.detailInfo = response.data;
    }
  }
};
</script>

<style lang="scss" scoped>
.detail {
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
</style>