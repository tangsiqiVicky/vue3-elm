<template>
  <div>
    <transition name="router-fade" mode="out-in" v-if="$route.meta.keepAlive">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in" v-else>
      <router-view/>
    </transition>
    <svg-icon></svg-icon>
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
