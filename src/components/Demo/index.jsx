import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export default function Demo() {
  return (
    <Grid container justify="center" direction="column" alignItems="center">
      <Typography variant="subtitle1" component="p">
        Desmembra as linhas cujo valor da coluna 'QTDE' é maior que 1.
      </Typography>

      <br />

      <Typography variant="caption" component="p" >
        Clique em 'ESCOLHER ARQUIVO' ou arraste e solte o arquivo aqui.
      </Typography>

      <br />
      <br />

      <img src="./show.gif" alt="demonstração" style={{height: '25rem'}} />
    </Grid>
  )
}
