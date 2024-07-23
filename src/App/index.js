import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

//anatomia de carpetas
// - por componentes -> se vuelven dificil de mantener en proyectos grandes
// - Carpeta por cada funcionabilidad de la aplicacion

function App() { 
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
