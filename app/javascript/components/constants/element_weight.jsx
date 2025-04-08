import React from "react";
import { NavLink } from 'react-router-dom';
import {
    element__div_0, element__link,
    icon__class, name_main__element,
    description__main__element
} from "./classes"; // Импортируем классы

const ElementWeight = ({ t }) => {
    // Иконка массы
    const massIcon = (
        <svg width="53" height="53" viewBox="0 0 24 24" fill="#6A64F1">
            <path d="M12,3C10.73,3 9.6,3.8 9.18,5H3V7H4.95L2,14C1.53,15 3,17 5.5,17C8,17 9.56,15 9,14L6.05,7H9.17C9.5,7.85 10.15,8.5 11,8.83V20H2V22H22V20H13V8.82C13.85,8.5 14.5,7.85 14.82,7H17.95L15,14C14.53,15 16,17 18.5,17C21,17 22.56,15 22,14L19.05,7H21V5H14.83C14.4,3.8 13.27,3 12,3M12,5A1,1 0 0,1 13,6A1,1 0 0,1 12,7A1,1 0 0,1 11,6A1,1 0 0,1 12,5M5.5,10.25L7,14H4L5.5,10.25M18.5,10.25L20,14H17L18.5,10.25Z" />
        </svg>
    );

    return (
        <div className={element__div_0}>
            <NavLink
                to="/weight_comparison"
                className={element__link}
            >
                <div className={icon__class}>
                    {massIcon}
                </div>
                <div>
                    <h3 className={name_main__element}>
                        {t('description.weight')}
                    </h3>
                    <p className={description__main__element}>
                        {t('description.weight_comparison')}
                    </p>
                </div>
            </NavLink>
        </div>
    );
};

export default ElementWeight;