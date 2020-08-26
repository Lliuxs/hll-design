import { PropsWithChildren } from "react";
import { color } from "../shared/styles";
declare type CarouselProps = {
    /** 默认索引*/
    defaultIndex?: number;
    /** 轮播图高度 */
    height?: number;
    /** 是否自动播放 */
    autoplay: boolean;
    /** 自动播放延迟 */
    autoplayDelay: number;
    /** 翻页动画延迟 */
    delay?: number;
    /**  动画速度 1000是1秒 */
    animationDelay?: number;
    /**自动播放时是否反向播放 */
    autoplayReverse?: boolean;
    /** radio color */
    radioAppear?: keyof typeof color;
    /** 距离 */
    touchDiff?: number;
    viewportBoxshadow?: string;
    style?: object;
    classname?: string;
    width?: number;
};
export declare function Carousel(props: PropsWithChildren<CarouselProps>): JSX.Element;
export declare namespace Carousel {
    var defaultProps: {
        defaultIndex: number;
        delay: number;
        height: number;
        autoplay: boolean;
        autoplayDelay: number;
        animationDelay: number;
        touchDiff: number;
    };
}
export {};
