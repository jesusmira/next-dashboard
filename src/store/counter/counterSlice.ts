import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface counterState {
    count: number;
    isReady: boolean;
}

const  initialState: counterState = {
    count: 5,
    isReady: false,
}

export const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        initCounterState: (state, action: PayloadAction<number> ) => {
            if( state.isReady ) return;
            state.count = action.payload;
            state.isReady = true;
        },


        addOne: (state, /* action */ ) => {
            state.count++;
        },
        substractOne: (state, /* action */ ) => {
            if (state.count === 0) return;
            state.count--;
        },
        resetCount: (state, action: PayloadAction<number> ) => {
            if (action.payload < 0) action.payload = 0;
            state.count = action.payload;
        },
        
    }
});


// Action creators are generated for each case reducer function
export const { addOne, substractOne, resetCount, initCounterState } = countSlice.actions;

export default countSlice.reducer;