<template>
  <header id="headerTop">
    <slot name="logo"></slot>
    <slot name="search"></slot>
    <section class="head_goback" ></section>
    <section class="title_head">
      <span class="title_text">{{name}}</span>
    </section>
    <section class="head_login">
      <span class="login_span">登陆</span>
    </section>
  </header>
</template>
<script>
export default {
  name: 'headerTop',
  props: ['name']
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
