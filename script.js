let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {

  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  showCase();
});

function showCase() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `  <div class="card-body">
           <h5 class="card-title">Note ${index + 1}</h5>
           <p class="card-text">${element}</p>
           <button id="${index}" onClick="deleteCard(this.id)" class="btn btn-primary">Delete</botton>
           </div>  `
  })
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } 
  else {
    notesElm.innerHTML = ` Nothing to show! use "Add a Note" section above to add a notes `;
  }
}
function deleteCard(index){
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1)
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showCase();
}