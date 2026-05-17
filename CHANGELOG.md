# Changelog

**Latest version will be always on top.**

## [2.0.0] - 2026-05-17

### ⚡ Async/Await Support
- **Added `currencyAsync()`**: Real-time live currency conversion using async/await
- **Added `FileStreamAsync()`**: Non-blocking file operations via async streams
- **Added `batchConvertAsync()`**: Asynchronously process multiple conversions in parallel

### 🌡️ Expanded Temperature Units
- **Added Kelvin support**: `toKelvin()` and `fromKelvin()`
- **Added Rankine support**: `toRankine()` and `fromRankine()`

### 📐 Expanded Unit Conversions
- **Expanded `Mass()`**: Added pounds, ounces, and stones
- **Expanded `Length()`**: Added inches ↔ centimetres conversions

### 🔗 Chainable API
- **Added `_addToChain()`**: Queue multiple conversion operations fluently
- **Added `execute()`**: Run the full chain and return results

### 📦 Batch Conversion
- **Added `batchConvert()`**: Synchronously process multiple conversions at once
- **Added `batchConvertAsync()`**: Asynchronous counterpart for non-blocking batch processing

### 🌍 Locale & Timezone Support
- **Updated `MsToDate()`**: Now accepts an options object with `locale` and `timezone` fields e.g. `{ locale: 'de-DE', timezone: 'Europe/Berlin' }`

### 📝 Parsing
- **Added `CSVtoJSON()` and `JSONtoCSV()`**: Convert between CSV and JSON formats
- **Added `YAMLtoJSON()` and `JSONtoYAML()`**: Convert between YAML and JSON formats
- **Added `XMLtoJSON()`**: Async XML-to-JSON parser

### 🔤 String Manipulation
- **Added `toSlug()`**: Convert a string to a URL-friendly slug
- **Added `toCamelCase()`**: Convert to camelCase
- **Added `toSnakeCase()`**: Convert to snake_case
- **Added `toKebabCase()`**: Convert to kebab-case
- **Added `toPascalCase()`**: Convert to PascalCase
- **Added `truncate()`**: Truncate a string to a specified length

### ✅ Validation
- **Added `isValidEmail()`**: Validate email address format
- **Added `isValidURL()`**: Validate URL format
- **Added `isValidHex()`**: Validate hexadecimal colour codes
- **Added `isValidJSON()`**: Check whether a string is valid JSON
- **Added `isValidIPv4()`**: Validate IPv4 addresses
- **Added `isValidPhoneNumber()`**: Validate phone number format
- **Added `isValidPassword()`**: Check password strength against configurable rules

---

## [1.3.0] - 2026-05-11

### 🐛 Bug Fixes
- **Fixed regex patterns in MDtoHTML**: Changed `<blockqoute>` to `<blockquote>` (line 91)
- **Fixed regex patterns in HTMLtoMD**: Corrected invalid blockquote closing tag regex (line 109)
- **Fixed regex patterns in HTMLToBBCode**: 
  - Corrected `[[/qoute]]` to `[/quote]` (line 172)
  - Fixed incomplete `</s>` regex missing closing `>` (line 175)
  - Fixed CSS typo `stlye` to `style` (line 159)
- **Fixed Base64Decode encoding**: Changed from `ascii` to `utf8` for proper character support (line 59)

### ✨ Improvements
- **Added comprehensive input validation** to all methods
- **Added error handling** with try-catch blocks in parsing methods
- **Improved error messages** for better debugging
- **Fixed Currency API**: Replaced broken synchronous API call with informative error and recommendations

### 📝 TypeScript Definitions
- **Fixed TextToBinary return type**: Changed from `number` to `string`
- **Fixed HexToRgb return type**: Added proper `null` possibility
- **Fixed all parameter types**: Replaced `NumberConstructor`/`StringConstructor` with actual types (`number`/`string`)
- **Fixed module export**: Changed to proper CommonJS export syntax (`export = Conver`)

### 📦 Dependencies
- **Removed unused dependencies**: `requirejs` and `xmlhttprequest`
- **Cleaned up package.json**: Removed empty devDependencies

### ⚠️ Breaking Changes
- Currency API now throws an error. Users must implement their own API integration using services like:
  - Open Exchange Rates API
  - Fixer.io
  - OANDA API
  - ExchangeRate-API

---

## 1.2.5

- GitHub fix

## 1.2.4

- Addded HTML to BBCode parser

## 1.2.3

- Added BBCode to HTML parser

## 1.2.1

- Bug fix

## 1.2.0

- Added length converter
- Added mass converter
- Added data converter
- Added d.ts (typescript declaration)

## 1.1.4

- Removed semver (I decided to do everything from zero so no dependecies)
  _If you have any suggestions what should I add make a PR on Github._

## 1.1.3

- Added HTML to MD parser
- Added semver

## 1.1.1

- Now you can export files in any format. (FileStream)
