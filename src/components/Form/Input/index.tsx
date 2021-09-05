import React from 'react'
import { TextInputProps } from 'react-native'

import * as S from './styles'

type Props = TextInputProps

export function Input({ ...rest }: TextInputProps) {
  return (
    <S.Container {...rest} />
  )
}
