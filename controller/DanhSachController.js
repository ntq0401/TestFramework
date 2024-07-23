window.DanhSachController = function ($scope, $http){
    $scope.title = "Danh sách chuyến bay"
    const apiInfo = 'http://localhost:3000/info';
    function getData() {
       $http.get(apiInfo).then(function (response){
        if (response.status == 200){
            console.log(response.data);
            $scope.danhsach = response.data;
        }
       })
    }
    getData();
    $scope.deleteInfo = function(deleteID) {
        if(deleteID){
            let confirm = window.confirm("Bạn có chắc chắn muốn xóa thông tin này không? ")
            if(confirm){
                $http.delete(
                    `${apiInfo}/${deleteID}`
                ).then(function (response){
                    if (response.status == 200 ){
                        alert ("xóa thành công");
                    }
                })
            }
        }
    }
}