let sections = document.querySelectorAll('section');
window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigh = sec.offsetHeight;

        if(top >= offset && top < offset + heigh){
            sec.classList.add('show-animate');

        }
        else{
            sec.classList.remove('show-animate');
        }
    })
}