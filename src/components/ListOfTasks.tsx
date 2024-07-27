import { useTranslation } from 'react-i18next'

import { CloseIcon } from '@chakra-ui/icons'
import {
	Checkbox,
	IconButton,
	List,
	ListItem,
	ListProps,
	Text
} from '@chakra-ui/react'
import PropTypes from 'prop-types'

import { useTaskStore } from '@store'

import { Task } from './App/App'

interface ListOfTasksProps extends ListProps {
	tasks: Task[]
}

export const ListOfTasks: React.FC<ListOfTasksProps> = ({ tasks }) => {
	const { toggleTaskCompletion, removeTask } = useTaskStore()
	const { t } = useTranslation()
	return (
		<>
			<List spacing={3}>
				{tasks.map(task => (
					<ListItem
						key={task.id}
						display="flex"
						alignItems="center"
					>
						<Checkbox
							isChecked={task.completed}
							onChange={() => toggleTaskCompletion(task.id)}
							mr="4"
						/>
						<Text
							marginRight="5px"
							as={task.completed ? 's' : 'span'}
							flex="1"
						>
							{task.text}
						</Text>
						<IconButton
							icon={<CloseIcon />}
							aria-label={t('remove')}
							size="sm"
							colorScheme="red"
							onClick={() => removeTask(task.id)}
						/>
					</ListItem>
				))}
			</List>
		</>
	)
}

ListOfTasks.propTypes = {
	tasks: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired
		}).isRequired
	).isRequired,
	handleRemoveTask: PropTypes.func.isRequired,
	handleToggleTaskCompletion: PropTypes.func.isRequired
}
