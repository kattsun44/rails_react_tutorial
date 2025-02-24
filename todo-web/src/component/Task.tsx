import { Checkbox } from "../components/ui/checkbox"
import { Box, Text } from "@chakra-ui/react"

type Props = {
  name: string
  isDone: boolean
}

const Task: React.FC<Props> = (props) => {
  return (
    <Box mb="16px">
      <Checkbox
        isChecked={props.isDone}
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
