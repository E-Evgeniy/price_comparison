import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WeightPriceComparator = () => {
  const [formData, setFormData] = useState({
    price1: '',
    quantity1: '',
    price2: '',
    quantity2: ''
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/v1/comparison/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setFormData({
      price1: '',
      quantity1: '',
      price2: '',
      quantity2: ''
    });
    setResult(null);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Сравнение цен</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Вариант 1</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">Цена</label>
              <input
                type="number"
                name="price1"
                value={formData.price1}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                step="0.01"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Количество (л, кг, шт)</label>
              <input
                type="number"
                name="quantity1"
                value={formData.quantity1}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                step="0.01"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Вариант 2</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">Цена</label>
              <input
                type="number"
                name="price2"
                value={formData.price2}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                step="0.01"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Количество (л, кг, шт)</label>
              <input
                type="number"
                name="quantity2"
                value={formData.quantity2}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                step="0.01"
                required
              />
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {loading ? 'Рассчитываем...' : 'Сравнить цены'}
        </button>
      </form>
      
      {result && (
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="text-lg font-medium mb-2">Результаты:</h3>
            <p>Цена за единицу (Вариант 1): <span className="font-semibold">{result.unit_price1}</span></p>
            <p>Цена за единицу (Вариант 2): <span className="font-semibold">{result.unit_price2}</span></p>
            
            <div className="mt-3 p-3 bg-green-100 rounded-md">
              <p className="font-bold">
                Выгоднее вариант {result.better_option}!
              </p>
              <p>Экономия: {result.savings} за единицу</p>
            </div>
          </div>
          
          <button
            onClick={handleClear}
            className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Очистка формы
          </button>
        </div>
      )}
      
      <button
        onClick={handleGoHome}
        className="mt-4 w-full bg-blue-100 text-blue-800 py-2 px-4 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        На главную
      </button>
    </div>
  );
};

export default WeightPriceComparator;