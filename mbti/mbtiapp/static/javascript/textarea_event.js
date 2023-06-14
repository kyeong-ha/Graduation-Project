window.addEventListener("load", function(){
    $('#submit').attr('disabled', true);
    $('#submit').css('cursor','not-allowed');
})

$('#answer').on('keyup', function(){
    let input = $.trim($(this).val());
    
    // detect null or space value
    if (input.replace(/\s| /gi, "").length == 0 ){
        $('#submit').css('box-shadow','0 0 20px rgba(219, 207, 228, 0.543)');
        $('#submit').css('background','#BDC4F3');
        $('#submit').attr('disabled', true);
        $('#submit').attr("value", "Please fill out an answer field.");
        $('#submit').css('cursor','not-allowed');
    }else{
        $('#submit').css('box-shadow','0 0 20px rgba(45, 72, 245, 0.339)');
        $('#submit').css('background','#2D49F5');
        $('#submit').attr('disabled', false);
        $('#submit').attr("value",">    Next Question");
        $('#submit').css('cursor','pointer');
    }
});

// function TurnOffTextarea(){
//     let input = $.trim($('#answer').val());

//     // detect null or space value
//     if (input.replace(/\s| /gi, "").length == 0 ){
//         alert("Please enter");
//     }
// }
