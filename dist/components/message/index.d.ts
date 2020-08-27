import { PropsWithChildren, ReactNode } from "react";
export declare type MessageType = "info" | "success" | "error" | "warning" | "loading" | "default";
export interface MessageConfig {
    /** 挂载点*/
    mount: HTMLElement;
    /** 动画延迟时间 */
    delay: number;
    /** 结束后回调 */
    callback: any;
    /** 动画持续时间 */
    animationDuring: number;
    /** 底色*/
    background: string;
    /** 文字颜色*/
    color: string;
}
export declare const createMessage: (type: MessageType) => (content: ReactNode, config?: Partial<MessageConfig>) => void;
export declare type MessageProps = {
    rootDom: HTMLElement;
    parentDom: Element | DocumentFragment;
    content: ReactNode;
    fconfig: MessageConfig;
    iconType: MessageType;
};
export declare function Message(props: PropsWithChildren<MessageProps>): JSX.Element;
export default Message;
export declare const message: {
    info: (content: ReactNode, config?: Partial<MessageConfig>) => void;
    success: (content: ReactNode, config?: Partial<MessageConfig>) => void;
    error: (content: ReactNode, config?: Partial<MessageConfig>) => void;
    warning: (content: ReactNode, config?: Partial<MessageConfig>) => void;
    loading: (content: ReactNode, config?: Partial<MessageConfig>) => void;
    default: (content: ReactNode, config?: Partial<MessageConfig>) => void;
};
