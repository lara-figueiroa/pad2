import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Tarefa } from '../../components/Tarefa'
import { adicionarTarefa } from '../../store/modules/tarefas/actions'

import {Container, Header, HeaderText,Add, TextAdd, Input, Button,ButtonText,} from './styles'

export function Home() {
  const dispatch = useDispatch()
  const tarefas = useSelector(state => state.tarefas)

  const [conteudo, setConteudo] = useState('')

  function criarTarefa() {
    dispatch(adicionarTarefa({ titulo: tarefas.length, conteudo }))
  }

  return (
    <Container>
      <Header>
          <HeaderText>Aplicativo ToDo list</HeaderText>
        </Header>
      <Add>
        <TextAdd>Adicione aqui uma tarefa
      </TextAdd>

      <Input placeholder="tarefa" onChangeText={(e) => setConteudo(e)} />
      <Button onPress={criarTarefa}><ButtonText>ADICIONAR TAREFA</ButtonText></Button>
      </Add>

      <ScrollView style={{marginTop: 14}} showsVerticalScrollIndicator={false}>
        {tarefas.map(tarefa => (
          <Tarefa key={tarefa.id} tarefa={tarefa} />
        ))}
      </ScrollView>
    </Container>
  )
}