$(document).ready(function(){
	let btnAdd = $('.add-button');
	let text = $('.add-text');
	let tasks = $('.tasks');


	btnAdd.on('click', function(){
		if(text.val()){
			let task = `<li class="task">
							<div class="task-cbx col1">
							<input type="checkbox">
							</div>
							<div class="task-text col2">${text.val()}</div>
							<div class="task-remove col3"></div>
						</li>`;

			tasks.append(task);
			text.val('');
		}
	})

	// new task does not exist in btnRemove array
	// new task just only in "tasks"
	// let btnRemove = $('.task-remove');
	// btnRemove.on('click', function(){
	// 	$(this).parent().remove();
	// })

	tasks.on('click', '.task-remove', function(){
		$(this).parent().remove();
	})

	tasks.on('change', '.task-cbx input', function(){
		$(this).parent().next().toggleClass('checked');
	})


	$('.sortable').sortable();
	

})