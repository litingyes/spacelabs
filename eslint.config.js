// @ts-check
import antfu from '@antfu/eslint-config'

// @ts-check
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

// @ts-expect-error type error
export default await antfu({
  ...compat.extends('plugin:tailwindcss/recommended'),
})
