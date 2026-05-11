declare class Conver {
    constructor();
    jsonParse(text: string): object;
    jsonStringify(object: object | string): string;
    toCelsius(fahrenheit: number): number;
    toFahrenheit(celsius: number): number;
    HexToRgb(hex: string): { r: number; g: number; b: number } | null;
    RgbToHex(r: number, g: number, b: number): string;
    TextToBinary(text: string): string;
    BinaryToText(binary: string): string;
    MsToDate(ms: number): string;
    DateToMs(date: string): number;
    Base64Encode(text: string): string;
    Base64Decode(text: string): string;
    Currency(opts?: { price: number; from: string; to: string }): number;
    FileStream(opts?: { text: string; filename: string; exportAs: string }): void;
    MDtoHTML(markdown: string): string;
    HTMLtoMD(html: string): string;
    Length(opts?: { length: number; from: string; to: string }): number;
    Mass(opts?: { mass: number; from: string; to: string }): number;
    Data(opts?: { value: number; from: string; to: string }): number;
    BBCodeToHTML(bbcode: string): string;
    HTMLToBBCode(html: string): string;
}

export = Conver;
