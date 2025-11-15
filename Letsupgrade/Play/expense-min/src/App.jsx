import React from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [state, setState] = useLocalStorage("expense-min-state", []);

  function addExpense(expense) {
    setState((prev) => [expense, ...prev]);
  }

  function removeExpense(id) {
    console.log("Delete");
    setState((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <div className="app">
      <h1>Expense-Min</h1>
      <p className="muted">Bare minimum expense tracker.</p>

      <ExpenseForm onAdd={addExpense} />

      <h3>Expenses</h3>
      <ExpenseList items={state} onDelete={removeExpense} />
    </div>
  );
}
