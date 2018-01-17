// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

define(function (require, exports, module) {

    "use strict";

    var CodeMirror = brackets.getModule("thirdparty/CodeMirror/lib/codemirror");

    // define K syntax highlighter behavior
    CodeMirror.defineMode("k", function() {

        // instructions https://github.com/kframework/k/blob/master/k-distribution/documentation/ref-manual.k

        var keywords = /\b(module|endmodule|syntax|rule|Id|Int|Bool|notBool|String|configuration|imports|Token|Lexer|Float|requires|Kresult|context)/;
        var tags = /\b(strict(\(\d\))?|avoid|prefer|bracket|left|right|macro|token|notInRules|binder|later|structural|autoReject|seqstrict|non-assoc|stream)/;
        var operators = /(\:{2}\=)|[\s][\+\-\%\*\/\>\<\|][\s]|![\S]+|(=>|<=|<-\\|\|->)/;
        var types = /[\:\+\%\*\-\>\<\=\/](\S)+/;
        var Kextra = /(\.\.\.)|\_|\./;
        var math_symbol = /(K is awesome)/;
        var brackets = /[\[\]\{\}]/;

        return {

            startState: function() {
                return {
                    inString: false,
					inComment: false
                };
            },

            token: function(stream, state) {

                if (stream.match("//")) {
                    stream.skipToEnd();
                    return "comment";
                }

                if(stream.peek() == '\''){
                    stream.next();
                    stream.skipTo('\'');
                    stream.next();
                    return "string";
                }

                if (!state.inString && stream.peek() == '"') {
                    stream.next();
                    state.inString = true;
                }

                if (state.inString) {
                    if (stream.skipTo('"')) {
                        stream.next();
                        state.inString = false;
                    } else {
                        stream.skipToEnd();
                    }
                    return "string";
                }

                if (!state.inComment && stream.match("/*")) {
                    state.inComment = true;
                }

                if (state.inComment) {
                    if (stream.skipTo("*")) {
                        stream.next();
                        if(stream.peek()=="/") {
                            stream.next()
                            state.inComment = false;
                        }
                    }
                    else {
                        stream.skipToEnd();
                    }
                    return "comment";
                }

                if (stream.match(keywords)) {
                    return "keyword";
                }

                if (stream.match(tags)) {
                    return "attribute";
                }

                if (stream.match(operators)) {
                    return "def";
                }

                if (stream.match(types)) {
                    return "atom";
                }

                if (stream.match(Kextra)) {
                    return "meta";
                }

                if (stream.match(brackets)) {
                    return "bracket";
                }
                
                // here for a bug fix
                if (math_symbol.test(stream.next())) {
                    return "header";
                }

            }
        };
    });

    CodeMirror.defineMIME("text/x-k", "k");
});