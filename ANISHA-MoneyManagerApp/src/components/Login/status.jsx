import * as React from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

export default function LinearBuffer({passwordPercentage}) {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    setProgress(passwordPercentage)
  }, [passwordPercentage])

  function updateProgress(progress) {}

  //   React.useEffect(() => {
  //     const timer = setInterval(() => {
  //       progressRef.current()
  //     }, 500)

  //     return () => {
  //       clearInterval(timer)
  //     }
  //   }, [])

  return (
    <Box sx={{width: '40%', marginTop: '10px'}}>
      <LinearProgress
        color={
          passwordPercentage <= 25
            ? 'error'
            : passwordPercentage >= 50 && passwordPercentage <= 75
            ? 'warning'
            : 'primary'
        }
        variant="buffer"
        value={progress}
      />
    </Box>
  )
}
