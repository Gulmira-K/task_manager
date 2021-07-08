import { connect } from "react-redux"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { sort } from '../redux/actions'
import { makeStyles } from "@material-ui/core"
import List from "./List"
import AddNew from "./AddNew"


function App({lists, dispatch}) {
  const classes = useStyles()

  const onDragEnd = (result) => {
    const{ destination, source, draggableId, type } = result
    
    if (!destination) {
      return
    }

    dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    ))

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={classes.container}>
        <Droppable droppableId='lists' direction='horizontal' type='list'>
          {provided => (
            <div className={classes.wrapper} {...provided.droppableProps} ref={provided.innerRef}>
              {lists.map((list, index) => {
                return (
                  <List key={list.id} title={list.title} todos={list.todos} listId={list.id} index={index}/>
                )
              })}
              {provided.placeholder}
              <div className={classes.addWrapper}>
                <AddNew type='list'/>
              </div>
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext> 
  );
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps) (App);

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    overflow: 'auto',
    backgroundColor: '#1EAE98'
  },
  wrapper: {
    display: 'flex'
  },

}))