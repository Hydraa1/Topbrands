$(document).ready(function () {

    const toTop = document.querySelector(".scroll");

    window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("scrollactive");
    } else {
        toTop.classList.remove("scrollactive");
    }
    })

    $("#searchboxdiv").hide();
    $("#searchmark").click(function() {
        $("#searchboxdiv").hide();
        $(".searchbox").val("");
      });
    $("#searchboxshow").click(function() {
        $("#searchboxdiv").show();
    });
    $(".protables").show()
    $(".protables1").hide()
    $(".pb1").click(function(){
        $('.pb1').attr('id', 'active2');
        $('.pb2').removeAttr('id');
        // include to pb26
        $(".protables").show()
        $(".protables1").hide()
    })
    $(".pb2").click(function(){
        $('.pb1').removeAttr('id');
        $('.pb2').attr('id', 'active2');
        // include to pb26
        $(".protables").hide()
        $(".protables1").show()
    })
    
});

