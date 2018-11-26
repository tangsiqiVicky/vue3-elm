<template>
  <header>
  	<div class="back"></div>
	<div class="pageName">{{name}}</div>
	<div class="user"></div>
  </header>
</template>

<script>
export default {
  name: 'header',
  props: [ 'name']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
