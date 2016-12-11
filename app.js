// array of letter objects

var letters = [{name:"A", id:1, fid:1}, {name:'B', id:2, fid:2}, {name:'C', id:3, fid:3}, {name:'D', id:4, fid:4}, {name:'E', id:5, fid:5}, {name:'F', id:6, fid:6}, {name:'G', id:7, fid:7}, {name:'H', id:8, fid:8}, {name:'I', id:9, fid:9}, {name:'J', id:10, fid:10}, {name:'K', id:11, fid:11}, {name:'L', id:12, fid:12}, {name:'M', id:13, fid:13}, {name:'N', id:14, fid:14}, {name:'O', id:15, fid:15}, {name:'P', id:16, fid:16}, {name:'Q', id:17, fid:17}, {name:'R', id:18, fid:18}, {name:'S', id:19, fid:19}, {name:'T', id:20, fid:20}, {name:'U', id:21, fid:21}, {name:'V', id:22, fid:22}, {name:'W', id:23, fid:23}, {name:'X', id:24, fid:24}, {name:'Y', id:25, fid:25}, {name:'Z', id:26, fid:26}, {name:'a', id:27, fid:27}, {name:'b', id:28, fid:28}, {name:'c', id:29, fid:29}, {name:'d', id:30, fid:30}, {name:'e', id:31, fid:31}, {name:'f', id:32, fid:32}, {name:'g', id:33, fid:33}, {name:'h', id:34, fid:34}, {name:'i', id:35, fid:35}, {name:'j', id:36, fid:36}, {name:'k', id:37, fid:37}, {name:'l', id:38, fid:38 }, {name:'m', id:39, fid:39}, {name:'n', id:40, fid:40}, {name:'o', id:41, fid:41}, {name:'p', id:42, fid:42}, {name:'q', id:43, fid:43}, {name:'r', id:44, fid:44}, {name:'s', id:45, fid:45}, {name:'t', id:46, fid:46}, {name:'u', id:47, fid:47}, {name:'v', id:48, fid:48}, {name:'w', id:49, fid:49}, {name:'x', id:50, fid:50}, {name:'y', id:51, fid:51}, {name:'z', id:52, fid:52}];
// dependency injection
var myApp = angular.module('myApp',['ui.sortable']);     


myApp.controller('mainController',function($scope){

	$scope.alphabets = letters;
	var startPos ;
	$scope.tableArray = [];
	$scope.sortableOptions = {

	    start: function(e,ui) {
	    	startPos = ui.item.index();
	    },
	    stop: function(e, ui) {
	      	var endPos = ui.item.index();
	      	$scope.alphabets[endPos]["id"] = endPos+1;
			     		
	      	if(startPos > endPos){
	      		for(var i=endPos+1; i<=startPos; i++){
	      			$scope.alphabets[i].id += 1;
	      		}
	      	}else{
	      		for(var i=startPos; i<endPos; i++){
	      			$scope.alphabets[i].id -= 1;
	      		}
	      	}
	      	// Create new array and push items if variable id is not equal to fixed id
		    $scope.tableArray = [];
			for(var j=0; j<$scope.alphabets.length; j++){
	      		var item = $scope.alphabets[j];
	      		if(item.id != item.fid){
	      		$scope.tableArray.push(item);
	      		}
	      	}
	    }
  	};
});

