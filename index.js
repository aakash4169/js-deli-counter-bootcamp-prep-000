function takeANumber(katzDeliLine,person){
  katzDeliLine.push(person);
//  var n=katzDeliLine.indexOf(person)+1;
var n=katzDeliLine.length;
  var str=`Welcome, ${person}. You are number ${n} in line`;
//var str= "Welcome, "+person+". You are number "+n+" in line"; 
return str;
}