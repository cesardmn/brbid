import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'

import { useData } from '../../providers/data'

export default function FormDialog({
  buttonProps,
  textButton,
  options,
  setOptions,
  dismemberFile,
}) {
  const [open, setOpen] = React.useState(false)
  const { data } = useData()
  const [amount, setAmount] = React.useState('')
  const [value, setValue] = React.useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChangeAmount = (e) => {
    setAmount(e.target.value)

    options['qtde'] = e.target.value
    setOptions(options)
  }

  const handleChangeValue = (e) => {
    setValue(e.target.value)

    options['vlrUn'] = e.target.value
    setOptions(options)
  }

  function dismember() {
    dismemberFile()
    handleClose()
  }

  return (
    <div>
      <Button {...buttonProps} onClick={handleClickOpen}>
        {textButton}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{textButton}</DialogTitle>
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <TextField
                id="amount"
                select
                label="Quantidade"
                value={amount}
                onChange={handleChangeAmount}
                helperText="Selecione a coluna das quantidades."
                color="secondary"
              >
                {!!data &&
                  data.cols.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
              </TextField>
            </Grid>

            <Grid item>
              <TextField
                id="value"
                select
                label="Valor unitário"
                value={value}
                onChange={handleChangeValue}
                helperText="Selecione a coluna dos valores unitários."
                color="secondary"
              >
                {!!data &&
                  data.cols.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
              </TextField>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Sair
          </Button>
          <Button onClick={dismember} color="secondary">
            {textButton}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
