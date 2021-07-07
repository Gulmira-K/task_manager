import { Paper, makeStyles } from "@material-ui/core"

export default function Todo({title}) {
  const classes = useStyle();
  return (
    <Paper className={classes.todo}>
      {title}
    </Paper>
  )
}

const useStyle = makeStyles(theme => ({
  todo: {
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  }
}))
