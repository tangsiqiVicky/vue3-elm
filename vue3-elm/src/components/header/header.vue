<template>
  <header id="headerTop">
    <slot name="logo"></slot>
    <slot name="search"></slot>
    <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255); stroke-width:2"></polyline>
      </svg>
    </section>
    <section class="title_head ellipsis" v-if="name">
      <span class="title_text">{{name}}</span>
    </section>
    <router-link :to="userInfo? 'profile': 'login'" class="head_login" >
      <svg class="user_avatar" v-if="userInfo">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
      </svg>
      <span class="login_span" v-else>登录|注册</span>
    </router-link>
    <slot name="edit"></slot>
    <slot name="msite-title"></slot>
    <slot name="changecity"></slot>
    <slot name="changeLogin"></slot>
  </header>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'headerTop',
  props: ['name', 'goBack', 'signinUp'],
  computed: {
    ...mapState([
      'userInfo'
    ])
  },
  mounted () {

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../style/mixin';
  #headerTop {
    background-color: $blue;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    @include wh(100%,1.95em)
    .head_goback {
      left: 0.4em;
      @include wh(0.6em, 1em);
      @include ct;
      line-height: 2.2em;
      margin-left: .4em;
    }
    .title_head {
      @include center;
      width: 50%;
      color: #fff;
      text-align: center;
      .title_text {
        @include sc(0.8em, #fff);
        text-align: center;
        font-weight: bold
      }
    }
    .head_login {
      right: 0.55em;
      @include sc(0.8em, #fff);
      @include ct;
      .login_span {
        color: #fff
      }
    }
  }
</style>
