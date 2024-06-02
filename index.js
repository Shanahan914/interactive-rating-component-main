document.addEventListener("DOMContentLoaded", function (){
    const nums = document.getElementsByClassName('rating')
    const ratingCard = document.getElementsByClassName('rating-card')
    const thanksCard = document.getElementsByClassName('thanks-card')
    const txt = document.getElementsByClassName('num-selected')
    let selected = 0;
    for(i=0; i < nums.length; i++){
        nums[i].addEventListener('click', function(e){

            Object.values(nums).forEach(el => el.classList.remove("selected"))
            selected = this.dataset.num
            this.classList.add("selected")
        })
    };

    let btn = document.getElementsByClassName('submit-btn')
    btn[0].addEventListener('click',  function(){
    thanksCard[0].style.visibility='visible';
    ratingCard[0].style.display='none';
    txt[0].innerHTML= `${selected} `;
}
)


})