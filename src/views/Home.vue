<template>
  <div class="home">
    <Header></Header>
    <Contents></Contents>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Contents from '@/components/Contents'
import Footer from '@/components/Footer'

export default {
  name: 'home',
  components: {
    Header,
    Contents,
    Footer
  }
}
</script>
