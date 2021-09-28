import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deletarTarefa } from '../../store/modules/tarefas/actions'

import { Container, Header, HeaderText, Todo,Title,Content, DeleteButton,EditButton, ButtonText } from './styles'

export function Tarefa({ route }) {
  const { tarefa } = route.params

  const dispatch = useDispatch()
  const navigation = useNavigation()

  function remover() {
    dispatch(deletarTarefa(tarefa.id))
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <HeaderText>Aplicativo ToDo list</HeaderText>
      </Header>
      
      <Todo>
        <Title>Tarefa#{tarefa.titulo}</Title>
        <Content>{tarefa.conteudo}</Content>
      </Todo>

      <EditButton><ButtonText>EDITAR TAREFA</ButtonText></EditButton>
      <DeleteButton onPress={remover}><ButtonText>REMOVER TAREFA</ButtonText></DeleteButton>
    </Container>
  )
}