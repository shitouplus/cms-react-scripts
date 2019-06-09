import Home from '@/pages/Home'
import About from '@/pages/About'
import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/icons/MoveToInbox'

const Routers = [
  {
    name: 'About',
    icon: MailIcon,
    path: '/about',
    component: About
  },
  {
    name: 'Home',
    icon: InboxIcon,
    path: '/',
    component: Home
  },
]

export default Routers
