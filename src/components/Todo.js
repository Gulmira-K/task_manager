import React, { useState } from "react"
import { Draggable } from "react-beautiful-dnd"
import { Paper, makeStyles } from "@material-ui/core"
import Modal from './Modal'


export default function Todo({ text, todoId, index, listId }) {
  const [showModal, setShowModal] = useState(false),
        classes = useStyle()
  
  const handleClick = () => {
    setShowModal(!showModal)
  }

  return (
    <React.Fragment >
      {showModal ? <Modal text={text} todoId={todoId} listId={listId} showModal={setShowModal} /> : null}
      <Draggable draggableId={String(todoId)} index={index}>
        {provided => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} onClick={handleClick}>
            <Paper className={classes.todo}>
              {text}
            </Paper>
          </div>
        )}
      </Draggable>
    </React.Fragment>
  )
}

const useStyle = makeStyles(theme => ({
  todo: {
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  }
}))
