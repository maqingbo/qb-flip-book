## qb-flip-book

For creating page turning effect, base on https://github.com/Nodlik/StPageFlip.

## Install

```bash
npm install qb-flip-book --save
```

## Use

```html
<div id="bookWrap">
  <div class="book-page"></div>
  <div class="book-page"></div>
  <div class="book-page"></div>
  <div class="book-page"></div>
  <div class="book-page"></div>
</div>

<script>
  import { PageFlip } from 'qb-flip-book'
  import 'qb-flip-book/dist/style.css'

  const element = document.getElementById('bookWrap')
  const pageFlip = new PageFlip(element, {
    width: 500,
    height: 700,
    showCover: false,
    MaxShadowOpacity: 1,
    flippingTime: 400
  })
  pageFlip.loadFromHTML(document.querySelectorAll('.book-page'))
</script>
```
