$(document).ready(function () {

    $("#submit").on("click", function () {

        var obj = {
            login: $("#login").val(),
            passwd: $("#passwd").val()
        }

        console.log(obj)

        $.ajax({
            type: "POST",
            url: "//localhost:3000/login",
            contentType: "application/json",
            data: obj,
            dataType: "text",
            success: function (req) {
                if(req == "success"){
                    alert("teraz zaladuje sie strona")
                    //ladowanie
                    $.ajax({
                        type: "POST",
                        url: "//localhost:3000/loader",
                        contentType: "application/json",
                        data: obj,
                        dataType: "text",
                        success: function (req) {
                            console.log(req)
                            document.write(req)
                            nazwa(obj.login)
                        },
                        error: function (error) {
                            alert("fail")
                            console.log(error)
                        }
                    })
                }else{
                    alert(req)
                }
            },
            error: function (error) {
                alert("fail")
                console.log(error)
            }
        })
    })

    function nazwa(user){
        $("#nazwauzyt").text("Witaj " + user  + "!")
    }
})