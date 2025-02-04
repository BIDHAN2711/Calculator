let num1=document.getElementById("input")
let num2=document.getElementById("input2")
let ans1=document.getElementById("input1")
let numplus=document.getElementById("+")
let numminus=document.getElementById("-")
let numdiv=document.getElementById("/")
let nummulti=document.getElementById("x")

let one=document.getElementById("1")
let two=document.getElementById("2")
let three=document.getElementById("3")
let four=document.getElementById("4")
let five=document.getElementById("5")
let six=document.getElementById("6")
let seven=document.getElementById("7")
let eight=document.getElementById("8")
let nine=document.getElementById("9")
let zero=document.getElementById("0")
let dot=document.getElementById("dot")





num1.addEventListener("click",function(){
    activebox=num1;
});

num1.addEventListener("click",function(){
    if(activebox==num1)
    {
        num1.style.boxShadow="0 0 10px rgba(0, 0, 255, 0.8)";
        num2.style.boxShadow="none";
    }
    
});

    one.addEventListener("click", function() {
        if(activebox==num1)
            {
                activebox.innerText = activebox.innerText + one.innerText; // Update output
            }
    });
    
    two.addEventListener("click", function() {
        if(activebox==num1)
            {
                activebox.innerText = activebox.innerText + two.innerText; // Update output
            }
    });

    three.addEventListener("click", function() {
        if(activebox==num1)
            {
                activebox.innerText = activebox.innerText + three.innerText; // Update output
            }
    });

    four.addEventListener("click", function() {
        if(activebox==num1)
            {
                activebox.innerText = activebox.innerText + four.innerText; // Update output
            }
    });

    five.addEventListener("click", function() {
        if(activebox==num1)
            {
                activebox.innerText = activebox.innerText + five.innerText; // Update output
            }
    });

    six.addEventListener("click", function() {
        if(activebox==num1)
            {
                activebox.innerText = activebox.innerText + six.innerText; // Update output
            }
    });

    seven.addEventListener("click", function() {
        if(activebox==num1)
            {
                activebox.innerText = activebox.innerText + seven.innerText; // Update output
            }
    });

    eight.addEventListener("click", function() {
        if(activebox==num1)
            {
                activebox.innerText = activebox.innerText + eight.innerText; // Update output
            }
    });

    nine.addEventListener("click", function() {
        if(activebox==num1)
            {
                activebox.innerText = activebox.innerText + nine.innerText; // Update output
            }
    });

    zero.addEventListener("click", function() {
        if(activebox==num1)
            {
                activebox.innerText = activebox.innerText + zero.innerText; // Update output
            }
    });

    dot.addEventListener("click", function() {
        if(activebox==num1)
            {
                activebox.innerText = activebox.innerText + dot.innerText; // Update output
            }
    });

    num2.addEventListener("click",function(){
        activebox=num2;
    });

    num2.addEventListener("click",function(){
        if(activebox==num2)
        {
            num2.style.boxShadow="0 0 10px rgba(0, 0, 255, 0.8)";
            num1.style.boxShadow="none";
        }
        
    });

    one.addEventListener("click", function() {
        if(activebox==num2)
            {
                activebox.innerText = activebox.innerText + one.innerText; // Update output
            }
    });
    
    two.addEventListener("click", function() {
        if(activebox==num2)
            {
                activebox.innerText = activebox.innerText + two.innerText; // Update output
            }
    });

    three.addEventListener("click", function() {
        if(activebox==num2)
            {
                activebox.innerText = activebox.innerText + three.innerText; // Update output
            }
    });

    four.addEventListener("click", function() {
        if(activebox==num2)
            {
                activebox.innerText = activebox.innerText + four.innerText; // Update output
            }
    });

    five.addEventListener("click", function() {
        if(activebox==num2)
            {
                activebox.innerText = activebox.innerText + five.innerText; // Update output
            }
    });

    six.addEventListener("click", function() {
        if(activebox==num2)
            {
                activebox.innerText = activebox.innerText + six.innerText; // Update output
            }
    });

    seven.addEventListener("click", function() {
        if(activebox==num2)
            {
                activebox.innerText = activebox.innerText + seven.innerText; // Update output
            }
    });

    eight.addEventListener("click", function() {
        if(activebox==num2)
            {
                activebox.innerText = activebox.innerText + eight.innerText; // Update output
            }
    });

    nine.addEventListener("click", function() {
        if(activebox==num2)
            {
                activebox.innerText = activebox.innerText + nine.innerText; // Update output
            }
    });

    zero.addEventListener("click", function() {
        if(activebox==num2)
            {
                activebox.innerText = activebox.innerText + zero.innerText; // Update output
            }
    });

    dot.addEventListener("click", function() {
        if(activebox==num2)
            {
                activebox.innerText = activebox.innerText + dot.innerText; // Update output
            }
    });




function sum()
{
    var result = parseFloat(num1.innerText) + parseFloat(num2.innerText);
    ans1.innerText = result;
}
numplus.onclick = sum;

function min()
{
    var result = parseFloat(num1.innerText) - parseFloat(num2.innerText);
    ans1.innerText = result;
}
numminus.onclick = min;

function multi()
{
    var result = parseFloat(num1.innerText) * parseFloat(num2.innerText);
    ans1.innerText = result;
}
nummulti.onclick = multi;

function divi()
{
    var result = parseFloat(num1.innerText) / parseFloat(num2.innerText);
    ans1.innerText = result;
}
numdiv.onclick = divi;

