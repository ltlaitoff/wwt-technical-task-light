import { useTranslation } from 'react-i18next'

import { Button, Input } from '@chakra-ui/react'

import { useTaskStore } from '@store'

export const Form = () => {
	const { tasks, addTask } = useTaskStore()
	const { t } = useTranslation()

	const handleFormSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault()
		const taskInput = ev.currentTarget.task.value.trim()

		if (tasks.includes(taskInput)) {
			alert('Уже есть такое задание')
			ev.currentTarget.task.value = ''
			return
		}

		if (taskInput === '') {
			alert(t('taskEmpty'))
			return
		}
		addTask(taskInput)
		ev.currentTarget.task.value = ''
	}

	return (
		<form
			style={{
				maxWidth: '40%',
				margin: '0 auto',
				marginBottom: '40px',
				display: 'flex',
				flexDirection: 'column'
			}}
			onSubmit={handleFormSubmit}
		>
			<Input
				placeholder="Введите данные"
				size="md"
				mb="4"
				name="task"
				type="text"
			/>
			<Button
				margin="0 auto"
				type="submit"
				colorScheme="teal"
				size="md"
			>
				{t('send')}
			</Button>
		</form>
	)
}
