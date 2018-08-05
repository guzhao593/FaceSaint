<template>
  <div>
    <f-header :title="knowledgeName"></f-header>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import FHeader from 'common/f-header'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    name: 'KnowledgeDetails',
    components: {
      FHeader
    },
    data () {
      return {
      }
    },
    computed: {
      knowledgeName () {
        return this.$store.state.knowledgeName
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'style/var.scss';
  div{
    margin-top: .6rem;
    height: calc(100vh - 1.2rem);
  }
</style>
