<template>
  <div>
    <f-header :title="knowledgeName"></f-header>
    <div class="details">
      <div class="details-classify">
        <div 
          v-for="(item, key) in classify"
          :key="key"
          :class="{active: activeKey === key}"
          @click="handleClassify(key)"
        >
        {{item.name}}
        </div>
      </div>
      <div
        v-if="activeKey === 0"
        class="details-classify-children"
      >
        <div 
          v-for="(item, key) in classifyChildren"
          :key="key"
          :class="{active: activeChildrenKey === key}"
          @click="handleClassifyChildren(key)"
        >
        {{item.name}}
        </div>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>
      </div>
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
      knowledgeName: decodeURIComponent(this.$route.query.knowledgeName),
      classify:[
        {name: '面试题'},
        {name: '基础知识'},
        {name: '相关文章'}
      ],
      classifyChildren:[
        {name: '综合'},
        {name: '选择题'},
        {name: '填空题'},
        {name: '解答题'}
      ],
      activeKey: 0,
      activeChildrenKey: 0,
      swiper: null
    }
  },
  mounted () {
    this.swiper = new Swiper('.swiper-container', {
      initialSlide: 0
    })
  },
  watch: {
    'swiper.activeIndex' (val) {
      this.activeKey = val
    }
  },
  methods: {
    handleClassify (key) {
      this.activeKey = key
      this.swiper.slideTo(key, 500)
    },
    handleClassifyChildren (key) {
      this.activeChildrenKey = key
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'style/var.scss';
  .details{
    margin-top: .6rem;
    .details-classify{
      display: flex;
      justify-content: space-between;
      div{
        flex: 1;
        height: .4rem;
        line-height: .4rem;
        text-align: center;
        font-size: .16rem;
        color: #333;
        border-bottom: 1px solid #eee;
      }
      div:last-child{
        border-right: 0 none;
      }
      .active{
        border-bottom: 1px solid $main-color;
        color: $main-color;
      }
    }
  }
  .details-classify-children{
    display: flex;
    justify-content: space-between;
    div{
      flex: 1;
      height: .35rem;
      line-height: .35rem;
      text-align: center;
      font-size: .16rem;
      color: #333;
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      background: #fff;
    }
    div:last-child{
      border-right: 0 none;
    }
    .active{
      background: #efefef;
    }
  }

  .swiper-container {
    width: 100%;
    height: calc(100vh - 1.6rem);
    overflow: auto;
    .swiper-slide{
      height: 100vh;
    }
  }  
</style>
