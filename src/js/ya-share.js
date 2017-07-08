;(function(){
	var shareContainerList;
	shareContainerList = document.querySelectorAll('.ya-share');
	shareContainerList = Array.prototype.slice.call(shareContainerList);
	shareContainerList.forEach(function(shareContainer) {
		Ya.share2(shareContainer, {
			content: {
				url: shareContainer.dataset.shareUrl,
				image: shareContainer.dataset.shareImage,
				title: shareContainer.dataset.shareTitle,
				description: shareContainer.dataset.shareDescription
			},
			theme: {
				services: 'vkontakte,facebook,odnoklassniki'
			}
			// здесь вы можете указать и другие параметры
		});
	})
})();
