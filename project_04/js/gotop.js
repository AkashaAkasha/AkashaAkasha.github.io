(function() {
  
  var gotop = document.querySelector(".go-top");
    
  window.addEventListener("scroll", function() {
    
    if (window.pageYOffset < 300) {
        
      gotop.classList.add("display-none");
        
    } else if (window.pageYOffset > 300) {
        
      gotop.classList.remove("display-none");
        
    }
    
  }, false);
  
})();