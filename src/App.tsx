import { useState } from 'react';
import { BotonCambiarData } from './components/BotonCambiarData';

import { Pagina1 } from './components/Pagina1';
import { Pagina2 } from './components/Pagina2';
import { DataProvider } from './Context.tsx/DataContext';

const dataFixed = {
  nombre: 'Yesmeily',
  edad: 17
}

function App() {

  const [data, setData] = useState(dataFixed)

return(
<DataProvider>
<div className="container">
      
<Pagina1 data={ data } />
<Pagina2 data={ data }/>
<BotonCambiarData setData={ setData }/>

    </div>
    </DataProvider>

  );

  }


export default App;
