# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [6.0.0] - 2025-05-03

### Added

- **Breaking** `-webkit-font-smoothing: antialiased` to make the font rendering on macOS consistent with operating system behavior. This may impact the way font is rendered on the browsers on macOS which still use subpixel antialiasing even though macOS itself has stopped using it since macOS Mojave since 2018.
- Inherit `font-feature-settings` and `font-variation-settings` on form elements

### Changed

- Make `interpolate-size: allow-keywords` an opt-in to prevent unintended behavior in websites

## [5.0.4] - 2025-01-05

### Changed

- Use a less opinionated PostCSS configuration

### Fixed

- `font-feature-settings` for headings, `td`, `math`, and `time` elements

## [5.0.3] - 2024-12-21

### Changed

- Set cursor for disabled elements with `[role="button"]`

## [5.0.2] - 2024-11-19

### Changed

- Set `stroke-linecap: round` and `stroke-linejoin: round` only when they are not already set on SVG

### Fixed

- Selector that ensures button content is not selectable

## [5.0.1] - 2024-10-02

### Removed

- Invalid `font-feature-settings` injected by PostCSS

## [5.0.0] - 2024-10-02

### Added

- `interpolate-size` on document to allow animating intrinsic sizing keywords such as `height`, `width` and so on. Progressive enhancement, only supported by Chrome for now.
- Balance text to avoid orphans for `li` and `figcaption` elements
- Position numbers on baseline for headings, table cells, `math` element and `time` element with timestamp. Progressive enhancement, available if font supports this OpenType feature.
- Sets numbers at same size for table cells, `math` element and `time` element with timestamp. Progressive enhancement, available if font supports this OpenType feature.

### Changed

- **Breaking change** Rename `--preset-scroll-padding` as `--preset-scroll-offset`
- Apply `scroll-margin-block` on `:target` regardless of motion preference
- Add `rlh` fallback for `scroll-margin-block` for supported browsers

## [4.1.0] - 2024-07-23

### Added

- Opt into user's color scheme preferences with `color-scheme: light dark`

## [4.0.3] - 2024-07-09

No user-facing changes. Just polishing internal variable for outline transition.

## [4.0.2] - 2024-06-11

### Fixed

- Stops hiding the hanging punctuation on `input` and `textarea` elements

## [4.0.1] - 2024-06-07

Superceded by `4.0.2`

## [4.0.0] - 2024-06-01

### Added

- Allows overriding the outline transition with `--preset-outline-transition` property
- Applies `field-sizing: content` on `select` and `textarea` elements to resize them based on content

### Changed

- Stops applying the transitions on devices using low refresh rate screens  (such as e-readers)

## [3.1.0] - 2024-02-25

### Added

