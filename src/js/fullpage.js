;(function(){
	require('fullpage.js');

	$('.fp-container').fullpage({
			sectionSelector: '.section',
			responsiveWidth: 0,
			fixedElements: 'header',
			paddingTop: '40px',
			scrollOverflow: true,

			afterRender: function() {
				generateLinks(this[0].children.length);
			}
		}
	);



	/*
	document.querySelector('.fp-nav').addEventListener('click', function(e) {
		debugger;
		$.fn.fullpage.moveTo(e.target.getAttribute('href').slice(1));
		e.preventDefault();
	})
	*/

	function generateLinks(sectionCount) {
		var navContainerList;
		var nextBtnList;

		navContainerList = document.getElementsByClassName('menu-navigation');
		navContainerList = Array.prototype.slice.call(navContainerList);
		navContainerList.forEach(function(navContainer, listNo) {
			var i;
			var elemLi;

			navContainer.addEventListener('click', function(e) {
				if (e.target.nodeName != 'A') {
					return;
				}
				$.fn.fullpage.moveTo(e.target.getAttribute('href').slice(1));
				e.preventDefault();
			});
			for (i = 0; i < sectionCount; i++) {
				elemLi = document.createElement('li');
				elemLi.innerHTML = i == listNo ? '<a class="active" href="#' + (i+1) +'"></a>' : '<a  href="#' + (i+1) +'"></a>';
				if (navContainer.children.length) {
					navContainer.children[0].appendChild(elemLi);
				}

			}
		})
		nextBtnList = document.getElementsByClassName('btn-next');
		nextBtnList = Array.prototype.slice.call(nextBtnList);
		nextBtnList.forEach(function(nextBtn) {
			nextBtn.addEventListener('click', function(e) {
				$.fn.fullpage.moveSectionDown();
				e.preventDefault();
			});
		})
	}

})();

