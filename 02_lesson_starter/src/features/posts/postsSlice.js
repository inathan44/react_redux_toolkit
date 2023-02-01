import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "learning redux toolkit",
    content: `I've heard really good things!`,
  },
  {
    id: "2",
    title: "slices...",
    content: "The more I say slice, the more I want pizza mmmm",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, { payload }) {
        state.push(payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
