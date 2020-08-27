import { PropsWithChildren, ReactNode } from "react";
import { CSSProperties } from "styled-components";
export declare type ProgressProps = {
    /** 传入数字*/
    count: number;
    /** 是否要末尾计数文本*/
    countNumber?: boolean;
    /** 环状不生效 进度条高度*/
    height?: number;
    /** 是否是环状*/
    circle?: boolean;
    /** 环状才生效 环状大小*/
    size?: number;
    /**自定义环状进度条文本内容 */
    /** 自定义长条进度条文本内容*/
    progressText?: ReactNode;
    /** 长条闪烁动画颜色 */
    flashColor?: string;
    /** 主色 */
    primary?: string;
    /** 副色 */
    secondary?: string;
    /** 底座色 */
    bottomColor?: string;
    /** 外层容器style*/
    style?: CSSProperties;
    /** 外层容器类名 */
    classname?: string;
};
/**
 * 进度条一遍分为两种 长条形使用div 环形的使用svg是做 stroke-dasharray属性
 * 进度可以操作 算百分比 文字可以自定义
 * https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/circle
 */
export declare function Progress(props: PropsWithChildren<ProgressProps>): JSX.Element;
export declare namespace Progress {
    var defaultProps: {
        countNumber: boolean;
        circle: boolean;
        size: number;
        primary: string;
        secondary: string;
        flashColor: string;
        bottomColor: string;
    };
}
export default Progress;
