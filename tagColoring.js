window.onload = function () {
	(function () {
		var reg = {
			"<": {
				"rep": "&lt;",
				"cla": "operator"
			},
			">": {
				"rep": "&gt;",
				"cla": "operator"
			},
			"&": {
				"rep": "&amp;",
				"cla": "operator"
			},
			"+": {
				"rep": "+",
				"cla": "operator"
			},
			"-": {
				"rep": "-",
				"cla": "operator"
			},
			"*": {
				"rep": "*",
				"cla": "operator"
			},
			"/": {
				"rep": "/",
				"cla": "operator"
			},
			"%": {
				"rep": "%",
				"cla": "operator"
			},
			"=": {
				"rep": "=",
				"cla": "operator"
			},
			"|": {
				"rep": "|",
				"cla": "operator"
			},
			"?": {
				"rep": "?",
				"cla": "operator"
			},
			"!": {
				"rep": "!",
				"cla": "operator"
			},
			"~": {
				"rep": "~",
				"cla": "operator"
			},
			"^": {
				"rep": "^",
				"cla": "operator"
			},

			"\"": {
				"rep": "&quot;",
				"cla": "punctuation"
			},
			"'": {
				"rep": "'",
				"cla": "punctuation"
			},
			";": {
				"rep": ";",
				"cla": "punctuation"
			},
			",": {
				"rep": ",",
				"cla": "punctuation"
			},
			".": {
				"rep": ".",
				"cla": "punctuation"
			},
			":": {
				"rep": ":",
				"cla": "punctuation"
			},

			"@": {
				"rep": "@",
				"cla": "special"
			},
			"#": {
				"rep": "#",
				"cla": "special"
			},
			"$": {
				"rep": "$",
				"cla": "special"
			},
			"\\": {
				"rep": "\\",
				"cla": "special"
			},

			"[": {
				"rep": "[",
				"cla": "parentheses"
			},
			"]": {
				"rep": "]",
				"cla": "parentheses"
			},
			"(": {
				"rep": "(",
				"cla": "parentheses"
			},
			")": {
				"rep": ")",
				"cla": "parentheses"
			},
			"{": {
				"rep": "{",
				"cla": "parentheses"
			},
			"}": {
				"rep": "}",
				"cla": "parentheses"
			},

			"function": {
				"rep": "function",
				"cla": "own"
			},
			"var": {
				"rep": "var",
				"cla": "own"
			},
			"return": {
				"rep": "return",
				"cla": "own"
			}

		};

		function htmlEscape(html) {
			var header = "<i class=\"",
				middle = "\">",
				footer = "</i>",
				rep,
				cla;
			return html.replace(/function|var|return|[<>"&]|[\+\*\?\-\=\%\/\|\!]|[\[\]\{\}\(\)]|[\.:;,']|[@#$\\]/g, function (match, pos, ori) {

				var obj = reg[match] || null;
				rep = obj && obj['rep'];
				cla = obj && obj['cla'];
				return (header + cla + middle + rep + footer);
			});
		}

		var codewras = document.getElementsByTagName('pre');
		var codes = document.getElementsByTagName('script');
		var i, len = codewras.length;
		for (i = 0; i < len; i++) {
			var html = codes[i].textContent || null;
			codewras[i].innerHTML = htmlEscape(html);
		}
	})();
};
