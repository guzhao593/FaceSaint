import Vue from 'vue'
Vue.filter('getQuestionType', function (value) {
  let questionType = {
    0: '单选题',
    1: '填空题',
    2: '问答题',
    3: '不定项选择题'
  }
  return questionType[Number(value)]
})
