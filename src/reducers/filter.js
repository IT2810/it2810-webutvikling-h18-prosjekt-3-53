import {Filter} from 'actions';

const filter = (state = Filter.SHOW_ACTIVE, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.filter;
        default:
            return state;
    }
}

export default filter;