import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@nx-example/helpers'

const buttonVariants = cva(
  'h-10 min-w-[2.5rem] px-6 inline-flex items-center justify-center rounded-full text-sm transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40',
  {
    variants: {
      variant: {
        filled:
          'bg-light-primary text-light-on-primary dark:bg-dark-primary dark:text-dark-on-primary hover:shadow-light-1 dark:hover:shadow-dark-1',
        outlined:
          'border bg-transparent text-light-primary border-light-outline dark:text-dark-primary dark:border-dark-outline hover:bg-light-secondary-container dark:hover:bg-dark-secondary-container',
        text: 'px-2 bg-transparent text-light-primary dark:text-dark-primary hover:bg-light-secondary-container dark:hover:bg-dark-secondary-container',
        elevated:
          'bg-light-surface-container-low text-light-primary shadow-light-1 dark:bg-dark-surface-container-low dark:text-dark-primary dark:shadow-dark-1  hover:shadow-light-2 dark:hover:shadow-dark-2',
        tonal:
          'bg-light-secondary-container text-light-on-secondary-container dark:bg-dark-secondary-container dark:text-dark-on-secondary-container hover:shadow-light-1 dark:hover:shadow-dark-1',
      },
    },
    defaultVariants: {
      variant: 'filled',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
