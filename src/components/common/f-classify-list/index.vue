<template>
  <section>
    <div 
      v-for="(item, key) of list"
      :key="key"
      @click="toLink(item)"
    >
      <div class="list-item">
        <span>{{item.name}}</span>
        <div class="icon-box">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jichu"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-mianshi"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bokezhuanjia"></use>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'FClassifyList',
  data () {
    return {
      list: [
        {
          name: 'css基础'
        },
        {
          name: 'css基础'
        },
        {
          name: 'css基础'
        },{
          name: 'css基础'
        },{
          name: 'css基础'
        },{
          name: 'css基础'
        },{
          name: 'css基础'
        },{
          name: 'css基础'
        },{
          name: 'css基础'
        },{
          name: 'css基础'
        },{
          name: 'css基础'
        },{
          name: 'css基础'
        },{
          name: 'css基础'
        },{
          name: 'css基础'
        },{
          name: 'css基础'
        },{
          name: 'css基础'
        },{
          name: 'css基础'
        },
      ]
    }
  },
  methods: {
    toLink (item) {
      this.$store.commit('SELECT_KNOWLEDGE_NAME', item.name)
      this.$router.push({path: '/knowledge/knowledge-details', query: {knowledgeName: encodeURIComponent(item.name)}})
    }
  }
}
</script>
<style lang="scss" scoped>
  @import 'style/var.scss';
  .list-item{
    position: relative;
    height: .533333rem;
    line-height: .533333rem;
    padding: 0 .266667rem;
    margin-bottom: 1px;
    @include fj;
    @include onePx(#c7c7c7, bottom);
    &:active{
      background: #f3f3f3;
    }
    .icon-box{
      svg{
        margin-left: .133333rem;
      }
    }
    span{
      font-size: .186667rem;
    }
  }
</style>
