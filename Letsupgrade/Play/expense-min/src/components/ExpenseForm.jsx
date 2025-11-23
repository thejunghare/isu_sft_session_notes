import React, { useState, useEffect } from 'react';

export default function ExpenseForm({ onSubmit, initialData = null, isEditing = false, onCancel }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    if (initialData) {
      setDescription(initialData.description);
      setAmount(initialData.amount);
      setCategory(initialData.category);
      setDate(initialData.date);
    }
  }, [initialData]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description.trim() || !amount) return;

    const expenseData = {
      description: description.trim(),
      amount: parseFloat(amount),
      category,
      date
    };

    if (isEditing) {
      onSubmit(initialData.id, expenseData);
    } else {
      onSubmit(expenseData);
    }

    // Reset form
    setDescription('');
    setAmount('');
    setCategory('Food');
    setDate(new Date().toISOString().split('T')[0]);
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2>{isEditing ? 'Edit Expense' : 'Add New Expense'}</h2>

      <div className="form-row">
        <input
          type="text"
          placeholder="Description (e.g., Groceries)"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          min="0"
          step="0.01"
          required
        />
      </div>

      <div className="form-row">
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option>Food</option>
          <option>Transport</option>
          <option>Entertainment</option>
          <option>Bills</option>
          <option>Shopping</option>
          <option>Health</option>
          <option>Other</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary">
          {isEditing ? 'Update' : 'Add'} Expense
        </button>
        {isEditing && (
          <button type="button" className="btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
