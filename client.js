console.log('JS Ready');

$(document).ready(readyNow);

function readyNow (){
    console.log('JQ Ready');
    $('#submit-button').on('click', submitToTable)
}

let monthlyTotal = 0;

// define inputs as variables
// append values from inputs
// call clearInputs function

function submitToTable () {
    console.log('in submitToTable');

    let firstName = $('#first-name-input');
    let lastName = $('#last-name-input');
    let id = $('#id-input');
    let title = $('#title-input');
    let annualSalary = $('#annual-salary-input');

    $('#employee-table-body').append(`
        <tr>
            <td class="first-name-table-body">${firstName.val()}</td>
            <td class="last-name-table-body">${lastName.val()}</td>
            <td class="id-table-body">${id.val()}</td>
            <td class="title-table-body">${title.val()}</td>
            <td class="annual-salary-table-body">${annualSalary.val()}</td>
            <td class="delete-table-body"><button class="delete-button">Delete</button></td>
        </tr>
    `);

    monthlyTotal += parseInt(annualSalary.val());
    console.log(monthlyTotal);
    // Cannot read commas when concatenated, how would I fix this?

    $('#total-monthly-span').empty();
    $('#total-monthly-span').append((monthlyTotal));

    clearInputs();
}

function clearInputs () {
    $('#first-name-input').val('');
    $('#last-name-input').val('');
    $('#id-input').val('');
    $('#title-input').val('');
    $('#annual-salary-input').val('');
}

// #annual-salary-input is not read from 
// addToMonthlyTotal function, it is read as
// 0. I think it is not being passed correctly.
// When defined globally it is also unable to be read.
// 

// function addToMonthlyTotal () {
//     console.log('in addToMonthlyTotal');
//     let employeeSalary = $('#annual-salary-input');

//     monthlyTotal += employeeSalary.val();
//     console.log(monthlyTotal);
    
//     $('#total-monthly-span').empty();
//     $('#total-monthly-span').append(parseInt(monthlyTotal));
// }