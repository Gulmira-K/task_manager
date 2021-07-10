import React, { useState } from "react"
import { connect } from "react-redux"
import { editListTitle, deleteList } from '../redux/actions'
import { Typography, makeStyles, InputBase} from "@material-ui/core"
import ClearIcon from "@material-ui/icons/Clear"

function ListTitle({title, listId, dispatch}) {
  const classes = useStyle(),
        [edit, setEdit] = useState(false),
        [newTitle, setNewTitle] = useState(title)

  const handleTitleChange = () => {
    setEdit(false)
    dispatch(editListTitle(listId, newTitle))
  }

  const removeList = () => {
    dispatch(deleteList(listId))
  }
  
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
          <div className={classes.titleWrapper}>
            <Typography className={classes.title} onClick={() => setEdit(true)}>
              {newTitle}
            </Typography>
            <ClearIcon className={classes.clearBtn} onClick={removeList}/>
          </div>
        )
      }
    </React.Fragment >
  )
}

export default connect()(ListTitle)

const useStyle = makeStyles(theme => ({
  titleWrapper: {
    display: 'flex',
    margin: theme.spacing(1),
    padding: theme.spacing(0.5, 0.5, 0.5, 0.5),
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    fortSize: '1.2rem',
    width: '80%',
    cursor: 'text'
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
  },
  clearBtn: {
    cursor: 'pointer'
  }
}))