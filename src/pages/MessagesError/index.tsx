import { MessagesErrorContainer, MessagesErrorList } from './styles'

export function MessagesError() {
  return (
    <MessagesErrorContainer>
      <h1>Mensagens de erro</h1>
      <MessagesErrorList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr key={1}>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
          </tbody>
        </table>
      </MessagesErrorList>
    </MessagesErrorContainer>
  )
}
