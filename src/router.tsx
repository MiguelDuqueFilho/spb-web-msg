import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Configurations } from './pages/Configurations'
import { History } from './pages/History'
import { Home } from './pages/Home'
import { MessagesError } from './pages/MessagesError'
import { MessagesSTR } from './pages/MessagesSTR'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/messageserror" element={<MessagesError />} />
        <Route path="/configurations" element={<Configurations />} />
        <Route path="/selic" element={<History />} />
        <Route path="/messagesstr" element={<MessagesSTR />} />
      </Route>
    </Routes>
  )
}
