<template>
  <div class="container">
    <f-menu></f-menu>
    <f-classify-list></f-classify-list>
  </div>
</template>
<script>
import FMenu from 'common/f-menu'
import FClassifyList from 'common/f-classify-list'
export default {
  name: 'FClassify',
  components: {
    FMenu,
    FClassifyList
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
  @import 'style/var.scss';
  .container{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    nav{
      background: #fff;
      border-bottom: .066667rem solid #CFA41E;
    }
    section{
      position: fixed;
      top: 1.466667rem;
      width: 100vw;
      height: calc(100vh - 2rem);
      overflow: auto;
      background: #fff;
    }
  }
</style>
