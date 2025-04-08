import React from "react";
import { NavLink } from 'react-router-dom';
import {
    element__div_0, element__link,
    icon__class, name_main__element,
    description__main__element
} from "./classes"; // Импортируем классы

const ElementUnit = ({ t }) => {
  // Иконка штук (упаковка)
  const piecesIcon = (
    <svg width="53" height="53" viewBox="0 0 24 24" fill="#6A64F1">
      <path d="M5.12,5L5.93,4H17.93L18.87,5M12,9.5A2.5,2.5 0 0,1 14.5,12A2.5,2.5 0 0,1 12,14.5A2.5,2.5 0 0,1 9.5,12A2.5,2.5 0 0,1 12,9.5M7,18A2,2 0 0,0 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20A2,2 0 0,0 7,18M17,18A2,2 0 0,0 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20A2,2 0 0,0 17,18Z"/>
    </svg>
  );

    return (
        <div className={element__div_0}>
            <NavLink
                to="/unit_comparison"
                className={element__link}
            >
                <div className={icon__class}>
                    {piecesIcon}
                </div>
                <div>
                    <h3 className={name_main__element}>
                        {t('description.unit')}
                    </h3>
                    <p className={description__main__element}>
                        {t('description.unit_comparison')}
                    </p>
                </div>
            </NavLink>
        </div>
    );
};

export default ElementUnit;