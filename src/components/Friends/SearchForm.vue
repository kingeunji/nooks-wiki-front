<template>
  <div class="search-form wrapper">
    <div class="table">
      <div class="row">
        <div class="left">종</div>
        <div class="right">
          <span
            class="tag"
            v-for="(item, index) in searchFilter.species"
            :key="index"
            @click="onclickSpecies(item)"
          >{{ item }}</span>
        </div>
      </div>
      <div class="row">
        <div class="left">성격</div>
        <div class="right">
          <span
            class="tag"
            v-for="(item, index) in searchFilter.character"
            :key="index"
            @click="onclickCharacter(item)"
          >{{ item }}</span>
        </div>
      </div>
      <div class="row">
        <div class="left">취미</div>
        <div class="right">
          <span
            class="tag"
            v-for="(item, index) in searchFilter.hobby"
            :key="index"
            @click="onclickHobby(item)"
          >{{ item }}</span>
        </div>
      </div>
      <div class="row">
        <div class="left">대화타입</div>
        <div class="right">
          <span
            class="tag"
            v-for="(item, index) in searchFilter.talkType"
            :key="index"
            @click="onclickTalkType(item)"
          >{{ item }}</span>
        </div>
      </div>
      <div class="row">
        <div class="left">선호타입</div>
        <div class="right">
          <span
            class="tag"
            v-for="(item, index) in searchFilter.preferStyle1"
            :key="index"
            @click="onclickPreferStyle(item)"
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
            @click="onclickPreferColor(item)"
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
        species: [],
        character: [],
        hobby: [],
        talkType: [],
        birth: [],
        preferStyle1: [],
        preferStyle2: [],
        preferColor1: [],
        preferColor2: [],
        voiceType: []
      }
    };
  },
  methods: {
    onclickSpecies(item) {
      const existIndex = this.searchForm.species.findIndex(
        element => element == item
      );
      if (existIndex > -1) {
        this.searchForm.species.splice(existIndex, 1);
      } else {
        this.searchForm.species.push(item);
      }
    },
    onclickCharacter(item) {
      const existIndex = this.searchForm.character.findIndex(
        element => element == item
      );
      if (existIndex > -1) {
        this.searchForm.character.splice(existIndex, 1);
      } else {
        this.searchForm.character.push(item);
      }
    },
    onclickHobby(item) {
      const existIndex = this.searchForm.hobby.findIndex(
        element => element == item
      );
      if (existIndex > -1) {
        this.searchForm.hobby.splice(existIndex, 1);
      } else {
        this.searchForm.hobby.push(item);
      }
    },
    onclickTalkType(item) {
      const existIndex = this.searchForm.hobby.findIndex(
        element => element == item
      );
      if (existIndex > -1) {
        this.searchForm.talkType.splice(existIndex, 1);
      } else {
        this.searchForm.talkType.push(item);
      }
    },
    onclickPreferStyle(item) {
      const existIndex = this.searchForm.preferStyle1.findIndex(
        element => element == item
      );
      if (existIndex > -1) {
        this.searchForm.preferStyle1.splice(existIndex, 1);
      } else {
        this.searchForm.preferStyle1.push(item);
      }
    },
    onclickPreferColor(item) {
      const existIndex = this.searchForm.preferColor1.findIndex(
        element => element == item
      );
      if (existIndex > -1) {
        this.searchForm.preferColor1.splice(existIndex, 1);
      } else {
        this.searchForm.preferColor1.push(item);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.search-form {
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