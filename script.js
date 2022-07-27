let div1 = document.getElementById('div');
div1.innerHTML = `    
<div class=" mt-4 card container border border-secondary" style="width: 18rem;">
<div class="row align-items-left border border-secondary border-top-0 border-start-0 border-end-0 p-1 text-start">
    Standard Calculator
</div>
<div id="buttonsDiv">
    <div class="p2">
        <input type="text" class="row align-items-center border border-secondary border-top-0 border-start-0 border-end-0 border-bottom-0 text-end" style="height: 2rem;  width: 110%;" id="equation" disabled="disabled" readonly="">
        <input type="text" class="row align-items-center border border-secondary border-top-0 border-start-0 border-end-0 text-end" style="height: 2rem; width: 109%;" id="result" placeholder="0">
    </div>
    <div class="p1">
        <div class=" row align-items-center">
            <button type="button" class="btn btn-light col border m-1" onclick="display('(')">(</button>
            <button type="button" class="btn btn-light col border m-1" onClick="display(')')">)</button>
            <button type="button" class="btn btn-danger col border m-1" onClick="delcl()">CE</button>
            <button type="button" class="btn btn-danger col m-1 border" id="clear" onClick="Clear()">C</button>
        </div>
        <div class="row align-items-center">
            <button type="button" class="btn btn-secondary col border m-1" onClick="display('7')">7</button>
            <button type="button" class="btn btn-secondary col border m-1" onClick="display('8')">8</button>
            <button type="button" class="btn btn-secondary col border m-1" onClick="display('9')">9</button>
            <button type="button" class="btn btn-light col m-1 border" onClick="display('*')">x</button>
        </div>
        <div class="row align-items-center">
            <button type="button" class="btn btn-secondary col border m-1" onClick="display('4')">4</button>
            <button type="button" class="btn btn-secondary col border m-1"onClick="display('5')">5</button>
            <button type="button" class="btn btn-secondary col border m-1"onClick="display('6')">6</button>
            <button type="button" class="btn btn-light col border m-1" onClick="display('-')">-</button>
        </div>
        <div class="row align-items-center">
            <button type="button" class="btn btn-secondary col border m-1" onClick="display('1')">1</button>
            <button type="button" class="btn btn-secondary col border m-1" onClick="display('2')">2</button>
            <button type="button" class="btn btn-secondary col border m-1" onClick="display('3')">3</button>
            <button type="button" class="btn btn-light col border m-1" onClick="display('+')">+</button>
        </div>
        <div class="row align-items-center">
            <button type="button" class="btn btn-secondary col border m-1" onClick="display('.')">.</button>
            <button type="button" class="btn btn-secondary col border m-1" onClick="display('0')">0</button>
            <button type="button" class="btn btn-secondary col border m-1" onClick="display('/')">/</button>
            <button type="button" class="btn btn-primary col border m-1" onClick="calculate()" id="equal">=</button>
        </div>
    </div>
</div>
</div>`

// Functionality 

let result=document.getElementById('result');
function display(num){
    result.value +=num;
}

function Clear(){
    result.value = "";
}

function delcl(){
result.value=result.value.slice(0,-1)
}

function calculate(){
    try{
        result.value = eval(result.value);
    }
    catch(err){
        alert("Invalid");
    }
}

document.getElementById('result').onkeypress = function typing(event){
    let show = document.getElementById('result');
    if(event.key==="Enter"){
        (show.value==="") ? alert("Please Enter The Value First"): calculate();
   }
    else if(!(event.charCode>=48 && event.charCode<=57 || event.key==="+" || event.key==="-" || event.key==="/" || event.key==="*")){
        alert("Please Enter Number Only :)");
       event.preventDefault();
   }
}