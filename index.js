const rating = document.querySelectorAll(".nbr");
const submit = document.querySelector(".btn");


for(let i = 0; i < rating.length; i++) {
    rating[i].addEventListener("click", function() {
        let selected = document.querySelectorAll(".selected");
    selected[0].className = selected[0].className.replace("selected", "");
    this.className += " selected";
    });
}


submit.addEventListener("click", function() {
    let ratinNbr = document.querySelector(".selected");
    let finalRating = document.querySelector(".rating");
    let feedback = document.querySelector(".success");
    let form = document.querySelector(".active");
    form.classList.add("unactive");
    finalRating.innerHTML = ratinNbr.innerHTML;
    feedback.className = feedback.className.replace("unactive", "");
})