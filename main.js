(function() {
  'use strict';

  var btn = document.getElementById('btn');
  var count = 1;

  btn.addEventListener('mouseover', function() {
    for (var i = 1; i < 10000; i++) {
      var n = Math.floor(Math.random() * 320);
      if (n === 1) {
        this.textContent = '当たり';
        break;
      } else {
        this.textContent = 'はずれ';
      }
      document.getElementById('count').innerHTML = ++count;
    }
  });
  
  btn.addEventListener('mousedown', function() {
    this.className = 'pushed';
  });
  btn.addEventListener('mouseup', function() {
    this.className = '';
  });
})();
