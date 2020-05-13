<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Base/Header";

export default {
  name: "App",
  components: { Header }
};
</script>

<style lang="scss">
* {
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  outline: none;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  font-family: "Spoqa Han Sans";
  letter-spacing: normal;
  margin: 0;
  padding: 0;
}

body {
  background-color: #ffffff;
}
</style>
