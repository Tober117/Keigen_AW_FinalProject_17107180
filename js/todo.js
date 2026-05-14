"use strict";

$(document).ready( () => {

    function loadTasks() {
        const storedList = localStorage.getItem("TodoList");
        if(storedList) {
            const tasks = JSON.parse(storedList);
            tasks.forEach(task => {
                const newTask = $(`<li>${task.text}<button class="remove">Remove</button></li>`);
                if (task.completed) newTask.addClass('checked');
                $('#list_container').append(newTask);
            })
        }
    }

    function saveTasks() {
        const tasks = [];
        $('#list_container li').each(function() {
            const text = $(this).contents().get(0).nodeValue;
            const completed = $(this).hasClass('checked');
            tasks.push({text, completed});
        });
        localStorage.setItem("TodoList", JSON.stringify(tasks));
    }

    loadTasks();

    $('#add_task').on('click', function() {
        let taskText = $('#input_box').val();

        if (taskText.trim() !== '') {
            let newTask = $(`<li>${taskText}<button class="remove">Remove</button></li>`);
            
            $('#list_container').append(newTask);

            $('#input_box').val('');
            $('#input_box').focus();
            saveTasks();
        }
        else{
            alert("Please enter a task");
        }
    });

    $('#list_container').on('click', 'li', function() {
        $(this).toggleClass('checked');
        saveTasks();
    });

    $('#list_container').on('click', '.remove', function(e) {
        e.stopPropagation();
        $(this).parent().remove();
        saveTasks();
    });

});