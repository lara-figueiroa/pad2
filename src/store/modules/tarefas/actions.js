export function adicionarTarefa(tarefa) {
  return {
    type: 'ADICIONAR_TAREFA',
    payload: {
      tarefa
    }
  }
}

export function deletarTarefa(id) {
  return {
    type: 'DELETAR_TAREFA',
    payload: {
      id
    }
  }
}