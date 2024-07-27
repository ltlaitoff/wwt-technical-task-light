import { useTranslation } from 'react-i18next'

import { Box } from '@chakra-ui/react'

import { Form } from '@components/Form'
import { ListOfTasks } from '@components/ListOfTasks'
import { useTaskStore } from '@store'

export interface Task {
	id: string
	text: string
	completed: boolean
}

export const App: React.FC = () => {
	const { t } = useTranslation()

	const { tasks } = useTaskStore()

	const completedTasks = tasks.filter(task => task.completed)
	const toDoTasks = tasks.filter(task => !task.completed)

	return (
		<Box
			maxW="90rem"
			mx="auto"
			minH="100dvh"
			paddingTop="5vh"
		>
			<Form />
			<Box
				margin="0 auto"
				display="flex"
				justifyContent="center"
				gap="30%"
			>
				<Box>
					<h3>{t('completedTasks')}</h3>
					<ListOfTasks tasks={completedTasks} />
				</Box>
				<Box>
					<h3>{t('toDoTasks')}</h3>
					<ListOfTasks tasks={toDoTasks} />
				</Box>
			</Box>
		</Box>
	)
}
