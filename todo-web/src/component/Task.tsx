import { Checkbox } from "../components/ui/checkbox"
import { Box, Text } from "@chakra-ui/react"

type Props = {
  index: number
  name: string
  isDone: boolean
  toggleIsDone: (index: number) => void
}

const Task: React.FC<Props> = (props) => {
  return (
    <Box mb="16px">
      <Checkbox
        checked={props.isDone}
        colorPalette="blue"
        size="lg"
        onChange={() => {
          props.toggleIsDone(props.index)
        }}
      >
        <Text>{props.name}</Text>
      </Checkbox>
    </Box>
  )
}

export default Task
