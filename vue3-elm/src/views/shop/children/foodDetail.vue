<template>
  <div class="rating_page">
  <header-top :name="name" go-back="true"></header-top>
  <section class="header_img">
    <img src="" alt="" class="food_img">
    <div class="cover"></div>
  </section>
  <p class="description">和府拉面</p>
  <section class="detail_container">
    <section class="detail_left">
      <p>溏心鸡蛋</p>
      <div class="rating_sale">
        <span>评分</span>
        <ratingStar></ratingStar>
        <span>4.5</span>
      </div>
      <p>
        <span>月售 20 单</span>
        <span>售价￥3</span>
      </p>
      <p>
        <span>评论数 200 </span>
        <span>好评率 100%</span>
      </p>
    </section>
  </section>
  </div>
</template>

<script>
import headerTop from '../../../components/header/header'
import ratingStar from '../../../components/common/ratingStar'
export default {
  name: 'fooddetail',
  data () {
    return {
      name: null
    }
  },
  components: {
    ratingStar, headerTop
  },
  methods: {
  },
  created () {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin';
  .rating_page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 12;
    p, span {
      font-family: Helvetica Neue,Tahoma,Arial;
    }
    .header_img {
      position: relative;
      margin-top: 1.95rem;
      .food_img {
        width: 100%;
        height: 10em;
        display: block;
      }
      .cover {
        position: absolute;
        @include wh(100%, 100%);
        top: 0;
        lef: 0;
      }
    }
    .description{
      @include sc(.6em, #666)
      margin-top: .5em;
      line-height: .8em;
      bottom: .2em;
      padding: 0 .4em;
    }
    .detail_container {
      padding: .5em;
      @include fj;
      align-items: center;
      .detail_left {
        p:nth-of-type(1) {
          @include sc(.7em, #333);
          margin-bottom: .2em
        }
        .rating_sale {
          display: flex;
          align-item: center;
          span:nth-of-type(1) {
            @include sc(.6em, #666)
          }
          span:nth-of-type(2) {
            @include sc(.55em, #666)
            margin-left: .2em
          }
          span:nth-of-type(3) {
            @include sc(.6em, #666);
            margin-left: .4em;
          }
        }
        p:nth-of-type(2) {
          font-size: 0;
          margin-top: .3em;
          span:nth-of-type(1) {
            @include sc(6em, #666);
            margin-right: .4em;
          }
          span:nth-of-type(2),span:nth-of-type(3) {
            @include sc(.6em, #f60);
            margin-right: .2em;
          }
        }
        p:nth-of-type(3) {
          span {
            @include sc(.6em, #666)
          }
        }
      }
    }
  }
</style>
