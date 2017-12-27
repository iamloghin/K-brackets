define(function (require, exports, module) {

  "use strict";	

  require('./lib/k/k');

  var CodeMirror = brackets.getModule("thirdparty/CodeMirror2/lib/codemirror");
  CodeMirror.defineMIME("application/x-k", {name: "k", scriptingModeSpec:"k"});

  // define K language
  var LanguageManager = brackets.getModule("language/LanguageManager");

  LanguageManager.defineLanguage("k", {
    name: "K framework",
    mode: "k",
    fileExtensions: ["k"]
	blockComment: ["/* comments */"],
    lineComment: ["//"]
  });

});
