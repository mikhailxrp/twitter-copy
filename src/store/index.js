import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';
import usersReducer from './usersSlice';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    user: userReducer,
  },
});
