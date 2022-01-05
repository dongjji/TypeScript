// import {Request, Response, NextFunction} from "express"
// export const createTodo = (req: Request, res: Response, next: NextFunction) => {

// }

import {RequestHandler} from 'express'
import {Todo} from '../models/todo'

const todos: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    const text = req.body.text
    const newTodo = new Todo(Math.random().toString(), text)

    todos.push(newTodo)
    return res.status(201).json({message: 'Created the todo', createdTodo: newTodo})
}

export const getTodos: RequestHandler = (req, res, next) => {
    res.status(200).json({todos: todos})
}

export const updateTodo: RequestHandler = (req, res, next) => {
    const todoId = req.params.id
    const updatedText = (req.body as {text: string}).text

    // todos.map(todo => {
    //     if (todo.id === todoId) {
    //         todo.text = updatedText
    //     }
    //     return todo
    // })

    const todoIndex = todos.findIndex(todo => todo.id === todoId)

    if(todoIndex > 0) {
        todos[todoIndex] = new Todo(todos[todoIndex].id, updatedText)
    } else {
        throw new Error('There is no todo')
    }
    res.status(203).json({message: 'Updated!', updatedTodo: todos[todoIndex]})
}

export const deleteTodo: RequestHandler = (req, res, next) => {
    const todoId = req.params.id
    const todoIndex = todos.findIndex(todo => todo.id === todoId)

    if(todoIndex > 0) {
        todos.splice(todoIndex, 1)
    } else {
        throw new Error('There is no todo')
    }
    res.json({message: "Todo deleted"})
}