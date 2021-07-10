import { Draggable } from "react-beautiful-dnd";
import { Paper, makeStyles } from "@material-ui/core"

export default function Todo({ text, todoId, index }) {
  const classes = useStyle();
  
  return (
    <Draggable draggableId={String(todoId)} index={index}>
      {provided => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Paper className={classes.todo}>
            {text}
          </Paper>
        </div>
      )}
    </Draggable>
  )
}

const useStyle = makeStyles(theme => ({
  todo: {
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  }
}))
