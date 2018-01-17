# K framework for Brackets

K framework is an open source project and you can view the source code here: https://github.com/kframework

## Features

* K Syntax highlighting support for Brackets, made with CodeMirror <br>
* K code snippets [see below: Additional Support]

## Get Started Writing K

* [Documentation](http://www.kframework.org)
* [Tutorial](http://www.kframework.org/index.php/K_Tutorial)

## Syntax Highlighter Example

![highlight](https://raw.githubusercontent.com/logalex96/K-brackets/master/imgs/demo1.JPG)
![start](https://raw.githubusercontent.com/logalex96/K-brackets/master/imgs/sDemo1.gif)
![tag](https://raw.githubusercontent.com/logalex96/K-brackets/master/imgs/sDemo2.gif)
![syntax](https://raw.githubusercontent.com/logalex96/K-brackets/master/imgs/sDemo3.gif)

## Install

Search `K Framework Syntax Highlighter` in Brackets Extension Manager, and install it.

Failed to download it in Brackets? Try the alternative instructions:

1. [Download](https://s3.amazonaws.com/extend.brackets/brackets-k-syntax-highlighter/brackets-k-syntax-highlighter-1.0.1.zip) .zip package of the latest version
2. Drag the file into the bottom-left position of Extension Manager
3. Restart Brackets
4. For K snippets read below

## Additional Snippets Support

The extension has not yet implemented its own template system, but we advise you to use the extension `brackets-snippets` <br>
1. Search `Brackets Snippets (by edc)` in Brackets Extension Manager, and install it or [Download](http://brackets.dnbard.com/extension/edc.brackets-snippets) <br>
2. Look for `K-snippets.yml` file and download it or just click here [Download](https://raw.githubusercontent.com/logalex96/K-brackets/master/K-snippets.yml)
3. ![step1](https://raw.githubusercontent.com/logalex96/K-brackets/master/imgs/importK.jpg)
4. ![step2](https://raw.githubusercontent.com/logalex96/K-brackets/master/imgs/importK2.jpg)
5. Done

## K Trigger Snippet

* configuration
* imports
* list
* module
* start
* syntax
* rule
* tag
* env tag
* k tag
* stack tag
* stream
* assignment ( |-> => )
* remove ( => .) )

## K syntax highlighting
```
Strings:	' ' ,
            " "

Comments:	// ,
            /* */

Keywords:	module,
            endmodule,
            syntax,
            rule,
            Id,
            Int,
            Bool,
            notBool,
            String,
            configuration,
            imports,
            Token,
            Lexer,
            Float,
            requires,
            Kresult,
            context

Tags:		strict,
            avoid,
            prefer,
            bracket,
            left,
            right,
            macro,
            token,
            notInRules,
            binder,
            later,
            structural,
            autoReject,
            seqstrict,
            non-assoc,
            stream

Operators:	::=,
            [+ - * % / > <],
            !(\S),
            [=> <= <-| |->]

Types:		[: + % * - > < =](\S)
            Ex: +Int, =/=Int...

Brackets:	[],
            {}

Kextra:		... ,
            . ,
            _
```
