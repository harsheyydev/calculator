var input_val = document.getElementById("inputVal");
var sub_val = document.getElementById("subVal");
var historyDiv = document.getElementById('historyDiv');

function getValue(val)
{
    // alert("dshfj");
    console.log(val);

    if(input_val.value == '0')
    {
        input_val.value = val;
    }
    else
    {
        input_val.value += val;
    }
}

function removeLastDigit()
{
    if(input_val.value.length == 1)
    {
        input_val.value = input_val.value.slice(0, -1);
        input_val.value = "0";
    }
    else
    {
        input_val.value = input_val.value.slice(0, -1);
    }
}

function clearAll()
{
    input_val.value = "";
    sub_val.value = "";
}

function solve()
{
    var equation = input_val.value;
    console.log(equation);
    var ans = eval(equation);

    input_val.value = ans;
    sub_val.value = equation + "=";

    showHistory(equation, ans);
}

// function showHistory()
// {
//     var equation = sub_val.value;
//     var ans = input_val.value;
//     historyDiv.innerHTML += `<div class="his">
//                                 <p>${equation}</p>
//                                 <p>${ans}</p>
//                             </div>`;
// }

function showHistory(equ, ans)
{
    historyDiv.innerHTML += `<div class="his">
                                <p>${equ} =</p>
                                <p>${ans}</p>
                            </div>`;
}


function clearHistory()
{
    var historyDivLen = document.querySelectorAll('#historyDiv div').length;
    if(historyDivLen > 0)
    {
        var choice = confirm("Are u sure u want to delete history ? ");
        if(choice)//choice == true
            historyDiv.innerHTML = "";
    }
}

