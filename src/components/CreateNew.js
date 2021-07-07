import { useState } from "react"
import { addList, generateListId } from "../redux/listsSlice"
import { useDispatch } from 'react-redux'
import { Paper, InputBase, makeStyles, Button, IconButton } from "@material-ui/core"
import ClearIcon from "@material-ui/icons/Clear"

export default function CreateNew({type, setOpen}) {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  
  const classes = useStyle()

  const handleChange = (e) => {
    let value = e.target.value
    setText(value)
  }

  const handleAddList = () => {
    dispatch(addList(text, `list${Math.floor(Math.random() * 99)}`) )
    setOpen(false)
    setText('')
  }

  return (
    <div>
      <Paper className={classes.inputWrapper}>
        <InputBase
          value={text}
          onChange={handleChange}
          multiline
          placeholder={`Enter new ${type}`} />
      </Paper>
      <div className={classes.btnsWrapper}>
        <Button className={classes.addBtn} onClick={type === 'list' ? handleAddList : null}>Add {type}</Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
    
  )
}

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

