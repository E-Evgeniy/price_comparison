# frozen_string_literal: true

# Controller the API MultiplicationTablesController
module Api
    module V1
      # ClientsController
      class ComparisonsController < BaseController
        def calculate
          price1 = params[:price1].to_f
          quantity1 = params[:quantity1].to_f
          price2 = params[:price2].to_f
          quantity2 = params[:quantity2].to_f
      
          # Рассчитываем цену за единицу (например, за литр)
          unit_price1 = price1 / quantity1
          unit_price2 = price2 / quantity2
      
          # Определяем, какой вариант выгоднее
          if unit_price1 < unit_price2
            result = { 
              unit_price1: unit_price1.round(2),
              unit_price2: unit_price2.round(2),
              better_option: 1,
              savings: (unit_price2 - unit_price1).round(2)
            }
          else
            result = { 
              unit_price1: unit_price1.round(2),
              unit_price2: unit_price2.round(2),
              better_option: 2,
              savings: (unit_price1 - unit_price2).round(2)
            }
          end
      
          render json: result
        end
      
      end
    end
end
