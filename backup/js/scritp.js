function $wgh () {
	this.name='wgh'
}


var $wgh = new $wgh()

//主模块
$wgh.main_app = angular.module('main-app',[
		'ngRoute',
		'content-app'
	]);

//设置路由
$wgh.main_app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/home',{
		templateUrl:'partial/homepage/homepage.html',
		controller:'homepageCtrl'
	})
	.when('/notes',{
		templateUrl:'partial/notes/noteslist.html',
		controller:'notesListCtrl'
	})
		.when('/notes/:notePath',{
			templateUrl:'partial/notes/notes.html',
			controller:'notesCtrl'
		})
			.when('/notes/:notePath/:mdPath',{
				templateUrl:'partial/notes/notes.html',
				controller:'notesMdCtrl'
			})
	.when('/perInfo',{
		templateUrl:'partial/perInfo/perInfo.html',
		controller:'perinfoCtrl'
	})
	.when('/code',{
		templateUrl:'partial/code/code.html',
		controller:'codeCtrl'
	})
	.otherwise({
		redirectTo: '/home'
	})
}])

