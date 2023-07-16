const _header = document.querySelectorAll('p')[0];
const _curTask = document.querySelectorAll('p')[1];
const _answerInput = document.querySelector('input');
let currentTask = Number(0);
const maxTasks = 20;


function InitializeNewIssue()
{
    currentTask = Number(currentTask) + Number(1);
    _curTask.innerHTML = `Task: ${currentTask} / ${maxTasks}`;
    const step1 = Math.floor(Math.random() * 101);
    const step2 = Math.floor(Math.random() * 101);
    const step3 = Math.floor(Math.random() * 101);

    const methods = ["*", "-", "+", "/"];
    const step1_2_method = methods[Math.floor(Math.random() * methods.length)];
    const step2_3_method = methods[Math.floor(Math.random() * methods.length)];

    _header.innerText = step1 + " " + step1_2_method + " " +  step2 +" " +  step2_3_method + " " +  step3;
}

function CheckAnswerCorrectness()
{
    const answer = eval( _header.innerHTML.toLocaleLowerCase() );


    InitializeNewIssue();
    return answer;
}

InitializeNewIssue();