var k = 0;

function nextSlide() {
    var slides = document.querySelectorAll(".ss");
    var circles=document.getElementsByClassName('circle');
    console.log(k);

    if (k < 3) {
        
       
        for (let i = 0; i < slides.length; i++) {
            if (k!=i) {
                slides[i].classList.add('sh');
                circles[i].classList.remove('active');
            }
        } 
        slides[k].classList.remove('sh');
        circles[k].classList.add('active');
        
    }

    if (k >= 3) {
        k = 0;
    }else{
        k+=1;
    }


    
}

setInterval(nextSlide, 5000);
