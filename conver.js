class Conver {
    constructor() {
        this.chainMethods = [];
    }

    // ==================== CHAINABLE API ====================
    _addToChain(result) {
        this.chainMethods.push(result);
        return this;
    }

    async execute() {
        let result = this.chainMethods[0];
        for (let i = 1; i < this.chainMethods.length; i++) {
            if (typeof result === 'object' && result.then) {
                result = await result;
            }
            result = this.chainMethods[i](result);
        }
        this.chainMethods = [];
        return result instanceof Promise ? await result : result;
    }

    // ==================== JSON CONVERSION ====================
    jsonParse(text) {
        try {
            return JSON.parse(text);
        } catch (error) {
            throw new Error(`Invalid JSON: ${error.message}`);
        }
    }

    jsonStringify(object) {
        try {
            return JSON.stringify(object);
        } catch (error) {
            throw new Error(`Cannot stringify object: ${error.message}`);
        }
    }

    // ==================== TEMPERATURE CONVERSION ====================
    toCelsius(fahrenheit) {
        if (typeof fahrenheit !== 'number') throw new Error('Input must be a number');
        const cTemp = (fahrenheit - 32) / 1.8;
        return cTemp < 0.5 ? Math.floor(cTemp) : Math.round(cTemp);
    }

    toFahrenheit(celsius) {
        if (typeof celsius !== 'number') throw new Error('Input must be a number');
        return celsius * 9 / 5 + 32;
    }

    toKelvin(celsius) {
        if (typeof celsius !== 'number') throw new Error('Input must be a number');
        return celsius + 273.15;
    }

    fromKelvin(kelvin) {
        if (typeof kelvin !== 'number') throw new Error('Input must be a number');
        return kelvin - 273.15;
    }

    toRankine(fahrenheit) {
        if (typeof fahrenheit !== 'number') throw new Error('Input must be a number');
        return fahrenheit + 459.67;
    }

    fromRankine(rankine) {
        if (typeof rankine !== 'number') throw new Error('Input must be a number');
        return rankine - 459.67;
    }

    // ==================== COLOR CONVERSION ====================
    HexToRgb(hex) {
        if (typeof hex !== 'string') throw new Error('Input must be a string');
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    RgbToHex(r, g, b) {
        if (typeof r !== 'number' || typeof g !== 'number' || typeof b !== 'number') {
            throw new Error('All inputs must be numbers');
        }
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    // ==================== TEXT CONVERSION ====================
    TextToBinary(text) {
        if (typeof text !== 'string') throw new Error('Input must be a string');
        return text.split('').map(char => char.charCodeAt(0).toString(2)).join(' ');
    }

    BinaryToText(binary) {
        if (typeof binary !== 'string') throw new Error('Input must be a string');
        return binary.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
    }

    // ==================== DATE CONVERSION ====================
    MsToDate(ms, options = {}) {
        if (typeof ms !== 'number') throw new Error('Input must be a number');
        const date = new Date(ms);
        const opts = {
            locale: options.locale || 'en-US',
            timezone: options.timezone || undefined,
            ...options
        };
        try {
            return date.toLocaleString(opts.locale, { timeZone: opts.timezone });
        } catch (error) {
            return date.toLocaleString(opts.locale);
        }
    }

    DateToMs(date) {
        if (typeof date !== 'string') throw new Error('Input must be a string');
        return Date.parse(date);
    }

    // ==================== BASE64 CONVERSION ====================
    Base64Encode(text) {
        if (typeof text !== 'string') throw new Error('Input must be a string');
        return Buffer.from(text).toString('base64');
    }

    Base64Decode(text) {
        if (typeof text !== 'string') throw new Error('Input must be a string');
        return Buffer.from(text, 'base64').toString('utf8');
    }

    // ==================== ASYNC METHODS ====================
    async currencyAsync(opts = { price: Number, from: String, to: String }) {
        if (!opts.price || !opts.from || !opts.to) {
            throw new Error('Missing required options: price, from, to');
        }
        try {
            const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${opts.from}`);
            if (!response.ok) throw new Error('Failed to fetch exchange rates');
            const data = await response.json();
            if (!data.rates[opts.to]) throw new Error(`Invalid currency code: ${opts.to}`);
            return data.rates[opts.to] * opts.price;
        } catch (error) {
            throw new Error(`Currency conversion failed: ${error.message}`);
        }
    }

    async FileStreamAsync(opts = { text: String, filename: String, exportAs: String }) {
        if (!opts.text || !opts.filename || !opts.exportAs) {
            throw new Error('Missing required options: text, filename, exportAs');
        }
        return new Promise((resolve, reject) => {
            const fs = require('fs');
            fs.writeFile(`./${opts.filename}.${opts.exportAs}`, opts.text, (err) => {
                if (err) reject(err);
                else resolve(`File successfully saved as ${opts.filename}.${opts.exportAs}`);
            });
        });
    }

    // ==================== MARKDOWN/HTML CONVERSION ====================
    MDtoHTML(markdown) {
        if (typeof markdown !== 'string') throw new Error('Input must be a string');
        const html = markdown
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
            .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
            .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
            .replace(/\*\*\*(.*)\*\*\*/gim, '<strong><em>$1</em></strong>')
            .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
            .replace(/\*(.*)\*/gim, '<i>$1</i>')
            .replace(/^\> (.*)/gim, '<blockquote>$1</blockquote>')
            .replace(/\`(.*)\`/gim, '<code>$1</code>')
            .replace(/\[(.*?)\]\((.*?) \"(.*?)\"\)/gim, '<a href="$2" title="$3">$1</a>')
            .replace(/\!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1">');
        return html.trim();
    }

    HTMLtoMD(html) {
        if (typeof html !== 'string') throw new Error('Input must be a string');
        const markdown = html
            .replace(/\<h1\>(.*)\<\/h1\>/gim, '# $1')
            .replace(/\<h2\>(.*)\<\/h2\>/gim, '## $1')
            .replace(/\<h3\>(.*)\<\/h3\>/gim, '### $1')
            .replace(/\<h4\>(.*)\<\/h4\>/gim, '#### $1')
            .replace(/\<h5\>(.*)\<\/h5\>/gim, '##### $1')
            .replace(/\<h6\>(.*)\<\/h6\>/gim, '###### $1')
            .replace(/\<strong\>\<em\>(.*)\<\/em\>\<\/strong\>/gim, '***$1***')
            .replace(/\<b\>(.*)\<\/b\>/gim, '**$1**')
            .replace(/\<i\>(.*)\<\/i\>/gim, '*$1*')
            .replace(/\<blockquote\>(.*)\<\/blockquote\>/gim, '> $1')
            .replace(/\<code\>(.*)\<\/code\>/gim, '`$1`')
            .replace(/\<a href=\"(.*?)\" title=\"(.*?)\"\>(.*?)\<\/a\>/gim, '[$3]($1 "$2")')
            .replace(/\<img src=\"(.*?)\" alt=\"(.*?)\"\>/gim, '![$2]($1)');
        return markdown.trim();
    }

    // ==================== LENGTH CONVERSION ====================
    Length(opts = { length: Number, from: String, to: String }) {
        if (!opts.length || !opts.from || !opts.to) {
            throw new Error('Missing required options: length, from, to');
        }
        const conversions = {
            'miles-km': () => opts.length * 1.609344,
            'km-miles': () => opts.length * 0.6214,
            'km-m': () => opts.length * 1000,
            'km-cm': () => opts.length * 100000,
            'km-mm': () => opts.length * 1000000,
            'm-km': () => opts.length / 1000,
            'm-cm': () => opts.length * 100,
            'm-mm': () => opts.length * 1000,
            'cm-m': () => opts.length / 100,
            'cm-mm': () => opts.length * 10,
            'miles-feet': () => opts.length * 5280,
            'miles-yards': () => opts.length * 1760,
            'feet-miles': () => opts.length / 5280,
            'yards-miles': () => opts.length / 1760,
            'inches-cm': () => opts.length * 2.54,
            'cm-inches': () => opts.length / 2.54,
        };
        const key = `${opts.from}-${opts.to}`;
        if (!conversions[key]) throw new Error(`Invalid conversion: ${opts.from} to ${opts.to}`);
        return conversions[key]();
    }

    // ==================== MASS CONVERSION ====================
    Mass(opts = { mass: Number, from: String, to: String }) {
        if (!opts.mass || !opts.from || !opts.to) {
            throw new Error('Missing required options: mass, from, to');
        }
        const conversions = {
            't-kg': () => opts.mass * 1000,
            'kg-g': () => opts.mass * 1000,
            'g-kg': () => opts.mass / 1000,
            'g-mg': () => opts.mass * 1000,
            'mg-g': () => opts.mass / 1000,
            'kg-mg': () => opts.mass * 1000000,
            'mg-kg': () => opts.mass / 1000000,
            'g-cg': () => opts.mass * 100,
            'cg-mg': () => opts.mass * 10,
            'pound-kg': () => opts.mass * 0.453592,
            'kg-pound': () => opts.mass / 0.453592,
            'ounce-gram': () => opts.mass * 28.3495,
            'gram-ounce': () => opts.mass / 28.3495,
            'stone-kg': () => opts.mass * 6.35029,
            'kg-stone': () => opts.mass / 6.35029,
        };
        const key = `${opts.from}-${opts.to}`;
        if (!conversions[key]) throw new Error(`Invalid conversion: ${opts.from} to ${opts.to}`);
        return conversions[key]();
    }

    // ==================== DATA CONVERSION ====================
    Data(opts = { value: Number, from: String, to: String }) {
        if (!opts.value || !opts.from || !opts.to) {
            throw new Error('Missing required options: value, from, to');
        }
        const conversions = {
            'tb-gb': () => opts.value * 1024,
            'gb-mb': () => opts.value * 1024,
            'gb-kb': () => opts.value * 1048576,
            'gb-b': () => opts.value * 1073741824,
            'mb-kb': () => opts.value * 1024,
            'kb-b': () => opts.value * 1024,
            'tb-mb': () => opts.value * 1048576,
            'mb-gb': () => opts.value / 1024,
        };
        const key = `${opts.from}-${opts.to}`;
        if (!conversions[key]) throw new Error(`Invalid conversion: ${opts.from} to ${opts.to}`);
        return conversions[key]();
    }

    // ==================== BBCODE CONVERSION ====================
    BBCodeToHTML(bbcode) {
        if (typeof bbcode !== 'string') throw new Error('Input must be a string');
        const html = bbcode
            .replace(/\[b\](.*)\[\/b\]/gim, '<b>$1</b>')
            .replace(/\[i\](.*)\[\/i\]/gim, '<i>$1</i>')
            .replace(/\[u\](.*)\[\/u\]/gim, '<u>$1</u>')
            .replace(/\[url=(.*)\](.*)\[\/url\]/gim, '<a href="$1">$2</a>')
            .replace(/\[img\](.*)\[\/img\]/gim, '<img src="$1">')
            .replace(/\[quote\](.*)\[\/quote\]/gim, '<blockquote>$1</blockquote>')
            .replace(/\[code\](.*)\[\/code\]/gim, '<pre>$1</pre>')
            .replace(/\[size=(.*)\](.*)\[\/size\]/gim, '<span style="font-size: $1">$2</span>')
            .replace(/\[s\](.*)\[\/s\]/gim, '<s>$1</s>')
            .replace(/\[color=(.*)\](.*)\[\/color\]/gim, '<span style="color: $1">$2</span>')
            .replace(/\[email\](.*)\[\/email\]/gim, '<address><a href="mailto:$1"></a></address>');
        return html.trim();
    }

    HTMLToBBCode(html) {
        if (typeof html !== 'string') throw new Error('Input must be a string');
        const bbcode = html
            .replace(/\<b\>(.*)\<\/b\>/gim, '[b]$1[/b]')
            .replace(/\<i\>(.*)\<\/i\>/gim, '[i]$1[/i]')
            .replace(/\<u\>(.*)\<\/u\>/gim, '[u]$1[/u]')
            .replace(/\<a href=\"(.*?)\"\>(.*?)\<\/a\>/gim, '[url=$1]$2[/url]')
            .replace(/\<img src=\"(.*?)\"\>/gim, '[img]$1[/img]')
            .replace(/\<blockquote\>(.*)\<\/blockquote\>/gim, '[quote]$1[/quote]')
            .replace(/\<pre\>(.*)\<\/pre\>/gim, '[code]$1[/code]')
            .replace(/\<span style=\"font-size: (.*?)\"\>(.*?)\<\/span\>/gim, '[size=$1]$2[/size]')
            .replace(/\<s\>(.*)\<\/s\>/gim, '[s]$1[/s]')
            .replace(/\<span style=\"color: (.*?)\"\>(.*?)\<\/span\>/gim, '[color=$1]$2[/color]')
            .replace(/\<address\>\<a href=\"mailto:(.*?)\"\>\<\/a\>\<\/address\>/gim, '[email]$1[/email]');
        return bbcode.trim();
    }

    // ==================== PARSING OPTIONS ====================
    CSVtoJSON(csvString) {
        if (typeof csvString !== 'string') throw new Error('Input must be a string');
        const lines = csvString.trim().split('\n');
        const headers = lines[0].split(',').map(h => h.trim());
        const result = lines.slice(1).map(line => {
            const obj = {};
            const values = line.split(',').map(v => v.trim());
            headers.forEach((header, index) => {
                obj[header] = values[index];
            });
            return obj;
        });
        return result;
    }

    JSONtoCSV(jsonArray) {
        if (!Array.isArray(jsonArray)) throw new Error('Input must be an array');
        if (jsonArray.length === 0) return '';
        const headers = Object.keys(jsonArray[0]);
        const csv = [headers.join(',')];
        jsonArray.forEach(obj => {
            csv.push(headers.map(header => `"${obj[header] || ''}"`).join(','));
        });
        return csv.join('\n');
    }

    YAMLtoJSON(yamlString) {
        if (typeof yamlString !== 'string') throw new Error('Input must be a string');
        const result = {};
        const lines = yamlString.trim().split('\n');
        lines.forEach(line => {
            const [key, ...valueParts] = line.split(':');
            const value = valueParts.join(':').trim();
            if (key && value) {
                result[key.trim()] = isNaN(value) ? value : Number(value);
            }
        });
        return result;
    }

    JSONtoYAML(jsonObj) {
        if (typeof jsonObj !== 'object') throw new Error('Input must be an object');
        return Object.entries(jsonObj)
            .map(([key, value]) => `${key}: ${typeof value === 'string' ? value : JSON.stringify(value)}`)
            .join('\n');
    }

    XMLtoJSON(xmlString) {
        if (typeof xmlString !== 'string') throw new Error('Input must be a string');
        const parser = new (require('xml2js')).Parser();
        return new Promise((resolve, reject) => {
            try {
                parser.parseString(xmlString, (err, result) => {
                    if (err) reject(err);
                    else resolve(result);
                });
            } catch (error) {
                reject(new Error('xml2js package required. Install with: npm install xml2js'));
            }
        });
    }

    // ==================== STRING MANIPULATION ====================
    toSlug(text) {
        if (typeof text !== 'string') throw new Error('Input must be a string');
        return text.toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    toCamelCase(text) {
        if (typeof text !== 'string') throw new Error('Input must be a string');
        return text.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }

    toSnakeCase(text) {
        if (typeof text !== 'string') throw new Error('Input must be a string');
        return text.replace(/(?:^\w|[A-Z])/g, (word, index) => {
            return index === 0 ? word.toLowerCase() : '_' + word.toLowerCase();
        }).replace(/\s+/g, '_');
    }

    toKebabCase(text) {
        if (typeof text !== 'string') throw new Error('Input must be a string');
        return text.replace(/(?:^\w|[A-Z])/g, (word, index) => {
            return index === 0 ? word.toLowerCase() : '-' + word.toLowerCase();
        }).replace(/\s+/g, '-');
    }

    toPascalCase(text) {
        if (typeof text !== 'string') throw new Error('Input must be a string');
        return text.replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => {
            return word.toUpperCase();
        }).replace(/\s+/g, '');
    }

    truncate(text, length = 50, suffix = '...') {
        if (typeof text !== 'string') throw new Error('Input must be a string');
        if (text.length <= length) return text;
        return text.substring(0, length) + suffix;
    }

    // ==================== VALIDATION FUNCTIONS ====================
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    isValidHex(hex) {
        const hexRegex = /^#?([a-f\d]{2}){3}$/i;
        return hexRegex.test(hex);
    }

    isValidJSON(jsonString) {
        try {
            JSON.parse(jsonString);
            return true;
        } catch {
            return false;
        }
    }

    isValidURL(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }

    isValidIPv4(ip) {
        const ipv4Regex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
        return ipv4Regex.test(ip);
    }

    isValidPhoneNumber(phone) {
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return phoneRegex.test(phone);
    }

    isValidPassword(password, options = {}) {
        const minLength = options.minLength || 8;
        const requireUppercase = options.requireUppercase !== false;
        const requireLowercase = options.requireLowercase !== false;
        const requireNumbers = options.requireNumbers !== false;
        const requireSpecial = options.requireSpecial !== false;

        if (password.length < minLength) return false;
        if (requireUppercase && !/[A-Z]/.test(password)) return false;
        if (requireLowercase && !/[a-z]/.test(password)) return false;
        if (requireNumbers && !/[0-9]/.test(password)) return false;
        if (requireSpecial && !/[!@#$%^&*]/.test(password)) return false;
        return true;
    }

    // ==================== BATCH CONVERSION ====================
    batchConvert(conversions) {
        if (!Array.isArray(conversions)) throw new Error('Input must be an array');
        const results = [];
        conversions.forEach(conversion => {
            const { method, args } = conversion;
            if (!this[method]) throw new Error(`Method ${method} does not exist`);
            try {
                const result = this[method](...args);
                results.push({ success: true, result, method });
            } catch (error) {
                results.push({ success: false, error: error.message, method });
            }
        });
        return results;
    }

    async batchConvertAsync(conversions) {
        if (!Array.isArray(conversions)) throw new Error('Input must be an array');
        const results = [];
        for (const conversion of conversions) {
            const { method, args } = conversion;
            if (!this[method]) throw new Error(`Method ${method} does not exist`);
            try {
                const result = await this[method](...args);
                results.push({ success: true, result, method });
            } catch (error) {
                results.push({ success: false, error: error.message, method });
            }
        }
        return results;
    }
}

module.exports = Conver;
