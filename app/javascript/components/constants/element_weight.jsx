import React from "react";
import { NavLink } from 'react-router-dom';


const ElementWeight = ({ t }) => {

        // Иконка массы (весы)
const massIcon = (
    <svg width="53" height="53" viewBox="0 0 24 24" fill="#6A64F1">
      <path d="M12,3C10.73,3 9.6,3.8 9.18,5H3V7H4.95L2,14C1.53,15 3,17 5.5,17C8,17 9.56,15 9,14L6.05,7H9.17C9.5,7.85 10.15,8.5 11,8.83V20H2V22H22V20H13V8.82C13.85,8.5 14.5,7.85 14.82,7H17.95L15,14C14.53,15 16,17 18.5,17C21,17 22.56,15 22,14L19.05,7H21V5H14.83C14.4,3.8 13.27,3 12,3M12,5A1,1 0 0,1 13,6A1,1 0 0,1 12,7A1,1 0 0,1 11,6A1,1 0 0,1 12,5M5.5,10.25L7,14H4L5.5,10.25M18.5,10.25L20,14H17L18.5,10.25Z"/>
    </svg>
  );

  
    return (
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div className="mx-auto mb-7 inline-block">
                {massIcon} {/* Вставка иконки массы */}
            </div>
            <div>
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                <NavLink to="/weight_comparison"> Масса </NavLink>
                </h3>
                <p className="text-base font-medium text-body-color">
                    Сравнение цен за килограмм
                </p>
            </div>
        </div>

    </div>
    );
};

export default ElementWeight;