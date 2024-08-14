let Modal=document.querySelector('.modal');
let Layer=document.querySelector('.layer');
function openModal(){
    console.log("The Modal is now active");
    Modal.classList.add("active");
    Layer.classList.add("layerActive");
}
function closeModal(){
    console.log("The Modal is now inactve");
    Modal.classList.remove("active");
    Layer.classList.remove("layerActive");

}