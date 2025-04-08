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
                orders: 'Заказы',
                purchases: 'Закупки',
                details: 'Детали',
                materials: 'Материалы',
                material: 'Материал',
                clients: 'Клиенты',
                users: 'Сотрудники',
                suppliers: 'Поставщики',
                new_user: 'Новый сотрудник',
                main_page: 'На главную',
                first_name: 'Имя',
                last_name: 'Фамилия',
                patronymic: 'Отчество',
                job_title: 'Должность',
                email: 'Почта',
                enter_first_name: 'Введите имя',
                enter_last_name: 'Введите фамилию',
                enter_patronymic: 'Введите отчество',
                enter_job_title: 'Введите должность',
                enter_email: 'Введите почту',
                actions: 'Действия',
                action: 'Действие',
                edit: 'Редактировать',
                delete: 'Удалить',
                user_create: 'Новый сотрудник',
                create: 'Создать',
                error_email: 'Данная почта уже используется',
                find_first_name: 'Поиск по имени',
                find_last_name: 'Поиск по фамилии',
                find_patronymic: 'Поиск по отчеству',
                find_job_title: 'Поиск по должности',
                find_email: 'Поиск по почте',
                delete_user: 'Удалить сотрудника',
                loading: 'Загрузка',
                cancel: 'Отмена',
                user: 'Сотрудник',
                edit_user: 'Редактирование сотрудника',
                update: 'Обновить',
                client_new: 'Новый клиент',
                client_create: 'Создать клиента',
                client_name: 'Название организации',
                client_inn: 'ИНН',
                client: 'Клиент',
                enter_client_name: 'Введите наименование клиента',
                enter_client_inn: 'Введите ИНН клиента',
                client_address: 'Адрес',
                enter_client_address: 'Введите адрес',
                client_email: 'Электронная почта',
                enter_client_email: 'Введите электронную почту',
                client_site: 'Адрес сайта',
                enter_client_site: 'Введите адрес сайта',
                delete_client: 'Удалить клиента',
                add_files: 'Прикрепить файлы:',
                choose_files: 'Прикрепить',
                file_delete: 'Удалить файл',
                error_inn: 'Данный ИНН уже используется',
                attached_files: 'Прикрепленные файлы:',
                supplier_new: 'Новый поставщик',
                supplier_create: 'Создать клиента',
                supplier_name: 'Название организации',
                supplier_inn: 'ИНН',
                supplier: 'Поставщик',
                enter_supplier_name: 'Введите наименование клиента',
                enter_supplier_inn: 'Введите ИНН клиента',
                supplier_address: 'Адрес',
                enter_supplier_address: 'Введите адрес',
                supplier_email: 'Электронная почта',
                enter_supplier_email: 'Введите электронную почту',
                supplier_site: 'Адрес сайта',
                enter_supplier_site: 'Введите адрес сайта',
                delete_supplier: 'Удалить поставщика',
                material_new:'Добавить новый материал',
                material_name:'Название материала',
                enter_material_name:'Введите название материала',
                error_name:'Такое название уже существует',
                material_description:'Описание материала',
                material_create:'Добавить материал',
                enter_material_description:'Введите описание материала',
                material_delete: 'Удалить материал',                
                average_price_kg: 'Средняя стоимость за килограмм / руб',
                enter_average_price_kg: 'Введите среднюю строимость за килограмм',
                material_edit: 'Редактирование материала',
                material_add: 'Добавление материала в заказ',
                contract_new: 'Добавить новый договор',
                contract_name: 'Наименование договора',
                enter_contract_name: 'Введите наименование договора',
                contract_create: 'Создать договор',
                error_supplier_name: 'Такого поставщика не существует',
                no_empty_field: 'Поле не может быть пустым',
                material_order: 'Заказ материала',
                material_order_new: 'Создать новый заказ закупки материала',
                material_order_delete: 'Удалить заказ закупки материала',
                material_orders: 'Заказы на закупку материала',
                material_price_in_order: 'Цена за килограмм / руб',
                material_massa_in_order: 'Количество килограмм / кг',
                material_total_price: 'Общая стоимость / руб',
                material_price_in_order_enter: 'Введите цену материала за кг',
                material_mass_in_order_enter: 'Введите массу материала в кг',
                material_list_in_order: 'Список материалов в заказе',
                add: 'Добавить',
                order_summ: 'Сумма заказа',
                material_order_create: 'Создать новый заказ на материалы',
                material_delivery_period: 'Период поставки / дней',
                material_order_created_at: 'Дата создания договора',
                material_order_edit: 'Редактирование заказа на материалы',
                material_order_update: 'Изменить договор',
                items: 'Детали',
                item: 'Деталь',
                item_name: 'Наименование детали',
                item_name_enter: 'Введите наименование детали',
                item_new: 'Добавление новой детали',
                average_price: 'Средняя цена ',
                average_price_enter: 'Введите cреднюю цену ',
                item_weight: 'Масса ',
                item_weight_enter: 'Введите высоту детали',
                item_length: 'Длина ',
                item_length_enter: 'Введите длину детали',
                item_width: 'Ширина ',
                item_width_enter: 'Введите ширину детали',
                item_height: 'Высота ',
                item_height_enter: 'Введите высоту детали',
                item_description:'Описание детали',
                item_description_enter:'Введите описание детали',
                item_create: 'Создать деталь',
                item_delete: 'Удалить деталь',
                item_edit: 'Редактирование детали',
                password: 'Пароль',
                enter_password: 'Введите пароль',
                password_confirm: 'Подтверждение пароля',
                enter_password_confirm: 'Введите подтверждение пароля',
                exit: 'ВЫХОД',
                item_orders: 'Заказы деталей',
                item_order_new: 'Новый заказ',
                enter_coef: 'Введите коэфициент',
                coef_weight: 'Коэффициент для расчёта веса с поддержками',
                coef_size: 'Коэффициент для расчёта размеров матрицы',
                coef_first_for_matrix: 'Первый коэффициент для расчёта массы матрицы',
                coef_second_for_matrix: 'Второй коэффициент для расчёта массы матрицы',
                coef_devider: 'Делитель',
                coef_work_print: 'Коэффициент для расчёта работы по печати',
                coef_make_master_model: 'Коэффициент для расчёта работы по изготовлению мастер модели',
                coef_make_matrix: 'Коэффициент для расчёта работы по изготовлению матриц',
                coef_plastic_casting: 'Коэффициент для расчёта работы по литью пластика ',
                coef_printing: 'Коэффициент для расчёта Клиент Печать',
                coef_make_matrix_unit: 'Коэффициент для расчёта услуги по изготовлению матрицы за единицу',
                coef_casting_unit: 'Коэффициент для расчёта литья за единицу',
                tax: 'Налог в процентах',
                cost_silicone: 'Стоимость силикона за кг / руб',
                cost_plastic: 'Стоимость пластика за кг / руб',
                cost_photopolymer: 'Стоимость фотополимера за кг / руб',
                cost_PLA: 'Стоимость ПЛА за кг / руб',
                enter_cost: 'Введите стоимость',
                error_client_name: 'Такого клиента не существует',
                revenue: 'Выручка',
                profit: 'Прибыль',
                item_order: 'Заказ деталей',
                tax_money: 'Налог',
                salary_expenses: 'Расходы на ЗП',
                silicone_expenses: 'Расходы на силикон',
                plastic_expenses: 'Расходы на пластик',
                print_expenses: 'Расходы на печать',
                development_of_production: 'На развитие производства',
                profit_percent: 'Прибыль в %',
                data_order: 'Данные заказа',
                matrix_gr: 'Матрица (Грамм)',
                cost_of_printing: 'Себестоимость печати',
                cost_of_printing_unit: 'Себестоимость за едтиницу матрицы',
                cost_of_printing_vol: 'Себестоимость матриц (*кол-во)',
                casting_cost_of_plastic_per_unit: 'Литьё (стоимость пластика за единицу)',
                cost_of_matrices_qty: 'Себестоимость матриц (*кол-во)',
                casting_total_cost_of_the_material: 'Литьё (общая стоимость материала)',
                printin_works: 'Работы по печати',
                work_on_the_production_of_the_master_model: 'Работы по изготовлению мастер модели',
                work_make_matrix_1gr: 'Работа Изготовление матриц (1р. за грамм)',
                work_casting_plastic: 'Работа литьё пластика',
                work_casting_total: 'Работа литьё итог (работа*количество)',
                client_print: 'Клиент Печать',
                mm_print_make_mm: 'МАСТЕР МОДЕЛЬ - Печать + изготовление мастер модели',
                service_mm_unit: 'УСЛУГА ИЗГОТОВЛЕНИЯ МАТРИЦЫ за единицу',
                service_matrix: 'УСЛУГА ИЗГОТОВЛЕНИЯ МАТРИЦ',
                casting_unit: 'ЛИТЬЁ за ШТ',
                casting_sum: 'ЛИТЬЁ СУММА',
                quantity: 'Количество',
                item_add: 'Добавить деталь в заказ',
                description: 'Описание',
                error_item_name: 'Такой детали нет в базе',
                matrix_volume: 'Количество матриц',
                casting_volume: 'Количество ЛИТЬЁ, шт',
                enter_matrix_volume: 'Введите количество матриц',
                enter_casting_volume: 'Введите количество ЛИТЬЁ, шт',
                items_list_in_order: 'Список деталей в заказе',
                item_order_delete: 'Удалить заказ',
                item_order_delete_1: 'из заказа',
                item_order_edit: 'Редактирование заказа на детали',
                posts: 'Должности',
                work_schedule: 'График работы',
                cadres: 'Кадры',
                post_new: 'Создать новую должность',
                post_name: 'Наименование должности',
                post_add: 'Добавить должность',
                post_error_empty: 'Такой должности не существует',
                posts_user:'Должноти сотрудника',
                enter_post_name: 'Ведите наименование должности',
                enter_description: 'Ведите описание',
                error_exits: 'Такое наименование уже существует',
                post: 'Должность',
                post_delete: 'Удалит должность',
                post_update: 'Изменение должности',
                error_post_empty: 'Должность не существует',
                post_error_exist: 'Поле не должно быть пустым',
                post_error_add: 'Должность уже добавлена',
                production: 'Производство',
                technical_processes: 'Тех процессы',
                purchases_materials: 'Закупка материалов',
                supply_of_products: 'Поставка продукции',
                tech_processes: 'Тех процессы',
                tech_process_new: 'Новый тех процесс',
                tech_process: 'Тех процесс',
                tech_process_edit: 'Редактировать тех процесс',
                tech_processes_for_made_item: 'Тех процессы для производства детали',
                tech_process_add: 'Добавить тех процесс',
                tech_process_error_add: 'Тех процесс уже добавлен',
                tech_process_error_empty: 'Такого тех процесса не существует'
