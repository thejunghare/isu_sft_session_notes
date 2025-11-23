import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658'];

export default function Dashboard({ expenses }) {
  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const highestExpense = expenses.length > 0
    ? Math.max(...expenses.map(e => e.amount))
    : 0;

  const categoryTotals = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  const chartData = Object.entries(categoryTotals).map(([name, value]) => ({
    name,
    value: parseFloat(value.toFixed(2))
  }));

  return (
    <div className="dashboard">
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Spent</h3>
          <p className="stat-value">₹{totalSpent.toFixed(2)}</p>
        </div>

        <div className="stat-card">
          <h3>Highest Expense</h3>
          <p className="stat-value">₹{highestExpense.toFixed(2)}</p>
        </div>

        <div className="stat-card">
          <h3>Total Expenses</h3>
          <p className="stat-value">{expenses.length}</p>
        </div>
      </div>

      {chartData.length > 0 && (
        <div className="chart-container">
          <h3>Spending by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
