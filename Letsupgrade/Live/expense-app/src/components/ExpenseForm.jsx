import { useState } from "react";

const initialExpense = {
  description: "",
  amount: "",
  category: "",
  date: "",
};

export default function ExpenseForm() {
  const [expense, setExpense] = useState(() => {
    return initialExpense;
  });

  function handleExpense(e) {
    e.preventDefault();
    console.log(expense);
    setExpense(initialExpense);
  }

  return (
    <div>
      <form onSubmit={handleExpense}>
        {/* 1. description input*/}
        <input
          type="text"
          placeholder="Enter expense description(eg. Dinner)"
          value={expense.description}
          onChange={(e) =>
            setExpense({ ...expense, description: e.target.value })
          }
        />
        {/* 2. amount input*/}
        <input
          type="text"
          placeholder="Enter amount of expense"
          value={expense.amount}
          onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
        />
        {/* 3. dropdown for category*/}
        <select
          value={expense.category}
          onChange={(e) => setExpense({ ...expense, category: e.target.value })}
        >
          <option selected>Enter you category</option>
          <option value="Food">Food</option>
          <option value="Bills">Bills</option>
        </select>
        {/* 4. date picker */}
        <input
          type="date"
          placeholder="Enter date of Expense"
          value={expense.date}
          onChange={(e) => setExpense({ ...expense, date: e.target.value })}
        />

        <button type="submit">Add expense</button>
      </form>
    </div>
  );
}
