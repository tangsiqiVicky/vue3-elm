<template>
	<header-top :name="title"></header-top>
</template>

<script>
import headerTop from '../../components/header/header.vue'
export default {
  name: 'HelloWorld',
  data(){
  	return {
  		title: '主页'
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
