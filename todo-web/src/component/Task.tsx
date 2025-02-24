import { Checkbox } from "../components/ui/checkbox"
import { Box, Text } from "@chakra-ui/react"

type Props = {
  name: string
}

const Task: React.FC<Props> = (props) => {
  return (
    <Box mb="16px">
      <Checkbox colorPalette="blue" size="lg">
        <Text>{props.name}</Text>
      </Checkbox>
    </Box>
  )
}

export default Task
