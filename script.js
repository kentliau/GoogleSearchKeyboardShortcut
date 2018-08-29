// keyCode
// 13  return
// 47 BLACKSLASH
// 104 h
// 106 j
// 107 k
// 108 l
(function() {
    var hightlightColor = '#ffc';
    var idx = 0;
    var links = document.querySelectorAll('.rc .r a h3, #pnprev span.csb, #pnnext span.csb');
    var searchInputBox = document.querySelector('#lst-ib');
    var mainElement = document.getElementById('main');

    links[idx].parentElement.focus();
    links[idx].parentElement.style.backgroundColor = hightlightColor;

    mainElement.onkeypress = function (e) {
      e = e || window.event;

      if (e.keyCode == 47) {
        searchInputBox.focus();
      }

      if (e.keyCode == 106) {
        links[idx].parentElement.style.backgroundColor = 'inherit';
        if (idx >= links.length - 1) {
          idx = 0;
        } else {
          idx++;
        }
        links[idx].parentElement.focus();
        links[idx].parentElement.style.backgroundColor = hightlightColor;
      }

      if (e.keyCode == 107) {
        links[idx].parentElement.style.backgroundColor = 'inherit';
        if (idx == 0) {
          idx = links.length - 1;
        } else {
          idx--;
        }
        links[idx].parentElement.focus();
        links[idx].parentElement.style.backgroundColor = hightlightColor;
      }

      e.stopPropagation();
    };

})();
