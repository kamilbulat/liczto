$(document).ready(function () {

    $("#nkonto").on("click", function () {


        if ($("#npasswd").val() == $("#nppasswd").val()) {
            var obj = {
                login: $("#nlogin").val(),
                passwd: $("#npasswd").val()
            }

            console.log(obj)

            $.ajax({
                type: "POST",
                url: "//localhost:3000/register",
                contentType: "application/json",
                data: obj,
                dataType: "text",
                success: function (req) {
                    console.log(req)
                },
                error: function (error) {
                    alert("fail")
                    console.log(error)
                }
            })
        }
        else {
            alert("Hasła muszą się być takie same!")
        }
    })


})