import * as XLSX from 'xlsx'

import dismember  from '../../xlRobots/dismember'
import sortByCol from '../../xlRobots/sortByCol'
import formatCurrency from '../../xlRobots/formatCurrency'

export function newWs(items) {
  const dismembered = dismember(items, 'QTDE')
  const formatVals = formatCurrency(dismembered, 'VLR_UN')
  const sorted = sortByCol(formatVals, 'VLR_UN')

  const data = sorted
  const ws = XLSX.utils.json_to_sheet(data)
  return XLSX.utils.sheet_to_json(ws, { header: 1 })
}
