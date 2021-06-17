//window.alert("Esse Site carrega Fonte da Intertnet!")
function getHistoy(){
  return document.getElementById("history-value").innerText;
}

function printHistory(num){
  document.getElementById("history-value").innerText=num;
}
function printOutput(num){
  if(num==' ')
    document.getElementById("output-value").innerText=num;
  else
    document.getElementById("output-value").innerText=getFormatedNumber(num);
}
function getOutPut(){
  return document.getElementById("output-value").innerText;
}
function getFormatedNumber(num){
  return Number(num).toLocaleString("en");
}


var operator = document.getElementsByClassName("operator");
for(var i =0; i<operator.length;i++){
  operator[i].addEventListener('click',function(){
    
    switch(this.id){
        case 'backspace':
          alert("Operador Esperado:"+this.id);
        default:
          alert("Outro Operador:"+this.id);

    }
  });
}

var number = document.getElementsByClassName("number");
for(var i =0; i<number.length;i++){
  number[i].addEventListener('click',function(){
    //alert("The Number clicked:"+this.id);
    var output = reverseNumberFormat(getOutPut());
    if(output!=NaN && output+this.id<=999999999999){
      output=output+this.id;
      printOutput(output);
    }
  });
}



function reverseNumberFormat(num){
  return Number(num.replace(/,/g,''));
}

console.log(reverseNumberFormat(getOutPut()));