// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE
	
define(function (require, exports, module) {
	
var CodeMirror = brackets.getModule("thirdparty/CodeMirror2/lib/codemirror");

"use strict";

// define K syntax highlighter behavior
CodeMirror.defineMode("k", function() {

  function words(str) {
      var obj = {}, words = str.split(" ");
      for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
      return obj;
  }
    
  // instructions https://github.com/kframework/k/blob/master/k-distribution/documentation/ref-manual.k
  var conventionalInstructions = words("module endmodule syntax rule imports configuration");


  var lineCommentStartSymbol = "//";

  return {

    startState: function() {
      return {
        tokenize: null
      };
    },

    token: function(stream, state) {

      if (state.tokenize) {
        return state.tokenize(stream, state);
      }

      var cur, ch = stream.next();

      // comment
      if (ch === lineCommentStartSymbol) {
        stream.skipToEnd();
        return "comment";
      }

      // string style 1
      if (ch === "'") {
        stream.skipTo("'");
        return "error";
      }

      // string style 2
      if (ch === '"') {
        stream.eatWhile(/\w/);
        return "string";
      }


      if (conventionalInstructions.propertyIsEnumerable(cur)) {
        stream.eatWhile(/\w/);
        return "keyword";
      }
    },

      lineComment: lineCommentStartSymbol,
      blockCommentStart: "/*",
      blockCommentEnd: "*/",
    };
  });

  CodeMirror.defineMIME("text/x-k", "k");
});
