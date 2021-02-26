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
      item[colName] = parseFloat(val.toFixed(2))
    } catch (err) {
      item[colName] = 'erro no formato'
    }
    return item
  })
}
