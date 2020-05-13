<template>
  <div class="search-form wrapper">
    <div class="table">
      <div class="row">
        <div class="left">종</div>
        <div class="right">
          <span class="tag" v-for="(item, index) in searchFilter.species" :key="index">{{ item }}</span>
        </div>
      </div>
      <div class="row">
        <div class="left">성격</div>
        <div class="right">
          <span class="tag" v-for="(item, index) in searchFilter.character" :key="index">{{ item }}</span>
        </div>
      </div>
      <div class="row">
        <div class="left">취미</div>
        <div class="right">
          <span class="tag" v-for="(item, index) in searchFilter.hobby" :key="index">{{ item }}</span>
        </div>
      </div>
      <div class="row">
        <div class="left">대화타입</div>
        <div class="right">
          <span class="tag" v-for="(item, index) in searchFilter.talkType" :key="index">{{ item }}</span>
        </div>
      </div>
      <div class="row">
        <div class="left">선호타입</div>
        <div class="right">
          <span
            class="tag"
            v-for="(item, index) in searchFilter.preferStyle1"
            :key="index"
          >{{ item }}</span>
        </div>
      </div>
      <div class="row">
        <div class="left">선호색깔</div>
        <div class="right">
          <span
            class="tag"
            v-for="(item, index) in searchFilter.preferColor1"
            :key="index"
          >{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchFilter from "@/assets/data/searchFilter.json";

export default {
  data() {
    return {
      searchFilter,
      searchForm: {
        species: "",
        character: "",
        hobby: "",
        talkType: "",
        birth: "",
        preferStyle1: "",
        preferStyle2: "",
        preferColor1: "",
        preferColor2: "",
        voiceType: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.search-form {
  width: 900px;
  height: 400px;

  border-radius: 6px;
  position: relative;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;

  padding: 16px;
  .table {
    border: 1px solid #495057;
    .row {
      display: flex;
      border-bottom: 1px solid #495057;
      .left {
        padding: 10px;
        background-color: #099268;
        color: #ffffff;
        width: 20%;
        font-size: 14px;
      }
      .right {
        padding: 10px;
        width: 80%;
        span {
          font-size: 13px;
          cursor: pointer;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>