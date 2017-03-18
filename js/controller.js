$wgh.content_app = angular.module('content-app',[]);

/**
 * 首页
 */	
$wgh.content_app.controller('homepageCtrl', ['$scope', function($scope){
	$scope.name = $wgh.name
}])



/**
 * 笔记
 */

$wgh.content_app.controller('notesCtrl', ['$scope','$routeParams','$http', 
	function($scope,$routeParams,$http){
		$http.get('./partial/notes/list.json').then(function (res) {
			$scope.notesList = res.data.notesList;
			console.log($scope.notesList)
		})
	}
])



/**
 * 个人资料

 */
$wgh.content_app.controller('perinfoCtrl',['$scope',function ($scope) {
	$scope.name = "个人资料"
}])

$wgh.content_app.controller('codeCtrl',['$scope',function ($scope) {
	$scope.name = "练习"
}])