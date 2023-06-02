function sum(num_one, num_two)
{
  var num_one_toString = aqConvert.VarToStr(num_one);
  var num_two_toString = aqConvert.VarToStr(num_two);

  var sum_one = 0;
  var sum_two = 0;
  var i = 0;

  while(i< aqString.GetLength(num_one_toString))
  {
    sum_one += aqConvert.VarToInt(aqString.GetChar(num_one_toString, i));
    i++; 
  }

  i=0;

  while(i< aqString.GetLength(num_two_toString))
  {
     sum_two += aqConvert.VarToInt(aqString.GetChar(num_two_toString, i));
     i++; 
  }

  return aqConvert.VarToStr(sum_one)+aqConvert.VarToStr(sum_two);
}


function errors(){
  Log.Error("shen tavs geficebi metumeqna es")
}

function message(sender, errorInfo){
  Log.Message("mesiji modis jigrulad")
}

function sum_num_runner(){
  
  Log.Message(sum(123, 321))
}




