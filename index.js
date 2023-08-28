let select=undefined;
let form = document.getElementById("submission");
form.addEventListener("click", formsubmission)
function formsubmission(e) {
   e.preventDefault();
   accebtdatas();
   if(select==undefined){
      // updatevalue(data);
      display(data);
   }
   else{
      // display(data);
      updatevalue(data);
}
}
let data = [];
function accebtdatas() {
   let roostername = document.getElementById('firstname').value;
   let personname = document.getElementById('secountname').value;
   let address = document.getElementById('address').value;
   data.push({
      roostername: roostername,
      ownername: personname,
      address: address,
      Id: Math.floor(Math.random() * 100),
   });

}
function display(array) {
   let table = document.getElementById("table");
   let ui = '';
   array.forEach((v) => {
      console.log(v)
      ui= `<tr id=${v.Id}>
      <td>${v.roostername}</td>
      <td>${v.ownername}</td>
      <td>${v.address}</td>
      <td>
      <button  onclick="editfunction(this)"class="button is-primary is-outlined">edit</button>
<button onclick="deletefunction(this)"class="button is-link is-outlined">delete</button>
</td>
</tr>`
   })
   table.innerHTML += ui
}
function editfunction(e) {
   let selectvalue = e.parentElement.parentElement
   console.log(selectvalue.cells[0])
   let getid = selectvalue.id;
   console.log(getid)
   select = data.find(v => v.Id === parseInt(getid));
   console.log(select);
   if (select) {
      console.log(select)
      document.getElementById('firstname').value =select.roostername;
      document.getElementById('secountname').value = select.ownername;
      document.getElementById('address').value = select.address;
   }
}
function updatevalue(value){
   var editElement=document.getElementById(select.Id);
   console.log(editElement)
   let ui2='';
   value.forEach((v) => {
      console.log(v)
      ui2 = `<tr id=${v.Id}>
      <td>${v.roostername}</td>
      <td>${v.ownername}</td>
      <td>${v.address}</td>
      <td>
      <button  onclick="editfunction(this)"class="button is-primary is-outlined">edit</button>
<button onclick="deletefunction(this)"class="button is-link is-outlined">delete</button>
</td>
</tr>`
})
editElement.innerHTML=ui2;
}
function deletefunction(e) {
   e.parentElement.parentElement.remove();
}

