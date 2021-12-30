import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: false,
  controls: false,
  playing: false,
  sidebar: false,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrent: (state, { payload }) => {
      state.current = payload;
    },
    setControls: (state, { payload }) => {
      state.controls = payload;
    },
    setPlaying: (state, { payload }) => {
      state.playing = payload;
    },
    setSidebar: (state, { payload }) => {
      state.sidebar = payload;
    },
  },
});

export const { setCurrent, setControls, setPlaying, setSidebar } =
  playerSlice.actions;

export default playerSlice.reducer;
