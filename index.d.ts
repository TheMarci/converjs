declare class Conver {
    constructor();

    // Chainable API
    _addToChain(result: any): Conver;
    execute(): Promise<any>;

    // JSON Conversion
    jsonParse(text: string): object;
    jsonStringify(object: object | string): string;

    // Temperature Conversion
    toCelsius(fahrenheit: number): number;
    toFahrenheit(celsius: number): number;
    toKelvin(celsius: number): number;
    fromKelvin(kelvin: number): number;
    toRankine(fahrenheit: number): number;
    fromRankine(rankine: number): number;

    // Color Conversion
    HexToRgb(hex: string): { r: number; g: number; b: number } | null;
    RgbToHex(r: number, g: number, b: number): string;

    // Text Conversion
    TextToBinary(text: string): string;
    BinaryToText(binary: string): string;

    // Date Conversion
    MsToDate(ms: number, options?: { locale?: string; timezone?: string }): string;
    DateToMs(date: string): number;

    // Base64 Conversion
    Base64Encode(text: string): string;
    Base64Decode(text: string): string;

    // Async Methods
    currencyAsync(opts?: { price: number; from: string; to: string }): Promise<number>;
    FileStreamAsync(opts?: { text: string; filename: string; exportAs: string }): Promise<string>;

    // Markdown/HTML Conversion
    MDtoHTML(markdown: string): string;
    HTMLtoMD(html: string): string;

    // Length Conversion
    Length(opts?: { length: number; from: string; to: string }): number;

    // Mass Conversion
    Mass(opts?: { mass: number; from: string; to: string }): number;

    // Data Conversion
    Data(opts?: { value: number; from: string; to: string }): number;

    // BBCode Conversion
    BBCodeToHTML(bbcode: string): string;
    HTMLToBBCode(html: string): string;

    // Parsing Options
    CSVtoJSON(csvString: string): object[];
    JSONtoCSV(jsonArray: object[]): string;
    YAMLtoJSON(yamlString: string): object;
    JSONtoYAML(jsonObj: object): string;
    XMLtoJSON(xmlString: string): Promise<object>;

    // String Manipulation
    toSlug(text: string): string;
    toCamelCase(text: string): string;
    toSnakeCase(text: string): string;
    toKebabCase(text: string): string;
    toPascalCase(text: string): string;
    truncate(text: string, length?: number, suffix?: string): string;

    // Validation Functions
    isValidEmail(email: string): boolean;
    isValidHex(hex: string): boolean;
    isValidJSON(jsonString: string): boolean;
    isValidURL(url: string): boolean;
    isValidIPv4(ip: string): boolean;
    isValidPhoneNumber(phone: string): boolean;
    isValidPassword(password: string, options?: {
        minLength?: number;
        requireUppercase?: boolean;
        requireLowercase?: boolean;
        requireNumbers?: boolean;
        requireSpecial?: boolean;
    }): boolean;

    // Batch Conversion
    batchConvert(conversions: { method: string; args: any[] }[]): { success: boolean; result?: any; error?: string; method: string }[];
    batchConvertAsync(conversions: { method: string; args: any[] }[]): Promise<{ success: boolean; result?: any; error?: string; method: string }[]>;
}

export = Conver;
