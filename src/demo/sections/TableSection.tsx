import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import { SectionHeader } from '../components/SectionHeader'
import { brand } from '../../theme'

const sessions = [
  { id: 1, date: '2026-03-20', zone: 'Front lawn', duration: '1h 17m', area: '320 m²', status: 'complete' },
  { id: 2, date: '2026-03-19', zone: 'Back garden', duration: '2h 03m', area: '580 m²', status: 'complete' },
  { id: 3, date: '2026-03-18', zone: 'Side strip', duration: '0h 24m', area: '95 m²', status: 'interrupted' },
  { id: 4, date: '2026-03-17', zone: 'Front lawn', duration: '—', area: '—', status: 'scheduled' },
]

const statusConfig: Record<string, { label: string; bg: string; color: string }> = {
  complete: { label: 'Complete', bg: 'rgba(44,199,107,0.14)', color: brand.green },
  interrupted: { label: 'Interrupted', bg: 'rgba(252,199,98,0.1)', color: '#FCC762' },
  scheduled: { label: 'Scheduled', bg: 'rgba(122,184,255,0.1)', color: '#7AB8FF' },
}

export function TableSection() {
  return (
    <Box>
      <SectionHeader title="Table" />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Zone</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Area covered</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sessions.map((row) => {
              const cfg = statusConfig[row.status]
              return (
                <TableRow key={row.id}>
                  <TableCell sx={{ fontFamily: '"DM Mono", monospace', fontSize: '0.8125rem' }}>
                    {row.date}
                  </TableCell>
                  <TableCell>{row.zone}</TableCell>
                  <TableCell sx={{ fontFamily: '"DM Mono", monospace', fontSize: '0.8125rem' }}>
                    {row.duration}
                  </TableCell>
                  <TableCell sx={{ fontFamily: '"DM Mono", monospace', fontSize: '0.8125rem' }}>
                    {row.area}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={cfg.label}
                      size="small"
                      sx={{ bgcolor: cfg.bg, color: cfg.color, fontWeight: 500, borderRadius: 20 }}
                    />
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
