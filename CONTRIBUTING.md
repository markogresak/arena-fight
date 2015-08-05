# Contributing

This guide is a simplified version of [GitHub's Atom guide](https://github.com/atom/atom/blob/master/CONTRIBUTING.md).
I think it's great in general, although emojis are not a must, but they do add better visual recognition.

## Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally
* Consider starting the commit message with an applicable emoji:
    * :art: `:art:` when improving the format/structure of the code
    * :racehorse: `:racehorse:` when improving performance
    * :non-potable_water: `:non-potable_water:` when plugging memory leaks
    * :memo: `:memo:` when writing docs
    * :bug: `:bug:` when fixing a bug
    * :fire: `:fire:` when removing code or files
    * :green_heart: `:green_heart:` when fixing the CI build
    * :white_check_mark: `:white_check_mark:` when adding tests
    * :arrow_up: `:arrow_up:` when upgrading dependencies
    * :arrow_down: `:arrow_down:` when downgrading dependencies
    * :shirt: `:shirt:` when removing linter warnings

## Code Style Guide

Install [editorconfig](http://editorconfig.org/) in your editor or IDE.


### TypeScript

Programming is done in TypeScript because it provides great support for completions, which is a must for a productive workflow.

Code can be put anywhere in `./src`, but please follow existing structure to keep things nice and clean.

Use tslint. Project's tslint.json is based on file from [official TypeScript repository](https://github.com/Microsoft/TypeScript/blob/master/tslint.json).

### Sass / Scss

Styling is done in Sass / Scss, put stylesheets in `./src/sass`.

Use [scss-lint](https://github.com/brigade/scss-lint), if you can (requires ruby).

### Tests

This is a game, so we can't expect to have 100% coverage, but it would be great to test code if possible.

If writing tests:

 - Include tests in `./test` folder.
 - Treat `describe` as a noun or situation.
 - Treat `it` as a statement about state or how an operation changes state.

##### Example:

```js
describe('a dog', () => {
  it 'barks', () => {
    // spec here
  });

  describe 'when the dog is happy', () => {
    it 'wags its tail', () => {
      // spec here
    });
  });

});
```
