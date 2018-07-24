<template>
  <div class="question">
    <header>
      <f-question-type :type="question.type"></f-question-type>
      {{question.title}}
    </header>
    <question-option :question="question"></question-option>
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
      aswer: ''
    }
  }
}
</script>
<style lang="scss" scoped>
  div.question{
    padding: .066667rem .133333rem;
    header{
      line-height: .4rem;
    }
  }
</style>
