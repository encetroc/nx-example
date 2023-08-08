const { createGlobPatternsForDependencies } = require('@nx/react/tailwind')
const { join } = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      light: {
        primary: 'var(--md-sys-color-primary-light)',
        'on-primary': 'var(--md-sys-color-on-primary-light)',
        'primary-container': 'var(--md-sys-color-primary-container-light)',
        'on-primary-container':
          'var(--md-sys-color-on-primary-container-light)',
        'primary-fixed': 'var(--md-sys-color-primary-fixed-light)',
        'on-primary-fixed': 'var(--md-sys-color-on-primary-fixed-light)',
        'primary-fixed-dim': 'var(--md-sys-color-primary-fixed-dim-light)',
        'on-primary-fixed-variant':
          'var(--md-sys-color-on-primary-fixed-variant-light)',
        secondary: 'var(--md-sys-color-secondary-light)',
        'on-secondary': 'var(--md-sys-color-on-secondary-light)',
        'secondary-container': 'var(--md-sys-color-secondary-container-light)',
        'on-secondary-container':
          'var(--md-sys-color-on-secondary-container-light)',
        'secondary-fixed': 'var(--md-sys-color-secondary-fixed-light)',
        'on-secondary-fixed': 'var(--md-sys-color-on-secondary-fixed-light)',
        'secondary-fixed-dim': 'var(--md-sys-color-secondary-fixed-dim-light)',
        'on-secondary-fixed-variant':
          'var(--md-sys-color-on-secondary-fixed-variant-light)',
        tertiary: 'var(--md-sys-color-tertiary-light)',
        'on-tertiary': 'var(--md-sys-color-on-tertiary-light)',
        'tertiary-container': 'var(--md-sys-color-tertiary-container-light)',
        'on-tertiary-container':
          'var(--md-sys-color-on-tertiary-container-light)',
        'tertiary-fixed': 'var(--md-sys-color-tertiary-fixed-light)',
        'on-tertiary-fixed': 'var(--md-sys-color-on-tertiary-fixed-light)',
        'tertiary-fixed-dim': 'var(--md-sys-color-tertiary-fixed-dim-light)',
        'on-tertiary-fixed-variant':
          'var(--md-sys-color-on-tertiary-fixed-variant-light)',
        error: 'var(--md-sys-color-error-light)',
        'error-container': 'var(--md-sys-color-error-container-light)',
        'on-error': 'var(--md-sys-color-on-error-light)',
        'on-error-container': 'var(--md-sys-color-on-error-container-light)',
        background: 'var(--md-sys-color-background-light)',
        'on-background': 'var(--md-sys-color-on-background-light)',
        outline: 'var(--md-sys-color-outline-light)',
        'inverse-on-surface': 'var(--md-sys-color-inverse-on-surface-light)',
        'inverse-surface': 'var(--md-sys-color-inverse-surface-light)',
        'inverse-primary': 'var(--md-sys-color-inverse-primary-light)',
        shadow: 'var(--md-sys-color-shadow-light)',
        'surface-tint': 'var(--md-sys-color-surface-tint-light)',
        'outline-variant': 'var(--md-sys-color-outline-variant-light)',
        scrim: 'var(--md-sys-color-scrim-light)',
        surface: 'var(--md-sys-color-surface-light)',
        'on-surface': 'var(--md-sys-color-on-surface-light)',
        'surface-variant': 'var(--md-sys-color-surface-variant-light)',
        'on-surface-variant': 'var(--md-sys-color-on-surface-variant-light)',
        'surface-container-highest':
          'var(--md-sys-color-surface-container-highest-light)',
        'surface-container-high':
          'var(--md-sys-color-surface-container-high-light)',
        'surface-container': 'var(--md-sys-color-surface-container-light)',
        'surface-container-low':
          'var(--md-sys-color-surface-container-low-light)',
        'surface-container-lowest':
          'var(--md-sys-color-surface-container-lowest-light)',
        'surface-dim': 'var(--md-sys-color-surface-dim-light)',
        'surface-bright': 'var(--md-sys-color-surface-bright-light)',
      },
      dark: {
        primary: 'var(--md-sys-color-primary-dark)',
        'on-primary': 'var(--md-sys-color-on-primary-dark)',
        'primary-container': 'var(--md-sys-color-primary-container-dark)',
        'on-primary-container': 'var(--md-sys-color-on-primary-container-dark)',
        'primary-fixed': 'var(--md-sys-color-primary-fixed-dark)',
        'on-primary-fixed': 'var(--md-sys-color-on-primary-fixed-dark)',
        'primary-fixed-dim': 'var(--md-sys-color-primary-fixed-dim-dark)',
        'on-primary-fixed-variant':
          'var(--md-sys-color-on-primary-fixed-variant-dark)',
        secondary: 'var(--md-sys-color-secondary-dark)',
        'on-secondary': 'var(--md-sys-color-on-secondary-dark)',
        'secondary-container': 'var(--md-sys-color-secondary-container-dark)',
        'on-secondary-container':
          'var(--md-sys-color-on-secondary-container-dark)',
        'secondary-fixed': 'var(--md-sys-color-secondary-fixed-dark)',
        'on-secondary-fixed': 'var(--md-sys-color-on-secondary-fixed-dark)',
        'secondary-fixed-dim': 'var(--md-sys-color-secondary-fixed-dim-dark)',
        'on-secondary-fixed-variant':
          'var(--md-sys-color-on-secondary-fixed-variant-dark)',
        tertiary: 'var(--md-sys-color-tertiary-dark)',
        'on-tertiary': 'var(--md-sys-color-on-tertiary-dark)',
        'tertiary-container': 'var(--md-sys-color-tertiary-container-dark)',
        'on-tertiary-container':
          'var(--md-sys-color-on-tertiary-container-dark)',
        'tertiary-fixed': 'var(--md-sys-color-tertiary-fixed-dark)',
        'on-tertiary-fixed': 'var(--md-sys-color-on-tertiary-fixed-dark)',
        'tertiary-fixed-dim': 'var(--md-sys-color-tertiary-fixed-dim-dark)',
        'on-tertiary-fixed-variant':
          'var(--md-sys-color-on-tertiary-fixed-variant-dark)',
        error: 'var(--md-sys-color-error-dark)',
        'error-container': 'var(--md-sys-color-error-container-dark)',
        'on-error': 'var(--md-sys-color-on-error-dark)',
        'on-error-container': 'var(--md-sys-color-on-error-container-dark)',
        background: 'var(--md-sys-color-background-dark)',
        'on-background': 'var(--md-sys-color-on-background-dark)',
        outline: 'var(--md-sys-color-outline-dark)',
        'inverse-on-surface': 'var(--md-sys-color-inverse-on-surface-dark)',
        'inverse-surface': 'var(--md-sys-color-inverse-surface-dark)',
        'inverse-primary': 'var(--md-sys-color-inverse-primary-dark)',
        shadow: 'var(--md-sys-color-shadow-dark)',
        'surface-tint': 'var(--md-sys-color-surface-tint-dark)',
        'outline-variant': 'var(--md-sys-color-outline-variant-dark)',
        scrim: 'var(--md-sys-color-scrim-dark)',
        surface: 'var(--md-sys-color-surface-dark)',
        'on-surface': 'var(--md-sys-color-on-surface-dark)',
        'surface-variant': 'var(--md-sys-color-surface-variant-dark)',
        'on-surface-variant': 'var(--md-sys-color-on-surface-variant-dark)',
        'surface-container-highest':
          'var(--md-sys-color-surface-container-highest-dark)',
        'surface-container-high':
          'var(--md-sys-color-surface-container-high-dark)',
        'surface-container': 'var(--md-sys-color-surface-container-dark)',
        'surface-container-low':
          'var(--md-sys-color-surface-container-low-dark)',
        'surface-container-lowest':
          'var(--md-sys-color-surface-container-lowest-dark)',
        'surface-dim': 'var(--md-sys-color-surface-dim-dark)',
        'surface-bright': 'var(--md-sys-color-surface-bright-dark)',
      },
    },
    extend: {
      opacity: {
        84: '0.84',
        88: '0.88',
        92: '0.92',
      },
      boxShadow: {
        'light-1': 'var(--md-sys-box-shadow-1-light)',
        'light-2': 'var(--md-sys-box-shadow-2-light)',
        'light-3': 'var(--md-sys-box-shadow-3-light)',
        'light-4': 'var(--md-sys-box-shadow-4-light)',
        'light-5': 'var(--md-sys-box-shadow-5-light)',
        'dark-1': 'var(--md-sys-box-shadow-1-dark)',
        'dark-2': 'var(--md-sys-box-shadow-2-dark)',
        'dark-3': 'var(--md-sys-box-shadow-3-dark)',
        'dark-4': 'var(--md-sys-box-shadow-4-dark)',
        'dark-5': 'var(--md-sys-box-shadow-5-dark)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
