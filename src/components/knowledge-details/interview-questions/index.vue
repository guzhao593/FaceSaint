<template>
  <div>
    <ul 
      v-for="(question, key) in questionList" 
      :key="key"
    >
      <li @click="routerTo(question)">
        <f-question-details :type="question.type"></f-question-details>
        <span v-html="question.title"></span>
      </li>
    </ul>
  </div>
  
</template>
<script>
import FQuestionDetails from 'common/f-question-type'
export default {
  name: 'InterviewQuestions',
  components: {
    FQuestionDetails
  },
  data () {
    return {
      questionList: [
        {
          type: 3,
          title: '元素的Alt和title有什么异同，选出正确的说法？',
          options: [
            {option: 'A', content: 'Alt和title同时设置的时候，Alt作为图片的代替文字出现title是图片的解释文字'},
            {option: 'B', content: 'Alt和title同时设置的时候，title作为图片的代替文字出现，Alt是图片的解释文字'},
            {option: 'C', content: '以上说法都不正确'},
          ],
          answer: 'AB',
          analysis: 'alt的作用是代替图片，title是鼠标停留在图片上显示的文字'
        },
        {
          type: 1,
          title: '合理的页面布局中常听过结构与表现分离，那么结构是<span class="space">①</span>，表现是<span class="space">②</span>。',
          answer: ['html', 'css'],
          analysis: ''
        },
        {
          type: 2,
          title: '你做的页面在哪些浏览器测试过？这些浏览器的内核分别是什么？经常遇到的浏览器的兼容性有哪些？怎么会出现？解决的方法是什么？'
        },
        {
          type: 2,
          title: '分别写出3个块级元素和内联元素。'
        },
        {
          type: 0,
          title: '英文字母全部转为大写正确的是()'
        },
        {
          type: 2,
          title: 'html5有哪些新特性？如何处理HTML5新标签的浏览器兼容性问题？如何区分HTML和HTML5？'
        },
        {
          type: 2,
          title: '简述Doctype的作用；区分严格模式与混杂模式有何意义？如何触发这两种模式？'
        },
        {
          type: 2,
          title: '有没有关注HTML5和CSS3？如有请简单说一些您对他们的了解情况！'
        }
      ],
      questionTotal:25
    }
  },
  methods: {
    typeColor (type) {
      return ['#ff5400', '#1e96d2', '#008000'][type]
    },
    routerTo (question) {
      this.$router.push({path: '/knowledge/question-details', query: question})
    }
  }
}
</script>
<style lang="scss" scoped>
  @import 'style/var.scss';
  ul{
    li{
      position: relative;
      line-height: .4rem;
      @include onePx(#c7c7c7, bottom);
      padding: .066667rem .133333rem;
      margin-bottom: 1px;
      &:active{
        background: #f3f3f3;
      }
    }
  }
</style>
