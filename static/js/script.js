
const titleText = document.querySelector('.title');


titleText.addEventListener('mouseover', () => {
  titleText.style.color = 'red';
});


titleText.addEventListener('mouseout', () => {
  titleText.style.color = 'white';
});

//packery
var grid = document.querySelector('.grid');
var pckry = new Packery(grid, {
  // options
  itemSelector: '.grid-item',
  gutter: 10 // Optional: spacing between items
});


document.addEventListener('DOMContentLoaded', () => {
  var grid = document.querySelector('.grid');
  var pckry = new Packery(grid, {
      itemSelector: '.grid-item',
      gutter: 10 // Optional: spacing between items
  });

  // Layout Packery after each image loads
  imagesLoaded(grid).on('progress', function () {
      pckry.layout();
  });
});