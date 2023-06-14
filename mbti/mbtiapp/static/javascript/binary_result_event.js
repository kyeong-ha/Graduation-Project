
window.addEventListener("load", function(){
    let idx = 0;
    const classifier_pred = [ei, sn, tf, jp];
    const types = {
        ei: '#009AB7',
        sn: '#EDAC00',
        tf: '#00A770',
        jp: '#8E5D9D'
    };

    function update_progress(type, color){
        // change the target percentage
        $(`.${type} #per`).text(`${classifier_pred[idx]}%`);
        $(`.${type} #per`).css('color', color);

        // change the progress bar
        $(`.${type} #loader`).css('width', `${classifier_pred[idx]}%`);
        $(`.${type} #loader`).css('background', color);

        if(['E','S','T','J'].includes(result[idx])){
            $(`.${type} #first`).css('font-family', 'SUIT-ExtraBlod');
            $(`.${type} #first`).css('color', color);
        }else{
            $(`.${type} #second`).css('font-family', 'SUIT-ExtraBlod');
            $(`.${type} #second`).css('color', color);
        }

        idx += 1;
    }

    for(const [key, value] of Object.entries(types)){
        update_progress(key, value);
    }
});