/// <reference types="react" />
declare type CloudWordProps = {
    children: string;
    idle?: boolean;
};
declare type SpanRef = HTMLSpanElement & {
    idle: boolean;
};
declare type CSSFontProperties = {
    color: string;
    family: string;
    size: number;
    style?: string;
    variant?: string;
    weight?: string;
    stretch?: string;
};
declare type Mode = "WORD" | "SPACE" | "PARTIAL";
declare type Align = "left" | "center" | "right";
declare type CloudLetterProps = {
    children: JSX.Element | string | (string | JSX.Element)[] | null;
    width: number;
    spaceWidth?: number;
    cloudHeight?: number;
    font?: CSSFontProperties;
    padding?: number;
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
};
declare type Point = [number, number];
declare type CloudRect = [[Point, Point, Point, Point]];
declare type CloudContext = {
    every: SpanRef[];
    words: SpanRef[];
    spaces: SpanRef[];
};
export { type SpanRef, type Mode, type Align, type CloudWordProps, type CloudLetterProps, type CloudRect, type CloudContext, };
