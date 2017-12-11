import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  p: {
    background: props => props.color,
    padding: '10px',
    borderRadius: '10px',
    marginTop:'5px'
  },
  label: {
    fontSize: '1.5em'
  }
}

const Para = ({classes, children}) => (
  <p className={classes.p}>
    <span className={classes.label}>
      {children}
    </span>
  </p>
)


export default injectSheet(styles)(Para)