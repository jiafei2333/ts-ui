import { ButtonHTMLAttributes, PropsWithChildren, ReactNode, AnchorHTMLAttributes } from 'react';
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
export interface CustormButtonProps {
    /** 是否禁用 **/
    disabled?: boolean;
    /** 是否加载中 */
    isLoading?: boolean;
    /** 是否是a标签*/
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
export declare type ButtonProps = CustormButtonProps & AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>;
export declare function Button(props: PropsWithChildren<ButtonProps>): JSX.Element;
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
export declare const btnPadding: {
    small: string;
    medium: string;
};
export default Button;
