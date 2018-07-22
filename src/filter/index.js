import Vue from 'vue'
Vue.filter('getQuestionType', function (value) {
  let questionType = {
    0: '选择题',
    1: '填空题',
    2: '问答题'
  }
  return questionType[Number(value)]
})
