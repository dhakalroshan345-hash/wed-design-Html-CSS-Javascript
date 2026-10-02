document.addEventListener("DOMContentLoaded",()=>{ // run when page is ready
  console.log("MIT Profile loaded"); // check in console
  const welcome=document.getElementById("welcomeMsg"); // welcome message area
  const extra=document.getElementById("extraMsg");     // extra message area
  const today=new Date().toLocaleDateString();         // get today's date
  welcome.textContent=`Welcome to MIT! Today is ${today}`; // show date message
  extra.textContent="Dream big, achieve bigger! Keep pushing forward."; // show extra text
  const name=document.getElementById("studentName"); // student name element
  let full="Roshan Dhakal"; // full name
  let short="Roshan";       // short name
  name.addEventListener("click",()=>{ // when name clicked
    name.textContent=(name.textContent===full)?short:full; // toggle full/short
  });
});
