import { useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([
    'Food and Beverage',
    'Housing',
    'Accessories',
    'Others',
  ]);
  const [selectedCategory, setSelectedCategory] = useState('Food and Beverage');
  const [input, setInput] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const addItem = () => {
    if (input.trim() !== '') {
      setItems([...items, { name: input, category: selectedCategory }]);
      setInput('');
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const addCategory = () => {
    if (newCategory.trim() !== '' && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Shopping List</h1>
      <div className="mb-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add an item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button className="btn btn-primary" onClick={addItem}>
            Add
          </button>
        </div>
      </div>
      
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item.name} <span className="badge bg-info">{item.category}</span>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeItem(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
