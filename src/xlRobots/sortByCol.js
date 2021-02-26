export default function sortByCol(items, colName) {
  /*
  params:
    items: list
    colName: string
  output: list
  todos: [to review sort's colunms with string value, validations, types]
  */

  return items.sort((a, b) => a[colName] - b[colName])
}
