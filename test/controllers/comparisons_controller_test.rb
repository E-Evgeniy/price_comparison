require "test_helper"

class ComparisonsControllerTest < ActionDispatch::IntegrationTest
  test "should get calculate" do
    get comparisons_calculate_url
    assert_response :success
  end
end
