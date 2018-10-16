export const SET_NAME = 'SET_NAME';
export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const ARCHIVE_TASK = 'ARCHIVE_TASK';
export const SET_FILTER = 'SET_FILTER';

export const Filter = {
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ARCHIVED: 'SHOW_ARCHIVED'
};

export function setName(name) {
    return { type: SET_NAME, name };
}

export function addTask(task) {
    return { type: ADD_TASK, task };
}

export function completeTask(taskId) {
    return { type: COMPLETE_TASK, taskId }
}

export function archiveTask(taskId) {
    return { type: ARCHIVE_TASK, taskId }
}

export function setFilter(filter) {
    return { type: SET_FILTER, filter }
}