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
  props: {
    question: Object
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
