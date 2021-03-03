import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../../gSheetsApi.json'

export default async function (req, res) {
  const doc = new GoogleSpreadsheet(
    '1Yh30riL1D3GpVkGrofl9ktRVrzE40mCApR5ci1V6ufU'
  )

  await doc.useServiceAccountAuth({
    client_email: credentials.client_email,
    private_key: credentials.private_key,
  })

  await doc.loadInfo()

  const sheet = doc.sheetsById[0]
  const rows = await sheet.getRows()
  console.log(rows);

  const teste = rows.map(({dia, cadastrado, disponivel}) => {
    return(
      {dia, cadastrado, disponivel }
    )
  })

  res.send({
    sheetTitle: sheet.title,
    teste
  })  
}
