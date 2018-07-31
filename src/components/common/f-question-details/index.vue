<template>
  <div class="question">
    <header>
      <f-question-type :type="question.type"></f-question-type>
      <span v-html="question.title"></span>
    </header>
    <question-option :question="question" :isSee="isSee"></question-option>
    <div v-if="!isSee" class="see" @click="isSee = !isSee">查看答案</div>
    <div class="change-question">
      <div class="prev" @click="prev">上一题</div>
      <div class="total">1/20</div>
      <div class="next" @click="next">下一题</div>
    </div>
  </div>
</template>
<script>
import FQuestionType from 'common/f-question-type'
import QuestionOption from './question-option'
export default {
  name: 'QuestionDetails',
  components: {
    FQuestionType,
    QuestionOption
  },
  props: {
    question: Object
  },
  data () {
    return {
      isSee: false
    }
  },
  methods: {
    prev () {},
    next () {}
  }
}
</script>
<style lang="scss" scoped>
  @import 'style/var.scss';
  div.question{
    padding: .066667rem .133333rem;
    header{
      line-height: .4rem;
    }
    .see{
      height: .533333rem;
      line-height: .533333rem;
      text-align: center;
      background: #ddd;
      font-size: .186667rem;
      color: #333;
      border-radius: .04rem;
      &:active{
        background: $main-color;
      }
    }
    .change-question{
      position: absolute;
      bottom: .6rem;
      left: 0px;
      width: 100%;
      height: .45rem;
      line-height: .45rem;
      background: $main-color;
      color: #fff;
      @include fj;
      div{
        font-size: .186667rem;
      }
      .prev, .next{
        width: .8rem;
        text-align: center;
      }
    }
  }
</style>
