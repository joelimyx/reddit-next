import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name:'posts',
    initialState:{posts:{}},
    reducers:{
        addPost:(state,action) =>{
            const {id, title, link_flair_text} = action.payload;
            state.posts[id] = {
                title:title,
                link_flair_text:link_flair_text,
            }
            
        }
    }
});
export async function getData(subreddit) {
    try{
      const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
      if(response.ok) {
        const jsonResponse = await response.json();
        
        return jsonResponse.kind;
      }
      throw new Error('No Data');
    }catch(error){
      console.log(error);
    }
}

export const selectPosts = (state) => {return state.posts.posts};

export const {addPost} = postsSlice.actions;
export default postsSlice.reducer;