var myModule = (function () {
	var init = function () {
		_setUpListeners();
		// то, что должно произойти сразу!
	};

	var _setUpListeners = function () {
		// прослушка событий...
		// console.log('я в прослушке событий');
	}

	return{
		init:init
	};
})();

myModule.init();