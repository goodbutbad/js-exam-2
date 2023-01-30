document.addEventListener("DOMContentLoaded", function() {

  var names = document.createElement('div');
  names.innerHTML = '<form class="everything"> <input type="text" id="name" placeholder="Enter name here"> <button id="add">Dobavit</button> <button id="sort">Sort</button> <button id="clear">Clear</button> <div id="names"></div></form>';
  document.body.appendChild(names);

  var name = document.getElementById('name');
  var add = document.getElementById('add');
  var sort = document.getElementById('sort');
  var clear = document.getElementById('clear');
  var names = document.getElementById('names');

  var nameList = [];

  add.addEventListener('click', function() {
    nameList.push(name.value);
    localStorage.setItem('names', JSON.stringify(nameList));
    name.value = '';
    name.focus();
    displayNames();
  });

  sort.addEventListener('click', function() {
    nameList.sort();
    localStorage.setItem('names', JSON.stringify(nameList));
    displayNames();
  });

  clear.addEventListener('click', function() {
    nameList = [];
    localStorage.setItem('names', JSON.stringify(nameList));
    displayNames();
  });

  function displayNames() {
    names.innerHTML = '';
    for (var i = 0; i < nameList.length; i++) {
      names.innerHTML += '<div>' + nameList[i] + '</div>';
    }
  }

  if (localStorage.getItem('names')) {
    nameList = JSON.parse(localStorage.getItem('names'));
    displayNames();
  }
  });
