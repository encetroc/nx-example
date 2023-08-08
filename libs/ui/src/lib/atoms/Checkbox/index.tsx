'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'

import { cn } from '@nx-example/helpers'

// TODO: add dark theme and other states like hover
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'z-10 w-4 h-4 border-2 border-light-on-surface-variant rounded data-[state=checked]:border-0 data-[state=checked]:bg-light-primary data-[state=checked]:text-light-on-primary',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center')}
    >
      <Check className="w-3 h-3" strokeWidth={3} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
