<template>
  <section>
    <div 
      v-for="(item, key) of list"
      :key="key"
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
  }
}
</script>
<style lang="scss" scoped>
  .list-item{
    height: .533333rem;
    line-height: .533333rem;
    border-bottom: 1px solid #ccc;
    padding: 0 .266667rem;
    display: flex;
    justify-content: space-between;
    .icon-box{
      svg{
        margin-left: .133333rem;
      }
    }
  }
</style>
