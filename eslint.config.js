import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default await antfu(
  ...compat.extends('plugin:tailwindcss/recommended'),
)
