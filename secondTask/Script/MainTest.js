﻿
function open(){
  KeywordTests.OpenOrders.Run();
  ImageRepository.Order.orderpic.Click();
  KeywordTests.FillingSections.Run();
  KeywordTests.ClosingOrder.Run();
}

//function addOrder(){
//  ImageRepository.Order.addOrder.Click()
//}