# TypeScript

## Notes for Microsoft's TypeScript
For more information: [TypeScript](https://www.typescriptlang.org/) 

## What is TypeScript?

- JavaScript and More
    TS adds additional syntax to JS to support a tighter integation with your editor. Catch errors early in your editor. 

- A Result You Can Trust
    TS code converts to JS which runs anywhere JS runs.

- Safety at Scale
    TS understands JS and uses type inference to give you great tooling without additional code.

## The Basic

### Static type-checking

Statics types systems decribe the shapes and behaviors of what our values will be when we run our programs. 

TypeScript will give us an error message before we run the code in the first place.

### Non-exception Failures

```js
const user = {
  name: "Daniel",
  age: 26,
};
user.location; // returns undefined
```

In TS, the following code produces an error about location not being defined. 

TypeScript catches a lot of legitimate bugs. For example:
- Typos
- uncalled functions
- basic logic errors

### Types for Tooling

TypeScript can catch bugs when we make mistakes in our code. That’s great, but TypeScript can also prevent us from making those mistakes in the first place.

### `tsc`, the TypeScript compiler

`npm install -g typescript`

