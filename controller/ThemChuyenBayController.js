window.ThemChuyenBayController = function ($scope, $http, $location) {
    $scope.title = "Thêm thông tin hành khách";
    $scope.addInfo = function () {
        const apiInfo = 'http://localhost:3000/info';
        let flag = true;
        $scope.kiemTra = {
            name: false,
            sdt: false,
            email: false,
            diemxuatphat : false,
            diemden: false,
            giobay: false,
            ngaybay: false
        }
         if (!$scope.info || !$scope.info.name) {
            flag = false;
            $scope.kiemTra.name = true;
        }
        if (!$scope.info || !$scope.info.sdt) {
            flag = false;
            $scope.kiemTra.sdt = true;
        }
        if (!$scope.info || !$scope.info.email) {
            flag = false;
            $scope.kiemTra.email = true;
        }
        if (!$scope.info || !$scope.info.diemxuatphat) {
            flag = false;
            $scope.kiemTra.diemxuatphat = true;
        }
        if (!$scope.info || !$scope.info.diemden) {
            flag = false;
            $scope.kiemTra.diemden = true;
        }
        if (!$scope.info || !$scope.info.giobay) {
            flag = false;
            $scope.kiemTra.giobay = true;
        }
        if (!$scope.info || !$scope.info.ngaybay) {
            flag = false;
            $scope.kiemTra.ngaybay = true;
        }
        if (flag) {
            let newInfo = {
                ten: $scope.info.name,
                sdt: $scope.info.sdt,
                email: $scope.info.email,
                diemxuatphat: $scope.info.diemxuatphat,
                diemden: $scope.info.diemden,
                giobay: $scope.info.giobay,
                ngaybay: $scope.info.ngaybay
            }
            $http.post(
                apiInfo,
                newInfo
            ).then(function (response){
                if (response.status = 201){
                    $location.path("danh-sach");
                }
            })
        } else {
            alert("Bạn cần nhập đầy đủ thông tin !")
        }

    }
}
