# in-browser-language

This module is designed to be used with browserify or other CJS bundler.

```npm i in-browser-language --save```

## How it works

The module checks for (in order)

* `window.navigator.language`
* `window.navigator.languages`
* `window.clientInformation.browserLanguage`
* `window.clientInformation.userLanguage`

Some systems / browser may actually returns the language of the OS instead of the language of the browser.
There is no way around this issue but it can be mitigated by allowing the user to change its language.

## Methods

**list()**

Returns of the languages.

**pick(proposedLanguages, defaultLanguage)**

Pick the first languages found both in the `proposedLanguages` array and the list of languages supported by the browser.
If there is no match, the defaultLanguage is returned.

```js
var browserLanguage = require('in-browser-language');

console.log(browserLanguage.list());
// returns ['fr', 'en']

console.log(browserLanguage.pick(['pl', 'ja', 'en', 'fr']));
// returns 'fr' as 'fr' is the first declared by the browser

console.log(browserLanguage.pick(['pl', 'ja'], 'pl'));
// returns 'pl' as there is no match

console.log(browserLanguage.pick(['pl', 'ja']));
// returns null as there is no match and no defaultLanguage
```

