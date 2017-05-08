import React from 'react'  
import ExpenseAvatar from '../expense-avatar'

class ExpenseRow extends React.Component {

  render() {
    return(
      <li className="media d-flex">
        <ExpenseAvatar picture={this.props.picture} />
        <div className="media-body">
          <h4>{this.props.name}</h4>
          <p>
            {this.props.title} &nbsp;
            <span className="label label-info">{this.props.department}</span>
          </p>
        </div>
        <div className="actions">
          <span>❌</span>
        </div>
      </li>
    )
  }
}

export default ExpenseRow  