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
    var links = document.querySelectorAll('.rc > .r > a, a.lLrAF, #pnprev, #pnnext');
    var searchInputBox = document.querySelector('#lst-ib');
    var mainElement = document.getElementById('main');

    if (links.length > 2) {
      links[idx].focus();
      links[idx].style.backgroundColor = hightlightColor;
    }

    mainElement.onkeypress = function (e) {
      e = e || window.event;

      if (e.keyCode == 47) {
        searchInputBox.focus();
        console.log("preventDefault");
        e.preventDefault();

        var val = searchInputBox.value; //store the value of the element
        searchInputBox.value = ''; //clear the value of the element
        searchInputBox.value = val;
      }

      if (e.keyCode == 106) {
        links[idx].style.backgroundColor = 'inherit';
        if (idx >= links.length - 1) {
          idx = 0;
        } else {
          idx++;
        }
        links[idx].focus();
        links[idx].style.backgroundColor = hightlightColor;
      }

      if (e.keyCode == 107) {
        links[idx].style.backgroundColor = 'inherit';
        if (idx == 0) {
          idx = links.length - 1;
        } else {
          idx--;
        }
        links[idx].focus();
        links[idx].style.backgroundColor = hightlightColor;
      }

      e.stopPropagation();
    };

})();
