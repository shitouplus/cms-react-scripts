import React from 'react'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Routes from '@/routers'

class Menus extends React.Component {
  render () {
    return (
      <div>
        <List>
          {
            Routes.map(item => (
              <Link key={item.name} to={item.path}>
                <ListItem button>
                  <ListItemIcon>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
              </Link>
            ))
          }
        </List>
      </div>
    )
  }
}

export default Menus
