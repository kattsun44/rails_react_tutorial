import { Box, Center, CheckboxGroup, Text } from '@chakra-ui/react'
import './App.css'
import Task from "./component/Task"
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  type Task = {
    name: string
    isDone: boolean
  }
  const [tasks, setTasks] = useState<Task[]>([])

  const fetch = async () => {
    const res = await axios.get("http://localhost:3001/tasks")
    setTasks(res.data)
  }

  useEffect(() => {
    fetch()
  }, [])

  const toggleIsDone = (index: number) => {
    const tasksCopy: Task[] = [...tasks]
    const isDone: boolean = tasksCopy[index].isDone
    tasksCopy[index].isDone = !isDone
    setTasks(tasksCopy)
  }

  return (
    <Box mt="64px">
      <Center>
        <Box>
          <Box mb="24px">
            <Text fontSize="24px" fontWeight="bold">タスク一覧</Text>
          </Box>
          <CheckboxGroup>
            {tasks.map((task, index) => {
              return (
                <Task
                  key={index}
                  index={index}
                  name={task.name}
                  isDone={task.isDone}
                  toggleIsDone={toggleIsDone}
                />
              )
            })}
          </CheckboxGroup>
        </Box>
      </Center>
    </Box>
  )
}

export default App
