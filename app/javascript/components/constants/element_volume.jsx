import React from "react";
import { NavLink } from 'react-router-dom';
import {
    element__div_0, element__link,
    icon__class, name_main__element,
    description__main__element
} from "./classes"; // Импортируем классы

const ElementVolume = ({ t }) => {
  // Иконка объема (капля)
  const volumeIcon = (
    <svg width="53" height="53" viewBox="0 0 24 24" fill="#6A64F1">
      <path d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z"/>
    </svg>
  );

    return (
        <div className={element__div_0}>
            <NavLink
                to="/volume_comparison"
                className={element__link}
            >
                <div className={icon__class}>
                    {volumeIcon}
                </div>
                <div>
                    <h3 className={name_main__element}>
                        {t('description.volume')}
                    </h3>
                    <p className={description__main__element}>
                        {t('description.volume_comparison')}
                    </p>
                </div>
            </NavLink>
        </div>
    );
};

export default ElementVolume;