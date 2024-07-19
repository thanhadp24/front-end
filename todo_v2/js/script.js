let add = $('.btn-add');
let text = $('.text-field input');
let tasks = $('.tasks');

add.on('click', function(){
	if(text.val()){
		let task = `<li class="task">
					<div class="done-task">
						<input type="checkbox">
					</div>
					<div class="task-detail">${text.val()}</div>
					<div class="trash-img">
						<img src="images/trash.svg">
					</div>
				</li>`;
		tasks.append(task);
		text.val('');
	}else {
		$('.warning').css.visible('true');
	}

	tasks.on('click', '.trash-img', function(){
		$(this).parent().remove();
	})

	tasks.on('change', '.done-task input', function(){
		$(this).parent().next().toggleClass('checked');
	})

})