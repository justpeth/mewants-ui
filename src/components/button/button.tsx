import React from "react";
import clsx from "clsx";

type ButtonSize = "large" | "middle" | "samll";
type ButtonType = "default" | "primary" | "link" | "dashed";

interface BaseButtonProps {
  className?: string;
  /** 设置按钮展示样式 */
  btnType?: ButtonType;
  /** 设置按钮打下 */
  size?: ButtonSize;
  /** 设置按钮的禁用 */
  disabled?: boolean;
  /** 设置按钮背景色透明 */
  ghost?: boolean;
  /** 设置按钮载入状态 */
  loading?: boolean;
  /** 将按钮宽度调整为其父宽度的选项 */
  block?: boolean;
  children?: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;


const prefix = 'm-btn'

const Button: React.FC<ButtonProps> = (props) => {
  let { size, block, className, disabled, btnType, href, ghost, loading, children, ...rest } = props;
  let classes = clsx(
    "m-btn",
    {
      [`${prefix}-${btnType}`]: btnType,
      [`${prefix}-${size}`]: size,
      [`${prefix}-block`]: block,
      [`${prefix}-ghost`]: ghost,
      [`${prefix}-loading`]: loading,
    },
    className
  );

  if (btnType === 'link') {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  ghost: false,
  btnType: "default",
  loading: false,
  children: 'button',
};

export default Button;
