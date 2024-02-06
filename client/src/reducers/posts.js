import { createSlice } from "@reduxjs/toolkit";
import * as api from '../api';
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  status:'idle',
  error: null
};

export const getPosts = createAsyncThunk('posts/getPosts', async() => {
  try {
    const response = await api.fetchPosts()
    return response.data;
  } catch (error) {
    return error.message;
  }
})

export const addNewPost = createAsyncThunk('/posts/createPosts', async (initialPost) => {
  try {
    const response = await api.createPosts(initialPost)
    return response.data
  } catch (error) {
    console.log(error.message)
  }
})

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(getPosts.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(getPosts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      const loadedPosts = action.payload.map(post => {
        return post;
      })

      state.posts = state.posts.concat(loadedPosts)
    })
    .addCase(getPosts.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
    .addCase(addNewPost.fulfilled, (state, action) => {
      console.log(action.payload)
      state.posts.push(action.payload)
    })
  } 
});

export const selectAllPosts = (state) => state.posts.posts; 

export default postSlice.reducer;