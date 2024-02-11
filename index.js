let navBar = document.querySelector(".nav");
let Btn = document.querySelector("#manu-btn");
let header = document.querySelector(".header")
let sticky = header.offsetTop;



window.addEventListener('scroll', () => {
    navBar.classList.remove("active-2");
});
Btn.addEventListener('click', () => {
    navBar.classList.toggle("active-2")
})
window.addEventListener('scroll', () => {
    if(window.pageYOffset > sticky){
        header.classList.add("shadow")
    }else{
        header.classList.remove("shadow")
    }
})

// Select all elements with the class "reveal-card"
const cardsToReveal = document.querySelectorAll('.reveal-card');

// Create an Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal'); // Add a class to reveal the card
        }
    });
});

// Observe each "reveal-card" element
cardsToReveal.forEach(card => {
    observer.observe(card);
});

// for time update (p)
function updateTimeElapsed() {
    const currentTime = new Date();
    document.querySelectorAll('.upload-time').forEach(uploadTimeElement => {
        const uploadDate = new Date(uploadTimeElement.getAttribute('data-upload-time'));
        const timeDifference = currentTime - uploadDate;
        const days = Math.floor(Math.abs(timeDifference) / (1000 * 60 * 60 * 24));

        if (days === 0) {
            uploadTimeElement.textContent = 'Today';
        } else if (days === 1) {
            uploadTimeElement.textContent = 'Yesterday';
        } else {
            uploadTimeElement.textContent = `${days} days ago`;
        }
    });
}
updateTimeElapsed();
setInterval(updateTimeElapsed, 60000); // Update every minute (adjust as needed)

// accordination
const accordingItems = document.querySelectorAll(".privacy-card");
accordingItems.forEach(items =>{
    const title = items.querySelector(".privacy-according");
    title.addEventListener('click', ()=>{
        for(var i = 0; i < accordingItems.length; i++){
            if(accordingItems[i] != items){
                accordingItems[i].classList.remove("according-show")
            }else{
                items.classList.toggle("according-show")
            }
        }
    });
})

//copy email
document.addEventListener("click", function (event) {
    if (event.target && event.target.id === "copy-email") {
        const emailText = "zeeshansheikh0304@gmail.com";
        const tempInput = document.createElement("input");
        tempInput.value = emailText;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        alert("Email address copied to clipboard: " + emailText);
    }
});