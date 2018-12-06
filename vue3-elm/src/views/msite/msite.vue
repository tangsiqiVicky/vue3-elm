<template>
  <div>
    <header-top :name="title">
      <router-link :to="'/'" slot="search" class="link_search">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" >
          <circle cx="8" cy="8" r="7" stroke="rgb(255,255,244)" stroke-width="1" fill="none"></circle>
          <line x1="14" y1="14" x2="20" y2="20" style="stroke:rgb(255,255,255);stroke-width:2"></line>
        </svg>
      </router-link>
    </header-top>
    <nav class="msite_nav">
      <swiper :options="swiperOption" v-if="foodType.length">
        <swiper-slide v-for="(item,index) in foodType" :key="index">
          <div class="food_types_container">
            <a class="link_to_food" v-for="i in item" :key="i">
              <figure>
                <img width="36px" heigth="36px" style="background: yellow"/>
                <figcaption>
                  {{i}}
                </figcaption>
              </figure>
            </a>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <img src="../../assets/fl.svg" v-else>
    </nav>
    <div class="shop_list_container">
      <header class="shop_header">
        <svg class="shop_icon">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shop"></use>
        </svg>
        <span class="shop_header_title">附近商家</span>
      </header>
      <shop-list></shop-list>
    </div>
  </div>
</template>

<script>
import headerTop from '../../components/header/header.vue'
import shopList from '../../components/common/shopList.vue'
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
      },
      imgs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      foodType: []
    }
  },
  components: {
    headerTop, swiper, swiperSlide, shopList
  },
  created () {
    let imgsLength = this.imgs.length
    for (let i = 0, j = 0; i < imgsLength; i += 8, j++) {
      this.foodType[j] = this.imgs.splice(0, 8)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin';
  .link_search {
    left: .8em;
    @include wh(.9em, .9em);
    @include ct;
    svg {
      @include wh(100%, 100%)
    }
  }
  .msite_nav {
    padding-top: 2.1em;
    background-color: #fff;
    border-bottom: 0.025em solid $bc;
    height: 10.6rem;
    .swiper-container {
      @include wh(100%, 100%)
    }
  }
  .food_types_container{
    display: flex;
    flex-wrap: wrap;
    .link_to_food {
      width: 25%;
      padding: 0.3em 0em;
      @include fj(center);
      figure{
        img{
          margin-bottom: 0.3em;
          @include wh(1.8em, 1.8em)
        }
        figcaption{
          text-align: center;
          @include sc(0.55em, #666)
        }
      }
    }
  }
  .shop_list_container {
    margin-top: .4em;
    border-top: 0.025em solid $bc;
    background-color: #fff;
    .shop_header {
      .shop_icon{
        fill: #999;
        margin-left: 0.6rem;
        vertical-alignz: middle;
        @include wh(0.6rem, 0.6rem)
      }
      .shop_header_title{
        color: #999;
        margin-left: 0.2em;
        @include font(0.55em, 1.6em)
      }
    }
  }
</style>
