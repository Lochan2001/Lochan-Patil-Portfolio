const filter_btns = document.querySelectorAll(".filter-btn");


filter_btns.forEach( btn => btn.addEventListener("click", () => {
  filter_btns.forEach((button) => button.classList.remove("active"));
  btn.classList.add("active");


  let filterValue = btn.dataset.filter;

  $(".grid").isotope({ filter: filterValue});
})
);


$(".grid").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    transitionDuration: "0.6s",
  });




var tablinks =document.getElementsByClassName("tab-links");
var tabcontents =document.getElementsByClassName("tab-contents");
function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}