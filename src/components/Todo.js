import { Paper, makeStyles } from "@material-ui/core"

export default function Todo({text}) {
  const classes = useStyle();
  
  return (
    <Paper className={classes.todo}>
      {text}
    </Paper>
  )
}

const useStyle = makeStyles(theme => ({
  todo: {
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  }
}))
