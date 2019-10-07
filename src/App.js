import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    // Initialize materialize JS
    M.AutoInit();
  });
  return (
    <main className='container'>
      <p>new react app</p>
    </main>
  );
};

export default App;
