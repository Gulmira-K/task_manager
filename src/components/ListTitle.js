import React, { useState } from "react"
import { Typography, makeStyles, InputBase} from "@material-ui/core"
import  MoreHorizIcon from "@material-ui/icons/MoreHoriz"

export default function ListTitle({ title, listId }) {
  const [edit, setEdit] = useState(false)
  const [newTitle, setNewTitle] = useState(title)

 
  const handleTitleChange = () => {
    // updateListTitle(newTitle, listId)
    setEdit(false)
  }
  


  const classes = useStyle()

  return (
    <React.Fragment>
      {edit ?
        (
          <InputBase
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onBlur={handleTitleChange}
            inputProps = {{className: classes.input}}
            autoFocus
            fullWidth
          />
        ) : (
          <div className={classes.titleWrapper} onClick={() => setEdit(true)}>
            <Typography className={classes.title}>
              {newTitle}
            </Typography>
            <MoreHorizIcon />
          </div>
        )
      }
    </React.Fragment >
  )
}

const useStyle = makeStyles(theme => ({
  titleWrapper: {
    display: 'flex',
    margin: theme.spacing(1),
    padding: theme.spacing(0.5, 0.5, 0.5, 0.5),
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    fortSize: '1.2rem'
  },
  input: {
    fontWeight: 'bold',
    margin: theme.spacing(1, 1, 0, 1),
    padding: theme.spacing(0.5, 0.5, 0.5, 0.5),
    fortSize: '1.2rem',
    '&:focus': {
      backgroundColor: 'white',
      borderRadius: '4px',
      border: '1px solid blue'
    }
  }
}))