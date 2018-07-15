<template>
  <header>
    <aside>首页</aside>
    <section>
      <i class="iconfont icon-sousuo"></i>
    </section>
  </header>
</template>
<script>
export default {
  name: 'FHeader',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  @import 'style/var.scss';
  header{
    display: flex;
    justify-content: space-between;
    line-height: .6rem;
    height: .6rem;
    background: $main-color;
    aside{
      text-indent: .266667rem;
      color: #fff;
    }
    section{
      margin-right: .266667rem;
      .iconfont{
        color: #fff;
      }
    }
  }
</style>
