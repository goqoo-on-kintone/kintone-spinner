import 'kintone-ui-component/src/style/spinner.css'

export default class {
  constructor() {
    this.spinner = document.createElement('div')
    this.spinner.innerHTML = `
    <div id="spinner" class="kuc-spinner-outer">
      <div class="kuc-spinner">
        <div class="kuc-loader" />
      </div>
    </div>`
    this.spinner.style.visibility = 'hidden'
  }
  render() {
    return this.spinner
  }
  show() {
    this.spinner.style.visibility = 'visible'
  }
  hide() {
    this.spinner.style.visibility = 'hidden'
  }
}
