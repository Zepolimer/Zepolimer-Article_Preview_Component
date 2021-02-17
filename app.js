let share = document.getElementById("share");
let active = document.getElementById("active");



  function togg(){
    if(getComputedStyle(active).display != "block"){
      active.style.display = "block";
    } else {
      active.style.display = "none";
    }
  };
  share.onclick = togg;