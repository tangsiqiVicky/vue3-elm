<template>
  <div>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"/>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
<script>
  import svgIcon from './components/common/svg'
  export default {
    components: {
      svgIcon
    }
  }
</script>
<style lang="scss">
 @import './style/common.scss';
 .router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .3s
 }
 .router-fade-enter, .route-fade-leave-active {
  opacity: 0
 }


</style>
