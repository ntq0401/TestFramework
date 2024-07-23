window.ChiTietChuyenBayController = function ($scope, $routeParams,$http) {
    
        $scope.title = "Thông tin chi tiết chuyến bay";
    
        let infoID = $routeParams.id;
    
        //Link API
        const apiInfo = 'http://localhost:3000/info';
        $http.get(
            `${apiInfo}/${infoID}`
        ).then(function(response){
            console.log(response.data);
            $scope.info = {
                editID: response.data.id,
                name: response.data.ten,
                email: response.data.email,
                sdt: response.data.sdt,
                diemxuatphat: response.data.diemxuatphat,
                diemden: response.data.diemden,
                giobay: response.data.giobay,
                ngaybay: response.data.ngaybay
            }
        })
}