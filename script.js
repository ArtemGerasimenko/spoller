const spollers = document.querySelectorAll('.block__item');
console.log(spollers);

spollers.forEach(function(spoller) {

	const btn = spoller.querySelector('.block__title');

	btn.addEventListener("click", function(){

		spollers.forEach(function(item){
			if(item !== spoller){
				item.classList.remove("active");
			}
		});

		spoller.classList.toggle("active");
	});
});