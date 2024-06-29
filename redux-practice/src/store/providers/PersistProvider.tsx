import React from 'react'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from '../store';

const persistor = persistStore(store);
const PersistProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
  )
}

export default PersistProvider