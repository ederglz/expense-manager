import React from 'react'

class ExpenseAvatar extends React.Component {  
  render() {
      return (
      <figure className="media-left">
        <img className="media-object" width="64px" src={`${this.props.picture}`} />
      </figure>
    )
  }
}

export default ExpenseAvatar