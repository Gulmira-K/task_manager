import { useState } from 'react'
import { connect } from "react-redux"
import { editTodo, deleteTodo } from '../redux/actions'
import { Paper, TextareaAutosize, CssBaseline, Button, makeStyles } from "@material-ui/core"

function Modal({ todoId, listId, text, showModal, dispatch }) {
const [newText, setNewText] = useState(text),
      classes = useStyle()

  const handleChange = (e) => {
    setNewText(e.target.value)
  }
  
  const handleSave = () => {
    showModal(false)
    dispatch(editTodo(todoId, listId, newText))
  }

  const handleDelete = () => {
    showModal(false)
    dispatch(deleteTodo(todoId, listId))
  }

  return (
    <div className={classes.container}>
      <Paper className={classes.wrapper}>
        <CssBaseline />
        <TextareaAutosize
          rows={6}
          onChange={handleChange}
          value={newText}
          className={classes.todo}
        />
        <div className={classes.btnsWrapper}>
            <Button className={classes.saveBtn} onClick={handleSave}>Save</Button>
            <Button className={classes.deleteBtn} onClick={handleDelete}>Delete</Button>
        </div>
      </Paper>
    </div>
  )
}

export default connect() (Modal);

const useStyle = makeStyles(theme => ({
  container: {
    height: '100vh',
    width: '100vw',
    background: 'rgba(255, 255, 255, 0.4)',
    position: 'absolute',
    top: '0',
    left: '0'
  },
  wrapper: {
    width: '350px',
    height: '200px',
    padding: '15px',
    backgroundColor: '#E1E5EA',
    margin: theme.spacing(2),
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  todo: {
    padding: '10px',
    width: '320px'
  },
  btnsWrapper: {
    textAlign: 'center',
    marginTop: '10px'
  },
  saveBtn: {
    backgroundColor: '#5aac43',
    color: 'white',
    marginRight: '10px'
  },
   deleteBtn: {
    backgroundColor: 'red',
    color: 'white'
  }
}))