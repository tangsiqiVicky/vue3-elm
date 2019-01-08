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
          <router-link to="/shop/shopDetail" class="description_top">
            <section class="description_left">
              <img src="" alt="">
            </section>
            <section class="description_right">
              <h4 class="description_title ellipsis">和府拉面</h4>
              <p class="description_text">商家配送/30分钟送达/配送费￥5</p>
              <p class="description_promotion ellipsis">
                公告： 欢迎光临，用餐高峰时期提前下单
              </p>
            </section>
            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" version="1.1" class="description_arrow">
              <path d="M0 0 L8 7 L0 14" stroke="#fff" strok-width="1" fill="none"></path>
            </svg>
          </router-link>
          <footer class="description_footer" @click="showActivitiesFun">
            <p class="ellipsis">
              <span class="tip_icon" style="background-color: rgb(240, 115, 115); border-color: rgb(240, 115, 115);">减</span>
              <span> 满30减5, 满60减8 (APP专享) </span>
            </p>
            <p>1个活动</p>
            <svg class="footer_arrow">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use>
            </svg>
          </footer>
        </section>
      </header>
      <transition name="fade">
        <section class="activities_details" v-show="showActivities">
          <h2 class="activities_shoptitle">和府拉面</h2>
          <h3 class="activities_ratingstar">
            <rating-star :rating='4.5'></rating-star>
          </h3>
          <section class="activities_list">
            <header class="activities_title_style">
              <span>优惠信息</span>
            </header>
            <ul>
              <li>
                <span class="activities_icon" style="background-color: rgb(240, 115, 115); border-color: rgb(240, 115, 115);">
                  减
                </span>
                <span>
                  满30减5, 满60减8 (APP专享)
                </span>
              </li>
            </ul>
          </section>
          <section class="activities_shopinfo">
            <header class="activities_title_style">
              <span>商家公告</span>
              <p>欢迎光临，用餐高峰期请提前下单</p>
            </header>
          </section>
          <svg width="60" height="60" class="close_activities" @click.stop="showActivitiesFun">
            <circle cx="30" cy="30" r="25" stroke="#555" stroke-width="1" fill="none"></circle>
            <line x1="22" y1="38" x2="38" y2="22" style="stroke: #999; stroke-width: 2"></line>
            <line x1="22" y1="22" x2="38" y2="38" style="stroke:#999; stroke-width: 2"></line>
          </svg>
        </section>
      </transition>
      <section class="change_show_type">
        <div>
          <span :class="{activity_show: changeShowType === 'food'}" @click="changeShowType='food'">商品</span>
        </div>
        <div>
          <span :class="{activity_show: changeShowType === 'rating'}" @click="changeShowType='rating'">评价</span>
        </div>
      </section>
      <transition name="fade-choose">
        <section v-show="changeShowType == 'food'" class="food_container">
          <section class="menu_container">
            <section class="menu_left" id="wrapper_menu">
              <ul>
                <li  class="menu_left_li" >
                  <img src="" alt="">
                  <span>热卖</span>
                  <span class="category_num" ></span>
                </li>
              </ul>
            </section>
            <section class="menu_right">
              <ul>
                <li>
                  <header class="menu_detail_header">
                    <section class="menu_detail_header_left">
                      <strong class="menu_item_title">
                        溏心蛋
                      </strong>
                      <span class="menu_item_description">特别美味的溏心蛋</span>
                    </section>
                      <span class="menu_detail_header_right"></span>
                      <!-- <p class="description_tip">
                        <span>溏心蛋</span>
                      </p> -->
                  </header>
                  <section class="menu_detail_list">
                    <router-link tag="div" to="/shop/foodDetail" class="menu_detail_link">
                      <section class="menu_food_img">
                        <img/>
                      </section>
                      <section class="menu_food_description">
                        <h3 class="food_description_head">
                          <strong class="description_foodname">
                          溏心荷包蛋
                          </strong>
                          <ul class="attributes_ul">
                            <li class="attribute_new" style="color:rgb(94, 196, 82); border-color: rgb(94, 196, 82);">
                              <p style="color:rgb(255, 255, 255);">
                                新品
                              </p>
                            </li>
                          </ul>
                        </h3>
                        <p class="food_description_content">好吃美味</p>
                        <p class="food_description_sale_rating">
                          <span>月售52份</span>
                          <span>好评率100%</span>
                        </p>
                      </section>
                    </router-link>
                    <footer class="menu_detail_footer">
                      <section class="food_price">
                        <span>￥</span>
                        <span>20</span>
                        <span>起</span>
                      </section>
                    </footer>
                  </section>
                </li>
              </ul>
            </section>
          </section>
          <section class="buy_cart_container">
            <section  class="cart_icon_num">
              <div class="cart_icon_container cart_icon_activity">
                <span class="cart_list_length">
                  99
                </span>
                <svg class="cart_icon">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-icon"></use>
                </svg>
              </div>
              <div class="cart_num">
                <div>￥200</div>
                <div>配送费￥5</div>
              </div>
            </section>
            <section class="gotopay gotopay_acitvity">
              <span class="gotopay_button_style">
                还差￥20起送
              </span>
            </section>
          </section>
          <transition name="toogle-cart">
            <section class="cart_food_list">
              <header>
                <h4>购物车</h4>
                <div>
                  <svg>
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-remove"></use>
                  </svg>
                  <span class="clear_cart">清空</span>
                </div>
              </header>
              <section class="cart_food_details">
                <ul>
                  <li class="cart_food_li">
                    <div class="cart_list_num">
                      <p class="ellipsis">溏心蛋</p>
                      <p class="ellipsis"></p>
                    </div>
                    <div class="cart_list_price">
                      <span>￥</span>
                      <span>3</span>
                    </div>
                    <section class="cart_list_control">
                      <span>
                        <svg>
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use>
                        </svg>
                      </span>
                      <span class="cart_num">1</span>
                      <svg class="cart_add">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add"></use>
                      </svg>
                    </section>
                  </li>
                </ul>
              </section>
            </section>
          </transition>
          <transition name="fade">
            <div class="screen_cover" v-show="showActivities"></div>
          </transition>
        </section>
      </transition>
      <transition name="fade-choose">
        <section class="rating_container" v-show="changeShowType=='rating'">
          <section>
            <header class="rating_header">
              <section class="rating_header_left">
                <p>4.7</p>
                <p>综合评价</p>
                <p>高于周边商家76.7%</p>
              </section>
              <section class="rating_header_right">
                <p>
                  <span>服务态度</span>
                  <rating-star :rating="4.7"></rating-star>
                  <span>
                    4.7
                  </span>
                </p>
                <p>
                  <span>菜品评价</span>
                  <rating-star :rating="4.3"></rating-star>
                  <span class="rating_num"></span>
                </p>
                <p>
                  <span>送达时间</span>
                  <span class="delivery_time">
                    5分钟
                  </span>
                </p>
              </section>
            </header>
            <ul class="tag_list_ul">
              <li>
                全部(12)
              </li>
              <li>
                满意(42)
              </li>
              <li>
                服务态度好(152)
              </li>
              <li>
                有图(2)
              </li>
            </ul>
            <ul class="rating_list_ul">
              <li class="rating_list">
                <img src="" alt="" class="user_avatar">
                <section class="rating_list_details">
                  <header>
                    <section class="username_star">
                      <p class="username">
                        tangsiqi
                      </p>
                      <p class="star_desc">
                        <rating-star :rating="4.7">
                        </rating-star>
                        <span class="time_spent_desc">
                          按时送达
                        </span>
                      </p>
                    </section>
                    <time class="rated_at">
                      2017-02-14 12:04:20
                    </time>
                  </header>
                </section>
              </li>
            </ul>
          </section>
        </section>
      </transition>
     </section>
     <transition name="router-slid" mode="out-in">
      <router-view></router-view>
     </transition>
  </div>
