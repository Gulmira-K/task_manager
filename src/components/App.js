import { useState } from "react"
import { makeStyles } from "@material-ui/core"
import { useSelector, useDispatch } from 'react-redux'


import List from "./List"
import AddNew from "./AddNew";
import mokedata from './mokedata'


function App() {
  const lists = useSelector((state) => state.lists.lists)
  const classes = useStyles();

  console.log(lists);

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

export default App;

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    overflow: 'auto'
  },
  wrapper: {
    display: 'flex'
  },
  addWrapper: {
    backgroundColor: 'rgb(0,0,0, 0.05)',
    height: '100%',
    marginTop: theme.spacing(2),
    borderRadius: '4px'
  }
}))