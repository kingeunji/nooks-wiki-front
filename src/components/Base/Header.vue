<template>
  <div class="header wrapper">
    <div class="menu-wrapper">
      <ul class="menu">
        <li>동숲 위키</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  background-color: #ffffff;
  z-index: 1;
  padding: 10px 0;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  .menu-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .menu {
    font-size: 25px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    li {
      font-size: 1.4rem;
      font-weight: bold;
      color: #099268;
      margin-left: 15px;
      padding: 10px;
    }
  }
}
</style>