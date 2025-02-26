import { CloseButton } from "../components/ui/close-button"
import { Checkbox } from "../components/ui/checkbox"
import { Flex, Text } from "@chakra-ui/react"

type Props = {
  id: number
  index: number
  name: string
  isDone: boolean
  toggleIsDone: (id: number, index: number) => void
  destroyTask: (id: number) => void
}

const Task: React.FC<Props> = (props) => {
  return (
    <Flex mb="16px" justifyContent="space-between" alignItems="center">
      <Checkbox
        checked={props.isDone}
        colorPalette="blue"
        size="lg"
        onChange={() => {
          props.toggleIsDone(props.id, props.index)
        }}
      >
        <Text>{props.name}</Text>
      </Checkbox>
      <CloseButton onClick={() => props.destroyTask(props.id)} />
    </Flex>
  )
}

export default Task
