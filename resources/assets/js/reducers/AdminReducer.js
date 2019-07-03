import { SLIDER_NAME, SLIDER_IMAGE, ADD_SLIDER_FAIL, ADD_LOADER } from '../actions/types';

const INITIAL_STATE = { sliderName: '', loading: false };

export default (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
       
            
        case SLIDER_NAME:
        return { ...state, sliderName: action.payload, error: '' };

        case SLIDER_IMAGE:
        return { ...state, sliderImage: action.payload, error: '' };

        case ADD_LOADER:
        return { ...state, loading: true, error: '' };

        case ADD_SLIDER_FAIL:
        return { ...state, loading: false, error: action.payload };
        default:
        return state;
    }
};

