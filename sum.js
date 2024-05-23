function add()
{
    x=document.getElementById("n1").value;
    y=document.getElementById("n2").value;
    x=Number.parseInt(x);
    y=Number.parseInt(y);
    z=x+y;
    document.getElementById("r").innerHTML="Result :"+z;
    
}
function mul()
{
    x=document.getElementById("m1").value;
    y=document.getElementById("m2").value;
    x=Number.parseInt(x);
    y=Number.parseInt(y);
    z=x*y;
    document.getElementById("a").innerHTML="Result :"+z;

}

function division()
{
    x=document.getElementById("d1").value;
    y=document.getElementById("d2").value;
    x=Number.parseInt(x);
    y=Number.parseInt(y);
    z=x/y;
    document.getElementById("b").innerHTML="Result :"+z;

}