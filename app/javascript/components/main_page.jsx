import React from "react";
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import ElementWeight from "./constants/element_weight";         // Импортируем элемент МЕНЮ

export default function MainPage() {
    const { t } = useTranslation();

  
  // Иконка объема (капля)
  const volumeIcon = (
    <svg width="53" height="53" viewBox="0 0 24 24" fill="#6A64F1">
      <path d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z"/>
    </svg>
  );
  
  // Иконка штук (упаковка)
  const piecesIcon = (
    <svg width="53" height="53" viewBox="0 0 24 24" fill="#6A64F1">
      <path d="M5.12,5L5.93,4H17.93L18.87,5M12,9.5A2.5,2.5 0 0,1 14.5,12A2.5,2.5 0 0,1 12,14.5A2.5,2.5 0 0,1 9.5,12A2.5,2.5 0 0,1 12,9.5M7,18A2,2 0 0,0 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20A2,2 0 0,0 7,18M17,18A2,2 0 0,0 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20A2,2 0 0,0 17,18Z"/>
    </svg>
  );


    return (
        <div>
            <div className="-mx-4 flex flex-wrap p-8">
    
                {/* Блок "Масса" */}
                <ElementWeight t={t} />                     {/* Вставляем элемент МЕНЮ */}

                {/* Блок "Объем" */}
                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                        <div className="mx-auto mb-7 inline-block">
                            {volumeIcon} {/* Вставка иконки объема */}
                        </div>
                        <div>
                            <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                                Объем
                            </h3>
                            <p className="text-base font-medium text-body-color">
                                Сравнение цен за литр
                            </p>
                        </div>
                    </div>
                </div>

                {/* Блок "Штуки" */}
                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                        <div className="mx-auto mb-7 inline-block">
                            {piecesIcon} {/* Вставка иконки штук */}
                        </div>
                        <div>
                            <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                                Штуки
                            </h3>
                            <p className="text-base font-medium text-body-color">
                                Сравнение цен за единицу товара
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}