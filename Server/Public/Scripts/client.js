//console.log('client.js');

$(document).ready(readyNow);

function readyNow() {
    //console.log('jquery sourced');
    $(document).on('click', '#task-submit', addTask);
    $(document).on('click', '.check-as-complete', markAsComplete);
    getTasks();
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
    }).then(function (response) {
        getTasks();
        $('input').val('');
    })
};

//In the future, might be good to get routes
//working in server.js before creating router
//Not a lot of chances to test code.
function getTasks() {
    console.log('in getTasks');
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function (response) {
        console.log(response);
        $('#taskTable').empty();
        for (let i=0; i < response.length; i +=1) {
            let taskReturn = response[i];
            console.log(taskReturn);
            $('#taskTable').append(`
                <tr>
                    <td>${taskReturn.task}</td>
                    <td><button class="check-as-complete" data-id="${taskReturn.id}">Complete</button></td>
                    <td><button data-id="${taskReturn.id}">Delete</button></td>
                </tr>
            
            `);
        }
    }).catch(function(error) {
        console.log(error);
        alert('Problem occurred');
    });

}

function markAsComplete() {
    console.log('in markAsComplete');
    //PUT route
    console.log($(this).data('id'))

}

