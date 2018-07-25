<template>
  <span :style="{color: typeColor(type)}">
    [{{type | getQuestionType}}]
  </span>
</template>
<script>
export default {
  name: 'QuestionType',
  props: {
    type: null
  },
  methods: {
    typeColor (type) {
      return ['#ff5400', '#1e96d2', '#008000', '#9932CC'][type]
    },
  }
}
</script>
