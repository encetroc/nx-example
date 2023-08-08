'use client'

import * as React from 'react'
import { MoreHorizontal } from 'lucide-react'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'

import { Button } from '../../atoms/Button'
import {
  DropdownMenu as DropdownMenuPrimitive,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuGroup,
  DropdownMenuRadioItem,
  DropdownMenuItem,
} from '../../atoms/DropdownMenu'

function reducer(state, action) {
  return { ...state, [action.key]: action.value }
}

type Option = {
  label: string
  value: string
}

export type Options = {
  label: string
  value: string
  values: Option[]
  showLabel?: boolean
  type?: 'checkbox' | 'radio'
}

type DropdownMenuProps = {
  options: Options[]
}

export function DropdownMenu({ options }: DropdownMenuProps) {
  // TODO: for now the state is hard coded, but it should be dynamic, based on the options
  // TODO: figure out how this component will comunicate its state to the parent component if needed
  const [state, dispatch] = React.useReducer(reducer, {
    'status-bar': true,
    'activity-bar': true,
    panel: false,
    window: 'dark',
  })

  return (
    <DropdownMenuPrimitive>
      <DropdownMenuTrigger asChild>
        <Button variant="text">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {options.map((option) => {
          return (
            <>
              {option.showLabel && (
                <DropdownMenuLabel>{option.label}</DropdownMenuLabel>
              )}
              <DropdownMenuSeparator />

              {option.type === 'checkbox' &&
                option.values.map((value) => {
                  return (
                    <DropdownMenuCheckboxItem
                      checked={state[value.value]}
                      onCheckedChange={(checked) =>
                        dispatch({ key: value.value, value: checked })
                      }
                    >
                      {value.label}
                    </DropdownMenuCheckboxItem>
                  )
                })}

              {option.type === 'radio' && (
                <DropdownMenuRadioGroup
                  value={state[option.value]}
                  onValueChange={(value) =>
                    dispatch({ key: option.value, value })
                  }
                >
                  {option.values.map((value) => {
                    return (
                      <DropdownMenuRadioItem value={value.value}>
                        {value.label}
                      </DropdownMenuRadioItem>
                    )
                  })}
                </DropdownMenuRadioGroup>
              )}

              {!option.type && (
                <DropdownMenuGroup>
                  {option.values.map((value) => {
                    return <DropdownMenuItem>{value.label}</DropdownMenuItem>
                  })}
                </DropdownMenuGroup>
              )}
            </>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenuPrimitive>
  )
}
