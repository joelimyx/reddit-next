import {configureStore} from '@reduxjs/toolkit';
import postsSliceReducer from '../features/post/postsSlice';

export default configureStore({
    reducer:{
        posts:postsSliceReducer,
    }
});