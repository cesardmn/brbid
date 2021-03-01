import * as XLSX from 'xlsx'

export async function read(file) {
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
      resolve(data)
    }
    reader.onerror = (error) => {
      reject(error)
    }
  })
}
