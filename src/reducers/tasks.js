const tasks = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            let task = {
                ...action.task,
                status: 'ACTIVE'
            }
            return [
                ...state,
                task
            ];
        case 'COMPLETE_TASK':
            return state.map((task) => {
                if (task.id === action.taskId) {
                    return Object.assign({}, task, {
                        status: 'COMPLETED'
                    });
                }
                return task;
            });
        case 'CLOSE_TASK':
            return state.map((task) => {
                if (task.id === action.taskId) {
                    return Object.assign({}, task, {
                        status: 'CLOSED'
                    });
                }
                return task;
            })
        default:
            return state;
    }
}

export default tasks;