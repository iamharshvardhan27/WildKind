
function showTab(tabName) {
  
  var tabs = document.getElementsByClassName("tab-pane");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = 'none';
  }
  
  
  document.getElementById(tabName + '-content').style.display = 'block';

  
  var buttons = document.getElementsByClassName("tab-btn");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }
  
  
  var activeButton = document.querySelector('button[data-tab="' + tabName + '"]');
  activeButton.classList.add('active');
}
