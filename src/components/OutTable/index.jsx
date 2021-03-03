import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

export default function OutTable({ data }) {
  try {
    return (
      <Paper>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {data.cols.map((col, index) => {
                  return <TableCell key={index}>{col}</TableCell>
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.rows.map((row, index) => {
                return (
                  <TableRow key={index}>
                    {row.map((cell, id) => {
                      return <TableCell key={id}>{cell}</TableCell>
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    )
  } catch (err) {
    return <></>
  }
}
