# ConverJS v2.0.0

Parse, convert strings, numbers, data formats, and validate inputs with ease!

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

## Quick Start

```js
const Conver = require("converjs");
const conver = new Conver();

// Temperature conversion
conver.toCelsius(50);         // 10
conver.toKelvin(0);           // 273.15

// String manipulation
conver.toSlug("Hello World"); // hello-world
conver.toCamelCase("hello_world"); // helloWorld

// Validation
conver.isValidEmail("test@example.com"); // true
conver.isValidPassword("MyPass123!"); // true

// Data parsing
const json = conver.CSVtoJSON("name,age\nJohn,30");
// [{ name: 'John', age: '30' }]

// Async currency conversion
const price = await conver.currencyAsync({ price: 100, from: 'USD', to: 'EUR' });
```

---

## 📚 Complete API Documentation

### 🔄 JSON Conversion

```js
conver.jsonParse('{"fruit": "apple"}');
// { fruit: 'apple' }

conver.jsonStringify({ fruit: "apple" });
// {"fruit":"apple"}
```

### 🌡️ Temperature Conversion

```js
// Celsius ↔ Fahrenheit
conver.toCelsius(50);        // 10
conver.toFahrenheit(10);     // 50

// Celsius ↔ Kelvin
conver.toKelvin(0);          // 273.15
conver.fromKelvin(273.15);   // 0

// Fahrenheit ↔ Rankine
conver.toRankine(32);        // 491.67
conver.fromRankine(491.67);  // 32
```

### 🎨 Color Conversion

```js
conver.HexToRgb("#bf5e45");
// { r: 191, g: 94, b: 69 }

conver.RgbToHex(191, 94, 69);
// #bf5e45
```

### 📝 Text Conversion

```js
conver.TextToBinary("Cool");
// 1000011 1101111 1101111 1101100

// Cool
```

### 📅 Date Conversion

```js
// Basic conversion
conver.MsToDate(1624199700000);
// 20/06/2021, 16:35:00

// With locale and timezone
conver.MsToDate(1624199700000, { 
  locale: 'de-DE', 
  timezone: 'Europe/Berlin' 
});

conver.DateToMs("2021-06-20 16:35");
// 1624199700000
```

### 🔐 Base64 Encoding

```js
conver.Base64Encode("You're cool!");
// WW91J3JlIGNvb2wh

conver.Base64Decode("WW91J3JlIGNvb2wh");
// You're cool!
```

### 💱 Async Currency Conversion (NEW!)

```js
// Real exchange rates from API
const price = await conver.currencyAsync({ 
  price: 100, 
  from: 'USD', 
  to: 'EUR' 
});
// Returns current exchange rate result
```

### 📄 Markdown ↔ HTML

```js
conver.MDtoHTML("# I'm a heading");
// <h1>I'm a heading</h1>

conver.HTMLtoMD("<h1>I'm a heading</h1>");
// # I'm a heading
```

### 📏 Length Conversion

```js
conver.Length({ length: 10, from: "km", to: "miles" });
// 6.214

// Supported: miles, km, m, cm, mm, inches, feet, yards
```

### ⚖️ Mass Conversion

```js
conver.Mass({ mass: 10, from: "kg", to: "g" });
// 10000

// Supported: t, kg, g, mg, cg, pound, ounce, stone
```

### 💾 Data Size Conversion

```js
conver.Data({ value: 10, from: "gb", to: "mb" });
// 10240

// Supported: tb, gb, mb, kb, b
```

### 🔤 BBCode ↔ HTML

```js
conver.BBCodeToHTML("[b]Bold[/b] and [i]italic[/i]");
// <b>Bold</b> and <i>italic</i>

conver.HTMLToBBCode("<b>Bold</b> and <i>italic</i>");
// [b]Bold[/b] and [i]italic[/i]
```

### 📊 Data Format Parsing (NEW!)

