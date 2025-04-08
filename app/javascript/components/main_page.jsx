import React from "react";
import { useTranslation } from 'react-i18next';
import ElementWeight      from "./constants/element_weight";         // Импортируем элемент сравнение по массе
import ElementVolume      from "./constants/element_volume";         // Импортируем элемент сравнение по массе
import ElementUnit        from "./constants/element_unit";           // Импортируем элемент сравнение по штуке товара

export default function MainPage() {
    const { t } = useTranslation();

    return (
        <div>
            <div className="-mx-4 flex flex-wrap p-8">

                {/* Блок "Масса" */}
                <ElementWeight t={t} />

                {/* Блок "Объем" */}
                <ElementVolume t={t} />

                {/* Блок "Штуки" */}
                <ElementUnit t={t} />
            </div>
        </div>
    )
}