import React from 'react'
import { Link } from 'react-router-dom'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  Divider,
  DialogTitle
} from '@material-ui/core'

import {
  // PhoneAndroid as PhoneAndroidIcon,
  LocationOn as LocationOnIcon,
  Info as InfoIcon,
  Home as HomeIcon,
  ChevronLeft as ChevronLeftIcon
} from '@material-ui/icons'
import iconFarm from '~/assets/plane.png'
import { ROUTES } from '~/views/routes'
import { useStyles } from './DrawerMenu.style'
export const DrawerMenu = ({ onClose, openDrawer }) => {
  const classes = useStyles()

  return (
    <Drawer
      anchor='left'
      open={openDrawer}
      onClose={onClose}
      BackdropProps={{
        classes: {
          root: classes.backdrop
        }
      }}
      className={classes.drawer}>
      <div className={classes.drawerTitle}>
        <div className={classes.drawerHeader}>
          <div
            style={{
              backgroundImage: `url(${iconFarm})`,
              width: 70,
              height: 60,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain'
            }}
          />
          <DialogTitle>Heathrow Airport</DialogTitle>
        </div>
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button component={Link} to={ROUTES.ROOT}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary='Home' className={classes.buttonText} />
        </ListItem>
        <ListItem button component={Link} to={ROUTES.US}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary='History' className={classes.buttonText} />
        </ListItem>
        <ListItem button className={classes.buttonLinkExternal}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://en.wikipedia.org/wiki/Heathrow_Airport#/map/0'>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary='Location' className={classes.buttonText} />
          </a>
        </ListItem>
      </List>
    </Drawer>
  )
}
