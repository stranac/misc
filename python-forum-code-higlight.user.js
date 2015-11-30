// ==UserScript==
// @id             python-forum-code-higlight
// @name           Python Forum code highlighting
// @version        1.0.1
// @namespace      stranac
// @author         stranac
// @description    Adds code highlighting to python-forum.org
// @include        http://python-forum.org/viewtopic.php*
// @include        http://python-forum.org/posting.php*
// @include        http://python-forum.org/mcp.php*
// @include        http://python-forum.org/search.php*
// @include        http://www.python-forum.org/viewtopic.php*
// @include        http://www.python-forum.org/posting.php*
// @include        http://www.python-forum.org/mcp.php*
// @include        http://www.python-forum.org/search.php*
// @run-at         document-end
// @require        https://google-code-prettify.googlecode.com/svn/loader/prettify.js
// @resource       PrettifyCSS https://raw.githubusercontent.com/stranac/misc/master/python-forum-code-dark.css
// @grant          GM_addStyle
// @grant          GM_getResourceText
// ==/UserScript==


function prettify() {
  var preElements = document.getElementsByTagName('code');
  for (var i=0; i<preElements.length; i++) {
    preElements[i].className = 'prettyprint lang-py';
  }
  prettyPrint();
}


// add the code styles
GM_addStyle(GM_getResourceText('PrettifyCSS'));
prettify();
