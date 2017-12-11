import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  div: {
    background: props => props.color,
    width: '67%',
    padding: "20px",
    float: 'left'
  },
}

const DivLeft = ({classes, children}) => (
  <div className={classes.div}>
    <span className={classes.label}>
      {children}
    </span>
  </div>
)


export default injectSheet(styles)(DivLeft)