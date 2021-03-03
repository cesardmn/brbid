import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Zoom from '@material-ui/core/Zoom'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  toolBar: {
    width: '100%',
    display: 'flex',
    alignItems: 'space-between',
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}))

function ScrollTop(props) {
  const { children, window } = props
  const classes = useStyles()
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}

export default function PageDefault({ children }) {
  const classes = useStyles()
  return (
    <>
      <AppBar color="default">
        <Toolbar className={classes.toolBar}>
          <img
            src="https://files.brbid.com.br/brbid/img/logo.svg"
            alt="brbid.com"
            style={{ height: '1.5rem' }}
          />
          <Typography variant="subtitle1">XL Helper</Typography>

          <img
            width="20"
            height="20  "
            src="https://www.flaticon.com/svg/vstatic/svg/732/732220.svg?token=exp=1614597155~hmac=f2a433ab21277dbda023e2cb57870d7a"
            alt="excel ícone"
          />
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box my={2}>{children}</Box>
      </Container>
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}
