import React from 'react'

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
    </S.Container>
  )
}
