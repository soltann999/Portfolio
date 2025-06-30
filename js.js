var selectedtheme = document.getElementsByName('Themes');
var selectedlanguage = document.getElementsByName('Languages');

selectedtheme.addEventListener('change', function () {
  console.log(selectedtheme.value);
});
