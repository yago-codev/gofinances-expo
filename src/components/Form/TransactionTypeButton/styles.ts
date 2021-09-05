import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface ContainerProps extends IconProps {
  isActive: boolean
}

interface IconProps {
  type: 'up' | 'down'
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: ${RFValue(16)}px;
  border: ${RFValue(1.5)}px solid ${({ theme }) => theme.colors.text};
  border-radius: ${RFValue(5)}px;

  ${({ type, isActive }) => isActive && type === 'up' && css`
    background-color: ${({ theme }) => theme.colors.success_light};
    border: ${RFValue(1)}px solid ${({ theme }) => theme.colors.success_light};
  `}

  ${({ type, isActive }) => isActive && type === 'down' && css`
    background-color: ${({ theme }) => theme.colors.attention_light};
    border: ${RFValue(1)}px solid ${({ theme }) => theme.colors.attention_light};
  `}
`

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;

  color: ${({ type, theme }) =>
    type === 'up'
      ? theme.colors.success
      : theme.colors.attention
  };

  margin-right: ${RFValue(12)}px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`
