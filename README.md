# @microflash/preset

A modern CSS preset

- [What's this?](#whats-this)
- [Install](#install)
- [Use](#use)
- [Credits](#credits)
- [License](#license)

## What's this?

`@microflash/preset` is a CSS reset to baseline the browser styles to give you a uniform foundation for building your custom styles on top of it.

## Install

In Node.js, install with [npm](https://docs.npmjs.com/cli/install):

```sh
npm install @microflash/preset
```

In Deno, with [esm.sh](https://esm.sh/):

```js
import preset from "https://esm.sh/@microflash/preset"
```

In browsers, with [esm.sh](https://esm.sh/), [unpkg.com](https://unpkg.com) or [jsdelivr.net](https://jsdelivr.net):

```css
<link rel="stylesheet" href="https://esm.sh/@microflash/preset">
<link rel="stylesheet" href="https://unpkg.com/@microflash/preset">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@microflash/preset">
```

## Use

In Node.js or Deno, importing the CSS in the entrypoint file of your application should include the `@microflash/preset` in the final CSS bundle. Make sure that this is the first CSS import before including any other CSS files.

If you're using Sass, use `https://esm.sh/@microflash/preset/scss` in the main Sass file before any other rules.

In browser, including the `<link>` before any other stylesheet should do the trick.

## Credits

- [@joshwcomeau](https://github.com/joshwcomeau) for [My Custom CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/)
- [@KittyGiraudel](https://github.com/KittyGiraudel) for [Using calc to figure out optimal line-height](https://kittygiraudel.com/2020/05/18/using-calc-to-figure-out-optimal-line-height/)
- [@jgthms](https://github.com/jgthms) for [minireset.css](https://github.com/jgthms/minireset.css)
- [@EllyLoel](https://github.com/EllyLoel) for [reset.css](https://gist.github.com/EllyLoel/4ff8a6472247e6dd2315fd4038926522)

## License

[MIT](./LICENSE.md)
