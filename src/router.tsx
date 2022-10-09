import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Configurations } from './pages/Configurations';
import { History } from './pages/History';
import { Home } from './pages/Home';
import { Messages } from './pages/Messages';
import { MessagesForm } from './pages/MessagesForm';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/messages-form" element={<MessagesForm />} />
        <Route path="/configurations" element={<Configurations />} />
      </Route>
    </Routes>
  );
}
