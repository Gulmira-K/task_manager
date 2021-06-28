import { Paper, CssBaseline, makeStyles } from "@material-ui/core"
import ListTitle from "./ListTitle"
import Todo from "./Todo"
import AddNew from "./AddNew"

export default function List() {
  const classes = useStyle()
  
  return (
    <Paper className={classes.root}>
      <CssBaseline />
      <ListTitle />
      <Todo />
      <Todo />
      <Todo />
      <AddNew />
    </Paper>
  )
}

const useStyle = makeStyles(theme => ({
  root: {
    width: '280px',
    backgroundColor: '#E1E5EA',
    margin: theme.spacing(2)
  },
}))