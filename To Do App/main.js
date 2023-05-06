$(document).ready(function() {
	var counter = 0;
  
	$('#new-task-submit').on('click',function(){
	  var taskInput = $('#new-task-input');
	  var taskInputValue = taskInput.val().trim();
	  
	  if (taskInputValue === '') {
	    alert('Please input task');
	    return;
	  }
	  
	  counter++;
	  var taskitem = $('.task:eq(0)').clone();
	  var task_input_el = taskitem.find('.text');
	  task_input_el.text(taskInputValue);
	  task_input_el.removeAttr('readonly');
	  task_input_el.css('width', '200px');
	  task_input_el.focus();
	  taskitem.find('.task-number').text(counter + '. ');
	  taskitem.show();
	  $('#tasks').append(taskitem);
	  
	  taskInput.val('');
	});
  
	$(document).on('click','.delete',function(e){
	  e.preventDefault(); 
	  $(this).closest('.task').remove();
	});
});
