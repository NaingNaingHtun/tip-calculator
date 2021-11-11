import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'numberOfPeople',
    initialState: '',
    reducers: {
        setNumberOfPeople: (state, action) => state = action.payload
    }
}
export const selectNumberOfPeople = state => state.numberOfPeople;
const numberOfPeopleSlice = createSlice(options);
export const { setNumberOfPeople } = numberOfPeopleSlice.actions;
const numberOfPeopleSliceReducer = numberOfPeopleSlice.reducer;
export default numberOfPeopleSliceReducer;