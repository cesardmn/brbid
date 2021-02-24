import * as XLSX from 'xlsx'

export function dismember(data) {
  const uniques = data.filter((dt) => dt.QTDE === 1)
  const result = [...uniques]

  const multiples = data.filter((dt) => dt.QTDE > 1)

  for (let item of multiples) {
    const range = item.QTDE

    for (let i = 0; i < range; i++) {
      item.QTDE = 1
      result.push(item)
    }
  }
  return result
}

export function newWs(data) {
  const json_data = dismember(data)
  const ws = XLSX.utils.json_to_sheet(json_data)
  return XLSX.utils.sheet_to_json(ws, { header: 1 })
}
