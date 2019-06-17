import React from 'react'
import {ThemeProvider} from '@material-ui/styles'
import theme from './stylesheets/theme'
import CTNavbar from './components/CTNavbar'
import Header from './components/Header'
import Content from './components/Content'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CTNavbar />
        <Header />
        <Content />
      </ThemeProvider>
    </div>
  );
}

export default App;
