import * as XLSX from 'xlsx'

export default async function read(file) {
  try {
    return await __readFileAsync(file)
  } catch (err) {
    return err
  }
}

function __readFileAsync(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsArrayBuffer(file)

    reader.onload = (e) => {
      const bufferArray = e.target.result
      const wb = XLSX.read(bufferArray, { type: 'buffer' })
      const wsname = wb.SheetNames[0]
      const ws = wb.Sheets[wsname]
      const data = XLSX.utils.sheet_to_json(ws)
      
      resolve(convertXLJson(data))
    }
    reader.onerror = (error) => {
      reject(error)
    }
  })
}

export const acceptedFileTypesList = [
  'xlsx',
  'xlsb',
  'xlsm',
  'xls',
  'xml',
  'csv',
  'txt',
  'ods',
]

export const acceptedFileTypesString = acceptedFileTypesList
  .map((x) => '.' + x)
  .join(',')

export function convertXLJson(json) {
  const cols = Object.keys(json[0])
  const rows = json.map((row) => Object.values(row))
  return { json, cols, rows }
}
