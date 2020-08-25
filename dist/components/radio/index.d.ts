import { ReactNode, AllHTMLAttributes } from "react";
import { color } from "../shared/styles";
export interface RadioProps extends Omit<AllHTMLAttributes<HTMLInputElement>, "as" | "label"> {
    /** 主题色 */
    appearance?: keyof typeof color;
    /** label展示 */
    label?: ReactNode;
    /** 是否隐藏label*/
    hideLabel?: boolean;
    /** 错误文本 */
    error?: string;
    /** 描述文本 */
    description?: string;
    /** wrapper类名 */
    wrapperClass?: string;
}
export declare function Radio(props: RadioProps): JSX.Element;
export declare namespace Radio {
    var defaultProps: {
        appearance: string;
        hideLabel: boolean;
    };
}
export default Radio;
