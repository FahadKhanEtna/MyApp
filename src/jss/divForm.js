import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  div: {
    background: props => props.color,
    width: '90%',
    margin: 'auto',
    textAlign: 'center',
    border: '2px solid grey',
    borderRadius: '10px',
    lineHeight: '1em',
    paddingBottom: '10px'
  },
}

const DivForm = ({classes, children}) => (
  <div className={classes.div}>
      {children}
  </div>
)


export default injectSheet(styles)(DivForm)