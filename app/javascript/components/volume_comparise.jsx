import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  compare__div_0, compare__head,
  form__div_0, form__div_1,
  form__compare, form__h0, form__label,
  form__input, form__button_calc, result__div_0,
  result__div_1, result__h, results_span, results_condition_main,
  results_condition_main_blue, results_condition_main_green,
  results_bold, results_button_clear, results_button_to_main

} from "./constants/classes"; // Импортируем классы



const VolumePriceComparator = () => {
  const { t } = useTranslation();

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

    // Разрешаем:
    // - пустую строку
    // - целые числа (42)
    // - десятичные числа (3.14)
    // - числа с ведущей точкой (.5)
    if (value === '' || /^[,\d]\d*[,.]?\d*$|^[,.]\d*$/.test(value)) {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Преобразуем запятые в точки перед отправкой на сервер
  const prepareDataForSubmission = (data) => {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key, 
        typeof value === 'string' ? value.replace(',', '.') : value
      ])
    );
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
        body: JSON.stringify(prepareDataForSubmission(formData))
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
    <div className={compare__div_0}>
      <h1 className={compare__head}>{t('description.prices_comparison')}</h1>

      <form onSubmit={handleSubmit} className={form__compare}>
        <div className={form__div_0}>
          <div className={form__div_1}>
            <h2 className={form__h0}>{t('description.product')} {t('description.one')}</h2>
            <div>
              <label className={form__label}>{t('description.price')}</label>
              <input
                type="text"
                name="price1"
                value={formData.price1}
                onChange={handleChange}
                className={form__input}
                inputMode="decimal"
                pattern="[0-9]*[,.]?[0-9]*"
                onKeyDown={(e) => {
                  if (e.key === '-' || e.key === 'e') {
                    e.preventDefault();
                  }
                }}
                required
              />
            </div>
            <div>
              <label className={form__label}>{t('description.quantity')} {t('description.litrs')} {t('description.in_unit')} {t('description.one')}</label>
              <input
                type="text"
                name="quantity1"
                value={formData.quantity1}
                onChange={handleChange}
                className={form__input}
                inputMode="decimal"
                pattern="[0-9]*[,.]?[0-9]*"
                onKeyDown={(e) => {
                  if (e.key === '-' || e.key === 'e') {
                    e.preventDefault();
                  }
                }}
                required
              />
            </div>
          </div>

          <div className={form__div_1}>
            <h2 className={form__h0}>{t('description.product')} {t('description.two')}</h2>
            <div>
              <label className={form__label}>{t('description.price')}</label>
              <input
                type="text"
                name="price2"
                value={formData.price2}
                onChange={handleChange}
                className={form__input}
                inputMode="decimal"
                pattern="[0-9]*[,.]?[0-9]*"
                onKeyDown={(e) => {
                  if (e.key === '-' || e.key === 'e') {
                    e.preventDefault();
                  }
                }}
                required
              />
            </div>
            <div>
              <label className={form__label}>{t('description.quantity')} {t('description.litrs')} {t('description.in_unit')} {t('description.two')}</label>
              <input
                type="text"
                name="quantity2"
                value={formData.quantity2}
                onChange={handleChange}
                className={form__input}
                inputMode="decimal"
                pattern="[0-9]*[,.]?[0-9]*"
                onKeyDown={(e) => {
                  if (e.key === '-' || e.key === 'e') {
                    e.preventDefault();
                  }
                }}
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={form__button_calc}
        >
          {loading ? t('description.count') : t('description.compare')}
        </button>
      </form>

      {result && (
        <div className={result__div_0}>
          <div className={result__div_1}>
            <h3 className={result__h}>{t('description.results')} </h3>
            <p>{t('description.price')} {t('description.per_litr')} {t('description.product')} {t('description.one')}{t('description.two_point')}  <span className={results_span}>{result.unit_price1}</span>  {t('description.currency')}</p>
            <p>{t('description.price')} {t('description.per_litr')} {t('description.product')} {t('description.two')}{t('description.two_point')}  <span className={results_span}>{result.unit_price2}</span>  {t('description.currency')}</p>

            <div className={`${results_condition_main} ${result.better_option === 'equal'
                ? `${results_condition_main_blue}`
                : `${results_condition_main_green}`
              }`}>

              {result.better_option === 'equal' ? (
                <p className={results_bold}>{t('description.products_equal')}  </p>
              ) : (

                <>                  
                  <p className={results_bold}>
                  {t('description.profitable')} {result.better_option}
                  </p>
                  <p>{t('description.econom')} {result.savings} {t('description.currency')} {t('description.per_litr')}</p>
                </>
              )}</div>

          </div>

          <button
            onClick={handleClear}
            className={results_button_clear}
          >
            {t('description.clear_form')}
          </button>
        </div>
      )}

      <button
        onClick={handleGoHome}
        className={results_button_to_main}
      >
        {t('description.to_main')}
      </button>
    </div>
  );
};

export default VolumePriceComparator;