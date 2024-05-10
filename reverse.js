
let Str  = "Computer Science ";
  
let obj = {};

for(ch of Str){
    if(obj[ch]){
        obj[ch]++;
    }
    else{
        obj[ch] = 1;
    }
}
console.log(obj);f