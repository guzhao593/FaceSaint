<template>
  <section>
    <header>面圣</header>
    <main>知识点</main>
    <footer>首页</footer>
  </section>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  section{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    header{
      height: .6rem;
      background: #58bc58;
    }
    main{
      flex: 1;
      background: #000;
    }
    footer{
      height: 1.333333rem;
      border-top: 1px solid #333;
    }
  }
</style>
