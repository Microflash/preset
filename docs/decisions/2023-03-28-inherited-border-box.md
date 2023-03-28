# Inherited `border-box`

## Status

ACCEPTED ([6862aba](https://github.com/Microflash/preset/commit/6862aba9283a6e4557b6c246bfe1a244f4053404))

## Context

There are two common opinions on how to apply the `box-sizing` on a document.

1. Apply it on all elements.
   
	 ```css
	 *, ::before, ::after { box-sizing: border-box; }
	 ```

2. Apply it on the document root and inherit it from there.
   
	 ```css
	 :where(html) { box-sizing: border-box; }
	 *, ::before, ::after { box-sizing: inherit; }
	 ```

In a new project, both approaches should work equally well. However, for incremental migrations from older styles, the later approach works better since it gives you flexibility to override the `box-sizing` on certain elements depending on your need.

## Decision

The `box-sizing` is applied on the document root, that is `:where(html)`, and is inherited by every element through wildcard selectors `*, ::before, ::after`.

## Consequences

- 👍 Enables incremental migration of the `box-sizing` to `border-box`.
