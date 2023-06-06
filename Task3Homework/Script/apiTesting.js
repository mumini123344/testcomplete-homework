function httpGetRequest()
{
  var address = "https://www.boredapi.com/api/activity?/";
  var aqHttpRequest = aqHttp.CreateGetRequest(address);
  var aqHttpResponse = aqHttpRequest.Send();
  
  var jsonResponse = JSON.parse(aqHttpResponse);
  var returnedKey = jsonResponse.key;
  
  Log.Message(returnedKey);
  return returnedKey;

  
}

function musicActivity(){
  var musicAddress = "http://www.boredapi.com/api/activity?type=music";
  var request = aqHttp.CreateGetRequest(musicAddress);
  var response = request.Send();
  
  var jsonResponse = JSON.parse(response);
  var returnedKey = jsonResponse.activity;

  Log.Message(returnedKey);
  return returnedKey;

}
function checkignRadioBox()
{
  let groupBox = Aliases.Orders.OrderForm.Group;
  aqObject.CheckProperty(groupBox.Visa, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(groupBox, "Enabled", cmpEqual, true);
}

function running(){
  KeywordTests.OpeningOrder.Run();
  KeywordTests.NewOrder.Run();
  Aliases.Orders.OrderForm.Group.Customer.Keys(musicActivity());
  Aliases.Orders.OrderForm.Group.Zip.Keys(httpGetRequest());
  checkignRadioBox();
  KeywordTests.ClosingOrder.Run();
}

