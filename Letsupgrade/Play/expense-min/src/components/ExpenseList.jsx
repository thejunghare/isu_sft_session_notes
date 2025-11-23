import React from 'react'
export default function ExpenseList({ expenses, onDelete, onEdit }) {
  if (expenses.length === 0) {
    return (
      <div className="expense-list empty">
        <p>📭 No expenses found. Start tracking your spending!</p>
      </div>
    );
  }

  return (
    <div className="expense-list">
      <h2>Recent Expenses ({expenses.length})</h2>

      {expenses.map(expense => (
        <div key={expense.id} className="expense-item">
          <div className="expense-info">
            <div className="expense-header">
              <strong>{expense.description}</strong>
              <span className={`category-badge ${expense.category.toLowerCase()}`}>
                {expense.category}
              </span>
            </div>
            <small className="expense-date">{expense.date}</small>
          </div>

          <div className="expense-actions">
            <span className="expense-amount">₹{expense.amount.toFixed(2)}</span>
            <button className="btn-edit" onClick={() => onEdit(expense)}>
              ✏️ Edit
            </button>
            <button className="btn-delete" onClick={() => onDelete(expense.id)}>
              🗑️ Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