```js
// CSV ↔ JSON
conver.CSVtoJSON("name,age\nJohn,30\nJane,25");
// [{ name: 'John', age: '30' }, { name: 'Jane', age: '25' }]

conver.JSONtoCSV([{ name: 'John', age: 30 }]);
// name,age\n"John","30"

// YAML ↔ JSON
conver.YAMLtoJSON("name: John\nage: 30");
// { name: 'John', age: 30 }

conver.JSONtoYAML({ name: "John", age: 30 });
// name: John\nage: 30

// XML → JSON (async)
const json = await conver.XMLtoJSON("<root><name>John</name></root>");
```

### ✂️ String Manipulation (NEW!)

```js
// Case conversions
conver.toSlug("Hello World!");       // hello-world
conver.toCamelCase("hello-world");   // helloWorld
conver.toSnakeCase("hello world");   // hello_world
conver.toKebabCase("hello_world");   // hello-world
conver.toPascalCase("hello world");  // HelloWorld

// String operations
conver.truncate("This is a long text", 10, "...");
// "This is a..."
```

### ✅ Validation Functions (NEW!)

```js
// Email validation
conver.isValidEmail("test@example.com");      // true
conver.isValidEmail("invalid.email");         // false

// URL validation
conver.isValidURL("https://example.com");     // true

// Hex color validation
conver.isValidHex("#bf5e45");                 // true
conver.isValidHex("not-a-hex");               // false

// JSON validation
conver.isValidJSON('{"test": true}');         // true

// IP validation
conver.isValidIPv4("192.168.1.1");            // true

// Phone number validation
conver.isValidPhoneNumber("123-456-7890");    // true

// Password strength validation
conver.isValidPassword("MyPass123!", {
  minLength: 8,
  requireUppercase: true,
  requireLowercase: true,
  requireNumbers: true,
  requireSpecial: true
});
// true
```

### 📦 Batch Conversion (NEW!)

```js
// Synchronous batch
const results = conver.batchConvert([
  { method: 'toCelsius', args: [50] },
  { method: 'toSlug', args: ['Hello World'] },
  { method: 'Base64Encode', args: ['hello'] }
]);
// [{ success: true, result: 10, method: 'toCelsius' }, ...]

// Asynchronous batch
const asyncResults = await conver.batchConvertAsync([
  { method: 'currencyAsync', args: [{ price: 100, from: 'USD', to: 'EUR' }] },
  { method: 'FileStreamAsync', args: [{ text: 'data', filename: 'test', exportAs: 'txt' }] }
]);
```

### 🔗 Chainable API (NEW!)

```js
// Chain multiple operations
const result = conver
  ._addToChain("hello world")
  ._addToChain(v => conver.toSlug(v))
  ._addToChain(v => conver.Base64Encode(v))
  .execute();
```

---

## 💡 Advanced Examples

### Currency Conversion with Error Handling

```js
try {
  const rate = await conver.currencyAsync({
    price: 100,
    from: 'USD',
    to: 'EUR'
  });
  console.log(`100 USD = ${rate} EUR`);
} catch (error) {
  console.error('Conversion failed:', error.message);
}
```

### Validate Multiple Fields

```js
const validations = conver.batchConvert([
  { method: 'isValidEmail', args: [userEmail] },
  { method: 'isValidPassword', args: [userPassword] },
  { method: 'isValidPhoneNumber', args: [userPhone] }
]);

const allValid = validations.every(v => v.result);
```

### Parse and Transform Data

```js
// Parse CSV data
const csvData = "name,age,email\nJohn,30,john@test.com";
const users = conver.CSVtoJSON(csvData);

// Transform to slugs
const userSlugs = users.map(user => conver.toSlug(user.name));

// Convert back to CSV
const output = conver.JSONtoCSV(users);
```

---

## License

[MIT](https://github.com/TheMarci/converjs/blob/main/LICENSE)

## Contributing

Have a suggestion or found a bug?

- **Pull Requests**: https://github.com/TheMarci/converjs/pulls  
- **Report Issues**: https://github.com/TheMarci/converjs/issues

I appreciate your contributions! Thanks for using ConverJS! 👍
