/** @format */

import { HashRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Protected from './context/Protected';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { ClientContext } from './context/ClientContext';
let theme = createTheme({
  typography: { color: 'black', button: { textTransform: 'none' } },
});
function App() {
  const [clientID, setClientID] = useState(() => localStorage.getItem('gaes_client'));
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <ClientContext.Provider value={{ clientID, setClientID }}>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/' element={<Protected />} />
            <Route path='/*' element={<Protected />} />
          </Routes>
        </ClientContext.Provider>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
