

 const FilterButton= document.getElementById('FilterButton');
 const CloseButton= document.getElementById('CloseButton');
 const Filter= document.getElementById('Filter')
 FilterButton.addEventListener('click',() => {
    
     Filter.classList.add('Open') ;
 });
 CloseButton.addEventListener('click',() => {
    
     Filter.classList.remove('Open') ;
 });
 
 document.open(, replace)

function move() {
    var elem = document.getElementById("myBar");   
    var width = 20;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }