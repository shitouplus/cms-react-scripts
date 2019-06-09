import Home from '@/pages/Home'
import About from '@/pages/About'
import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/icons/MoveToInbox'

const Routers = [
  {
    name: 'Home',
    icon: InboxIcon,
    path: '/home',
    component: Home
  },
  {
    name: 'About',
    icon: MailIcon,
    path: '/about',
    component: About
  }
]

export default Routers
