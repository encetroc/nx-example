import './tailwind.css'

import { Preview } from '@storybook/react'

// add tailwind dark class when background is #333333
const withDarkTheme = (Story, context) => {
  console.log('context', context)
  document.documentElement.classList.add('dark')
  switch (context.globals.backgrounds.value) {
    case '#F8F8F8':
      document.documentElement.classList.remove('dark')
      break
    case '#333333':
      document.documentElement.classList.add('dark')
      break
    default:
      document.documentElement.classList.remove('dark')
  }
  return <Story />
}

const preview: Preview = {
  decorators: [withDarkTheme],
}

export default preview
