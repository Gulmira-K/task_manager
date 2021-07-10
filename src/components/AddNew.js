import { useState } from "react"
import { Collapse, Paper, Typography, fade, makeStyles } from "@material-ui/core"
import CreateNew from "./CreateNew"

export default function AddNew({type, listId}) {
  const [open, setOpen] = useState(false)
  
  const classes = useStyle()

  return (
    <div className={classes.container}>
      <Collapse in={open}>
        <CreateNew type={type} setOpen={setOpen} listId={listId}/>
      </Collapse>
      <Collapse in={!open}>
        <Paper className={classes.addNewText} onClick={() => setOpen(true)}>
          <Typography>+ Add a {type}</Typography>
        </Paper>
      </Collapse>
    </div>
  )
}

const useStyle = makeStyles(theme => ({
  container: {
    width: '280px',
    marginTop: theme.spacing(1),
    cursor:'pointer'
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