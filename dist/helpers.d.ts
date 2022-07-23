/// <reference types="react" />
import { RoundedPoint } from "round-polygon";
import { Align, CloudRect, Mode } from "./types";
export declare const getCloudMapper: (mode: Mode) => (element: string, i: number | string) => JSX.Element;
export declare const split: (str: string, mode: Mode) => string[];
export declare const fillPolies: (ctx: CanvasRenderingContext2D, multiPoly: RoundedPoint[][][], pr: number) => void;
export declare const canvasDebug: (ctx: CanvasRenderingContext2D, width: number, height: number, align: Align, snap: number, cloudRects: CloudRect[]) => void;
