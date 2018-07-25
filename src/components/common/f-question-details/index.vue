<template>
  <div class="question">
    <header>
      <f-question-type :type="question.type"></f-question-type>
      {{question.title}}
    </header>
    <question-option :question="question" :isSee="isSee"></question-option>
    <div v-if="!isSee" class="see" @click="isSee = !isSee">查看答案</div>
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
  }
</style>
