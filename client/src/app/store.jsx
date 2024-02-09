import { configureStore } from '@reduxjs/toolkit';
import { reducers } from '../reducers';

// Define any middleware you want to use

// Configure the Redux store
const store = configureStore({
  reducer: reducers, // Pass your root reducer
});

export default store;