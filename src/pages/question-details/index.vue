<template>
  <div>
    <header>
      <f-question-details :type="question.type"></f-question-details>
      {{question.title}}
    </header>
  </div>
</template>
<script>
import FQuestionDetails from 'common/f-question-type'
export default {
  name: 'QuestionDetails',
  components: {
    FQuestionDetails
  },
  props: {
    question: Object
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
  div{
    padding: .066667rem .133333rem;
    header{
      line-height: .4rem;
    }
  }
</style>
