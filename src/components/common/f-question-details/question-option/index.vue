<script>
export default {
  name: 'QuestionOption',
  props: {
    question: Object,
    isSee: Boolean
  },
  data () {
    return {
      selectAnswer: this.question.answer.length === 1 ? '' : []
    }
  },
  methods: {
    handleSelect (option) {
      if (this.isSee) return
      if (this.question.type === 0) {
        this.selectAnswer = option
      } else {
        this.selectAnswer.indexOf(option) === -1 ? this.selectAnswer.push(option) : this.selectAnswer.splice(this.selectAnswer.indexOf(option), 1)
      }
    },
    setSelectOptionClass (option) {
      if (this.isSee) {
        return this.question.answer.includes(option) ? 'answer-option' : ''
      } else {
        return this.selectAnswer.includes(option) ? 'selected' : ''
      }
    }
  },
  render (h) {
    let {type, options, answer, analysis} = this.question
    if (Number(type) === 0 || Number(type) === 3) {
      const optionList = options.map((option, key) =>{
           return <div key={key} class="option">
                    <input
                      type={type === 0 ? 'radio' : 'checkbox'}
                      name='option'
                      value={option.option}
                      id={option.option}
                    ></input>
                    <label for={option.option} onClick={this.handleSelect.bind(this, option.option)}>
                      <i class={this.setSelectOptionClass(option.option)}>{option.option}</i>
                      <span class={this.setSelectOptionClass(option.option)}>{option.content}</span>
                    </label>
                  </div>
                })
          return (<section>
                    {optionList}
                    <div class="current-select">你的选择：<span>{this.selectAnswer}</span></div>
                    <div class="answer-box" v-show={this.isSee}>
                      <div class="answer">正确答案：<span>{answer}</span></div>
                      <div class="analysis">解析：{analysis}</div>
                    </div>
                  </section>)
    } else if (Number(type) === 1) {
      return <section></section>
    } else if (Number(type) === 2) {
      return <section></section>
    }
  }
}
</script>
<style lang="scss" scoped>
  @import 'style/var.scss';
  section{
    padding: 5px;
    .option{
      line-height: .4rem;
      margin-bottom: .133333rem;
      input{
        display: none;
      }
      label{
        display: block;
      }
      i{
        font-size: .16rem;
        margin-right: .133333rem;
        height: .4rem;
        line-height: .4rem;
        border: 1px solid #333;
        padding: 0 .133333rem;
        border-radius: .026667rem;
      }
      .selected{
        border-color: rgb(255, 84, 0);
        color: rgb(255, 84, 0);
      }
      .answer-option{
        border-color: $main-color;
        color: $main-color;
      }
    }
    .current-select{
      margin-bottom: .133333rem;
      span{
          color: rgb(255, 84, 0);
        }
    }
    .answer-box{
      .answer{
        margin-bottom: .133333rem;
        span{
          color: $main-color;
        }
      }
    }
  }
</style>
