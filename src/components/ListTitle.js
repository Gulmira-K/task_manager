import { Typography, makeStyles } from "@material-ui/core"
import  MoreHorizIcon from "@material-ui/icons/MoreHoriz"

export default function ListTitle() {
  const classes = useStyle()

  return (
    <div className={classes.titleWrapper}>
      <Typography className={classes.title}>
        List
      </Typography>
      <MoreHorizIcon />
    </div>
 )
}

const useStyle = makeStyles(theme => ({
  titleWrapper: {
    display: 'flex',
    margin: theme.spacing(1)
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold'
  }
}))