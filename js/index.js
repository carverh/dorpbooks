/*
Dorpbooks
Copyright 2017 Carver Harrison
*/

function $(s) {
  return document.querySelector(s);
}

function $a(s) {
  return document.querySelectorAll(s);
}

document.addEventListener('load', function() {
  var ir = new XMLHttpRequest();
  $a('include').forEach(function(i) {
    ir.addEventListener("load", function() {
      i.outerHTML = this.response
    });
    ir.open("GET", i.getAttribute('src'));
    ir.send();
  })
})
