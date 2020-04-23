var topPageBtn;

topPageBtn = document.querySelector("#toTop");

window.addEventListener("scroll", scrollEvent);

function scrollEvent() {
    //SHOW toTopBtn
    if(window.pageYOffset > 300) { 
        
        if(!topPageBtn.classList.contains("topAppear")) {
            topPageBtn.classList.remove("topDisappear");
            topPageBtn.classList.add("topAppear");
            topPageBtn.style.display = "block";
        }


    }
    //HIDE toTopBtn
    else { 
        if(!topPageBtn.classList.contains("topDisappear")) {
            topPageBtn.classList.remove("topAppear");
            topPageBtn.classList.add("topDisappear");
            
            setTimeout(function() {
                topPageBtn.style.display = "none";   
            }, 80);

        }

    }
}

topPageBtn.addEventListener("click", topPage);

function topPage() {
    window.scrollTo(0, 0);
}