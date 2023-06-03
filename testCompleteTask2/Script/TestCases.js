const main_page = require("MainPage");
const order_info = require("OrderInfo");

function OrdersTestOne(){
  TestedApps.Orders.Run();
  main_page.MainPage.make_New_Order();
  order_info.OrderInfo.set_order_info();
  order_info.OrderInfo.check_order_info();
  
}

module.exports.TestCases = new OrdersTestOne();