
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");
let generate = document.getElementById("generate");
let result = document.getElementById("result");

generate.onclick = function () {
    let length = document.getElementById("length").value;
    length=Number(length);
    if (length <= 0) {
        result.textContent = "Enter a valid range";
        return;
    }
    let lc = "abcdefghijklmnopqrstuvwxyz";
    let uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num = "1234567890";
    let symbols = "!@#$%^&*()_+-={}[]|:;<>,.?/";

    let password="";
    let allowed="";

    if(lowercase.checked){
        allowed+=lc;
    }
    if(uppercase.checked){
        allowed+=uc;
    }
    if(number.checked){
        allowed+=num;
    }
    if(symbol.checked){
        allowed+=symbols;
    }
    if(allowed.length==0){
        result.textContent="select atleast any one option";
        return;
    }
    for(let i=0;i<length;i++){
        let randindex=Math.floor((Math.random()*allowed.length));
        password+=allowed[randindex];
    }
    result.textContent=`Your randomly generated password is ${password}`;
}