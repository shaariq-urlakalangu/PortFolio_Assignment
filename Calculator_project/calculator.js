let a=document.getElementById("result");
function appendValue(value){
    a.textContent+=value;
}
function clearResult(){
    a.textContent='';
}
function giveResult(){
    try{
        a.textContent=eval(a.textContent);
    }
    catch{
        a.textContent="Error";
    }
}