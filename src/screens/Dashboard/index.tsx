import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'

import { HighlightCard } from '../../components/HighlightCard'

import * as S from './styles'

export function Dashboard() {
  return (
    <S.Container>
      <S.Header>
        <S.UserWrapper>
          <S.UserInfo>
            <S.Photo
              source={{ uri: 'https://avatars.githubusercontent.com/u/42048838?s=60&v=4' }}
            />
            <S.User>
              <S.UserGreeting>
                Olá,
              </S.UserGreeting>
              <S.UserName>
                Yago
              </S.UserName>
            </S.User>
          </S.UserInfo>
          <S.IconPower name="power" />
        </S.UserWrapper>
      </S.Header>
      <S.HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </S.HighlightCards>
    </S.Container>
  )
}
