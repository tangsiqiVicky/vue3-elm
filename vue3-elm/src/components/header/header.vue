<template>
  <header class="headerTop">
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
	.headerTop {
		width: 100%;
		height: 1.95em;
		background-color: #3190e8;
		font-size: 0.75em;
		line-height: 1.95em;
		div{
			display:inline-block;
			color: white;
		}
		.back {
			width: 20%;
		}
		.pageName {
			width: 60%;
			
		}
		.user {
			width: 20%;
		}
	}
</style>
