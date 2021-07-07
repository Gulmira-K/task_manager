import { Paper, CssBaseline, makeStyles } from "@material-ui/core"
import ListTitle from "./ListTitle"
import Todo from "./Todo"
import AddNew from "./AddNew"

export default function List({ title, listId, todos}) {


  const todosList = todos?.map(todo => {
    return (
      <Todo key={todo.id} title={todo.title} />
    )
  })

  const classes = useStyle()
  
  return (
    <Paper className={classes.container}>
      <CssBaseline />
      <ListTitle title={title} listId={listId}/>
      {todosList}
      <AddNew type='todo'/>
    </Paper>
  )
}

const useStyle = makeStyles(theme => ({
  container: {
    width: '280px',
    backgroundColor: '#E1E5EA',
    margin: theme.spacing(2),
    height: '100%'
  },
}))