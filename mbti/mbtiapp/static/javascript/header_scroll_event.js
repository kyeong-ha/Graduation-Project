const header = document.querySelector("#header");

window.addEventListener("scroll", (event) => {
    const scrollY = this.scrollY;

    if(scrollY > 0){
        header.style.boxShadow = '0px 0px 24px 0px rgba(165,176,249,0.3)';
    }else{
        header.style.boxShadow = '0px 0px 0px 0px';
    }
});