import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name:'posts',
    initialState:{posts:{}},
    reducers:{
        addPost:(state,action) =>{
            const {id, title, link_flair_text} = action.payload;
            state.posts[id] = {
              id:id,
              title:title,
              link_flair_text:link_flair_text,
            }
            
        }
    }
});
export const getPosts = async(subreddit) => {
    try{
      const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
      if(response.ok) {
        const jsonResponse = await response.json();
        const posts = jsonResponse.data.children;
        posts.forEach(post => {
            const {id, title, link_flair_text} = post.data;
            addPost({
                id:id,
                title: title,
                link_flair_text: link_flair_text,
            });
        });
      }else{
        throw new Error('No Data');
      }
    }catch(error){
      console.log(error);
    }
}

export const selectPosts = (state) => {return state.posts.posts};

export const {addPost} = postsSlice.actions;
export default postsSlice.reducer;