import { ADD_CHILD, SAVE_CHILD } from './index'

const add = () => ({type: ADD_CHILD});

const save = (idx, data) => ({type: SAVE_CHILD, idx, data});

export { add, save }
