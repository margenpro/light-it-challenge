import React, { forwardRef, ComponentPropsWithRef, ReactElement } from "react";
import classNames from "classnames";

export type ButtonVariant = "primary" | "secondary" | "secondaryGreen" ;
export type ButtonSize = "xs" | "normal" | "sm" | "md" | "lg" | "fit";

interface IButtonProps extends ComponentPropsWithRef<"button"> {
    /**
     * The different button styles (primary/secondary/tertiary) to use.
     * @default 'primary'
     */
    variant: ButtonVariant;
    /**
     * The size of the component.
     * @default 'md'
     */
    size?: ButtonSize;
    /**
     * The icon placed before children
     */
    leadingIcon?: ReactElement;
    /**
     * The icon placed after children
     */
    trailingIcon?: ReactElement;
    /**
     * The state for the button pressed
     */
    isPressed?: boolean
}

const THEME = {
    disabled: "opacity-50 cursor-not-allowed",
    primary: {
            inactive: "bg-primary-00756e text-white border-primary-00756e",
            active: "hover:bg-primary-005e58 focus:outline-005e58",
            pressed: "",
    },
    secondary: {
            inactive: "bg-gray-f8f9fa rounded-8",
            active: "hover:outline-none hover:bg-gray-dfe3e9 focus:border-gray-dfe3e9 focus:outline-none",
            pressed: "!bg-gray-dfe3e9 underline",
    },
    secondaryGreen: {
        inactive: "bg-primary-eaf6f4 border border-primary-eaf6f4 text-primary-005e58 font-semibold",
        active: "hover:bg-primary-bde2de hover:border-primary-bde2de hover:text-primary-004742 hover:underline",
        pressed: "",
    }
};

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
    (
        {
            children,
            className,
            variant,
            size = "md",
            leadingIcon,
            trailingIcon,
            disabled,
            isPressed = false,
            ...props
        },
        ref,
    ) => {
        const sizes = {
            xs: {
                width: '40px',
                height: '40px'
            },
            normal: {
                width: '100px',
                height: '40px'
            },
            sm: {
                width: '115px',
                height: '40px'
            },
            md: {
                width: '160px',
                height: '40px'
            },
            lg: {
                width: '174px',
                height: '44px'                
            },
            fit: {
                width: 'fit-content',
                height: '40px'
            }
        }
        const baseStyles = {
            display: 'flex',
            borderRadius: '8px',
            boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
            padding: '10px 16px',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            border: variant === 'secondary' ? '1px solid var(--secondary-grey-300, #AEB7C5)' : '',
        }
        return (
            <button
                ref={ref}
                style={{...baseStyles,...sizes[size]}}
                className={classNames(
                    {
                        [THEME[variant].inactive]: true,
                        [THEME.disabled]: disabled === true,
                        [THEME[variant].active]: disabled !== true,
                        [THEME[variant].pressed]: isPressed
                    },
                    className,
                )}
                disabled={disabled}
                {...props}
            >
                {leadingIcon
                    ? React.cloneElement(leadingIcon, {
                          "aria-hidden": true,
                          className: "inline-block mr-4",
                      })
                    : ""}
                {children}
                {trailingIcon
                    ? React.cloneElement(trailingIcon, {
                          "aria-hidden": true,
                          className: "inline-block ml-4",
                      })
                    : ""}
            </button>
        );
    },
);

Button.displayName = "Button";
