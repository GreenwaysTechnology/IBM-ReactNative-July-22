import { TODOS } from './todo.mock'

class TodoService {
    constructor() { }
    //return todos 
    findAll() {
        return TODOS
    }
}
export default TodoService;