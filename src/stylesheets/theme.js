import {createMuiTheme} from '@material-ui/core'

export default createMuiTheme({
  palette: {
    primary: {
      main: '#525252',
      light: '#878787'
    },
    secondary: {
      main: '#ff6200',
    }
  },
  typography: {
    fontFamily: [
      'Ubuntu',
      'sans-serif'
    ].join(','),
    fontSize: 14,
  },
  overrides: {
    MuiAppBar: {
      root: {
        height: '40px',
        boxShadow: 'none',
      },
    },
    MuiToolbar: {
      regular: {
        minHeight: '40px !important',
      }
    },
    MuiTab: {
      root: {
        minWidth: (1/7 * 100)+ '% !important',
        fontFamily: '"PT Sans", sans-serif',
        fontSize: '13px',
        padding: '0',
        '&:hover': {
          color: '#333333'
        },
        '&$selected': {
          fontWeight: 'bold'
        }
      },
      textColorInherit:{
        color: '#636363',
      }
    },
    MuiDivider: {
      root: {
        height: '6px',
        backgroundColor: '#434343',
        marginBottom: 22
      }
    },
    MuiFilledInput:{
      root:{
        borderRadius: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius:0,
        backgroundColor: '#f6f6f6',
        fontWeight: '300'
      },
      underline:{
        '&:before':{
          borderBottom: 0
        },
        '&:after':{
          borderBottom: 0
        }
      }
    },
    MuiFormControl:{
      marginDense:{
        marginTop: 0,
        marginBottom: 4
      }
    },
    MuiLink:{
      root:{
        color: "#C9C9C9"
      },
      underlineHover:{
        '&:hover':{
          textDecoration: "none",
          color: "#2F2F2F"
        }
      }
    },
    MuiBreadcrumbs:{
      separator:{
        color: "#C9C9C9"
      }
    },
    MuiMenuItem:{
      root:{
        fontFamily: "Open Sans",
        fontSize: 12,
        textTransform: "uppercase"
      }
    }
  }
})
