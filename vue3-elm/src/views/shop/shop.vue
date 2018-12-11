<template>
  <div>
    <section class="shop_container">
      <nav class="goback">
        <svg width="4em" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <polyline points="12,18 4,9 12,0" style="fill:none; stroke: rgb(255,255,255); stroke-width: 3"></polyline>
        </svg>
      </nav>
      <header class="shop_detail_header" ref="shopheader" >
        <img src="" alt="" class="header_cover_img">
        <section class="description_header">
          <router-link to="/shop" class="description_top">
            <section class="description_left">
              <img src="" alt="">
            </section>
            <section class="descript_right">
              <h4 class="description_title_ellipsis">和府拉面</h4>
              <p class="description_text">商家配送/30分钟送达/配送费￥5</p>
              <p class="description_promotion ellipsis">
                公告： 欢迎光临，用餐高峰时期提前下单
              </p>
            </section>
            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" version="1.1" class="description_arrow">
              <path d="M0 0 L8 7 L0 14" stroke="#fff" strok-width="1" fill="none"></path>
            </svg>
          </router-link>
        </section>
      </header>
    </section>
  </div>
</template>

<script>

export default {
  name: 'shop',
  data () {
    return {
    }
  },
  components: {
  },
  created () {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin';
  .shop_container {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    .goback {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 2em;
      z-index: 11;
      padding-top: 0.2em;
      padding-left: 0.2em
    }
    .shop_detail_header {
      overflow: hidden;
      position: relative;
      .header_cover_img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9;
        filter: blur(10px)
      }
      .description_header {
      }
    }
  }
</style>
