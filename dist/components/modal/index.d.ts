import { PropsWithChildren, ReactNode } from "react";
import { CSSProperties } from "styled-components";
export declare function useStateAnimation(parentSetState: (v: boolean) => void, delay?: number): [boolean, (v: boolean) => void, () => void];
export declare function useStopScroll(state: boolean, delay: number, open?: boolean): void;
export declare type ModalProps = {
    /** 父组件用来控制的状态 */
    visible: boolean;
    /** 容器位置 */
    container?: Element;
    /** 父组件setState */
    parentSetState: (v: boolean) => void;
    /** 弹出框标题 */
    title?: ReactNode;
    /** 是否有确认按钮 */
    confirm?: boolean;
    /** 改变确认按钮文本*/
    okText?: string;
    /** 改变取消按钮文本*/
    cancelText?: string;
    /** 点了确认的回调，如果传了，需要自行处理关闭 */
    onOk?: (set: (v: boolean) => void) => void;
    /** 点了取消的回调，如果传了，需要自行处理关闭*/
    onCancel?: (set: (v: boolean) => void) => void;
    /** 点确认或者取消都会走的回调 */
    callback?: (v: boolean) => void;
    /** 点击mask是否关闭模态框 */
    maskClose?: boolean;
    /** 是否有mask */
    mask?: boolean;
    /** 自定义模态框位置 */
    style?: CSSProperties;
    /** 是否有右上角关闭按钮 */
    closeButton?: boolean;
    /** 动画时间 */
    delay?: number;
    /** 是否停止滚动*/
    stopScroll?: boolean;
    /** portral style*/
    portralStyle?: CSSProperties;
    /** portral的回调 */
    refCallback?: (ref: HTMLDivElement) => void;
    /** 没点确认于取消，直接关闭的回调 */
    closeCallback?: () => void;
};
export declare function Modal(props: PropsWithChildren<ModalProps>): JSX.Element;
export default Modal;
