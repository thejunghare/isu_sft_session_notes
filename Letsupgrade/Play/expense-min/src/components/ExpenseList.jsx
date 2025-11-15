import React from "react";

export default function ExpenseList({ items = [], onDelete }) {
  if (!items.length) return <p>No expenses added yet.</p>;

  return (
    <ul className="list">
      {items.map((item) => (
        <li key={item.id} className="list-item">
          <div className="left">
            <div className="title">{item.title}</div>
            <div className="meta">
              {item.date} • {item.category}
            </div>
          </div>

          <div className="right">
            <div className="amount">₹ {item.amount}</div>
            <button className="delete" onClick={() => onDelete(item.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
