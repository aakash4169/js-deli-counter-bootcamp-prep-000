function takeANumber(katzDeliLine,person){
  katzDeliLine.push(person);
  var n=katzDeliLine.indexOf(person)+1;
//var n=katzDeliLine.length;
  var str=`Welcome, ${person}. You are number ${n} in line`;
//var str= "Welcome, "+person+". You are number "+n+" in line"; 
return str;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length==0)
  return "There is nobody waiting to be served!";
  else{
  var name=katzDeliLine.shift();
  return `Currently serving ${name}.`;
  }
}