import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  align-items: center;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-bottom: ${RFValue(19)}px;
`

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`

export const Form = styled.View`
  width: 100%;
  flex: 1;
  justify-content: space-between;
  padding: ${RFValue(24)}px;
`

export const Fields = styled.View``
