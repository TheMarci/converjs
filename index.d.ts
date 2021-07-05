declare module "converjs" {
    class conver {
        constructor();
        jsonParse(text: string): object;
        jsonStringify(object: object | string): string;
        toCelsius(fahrenheit: number): number;
        toFahrenheit(celsius: number): number;
        HexToRgb(hex: string): {
            r: number;
            g: number;
            b: number;
        }
        RgbToHex(r: number, g: number, b: number): string;
        TextToBinary(text: string): number;
        BinaryToText(binary: string): string;
        MsToDate(ms: number): string;
        DateToMs(date: string): number;
        Base64Encode(text: string): string;
        Base64Decode(text: string): string;
        Currency(opts?: {
            price: NumberConstructor;
            from: StringConstructor;
            to: StringConstructor;
        }): number | string | undefined;
        FileStream(opts?: {
            text: StringConstructor;
            filename: StringConstructor;
            exportAs: StringConstructor;
        }): void;
        MDtoHTML(markdown: string): string;
        HTMLtoMD(html: string): string;
        Length(opts?: {
            length: NumberConstructor;
            from: StringConstructor;
            to: StringConstructor;
        }): number;
        Mass(opts?: {
            mass: NumberConstructor;
            from: StringConstructor;
            to: StringConstructor;
        }): number;
        Data(opts?: {
            value: NumberConstructor;
            from: StringConstructor;
            to: StringConstructor;
        }): number;
    }
}