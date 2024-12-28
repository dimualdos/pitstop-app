import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type YMapTheme } from '@yandex/ymaps3-types'

interface IThemeState {
	themeApp: YMapTheme | undefined
}

const initialState: IThemeState = {
	themeApp: 'light'
}

const openSlice = createSlice({
	name: 'themeApp',
	initialState,
	reducers: {
		themeState(state, action: PayloadAction<YMapTheme | undefined>) {
			state.themeApp = action.payload
		}
	}
})

export const { themeState } = openSlice.actions
export default openSlice.reducer
