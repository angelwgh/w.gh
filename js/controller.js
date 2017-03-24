$wgh.content_app = angular.module('content-app',['ngSanitize']);

/**
 * 首页
 */	
$wgh.content_app.controller('homepageCtrl', ['$scope', function($scope){
	$scope.name = $wgh.name
}])



/**
 * 笔记
 */
//笔记列表页
$wgh.content_app.controller('notesListCtrl', ['$scope','$routeParams','$http', 
	function($scope,$routeParams,$http){
		$http.get('./partial/notes/notes.json').then(function (res) {
			$scope.data = res.data;

		})
	}
])


//笔记内容页
$wgh.content_app.controller('notesCtrl', ['$scope','$routeParams','$http', 
	function($scope,$routeParams,$http){
		$scope.hash = $routeParams;
		$http.get('./partial/notes/'+$scope.hash.notePath+'/'+$scope.hash.notePath+'.json').then(function (res) {
			$scope.data = res.data;
			$scope.data.cssFilePath = "partial/notes/style/notes.css";
		});

	}
])


//加载md文件
$wgh.content_app.controller('notesMdCtrl',['$scope','$routeParams','$http',
		function ($scope,$routeParams,$http) {
			$scope.hash = $routeParams;
			
			$http.get('./partial/notes/'+$scope.hash.notePath+'/'+$scope.hash.notePath+'.json').then(function (res) {
				$scope.data = res.data;
				$scope.data.cssFilePath = "partial/notes/style/notes.css";
			});

			$http.get('./partial/notes/'+$scope.hash.notePath+'/'+$scope.hash.mdPath+'.md')
				.then(function (res) {

					//console.log(res.data)
					var rendererMD = new marked.Renderer();

					rendererMD.table = function (header, body) {
					    return '<table class="table table-striped">'+header+body+'</table>'
					}

					marked.setOptions({
						renderer:rendererMD,
						gfm: true,
					    tables: true,
					    breaks: false,
					    pedantic: false,
					    sanitize: false,
					    smartLists: true,
					    smartypants: false
					});//基本设置

					marked.setOptions({
				        highlight: function (code) {
				        return hljs.highlightAuto(code).value;
				      }
				    });
					
				    $scope.html = marked(res.data);

				    //暂用jq加载dom
				    $('.m-content').html($scope.html);
				   
				   
				   	MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});//行内公式用'$$'包裹
					MathJax.Hub.Queue(['Typeset', MathJax.Hub]);//数学公式
				},
				function (res) {
					console.log(res)
					 $('.m-content').html(res.statusText);
				}
			)
			
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