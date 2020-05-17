<template>
  <div class="detailInfo wrapper">
    <div class="image-div">
      <img :src="'http://15.164.205.82:8088/contents/download/' + detailInfo.imgIdx" />
    </div>
    <div class="content-div">
      <h2>{{detailInfo.name}}</h2>
      <p class="species">{{ detailInfo.species }}</p>
      <p class="birth">{{ detailInfo.birth }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["detailInfo"]
};
</script>

<style lang="scss" scoped>
.detailInfo {
  display: flex;
  .image-div {
    img {
      width: 200px;
      height: 280px;
      padding: 20px;
      border: 1px solid #dee2e6;
      float: left;
    }
  }
  .content-div {
    margin-left: 20px;

    h2 {
      font-size: 36px;
      font-weight: bold;
    }
    p {
      margin-bottom: 5px;
    }
  }
}
</style>