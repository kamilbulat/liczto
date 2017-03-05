$(document).ready(function () {
    console.log("hejo")
    $("#rej").click(function () {
        $("#right").css("display", "none")
        $("#rejestracja").css("display", "block")
    })

    $("#back").click(function () {
        $("#right").css("display", "block")
        $("#rejestracja").css("display", "none")
    })

})