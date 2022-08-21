//console.log('client.js');

$(document).ready(readyNow);

function readyNow() {
    //console.log('jquery sourced');
    $(document).on('click', '#task-submit', addTask)
}

function addTask() {
    //console.log('in addTask');
    //POST route
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: {
            task: $('#add-task').val(),
        }
    })
}



