const spollers = document.querySelectorAll(".block__title");
const spollersText = document.querySelectorAll(".block__text");

spollers.forEach(function(item) {
	item.addEventListener("click", function(){
		let openTitle = item;
		let textId = openTitle.getAttribute("data-text");
		let openText = document.querySelector(textId);

		if (!openTitle.classList.contains('active')){ //Убирает проверку класса при нажатии
			
		};
			/*spollers.forEach(function(item){
			item.classList.remove('active');
			});

			spollersText.forEach(function(item){
			item.classList.remove('block__text--active');
			});*/

			openTitle.classList.toggle('active');
			openText.classList.toggle('block__text--active');
	});
});