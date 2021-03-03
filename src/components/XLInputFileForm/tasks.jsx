import { acceptedFileTypesList } from '../../xlRobots/reader'

export function handleSuppress(e) {
  e.stopPropagation()
  e.preventDefault()
}

export function handleOnDrop(e, callBack) {
  e.stopPropagation()
  e.preventDefault()
  const file = e.dataTransfer.files[0]
  file && isAcceptFileType(file) && callBack(file)
}

export async function handleChange(e, callBack) {
  const file = e.target.files[0]
  file && callBack(file)
}

function isAcceptFileType(file) {
  const extension = file.name.split('.').slice(-1)[0]
  return !!acceptedFileTypesList.includes(extension)
}
