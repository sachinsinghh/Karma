import { SLIDER_NAME } from '../actions/types';

const INITIAL_STATE = { sliderName: '', password: '', loading: false };

export default (state = INITIAL_STATE, action) => {
        
    switch (action.type) {
       
            
        case SLIDER_NAME:
        return { ...state, sliderName: action.payload };
        default:
        return state;
    }
};

