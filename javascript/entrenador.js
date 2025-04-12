window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

const stars = document.querySelectorAll('.star');
stars.forEach(function(star,index){
    star.addEventListener('click', function(){
        for(let i=0; i<=index; i++){
            stars[i].classList.add('checked');
        }
    })
})