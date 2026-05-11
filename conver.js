class conver {
    constructor(){}
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
    toCelsius(fahrenheit) {
        if (typeof fahrenheit !== 'number') throw new Error('Input must be a number');
        var fahrTemp = fahrenheit;
        var cTemp = (fahrTemp - 32) / 1.8;
        if (cTemp < .5) return Math.floor(cTemp);
        else return Math.round(cTemp);
    }
    toFahrenheit(celsius) {
        if (typeof celsius !== 'number') throw new Error('Input must be a number');
        var cTemp  = celsius;
        var cToFahr = cTemp * 9 / 5 + 32;
        return cToFahr;
    }
    HexToRgb(hex) {
        if (typeof hex !== 'string') throw new Error('Input must be a string');
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
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
    TextToBinary(text) {
        if (typeof text !== 'string') throw new Error('Input must be a string');
        let r = '';
        r = text.split('').map(char => {
            return char.charCodeAt(0).toString(2);
        }).join(' ');
        return r;
    }
    BinaryToText(binary) {
        if (typeof binary !== 'string') throw new Error('Input must be a string');
        var inside = binary.split(' ');
        var r = [];

        for (var i = 0; i < inside.length; i++) {
            r.push(String.fromCharCode(parseInt(inside[i], 2)));
        }
        return r.join('');
    }
    MsToDate(ms) {
        if (typeof ms !== 'number') throw new Error('Input must be a number');
        const date = new Date(ms);
        const r = date.toLocaleString();
        return r;
    }
    DateToMs(date) {
        if (typeof date !== 'string') throw new Error('Input must be a string');
        return Date.parse(date);
    }
    Base64Encode(text) {
        if (typeof text !== 'string') throw new Error('Input must be a string');
        return Buffer.from(text).toString('base64');
    }
    Base64Decode(text) {
        if (typeof text !== 'string') throw new Error('Input must be a string');
        return Buffer.from(text, 'base64').toString('utf8');
    }
    Currency(opts = { "price": Number, "from": String, "to": String }) {
        if (!opts.price || !opts.from || !opts.to) {
            throw new Error('Missing required options: price, from, to');
        }
        // Note: This is a placeholder. For production use, consider using:
        // - Open Exchange Rates API
        // - Fixer.io
        // - OANDA API
        // Example with fetch (requires Node 18+):
        // const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${opts.from}`);
        // const data = await response.json();
        // return data.rates[opts.to] * opts.price;
        
        throw new Error('Currency conversion requires external API setup. Please implement with your preferred API.');
    }
    FileStream(opts = { "text": String, "filename": String, "exportAs": String }) {
        if (!opts.text || !opts.filename || !opts.exportAs) {
            throw new Error('Missing required options: text, filename, exportAs');
        }
        const fs = require('fs');
        fs.writeFile(`./${opts.filename}.${opts.exportAs}`, opts.text, function (err) {
            if (err) console.log(err);
            console.log(`File successfully saved as ${opts.filename}.${opts.exportAs} !`);
        })
    }
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
            .replace(/\!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1">')

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
            .replace(/\<img src=\"(.*?)\" alt=\"(.*?)\"\>/gim, '![$2]($1)')

        return markdown.trim();
    }
    Length(opts = { length: Number, from: String, to: String }) {
        if (!opts.length || !opts.from || !opts.to) {
            throw new Error('Missing required options: length, from, to');
        }
        if (opts.from == "miles" && opts.to == "km") return opts.length * 1.609344;
         else if (opts.from == "km" && opts.to == "miles") return opts.length * 0.6214;
         else if (opts.from == "km" && opts.to == "m") return opts.length * 1000;
         else if (opts.from == "km" && opts.to == "cm") return opts.length * 100000;
         else if (opts.from == "km" && opts.to == "mm") return opts.length * 1000000;
         else if (opts.from == "m" && opts.to == "km") return opts.length / 1000;
         else if (opts.from == "m" && opts.to == "cm") return opts.length * 100;
         else if (opts.from == "m" && opts.to == "mm") return opts.length * 1000;
         else if (opts.from == "cm" && opts.to == "m") return opts.length / 100;
         else if (opts.from == "cm" && opts.to == "mm") return opts.length * 10;
         else if (opts.from == "miles" && opts.to == "feet") return opts.length * 5280;
         else if (opts.from == "miles" && opts.to == "yards") return opts.length * 1760;
         else throw new Error(`Invalid conversion: ${opts.from} to ${opts.to}`);
    }
    Mass(opts = { "mass": Number, "from": String, "to": String }) {
        if (!opts.mass || !opts.from || !opts.to) {
            throw new Error('Missing required options: mass, from, to');
        }
        if (opts.from == "t" && opts.to == "kg") return opts.mass * 1000;
        else if (opts.from == "kg" && opts.to == "g") return opts.mass * 1000;
        else if (opts.from == "g" && opts.to == "kg") return opts.mass / 1000;
        else if (opts.from == "g" && opts.to == "mg") return opts.mass * 1000;
        else if (opts.from == "mg" && opts.to == "g") return opts.mass / 1000;
        else if (opts.from == "kg" && opts.to == "mg") return opts.mass * 1000000;
        else if (opts.from == "mg" && opts.to == "kg") return opts.mass / 1000000;
        else if (opts.from == "g" && opts.to == "cg") return opts.mass * 100;
        else if (opts.from == "cg" && opts.to == "mg") return opts.mass * 10;
        else throw new Error(`Invalid conversion: ${opts.from} to ${opts.to}`);
    }
    Data(opts = { "value": Number, "from": String, "to": String }) {
        if (!opts.value || !opts.from || !opts.to) {
            throw new Error('Missing required options: value, from, to');
        }
        if (opts.from == "tb" && opts.to == "gb") return opts.value * 1024;
        else if (opts.from == "gb" && opts.to == "mb") return opts.value * 1024;
        else if (opts.from == "gb" && opts.to == "kb") return opts.value * 1048576;
        else if (opts.from == "gb" && opts.to == "b") return opts.value * 1073741824;
        else if (opts.from == "mb" && opts.to == "kb") return opts.value * 1024;
        else if (opts.from == "kb" && opts.to == "b") return opts.value * 1024;
        else throw new Error(`Invalid conversion: ${opts.from} to ${opts.to}`);
    }
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
            .replace(/\[email\](.*)\[\/email\]/gim, '<address><a href="mailto:$1"></a></address>')
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
            .replace(/\<address\>\<a href=\"mailto:(.*?)\"\>\<\/a\>\<\/address\>/gim, '[email]$1[/email]')
        return bbcode.trim();
    }
}

module.exports = conver;
