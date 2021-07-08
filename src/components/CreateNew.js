import { useState } from "react"
import { connect } from "react-redux"
import {addList, addTodo} from '../redux/actions'
import { Paper, InputBase, makeStyles, Button, IconButton } from "@material-ui/core"
import ClearIcon from "@material-ui/icons/Clear"

function CreateNew({ type, setOpen, listId, dispatch }) {
  const classes = useStyle()

  const [text, setText] = useState('')

  const handleChange = (e) => {
    let value = e.target.value
    setText(value)
  }

  const handleAdd = () => {
    if (type === 'list' && text) {
      dispatch(addList(text))
    } else if (type === 'to-do' && text) {
      dispatch(addTodo(listId, text))
    } else {
      return
    }
    
    setOpen(false)
    setText('')
  }



  return (
    <div>
      <Paper className={classes.inputWrapper}>
        <InputBase
          value={text}
          autoFocus
          onChange={handleChange}
          multiline
          placeholder={`Enter new ${type}`} />
      </Paper>
      <div className={classes.btnsWrapper}>
        <Button className={classes.addBtn} onClick={handleAdd}>Add {type}</Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
    
  )
}

export default connect() (CreateNew);

const useStyle = makeStyles(theme => ({
  inputWrapper: {
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  },
  btnsWrapper: {
    margin: theme.spacing(0, 1, 1, 1)
  },
  addBtn: {
    backgroundColor: '#5aac43',
    color: 'white',
    margin: theme.spacing(0, 1, 0, 0),
    '&:hover': {
      backgroundColor: '#5aac43',
      opacity: '.8'
    }
  }
}))

