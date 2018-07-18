<template>
  <section>
    <f-header :showGoBack="false"></f-header>
    <f-classify></f-classify>
  </section>
</template>
<script>
import FHeader from 'common/f-header'
import FClassify from 'common/f-classify'
export default {
  name: 'Main',
  components: {
    FHeader,
    FClassify
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  section{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
