<template>
  <div>
    <header-top :name="title"></header-top>
    <nav class="msite_nav">
      <swiper :options="swiperOption">
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </nav>
  </div>  
</template>

<script>
import headerTop from '../../components/header/header.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: '主页',
      swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
    }
  },
  components: {
    headerTop, swiper, swiperSlide
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin';
  .msite_nav {
    padding-top: 2.1em;
    background-color: #fff;
    border-bottom: 0.025em solid $bc;
    height: 10.6rem;
  }
</style>
