import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface infoModalSliceState {
  movieId: string | null;
  isOpen: boolean;
}

const initialState: infoModalSliceState = {
  movieId: "",
  isOpen: false,
};

const infoModalSlice = createSlice({
  name: "infoModal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.movieId = action.payload;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.movieId = null;
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = infoModalSlice.actions;

export default infoModalSlice.reducer;
