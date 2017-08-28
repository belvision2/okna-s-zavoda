$.fn.checkbox = function(options){
	var opts = $.extend({
		checkboxClass: 'checkbox',
		checkedClass: 'check',
		labelClass: 'checkbox-label'
	}, options);

	return this.each(function(){
		var checkbox = this,
			label = $(checkbox).parent('label'),
			newCheckbox = $('<b>').addClass(opts.checkboxClass),
			checkElement;

			label.addClass(opts.labelClass);

		if(checkbox.checked) newCheckbox.addClass(opts.checkedClass);

		checkElement = label.length ? label : newCheckbox;

		checkElement.click(function(event){
			event.preventDefault();

			newCheckbox.toggleClass(opts.checkedClass);

			if(checkbox.checked){
				checkbox.checked = false;
			} else {
				checkbox.checked = true;
			}
		});
		$(checkbox).hide().after(newCheckbox);
	});
}
