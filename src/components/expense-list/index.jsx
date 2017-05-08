import React from 'react'  
import ExpenseRow from '../expense-row'

class ExpenseList extends React.Component {

  render() {
    return (
      <ul className="media-list">
        {
          this.props.listado.map((expense) => {
            return <ExpenseRow key={ expense.id }
                                name={ expense.fullName }
                                picture={ expense.pic }
                                title={ expense.title }
                                department={ expense.department } />
          })
        }
      </ul>
    )
  }
}

export default ExpenseList  