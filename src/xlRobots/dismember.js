export default function dismember(items, colName) {
  /*
    input: list
    output: list
    todos: [validations, types]
  */

  const uniques = __getUniques(items, colName)
  const dismemberedMultiple = __getDismemberMultiples(items, colName)
  return [...uniques, ...dismemberedMultiple]
}

function __getUniques(items, colName) {
  return items.filter((item) => item[colName] === 1)
}

function __getDismemberMultiples(items, colName) {
  const multiples = items.filter((item) => item[colName] > 1)

  const dismemberedItems = []

  for (let item of multiples) {
    dismemberedItems.push(...__dismemberItem(item, colName))
  }

  return dismemberedItems
}

function __dismemberItem(item, colName) {
  const items = []

  const range = item[colName]

  for (let i = 0; i < range; i++) {
    item[colName] = 1
    items.push(item)
  }

  return items
}
