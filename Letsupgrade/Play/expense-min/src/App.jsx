import React, { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import FilterBar from './components/FilterBar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [expenses, setExpenses] = useLocalStorage('expenses', []);
  const [filterCategory, setFilterCategory] = useState('All');
  const [searchText, setSearchText] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [editingExpense, setEditingExpense] = useState(null);

  // Derived state
  const filteredExpenses = expenses
    .filter(exp => filterCategory === 'All' || exp.category === filterCategory)
    .filter(exp => exp.description.toLowerCase().includes(searchText.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'amount') return b.amount - a.amount;
      return 0;
    });

  function addExpense(expense) {
    setExpenses([...expenses, { ...expense, id: crypto.randomUUID() }]);
  }

  function deleteExpense(id) {
    setExpenses(expenses.filter(exp => exp.id !== id));
  }

  function editExpense(id, updatedExpense) {
    setExpenses(expenses.map(exp =>
      exp.id === id ? { ...updatedExpense, id } : exp
    ));
    setEditingExpense(null);
  }

  function startEdit(expense) {
    setEditingExpense(expense);
  }

  return (
    <div className="app">
      <header>
        <h1>💸 Expense Tracker</h1>
        <p>Track your spending, stay on budget</p>
      </header>

      <Dashboard expenses={expenses} />

      <ExpenseForm
        onSubmit={editingExpense ? editExpense : addExpense}
        initialData={editingExpense}
        isEditing={!!editingExpense}
        onCancel={() => setEditingExpense(null)}
      />

      <FilterBar
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        searchText={searchText}
        setSearchText={setSearchText}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <ExpenseList
        expenses={filteredExpenses}
        onDelete={deleteExpense}
        onEdit={startEdit}
      />
    </div>
  );
}

export default App;

