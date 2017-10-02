angular.module('e-homework').controller('NewHomeworkController', function($scope, $cookies, $filter, $state) {
	//console.log('Hello !');
    $scope.DEFAULT_LANGUAGE = 'EN';
    $scope.ClassRoomList = [{'classroom_id':1, 'classroom_name_th' : '5/1','classroom_name_en' : '5/1'}
    					,{'classroom_id':2, 'classroom_name_th' : '5/2','classroom_name_en' : '5/2'}];
    $scope.Subject = {'subject_name_th' : 'คณิตศาสตร์', 'subject_name_en' : 'Math'};
    $scope.Teacher = {'firstname_th' : 'มยุรี', 'lastname_en' : 'สิงห์สมุทร' , 'firstname_en' : 'Mayuree', 'lastname_en' : 'Singhasanoot'};
});