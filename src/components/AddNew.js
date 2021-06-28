import { useState } from "react"
import { Collapse, Paper, Typography, fade, makeStyles } from "@material-ui/core"
import CreateNew from "./CreateNew"
import { classes } from "istanbul-lib-coverage"

export default function AddNew() {
  const [open, setOpen] = useState(false)
  const classes = useStyle()

  return (
    <div className={classes.container}>
      <Collapse in={open}>
        <CreateNew />
      </Collapse>
      <Collapse in={!open}>
        <Paper className={classes.addNewText}>
          <Typography>Add a todo</Typography>
        </Paper>
      </Collapse>
    </div>
  )
}

const useStyle = makeStyles(theme => ({
  container: {
    width: '280px',
    marginTop: theme.spacing(1)
  },
  addNewText: {
    padding: theme.spacing(0.5),
    margin: theme.spacing(1),
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: fade('#000', 0.1)
    }
  }
}))