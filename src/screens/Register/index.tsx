import React, { useState } from 'react'

import { Input } from '../../components/Form/Input'
import { Button } from '../../components/Form/Button'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'
import { CategorySelectButton } from '../../components/Form/CategorySelectButton'

import * as S from './styles'

export function Register() {
  const [transactionType, setTransactionType] = useState('')

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          Cadastro
        </S.Title>
      </S.Header>
      <S.Form>
        <S.Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <S.TransactionsTypes>
            <TransactionTypeButton
              type="up"
              title="Income"
              onPress={() => handleTransactionTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton
              type="down"
              title="Outcome"
              onPress={() => handleTransactionTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </S.TransactionsTypes>
          <CategorySelectButton title="Categoria" />
        </S.Fields>
        <Button title="Enviar" />
      </S.Form>
    </S.Container>
  )
}
