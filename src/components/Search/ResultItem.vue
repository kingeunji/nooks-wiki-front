<template>
  <div class="content">
    <div class="detail">
      <div class="detail-text">
        <p class="username">{{ friend.species }}</p>
        <h3>{{ friend.name }}</h3>
        <p class="body">{{ friend.motto }}</p>
      </div>
      <div class="detail-img">
        <img
          src="https://images.mypetlife.co.kr/content/uploads/2020/03/29170918/6e2169ee0c893650ae2e9460f5cb1a1d21d1c0211d15f06716793ebed1cd82251a1ccfff20848faa68778375e3f52caf4e1228dab914198b7b06bb208a6b4d52bb81974b0fa0571d533757cce4757973267fd2701c8234a21d5669ee71662348.png"
          alt="noticeimg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["friend"],
  methods: {}
};
</script>

<style scope lang="scss">
.content {
  .detail {
    display: flex;
    justify-content: space-between;
    padding: 25px 0;
    border-bottom: solid 1px #e5e5e5;
    cursor: pointer;
    .detail-text {
      .username {
        margin-top: 15px;
        padding: 2px 5px;
        display: inline-block;
        border-radius: 2px;
        border: solid 1px #50b0b1;
        font-size: 14px;
        font-weight: 500;
        line-height: 23px;
        text-align: center;
        color: #50b0b1;
      }

      h3 {
        margin-top: 11px;
        font-size: 19px;
        line-height: 1.32;
        color: #2e3032;
      }

      .body {
        margin-top: 10px;
        font-size: 14px;
        line-height: 1.79;
        color: #b5b5b5;
      }
    }
    .detail-img {
      margin-left: 15px;
      img {
        width: 100px;
        height: 150px;
      }
    }
  }
}
</style>
