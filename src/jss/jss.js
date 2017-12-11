import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  button: {
    background: props => props.color,
    padding: '10px',
    borderRadius: '10px',
    marginTop:'20px',
    marginLeft: '330px'
  },
  label: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: '1.5em'
  }
}

const Button = ({classes, children}) => (
  <button className={classes.button}>
    <span className={classes.label}>
      {children}
    </span>
  </button>
)


export default injectSheet(styles)(Button)