(function() {
  
  var pageHeader = document.querySelector(".header-second");
  var pageHeaderHeight = pageHeader.getBoundingClientRect().bottom + window.pageYOffset;
  
  window.addEventListener("scroll", function() {
    
    if (pageHeader.classList.contains("header-second-sticky") && (window.pageYOffset < pageHeaderHeight)) {
        
      pageHeader.classList.remove("header-second-sticky");
        
    } else if (window.pageYOffset > pageHeaderHeight) {
        
      pageHeader.classList.add("header-second-sticky");
        
    }
    
  }, false);
  
})();