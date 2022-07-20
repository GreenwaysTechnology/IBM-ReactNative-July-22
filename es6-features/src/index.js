import TodoService from "./todos/todo.service";

function main() {
    let todoService = new TodoService()
    console.log(todoService.findAll())
}
main()