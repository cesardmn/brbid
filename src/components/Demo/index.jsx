import { useState } from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

export default function Demo() {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Grid container justify="center" direction="column" alignItems="center">
      <Typography variant="subtitle1" component="p">
        Desmembra as linhas cujo valor da coluna 'QTDE' é maior que 1.
      </Typography>

      <br />

      <Typography variant="caption" component="p">
        Clique em 'ESCOLHER ARQUIVO' ou arraste e solte o arquivo aqui.
      </Typography>

      <br />
      <br />

      <Button onClick={handleClickOpen} variant="contained" >Ver Exemplo</Button>

      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
        <Paper elevation={3}>
          <img
            src="./show.gif"
            alt="demonstração"
            style={{ height: '25rem' }}
          />
        </Paper>
      </Dialog>
    </Grid>
  )
}
