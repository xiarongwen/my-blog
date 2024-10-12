import React from 'react';
import { useRoutes } from 'react-router-dom'
import router from './Router/index'
import Nav from './pages/nav';

import './App.css';

function App() {
  const Apps = useRoutes(router)
  return (
    <div className='App bg-slate-900'>
        <Nav />
      <section className='container mx-auto'>
        {Apps}
      </section>
    </div>
  )
}

export default App;
