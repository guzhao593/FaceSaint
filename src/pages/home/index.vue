<template>
  <section>
    <main>
      <router-view></router-view>
    </main>
    <f-footer></f-footer>
  </section>
</template>
<script>
  import FFooter from 'common/f-footer'
  export default {
    name: 'Home',
    components: {
      FFooter
    },
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
    main{
      height: calc(100vh - .6rem);
      background: #000;
    }
  }
</style>
