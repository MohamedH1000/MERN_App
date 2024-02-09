// import { createSlice } from "@reduxjs/toolkit";
// import * as api from '../api';
// import { createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   posts: [],
//   status:'idle',
//   error: null
// };

// export const getPosts = createAsyncThunk('posts/getPosts', async() => {
//   try {
//     const response = await api.fetchPosts()
//     return response.data;
//   } catch (error) {
//     return error.message;
//   }
// })

// export const addNewPost = createAsyncThunk('/posts/createPosts', async (initialPost) => {
//   try {
//     const response = await api.createPosts(initialPost)
//     return response.data
//   } catch (error) {
//     console.log(error.message)
//   }
// })

// export const updatePost = createAsyncThunk('posts/updatePost', async (id, updatedPost) => {
//   try {
//     const response = await api.updatePosts(id, updatedPost)
//     console.log('here is the response of the async thunk in updated post', response.data)
//     return response.data
//   } catch (error) {
//     console.log(error)
//     return updatedPost;
//   }
// })

// export const deletePost = createAsyncThunk('/posts/deletePost', async (id) => {
//   try {
//     const response = await api.deletePost(id)
//     console.log('here is the deleted post',response.data)
//   } catch (error) {
//     console.log(error)
//   }
// })

// export const likePost = createAsyncThunk('/posts/likePost', async (id) => {
//   try {
//     const response = await api.likePost(id);
//     return response.data
//   } catch (error) {
//     console.log(error)
//   }
// })

// const postSlice = createSlice({
//   name: "posts",
//   initialState,
//   reducers: {
//     postAdded: (state, action) => {
//             state.posts.push(action.payload)
//         }
//   },
//   extraReducers(builder) {
//     builder
//     .addCase(getPosts.pending, (state) => {
//       state.status = 'loading'
//     })
//     .addCase(getPosts.fulfilled, (state, action) => {
//       state.status = 'succeeded';
//       state.posts = action.payload;
//     })
//     .addCase(getPosts.rejected, (state, action) => {
//       state.status = 'failed'
//       state.error = action.error.message
//     })
//     .addCase(addNewPost.fulfilled, (state, action) => {
//       console.log('for adding new post',action.payload)
//       state.posts.push(action.payload)
//     })
//     .addCase(updatePost.pending, (state) => {
//       state.status = 'loading';
//     })
//     builder.addCase(updatePost.fulfilled, (state, action) => {
//       if (!action.payload?._id) {
//         console.log('update could not complete')
//         console.log('here is the result of the reducer',action.payload)
//         return;
//       }
//       const { _id } = action.payload;
//       const posts = state.posts.filter(post => post._id !== _id)
//       state.posts = [...posts, action.payload]
//       console.log('here is the list of state posts in reducer',state.posts)
//     })
//     .addCase(updatePost.rejected, (state, action) => {
//       state.status = 'failed';
//       state.error = action.error.message;
//     })
//     .addCase(deletePost.pending, (state) => {
//       state.status = 'loading';
//     })
//     .addCase(deletePost.fulfilled, (state, action) => {
//       state.status = 'succeeded';
//       // Remove the deleted post from the state
//       state.posts = state.posts.filter(post => post.id !== action.payload);
//     })
//     .addCase(deletePost.rejected, (state, action) => {
//       state.status = 'failed';
//       state.error = action.error.message;
//     })
//     .addCase(likePost.fulfilled, (state, action) => {
//       return state.posts.map((post) => post._id === action.payload._id ? action.payload : post)
//     })
//   } 
// });
// export const selectAllPosts = (state) => state.posts.posts;
// export const selectPostById = (state, postId) => 
//   state.posts.posts.find(post => post._id === postId);

// export const { postAdded } = postSlice.actions;

// export default postSlice.reducer;

import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};