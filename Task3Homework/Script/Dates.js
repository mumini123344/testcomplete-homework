function date()
{
  var year_now = aqDateTime.GetYear(aqDateTime.Now());
  var month_now = aqDateTime.GetMonth(aqDateTime.Now());
  var day_of_month = aqDateTime.GetDay(aqDateTime.Now());
  
  Log.Message("Icxovre mglurad tundac martosuli")
  Log.Message(date = aqDateTime.GetYear(aqDateTime.Now()) + "☹" +  
  aqDateTime.GetMonth(aqDateTime.Now()) + "☹"
   + aqDateTime.GetDay(aqDateTime.Now()));
  
}