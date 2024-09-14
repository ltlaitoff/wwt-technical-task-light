import { nanoid } from 'nanoid'
import create from 'zustand'

export interface Task {
	id: string
	text: string
	completed: boolean
}

interface TaskStore {
	tasks: Task[]
	addTask: (text: string) => void
	removeTask: (id: string) => void
	toggleTaskCompletion: (id: string) => void
}

export const useTaskStore = create<TaskStore>(set => ({
	tasks: [],
	addTask: (text: string) =>
		set(state => ({
			tasks: [...state.tasks, { id: nanoid(), text, completed: false }]
		})),
	removeTask: (id: string) =>
		set(state => ({ tasks: state.tasks.filter(task => task.id !== id) })),
	toggleTaskCompletion: (id: string) =>
		set(state => ({
			tasks: state.tasks.map(task =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		}))
}))
