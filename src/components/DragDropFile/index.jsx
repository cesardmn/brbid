export default function DragDropFile({ handleFile, children }) {
  function handleSuppress(evt) {
    evt.stopPropagation()
    evt.preventDefault()
  }
  function handleOnDrop(evt) {
    evt.stopPropagation()
    evt.preventDefault()
    const files = evt.dataTransfer.files
    if (files && files[0]) {
      handleFile(files[0])
    }
  }

  return (
    <div
      onDrop={handleOnDrop}
      onDragEnter={handleSuppress}
      onDragOver={handleSuppress}
    >
      {children}
    </div>
  )
}
