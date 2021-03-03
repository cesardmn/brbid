export default function formatCurrency(items, colName) {
  /*
  params:
    items: list
    colName: string
  output: list
  todos: [validations, types]
  */

  return items.map((item) => {
    const val = item[colName]
    try {
      item[colName] = __formatval(val)
    } catch (err) {
      item[colName] = 'erro no formato'
    }
    return item
  })
}

function __formatval(val) {
  const numbers = __getNumbers(val)
  const separators = __getSeparators(val)
  const indexSeparator = __getIndexSeparator(val, separators)
  const format = [
    ...numbers.slice(0, indexSeparator),
    '.',
    ...numbers.slice(indexSeparator),
  ].join('')

  return parseFloat(format).toFixed(2)
}

function __getNumbers(val) {
  const str = String(val)
  const replace = str.replace(/[^\d]+/g, '')
  return replace.length > 0 ? [...replace] : ['0']
}

function __getSeparators(val) {
  const str = String(val)
  const replace = str.replace(/[^,.]+/g, '')
  return [...replace]
}

function __getIndexSeparator(val, separators) {
  const strList = [...String(val).replace(/[^\d,.]+/g, '')]
  const last = separators.slice(-1)[0]
  const originIndex = strList.lastIndexOf(last)
  const newInex = originIndex - (separators.length - 1)

  return separators.length > 0 ? newInex : -1
}
