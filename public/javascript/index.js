let btn = document.querySelector(".btn");
let crto = document.querySelector("#crto");
let home = document.querySelector(".home");
// Function to save notes to localStorage
function updateStorage() {
   const notes = [];
   // Collect all notes and their colors
   home.querySelectorAll("p").forEach((note) => {
       notes.push({
           text: note.textContent.replace("\u2715", ""), // Remove delete icon text
           color: note.style.backgroundColor,
       });
   });
   localStorage.setItem("notes", JSON.stringify(notes));
}
function rndcol(p){
   let rnd1 = Math.floor(Math.random() *254);
   let rnd2 = Math.floor(Math.random() *254);
   let rnd3 = Math.floor(Math.random() *254);
   p.style.backgroundColor = `rgb(${rnd1}, ${rnd2}, ${rnd3})`;
}
function add(x){
    let p = document.createElement("p");
    p.id = "box";
    p.style.width = "200px";
    p.style.height = "fit-content";
   p.textContent = x;
//    p.style.backgroundColor = "blue";
   p.style.border = "2px solid black ";
   p.style.borderRadius = "15px";
   p.style.margin = "20px";
   p.style.padding = "10px";

   p.style.overflow = "hidden";
   rndcol(p);
   
   
//   home.appendChild(p);
    



let deleteimg = document.createElement("img");
deleteimg.src = "images/delete.png";
deleteimg.style.width = "1.7rem";
deleteimg.style.height = "1.7rem";
deleteimg.style.display="none";
// par.appendChild(deleteimg);
p.addEventListener("mouseenter", () => {
deleteimg.style.display = "block";
});
p.addEventListener("mouseleave", () => {
deleteimg.style.display = "none";
});

deleteimg.addEventListener("click", (e) => {
   e.stopPropagation(); // Prevent triggering note's click event
   p.remove(); // Remove the note
   
updateStorage();
});

p.appendChild(deleteimg);
home.appendChild(p);

updateStorage();
};

btn.addEventListener("click",function(e){
// console.log(btn.value);
console.log(crto.value);
if(crto.value != ""){
add(crto.value);
crto.value ="";
}else{
   alert("Please enter text");
}

})
// Load notes from localStorage on page load
function loadNotes() {
   const notes = JSON.parse(localStorage.getItem("notes")) || [];
   notes.forEach((note) => {
       add(note.text, note.color); // Restore each note
   });
}

// Load notes when the page is loaded
window.addEventListener("DOMContentLoaded", loadNotes); 