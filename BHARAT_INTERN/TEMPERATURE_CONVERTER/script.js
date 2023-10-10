let cel=document.getElementById("celcius");
let far=document.getElementById("farenheit");
let kel=document.getElementById("kelvin");
let btn=document.getElementById("button"); 
cel.addEventListener("input",function()
{
    let c=parseFloat(cel.value);
    let f=(c*(9/5))+32;
    let k=c+273.15;
    far.value=f;
    kel.value=k;
})
far.addEventListener("input",function()
{
    let f=parseFloat(far.value);
    let c=(f-32)*(5/9);
    let k=(f-32)*(5/9)+273.15;
    cel.value=c;
    kel.value=k;
})
kel.addEventListener("input",function()
{
    let k=parseFloat(kel.value);
    let c=k-273.15;
    let f=((k-273)*(9/5))+32;
    cel.value=c;
    far.value=f;
})
btn.addEventListener("click",function()
{
    cel.value=" ";
    far.value=" ";
    kel.value=" ";
})
