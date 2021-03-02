import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { handleChange, handleOnDrop, handleSuppress } from './tasks'

import { acceptedFileTypesString } from '../../xlRobots/reader'

const useStyles = makeStyles((theme) => ({
  dragArea: {
    display: 'flex',
    height: '150px',
    border: '1px solid #e2e2e2',
    borderRadius: '5px',
  },
}))

export default function XLInputFileForm({ callBack }) {
  const classes = useStyles()

  return (
    <div
      onDrop={(e) => handleOnDrop(e, callBack)}
      onDragEnter={(e) => handleSuppress(e, callBack)}
      onDragOver={(e) => handleSuppress(e, callBack)}
      className={classes.dragArea}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={6}
      >
        <Grid item>
          <form>
            <Button
              variant="contained"
              color="secondary"
              component="label"
              htmlFor="file"
            >
              escolher planilha
            </Button>
            <input
              type="file"
              accept={acceptedFileTypesString}
              onChange={(e) => {
                handleChange(e, callBack)
              }}
              name="file"
              id="file"
              hidden={true}
            />
          </form>
        </Grid>

        <Grid item>
          <Typography variant="body2">
            Ou arraste e solte a planilha aqui.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}
