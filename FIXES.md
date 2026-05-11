# Changelog - ConverJS

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
- **Fixed module export**: Changed to proper CommonJS export syntax (`export = conver`)

### 📦 Dependencies
- **Removed unused dependencies**: `requirejs` and `xmlhttprequest`
- **Cleaned up package.json**: Removed empty devDependencies

### ⚠️ Breaking Changes
- Currency API now throws an error. Users must implement their own API integration using services like:
  - Open Exchange Rates API
  - Fixer.io
  - OANDA API
  - ExchangeRate-API

### 📋 Version Bump
- Updated from v1.2.5 to v1.3.0

---

## Recommendations for Future Development

1. **Add comprehensive unit tests** using Jest or Mocha
2. **Add CI/CD pipeline** with GitHub Actions
3. **Implement optional async/await** for better performance
4. **Add JSDoc comments** for better IDE support
5. **Consider moving to ESM (ES Modules)** for modern JavaScript
6. **Add rate limiting** and error handling for API-based conversions

