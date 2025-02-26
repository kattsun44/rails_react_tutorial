import { Box, Button, Center, CheckboxGroup, Flex, Input, Text } from '@chakra-ui/react'
import './App.css'
import Task from "./component/Task"
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  type Task = {
    id: number
    name: string
    is_done: boolean
  }
  const [tasks, setTasks] = useState<Task[]>([])
  const [name, setName] = useState("")

  const fetch = async () => {
    const res = await axios.get("http://localhost:3001/tasks")
    setTasks(res.data)
  }

  const createTask = async () => {
    await axios.post("http://localhost:3001/tasks", {
      name: name,
      is_done: false,
    })
    setName("")
    fetch()
  }

  const destroyTask = async (id: number) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`)
    fetch()
  }

  const toggleIsDone = async (id: number, index: number) => {
    const isDone = tasks[index].is_done
    await axios.put(`http://localhost:3001/tasks/${id}`, {
      is_done: !isDone
    })
    fetch()
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <Box mt="64px">
      <Center>
        <Box>
          <Box mb="24px">
            <Text fontSize="24px" fontWeight="bold">タスク一覧</Text>
          </Box>
          <Flex mb="24px">
            <Input
              placeholder="タスク名を入力"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Box ml="16px">
              <Button colorPalette="teal" onClick={createTask}>
                タスクを作成
              </Button>
            </Box>
          </Flex>
          <CheckboxGroup>
            {tasks.map((task, index) => {
              return (
                <Task
                  id={task.id}
                  key={index}
                  index={index}
                  name={task.name}
                  isDone={task.is_done}
                  toggleIsDone={toggleIsDone}
                  destroyTask={destroyTask}
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
