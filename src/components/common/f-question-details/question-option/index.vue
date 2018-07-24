<script>
export default {
  name: 'QuestionOption',
  props: {
    question: Object
  },
  data () {
    return {
      selectAnswer: this.question.answer.length === 1 ? '' : []
    }
  },
  methods: {
    handleSelect (option) {
      if (this.question.answer.length === 1) {
        this.selectAnswer = option
      } else {
        this.selectAnswer.indexOf(option) === -1 ? this.selectAnswer.push(option) : this.selectAnswer.splice(this.selectAnswer.indexOf(option), 1)
      }
    }
  },
  render (h) {
    let {type, options, answer} = this.question
    if (Number(type) === 0) {
      const optionList = options.map((option, key) =>{
           return <div key={key} class="option">
                    <input
                      type={answer.length === 1 ? 'radio' : 'checkbox'}
                      name='option'
                      value={option.option}
                      id={option.option}
                    ></input>
                    <label for={option.option} onClick={this.handleSelect.bind(this, option.option)}>
                      <i class={this.selectAnswer.includes(option.option) ? 'selected' : ''}>{option.option}</i>
                      <span class={this.selectAnswer.includes(option.option) ? 'selected' : ''}>{option.content}</span>
                    </label>
                  </div>
                })
      return <section>{optionList}</section>
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
        border-color: $main-color;
        color: $main-color;
      }
    }
  }
</style>
