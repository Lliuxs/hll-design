import React, { PropsWithChildren, ButtonHTMLAttributes, ReactNode, AnchorHTMLAttributes } from "react";
export declare type AppearancesTypes = keyof typeof APPEARANCES;
declare type btnType = "primary" | "primaryOutline" | "secondary" | "secondaryOutline" | "tertiary" | "outline" | "inversePrimary" | "inverseSecondary" | "inverseOutline";
declare type AppearancesObj = {
    [key in btnType]: btnType;
};
export declare const APPEARANCES: AppearancesObj;
export declare type SizesTypes = keyof typeof SIZES;
declare type sizeType = "small" | "medium";
declare type sizeObj = {
    [key in sizeType]: sizeType;
};
export declare const SIZES: sizeObj;
export declare const Text: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const Loading: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const btnPadding: {
    medium: string;
    small: string;
};
export interface CustomButtonProps {
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否加载中 */
    isLoading?: boolean;
    /** 是否是a标签 */
    isLink?: boolean;
    /** 是否替换加载中文本 */
    loadingText?: ReactNode;
    /** 按钮大小 */
    size?: SizesTypes;
    /** 按钮类型 */
    appearance?: AppearancesTypes;
    /** 无效点击 */
    isUnclickable?: boolean;
}
export declare type ButtonProps = CustomButtonProps & AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>;
export declare const StyledButton: import("styled-components").StyledComponent<"button", any, ButtonProps, never>;
export declare function Button(props: PropsWithChildren<ButtonProps>): React.DOMElement<{
    "data-testid": string;
    disabled?: boolean | undefined;
    /** 是否加载中 */
    isLoading?: boolean | undefined;
    /** 是否是a标签 */
    isLink?: boolean | undefined;
    /** 是否替换加载中文本 */
    loadingText?: React.ReactNode;
    /** 按钮大小 */
    size?: "small" | "medium" | undefined;
    /** 按钮类型 */
    appearance?: "primary" | "primaryOutline" | "secondary" | "secondaryOutline" | "tertiary" | "outline" | "inversePrimary" | "inverseSecondary" | "inverseOutline" | undefined;
    /** 无效点击 */
    isUnclickable?: boolean | undefined;
    download?: any;
    href?: string | undefined;
    hrefLang?: string | undefined;
    media?: string | undefined;
    ping?: string | undefined;
    rel?: string | undefined;
    target?: string | undefined;
    type?: "button" | "submit" | "reset" | undefined;
    referrerPolicy?: string | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    className?: string | undefined;
    contentEditable?: boolean | "true" | "false" | "inherit" | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: boolean | "true" | "false" | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    placeholder?: string | undefined;
    slot?: string | undefined;
    spellCheck?: boolean | "true" | "false" | undefined;
    style?: React.CSSProperties | undefined;
    tabIndex?: number | undefined;
    title?: string | undefined;
    translate?: "yes" | "no" | undefined;
    radioGroup?: string | undefined;
    role?: string | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    resource?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
    is?: string | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: boolean | "true" | "false" | undefined;
    'aria-autocomplete'?: "none" | "inline" | "list" | "both" | undefined;
    'aria-busy'?: boolean | "true" | "false" | undefined;
    'aria-checked'?: boolean | "true" | "false" | "mixed" | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colspan'?: number | undefined;
    'aria-controls'?: string | undefined;
    'aria-current'?: boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | undefined;
    'aria-describedby'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-disabled'?: boolean | "true" | "false" | undefined;
    'aria-dropeffect'?: "link" | "none" | "copy" | "execute" | "move" | "popup" | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: boolean | "true" | "false" | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: boolean | "true" | "false" | undefined;
    'aria-haspopup'?: boolean | "dialog" | "menu" | "true" | "false" | "listbox" | "tree" | "grid" | undefined;
    'aria-hidden'?: boolean | "true" | "false" | undefined;
    'aria-invalid'?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: "off" | "assertive" | "polite" | undefined;
    'aria-modal'?: boolean | "true" | "false" | undefined;
    'aria-multiline'?: boolean | "true" | "false" | undefined;
    'aria-multiselectable'?: boolean | "true" | "false" | undefined;
    'aria-orientation'?: "horizontal" | "vertical" | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | "true" | "false" | "mixed" | undefined;
    'aria-readonly'?: boolean | "true" | "false" | undefined;
    'aria-relevant'?: "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    'aria-required'?: boolean | "true" | "false" | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-selected'?: boolean | "true" | "false" | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    children?: React.ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string;
    } | undefined;
    onCopy?: (((event: React.ClipboardEvent<HTMLAnchorElement>) => void) & ((event: React.ClipboardEvent<HTMLButtonElement>) => void)) | undefined;
    onCopyCapture?: (((event: React.ClipboardEvent<HTMLAnchorElement>) => void) & ((event: React.ClipboardEvent<HTMLButtonElement>) => void)) | undefined;
    onCut?: (((event: React.ClipboardEvent<HTMLAnchorElement>) => void) & ((event: React.ClipboardEvent<HTMLButtonElement>) => void)) | undefined;
    onCutCapture?: (((event: React.ClipboardEvent<HTMLAnchorElement>) => void) & ((event: React.ClipboardEvent<HTMLButtonElement>) => void)) | undefined;
    onPaste?: (((event: React.ClipboardEvent<HTMLAnchorElement>) => void) & ((event: React.ClipboardEvent<HTMLButtonElement>) => void)) | undefined;
    onPasteCapture?: (((event: React.ClipboardEvent<HTMLAnchorElement>) => void) & ((event: React.ClipboardEvent<HTMLButtonElement>) => void)) | undefined;
    onCompositionEnd?: (((event: React.CompositionEvent<HTMLAnchorElement>) => void) & ((event: React.CompositionEvent<HTMLButtonElement>) => void)) | undefined;
    onCompositionEndCapture?: (((event: React.CompositionEvent<HTMLAnchorElement>) => void) & ((event: React.CompositionEvent<HTMLButtonElement>) => void)) | undefined;
    onCompositionStart?: (((event: React.CompositionEvent<HTMLAnchorElement>) => void) & ((event: React.CompositionEvent<HTMLButtonElement>) => void)) | undefined;
    onCompositionStartCapture?: (((event: React.CompositionEvent<HTMLAnchorElement>) => void) & ((event: React.CompositionEvent<HTMLButtonElement>) => void)) | undefined;
    onCompositionUpdate?: (((event: React.CompositionEvent<HTMLAnchorElement>) => void) & ((event: React.CompositionEvent<HTMLButtonElement>) => void)) | undefined;
    onCompositionUpdateCapture?: (((event: React.CompositionEvent<HTMLAnchorElement>) => void) & ((event: React.CompositionEvent<HTMLButtonElement>) => void)) | undefined;
    onFocus?: (((event: React.FocusEvent<HTMLAnchorElement>) => void) & ((event: React.FocusEvent<HTMLButtonElement>) => void)) | undefined;
    onFocusCapture?: (((event: React.FocusEvent<HTMLAnchorElement>) => void) & ((event: React.FocusEvent<HTMLButtonElement>) => void)) | undefined;
    onBlur?: (((event: React.FocusEvent<HTMLAnchorElement>) => void) & ((event: React.FocusEvent<HTMLButtonElement>) => void)) | undefined;
    onBlurCapture?: (((event: React.FocusEvent<HTMLAnchorElement>) => void) & ((event: React.FocusEvent<HTMLButtonElement>) => void)) | undefined;
    onChange?: (((event: React.FormEvent<HTMLAnchorElement>) => void) & ((event: React.FormEvent<HTMLButtonElement>) => void)) | undefined;
    onChangeCapture?: (((event: React.FormEvent<HTMLAnchorElement>) => void) & ((event: React.FormEvent<HTMLButtonElement>) => void)) | undefined;
    onBeforeInput?: (((event: React.FormEvent<HTMLAnchorElement>) => void) & ((event: React.FormEvent<HTMLButtonElement>) => void)) | undefined;
    onBeforeInputCapture?: (((event: React.FormEvent<HTMLAnchorElement>) => void) & ((event: React.FormEvent<HTMLButtonElement>) => void)) | undefined;
    onInput?: (((event: React.FormEvent<HTMLAnchorElement>) => void) & ((event: React.FormEvent<HTMLButtonElement>) => void)) | undefined;
    onInputCapture?: (((event: React.FormEvent<HTMLAnchorElement>) => void) & ((event: React.FormEvent<HTMLButtonElement>) => void)) | undefined;
    onReset?: (((event: React.FormEvent<HTMLAnchorElement>) => void) & ((event: React.FormEvent<HTMLButtonElement>) => void)) | undefined;
    onResetCapture?: (((event: React.FormEvent<HTMLAnchorElement>) => void) & ((event: React.FormEvent<HTMLButtonElement>) => void)) | undefined;
    onSubmit?: (((event: React.FormEvent<HTMLAnchorElement>) => void) & ((event: React.FormEvent<HTMLButtonElement>) => void)) | undefined;
    onSubmitCapture?: (((event: React.FormEvent<HTMLAnchorElement>) => void) & ((event: React.FormEvent<HTMLButtonElement>) => void)) | undefined;
    onInvalid?: (((event: React.FormEvent<HTMLAnchorElement>) => void) & ((event: React.FormEvent<HTMLButtonElement>) => void)) | undefined;
    onInvalidCapture?: (((event: React.FormEvent<HTMLAnchorElement>) => void) & ((event: React.FormEvent<HTMLButtonElement>) => void)) | undefined;
    onLoad?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onLoadCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onError?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onErrorCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onKeyDown?: (((event: React.KeyboardEvent<HTMLAnchorElement>) => void) & ((event: React.KeyboardEvent<HTMLButtonElement>) => void)) | undefined;
    onKeyDownCapture?: (((event: React.KeyboardEvent<HTMLAnchorElement>) => void) & ((event: React.KeyboardEvent<HTMLButtonElement>) => void)) | undefined;
    onKeyPress?: (((event: React.KeyboardEvent<HTMLAnchorElement>) => void) & ((event: React.KeyboardEvent<HTMLButtonElement>) => void)) | undefined;
    onKeyPressCapture?: (((event: React.KeyboardEvent<HTMLAnchorElement>) => void) & ((event: React.KeyboardEvent<HTMLButtonElement>) => void)) | undefined;
    onKeyUp?: (((event: React.KeyboardEvent<HTMLAnchorElement>) => void) & ((event: React.KeyboardEvent<HTMLButtonElement>) => void)) | undefined;
    onKeyUpCapture?: (((event: React.KeyboardEvent<HTMLAnchorElement>) => void) & ((event: React.KeyboardEvent<HTMLButtonElement>) => void)) | undefined;
    onAbort?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onAbortCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onCanPlay?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onCanPlayCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onCanPlayThrough?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onCanPlayThroughCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onDurationChange?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onDurationChangeCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onEmptied?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onEmptiedCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onEncrypted?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onEncryptedCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onEnded?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onEndedCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onLoadedData?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onLoadedDataCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onLoadedMetadata?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onLoadedMetadataCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onLoadStart?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onLoadStartCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onPause?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onPauseCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onPlay?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onPlayCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onPlaying?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onPlayingCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onProgress?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onProgressCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onRateChange?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onRateChangeCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onSeeked?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onSeekedCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onSeeking?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onSeekingCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onStalled?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onStalledCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onSuspend?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onSuspendCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onTimeUpdate?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onTimeUpdateCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onVolumeChange?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onVolumeChangeCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onWaiting?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onWaitingCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onAuxClick?: (((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)) | undefined;
    onAuxClickCapture?: (((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)) | undefined;
    onClick?: (((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)) | undefined;
    onClickCapture?: (((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)) | undefined;
    onContextMenu?: (((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)) | undefined;
    onContextMenuCapture?: (((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)) | undefined;
    onDoubleClick?: (((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)) | undefined;
    onDoubleClickCapture?: (((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)) | undefined;
    onDrag?: (((event: React.DragEvent<HTMLAnchorElement>) => void) & ((event: React.DragEvent<HTMLButtonElement>) => void)) | undefined;
    onDragCapture?: (((event: React.DragEvent<HTMLAnchorElement>) => void) & ((event: React.DragEvent<HTMLButtonElement>) => void)) | undefined;
    onDragEnd?: (((event: React.DragEvent<HTMLAnchorElement>) => void) & ((event: React.DragEvent<HTMLButtonElement>) => void)) | undefined;
    onDragEndCapture?: (((event: React.DragEvent<HTMLAnchorElement>) => void) & ((event: React.DragEvent<HTMLButtonElement>) => void)) | undefined;
    onDragEnter?: (((event: React.DragEvent<HTMLAnchorElement>) => void) & ((event: React.DragEvent<HTMLButtonElement>) => void)) | undefined;
    onDragEnterCapture?: (((event: React.DragEvent<HTMLAnchorElement>) => void) & ((event: React.DragEvent<HTMLButtonElement>) => void)) | undefined;
    onDragExit?: (((event: React.DragEvent<HTMLAnchorElement>) => void) & ((event: React.DragEvent<HTMLButtonElement>) => void)) | undefined;
    onDragExitCapture?: (((event: React.DragEvent<HTMLAnchorElement>) => void) & ((event: React.DragEvent<HTMLButtonElement>) => void)) | undefined;
    onDragLeave?: (((event: React.DragEvent<HTMLAnchorElement>) => void) & ((event: React.DragEvent<HTMLButtonElement>) => void)) | undefined;
    onDragLeaveCapture?: (((event: React.DragEvent<HTMLAnchorElement>) => void) & ((event: React.DragEvent<HTMLButtonElement>) => void)) | undefined;
    onDragOver?: (((event: React.DragEvent<HTMLAnchorElement>) => void) & ((event: React.DragEvent<HTMLButtonElement>) => void)) | undefined;
    onDragOverCapture?: (((event: React.DragEvent<HTMLAnchorElement>) => void) & ((event: React.DragEvent<HTMLButtonElement>) => void)) | undefined;
    onDragStart?: (((event: React.DragEvent<HTMLAnchorElement>) => void) & ((event: React.DragEvent<HTMLButtonElement>) => void)) | undefined;
    onDragStartCapture?: (((event: React.DragEvent<HTMLAnchorElement>) => void) & ((event: React.DragEvent<HTMLButtonElement>) => void)) | undefined;
    onDrop?: (((event: React.DragEvent<HTMLAnchorElement>) => void) & ((event: React.DragEvent<HTMLButtonElement>) => void)) | undefined;
    onDropCapture?: (((event: React.DragEvent<HTMLAnchorElement>) => void) & ((event: React.DragEvent<HTMLButtonElement>) => void)) | undefined;
    onMouseDown?: (((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)) | undefined;
    onMouseDownCapture?: (((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)) | undefined;
    onMouseEnter?: (((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)) | undefined;
    onMouseLeave?: (((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)) | undefined;
    onMouseMove?: (((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)) | undefined;
    onMouseMoveCapture?: (((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)) | undefined;
    onMouseOut?: (((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)) | undefined;
    onMouseOutCapture?: (((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)) | undefined;
    onMouseOver?: (((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)) | undefined;
    onMouseOverCapture?: (((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)) | undefined;
    onMouseUp?: (((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)) | undefined;
    onMouseUpCapture?: (((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)) | undefined;
    onSelect?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onSelectCapture?: (((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) & ((event: React.SyntheticEvent<HTMLButtonElement, Event>) => void)) | undefined;
    onTouchCancel?: (((event: React.TouchEvent<HTMLAnchorElement>) => void) & ((event: React.TouchEvent<HTMLButtonElement>) => void)) | undefined;
    onTouchCancelCapture?: (((event: React.TouchEvent<HTMLAnchorElement>) => void) & ((event: React.TouchEvent<HTMLButtonElement>) => void)) | undefined;
    onTouchEnd?: (((event: React.TouchEvent<HTMLAnchorElement>) => void) & ((event: React.TouchEvent<HTMLButtonElement>) => void)) | undefined;
    onTouchEndCapture?: (((event: React.TouchEvent<HTMLAnchorElement>) => void) & ((event: React.TouchEvent<HTMLButtonElement>) => void)) | undefined;
    onTouchMove?: (((event: React.TouchEvent<HTMLAnchorElement>) => void) & ((event: React.TouchEvent<HTMLButtonElement>) => void)) | undefined;
    onTouchMoveCapture?: (((event: React.TouchEvent<HTMLAnchorElement>) => void) & ((event: React.TouchEvent<HTMLButtonElement>) => void)) | undefined;
    onTouchStart?: (((event: React.TouchEvent<HTMLAnchorElement>) => void) & ((event: React.TouchEvent<HTMLButtonElement>) => void)) | undefined;
    onTouchStartCapture?: (((event: React.TouchEvent<HTMLAnchorElement>) => void) & ((event: React.TouchEvent<HTMLButtonElement>) => void)) | undefined;
    onPointerDown?: (((event: React.PointerEvent<HTMLAnchorElement>) => void) & ((event: React.PointerEvent<HTMLButtonElement>) => void)) | undefined;
    onPointerDownCapture?: (((event: React.PointerEvent<HTMLAnchorElement>) => void) & ((event: React.PointerEvent<HTMLButtonElement>) => void)) | undefined;
    onPointerMove?: (((event: React.PointerEvent<HTMLAnchorElement>) => void) & ((event: React.PointerEvent<HTMLButtonElement>) => void)) | undefined;
    onPointerMoveCapture?: (((event: React.PointerEvent<HTMLAnchorElement>) => void) & ((event: React.PointerEvent<HTMLButtonElement>) => void)) | undefined;
    onPointerUp?: (((event: React.PointerEvent<HTMLAnchorElement>) => void) & ((event: React.PointerEvent<HTMLButtonElement>) => void)) | undefined;
    onPointerUpCapture?: (((event: React.PointerEvent<HTMLAnchorElement>) => void) & ((event: React.PointerEvent<HTMLButtonElement>) => void)) | undefined;
    onPointerCancel?: (((event: React.PointerEvent<HTMLAnchorElement>) => void) & ((event: React.PointerEvent<HTMLButtonElement>) => void)) | undefined;
    onPointerCancelCapture?: (((event: React.PointerEvent<HTMLAnchorElement>) => void) & ((event: React.PointerEvent<HTMLButtonElement>) => void)) | undefined;
    onPointerEnter?: (((event: React.PointerEvent<HTMLAnchorElement>) => void) & ((event: React.PointerEvent<HTMLButtonElement>) => void)) | undefined;
    onPointerEnterCapture?: (((event: React.PointerEvent<HTMLAnchorElement>) => void) & ((event: React.PointerEvent<HTMLButtonElement>) => void)) | undefined;
    onPointerLeave?: (((event: React.PointerEvent<HTMLAnchorElement>) => void) & ((event: React.PointerEvent<HTMLButtonElement>) => void)) | undefined;
    onPointerLeaveCapture?: (((event: React.PointerEvent<HTMLAnchorElement>) => void) & ((event: React.PointerEvent<HTMLButtonElement>) => void)) | undefined;
    onPointerOver?: (((event: React.PointerEvent<HTMLAnchorElement>) => void) & ((event: React.PointerEvent<HTMLButtonElement>) => void)) | undefined;
    onPointerOverCapture?: (((event: React.PointerEvent<HTMLAnchorElement>) => void) & ((event: React.PointerEvent<HTMLButtonElement>) => void)) | undefined;
    onPointerOut?: (((event: React.PointerEvent<HTMLAnchorElement>) => void) & ((event: React.PointerEvent<HTMLButtonElement>) => void)) | undefined;
    onPointerOutCapture?: (((event: React.PointerEvent<HTMLAnchorElement>) => void) & ((event: React.PointerEvent<HTMLButtonElement>) => void)) | undefined;
    onGotPointerCapture?: (((event: React.PointerEvent<HTMLAnchorElement>) => void) & ((event: React.PointerEvent<HTMLButtonElement>) => void)) | undefined;
    onGotPointerCaptureCapture?: (((event: React.PointerEvent<HTMLAnchorElement>) => void) & ((event: React.PointerEvent<HTMLButtonElement>) => void)) | undefined;
    onLostPointerCapture?: (((event: React.PointerEvent<HTMLAnchorElement>) => void) & ((event: React.PointerEvent<HTMLButtonElement>) => void)) | undefined;
    onLostPointerCaptureCapture?: (((event: React.PointerEvent<HTMLAnchorElement>) => void) & ((event: React.PointerEvent<HTMLButtonElement>) => void)) | undefined;
    onScroll?: (((event: React.UIEvent<HTMLAnchorElement, UIEvent>) => void) & ((event: React.UIEvent<HTMLButtonElement, UIEvent>) => void)) | undefined;
    onScrollCapture?: (((event: React.UIEvent<HTMLAnchorElement, UIEvent>) => void) & ((event: React.UIEvent<HTMLButtonElement, UIEvent>) => void)) | undefined;
    onWheel?: (((event: React.WheelEvent<HTMLAnchorElement>) => void) & ((event: React.WheelEvent<HTMLButtonElement>) => void)) | undefined;
    onWheelCapture?: (((event: React.WheelEvent<HTMLAnchorElement>) => void) & ((event: React.WheelEvent<HTMLButtonElement>) => void)) | undefined;
    onAnimationStart?: (((event: React.AnimationEvent<HTMLAnchorElement>) => void) & ((event: React.AnimationEvent<HTMLButtonElement>) => void)) | undefined;
    onAnimationStartCapture?: (((event: React.AnimationEvent<HTMLAnchorElement>) => void) & ((event: React.AnimationEvent<HTMLButtonElement>) => void)) | undefined;
    onAnimationEnd?: (((event: React.AnimationEvent<HTMLAnchorElement>) => void) & ((event: React.AnimationEvent<HTMLButtonElement>) => void)) | undefined;
    onAnimationEndCapture?: (((event: React.AnimationEvent<HTMLAnchorElement>) => void) & ((event: React.AnimationEvent<HTMLButtonElement>) => void)) | undefined;
    onAnimationIteration?: (((event: React.AnimationEvent<HTMLAnchorElement>) => void) & ((event: React.AnimationEvent<HTMLButtonElement>) => void)) | undefined;
    onAnimationIterationCapture?: (((event: React.AnimationEvent<HTMLAnchorElement>) => void) & ((event: React.AnimationEvent<HTMLButtonElement>) => void)) | undefined;
    onTransitionEnd?: (((event: React.TransitionEvent<HTMLAnchorElement>) => void) & ((event: React.TransitionEvent<HTMLButtonElement>) => void)) | undefined;
    onTransitionEndCapture?: (((event: React.TransitionEvent<HTMLAnchorElement>) => void) & ((event: React.TransitionEvent<HTMLButtonElement>) => void)) | undefined;
    autoFocus?: boolean | undefined;
    form?: string | undefined;
    formAction?: string | undefined;
    formEncType?: string | undefined;
    formMethod?: string | undefined;
    formNoValidate?: boolean | undefined;
    formTarget?: string | undefined;
    name?: string | undefined;
    value?: string | number | readonly string[] | undefined;
    as: string | undefined;
}, Element>;
export declare namespace Button {
    var defaultProps: {
        isLoading: boolean;
        loadingText: null;
        isLink: boolean;
        appearance: btnType;
        isDisabled: boolean;
        isUnclickable: boolean;
        containsIcon: boolean;
        size: sizeType;
        ButtonWrapper: undefined;
    };
}
export default Button;