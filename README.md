# ConverJS

Parse, convert strings, numbers etc. with ease.!

## Stats
![npm version](https://img.shields.io/npm/v/converjs) ![license](https://img.shields.io/npm/l/converjs) ![release](https://img.shields.io/github/release-date/TheMarci/converjs) ![code size](https://img.shields.io/github/languages/code-size/TheMarci/converjs)
![gh forks](https://img.shields.io/github/forks/TheMarci/converjs?style=social) ![gh stars](https://img.shields.io/github/stars/TheMarci/converjs?style=social)

## Before Installation
`npm init -y`

## Installation

`npm i converjs`

## Usage

```js
const converjs = require("converjs/conver.js");

const conver = new converjs();

// Methods   

conver.jsonParse('{"fruit": "apple"}');
// Result: { fruit: 'apple' }

conver.jsonStringify({fruit: "apple"});
// Result: {"fruit": "apple"}

conver.toCelsius(50);
// Result: 10

conver.toFahrenheit(10);
// Result: 50

conver.HexToRgb("#bf5e45");
// Result: { r: 191, g: 94, b: 69 }

conver.RgbToHex(191, 94, 69);
// Result: #bf5e45

conver.TextToBinary("Cool");
// Result: 1000011 1101111 1101111 1101100

conver.BinaryToText("1000011 1101111 1101111 1101100");
// Result: Cool

conver.DateToMs("2021-06-20 16:35");
// Result: 1624199700000

conver.MsToDate(1624199700000);
// Result: 20/06/2021, 16:35:00

conver.Base64Encode("You're cool!");
// Result: WW91J3JlIGNvb2wh

conver.Base64Decode("WW91J3JlIGNvb2wh");
// Result: You're cool!

conver.Currency({
    price: 100,
    from: "USD",
    to: "EUR"
})
// Result: 84.3028 (This might change when you try it.)

conver.FileStream({
  text: "I'm cool!",
  filename: "cool",
  exportAs: "txt" // or in any file format
})
// Result: A file.

conver.MDtoHTML("# I'm a big heading.")
// Result: <h1>I'm a big heading.</h1>
// This markdown parser currently supports:
/*
* All heading from h1 to h6 / #,##,### etc.
* Bold and Italic / *asd* , **asd**
* <strong><em> / ***asd***
* <blockqoute> / >
* <code> / `const me = require('you')`
* Links / [GOOGLE](https://www.google.com "MY BEST FRIEND")
* Images / ![GOOGLE](https://napidroid.hu/wp-content/uploads/google-logo-header-01.jpg)
*/

conver.HTMLtoMD("<h1>I'm a big heading.</h1>")
// Result: # I'm a big heading.
// This parser basically supports the same things as above.

conver.Length({
  length: 10,
  from: "km",
  to: "miles"
})
// Result: 6.2139999999999995
/* Options
* from    to
* miles   km
* km      miles
* km      m
* km      cm
* km      mm
* m       km
* m       cm
* m       mm
* cm      m
* cm      mm
* miles   feet
* miles   yards
*/
conver.Mass({
  mass: 10,
  from: "kg",
  to: "g"
})
// Result: 10000
/* Options
* from    to
* t       kg
* kg      g
* g       kg
* g       mg
* mg      g
* kg      mg
* mg      kg
* g       cg
* cg      mg
*/

conver.Data({
  value: 10,
  from: "gb",
  to: "mb"
})
// Result: 10240
/* Options
* from    to
* tb      gb
* gb      mb
* gb      kb
* gb      b
* mb      kb
* kb      b
*/
```
## License
[MIT](https://github.com/TheMarci/converjs/blob/main/LICENSE)

## Contributing
To make a pull request go to: https://github.com/TheMarci/converjs/pulls  
You find a bug? Go to: https://github.com/TheMarci/converjs/issues  

## Donate
[Buy me a basketball](https://www.buymeacoffee.com/themarci)

And that's all for now. Thanks for downloading! 👍