</template>

<script>
import ratingStar from '../../components/common/ratingStar'
export default {
  name: 'shop',
  data () {
    return {
      showActivities: false,
      changeShowType: 'food'
    }
  },
  components: {
    ratingStar
  },
  methods: {
    showActivitiesFun () {
      this.showActivities = !this.showActivities
    }
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
        position: relative;
        z-index: 10;
        background-color: rgba(119,103,137,.43);
        padding: 0.4em 0 0.4em 0.4em;
        width: 100%;
        overflow: hidden;
        .description_top {
          display: flex;
          .description_left {
            margin-right: 0.3em;
            img {
              @include wh(2.9em, 2.9em);
              display: block;
              border-radius: 0.15em
            }
          }
          .description_right {
              flex: 1;
              .description_title {
                @include sc(.8em, #fff)
                font-weight: bold;
                width: 100%;
                margin-bottom: 0.3em
              }
              .description_text {
                @include sc(.5em, #fff);
                margin-bottom: 0.3em
              }
              .description_promotion {
                @include sc(.5em, #fff);
                width: 11.5em
              }
            }
            .description_arrow {
              @include ct;
              right: 0.3em;
              z-index: 11
            }
          }
        }
        .description_footer {
          @include fj;
          margin-top: 0.5em;
          padding-right: .5em;
          p {
            @include sc(.5em, #fff);
            span {
              color: #fff;
            }
            .tip_icon {
              padding: 0 .04em;
              border: 0.025em solid #fff;
              border-radius: 0.1em;
              font-size: .4em;
              display: inline-block
            }
          }
          .ellipsis {
            width: 84%;
          }
          .footer_arrow {
            @include wh(.45em, .45em);
            poaition: absolute;
            right: .3em
          }
        }
    }
    .activities_details {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #262626;
      z-index: 200;
      padding: 1.25em;
      .activities_shoptitle {
        text-align: center;
        @include sc(.8em, #fff)
      }
      .activities_ratingstar {
        display: flex;
        justify-content: center;
        transform: scale(1.1);
        margin-top: .7em
      }
      .activities_list {
        margin-top: 1.5em;
        margin-bottom: 1em;
        @include sc(.5em, #fff)
        li {
          margin-bottom: .2em;
          .activities_icon {
            padding: 0 .02em;
            display: inline-block;
            border: 0.025em solid #fff;
            border-radius: 0.1em
          }
          span {
            color: #fff;
            line-height: .6em
          }
        }
      }
      .activities_shopinfo {
        p {
          line-height: .7em;
          @include sc(.5em, #fff)
        }
      }
      .activities_title_style {
        text-align: center;
        margin-bottom: 1em;
        span {
          @include sc(.5em, #fff);
          border: 0.025 solid #555;
          padding: .2em .4em;
          border-radius: 0.5em
        }
      }
      .close_activities {
        position: absolute;
        bottom: 1em;
        @include cl
      }
    }
  }
  .change_show_type {
    display: flex;
    background-color: #fff;
    padding: .3em 0 .6em;
    border-bottom: 1px solid #ebebeb;
    div {
      flex: 1;
      text-align: center;
      span {
        @include sc(.65em, #666);
        padding: .2em .1em;
        border-bottom: 0.12em solid #fff
      }
    }
    .activity_show {
      color: #3190e8;
      border-color: #3190e8
    }
  }
  .food_container {
    display: flex;
    flex: 1;
    padding-bottom: 2em;
  }
  .menu_container {
    display: flex;
    flex: 1;
    overflow-y: hidden;
    position: relative;
    .menu_left {
      width: 3.8em;
      .menu_left_li {
        padding: .7em .3em;
        border-bottom: 0.025em solid #ededed;
        box-sizing: border-box;
        border-left: 0.15em solid #f8f8f8;
        position: relative;
        img {
          @include wh(.5em, .6em)
        }
        span {
          @include sc(.6em, #666)
        }
        .category_num {
          position: absolute;
          top: .1em;
          right: .1em;
          background-color: #ff461d;
          line-height: .6em;
          text-align: center;
          border-radius: 50%;
          border: 0.025em solid #ff461d;
          min-width: .6em;
          height: .6em;
          @include sc(.5em, #fff);
          font-family: Helvetica Neue,Tahoma,Arial;
        }
      }
      .activity_menu {
        border-left: 0.15em solid #319038;
        background-color: #fff;
        span:nth-of-type(1) {
          font-weight: bold
        }
      }
    }
    .menu_right {
      flex: 4;
      overflow-y: auto;
      .menu_detail_header {
        width: 100%;
        padding: .4em;
        position: relativie;
        @include fj;
        align-item: center;
        .menu_detail_header_left {
          width: 11em;
          white-space: nowrap;
          overflow: hidden;
          .menu_item_title {
            @include sc(.7em, #666);
            font-weight: blod;
          }
          .menu_item_description {
            @include sc(.5em, #999);
            width: 30%;
            overflow: hidden
          }
        }
        .menu_detail_header_right {
          @include wh(.5em, 1em);
          display: block;
          @include bis('../../assets/icon_point.png');
          background-size: 100% .4em;
          background-position: left center;
        }
        .description_tip {
          background-color: #39373a;
          opacity: 0.95;
          @include sc(.5em, #fff);
          position: absolute;
          top: 1.5em;
          z-index: 14;
          width: 8em;
          right: .2em;
          padding: .5em .4em;
          border: 1px;
          border-radius: .2em;
          span {
            color: #fff;
            line-height: .6em;
            font-size: .55em;
          }
        }
        .description_tip::after {
          content: '';
          position: absolute;
          @include wh(.4em, .4em);
          background-color: #39373a;
          top: -.5em;
          right: .7em;
          transform: rotate(-45deg) translateY(.41rem)
        }
      }
      .menu_detail_list {
        background-color: #fff;
        padding: .6em .4em;
        border-bottom: 1px solid #f8f8f8;
        position: relative;
        overflow: hidden;
        .menu_detail_link {
          display: flex;
          .menu_food_img {
            margin-right: .4em;
            img {
              @include wh(2em, 2em);
              display: block
            }
          }
          .menu_food_description {
            width: 100%;
            .food_description_head {
              display: flex;
              justify-content: space-between;
              margin-bottom: .2em;
              .description_foodname {
                @include sc(.6em, #333)
              }
              .attributes_ul {
                display: flex;
                background-color: red;
                li {
                  font-size: .7em;
                  height: .6em;
                  line-height: 5.5em;
                  padding: .1em;
                  border: 1px solid #666;
                  border-radius: 0.3em;
                  margin-right: .1em;
                  transform: scale(.8);
                  p {
                    white-space: nowrap;
                  }
                }
                .attribute_new {
                  position: absolute;
                  top: 0;
                  left: 0;
                  background-color: #4cd964;
                  @include wh(3em, 3em);
                  display: flex;
                  align-item: flex-end;
                  transform: rotate(-45deg) translate(-.0em, -2.3em);
                  border: none;
                  border-radius: 0;
                  p {
                    @include sc(.5em, #fff);
                    text-align: center;
                    flex: 1;
                    transform: scale(0.8) translate(0.1em, -.1em)
                  }
                }
              }
            }
            .food_description_content {
              @include sc(.5em, #999);
              line-height: .6em;
            }
            .food_description_sale_rating {
              line-height: .8em;
              span {
                @include sc(.5em, #333)
              }
            }
            .food_activity {
              line-height: .4em;
              span {
                font-size: .3em;
                border: 1px soild currentColor;
                border-radius: .3em;
                padding: .08em;
                display: inline-block;
                transform: scale(.8);
                marigin-left: -0.35em
              }
            }
          }
        }
        .menu_detail_footer {
          margin-left: 2.4em;
          margin-top: .3em;
          @include fj;
          .food_price {
            span{
              font-family: 'Helvetica Neue',Tahoma,Arial;
            }
            span:nth-of-type(1) {
              @include sc(.5em, #666);
              margin-right: .05em
            }
            span:nth-of-type(2) {
              @include sc(.6em, #f60);
              font-weight: bold;
              margin-right: .3em
            }
            span:nth-of-type(3) {
              @include sc(.5em, #666)
            }
          }
        }
      }
    }
  }
  .buy_cart_container {
    position: absolute;
    background-color: #3d3d3f;
    bottom: 0;
    left: 0;
    z-index: 13;
    display: flex;
    @include wh(100%, 2em);
    .cart_icon_num {
      flex: 1;
      .cart_icon_container {
        display: flex;
        background-color: #3d3d3f;
        position: absolute;
        padding: .4em;
        border: 0.18em soild #444;
        border-radius: 50%;
        left: .5em;
        top: -.7em;
        .cart_icon {
          @include wh(1.2em, 1.2em)
        }
        .cart_list_length {
          position: absolute;
          top: -.25em;
          right: -.25em;
          background-color: #ff461d;
          line-height: 1.7em;
          text-align: center;
          border-radius: 50%;
          border: 0.025em soild #ff461d;
          min-width: 1.7em;
          height: 1.7em;
          @include sc(.5em, #fff);
          font-family: Helvetica Neue,Tahoma,Arial;
        }
      }
      .cart_icon_activity {
        background-color: #3190e8;
      }
      .cart_num {
        @include ct;
        left: 3.5em;
        div {
          color: #fff;
        }
        div:nth-of-type(1) {
          font-size: .8em;
          font-weight: blod;
          margin-bottom: .1em;
        }
        div:nth-of-type(2) {
          font-size: .4em;
        }
      }
    }
    .gotopay {
      position: absolute;
      right: 0;
      background-color: #535356;
      @include wh(5em, 100%);
      text-align: center;
      display: flex;
      align-item: center;
      justify-content:center;
      line-height:2em;
      .gotopay_button_style {
        @include sc(.7em, #fff);
        font-weight: 700;
      }
    }
    .gotopay_acitvity {
      background-color: #4cd964;
    }
  }
  .cart_food_list {
    position: fixed;
    width: 100%;
    padding-bottom: 2em;
    z-index: 12;
    bottom: 0;
    left: 0;
    background-color: #fff;
    header {
      @include fj;
      align-item: center;
      padding: .3em .6em;
      background-color: #eceff1;
      svg {
        @include wh(.6em, .6em);
        vertical-align: middle;
      }
      h4 {
        @include sc(.7em, #666);
      }
      .clear_cart {
        @include sc(.6em, #666)
      }
    }
    .cart_food_details {
      background-color: #fff;
      max-height: 20em;
      overflow-y: auto;
      .cart_food_li {
        @include fj;
        padding: .6em .5em;
        .cart_list_num {
          width: 55%;
          p:nth-of-type(1) {
            @include sc(.6em, #666);
            font-weight: bold;
          }
          p:nth-of-type(2) {
            @include sc(.4em, #666)
          }
        }
        .cart_list_price{
          font-size: 0;
          span:nth-of-type(1){
            @include sc(.6rem, #f60);
            font-family: Helvetica Neue,Tahoma;

          }
          span:nth-of-type(2){
            @include sc(.7rem, #f60);
            font-family: Helvetica Neue,Tahoma;
            font-weight: bold;
          }
        }
        .cart_list_control {
          display: flex;
          align-item: center;
          span {
            display: flex;
            align-item: center;
            justify-content: center;
          }
          svg {
            @include wh(.9em, .9em);
            fill: #3190e8;
          }
          .specs_reduce_icon {
            fill: #999;
          }
          .cart_num {
            @include sc(.65em, #666);
            min-width: 1em;
            text-align: center;
            font-family: Helvetica Neue,Tahoma;
          }
        }
      }
    }
  }
  .screen_cover {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.3);
    z-index: 11;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
  .toggle-cart-enter-active, .toggle-cart-leave-active {
    transition: all .3s ease-out;
  }
  .toggle-cart-enter, .toggle-cart-leave-active {
    transform: translateY(100%)
  }
  .router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s;
  }
  .router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2em, 0, 0);
    opacity: 0;
  }
</style>
