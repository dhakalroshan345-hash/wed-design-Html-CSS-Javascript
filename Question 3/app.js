document.addEventListener("DOMContentLoaded",()=>{ // run when page ready
  const nav=document.getElementById("mainNavUnique"); // nav links
  const btn=document.getElementById("menuBtnUnique"); // menu button

  if(window.innerWidth<=600){nav.classList.add("hidden");} // hide nav on mobile

  btn.addEventListener("click",()=>{ // button click
    nav.classList.toggle("hidden"); // show/hide nav
    const expanded=btn.getAttribute("aria-expanded")==="true"; // check state
    btn.setAttribute("aria-expanded",!expanded); // update state
    btn.textContent=expanded?"Menu":"Close"; // change button text
  });
  document.addEventListener("keydown",e=>{ // key press
    if(e.key==="Escape"&&window.innerWidth<=600&&!nav.classList.contains("hidden")){
      nav.classList.add("hidden"); // hide nav
      btn.setAttribute("aria-expanded","false"); // reset state
      btn.textContent="Menu"; // reset text
    }
  });
  window.addEventListener("resize",()=>{ // window resize
    if(window.innerWidth>600){nav.classList.remove("hidden");} // show nav desktop
  });
});
