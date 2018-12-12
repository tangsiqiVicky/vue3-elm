<template>
  <header-top :name="name"></header-top>
</template>

<script>
import headerTop from '../../components/header/header.vue'
export default {
  name: 'home',
  data () {
    return {
      name: 'home'
    }
  },
  components: {
    headerTop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
