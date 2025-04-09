import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
            description: {
              weight: 'Масса',
              weight_comparison: 'Сравнение цены товаров за 1 килограмм',
              volume: 'Объём',
              volume_comparison: 'Сравнение цены товаров за 1 литр',
              unit: 'Штука',
              unit_comparison: 'Сравнение цены товаров за 1 штуку',
              prices_comparison: 'Сравнение цен',
              quantity: 'Количество',
              price: 'Цена',
              in_unit: 'в Товаре',
              one: '1',
              two: '2',
              kgs: 'килограмм',
              litrs: 'литров',
              units: 'штук',
              compare: 'Сравнить',
              count: 'Рассчитываем...',
              results: 'Результаты:',
              per_kg: 'за килограмм',
              per_litr: 'за литр',
              per_unit: 'за единицу',
              product: 'Товар ',              
              products_equal: 'Оба варианта одинаково выгодны!',
              profitable: 'Выгоднее Товар',
              econom: 'Экономия:',
              currency: 'руб.',
              clear_form: 'Очистка формы',
              to_main: 'На главную',
              two_point: ':',
              }
        }
      }
    }
  });

export default i18n;