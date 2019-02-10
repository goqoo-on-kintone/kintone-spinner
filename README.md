# kintone Spinner
A spinning activity indicator for kintone

##  Install

```
$ npm install --save kintone-spinner
 or
$ yarn add kintone-spinner
```

## Usage

```js
import Spinner from 'kintone-spinner'

kintone.events.on(['app.record.index.show'], event => {
  const spinner = new Spinner()
  document.body.appendChild(spinner.render())

  const button = document.createElement('button')
  button.innerText = 'Spin!'
  button.onclick = async () => {
    const seconds = Number(prompt('Please input seconds', 3))
    if (!seconds) {
      return
    }
    spinner.show()
    await new Promise(resolve => setTimeout(resolve, seconds * 1000))
    spinner.hide()
    alert('Finished!')
  }

  kintone.app.getHeaderMenuSpaceElement().appendChild(button)
})
```
