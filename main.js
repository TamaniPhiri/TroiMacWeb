const menu= document.querySelector(".menu");
const menuBtn=document.querySelector(".menu-btn");
const counters=document.querySelector(".counter");
 
menuBtn.addEventListener("click", () => {
    menu.classList.toggle(".menu-open");
})

counters.forEach(counter =>{
    counter.innerText=0;
    let count=0;
    function updateCount(){
        const target=parseInt(counter.dataset.count);
        if(count<target){
            count+=10;
            counter.innerText=count + "+";
            setTimeout(updateCount, 10);
        }else{
            counter.innerText=target+ "+";
        }
    }
    updateCount();
});


 