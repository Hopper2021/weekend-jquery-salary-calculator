console.log('JS Ready');

$(document).ready(readyNow);

function readyNow (){
    console.log('JQ Ready');
    $('#submit-button').on('click', submitToTable);
    $('#employee-table-body').on('click', '.delete-button', deleteFromTable);
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
        <tr class="employee-table-row">
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
    if( monthlyTotal > 20000 ){
        $('#total-monthly').css('background-color', 'red');
    } else {
        // Do nothing
    }
    clearInputs();
    // addToMonthlyTotal();
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

// function addToMonthlyTotal () {
//     console.log('in addToMonthlyTotal');
//     let employeeSalary = $('#annual-salary-input');
//     monthlyTotal += parseInt(employeeSalary);
//     console.log(monthlyTotal);
//     $('#total-monthly-span').empty();
//     $('#total-monthly-span').append(parseInt(monthlyTotal));
// }

function deleteFromTable () {
    console.log('in deleteFromTable');
    console.log($(this).parent());
    
    console.log($(this).parent().parent());
    
    let salaryToSubtract = parseInt($(this).parent().parent().data('.annual-salary-table-body'));
    monthlyTotal -= salaryToSubtract;
    console.log(monthlyTotal); // comes out as NaN
    
    $('#total-monthly-span').empty();
    console.log(monthlyTotal);
    $('#total-monthly-span').append(monthlyTotal);

    $(this).parent().parent().empty();
}