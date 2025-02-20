type Props = {
  name: string
}

const Task: React.FC<Props> = (props) => {
  return (
    <li>{props.name}</li>
  )
}

export default Task
