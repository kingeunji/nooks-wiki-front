<template>
  <div class="search wrapper">
    <div class="title">
      <h1>동물의숲 주민을 검색해보세요!</h1>
    </div>
    <div class="textbox">
      <input class="input" type="text" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.search {
  width: 630px;
  height: 400px;

  border-radius: 6px;
  position: relative;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;

  padding: 16px;

  .title {
    padding-top: 50px;
    text-align: center;
    h1 {
      font-size: 46px;
      font-weight: 300;
    }
  }

  .textbox {
    padding-top: 30px;
    text-align: center;
    .input {
      width: 100%;
      border: 1px solid #dee2e6;
      outline: none;
      border-radius: 0px;
      line-height: 2.5rem;
      font-size: 1.2rem;
      padding-left: 0.7rem;
      padding-right: 0.7rem;
    }
  }
}
</style>