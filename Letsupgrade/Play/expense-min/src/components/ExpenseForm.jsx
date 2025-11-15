import React, { useState } from "react";

const initialExpense = {
  title: "",
  amount: "",
  category: "Other",
  date: "",
};

export default function ExpenseForm({ onAdd }) {
  const [expense, setExpense] = useState(() => {
    return initialExpense;
  });

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(expense);
    setExpense(initialExpense);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="row">
        <input
          value={expense.title}
          onChange={(e) => setExpense({ ...expense, title: e.target.value })}
          placeholder="Title"
        />
        <input
          value={expense.amount}
          onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
          placeholder="Amount"
          type="number"
        />
      </div>

      <div className="row">
        <select
          value={expense.category}
          onChange={(e) => setExpense({ ...expense, category: e.target.value })}
        >
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value={"Shopping"}>Shopping</option>
          <option value={"Bills"}>Bills</option>
          <option value={"Entertainment"}>Entertainment</option>
          <option value={"Other"}>Other</option>
        </select>

        <input
          value={expense.date}
          onChange={(e) => setExpense({ ...expense, date: e.target.value })}
          type="date"
        />

        <button type="submit">Add</button>
      </div>
    </form>
  );
}
