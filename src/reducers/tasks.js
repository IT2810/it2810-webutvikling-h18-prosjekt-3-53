const tasks = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                action.task
            ];
        case 'COMPLETE_TASK':
            return [
                ...state,
                {
                    status: 'COMPLETED'
                }
            ];
        case 'ARCHIVE_TASK':
            return [
                ...state,
                {
                    status: 'ARCHIVED'
                }
            ];
        default:
            return state;
    }
}

export default tasks;