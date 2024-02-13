import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface OpenState {
    value: boolean
}

const initialState: OpenState = {
    value: false
}

const openSlice = createSlice({
    name: 'open',
    initialState,
    reducers: {
        openState(state, action: PayloadAction<boolean>) {
            state.value = action.payload
        },
    },
});

export const { openState } = openSlice.actions;
export default openSlice.reducer;