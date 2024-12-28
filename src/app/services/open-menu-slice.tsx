import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

interface OpenState {
	isOpen: boolean
}

const initialState: OpenState = {
	isOpen: false
}

const openSlice = createSlice({
	name: 'open',
	initialState,
	reducers: {
		openState(state, action: PayloadAction<boolean>) {
			state.isOpen = action.payload
		}
	}
})

export const { openState } = openSlice.actions
export default openSlice.reducer
