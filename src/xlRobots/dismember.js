function dismember(items) {
  /*
    input: list
    output: list
    todo: dinamic unique col, validations (types)
  */

  const uniques = __getUniques(items)
  const dismemberedMultiple = __getDismemberMultiples(items)
  return [...uniques, ...dismemberedMultiple]
}

function __getUniques(items) {
  return items.filter((item) => item.QTDE === 1)
}

function __getDismemberMultiples(items) {
  const multiples = items.filter((item) => item.QTDE > 1)

  const dismemberedItems = []

  for (let item of multiples) {
    dismemberedItems.push(...__dismemberItem(item))
  }

  return dismemberedItems
}

function __dismemberItem(item) {
  const items = []

  const range = item.QTDE

  for (let i = 0; i < range; i++) {
    item.QTDE = 1
    items.push(item)
  }

  return items
}
