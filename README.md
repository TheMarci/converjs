# ConverJS

Parse, convert strings, numbers etc. with ease!

## Stats

![npm version](https://img.shields.io/npm/v/converjs) ![license](https://img.shields.io/npm/l/converjs) ![release](https://img.shields.io/github/release-date/TheMarci/converjs) ![code size](https://img.shields.io/github/languages/code-size/TheMarci/converjs)
![gh forks](https://img.shields.io/github/forks/TheMarci/converjs?style=social) ![gh stars](https://img.shields.io/github/stars/TheMarci/converjs?style=social)

## Changelog

[CHANGELOG.md](https://github.com/TheMarci/converjs/blob/main/CHANGELOG.md)

## Requirements

- Node.js (any recent version)

## Installation

```bash
npm init -y
npm i converjs
```

## TypeScript Support

ConverJS includes full TypeScript definitions. Simply import and use:

```typescript
import Conver from 'converjs';

const conver = new Conver();
// Full type support available
```

## Usage

```js
const Conver = require("converjs");
const conver = new Conver();

// JSON Conversion
conver.jsonParse('{"fruit": "apple"}');
// Result: { fruit: 'apple' }

conver.jsonStringify({ fruit: "apple" });
// Result: {"fruit": "apple"}

// Temperature Conversion
conver.toCelsius(50);
// Result: 10

conver.toFahrenheit(10);
// Result: 50

// Color Conversion
conver.HexToRgb("#bf5e45");
// Result: { r: 191, g: 94, b: 69 }

conver.RgbToHex(191, 94, 69);
// Result: #bf5e45

// Text Conversion
conver.TextToBinary("Cool");
// Result: 1000011 1101111 1101111 1101100

conver.BinaryToText("1000011 1101111 1101111 1101100");
// Result: Cool

// Date Conversion
conver.DateToMs("2021-06-20 16:35");
// Result: 1624199700000

conver.MsToDate(1624199700000);
// Result: 20/06/2021, 16:35:00

// Base64 Encoding/Decoding
conver.Base64Encode("You're cool!");
// Result: WW91J3JlIGNvb2wh

conver.Base64Decode("WW91J3JlIGNvb2wh");
// Result: You're cool!

// File Export
conver.FileStream({
  text: "I'm cool!",
  filename: "cool",
  exportAs: "txt", // or in any file format
});
// Result: A file created

// Markdown to HTML
conver.MDtoHTML("# I'm a big heading.");
// Result: <h1>I'm a big heading.</h1>
// Supports: headings (h1-h6), bold, italic, bold+italic, blockquotes, code, links, images

// HTML to Markdown
conver.HTMLtoMD("<h1>I'm a big heading.</h1>");
// Result: # I'm a big heading.

// Length Conversion
conver.Length({
  length: 10,
  from: "km",
  to: "miles",
});
// Result: 6.2139999999999995
// Supported: miles, km, m, cm, mm, feet, yards

// Mass Conversion
conver.Mass({
  mass: 10,
  from: "kg",
  to: "g",
});
// Result: 10000
// Supported: t, kg, g, mg, cg

// Data Size Conversion
conver.Data({
  value: 10,
  from: "gb",
  to: "mb",
});
// Result: 10240
// Supported: tb, gb, mb, kb, b

// BBCode to HTML
conver.BBCodeToHTML("[b]I'm bold[/b]");
// Result: <b>I'm bold</b>
// Supported: [b], [i], [u], [s], [url], [img], [email], [color], [size], [quote], [code]

// HTML to BBCode
conver.HTMLToBBCode("<i>I'm italian!</i>");
// Result: [i]I'm italian![/i]
// Supported: <b>, <i>, <u>, <s>, <a>, <img>, <span style="color">, <span style="font-size">, <blockquote>, <pre>
```

## Currency Conversion (⚠️ Requires Setup)

As of v1.3.0, the Currency API requires you to implement your own exchange rate integration. Here's an example:

```js
// Example implementation with exchangerate-api.com (free tier available)
async function convertCurrency(price, from, to) {
  try {
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
    const data = await response.json();
    return data.rates[to] * price;
  } catch (error) {
    console.error('Currency conversion failed:', error);
  }
}

// Alternative services:
// - Open Exchange Rates API
// - Fixer.io
// - OANDA API
```

## Error Handling

All methods include input validation and throw descriptive errors:

```js
try {
  conver.jsonParse('invalid json');
} catch (error) {
  console.error('Parse error:', error.message);
}
```

## License

[MIT](https://github.com/TheMarci/converjs/blob/main/LICENSE)

## Contributing

Have a suggestion or found a bug?

- **Pull Requests**: https://github.com/TheMarci/converjs/pulls  
- **Report Issues**: https://github.com/TheMarci/converjs/issues

I appreciate your contributions! Thanks for using ConverJS! 👍