- New transition-timing-function for `outline-offset` based on [linear() easing function](https://developer.chrome.com/docs/css-ui/css-linear-easing-function) for supported browsers

## [3.0.0] - 2024-02-25

### Changed

- **Breaking Change**: `stroke-color` is no longer being set on SVGs (mainly to allow design systems to enforce this on icon sets and illustrations). This also removes support for `--preset-stroke-color` property.

## [2.0.0] - 2024-01-15

### Changed

- **Breaking Change**: Media elements (`img`, `svg`, `canvas`, `audio`, `video`, `iframe`, `embed`, `object`) are no longer forced to `display: block`. Instead, a gentler [set of opinions](https://x.com/csswizardry/status/1717841334462005661) are now applied on them. See 08876402115d8467a6916d1a02154e864edb8f14

## [1.5.1] - 2024-01-15

### Changed

- Reset now excludes SVGs with `class` attribute
- `cursor: not-allowed` is now applied on `input[type=image][disabled]` elements as well

## [1.5.0] - 2024-01-15

### Added

- Enables smooth scrolling for nested scrollable elements
- [Hangs the punctuations](https://developer.mozilla.org/en-US/docs/Web/CSS/hanging-punctuation) outside the line box

### Changed

- Sets `margin: 0` for every element except `dialog`
- Removes `display: hidden` on elements that are [hidden until found](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden#the_hidden_until_found_state)

## [1.0.3] - 2023-10-22

### Added

- A `min-block-size` for textareas with no `rows` attribute to make sure they are not tiny

## [1.0.2] - 2023-10-22

### Added

- `text-wrap: pretty` on paragraph elements

## [1.0.1] - 2023-08-25

### Removed

- `display: none` for undefined custom elements

Depending on your browser targets, you can do the following instead.

- Use [Declarative Shadow DOM](https://caniuse.com/declarative-shadow-dom) and polyfill it in unsupported browsers, or
- Hide the element visually (using `visibility: hidden`) until JavaScripts loads
  ```css
  /* no visibility for undefined custom elements by default */
  :not(:defined) {
    visibility: hidden;
  }
  ```

## [1.0.0] - 2023-07-27

### Added

- `display: none` for undefined custom elements to prevent rendering them prematurely.
- `text-wrap: balance` for headings for more elegant handling of widows; see https://ishadeed.com/article/css-text-wrap-balance/
- `display: list-item` for summary element
- Default backdrop blur on dialog element
- Document overflow is now hidden when dialog is open (experimental)
- Table captions are now positioned at bottom by default

### Changed

- `box-sizing` for every element is set to `border-box`; earlier it was inheriting from parent (leading to unintended behavior in children due to cascade)
- Stroke customization is applied only on SVGs without fill; earlier it was being applied to all SVGs.

### Removed

- `font-smoothing` has been removed; see https://www.zachleat.com/web/font-smooth/
- `list-style: none` for lists with `[role=list]`

### API

Some of the properties in the reset are now customizable through CSS properties. You can define these properties in `:root` or `html` scope.

- `--preset-line-height` to override the `line-height` (fallback value: `calc(0.3rem + 2ex + 0.3rem)`)
- `--preset-tab-size` to control the indentation width of code block tabs (fallback value: `2`)
- `--preset-stroke-color` to override the stroke color of SVG with no fill (fallback value: `currentColor`)
- `--preset-dialog-backdrop-filter` to override the backdrop filter of the dialog (fallback value: `blur(25px)`)
- `--preset-table-caption-side` to customize caption position of a table caption (fallback value: `bottom`)

[6.0.0]: https://github.com/Microflash/preset/compare/5.0.4...6.0.0
[5.0.4]: https://github.com/Microflash/preset/compare/5.0.3...5.0.4
[5.0.3]: https://github.com/Microflash/preset/compare/5.0.2...5.0.3
[5.0.2]: https://github.com/Microflash/preset/compare/5.0.1...5.0.2
[5.0.1]: https://github.com/Microflash/preset/compare/5.0.0...5.0.1
[5.0.0]: https://github.com/Microflash/preset/compare/4.1.0...5.0.0
[4.1.0]: https://github.com/Microflash/preset/compare/4.0.3...4.1.0
[4.0.3]: https://github.com/Microflash/preset/compare/4.0.2...4.0.3
[4.0.2]: https://github.com/Microflash/preset/compare/4.0.1...4.0.2
[4.0.1]: https://github.com/Microflash/preset/compare/4.0.0...4.0.1
[4.0.0]: https://github.com/Microflash/preset/compare/3.1.0...4.0.0
[3.1.0]: https://github.com/Microflash/preset/compare/3.0.0...3.1.0
[3.0.0]: https://github.com/Microflash/preset/compare/2.0.0...3.0.0
[2.0.0]: https://github.com/Microflash/preset/compare/1.5.1...2.0.0
[1.5.1]: https://github.com/Microflash/preset/compare/1.5.0...1.5.1
[1.5.0]: https://github.com/Microflash/preset/compare/1.0.3...1.5.0
[1.0.3]: https://github.com/Microflash/preset/compare/1.0.2...1.0.3
[1.0.2]: https://github.com/Microflash/preset/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/Microflash/preset/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/Microflash/preset/releases/tag/1.0.0
