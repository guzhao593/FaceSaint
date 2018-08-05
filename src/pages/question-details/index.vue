<template>
  <f-question-details :question="question"></f-question-details>
</template>
<script>
import FQuestionDetails from 'common/f-question-details'
export default {
  name: 'QuestionDetails',
  components: {
    FQuestionDetails
  },
  data () {
    return {
      question: this.$store.state.questionInfo
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
