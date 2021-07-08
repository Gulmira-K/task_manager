import { connect } from "react-redux"
import { makeStyles } from "@material-ui/core"
import List from "./List"
import AddNew from "./AddNew"


function App({lists}) {
  const classes = useStyles()

  const list = lists.map(list => {
    return (
      <List key={list.id} title={list.title} todos={list.todos} listId={list.id}/>
    )
  })

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {list}
        <div className={classes.addWrapper}>
          <AddNew type='list'/>
        </div>
      </div>
    </div>
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