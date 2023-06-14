$(function(){
    $("#mbti_button").click(function(){        
        $("#mbti_popup").css('display','flex').hide().fadeIn();
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
    });
    $("#model_button").click(function(){        
        $("#model_popup").css('display','flex').hide().fadeIn();
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
    });
  

    $("#mbti_confirm").click(function(){
        $("#mbti_popup").fadeOut();
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
    });
    $("#model_confirm").click(function(){
        $("#model_popup").fadeOut();
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
    });
});

/* 외부영역 클릭시 창 닫기 */
$(document).mouseup(function (e){
	let LayerPopup = $(".popup-wrap");
	if(LayerPopup.has(e.target).length === 0){
		LayerPopup.fadeOut();
	}
});

document.querySelectorAll('.pop-button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');

