# kintone Spinner
A spinning activity indicator for kintone

##  Install

### Direct attachment

Attach following file into kintone app setting

```
dist/kintone-spinner.min.js
```

### CDN

Attach following URL into kintone app setting (Hosted by [jsDelivr](https://www.jsdelivr.com/package/npm/kintone-spinner))

#### latest version
```
https://cdn.jsdelivr.net/npm/kintone-spinner
```

#### specific version
```
https://cdn.jsdelivr.net/npm/kintone-spinner@x.x.x
```

### NPM

```
$ npm install --save kintone-spinner
 or
$ yarn add kintone-spinner
```

```js
import Spinner from 'kintone-spinner'
```

## Usage

```js
kintone.events.on('app.record.index.show', event => {
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
![result](https://github.com/goqoo-on-kintone/kintone-spinner/blob/media/kintone-spinner.gif)


## Note
This library uses Spinner of kintone UI Component without  React.
https://kintone.github.io/kintone-ui-component/Reference/Spinner/
