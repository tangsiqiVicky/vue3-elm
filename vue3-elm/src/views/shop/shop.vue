<template>
  <div>
    <header-top></header-top>
  </div>
</template>

<script>
import headerTop from '../../components/header/header.vue'
export default {
  name: 'shop',
  data () {
    return {
      title: '主页'
    }
  },
  components: {
    headerTop
  },
  created () {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin';
</style>