,               designation: 'Наименование',
                designation_enter: 'Введите наименование',
                post_can_made: 'Должность, которая может произвести этот тех процесс',
                number_p: '№',
                manufacturing_plan: 'План производства',
                manufacturing_plans: 'Планы производства',
                manufacturing_plan_for: 'План производства по договору',
                priority: 'Приоритет',
                status: 'Статус',
                open: 'Открыть',
                name_matrix: 'Наименование матрицы',
                name_matrix_enter: 'Введите наименование матрицы',
                for_client: 'клиента',
                matrices: 'Матрицы',
                matrix: 'Матрица',
                matrix_name: 'Наименование матрицы',
                matrix_name_enter: 'Введите наименование матрицы',
                matrix_new: 'Добавление новой матрицы',
                matrix_weight_enter: 'Введите массу матрицы',
                matrix_length_enter: 'Введите длину матрицы',
                matrix_width_enter: 'Введите ширину матрицы',
                matrix_height_enter: 'Введите высоту матрицы',
                matrix_description:'Описание матрицы',
                matrix_description_enter:'Введите описание матрицы',
                matrix_create: 'Создать матрицу',
                matrix_delete: 'Удалить матрицу',
                matrix_edit: 'Редактирование матрицы',
                matrix_error_add: 'Матрица уже добавлена',
                num: '№',
                quantity_made: 'Сделано',
                quantity_need: 'Нужно',
                article: 'Артикул',
                ok: 'OK',
                manufacturing_plan_common: 'Общий план производства',
                enter_volume: 'Введите сделанное количество',
                volume_less: 'Количество не должно превышать',
                order_complete: 'Выполнен',
                order_no_complete: 'Не выполнен',
                no_manufacturing_plan: 'Все заказы завершены',
                change_priority_for: 'Изменить приоритет для заказа',
                enter_priority: 'Введите приоритет:',
                for_changeStatus: 'Приоритет больше 0 - заказ активен, равен 0 - не активен',
              }
        }
      }
    }
  });

export default i18n;