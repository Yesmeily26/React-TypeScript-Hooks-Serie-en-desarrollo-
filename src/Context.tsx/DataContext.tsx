import React, { createContext } from 'react';
import { useState } from 'react';

export const DataContext = createContext();

const dataFixed = {
    nombre: 'Yesmeily',
    edad: 17
  }
  


export const DataProvider = ({ children }) => {
    
    return (
<DataContext.Provider>
    { children }
    </DataContext.Provider>

    )

}
