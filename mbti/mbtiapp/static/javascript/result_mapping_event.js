window.addEventListener("load", mappingResult);

function mappingResult(){
    const color = {
        purple: ['INTJ', 'INTP', 'ENTJ', 'ENTP'],
        green: ['INFJ', 'INFP', 'ENFJ', 'ENFP'],
        blue: ['ISFJ', 'ISTJ', 'ESFJ', 'ESTJ'],
        yellow: ['ISFP', 'ISTP', 'ESFP', 'ESTP'],
    };

    const svg_path = "/static/image/result/mbti_character/" + result + ".svg";
    const desc_path = "/static/image/result/mind_character/desc.txt";

    let mbti = new Image();

    /* exist the file */
    mbti.onload=function(){ 
        const img = document.getElementById("mbti_img");
        img.src = svg_path;
        
        const font = document.getElementById("mbti");
        for(const [key, value] of Object.entries(color)){
            if(value.includes(result)){
                if(key == 'purple') font.style.color = '#65354E';
                else if(key == 'green') font.style.color = '#56AC8A';
                else if(key == 'blue') font.style.color = '#00BABC';
                else font.style.color = '#E99700';
            }
        }
    }

    mbti.onerror=function(){
        alert("Error loading");
    }
    mbti.src = svg_path;
};
