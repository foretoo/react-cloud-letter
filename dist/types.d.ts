/// <reference types="react" />
declare type CloudWordProps = {
    children: string;
    idle?: boolean;
};
declare type SpanRef = HTMLSpanElement & {
    idle: boolean;
};
declare type CSSFontProperties = Partial<{
    color: string;
    family: string;
    size: number;
    style: string;
    variant: string;
    weight: string;
    stretch: string;
}>;
declare type Mode = "WORD" | "SPACE" | "PARTIAL";
declare type Align = "left" | "center" | "right";
declare type CloudLetterProps = {
    children: JSX.Element | string | (string | JSX.Element)[] | null;
    width?: number;
    spaceWidth?: number;
    cloudHeight?: number;
    padding?: number;
    radius?: number;
    mode?: Mode;
    align?: Align;
    snap?: number;
    grid?: boolean;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    shadowColor?: string;
    font?: CSSFontProperties;
};
declare type Point = [number, number];
declare type CloudRect = [[Point, Point, Point, Point]];
interface ICloudContext {
    every: SpanRef[];
    words: SpanRef[];
    spaces: SpanRef[];
}
export { type SpanRef, type Mode, type Align, type CloudWordProps, type CloudLetterProps, type CloudRect, type ICloudContext, };
