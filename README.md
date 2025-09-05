<img width="128" alt="Preset" src="icon.png">

[![npm](https://img.shields.io/npm/v/@microflash/preset)](https://www.npmjs.com/package/@microflash/preset)
[![license](https://img.shields.io/github/license/Microflash/preset)](./LICENSE.md)

A modern CSS preset

- [What's this?](#whats-this)
- [Install](#install)
- [Use](#use)
- [Browser support](#browser-support)
- [API](#api)
- [Credits](#credits)
- [License](#license)

## What's this?

`preset` is a CSS reset to baseline the browser styles. It gives you a uniform foundation to build your custom styles on top of.

## Install

In Node.js, install with [npm](https://docs.npmjs.com/cli/install):

```sh
npm install @microflash/preset
```

In Deno, with [unpkg.com](https://unpkg.com):

```js
import "https://unpkg.com/@microflash/preset";
```

In browsers, with [unpkg.com](https://unpkg.com) or [jsdelivr.net](https://jsdelivr.net):

```html
<link rel="stylesheet" href="https://unpkg.com/@microflash/preset">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@microflash/preset">
```

## Use

In Node.js or Deno, import the CSS in the entrypoint file of your application.

```js
import "@microflash/preset";
// or using URL import
import "https://unpkg.com/@microflash/preset";
```

Make sure that this is the first CSS import before including any other CSS files.

## Browser support

`preset` supports [modern browsers](https://browsersl.ist/#q=defaults).

## API

You can customize some aspects of `preset` through CSS properties. You can define these properties in `:root` or `html` scope.

- `--preset-line-height` (default: `calc(0.3rem + 2ex + 0.3rem)`) to set the line-height
- `--preset-tab-size` (default: `2`) to set the width of code block indentation
- `--preset-outline-transition` to set the transition applied on the outline
- `--preset-dialog-backdrop-filter` (default: `blur(25px)`) to set the backdrop filter of the dialog
- `--preset-table-caption-side` (default: `bottom`) to set caption position of a table caption
- `--preset-scroll-offset` (default: `3rem` or `3rlh` depending on browser support) to set `scroll-margin-block` for an element

## Credits

[Adam Argyle](https://github.com/argyleink/open-props/blob/45a735169c62544a176b1d95384aeaf00d81862e/src/extra/normalize.src.css#L1), [Andy Bell](https://andy-bell.co.uk/a-more-modern-css-reset/), [Elly Loel](https://gist.github.com/EllyLoel/4ff8a6472247e6dd2315fd4038926522), [Harry Roberts](https://twitter.com/csswizardry/status/1717841334462005661), [Jeremy Thomas](https://github.com/jgthms/minireset.css), [Jesús Ricarte](https://kittygiraudel.com/2020/05/18/using-calc-to-figure-out-optimal-line-height/), [Josh Comeau](https://www.joshwcomeau.com/css/custom-css-reset/), [Kevin Powell](https://www.youtube.com/watch?v=cCAtD_BAHNw)

## License

[MIT](./LICENSE.md)
