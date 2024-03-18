import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './TodoReducer'


export const useTodo = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('Lista Todo')) || []
    }

    const [state, dispatch] = useReducer(todoReducer, [], init)
    useEffect(() => {
        localStorage.setItem('Lista Todo', JSON.stringify(state))
    }, [state])




    const handleNewTodo = todo => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action)
    }

    const deleteTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }
        dispatch(action)
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }
        dispatch(action)
    }


    return {
        state,
        handleNewTodo,
        handleToggleTodo,
        deleteTodo

    }
}