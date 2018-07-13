// getelementsbyclass function written by dustin diaz
// available at www.dustindiaz.com/getelementsbyclass
// checkchecks function written by ian mcewan
// checkall and uncheckall functions available at javascript.internet.com
// expand and collapse function written by karl nelson 
// available at www.karlnelson.net/nestedlists/

function getElementsByClass(node,searchClass,tag) {
var classElements = new Array();
var els = node.getElementsByTagName(tag); // use "*" for all elements
var elsLen = els.length;
var pattern = new RegExp("\\b"+searchClass+"\\b");
var i;
var j;
for (i = 0, j = 0; i < elsLen; i++) {
 if ( pattern.test(els[i].className) ) {
 classElements[j] = els[i];
 j++;
 }
}
return classElements;
}

function checkchecks()
  { 
  var types = [ 'affiliation', 'abstract', 'title', 'author', 'journal', 'pubdate', 'origin', 'keywords', 'abscopy', 'doi', 'bibcode', 'position' ] ;
  var i;
  var j;
  for (j=0; j<types.length; j++ )
    {
    var tags = getElementsByClass(document, "s_" + types[j], 'tr');
    var checked = document.options["c_"+types[j]].checked ? "" : "none" ;
    for (i=0; i<tags.length; i++)
      { 
      window.status = tags[i].style.display;
      tags[i].style.display = checked;
      }
    }
  } 
  
  function checkall() {
  var types = [ 'affiliation', 'abstract', 'title', 'author', 'journal', 'pubdate', 'origin', 'keywords', 'abscopy', 'doi', 'bibcode', 'position' ] ;
for (var j = 0; j < types.length; j++) 
	{
	var box = eval("document.options.c_"+types[j]); 
	if (box.checked == false) box.checked = true;
	var tags = getElementsByClass(document, "s_" + types[j], 'tr');
	var checked = document.options["c_"+types[j]].checked ? "" : "none" ;
    for (var i=0; i<tags.length; i++)
      { 
      window.status = tags[i].style.display;
      tags[i].style.display = checked;
      }
   }
}

function uncheckall() {
var types = [ 'affiliation', 'abstract', 'title', 'author', 'journal', 'pubdate', 'origin', 'keywords', 'abscopy', 'doi', 'bibcode', 'position' ] ;
for (var j = 0; j < types.length; j++) 
	{
	var box = eval("document.options.c_"+types[j]); 
	if (box.checked == true) box.checked = false;
	var tags = getElementsByClass(document, "s_" + types[j], 'tr');
    var checked = document.options["c_"+types[j]].checked ? "" : "none" ;
    for (var i=0; i<tags.length; i++)
      { 
      window.status = tags[i].style.display;
      tags[i].style.display = checked;
      }
   }
}