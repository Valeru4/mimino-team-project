const n=document.querySelectorAll(".modal-button"),e=document.getElementById("modal"),o=document.getElementsByClassName("close")[0];n.forEach(function(t){t.addEventListener("click",function(){e.style.display="block"})});o.addEventListener("click",function(){e.style.display="none"});window.addEventListener("click",function(t){t.target==e&&(e.style.display="none")});
