import {createContext,useContext} from "react"
export const TodoContext=createContext({
    todos:[{
        id:1,
        todo:"To Do message",
        completed:false
    }],
    addTodo:(todo)=>{

    },
    updateTodo:(id,todo)=>{},
    deletetodo:(id)=>{},
    toggleComplete:(id)=>{}
})
//use  our custom hook
export const useTodo=()=>{
    return useContext(TodoContext)
}
export const TodoProvider=TodoContext.Provider