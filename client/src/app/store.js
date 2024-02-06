import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../reducers/posts';
import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        posts: postReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;