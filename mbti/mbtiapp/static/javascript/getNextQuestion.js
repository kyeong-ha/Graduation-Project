$('#submit').on('click', function(e) {			
    // 1. Last question => Move the result page
    if(question_id == '10'){ 
        $('#abs_wrap').css('display', 'flex');
        window.location = '/result/';
    }
    // 2. Another question => Move the next question page
    else{
        $.ajax({
            type:'GET',
            url: nextform,
            data: {
                'question': question,
                'answer': answer
            },
            success:function(json){
                question = json.question;
                answer = json.answer;

                // Update the page as Next Question
                if(window.location.pathname == 'question') location.reload();
                else location.href = '/question/';
                
            },
            error : function(xhr,errmsg,err) {
                console.log(xhr.status + ": " + xhr.responseText); 
            }
        });
    }
});