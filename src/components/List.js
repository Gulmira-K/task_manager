import { Droppable } from "react-beautiful-dnd"
import { Paper, CssBaseline, makeStyles } from "@material-ui/core"
import ListTitle from "./ListTitle"
import Todo from "./Todo"
import AddNew from "./AddNew"

export default function List({ title, listId, todos}) {
  const classes = useStyle()

  return (
    <Droppable droppableId={String(listId)}>
      {provided => (
        <div  className={classes.container} {...provided.droppableProps} ref={provided.innerRef}>
          <Paper className={classes.wrapper}>
            <CssBaseline />
            <ListTitle title={title} listId={listId}/>
            {todos?.map((todo, index) => {
              return (
                <Todo key={todo.id} text={todo.text} todoId={todo.id} index={index}/>
              )
            })}
            {provided.placeholder}
            <AddNew type='to-do' listId={listId} />
          </Paper>
        </div>
      )}
    </Droppable>
  )
}

const useStyle = makeStyles(theme => ({
  container: {
   height: '100%'
  },
  wrapper: {
    width: '280px',
    backgroundColor: '#E1E5EA',
    margin: theme.spacing(2),
  },
}))