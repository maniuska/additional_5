module.exports = function check(str, bracketsConfig) {
  
var arr=str.split('');

var arrAs={};
for(var i=0;i<bracketsConfig.length;i++){
  arrAs[bracketsConfig[i][0]]=bracketsConfig[i][1];
}

for (i=0;i<arr.length-1;i++){
  if(arrAs[arr[i]]==arr[i+1]){
    arr.splice(i,2); // тогда удаляем 2 элемента
     i=(i===0)?-1:i-2;
   }
}
 return (arr.length == 0)?true:false;
}
