document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems,{
        edge: "left" 
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {
        accordion: true
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems,{
        opacity: 0.5
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems,{
        inDuration: 275 
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems,{
        hover: true,
        coverTrigger: false
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems,{
        scrollOffset:25,
        throttle: 80
    });
  });