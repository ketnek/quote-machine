import { configureStore } from '@reduxjs/toolkit';
import { quoteReducer } from './components/reducers/qmReducer';


export const store = configureStore({
  reducer: {
    quoteMachine: quoteReducer
  },
});
