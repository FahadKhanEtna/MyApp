import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  title: {
    background: props => props.color,
    width:'100%',
    textAlign:'center'
  },
  label: {
      textTransform:'uppercase'
  }
}

const Title = ({classes, children}) => (
  <h1 className={classes.title}>
    <span className={classes.label}>
      {children}
    </span>
  </h1>
)


export default injectSheet(styles)(Title)