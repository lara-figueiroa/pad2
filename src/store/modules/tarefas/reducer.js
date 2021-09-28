import produce from 'immer'

const tarefas = (state = [], action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADICIONAR_TAREFA':
        const { tarefa } = action.payload
        
        draft.push({
          id: new Date().toString(),
          ...tarefa
        })
        
        break;
    
      case 'DELETAR_TAREFA':
        const { id } = action.payload

        const tarefaIndex = draft.findIndex(tar => tar.id === id)

        draft.splice(tarefaIndex, 1)

        break

      default:
        return draft
    }
  })
}

export { tarefas }