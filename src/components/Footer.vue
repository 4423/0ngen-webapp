<template>
  <footer>
    <transition name="fade">
      <span v-if="show">Powered by blessing-software.</span>
      <!--（大嘘）-->
    </transition>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  mounted () {
    setTimeout(() => { this.show = true }, 2000)
  }
}
</script>

<style scoped>
footer {
  margin: 30px auto;
  text-align: center;
  color: #555;
  font-size: small;
}
</style>
