window.addEventListener("load", loadProgress)

  function loadProgress(){

    const target = document.querySelector(".loader")
    const counter = document.querySelector(".counter span");

    function getProgress(board){
        let maxLength = 100;
        let jumps = 10;

        for (let field in board){
            if (board[field]) 
                progress += jumps
            
        }
        // Put them into array to get length of form
        let lengthOfBoard = Object.values(board).length;
        let progress = question_id;

        return progress
    }

    // Utilise value calculated from loader
    function implimentLoad(){
        let progress = (question_id * 10);
        counter.innerText = `${question_id}`;
        target.style.width = `${(question_id * 10)}%`
    }
    implimentLoad()
  }
