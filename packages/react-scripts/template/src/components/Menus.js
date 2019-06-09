import React from 'react'
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Routes from '@/routers'

const useStyles = withStyles(theme => ({
  selected: {
    content: JSON.stringify(theme),
    color: theme.palette.primary.dark,
  },
}));

@useStyles
class Menus extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <div>
        <List>
          {
            Routes.map(item => (
              <NavLink key={item.name} exact to={item.path} activeClassName={classes.selected}>
                <ListItem button>
                  <ListItemIcon>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
              </NavLink>
            ))
          }
        </List>
      </div>
    )
  }
}

export default Menus
