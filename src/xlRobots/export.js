import * as XLSX from 'xlsx'

export default function exportFile(data) {
  const ws = XLSX.utils.json_to_sheet(data)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, 'XL_Helper')
  XLSX.writeFile(wb, 'xl_helper.xlsx')
}
