import Button from '@material-ui/core/Button'

export default function DataInput({ handleFile }) {
  const SheetJSFT = ['xlsx', 'xlsb', 'xlsm', 'xls', 'xml', 'csv', 'txt', 'ods']
    .map((x) => '.' + x)
    .join(',')

  function handleChange(e) {
    const files = e.target.files
    if (files && files[0]) {
      handleFile(files[0])
    }
  }

  return (
    <form>
      <Button
        variant="contained"
        color="default"
        component="label"
        htmlFor="file"
      >
        escolher arquivo
      </Button>
      <input
        type="file"
        accept={SheetJSFT}
        onChange={handleChange}
        name="file"
        id="file"
        hidden={true}
      />
    </form>
  )
}
