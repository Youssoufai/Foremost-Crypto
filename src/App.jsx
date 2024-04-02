import { ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import { Box, CssBaseline, Typography, createTheme } from "@mui/material"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
const theme = createTheme({
  palette: {
    primary: {
      main: '#1459F1'
    }
  }
})
function App() {
  return (
    <>
      <ThemeProvider theme={theme} >
        <Box
          sx={{
            background: 'white'
          }}
        >
          <Navbar />
          <Hero />
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
