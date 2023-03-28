# Using `:where()` pseudo-class function

## Status

ACCEPTED ([a3d9d8e](https://github.com/Microflash/preset/commit/a3d9d8e0c7d6cab2f47c88a567e5133068652af4))

## Context

Since the aim of `preset` is to baseline the browser styles, it is going to be used in the first layer of cascade. As such the specificity of the selectors used by `preset` should be minimum to allow its users easily apply their own styles without resorting to needless overrides.

## Decision

Except for wildcard selector, all the other selectors will be wrapped in the `:where()` function to lower their specificity. For the document, `:root` was not chosen because its specificity is higher than `:where(html)`.

## Consequences

- 👍 All the selectors wrapped in the `:where()` function have 0 [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity).
- 👍 The selector list in the `:where()` function is a [forgiving selector list](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list).
