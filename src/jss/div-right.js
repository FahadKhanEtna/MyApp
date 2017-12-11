import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  div: {
    background: props => props.color,
    width: '27%', 
    float: 'right'
  },
}

const DivRight = ({classes, children}) => (
  <div className={classes.div}>
    <span className={classes.label}>
      {children}
    </span>
  </div>
)


export default injectSheet(styles)(DivRight)