import { useEffect, useState } from 'react'
import Router from 'next/router'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { useData } from '../providers/data'
import read, { convertXLJson } from '../xlRobots/reader'
import exportFile from '../xlRobots/export'
import dismember from '../xlRobots/dismember'

import PageDefault from '../components/PageDefault'
import XLInputFileForm from '../components/XLInputFileForm'
import OutTable from '../components/OutTable'

export default function Home() {
  const { data, setData } = useData()
  const [file, setFile] = useState()

  useEffect(async () => {
    if (!!file) {
      const fileJson = await read(file)
      setData(fileJson)
    }
  }, [file])

  function reload() {
    Router.reload(window.location.pathname)
  }

  function dismemberFile() {
    const dismembered = dismember(data.json, 'QTDE')
    setData(convertXLJson(dismembered))
  }

  const buttonCommonProps = {
    size: 'small',
    variant: 'contained',
    color: 'secondary',
  }

  return (
    <PageDefault>
      {!!file ? (
        <>
          <Grid container justify="space-evenly">
            <Grid item>
              <Button {...buttonCommonProps} onClick={reload}>
                reset
              </Button>
            </Grid>
            <Grid item>
              <Button {...buttonCommonProps} onClick={dismemberFile}>
                Desmembrar
              </Button>
            </Grid>
            <Grid item>
              <Button
                {...buttonCommonProps}
                onClick={() => {
                  exportFile(data.json)
                }}
              >
                Baixar
              </Button>
            </Grid>
          </Grid>
          <OutTable data={data} />
        </>
      ) : (
        <XLInputFileForm callBack={setFile} />
      )}
    </PageDefault>
  )
}
