import { useState } from 'react'
import * as XLSX from 'xlsx'

import DragDropFile from '../DragDropFile'
import DataInput from '../DataInput'
import OutTable from '../OutTable'
import Demo from '../Demo'
import { newWs } from './tasks'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

export default function SheetJSApp() {
  const [data, setData] = useState([])
  const [cols, setCols] = useState([])

  function handleFile(file) {
    const reader = new FileReader()
    const rABS = !!reader.readAsBinaryString
    reader.onload = (e) => {
      const bstr = e.target.result
      const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array' })
      const wsname = wb.SheetNames[0]
      const ws = wb.Sheets[wsname]
      const data = newWs(XLSX.utils.sheet_to_json(ws, { raw: true }))
      setData(data)
      setCols(data[0])
    }
    if (rABS) reader.readAsBinaryString(file)
    else reader.readAsArrayBuffer(file)
  }

  function exportFile() {
    const ws = XLSX.utils.aoa_to_sheet(data)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'SheetJS')
    XLSX.writeFile(wb, 'desmembrado.xlsx')
  }

  return (
    <DragDropFile handleFile={handleFile}>
      <AppBar color="inherit">
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <img
              src="https://files.brbid.com.br/brbid/img/logo.svg"
              alt="brbid.com"
              style={{ height: '1.5rem' }}
            />

            <DataInput handleFile={handleFile} />

            <Button
              disabled={!data.length}
              onClick={exportFile}
              variant="contained"
              color="default"
            >
              Baixar
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>

      <Container>
        <Box my={10}>
          {data.length ? (
            <OutTable data={data} cols={cols} />
          ) : (
            <Demo />
          )}
        </Box>
      </Container>
    </DragDropFile>
  )
}
