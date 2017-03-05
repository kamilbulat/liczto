$(document).ready(function () {
        this.newtable = function(){
            var obj
            $.ajax({
                type: "POST",
                url: "//localhost:3000/newtable",
                contentType: "application/json",
                data: obj,
                dataType: "text",
                success: function (req) {
                    console.log(req)
                    document.write("")
                    document.write(req)
                },
                error: function (error) {
                    alert("fail")
                    console.log(error)
                }
            })
        }
})