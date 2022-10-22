import React from 'react'
import clsx from 'clsx'
import {
  // PhoneAndroid as PhoneAndroidIcon,
  // LocationOn as LocationOnIcon,
  // Schedule as ScheduleIcon,
  Visibility as VisibilityIcon
} from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { ROUTES } from '~/views/routes'
import { useStyles } from './Footer.style'
// import { Typography } from '@material-ui/core'

export const Footer = ({ altMode }) => {
  const classes = useStyles()

  return (
    <div className={clsx(classes.container, altMode && classes.containerAlt)}>
      <div className={classes.innerContainer}>
        <Link to={ROUTES.ROOT}>
          <div className={classes.logo}></div>
        </Link>
        <ul className={classes.footerBlock}>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://en.wikipedia.org/wiki/Operation_Overlord'
              className={classes.link}>
              <VisibilityIcon />
              &nbsp; Operation Overlord
            </a>
          </li>
        </ul>
        <ul className={classes.footerBlock}>
          <li>
            <a
              className={classes.link}
              href='https://en.wikipedia.org/wiki/St_George%27s_Interdenominational_Chapel,_Heathrow_Airport'
              target='_blank'
              rel='noopener noreferrer'>
              &nbsp; St George's Interdenominational Chapel
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
