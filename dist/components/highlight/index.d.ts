import { PropsWithChildren } from "react";
export declare type languagesType = "javascript" | "typescript" | "json" | "css";
export declare type HighlightProps = {
    language?: languagesType;
};
export declare function Highlight(props: PropsWithChildren<HighlightProps>): JSX.Element;
