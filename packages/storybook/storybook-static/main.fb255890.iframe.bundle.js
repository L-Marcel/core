(self["webpackChunk_lmarcel_book"] = self["webpackChunk_lmarcel_book"] || []).push([[179],{

/***/ "./stories/Highlight.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Full": () => (/* binding */ Full),
  "OneLine": () => (/* binding */ OneLine),
  "Primary": () => (/* binding */ Primary),
  "WithScroll": () => (/* binding */ WithScroll),
  "WithoutNumbers": () => (/* binding */ WithoutNumbers),
  "__namedExportsOrder": () => (/* binding */ __namedExportsOrder),
  "bash": () => (/* binding */ bash),
  "c": () => (/* binding */ c),
  "clike": () => (/* binding */ clike),
  "cpp": () => (/* binding */ cpp),
  "css": () => (/* binding */ css),
  "default": () => (/* binding */ Highlight_stories),
  "diff": () => (/* binding */ diff),
  "git": () => (/* binding */ git),
  "go": () => (/* binding */ go),
  "graphql": () => (/* binding */ graphql),
  "handlebars": () => (/* binding */ handlebars),
  "javascript": () => (/* binding */ javascript),
  "json": () => (/* binding */ json),
  "jsx": () => (/* binding */ jsx),
  "latex": () => (/* binding */ latex),
  "less": () => (/* binding */ less),
  "makefile": () => (/* binding */ makefile),
  "markdown": () => (/* binding */ markdown),
  "markup": () => (/* binding */ markup),
  "objectivec": () => (/* binding */ objectivec),
  "ocaml": () => (/* binding */ ocaml),
  "python": () => (/* binding */ python),
  "reason": () => (/* binding */ reason),
  "sass": () => (/* binding */ sass),
  "scss": () => (/* binding */ scss),
  "sql": () => (/* binding */ sql),
  "stylus": () => (/* binding */ stylus),
  "typescript": () => (/* binding */ typescript),
  "yaml": () => (/* binding */ yaml)
});

// EXTERNAL MODULE: ../highlight/dist/index.js
var dist = __webpack_require__("../highlight/dist/index.js");
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./stories/examples/Code/index.ts
/* eslint-disable quotes */
var __tsx = "import React from 'react';\n\ntype Props = {\n  name: string;\n  age: number;\n};\n\nconst MyComponent: React.FC<Props> = ({ name, age }) => {\n  const [count, setCount] = React.useState(0);\n  const handleClick = () => setCount(count + 1);\n\n  return (\n    <div>\n      <h1>Meu componente</h1>\n      <p>Nome: {name}</p>\n      <p>Idade: {age}</p>\n      <p>Voc\xEA clicou {count} vezes</p>\n      <button onClick={handleClick}>\n        Clique aqui\n      </button>\n    </div>\n  );\n};\n\nexport default MyComponent;";
var __typescript = "enum Role {\n  ADMIN,\n  USER,\n  GUEST\n}\n\nclass User {\n  name: string;\n  role: Role;\n\n  constructor(name: string, role: Role) {\n    this.name = name;\n    this.role = role;\n  }\n\n  getPermissions(): string[] {\n    switch (this.role) {\n      case Role.ADMIN:\n        return ['create', 'read', 'update', 'delete'];\n      case Role.USER:\n        return ['read', 'update'];\n      case Role.GUEST:\n        return ['read'];\n      default:\n        return [];\n    }\n  }\n}\n\nconst user = new User('John', Role.USER);\nconsole.log(user.getPermissions());";
var __jsx = "import React from 'react';\n\nconst MyComponent = () => {\n  const [count, setCount] = React.useState(0);\n  const handleClick = () => setCount(count + 1);\n\n  return (\n    <div>\n      <h1>Meu componente</h1>\n      <p>Voc\xEA clicou {count} vezes</p>\n      <button onClick={handleClick}>\n        Clique aqui\n      </button>\n    </div>\n  );\n};\n\nexport default MyComponent;";
var __javascript = "const getData = async () => {\n  try {\n    const response = await fetch('https://api.example.com/data');\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error(error);\n  }\n};\n\ngetData()\n  .then(data => console.log(data))\n  .catch(error => console.error(error));\n";
var __markup = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Document</title>\n</head>\n<body>\n  <header>\n    <nav>\n      <ul>\n        <li><a href=\"#\">Home</a></li>\n        <li><a href=\"#\">About</a></li>\n        <li><a href=\"#\">Contact</a></li>\n      </ul>\n    </nav>\n  </header>\n  <main>\n    <h1>Welcome!</h1>\n  </main>\n  <footer>\n    <p>Copyright 2023</p>\n  </footer>\n</body>\n</html>";
var __bash = "#!/bin/bash\n\n# Atualizar os pacotes do sistema\nsudo apt-get update\n\n# Instalar o Apache\nsudo apt-get install apache2 -y\n\n# Habilitar o m\xF3dulo rewrite do Apache\nsudo a2enmod rewrite\n\n# Habilitar o Virtual Host do Apache\nsudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/app.conf\n\n# Alterar o DocumentRoot do Virtual Host para o diret\xF3rio da aplica\xE7\xE3o\nsed -i 's|/var/www/html|/var/www/app|g' /etc/apache2/sites-available/app.conf\n\n# Desabilitar o Virtual Host padr\xE3o e habilitar o novo Virtual Host\nsudo a2dissite 000-default.conf\nsudo a2ensite app.conf\n\n# Reiniciar o Apache\nsudo systemctl restart apache2";
var __clike = "#include <stdio.h>\n\nint main() {\n  int a = 10;\n  int b = 20;\n  int c = a + b;\n  printf(\"%d + %d = %d\\n\", a, b, c);\n  return 0;\n}";
var __c = "#include <stdio.h>\n#include <stdlib.h>\n#include <time.h>\n\nint main() {\n  srand(time(NULL));\n  int randomNumber = rand();\n  printf(\"N\xFAmero aleat\xF3rio: %d\\n\", randomNumber);\n  return 0;\n}";
var __cpp = "#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main() {\n  string name;\n  cout << \"Enter your name: \";\n  getline(cin, name);\n  cout << \"Hello, \" << name << \"!\" << endl;\n  return 0;\n}";
var __css = "body {\n  font-family: sans-serif;\n  color: #333;\n  background-color: #fafafa;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.5em 0;\n}\n\np {\n  font-size: 1.5em;\n  margin: 0.5em 0;\n}\n\na {\n  color: #0070f3;\n  text-decoration: none;\n}\n\na:hover,\na:focus {\n  color: #0050e3;\n}\n\na:active {\n  color: #0040d3;\n}";
var __diff = "--- a/index.html\n+++ b/index.html\n@@ -1,7 +1,7 @@\n <!DOCTYPE html>\n <html lang=\"en\">\n   <head>\n-    <link/>\n-    <meta charset=\"UTF-8\">\n+    <meta charset=\"UTF-8\" />\n     <title>Document</title>\n   </head>\n   <body>\n@@ -10,7 +10,7 @@\n       <li><a href=\"#\">About</a></li>\n       <li><a href=\"#\">Contact</a></li>\n     </ul>\n-  </nav>\n+  </nav> \n   </header>\n   <main>\n     <h1>Welcome!</h1>";
var __git = "git add .\ngit commit -m \"[feat]: Um exemplo do git\"\ngit push origin main --force";
var __go = "package main\n\nimport \"fmt\"\n\nfunc main() {\n  numbers := []int{1, 2, 3, 4, 5}\n  sum := 0\n  for _, number := range numbers {\n    sum += number\n  }\n  fmt.Println(\"Sum:\", sum)\n}";
var __graphql = "type Query {\n  getUser(id: ID!): User\n}\n\ntype User {\n  id: ID!\n  name: String!\n  age: Int!\n  email: String!\n}\n\ntype Mutation {\n  createUser(name: String!, age: Int!, email: String!): User\n}";
var __handlebars = "<h1>{{title}}</h1>\n<ul>\n  {{#each items}}\n    <li>{{this}}</li>\n  {{/each}}\n</ul>\n{{#if hasItems}}\n  <p>There are items in the list</p>\n{{else}}\n  <p>The list is empty</p>\n{{/if}}";
var __json = "{\n  \"users\": [\n    {\n      \"id\": 1,\n      \"name\": \"John\",\n      \"age\": 30,\n      \"email\": \"john@example.com\"\n    },\n    {\n      \"id\": 2,\n      \"name\": \"Jane\",\n      \"age\": 25,\n      \"email\": \"jane@example.com\"\n    }\n  ]\n}";
var __less = "@color: #333;\n\nbody {\n  font-family: sans-serif;\n  color: @color;\n}\n\na {\n  color: darken(@color, 10%);\n  &:hover {\n    color: darken(@color, 20%);\n  }\n  &:active {\n    color: darken(@color, 30%);\n  }\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.5em 0;\n}\n\np {\n  font-size: 1.5em;\n  margin: 0.5em 0;\n}";
var __makeFile = "CC = gcc\nCFLAGS = -Wall -Wextra -Werror\n\nall: main.o factorial.o\n\t$(CC) $(CFLAGS) main.o factorial.o -o main\n\nmain.o: main.c\n\t$(CC) $(CFLAGS) -c main.c\n\nfactorial.o: factorial.c\n\t$(CC) $(CFLAGS) -c factorial.c\n\nclean:\n\trm -f *.o main\n\n.PHONY: all clean";
var __markdown = "# Welcome to my blog\n\nHi there! My name is John and this is my blog. Here, I write about my interests and share my thoughts with the world.\n\n## Latest posts\n\n- [The importance of staying curious](/posts/stay-curious)\n- [5 tips for better time management](/posts/time-management)\n- [My favorite books of all time](/posts/favorite-books)\n\n## About me\n\nI'm a software developer and avid reader. In my free time, I enjoy traveling and trying new foods. I hope you enjoy reading my blog!";
var __objectivec = "#import <Foundation/Foundation.h>\n\nint main(int argc, const char * argv[]) {\n  @autoreleasepool {\n    NSLog(@\"Hello, World!\");\n  }\n  return 0;\n}";
var __ocaml = "let rec factorial n =\nif n = 0 then 1\nelse n * factorial (n - 1)\n\nlet () =\nlet n = 5 in\nlet result = factorial n in\nPrintf.printf \"The factorial of %d is %d\\n\" n result";
var __python = "def factorial(n):\nif n == 0:\n    return 1\nelse:\n    return n * factorial(n - 1)\n\nn = 5\nresult = factorial(n)\nprintf(\"The factorial of {n} is {result}\")";
var __reason = "let factorial = (n: int) => {\n  if (n == 0) {\n    1\n  } else {\n    n * factorial(n - 1)\n  }\n};\n\nlet n = 5;\nlet result = factorial(n);\nprint_endline(string_of_int(result));";
var __sass = "body {\n  font: 100% $font-stack;\n  color: $primary-color;\n}\n\na {\n  color: darken($primary-color, 10%);\n  &:hover {\n    color: darken($primary-color, 20%);\n  }\n  &:active {\n    color: darken($primary-color, 30%);\n  }\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.5em 0;\n}\n\np {\n  font-size: 1.5em;\n  margin: 0.5em 0;\n}";
var __scss = "body {\n  font: 100% $font-stack;\n  color: $primary-color;\n}\n\na {\n  color: darken($primary-color, 10%);\n  &:hover {\n    color: darken($primary-color, 20%);\n  }\n  &:active {\n    color: darken($primary-color, 30%);\n  }\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.5em 0;\n}\n\np {\n  font-size: 1.5em;\n  margin: 0.5em 0;\n}";
var __sql = "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  age INTEGER NOT NULL,\n  email TEXT NOT NULL UNIQUE\n);\n\nINSERT INTO users (name, age, email)\nVALUES ('John', 30, 'john@example.com'),\n       ('Jane', 25, 'jane@example.com');\n\nSELECT * FROM users;";
var __stylus = "body\nfont: 100% font-stack\ncolor: primary-color\n\na\ncolor: darken(primary-color, 10%)\n&:hover\n  color: darken(primary-color, 20%)\n&:active\n  color: darken(primary-color, 30%)\n\nh1\nfont-size: 2em\nmargin: 0.5em 0\n\np\nfont-size: 1.5em\nmargin: 0.5em 0";
var __yaml = "applications:\n- name: my-app\n  memory: 128M\n  instances: 1\n  domain: example.com\n  host: my-app\n  path: .\n  buildpack: nodejs_buildpack\n- name: my-other-app\n  memory: 256M\n  instances: 2\n  domain: example.com\n  host: my-other-app\n  path: .\n  buildpack: python_buildpack";
var __latex = "\n  x = \frac{5}{4}\n";
;// CONCATENATED MODULE: ./stories/Highlight.stories.tsx


/* harmony default export */ const Highlight_stories = ({
  title: "Highlight",
  component: (dist_default()),
  args: {
    full: false,
    theme: "primary",
    language: "tsx",
    children: "export function Highlight({ \n  children, \n  theme = \"default\" \n}: HighlightProps, test: string) {\n  type HighlightTheme = keyof typeof themes;\n\n  return (\n    <CodeBlock\n      code={children}\n      theme={themes[theme]}\n      languageuage=\"tsx\"\n    />\n  );\n}"
  },
  argTypes: {
    theme: {
      options: ["primary", "dracula", "duotoneDark", "duotoneLight", "github", "nightOwl", "nightOwlLight", "oceanicNext", "palenight", "okaidia", "shadesOfPurple", "synthwave84", "ultramin", "vsDark", "vsLight"],
      control: {
        type: 'select'
      }
    },
    language: {
      options: ["html", "markup", "bash", "clike", "c", "cpp", "css", "css-extras", "javascript", "jsx", "js-extras", "js-templates", "coffeescript", "diff", "git", "go", "graphql", "markup-templating", "handlebars", "json", "less", "makefile", "markdown", "objectivec", "ocaml", "python", "reason", "sass", "scss", "sql", "stylus", "tsx", "typescript", "wasm", "yaml"],
      control: {
        type: 'select'
      }
    }
  }
});
var Primary = {
  name: "Tsx",
  args: {
    language: "tsx",
    children: __tsx
  }
};
var Full = {
  name: "Full Width",
  args: {
    language: "tsx",
    full: true,
    children: __tsx
  }
};
var WithScroll = {
  name: "With Scroll",
  args: {
    language: "tsx",
    children: __tsx,
    style: {
      maxWidth: 450
    }
  }
};
var WithoutNumbers = {
  name: "Without Numbers",
  args: {
    language: "tsx",
    showNumbers: false,
    children: __tsx
  }
};
var OneLine = {
  name: "One Line",
  args: {
    language: "tsx",
    children: "l-marcel setup"
  }
};
var typescript = {
  args: {
    language: "typescript",
    children: __typescript
  }
};
var javascript = {
  args: {
    language: "javascript",
    children: __javascript
  }
};
var jsx = {
  args: {
    language: "jsx",
    children: __jsx
  }
};
var markup = {
  name: "Html/Markup",
  args: {
    language: "html",
    children: __markup
  }
};
var bash = {
  args: {
    language: "bash",
    children: __bash
  }
};
var clike = {
  args: {
    language: "clike",
    children: __clike
  }
};
var c = {
  args: {
    language: "c",
    children: __c
  }
};
var cpp = {
  args: {
    language: "cpp",
    children: __cpp
  }
};
var css = {
  args: {
    language: "css",
    children: __css
  }
};
var diff = {
  args: {
    language: "diff",
    children: __diff
  }
};
var git = {
  args: {
    language: "git",
    children: __git
  }
};
var go = {
  args: {
    language: "go",
    children: __go
  }
};
var graphql = {
  args: {
    language: "graphql",
    children: __graphql
  }
};
var handlebars = {
  args: {
    language: "handlebars",
    children: __handlebars
  }
};
var json = {
  args: {
    language: "json",
    children: __json
  }
};
var less = {
  args: {
    language: "less",
    children: __less
  }
};
var makefile = {
  args: {
    language: "makefile",
    children: __makeFile
  }
};
var markdown = {
  args: {
    language: "markdown",
    children: __markdown
  }
};
var objectivec = {
  args: {
    language: "objectivec",
    children: __objectivec
  }
};
var ocaml = {
  args: {
    language: "ocaml",
    children: __ocaml
  }
};
var python = {
  args: {
    language: "python",
    children: __python
  }
};
var reason = {
  args: {
    language: "reason",
    children: __reason
  }
};
var sass = {
  args: {
    language: "sass",
    children: __sass
  }
};
var scss = {
  args: {
    language: "scss",
    children: __scss
  }
};
var sql = {
  args: {
    language: "sql",
    children: __sql
  }
};
var stylus = {
  args: {
    language: "stylus",
    children: __stylus
  }
};
var yaml = {
  args: {
    language: "yaml",
    children: __yaml
  }
};
var latex = {
  args: {
    language: "latex",
    children: __latex
  }
};
var __namedExportsOrder = ["Primary", "Full", "WithScroll", "WithoutNumbers", "OneLine", "typescript", "javascript", "jsx", "markup", "bash", "clike", "c", "cpp", "css", "diff", "git", "go", "graphql", "handlebars", "json", "less", "makefile", "markdown", "objectivec", "ocaml", "python", "reason", "sass", "scss", "sql", "stylus", "yaml", "latex"];

/***/ }),

/***/ "../highlight/dist/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.date.to-primitive.js");
var _reactJsxRuntime = __webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");
var _excluded = ["children", "theme", "language", "showNumbers", "showNumbersBorder", "numbersContainerClassName", "numbersClassName", "plugins"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.create.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.get-own-property-names.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.symbol.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.assign.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.string.replace.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.array.join.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.keys.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.function.bind.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.array.concat.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.array.map.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.function.name.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.freeze.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.seal.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.symbol.to-string-tag.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.math.to-string-tag.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.json.to-string-tag.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.define-properties.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.string.match.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.string.trim.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.weak-map.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.map.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.reflect.construct.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.string.split.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.array.includes.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.string.includes.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.set.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.array.slice.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.promise.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.array.filter.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.entries.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.array.reduce.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.string.ends-with.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.string.starts-with.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.array.some.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.regexp.constructor.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.string.from-code-point.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.parse-int.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.array.splice.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.regexp.flags.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.array.from.js");
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = function __commonJS(cb, mod) {
  return function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
      exports: {}
    }).exports, mod), mod.exports;
  };
};
var __export = function __export(target, all) {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = function __copyProps(to, from, except, desc) {
  if (from && typeof from === "object" || typeof from === "function") {
    var _loop = function _loop(key) {
      if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
        get: function get() {
          return from[key];
        },
        enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
      });
    };
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var key = _step.value;
        _loop(key);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = function __toESM(mod, isNodeMode, target) {
  return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target, mod);
};
var __toCommonJS = function __toCommonJS(mod) {
  return __copyProps(__defProp({}, "__esModule", {
    value: true
  }), mod);
};

// ../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js": function node_modulesPnpmReact1820Node_modulesReactCjsReactProductionMinJs(exports) {
    "use strict";

    var l = Symbol["for"]("react.element");
    var n = Symbol["for"]("react.portal");
    var p = Symbol["for"]("react.fragment");
    var q = Symbol["for"]("react.strict_mode");
    var r = Symbol["for"]("react.profiler");
    var t = Symbol["for"]("react.provider");
    var u = Symbol["for"]("react.context");
    var v = Symbol["for"]("react.forward_ref");
    var w = Symbol["for"]("react.suspense");
    var x = Symbol["for"]("react.memo");
    var y = Symbol["for"]("react.lazy");
    var z = Symbol.iterator;
    function A(a) {
      if (null === a || "object" !== typeof a) return null;
      a = z && a[z] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = {
      isMounted: function isMounted() {
        return false;
      },
      enqueueForceUpdate: function enqueueForceUpdate() {},
      enqueueReplaceState: function enqueueReplaceState() {},
      enqueueSetState: function enqueueSetState() {}
    };
    var C = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function (a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function (a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {}
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K = {
      current: null
    };
    var L = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    function M(a, b, e) {
      var d,
        c = {},
        k = null,
        h = null;
      if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g) c.children = e;else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
      return {
        $$typeof: l,
        type: a,
        key: k,
        ref: h,
        props: c,
        _owner: K.current
      };
    }
    function N(a, b) {
      return {
        $$typeof: l,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
      };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + a.replace(/[=:]/g, function (a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k) a = null;
      var h = false;
      if (null === a) h = true;else switch (k) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l:
            case n:
              h = true;
          }
      }
      if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function (a2) {
        return a2;
      })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a)) for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = d + Q(k, g);
        h += R(k, b, e, f, c);
      } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (null == a) return a;
      var d = [],
        c = 0;
      R(a, d, "", "", function (a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function (b2) {
          if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
        }, function (b2) {
          if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status) return a._result["default"];
      throw a._result;
    }
    var U = {
      current: null
    };
    var V = {
      transition: null
    };
    var W = {
      ReactCurrentDispatcher: U,
      ReactCurrentBatchConfig: V,
      ReactCurrentOwner: K
    };
    exports.Children = {
      map: S,
      forEach: function forEach(a, b, e) {
        S(a, function () {
          b.apply(this, arguments);
        }, e);
      },
      count: function count(a) {
        var b = 0;
        S(a, function () {
          b++;
        });
        return b;
      },
      toArray: function toArray(a) {
        return S(a, function (a2) {
          return a2;
        }) || [];
      },
      only: function only(a) {
        if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
      }
    };
    exports.Component = E;
    exports.Fragment = p;
    exports.Profiler = r;
    exports.PureComponent = G;
    exports.StrictMode = q;
    exports.Suspense = w;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports.cloneElement = function (a, b, e) {
      if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props),
        c = a.key,
        k = a.ref,
        h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f) d.children = e;else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
        d.children = g;
      }
      return {
        $$typeof: l,
        type: a.type,
        key: c,
        ref: k,
        props: d,
        _owner: h
      };
    };
    exports.createContext = function (a) {
      a = {
        $$typeof: u,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
      };
      a.Provider = {
        $$typeof: t,
        _context: a
      };
      return a.Consumer = a;
    };
    exports.createElement = M;
    exports.createFactory = function (a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function () {
      return {
        current: null
      };
    };
    exports.forwardRef = function (a) {
      return {
        $$typeof: v,
        render: a
      };
    };
    exports.isValidElement = O;
    exports.lazy = function (a) {
      return {
        $$typeof: y,
        _payload: {
          _status: -1,
          _result: a
        },
        _init: T
      };
    };
    exports.memo = function (a, b) {
      return {
        $$typeof: x,
        type: a,
        compare: void 0 === b ? null : b
      };
    };
    exports.startTransition = function (a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    };
    exports.useCallback = function (a, b) {
      return U.current.useCallback(a, b);
    };
    exports.useContext = function (a) {
      return U.current.useContext(a);
    };
    exports.useDebugValue = function () {};
    exports.useDeferredValue = function (a) {
      return U.current.useDeferredValue(a);
    };
    exports.useEffect = function (a, b) {
      return U.current.useEffect(a, b);
    };
    exports.useId = function () {
      return U.current.useId();
    };
    exports.useImperativeHandle = function (a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports.useInsertionEffect = function (a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports.useLayoutEffect = function (a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports.useMemo = function (a, b) {
      return U.current.useMemo(a, b);
    };
    exports.useReducer = function (a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports.useRef = function (a) {
      return U.current.useRef(a);
    };
    exports.useState = function (a) {
      return U.current.useState(a);
    };
    exports.useSyncExternalStore = function (a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports.useTransition = function () {
      return U.current.useTransition();
    };
    exports.version = "18.2.0";
  }
});

// ../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js": function node_modulesPnpmReact1820Node_modulesReactCjsReactDevelopmentJs(exports, module2) {
    "use strict";

    if (false) {}
  }
});

// ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var require_react = __commonJS({
  "../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js": function node_modulesPnpmReact1820Node_modulesReactIndexJs(exports, module2) {
    "use strict";

    if (true) {
      module2.exports = require_react_production_min();
    } else {}
  }
});

// ../../node_modules/.pnpm/tailwind-factory@2.3.6/node_modules/tailwind-factory/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/.pnpm/tailwind-factory@2.3.6/node_modules/tailwind-factory/dist/index.js": function node_modulesPnpmTailwindFactory236Node_modulesTailwindFactoryDistIndexJs(exports, module2) {
    "use strict";

    var gn = Object.create;
    var ve = Object.defineProperty;
    var bn = Object.getOwnPropertyDescriptor;
    var _n = Object.getOwnPropertyNames;
    var Cn = Object.getPrototypeOf;
    var En = Object.prototype.hasOwnProperty;
    var Be = function Be(r, n) {
      return function () {
        return n || r((n = {
          exports: {}
        }).exports, n), n.exports;
      };
    };
    var wn = function wn(r, n) {
      for (var i in n) ve(r, i, {
        get: n[i],
        enumerable: true
      });
    };
    var Ut = function Ut(r, n, i, l) {
      if (n && typeof n == "object" || typeof n == "function") {
        var _loop2 = function _loop2(u) {
          !En.call(r, u) && u !== i && ve(r, u, {
            get: function get() {
              return n[u];
            },
            enumerable: !(l = bn(n, u)) || l.enumerable
          });
        };
        var _iterator2 = _createForOfIteratorHelper(_n(n)),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var u = _step2.value;
            _loop2(u);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return r;
    };
    var Ke = function Ke(r, n, i) {
      return i = r != null ? gn(Cn(r)) : {}, Ut(n || !r || !r.__esModule ? ve(i, "default", {
        value: r,
        enumerable: true
      }) : i, r);
    };
    var Sn = function Sn(r) {
      return Ut(ve({}, "__esModule", {
        value: true
      }), r);
    };
    var Zt = Be(function (b) {
      "use strict";

      var ne = Symbol["for"]("react.element"),
        Rn = Symbol["for"]("react.portal"),
        Tn = Symbol["for"]("react.fragment"),
        On = Symbol["for"]("react.strict_mode"),
        Pn = Symbol["for"]("react.profiler"),
        xn = Symbol["for"]("react.provider"),
        kn = Symbol["for"]("react.context"),
        Nn = Symbol["for"]("react.forward_ref"),
        Vn = Symbol["for"]("react.suspense"),
        An = Symbol["for"]("react.memo"),
        jn = Symbol["for"]("react.lazy"),
        Bt = Symbol.iterator;
      function In(r) {
        return r === null || typeof r != "object" ? null : (r = Bt && r[Bt] || r["@@iterator"], typeof r == "function" ? r : null);
      }
      var zt = {
          isMounted: function isMounted() {
            return false;
          },
          enqueueForceUpdate: function enqueueForceUpdate() {},
          enqueueReplaceState: function enqueueReplaceState() {},
          enqueueSetState: function enqueueSetState() {}
        },
        qt = Object.assign,
        Ht = {};
      function Z(r, n, i) {
        this.props = r, this.context = n, this.refs = Ht, this.updater = i || zt;
      }
      Z.prototype.isReactComponent = {};
      Z.prototype.setState = function (r, n) {
        if (typeof r != "object" && typeof r != "function" && r != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, r, n, "setState");
      };
      Z.prototype.forceUpdate = function (r) {
        this.updater.enqueueForceUpdate(this, r, "forceUpdate");
      };
      function Gt() {}
      Gt.prototype = Z.prototype;
      function ze(r, n, i) {
        this.props = r, this.context = n, this.refs = Ht, this.updater = i || zt;
      }
      var qe = ze.prototype = new Gt();
      qe.constructor = ze;
      qt(qe, Z.prototype);
      qe.isPureReactComponent = true;
      var Kt = Array.isArray,
        Jt = Object.prototype.hasOwnProperty,
        He = {
          current: null
        },
        Xt = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
      function Qt(r, n, i) {
        var l,
          u = {},
          c = null,
          d = null;
        if (n != null) for (l in n.ref !== void 0 && (d = n.ref), n.key !== void 0 && (c = "" + n.key), n) Jt.call(n, l) && !Xt.hasOwnProperty(l) && (u[l] = n[l]);
        var f = arguments.length - 2;
        if (f === 1) u.children = i;else if (1 < f) {
          for (var y = Array(f), h = 0; h < f; h++) y[h] = arguments[h + 2];
          u.children = y;
        }
        if (r && r.defaultProps) for (l in f = r.defaultProps, f) u[l] === void 0 && (u[l] = f[l]);
        return {
          $$typeof: ne,
          type: r,
          key: c,
          ref: d,
          props: u,
          _owner: He.current
        };
      }
      function Dn(r, n) {
        return {
          $$typeof: ne,
          type: r.type,
          key: n,
          ref: r.ref,
          props: r.props,
          _owner: r._owner
        };
      }
      function Ge(r) {
        return typeof r == "object" && r !== null && r.$$typeof === ne;
      }
      function Fn(r) {
        var n = {
          "=": "=0",
          ":": "=2"
        };
        return "$" + r.replace(/[=:]/g, function (i) {
          return n[i];
        });
      }
      var Yt = /\/+/g;
      function Ye(r, n) {
        return typeof r == "object" && r !== null && r.key != null ? Fn("" + r.key) : n.toString(36);
      }
      function be(r, n, i, l, u) {
        var c = typeof r;
        (c === "undefined" || c === "boolean") && (r = null);
        var d = false;
        if (r === null) d = true;else switch (c) {
          case "string":
          case "number":
            d = true;
            break;
          case "object":
            switch (r.$$typeof) {
              case ne:
              case Rn:
                d = true;
            }
        }
        if (d) return d = r, u = u(d), r = l === "" ? "." + Ye(d, 0) : l, Kt(u) ? (i = "", r != null && (i = r.replace(Yt, "$&/") + "/"), be(u, n, i, "", function (h) {
          return h;
        })) : u != null && (Ge(u) && (u = Dn(u, i + (!u.key || d && d.key === u.key ? "" : ("" + u.key).replace(Yt, "$&/") + "/") + r)), n.push(u)), 1;
        if (d = 0, l = l === "" ? "." : l + ":", Kt(r)) for (var f = 0; f < r.length; f++) {
          c = r[f];
          var y = l + Ye(c, f);
          d += be(c, n, i, y, u);
        } else if (y = In(r), typeof y == "function") for (r = y.call(r), f = 0; !(c = r.next()).done;) c = c.value, y = l + Ye(c, f++), d += be(c, n, i, y, u);else if (c === "object") throw n = String(r), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
        return d;
      }
      function ge(r, n, i) {
        if (r == null) return r;
        var l = [],
          u = 0;
        return be(r, l, "", "", function (c) {
          return n.call(i, c, u++);
        }), l;
      }
      function $n(r) {
        if (r._status === -1) {
          var n = r._result;
          n = n(), n.then(function (i) {
            (r._status === 0 || r._status === -1) && (r._status = 1, r._result = i);
          }, function (i) {
            (r._status === 0 || r._status === -1) && (r._status = 2, r._result = i);
          }), r._status === -1 && (r._status = 0, r._result = n);
        }
        if (r._status === 1) return r._result["default"];
        throw r._result;
      }
      var W = {
          current: null
        },
        _e = {
          transition: null
        },
        Mn = {
          ReactCurrentDispatcher: W,
          ReactCurrentBatchConfig: _e,
          ReactCurrentOwner: He
        };
      b.Children = {
        map: ge,
        forEach: function forEach(r, n, i) {
          ge(r, function () {
            n.apply(this, arguments);
          }, i);
        },
        count: function count(r) {
          var n = 0;
          return ge(r, function () {
            n++;
          }), n;
        },
        toArray: function toArray(r) {
          return ge(r, function (n) {
            return n;
          }) || [];
        },
        only: function only(r) {
          if (!Ge(r)) throw Error("React.Children.only expected to receive a single React element child.");
          return r;
        }
      };
      b.Component = Z;
      b.Fragment = Tn;
      b.Profiler = Pn;
      b.PureComponent = ze;
      b.StrictMode = On;
      b.Suspense = Vn;
      b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mn;
      b.cloneElement = function (r, n, i) {
        if (r == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
        var l = qt({}, r.props),
          u = r.key,
          c = r.ref,
          d = r._owner;
        if (n != null) {
          if (n.ref !== void 0 && (c = n.ref, d = He.current), n.key !== void 0 && (u = "" + n.key), r.type && r.type.defaultProps) var f = r.type.defaultProps;
          for (y in n) Jt.call(n, y) && !Xt.hasOwnProperty(y) && (l[y] = n[y] === void 0 && f !== void 0 ? f[y] : n[y]);
        }
        var y = arguments.length - 2;
        if (y === 1) l.children = i;else if (1 < y) {
          f = Array(y);
          for (var h = 0; h < y; h++) f[h] = arguments[h + 2];
          l.children = f;
        }
        return {
          $$typeof: ne,
          type: r.type,
          key: u,
          ref: c,
          props: l,
          _owner: d
        };
      };
      b.createContext = function (r) {
        return r = {
          $$typeof: kn,
          _currentValue: r,
          _currentValue2: r,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        }, r.Provider = {
          $$typeof: xn,
          _context: r
        }, r.Consumer = r;
      };
      b.createElement = Qt;
      b.createFactory = function (r) {
        var n = Qt.bind(null, r);
        return n.type = r, n;
      };
      b.createRef = function () {
        return {
          current: null
        };
      };
      b.forwardRef = function (r) {
        return {
          $$typeof: Nn,
          render: r
        };
      };
      b.isValidElement = Ge;
      b.lazy = function (r) {
        return {
          $$typeof: jn,
          _payload: {
            _status: -1,
            _result: r
          },
          _init: $n
        };
      };
      b.memo = function (r, n) {
        return {
          $$typeof: An,
          type: r,
          compare: n === void 0 ? null : n
        };
      };
      b.startTransition = function (r) {
        var n = _e.transition;
        _e.transition = {};
        try {
          r();
        } finally {
          _e.transition = n;
        }
      };
      b.unstable_act = function () {
        throw Error("act(...) is not supported in production builds of React.");
      };
      b.useCallback = function (r, n) {
        return W.current.useCallback(r, n);
      };
      b.useContext = function (r) {
        return W.current.useContext(r);
      };
      b.useDebugValue = function () {};
      b.useDeferredValue = function (r) {
        return W.current.useDeferredValue(r);
      };
      b.useEffect = function (r, n) {
        return W.current.useEffect(r, n);
      };
      b.useId = function () {
        return W.current.useId();
      };
      b.useImperativeHandle = function (r, n, i) {
        return W.current.useImperativeHandle(r, n, i);
      };
      b.useInsertionEffect = function (r, n) {
        return W.current.useInsertionEffect(r, n);
      };
      b.useLayoutEffect = function (r, n) {
        return W.current.useLayoutEffect(r, n);
      };
      b.useMemo = function (r, n) {
        return W.current.useMemo(r, n);
      };
      b.useReducer = function (r, n, i) {
        return W.current.useReducer(r, n, i);
      };
      b.useRef = function (r) {
        return W.current.useRef(r);
      };
      b.useState = function (r) {
        return W.current.useState(r);
      };
      b.useSyncExternalStore = function (r, n, i) {
        return W.current.useSyncExternalStore(r, n, i);
      };
      b.useTransition = function () {
        return W.current.useTransition();
      };
      b.version = "18.2.0";
    });
    var er = Be(function (_, Ce) {
      "use strict";

       false && 0;
    });
    var Xe = Be(function (Kn, Je) {
      "use strict";

       true ? Je.exports = Zt() : 0;
    });
    var Wn = {};
    wn(Wn, {
      nextWithFactory: function nextWithFactory() {
        return or;
      },
      removeWhiteSpaceInClasses: function removeWhiteSpaceInClasses() {
        return K;
      },
      tf: function tf() {
        return Ln;
      },
      webpackWithFactory: function webpackWithFactory() {
        return et;
      }
    });
    module2.exports = Sn(Wn);
    var tt = Ke(Xe());
    function K(r) {
      var n = /(\r|\t)/g,
        i = /(\n| )/g,
        l = r;
      if (n.test(l) && (l = l.replace(n, "")), i.test(l)) {
        var u = l.split(i);
        try {
          return u.filter(function (c) {
            return c = c.trim(), !!c && c !== "\n";
          }).map(function (c) {
            return c.trim();
          }).join(" ");
        } catch (_unused5) {
          return "";
        }
      }
      return l;
    }
    function Qe(r, n, i) {
      var l = n,
        c = Object.entries(i).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            f = _ref2[0],
            y = _ref2[1];
          var h = Object.getOwnPropertyNames(y),
            S = l[f];
          h.includes("true") && Number(S) === 1 || h.includes("false") && Number(S) === 0 ? S = Boolean(S) : (h.includes("1") && Boolean(S) === true || h.includes("0") && Boolean(S) === false) && (S = Number(S));
          var g = y[String(S)];
          return K(g);
        }),
        d = K(r);
      return "" + d + (c.length >= 1 && d ? " " : "") + c.join(" ");
    }
    function Ze() {
      var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (typeof r != "object" || typeof n != "object") return n;
      var i = Object.assign({}, r, n);
      return Object.entries(i).reduce(function (l, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
          u = _ref4[0];
        var c;
        Object.getOwnPropertyNames(r).includes(u) && (c = r[u]);
        var d;
        Object.getOwnPropertyNames(n).includes(u) && (d = n[u]);
        var f = typeof c == "object",
          y = typeof d == "object",
          h = typeof d > "u";
        return f && y ? l[u] = Ze(c, d) : f && !y && !h || !f && y ? l[u] = d : h ? l[u] = c : l[u] = d, l;
      }, Object.assign({}, i));
    }
    function tr(r, n, i) {
      return !r && i === "{" ? (r = true, n = 1) : r && i === "}" && n === 1 ? (r = false, n = 0) : i === "{" ? n++ : i === "}" && n--, [r, n];
    }
    function rr(r) {
      return ["div", "p", "h1", "h2", "h3", "a", "main", "header", "footer", "section", "article", "abbr", "address", "area", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "form", "h4", "h5", "h6", "head", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noindex", "noscript", "object", "ol", "optgroup", "option", "output", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "slot", "script", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "template", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "svg", "animate", "animateMotion", "animateTransform", "circle", "clipPath", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "switch", "symbol", "text", "textPath", "tspan", "use", "view"].includes(r);
    }
    function Ee(r) {
      var n = / /g.test(r !== null && r !== void 0 ? r : "");
      return r ? n ? r === null || r === void 0 ? void 0 : r.split(" ") : [r] : [];
    }
    var ae = /*#__PURE__*/function () {
      function ae() {
        _classCallCheck(this, ae);
      }
      _createClass(ae, null, [{
        key: "getMapOfClasses",
        value: function getMapOfClasses() {
          var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var i = arguments.length > 1 ? arguments[1] : undefined;
          var l = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var u = Ee(i),
            c = [],
            d = 0,
            f = [],
            y = false,
            h = [],
            S = -1,
            g = false,
            I = false,
            T = false,
            F = u.reduce(function (O, P, U, x) {
              var _tr = tr(T, d, P),
                _tr2 = _slicedToArray(_tr, 2),
                C = _tr2[0],
                A = _tr2[1];
              if (T = C, d = A, T) return h.push(P), O;
              !T && g && P === "}" && (g = false, h.shift(), O.children[S].elementClassNames = h.join(" "));
              var j = P.endsWith(","),
                M = j ? P.replace(",", "") : P,
                q = P.startsWith("."),
                Se = P.startsWith("#");
              y = j;
              var oe = U < x.length - 1 && x[U + 1] === "{" || j;
              return !g && !T && oe && (rr(M) || q || Se) ? (h = [], y ? f.push(M) : (S++, g = true, I = false, O.children.push({
                type: [].concat(_toConsumableArray(f), [P]),
                children: [],
                withArrow: false,
                elementClassNames: ""
              }), f = []), O) : !g && !T && P === ">" ? (h = [], g = true, I = true, O) : g && I && !T ? (y ? f.push(M) : (S++, O.children.push({
                type: [].concat(_toConsumableArray(f), [P]),
                withArrow: true,
                children: [],
                elementClassNames: ""
              }), f = []), O) : (!g && !T && P !== "}" && !oe && c.push(P), O);
            }, {
              elementClassNames: "",
              children: [],
              withArrow: l,
              type: n
            });
          F.elementClassNames = c.join(" ");
          for (var O in F.children) {
            var P = F.children[O];
            F.children[O] = this.getMapOfClasses(P.type, P.elementClassNames, P.withArrow);
          }
          return F;
        }
      }, {
        key: "applyMappedClasses",
        value: function applyMappedClasses(n, i) {
          var _this = this;
          var u = Array.isArray(n) ? _toConsumableArray(n) : [n];
          var _loop3 = function _loop3() {
            var _d$props$className, _d$props, _d$props2, _g$props, _g$props2, _g$props3, _g$props4, _g$props$className, _g$props5;
            if (typeof u[c] == "string" || typeof u[c] == "number") return "continue";
            var d = Object.assign({}, u[c]),
              f = (_d$props$className = (_d$props = d.props) === null || _d$props === void 0 ? void 0 : _d$props.className) !== null && _d$props$className !== void 0 ? _d$props$className : "",
              y = [],
              h = Ee((_d$props2 = d.props) === null || _d$props2 === void 0 ? void 0 : _d$props2.id),
              S = Ee(f);
            d.props = Object.assign({}, d.props, {
              className: ""
            });
            for (var x in i) {
              var _d2;
              var C = i[x],
                A = _this.isTheSameType(C, (_d2 = d) === null || _d2 === void 0 ? void 0 : _d2.type, S, h, function (M) {
                  f.includes(M) && (f = f.replace(M, ""), y.push(M));
                }),
                j = d;
              if (A) {
                var _j$props;
                var M = (_j$props = j.props) === null || _j$props === void 0 ? void 0 : _j$props.className,
                  q = M ? K(M) + " " : "";
                j.props = Object.assign({}, j.props, {
                  className: q + C.elementClassNames
                }), u[c] = j, d = u[c];
              }
            }
            var g = Object.assign({}, d),
              I = ((_g$props = g.props) === null || _g$props === void 0 ? void 0 : _g$props.children) && typeof ((_g$props2 = g.props) === null || _g$props2 === void 0 ? void 0 : _g$props2.children) == "object",
              T = I ? i.filter(function (x) {
                var C = _this.isTheSameType(x, g === null || g === void 0 ? void 0 : g.type, S, h);
                return !x.withArrow || C;
              }).reduce(function (x, C) {
                var A = _this.isTheSameType(C, g === null || g === void 0 ? void 0 : g.type, S, h),
                  j = C.withArrow;
                return A && j ? x = [].concat(_toConsumableArray(x), _toConsumableArray(C.children)) : x = [].concat(_toConsumableArray(x), [C], _toConsumableArray(C.children)), x;
              }, []) : [],
              F = I ? _this.applyMappedClasses(((_g$props3 = g.props) === null || _g$props3 === void 0 ? void 0 : _g$props3.children) || [], T) : (_g$props4 = g.props) === null || _g$props4 === void 0 ? void 0 : _g$props4.children,
              O = (_g$props$className = (_g$props5 = g.props) === null || _g$props5 === void 0 ? void 0 : _g$props5.className) !== null && _g$props$className !== void 0 ? _g$props$className : "",
              P = f ? "" + (O ? " " : "") + K(f) : "",
              U = "" + y.join(" ") + (y.length >= 1 && (O || P) ? " " : "");
            g.props = Object.assign({}, g.props, {
              children: F,
              className: U + O + P
            }), u[c] = g, d = u[c];
          };
          for (var c in u) {
            var _ret = _loop3();
            if (_ret === "continue") continue;
          }
          return u;
        }
      }, {
        key: "isTheSameType",
        value: function isTheSameType(n, i, l, u, c) {
          var _n$type;
          var d = (_n$type = n.type) === null || _n$type === void 0 ? void 0 : _n$type.includes(i),
            f = l.some(function (h) {
              var _n$type2;
              var S = (_n$type2 = n.type) === null || _n$type2 === void 0 ? void 0 : _n$type2.includes("." + h);
              return S && c && c(h), S;
            }),
            y = u.some(function (h) {
              var _n$type3;
              return (_n$type3 = n.type) === null || _n$type3 === void 0 ? void 0 : _n$type3.includes("#" + h);
            });
          return d || f || y;
        }
      }, {
        key: "children",
        value: function children(n) {
          var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var _this$getMapOfClasses = this.getMapOfClasses([], i),
            l = _this$getMapOfClasses.children,
            u = _this$getMapOfClasses.elementClassNames,
            c = [];
          if (n) for (var d in n) {
            var f = n[d];
            if (typeof f == "string") c.push(f);else if (f) {
              var y = this.applyMappedClasses(f, l);
              c = [].concat(_toConsumableArray(c), _toConsumableArray(y));
            } else c.push(f);
          }
          return {
            newClassNames: u,
            newChildren: c
          };
        }
      }]);
      return ae;
    }();
    var nr = Ke(Xe());
    function we(r) {
      var n = nr["default"].Children.toArray(r);
      for (var i in n) {
        var _n$i, _n$i$props, _n$i2, _n$i2$props;
        var l = n[i];
        typeof n[i] != "string" && typeof n[i] != "number" && ((_n$i = n[i]) === null || _n$i === void 0 ? void 0 : (_n$i$props = _n$i.props) === null || _n$i$props === void 0 ? void 0 : _n$i$props.children) && (l = Object.assign({}, l, {
          props: Object.assign({}, l.props, {
            children: we((_n$i2 = n[i]) === null || _n$i2 === void 0 ? void 0 : (_n$i2$props = _n$i2.props) === null || _n$i2$props === void 0 ? void 0 : _n$i2$props.children)
          })
        }), n[i] = l);
      }
      return n;
    }
    var ar = Ke(__webpack_require__("../../node_modules/.pnpm/path-browserify@1.0.1/node_modules/path-browserify/index.js"));
    function et(r) {
      var _r$cache, _r$cache$buildDepende;
      return r.cache = Object.assign({
        type: "memory"
      }, r === null || r === void 0 ? void 0 : r.cache, {
        buildDependencies: {
          config: [].concat(_toConsumableArray(r === null || r === void 0 ? void 0 : (_r$cache = r.cache) === null || _r$cache === void 0 ? void 0 : (_r$cache$buildDepende = _r$cache.buildDependencies) === null || _r$cache$buildDepende === void 0 ? void 0 : _r$cache$buildDepende.config), [ar["default"].resolve("tailwind.config.js")])
        }
      }), r;
    }
    function or(r) {
      return Object.assign({}, r, {
        webpack: function webpack(n, i) {
          return n = et(n), typeof r.webpack == "function" ? r.webpack(n, i) : n;
        }
      });
    }
    function Ln(r) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var l = i !== null && i !== void 0 && i.variants ? Object.entries(i === null || i === void 0 ? void 0 : i.variants).reduce(function (d, _ref5) {
        var _ref6 = _slicedToArray(_ref5, 1),
          f = _ref6[0];
        return d.push(f), d;
      }, []) : [];
      function u(d) {
        var _Object$entries$reduc = Object.entries(d).reduce(function (T, _ref7) {
            var _Object$assign, _Object$assign2;
            var _ref8 = _slicedToArray(_ref7, 2),
              F = _ref8[0],
              O = _ref8[1];
            return l.includes(F) ? Object.assign(T.variants, (_Object$assign = {}, _Object$assign[F] = O, _Object$assign)) : (F === "children" && (O = we(O)), Object.assign(T.elementProps, (_Object$assign2 = {}, _Object$assign2[F] = O, _Object$assign2))), T;
          }, {
            elementProps: {},
            variants: Object.assign({}, (i === null || i === void 0 ? void 0 : i.defaultVariants) || {})
          }),
          f = _Object$entries$reduc.elementProps,
          y = _Object$entries$reduc.variants,
          h = Qe(n, y, (i === null || i === void 0 ? void 0 : i.variants) || {}),
          S = f !== null && f !== void 0 && f.className ? "" + (h ? " " : "") + K(f === null || f === void 0 ? void 0 : f.className) : "",
          g = h + S,
          I = f === null || f === void 0 ? void 0 : f.children;
        if (g.includes("{") && g.includes("}")) {
          var _ae$children = ae.children(I, g),
            T = _ae$children.newChildren,
            F = _ae$children.newClassNames;
          I = T, g = F;
        }
        return (0, tt.createElement)(r, Object.assign({}, f, {
          className: g
        }), I);
      }
      function c(d) {
        var f = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var h = Ze(i, y),
          S = h !== null && h !== void 0 && h.variants ? Object.entries(h === null || h === void 0 ? void 0 : h.variants).reduce(function (I, _ref9) {
            var _ref10 = _slicedToArray(_ref9, 1),
              T = _ref10[0];
            return I.push(T), I;
          }, []) : [];
        function g(I) {
          var _Object$entries$reduc2 = Object.entries(I).reduce(function (C, _ref11) {
              var _Object$assign3, _Object$assign4;
              var _ref12 = _slicedToArray(_ref11, 2),
                A = _ref12[0],
                j = _ref12[1];
              return S.includes(A) ? Object.assign(C.variants, (_Object$assign3 = {}, _Object$assign3[A] = String(j), _Object$assign3)) : (A === "children" && (j = we(j)), Object.assign(C.elementProps, (_Object$assign4 = {}, _Object$assign4[A] = j, _Object$assign4))), C;
            }, {
              elementProps: {},
              variants: Object.assign({}, (h === null || h === void 0 ? void 0 : h.defaultVariants) || {})
            }),
            T = _Object$entries$reduc2.elementProps,
            F = _Object$entries$reduc2.variants,
            O = Qe(n + (n ? " " : "") + f, F, (h === null || h === void 0 ? void 0 : h.variants) || {}),
            P = T !== null && T !== void 0 && T.className ? "" + (O ? " " : "") + K(T === null || T === void 0 ? void 0 : T.className) : "",
            U = O + P,
            x = T === null || T === void 0 ? void 0 : T.children;
          if (U.includes("{") && U.includes("}")) {
            var _ae$children2 = ae.children(x, U),
              C = _ae$children2.newChildren,
              A = _ae$children2.newClassNames;
            x = C, U = A;
          }
          return (0, tt.createElement)(d !== null && d !== void 0 ? d : r, Object.assign({}, T, {
            className: U
          }), x);
        }
        return Object.assign(g, {
          __extends: c
        });
      }
      return Object.assign(u, {
        __extends: c
      });
    }
  }
});

// ../../node_modules/.pnpm/tailwind-factory@2.3.6/node_modules/tailwind-factory/index.js
var require_tailwind_factory = __commonJS({
  "../../node_modules/.pnpm/tailwind-factory@2.3.6/node_modules/tailwind-factory/index.js": function node_modulesPnpmTailwindFactory236Node_modulesTailwindFactoryIndexJs(exports, module2) {
    module2.exports = require_dist();
  }
});

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  createLanguagePlugin: function createLanguagePlugin() {
    return _createLanguagePlugin;
  },
  "default": function _default() {
    return Highlight2;
  },
  themes: function themes() {
    return themes_default;
  }
});
module.exports = __toCommonJS(src_exports);

// #style-inject:#style-inject
function styleInject(css) {
  var _ref13 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    insertAt = _ref13.insertAt;
  if (!css || typeof document === "undefined") return;
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

// src/themes/global.css
styleInject('*,\n::before,\n::after {\n  box-sizing: border-box;\n  border-width: 0;\n  border-style: solid;\n  border-color: #e5e7eb;\n}\n::before,\n::after {\n  --tw-content: "";\n}\nhtml {\n  line-height: 1.5;\n  -webkit-text-size-adjust: 100%;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  font-family:\n    ui-sans-serif,\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    "Noto Sans",\n    sans-serif,\n    "Apple Color Emoji",\n    "Segoe UI Emoji",\n    "Segoe UI Symbol",\n    "Noto Color Emoji";\n  font-feature-settings: normal;\n}\nbody {\n  margin: 0;\n  line-height: inherit;\n}\nhr {\n  height: 0;\n  color: inherit;\n  border-top-width: 1px;\n}\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\na {\n  color: inherit;\n  text-decoration: inherit;\n}\nb,\nstrong {\n  font-weight: bolder;\n}\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 1em;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\ntable {\n  text-indent: 0;\n  border-color: inherit;\n  border-collapse: collapse;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  font-weight: inherit;\n  line-height: inherit;\n  color: inherit;\n  margin: 0;\n  padding: 0;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n  background-color: transparent;\n  background-image: none;\n}\n:-moz-focusring {\n  outline: auto;\n}\n:-moz-ui-invalid {\n  box-shadow: none;\n}\nprogress {\n  vertical-align: baseline;\n}\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\nsummary {\n  display: list-item;\n}\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nlegend {\n  padding: 0;\n}\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\ntextarea {\n  resize: vertical;\n}\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\nbutton,\n[role=button] {\n  cursor: pointer;\n}\n:disabled {\n  cursor: default;\n}\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n[hidden] {\n  display: none;\n}\n* {\n  scrollbar-color: initial;\n  scrollbar-width: initial;\n}\n*,\n::before,\n::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x: ;\n  --tw-pan-y: ;\n  --tw-pinch-zoom: ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal: ;\n  --tw-slashed-zero: ;\n  --tw-numeric-figure: ;\n  --tw-numeric-spacing: ;\n  --tw-numeric-fraction: ;\n  --tw-ring-inset: ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur: ;\n  --tw-brightness: ;\n  --tw-contrast: ;\n  --tw-grayscale: ;\n  --tw-hue-rotate: ;\n  --tw-invert: ;\n  --tw-saturate: ;\n  --tw-sepia: ;\n  --tw-drop-shadow: ;\n  --tw-backdrop-blur: ;\n  --tw-backdrop-brightness: ;\n  --tw-backdrop-contrast: ;\n  --tw-backdrop-grayscale: ;\n  --tw-backdrop-hue-rotate: ;\n  --tw-backdrop-invert: ;\n  --tw-backdrop-opacity: ;\n  --tw-backdrop-saturate: ;\n  --tw-backdrop-sepia: ;\n}\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x: ;\n  --tw-pan-y: ;\n  --tw-pinch-zoom: ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal: ;\n  --tw-slashed-zero: ;\n  --tw-numeric-figure: ;\n  --tw-numeric-spacing: ;\n  --tw-numeric-fraction: ;\n  --tw-ring-inset: ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur: ;\n  --tw-brightness: ;\n  --tw-contrast: ;\n  --tw-grayscale: ;\n  --tw-hue-rotate: ;\n  --tw-invert: ;\n  --tw-saturate: ;\n  --tw-sepia: ;\n  --tw-drop-shadow: ;\n  --tw-backdrop-blur: ;\n  --tw-backdrop-brightness: ;\n  --tw-backdrop-contrast: ;\n  --tw-backdrop-grayscale: ;\n  --tw-backdrop-hue-rotate: ;\n  --tw-backdrop-invert: ;\n  --tw-backdrop-opacity: ;\n  --tw-backdrop-saturate: ;\n  --tw-backdrop-sepia: ;\n}\n.highlight-tokens .token-line:has(.deleted:not(:empty)) {\n  background-color: rgb(209, 105, 105, .2) !important;\n}\n.highlight-tokens .token-line:has(.deleted:not(:empty)) .deleted:not(:empty) {\n  color: rgb(209, 154, 102) !important;\n}\n.highlight-tokens .token-line:has(.inserted:not(:empty)) {\n  background-color: rgb(181, 206, 168, .2) !important;\n}\n.highlight-tokens .token-line:has(.inserted:not(:empty)) .inserted:not(:empty) {\n  color: rgb(152, 195, 121) !important;\n}\n.relative {\n  position: relative;\n}\n.z-10 {\n  z-index: 10;\n}\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.h-\\[24px\\] {\n  height: 24px;\n}\n.w-full {\n  width: 100%;\n}\n.w-min {\n  width: -moz-min-content;\n  width: min-content;\n}\n.min-w-min {\n  min-width: -moz-min-content;\n  min-width: min-content;\n}\n.select-none {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n.gap-0 {\n  gap: 0px;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-x-auto {\n  overflow-x: auto;\n}\n.overflow-y-hidden {\n  overflow-y: hidden;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.border-r-\\[3px\\] {\n  border-right-width: 3px;\n}\n.border-solid {\n  border-style: solid;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.pr-10 {\n  padding-right: 2.5rem;\n}\n.pl-3 {\n  padding-left: 0.75rem;\n}\n.pt-2 {\n  padding-top: 0.5rem;\n}\n.pb-3 {\n  padding-bottom: 0.75rem;\n}\n.pt-\\[2\\.5px\\] {\n  padding-top: 2.5px;\n}\n.font-code {\n  font-family: Source Code Pro, monospace;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.scrollbar.overflow-y-hidden {\n  overflow-y: hidden;\n}\n.scrollbar-thin {\n  --scrollbar-track: initial;\n  --scrollbar-thumb: initial;\n  --scrollbar-corner: initial;\n  --scrollbar-track-hover: var(--scrollbar-track);\n  --scrollbar-thumb-hover: var(--scrollbar-thumb);\n  --scrollbar-corner-hover: var(--scrollbar-corner);\n  --scrollbar-track-active: var(--scrollbar-track-hover);\n  --scrollbar-thumb-active: var(--scrollbar-thumb-hover);\n  --scrollbar-corner-active: var(--scrollbar-corner-hover);\n  scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);\n  overflow: overlay;\n}\n.scrollbar-thin.overflow-x-hidden {\n  overflow-x: hidden;\n}\n.scrollbar-thin.overflow-y-hidden {\n  overflow-y: hidden;\n}\n.scrollbar-thin::-webkit-scrollbar-track {\n  background-color: var(--scrollbar-track);\n}\n.scrollbar-thin::-webkit-scrollbar-thumb {\n  background-color: var(--scrollbar-thumb);\n}\n.scrollbar-thin::-webkit-scrollbar-corner {\n  background-color: var(--scrollbar-corner);\n}\n.scrollbar-thin::-webkit-scrollbar-track:hover {\n  background-color: var(--scrollbar-track-hover);\n}\n.scrollbar-thin::-webkit-scrollbar-thumb:hover {\n  background-color: var(--scrollbar-thumb-hover);\n}\n.scrollbar-thin::-webkit-scrollbar-corner:hover {\n  background-color: var(--scrollbar-corner-hover);\n}\n.scrollbar-thin::-webkit-scrollbar-track:active {\n  background-color: var(--scrollbar-track-active);\n}\n.scrollbar-thin::-webkit-scrollbar-thumb:active {\n  background-color: var(--scrollbar-thumb-active);\n}\n.scrollbar-thin::-webkit-scrollbar-corner:active {\n  background-color: var(--scrollbar-corner-active);\n}\n.scrollbar-thin {\n  scrollbar-width: thin;\n}\n.scrollbar-thin::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n');

// src/themes/code.css
styleInject('@import "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Source+Code+Pro&display=swap";\n');

// ../../node_modules/.pnpm/prism-react-renderer@1.3.5_react@18.2.0/node_modules/prism-react-renderer/prism/index.js
var Prism = function () {
  var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
  var uniqueId = 0;
  var plainTextGrammar = {};
  var _ = {
    util: {
      encode: function encode(tokens) {
        if (tokens instanceof Token) {
          return new Token(tokens.type, encode(tokens.content), tokens.alias);
        } else if (Array.isArray(tokens)) {
          return tokens.map(encode);
        } else {
          return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        }
      },
      type: function type(o) {
        return Object.prototype.toString.call(o).slice(8, -1);
      },
      objId: function objId(obj) {
        if (!obj["__id"]) {
          Object.defineProperty(obj, "__id", {
            value: ++uniqueId
          });
        }
        return obj["__id"];
      },
      clone: function deepClone(o, visited) {
        visited = visited || {};
        var clone;
        var id;
        switch (_.util.type(o)) {
          case "Object":
            id = _.util.objId(o);
            if (visited[id]) {
              return visited[id];
            }
            clone = {};
            visited[id] = clone;
            for (var key in o) {
              if (o.hasOwnProperty(key)) {
                clone[key] = deepClone(o[key], visited);
              }
            }
            return clone;
          case "Array":
            id = _.util.objId(o);
            if (visited[id]) {
              return visited[id];
            }
            clone = [];
            visited[id] = clone;
            o.forEach(function (v, i) {
              clone[i] = deepClone(v, visited);
            });
            return clone;
          default:
            return o;
        }
      },
      getLanguage: function getLanguage(element) {
        while (element) {
          var m = lang.exec(element.className);
          if (m) {
            return m[1].toLowerCase();
          }
          element = element.parentElement;
        }
        return "none";
      },
      setLanguage: function setLanguage(element, language) {
        element.className = element.className.replace(RegExp(lang, "gi"), "");
        element.classList.add("language-" + language);
      },
      isActive: function isActive(element, className, defaultActivation) {
        var no = "no-" + className;
        while (element) {
          var classList = element.classList;
          if (classList.contains(className)) {
            return true;
          }
          if (classList.contains(no)) {
            return false;
          }
          element = element.parentElement;
        }
        return !!defaultActivation;
      }
    },
    languages: {
      plain: plainTextGrammar,
      plaintext: plainTextGrammar,
      text: plainTextGrammar,
      txt: plainTextGrammar,
      extend: function extend(id, redef) {
        var lang2 = _.util.clone(_.languages[id]);
        for (var key in redef) {
          lang2[key] = redef[key];
        }
        return lang2;
      },
      insertBefore: function insertBefore(inside, before, insert, root) {
        root = root || _.languages;
        var grammar = root[inside];
        var ret = {};
        for (var token in grammar) {
          if (grammar.hasOwnProperty(token)) {
            if (token == before) {
              for (var newToken in insert) {
                if (insert.hasOwnProperty(newToken)) {
                  ret[newToken] = insert[newToken];
                }
              }
            }
            if (!insert.hasOwnProperty(token)) {
              ret[token] = grammar[token];
            }
          }
        }
        var old = root[inside];
        root[inside] = ret;
        _.languages.DFS(_.languages, function (key, value) {
          if (value === old && key != inside) {
            this[key] = ret;
          }
        });
        return ret;
      },
      DFS: function DFS(o, callback, type, visited) {
        visited = visited || {};
        var objId = _.util.objId;
        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            callback.call(o, i, o[i], type || i);
            var property = o[i];
            var propertyType = _.util.type(property);
            if (propertyType === "Object" && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, null, visited);
            } else if (propertyType === "Array" && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, i, visited);
            }
          }
        }
      }
    },
    plugins: {},
    highlight: function highlight(text, grammar, language) {
      var env = {
        code: text,
        grammar: grammar,
        language: language
      };
      _.hooks.run("before-tokenize", env);
      env.tokens = _.tokenize(env.code, env.grammar);
      _.hooks.run("after-tokenize", env);
      return Token.stringify(_.util.encode(env.tokens), env.language);
    },
    tokenize: function tokenize(text, grammar) {
      var rest = grammar.rest;
      if (rest) {
        for (var token in rest) {
          grammar[token] = rest[token];
        }
        delete grammar.rest;
      }
      var tokenList = new LinkedList();
      addAfter(tokenList, tokenList.head, text);
      matchGrammar(text, tokenList, grammar, tokenList.head, 0);
      return toArray(tokenList);
    },
    hooks: {
      all: {},
      add: function add(name, callback) {
        var hooks = _.hooks.all;
        hooks[name] = hooks[name] || [];
        hooks[name].push(callback);
      },
      run: function run(name, env) {
        var callbacks = _.hooks.all[name];
        if (!callbacks || !callbacks.length) {
          return;
        }
        for (var i = 0, callback; callback = callbacks[i++];) {
          callback(env);
        }
      }
    },
    Token: Token
  };
  function Token(type, content, alias, matchedStr) {
    this.type = type;
    this.content = content;
    this.alias = alias;
    this.length = (matchedStr || "").length | 0;
  }
  Token.stringify = function stringify(o, language) {
    if (typeof o == "string") {
      return o;
    }
    if (Array.isArray(o)) {
      var s = "";
      o.forEach(function (e) {
        s += stringify(e, language);
      });
      return s;
    }
    var env = {
      type: o.type,
      content: stringify(o.content, language),
      tag: "span",
      classes: ["token", o.type],
      attributes: {},
      language: language
    };
    var aliases = o.alias;
    if (aliases) {
      if (Array.isArray(aliases)) {
        Array.prototype.push.apply(env.classes, aliases);
      } else {
        env.classes.push(aliases);
      }
    }
    _.hooks.run("wrap", env);
    var attributes = "";
    for (var name in env.attributes) {
      attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
    }
    return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
  };
  function matchPattern(pattern, pos, text, lookbehind) {
    pattern.lastIndex = pos;
    var match = pattern.exec(text);
    if (match && lookbehind && match[1]) {
      var lookbehindLength = match[1].length;
      match.index += lookbehindLength;
      match[0] = match[0].slice(lookbehindLength);
    }
    return match;
  }
  function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
    for (var token in grammar) {
      if (!grammar.hasOwnProperty(token) || !grammar[token]) {
        continue;
      }
      var patterns = grammar[token];
      patterns = Array.isArray(patterns) ? patterns : [patterns];
      for (var j = 0; j < patterns.length; ++j) {
        if (rematch && rematch.cause == token + "," + j) {
          return;
        }
        var patternObj = patterns[j];
        var inside = patternObj.inside;
        var lookbehind = !!patternObj.lookbehind;
        var greedy = !!patternObj.greedy;
        var alias = patternObj.alias;
        if (greedy && !patternObj.pattern.global) {
          var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
          patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
        }
        var pattern = patternObj.pattern || patternObj;
        for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
          if (rematch && pos >= rematch.reach) {
            break;
          }
          var str = currentNode.value;
          if (tokenList.length > text.length) {
            return;
          }
          if (str instanceof Token) {
            continue;
          }
          var removeCount = 1;
          var match;
          if (greedy) {
            match = matchPattern(pattern, pos, text, lookbehind);
            if (!match || match.index >= text.length) {
              break;
            }
            var from = match.index;
            var to = match.index + match[0].length;
            var p = pos;
            p += currentNode.value.length;
            while (from >= p) {
              currentNode = currentNode.next;
              p += currentNode.value.length;
            }
            p -= currentNode.value.length;
            pos = p;
            if (currentNode.value instanceof Token) {
              continue;
            }
            for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
              removeCount++;
              p += k.value.length;
            }
            removeCount--;
            str = text.slice(pos, p);
            match.index -= pos;
          } else {
            match = matchPattern(pattern, 0, str, lookbehind);
            if (!match) {
              continue;
            }
          }
          var from = match.index;
          var matchStr = match[0];
          var before = str.slice(0, from);
          var after = str.slice(from + matchStr.length);
          var reach = pos + str.length;
          if (rematch && reach > rematch.reach) {
            rematch.reach = reach;
          }
          var removeFrom = currentNode.prev;
          if (before) {
            removeFrom = addAfter(tokenList, removeFrom, before);
            pos += before.length;
          }
          removeRange(tokenList, removeFrom, removeCount);
          var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
          currentNode = addAfter(tokenList, removeFrom, wrapped);
          if (after) {
            addAfter(tokenList, currentNode, after);
          }
          if (removeCount > 1) {
            var nestedRematch = {
              cause: token + "," + j,
              reach: reach
            };
            matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
            if (rematch && nestedRematch.reach > rematch.reach) {
              rematch.reach = nestedRematch.reach;
            }
          }
        }
      }
    }
  }
  function LinkedList() {
    var head = {
      value: null,
      prev: null,
      next: null
    };
    var tail = {
      value: null,
      prev: head,
      next: null
    };
    head.next = tail;
    this.head = head;
    this.tail = tail;
    this.length = 0;
  }
  function addAfter(list, node, value) {
    var next = node.next;
    var newNode = {
      value: value,
      prev: node,
      next: next
    };
    node.next = newNode;
    next.prev = newNode;
    list.length++;
    return newNode;
  }
  function removeRange(list, node, count) {
    var next = node.next;
    for (var i = 0; i < count && next !== list.tail; i++) {
      next = next.next;
    }
    node.next = next;
    next.prev = node;
    list.length -= i;
  }
  function toArray(list) {
    var array = [];
    var node = list.head.next;
    while (node !== list.tail) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  }
  return _;
}();
var prism = Prism;
Prism["default"] = Prism;
prism.languages.markup = {
  "comment": {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: true
  },
  "prolog": {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: true
  },
  "doctype": {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: true,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: true,
        greedy: true,
        inside: null
      },
      "string": {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      "punctuation": /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      "name": /[^\s<>'"]+/
    }
  },
  "cdata": {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: true
  },
  "tag": {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: true,
    inside: {
      "tag": {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          "punctuation": /^<\/?/,
          "namespace": /^[^\s>\/:]+:/
        }
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          "punctuation": [{
            pattern: /^=/,
            alias: "attr-equals"
          }, /"|'/]
        }
      },
      "punctuation": /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          "namespace": /^[^\s>\/:]+:/
        }
      }
    }
  },
  "entity": [{
    pattern: /&[\da-z]{1,8};/i,
    alias: "named-entity"
  }, /&#x?[\da-f]{1,8};/i]
};
prism.languages.markup["tag"].inside["attr-value"].inside["entity"] = prism.languages.markup["entity"];
prism.languages.markup["doctype"].inside["internal-subset"].inside = prism.languages.markup;
prism.hooks.add("wrap", function (env) {
  if (env.type === "entity") {
    env.attributes["title"] = env.content.replace(/&amp;/, "&");
  }
});
Object.defineProperty(prism.languages.markup.tag, "addInlined", {
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside["language-" + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: prism.languages[lang]
    };
    includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside["language-" + lang] = {
      pattern: /[\s\S]+/,
      inside: prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
        return tagName;
      }), "i"),
      lookbehind: true,
      greedy: true,
      inside: inside
    };
    prism.languages.insertBefore("markup", "cdata", def);
  }
});
Object.defineProperty(prism.languages.markup.tag, "addAttribute", {
  value: function value(attrName, lang) {
    prism.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
      lookbehind: true,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            "value": {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: true,
              alias: [lang, "language-" + lang],
              inside: prism.languages[lang]
            },
            "punctuation": [{
              pattern: /^=/,
              alias: "attr-equals"
            }, /"|'/]
          }
        }
      }
    });
  }
});
prism.languages.html = prism.languages.markup;
prism.languages.mathml = prism.languages.markup;
prism.languages.svg = prism.languages.markup;
prism.languages.xml = prism.languages.extend("markup", {});
prism.languages.ssml = prism.languages.xml;
prism.languages.atom = prism.languages.xml;
prism.languages.rss = prism.languages.xml;
(function (Prism2) {
  var envVars = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b";
  var commandAfterHeredoc = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: true,
    alias: "punctuation",
    inside: null
  };
  var insideString = {
    "bash": commandAfterHeredoc,
    "environment": {
      pattern: RegExp("\\$" + envVars),
      alias: "constant"
    },
    "variable": [{
      pattern: /\$?\(\([\s\S]+?\)\)/,
      greedy: true,
      inside: {
        "variable": [{
          pattern: /(^\$\(\([\s\S]+)\)\)/,
          lookbehind: true
        }, /^\$\(\(/],
        "number": /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
        "operator": /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
        "punctuation": /\(\(?|\)\)?|,|;/
      }
    }, {
      pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
      greedy: true,
      inside: {
        "variable": /^\$\(|^`|\)$|`$/
      }
    }, {
      pattern: /\$\{[^}]+\}/,
      greedy: true,
      inside: {
        "operator": /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
        "punctuation": /[\[\]]/,
        "environment": {
          pattern: RegExp("(\\{)" + envVars),
          lookbehind: true,
          alias: "constant"
        }
      }
    }, /\$(?:\w+|[#?*!@$])/],
    "entity": /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  Prism2.languages.bash = {
    "shebang": {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    "comment": {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: true
    },
    "function-name": [{
      pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
      lookbehind: true,
      alias: "function"
    }, {
      pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
      alias: "function"
    }],
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: true
    },
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        "environment": {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
          lookbehind: true,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: true
    },
    "string": [{
      pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, {
      pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
      lookbehind: true,
      greedy: true,
      inside: {
        "bash": commandAfterHeredoc
      }
    }, {
      pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, {
      pattern: /(^|[^$\\])'[^']*'/,
      lookbehind: true,
      greedy: true
    }, {
      pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
      greedy: true,
      inside: {
        "entity": insideString.entity
      }
    }],
    "environment": {
      pattern: RegExp("\\$?" + envVars),
      alias: "constant"
    },
    "variable": insideString.variable,
    "function": {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    "keyword": {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    "builtin": {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: true,
      alias: "class-name"
    },
    "boolean": {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    "operator": {
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    "punctuation": /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    "number": {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: true
    }
  };
  commandAfterHeredoc.inside = Prism2.languages.bash;
  var toBeCopied = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"];
  var inside = insideString.variable[1].inside;
  for (var i = 0; i < toBeCopied.length; i++) {
    inside[toBeCopied[i]] = Prism2.languages.bash[toBeCopied[i]];
  }
  Prism2.languages.shell = Prism2.languages.bash;
})(prism);
prism.languages.clike = {
  "comment": [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true,
    greedy: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  "string": {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  "class-name": {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      "punctuation": /[.\\]/
    }
  },
  "keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  "boolean": /\b(?:false|true)\b/,
  "function": /\b\w+(?=\()/,
  "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  "punctuation": /[{}[\];(),.:]/
};
prism.languages.c = prism.languages.extend("clike", {
  "comment": {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  "string": {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: true
  },
  "keyword": /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  "function": /\b[a-z_]\w*(?=\s*\()/i,
  "number": /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  "operator": />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
prism.languages.insertBefore("c", "string", {
  "char": {
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: true
  }
});
prism.languages.insertBefore("c", "string", {
  "macro": {
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: true,
    greedy: true,
    alias: "property",
    inside: {
      "string": [{
        pattern: /^(#\s*include\s*)<[^>]+>/,
        lookbehind: true
      }, prism.languages.c["string"]],
      "char": prism.languages.c["char"],
      "comment": prism.languages.c["comment"],
      "macro-name": [{
        pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
        lookbehind: true
      }, {
        pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
        lookbehind: true,
        alias: "function"
      }],
      "directive": {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: true,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      "punctuation": /##|\\(?=[\r\n])/,
      "expression": {
        pattern: /\S[\s\S]*/,
        inside: prism.languages.c
      }
    }
  }
});
prism.languages.insertBefore("c", "function", {
  "constant": /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete prism.languages.c["boolean"];
(function (Prism2) {
  var keyword = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
  var modName = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function () {
    return keyword.source;
  });
  Prism2.languages.cpp = Prism2.languages.extend("c", {
    "class-name": [{
      pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function () {
        return keyword.source;
      })),
      lookbehind: true
    }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
    "keyword": keyword,
    "number": {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: true
    },
    "operator": />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    "boolean": /\b(?:false|true)\b/
  });
  Prism2.languages.insertBefore("cpp", "string", {
    "module": {
      pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function () {
        return modName;
      }) + ")"),
      lookbehind: true,
      greedy: true,
      inside: {
        "string": /^[<"][\s\S]+/,
        "operator": /:/,
        "punctuation": /\./
      }
    },
    "raw-string": {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: "string",
      greedy: true
    }
  });
  Prism2.languages.insertBefore("cpp", "keyword", {
    "generic-function": {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        "function": /^\w+/,
        "generic": {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: Prism2.languages.cpp
        }
      }
    }
  });
  Prism2.languages.insertBefore("cpp", "operator", {
    "double-colon": {
      pattern: /::/,
      alias: "punctuation"
    }
  });
  Prism2.languages.insertBefore("cpp", "class-name", {
    "base-clause": {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: true,
      greedy: true,
      inside: Prism2.languages.extend("cpp", {})
    }
  });
  Prism2.languages.insertBefore("inside", "double-colon", {
    "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
  }, Prism2.languages.cpp["base-clause"]);
})(prism);
(function (Prism2) {
  var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  Prism2.languages.css = {
    "comment": /\/\*[\s\S]*?\*\//,
    "atrule": {
      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
      inside: {
        "rule": /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: true,
          alias: "selector"
        },
        "keyword": {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: true
        }
      }
    },
    "url": {
      pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: true,
      inside: {
        "function": /^url/i,
        "punctuation": /^\(|\)$/,
        "string": {
          pattern: RegExp("^" + string.source + "$"),
          alias: "url"
        }
      }
    },
    "selector": {
      pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + string.source + ")*(?=\\s*\\{)"),
      lookbehind: true
    },
    "string": {
      pattern: string,
      greedy: true
    },
    "property": {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: true
    },
    "important": /!important\b/i,
    "function": {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: true
    },
    "punctuation": /[(){};:,]/
  };
  Prism2.languages.css["atrule"].inside.rest = Prism2.languages.css;
  var markup = Prism2.languages.markup;
  if (markup) {
    markup.tag.addInlined("style", "css");
    markup.tag.addAttribute("style", "css");
  }
})(prism);
(function (Prism2) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  var selectorInside;
  Prism2.languages.css.selector = {
    pattern: Prism2.languages.css.selector.pattern,
    lookbehind: true,
    inside: selectorInside = {
      "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+/,
      "class": /\.[-\w]+/,
      "id": /#[-\w]+/,
      "attribute": {
        pattern: RegExp("\\[(?:[^[\\]\"']|" + string.source + ")*\\]"),
        greedy: true,
        inside: {
          "punctuation": /^\[|\]$/,
          "case-sensitivity": {
            pattern: /(\s)[si]$/i,
            lookbehind: true,
            alias: "keyword"
          },
          "namespace": {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: true,
            inside: {
              "punctuation": /\|$/
            }
          },
          "attr-name": {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: true
          },
          "attr-value": [string, {
            pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
            lookbehind: true
          }],
          "operator": /[|~*^$]?=/
        }
      },
      "n-th": [{
        pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
        lookbehind: true,
        inside: {
          "number": /[\dn]+/,
          "operator": /[+-]/
        }
      }, {
        pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
        lookbehind: true
      }],
      "combinator": />|\+|~|\|\|/,
      "punctuation": /[(),]/
    }
  };
  Prism2.languages.css["atrule"].inside["selector-function-argument"].inside = selectorInside;
  Prism2.languages.insertBefore("css", "property", {
    "variable": {
      pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
      lookbehind: true
    }
  });
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
    lookbehind: true
  };
  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  Prism2.languages.insertBefore("css", "function", {
    "operator": {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: true
    },
    "hexcode": {
      pattern: /\B#[\da-f]{3,8}\b/i,
      alias: "color"
    },
    "color": [{
      pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
      lookbehind: true
    }, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        "unit": unit,
        "number": number,
        "function": /[\w-]+(?=\()/,
        "punctuation": /[(),]/
      }
    }],
    "entity": /\\[\da-f]{1,8}/i,
    "unit": unit,
    "number": number
  });
})(prism);
prism.languages.javascript = prism.languages.extend("clike", {
  "class-name": [prism.languages.clike["class-name"], {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
    lookbehind: true
  }],
  "keyword": [{
    pattern: /((?:^|\})\s*)catch\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  "number": {
    pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
    lookbehind: true
  },
  "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
prism.languages.insertBefore("javascript", "keyword", {
  "regex": {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: true,
    greedy: true,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: true,
        alias: "language-regex",
        inside: prism.languages.regex
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/
    }
  },
  "function-variable": {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function"
  },
  "parameter": [{
    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: prism.languages.javascript
  }],
  "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
prism.languages.insertBefore("javascript", "string", {
  "hashbang": {
    pattern: /^#!.*/,
    greedy: true,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: true,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      "interpolation": {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: true,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: prism.languages.javascript
        }
      },
      "string": /[\s\S]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: true,
    greedy: true,
    alias: "property"
  }
});
prism.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: true,
    alias: "property"
  }
});
if (prism.languages.markup) {
  prism.languages.markup.tag.addInlined("script", "javascript");
  prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
}
prism.languages.js = prism.languages.javascript;
(function (Prism2) {
  var comment = /#(?!\{).+/;
  var interpolation = {
    pattern: /#\{[^}]+\}/,
    alias: "variable"
  };
  Prism2.languages.coffeescript = Prism2.languages.extend("javascript", {
    "comment": comment,
    "string": [{
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      greedy: true
    }, {
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      greedy: true,
      inside: {
        "interpolation": interpolation
      }
    }],
    "keyword": /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    "class-member": {
      pattern: /@(?!\d)\w+/,
      alias: "variable"
    }
  });
  Prism2.languages.insertBefore("coffeescript", "comment", {
    "multiline-comment": {
      pattern: /###[\s\S]+?###/,
      alias: "comment"
    },
    "block-regex": {
      pattern: /\/{3}[\s\S]*?\/{3}/,
      alias: "regex",
      inside: {
        "comment": comment,
        "interpolation": interpolation
      }
    }
  });
  Prism2.languages.insertBefore("coffeescript", "string", {
    "inline-javascript": {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      inside: {
        "delimiter": {
          pattern: /^`|`$/,
          alias: "punctuation"
        },
        "script": {
          pattern: /[\s\S]+/,
          alias: "language-javascript",
          inside: Prism2.languages.javascript
        }
      }
    },
    "multiline-string": [{
      pattern: /'''[\s\S]*?'''/,
      greedy: true,
      alias: "string"
    }, {
      pattern: /"""[\s\S]*?"""/,
      greedy: true,
      alias: "string",
      inside: {
        interpolation: interpolation
      }
    }]
  });
  Prism2.languages.insertBefore("coffeescript", "keyword", {
    "property": /(?!\d)\w+(?=\s*:(?!:))/
  });
  delete Prism2.languages.coffeescript["template-string"];
  Prism2.languages.coffee = Prism2.languages.coffeescript;
})(prism);
(function (Prism2) {
  var anchorOrAlias = /[*&][^\s[\]{},]+/;
  var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/;
  var properties = "(?:" + tag.source + "(?:[ 	]+" + anchorOrAlias.source + ")?|" + anchorOrAlias.source + "(?:[ 	]+" + tag.source + ")?)";
  var plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function () {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  });
  var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  function createValuePattern(value, flags) {
    flags = (flags || "").replace(/m/g, "") + "m";
    var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function () {
      return properties;
    }).replace(/<<value>>/g, function () {
      return value;
    });
    return RegExp(pattern, flags);
  }
  Prism2.languages.yaml = {
    "scalar": {
      pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function () {
        return properties;
      })),
      lookbehind: true,
      alias: "string"
    },
    "comment": /#.*/,
    "key": {
      pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function () {
        return properties;
      }).replace(/<<key>>/g, function () {
        return "(?:" + plainKey + "|" + string + ")";
      })),
      lookbehind: true,
      greedy: true,
      alias: "atrule"
    },
    "directive": {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: true,
      alias: "important"
    },
    "datetime": {
      pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
      lookbehind: true,
      alias: "number"
    },
    "boolean": {
      pattern: createValuePattern(/false|true/.source, "i"),
      lookbehind: true,
      alias: "important"
    },
    "null": {
      pattern: createValuePattern(/null|~/.source, "i"),
      lookbehind: true,
      alias: "important"
    },
    "string": {
      pattern: createValuePattern(string),
      lookbehind: true,
      greedy: true
    },
    "number": {
      pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
      lookbehind: true
    },
    "tag": tag,
    "important": anchorOrAlias,
    "punctuation": /---|[:[\]{}\-,|>?]|\.\.\./
  };
  Prism2.languages.yml = Prism2.languages.yaml;
})(prism);
(function (Prism2) {
  var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function createInline(pattern) {
    pattern = pattern.replace(/<inner>/g, function () {
      return inner;
    });
    return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + pattern + ")");
  }
  var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
  var tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
    return tableCell;
  });
  var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  Prism2.languages.markdown = Prism2.languages.extend("markup", {});
  Prism2.languages.insertBefore("markdown", "prolog", {
    "front-matter-block": {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: true,
      greedy: true,
      inside: {
        "punctuation": /^---|---$/,
        "front-matter": {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ["yaml", "language-yaml"],
          inside: Prism2.languages.yaml
        }
      }
    },
    "blockquote": {
      pattern: /^>(?:[\t ]*>)*/m,
      alias: "punctuation"
    },
    "table": {
      pattern: RegExp("^" + tableRow + tableLine + "(?:" + tableRow + ")*", "m"),
      inside: {
        "table-data-rows": {
          pattern: RegExp("^(" + tableRow + tableLine + ")(?:" + tableRow + ")*$"),
          lookbehind: true,
          inside: {
            "table-data": {
              pattern: RegExp(tableCell),
              inside: Prism2.languages.markdown
            },
            "punctuation": /\|/
          }
        },
        "table-line": {
          pattern: RegExp("^(" + tableRow + ")" + tableLine + "$"),
          lookbehind: true,
          inside: {
            "punctuation": /\||:?-{3,}:?/
          }
        },
        "table-header-row": {
          pattern: RegExp("^" + tableRow + "$"),
          inside: {
            "table-header": {
              pattern: RegExp(tableCell),
              alias: "important",
              inside: Prism2.languages.markdown
            },
            "punctuation": /\|/
          }
        }
      }
    },
    "code": [{
      pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
      lookbehind: true,
      alias: "keyword"
    }, {
      pattern: /^```[\s\S]*?^```$/m,
      greedy: true,
      inside: {
        "code-block": {
          pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
          lookbehind: true
        },
        "code-language": {
          pattern: /^(```).+/,
          lookbehind: true
        },
        "punctuation": /```/
      }
    }],
    "title": [{
      pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
      alias: "important",
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      pattern: /(^\s*)#.+/m,
      lookbehind: true,
      alias: "important",
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    "hr": {
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: true,
      alias: "punctuation"
    },
    "list": {
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: true,
      alias: "punctuation"
    },
    "url-reference": {
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        "variable": {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: true
        },
        "string": /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        "punctuation": /^[\[\]!:]|[<>]/
      },
      alias: "url"
    },
    "bold": {
      pattern: createInline(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "content": {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: true,
          inside: {}
        },
        "punctuation": /\*\*|__/
      }
    },
    "italic": {
      pattern: createInline(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "content": {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: true,
          inside: {}
        },
        "punctuation": /[*_]/
      }
    },
    "strike": {
      pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "content": {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: true,
          inside: {}
        },
        "punctuation": /~~?/
      }
    },
    "code-snippet": {
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: true,
      greedy: true,
      alias: ["code", "keyword"]
    },
    "url": {
      pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "operator": /^!/,
        "content": {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: true,
          inside: {}
        },
        "variable": {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: true
        },
        "url": {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: true
        },
        "string": {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: true
        }
      }
    }
  });
  ["url", "bold", "italic", "strike"].forEach(function (token) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function (inside) {
      if (token !== inside) {
        Prism2.languages.markdown[token].inside.content.inside[inside] = Prism2.languages.markdown[inside];
      }
    });
  });
  Prism2.hooks.add("after-tokenize", function (env) {
    if (env.language !== "markdown" && env.language !== "md") {
      return;
    }
    function walkTokens(tokens) {
      if (!tokens || typeof tokens === "string") {
        return;
      }
      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];
        if (token.type !== "code") {
          walkTokens(token.content);
          continue;
        }
        var codeLang = token.content[1];
        var codeBlock = token.content[3];
        if (codeLang && codeBlock && codeLang.type === "code-language" && codeBlock.type === "code-block" && typeof codeLang.content === "string") {
          var lang = codeLang.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
          lang = (/[a-z][\w-]*/i.exec(lang) || [""])[0].toLowerCase();
          var alias = "language-" + lang;
          if (!codeBlock.alias) {
            codeBlock.alias = [alias];
          } else if (typeof codeBlock.alias === "string") {
            codeBlock.alias = [codeBlock.alias, alias];
          } else {
            codeBlock.alias.push(alias);
          }
        }
      }
    }
    walkTokens(env.tokens);
  });
  Prism2.hooks.add("wrap", function (env) {
    if (env.type !== "code-block") {
      return;
    }
    var codeLang = "";
    for (var i = 0, l = env.classes.length; i < l; i++) {
      var cls = env.classes[i];
      var match = /language-(.+)/.exec(cls);
      if (match) {
        codeLang = match[1];
        break;
      }
    }
    var grammar = Prism2.languages[codeLang];
    if (!grammar) {
      if (codeLang && codeLang !== "none" && Prism2.plugins.autoloader) {
        var id = "md-" + new Date().valueOf() + "-" + Math.floor(Math.random() * 1e16);
        env.attributes["id"] = id;
        Prism2.plugins.autoloader.loadLanguages(codeLang, function () {
          var ele = document.getElementById(id);
          if (ele) {
            ele.innerHTML = Prism2.highlight(ele.textContent, Prism2.languages[codeLang], codeLang);
          }
        });
      }
    } else {
      env.content = Prism2.highlight(textContent(env.content), grammar, codeLang);
    }
  });
  var tagPattern = RegExp(Prism2.languages.markup.tag.pattern.source, "gi");
  var KNOWN_ENTITY_NAMES = {
    "amp": "&",
    "lt": "<",
    "gt": ">",
    "quot": '"'
  };
  var fromCodePoint = String.fromCodePoint || String.fromCharCode;
  function textContent(html) {
    var text = html.replace(tagPattern, "");
    text = text.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (m, code) {
      code = code.toLowerCase();
      if (code[0] === "#") {
        var value;
        if (code[1] === "x") {
          value = parseInt(code.slice(2), 16);
        } else {
          value = Number(code.slice(1));
        }
        return fromCodePoint(value);
      } else {
        var known = KNOWN_ENTITY_NAMES[code];
        if (known) {
          return known;
        }
        return m;
      }
    });
    return text;
  }
  Prism2.languages.md = Prism2.languages.markdown;
})(prism);
prism.languages.graphql = {
  "comment": /#.*/,
  "description": {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: true,
    alias: "string",
    inside: {
      "language-markdown": {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: true,
        inside: prism.languages.markdown
      }
    }
  },
  "string": {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: true
  },
  "number": /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  "boolean": /\b(?:false|true)\b/,
  "variable": /\$[a-z_]\w*/i,
  "directive": {
    pattern: /@[a-z_]\w*/i,
    alias: "function"
  },
  "attr-name": {
    pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: true
  },
  "atom-input": {
    pattern: /\b[A-Z]\w*Input\b/,
    alias: "class-name"
  },
  "scalar": /\b(?:Boolean|Float|ID|Int|String)\b/,
  "constant": /\b[A-Z][A-Z_\d]*\b/,
  "class-name": {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
    lookbehind: true
  },
  "fragment": {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: "function"
  },
  "definition-mutation": {
    pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: "function"
  },
  "definition-query": {
    pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: "function"
  },
  "keyword": /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  "operator": /[!=|&]|\.{3}/,
  "property-query": /\w+(?=\s*\()/,
  "object": /\w+(?=\s*\{)/,
  "punctuation": /[!(){}\[\]:=,]/,
  "property": /\w+/
};
prism.hooks.add("after-tokenize", function afterTokenizeGraphql(env) {
  if (env.language !== "graphql") {
    return;
  }
  var validTokens = env.tokens.filter(function (token) {
    return typeof token !== "string" && token.type !== "comment" && token.type !== "scalar";
  });
  var currentIndex = 0;
  function getToken(offset) {
    return validTokens[currentIndex + offset];
  }
  function isTokenType(types, offset) {
    offset = offset || 0;
    for (var i2 = 0; i2 < types.length; i2++) {
      var token = getToken(i2 + offset);
      if (!token || token.type !== types[i2]) {
        return false;
      }
    }
    return true;
  }
  function findClosingBracket(open, close) {
    var stackHeight = 1;
    for (var i2 = currentIndex; i2 < validTokens.length; i2++) {
      var token = validTokens[i2];
      var content = token.content;
      if (token.type === "punctuation" && typeof content === "string") {
        if (open.test(content)) {
          stackHeight++;
        } else if (close.test(content)) {
          stackHeight--;
          if (stackHeight === 0) {
            return i2;
          }
        }
      }
    }
    return -1;
  }
  function addAlias(token, alias) {
    var aliases = token.alias;
    if (!aliases) {
      token.alias = aliases = [];
    } else if (!Array.isArray(aliases)) {
      token.alias = aliases = [aliases];
    }
    aliases.push(alias);
  }
  for (; currentIndex < validTokens.length;) {
    var startToken = validTokens[currentIndex++];
    if (startToken.type === "keyword" && startToken.content === "mutation") {
      var inputVariables = [];
      if (isTokenType(["definition-mutation", "punctuation"]) && getToken(1).content === "(") {
        currentIndex += 2;
        var definitionEnd = findClosingBracket(/^\($/, /^\)$/);
        if (definitionEnd === -1) {
          continue;
        }
        for (; currentIndex < definitionEnd; currentIndex++) {
          var t = getToken(0);
          if (t.type === "variable") {
            addAlias(t, "variable-input");
            inputVariables.push(t.content);
          }
        }
        currentIndex = definitionEnd + 1;
      }
      if (isTokenType(["punctuation", "property-query"]) && getToken(0).content === "{") {
        currentIndex++;
        addAlias(getToken(0), "property-mutation");
        if (inputVariables.length > 0) {
          var mutationEnd = findClosingBracket(/^\{$/, /^\}$/);
          if (mutationEnd === -1) {
            continue;
          }
          for (var i = currentIndex; i < mutationEnd; i++) {
            var varToken = validTokens[i];
            if (varToken.type === "variable" && inputVariables.indexOf(varToken.content) >= 0) {
              addAlias(varToken, "variable-input");
            }
          }
        }
      }
    }
  }
});
prism.languages.sql = {
  "comment": {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: true
  },
  "variable": [{
    pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
    greedy: true
  }, /@[\w.$]+/],
  "string": {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: true,
    lookbehind: true
  },
  "identifier": {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: true,
    lookbehind: true,
    inside: {
      "punctuation": /^`|`$/
    }
  },
  "function": /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  "keyword": /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  "boolean": /\b(?:FALSE|NULL|TRUE)\b/i,
  "number": /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  "operator": /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  "punctuation": /[;[\]()`,.]/
};
(function (Prism2) {
  var templateString = Prism2.languages.javascript["template-string"];
  var templateLiteralPattern = templateString.pattern.source;
  var interpolationObject = templateString.inside["interpolation"];
  var interpolationPunctuationObject = interpolationObject.inside["interpolation-punctuation"];
  var interpolationPattern = interpolationObject.pattern.source;
  function createTemplate(language, tag) {
    if (!Prism2.languages[language]) {
      return void 0;
    }
    return {
      pattern: RegExp("((?:" + tag + ")\\s*)" + templateLiteralPattern),
      lookbehind: true,
      greedy: true,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        "embedded-code": {
          pattern: /[\s\S]+/,
          alias: language
        }
      }
    };
  }
  Prism2.languages.javascript["template-string"] = [createTemplate("css", /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), createTemplate("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), createTemplate("svg", /\bsvg/.source), createTemplate("markdown", /\b(?:markdown|md)/.source), createTemplate("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), createTemplate("sql", /\bsql/.source), templateString].filter(Boolean);
  function getPlaceholder(counter, language) {
    return "___" + language.toUpperCase() + "_" + counter + "___";
  }
  function tokenizeWithHooks(code, grammar, language) {
    var env = {
      code: code,
      grammar: grammar,
      language: language
    };
    Prism2.hooks.run("before-tokenize", env);
    env.tokens = Prism2.tokenize(env.code, env.grammar);
    Prism2.hooks.run("after-tokenize", env);
    return env.tokens;
  }
  function tokenizeInterpolationExpression(expression) {
    var tempGrammar = {};
    tempGrammar["interpolation-punctuation"] = interpolationPunctuationObject;
    var tokens = Prism2.tokenize(expression, tempGrammar);
    if (tokens.length === 3) {
      var args = [1, 1];
      args.push.apply(args, tokenizeWithHooks(tokens[1], Prism2.languages.javascript, "javascript"));
      tokens.splice.apply(tokens, args);
    }
    return new Prism2.Token("interpolation", tokens, interpolationObject.alias, expression);
  }
  function tokenizeEmbedded(code, grammar, language) {
    var _tokens = Prism2.tokenize(code, {
      "interpolation": {
        pattern: RegExp(interpolationPattern),
        lookbehind: true
      }
    });
    var placeholderCounter = 0;
    var placeholderMap = {};
    var embeddedCode = _tokens.map(function (token) {
      if (typeof token === "string") {
        return token;
      } else {
        var interpolationExpression = token.content;
        var placeholder;
        while (code.indexOf(placeholder = getPlaceholder(placeholderCounter++, language)) !== -1) {}
        placeholderMap[placeholder] = interpolationExpression;
        return placeholder;
      }
    }).join("");
    var embeddedTokens = tokenizeWithHooks(embeddedCode, grammar, language);
    var placeholders = Object.keys(placeholderMap);
    placeholderCounter = 0;
    function walkTokens(tokens) {
      for (var i = 0; i < tokens.length; i++) {
        if (placeholderCounter >= placeholders.length) {
          return;
        }
        var token = tokens[i];
        if (typeof token === "string" || typeof token.content === "string") {
          var placeholder = placeholders[placeholderCounter];
          var s = typeof token === "string" ? token : token.content;
          var index = s.indexOf(placeholder);
          if (index !== -1) {
            ++placeholderCounter;
            var before = s.substring(0, index);
            var middle = tokenizeInterpolationExpression(placeholderMap[placeholder]);
            var after = s.substring(index + placeholder.length);
            var replacement = [];
            if (before) {
              replacement.push(before);
            }
            replacement.push(middle);
            if (after) {
              var afterTokens = [after];
              walkTokens(afterTokens);
              replacement.push.apply(replacement, afterTokens);
            }
            if (typeof token === "string") {
              tokens.splice.apply(tokens, [i, 1].concat(replacement));
              i += replacement.length - 1;
            } else {
              token.content = replacement;
            }
          }
        } else {
          var content = token.content;
          if (Array.isArray(content)) {
            walkTokens(content);
          } else {
            walkTokens([content]);
          }
        }
      }
    }
    walkTokens(embeddedTokens);
    return new Prism2.Token(language, embeddedTokens, "language-" + language, code);
  }
  var supportedLanguages = {
    "javascript": true,
    "js": true,
    "typescript": true,
    "ts": true,
    "jsx": true,
    "tsx": true
  };
  Prism2.hooks.add("after-tokenize", function (env) {
    if (!(env.language in supportedLanguages)) {
      return;
    }
    function findTemplateStrings(tokens) {
      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];
        if (typeof token === "string") {
          continue;
        }
        var content = token.content;
        if (!Array.isArray(content)) {
          if (typeof content !== "string") {
            findTemplateStrings([content]);
          }
          continue;
        }
        if (token.type === "template-string") {
          var embedded = content[1];
          if (content.length === 3 && typeof embedded !== "string" && embedded.type === "embedded-code") {
            var code = stringContent(embedded);
            var alias = embedded.alias;
            var language = Array.isArray(alias) ? alias[0] : alias;
            var grammar = Prism2.languages[language];
            if (!grammar) {
              continue;
            }
            content[1] = tokenizeEmbedded(code, grammar, language);
          }
        } else {
          findTemplateStrings(content);
        }
      }
    }
    findTemplateStrings(env.tokens);
  });
  function stringContent(value) {
    if (typeof value === "string") {
      return value;
    } else if (Array.isArray(value)) {
      return value.map(stringContent).join("");
    } else {
      return stringContent(value.content);
    }
  }
})(prism);
(function (Prism2) {
  Prism2.languages.typescript = Prism2.languages.extend("javascript", {
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: true,
      greedy: true,
      inside: null
    },
    "builtin": /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  });
  Prism2.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/);
  delete Prism2.languages.typescript["parameter"];
  delete Prism2.languages.typescript["literal-property"];
  var typeInside = Prism2.languages.extend("typescript", {});
  delete typeInside["class-name"];
  Prism2.languages.typescript["class-name"].inside = typeInside;
  Prism2.languages.insertBefore("typescript", "function", {
    "decorator": {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        "at": {
          pattern: /^@/,
          alias: "operator"
        },
        "function": /^[\s\S]+/
      }
    },
    "generic-function": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: true,
      inside: {
        "function": /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        "generic": {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: typeInside
        }
      }
    }
  });
  Prism2.languages.ts = Prism2.languages.typescript;
})(prism);
(function (Prism2) {
  Prism2.languages.insertBefore("javascript", "function-variable", {
    "method-variable": {
      pattern: RegExp("(\\.\\s*)" + Prism2.languages.javascript["function-variable"].pattern.source),
      lookbehind: true,
      alias: ["function-variable", "method", "function", "property-access"]
    }
  });
  Prism2.languages.insertBefore("javascript", "function", {
    "method": {
      pattern: RegExp("(\\.\\s*)" + Prism2.languages.javascript["function"].source),
      lookbehind: true,
      alias: ["function", "property-access"]
    }
  });
  Prism2.languages.insertBefore("javascript", "constant", {
    "known-class-name": [{
      pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
      alias: "class-name"
    }, {
      pattern: /\b(?:[A-Z]\w*)Error\b/,
      alias: "class-name"
    }]
  });
  function withId(source, flags) {
    return RegExp(source.replace(/<ID>/g, function () {
      return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
    }), flags);
  }
  Prism2.languages.insertBefore("javascript", "keyword", {
    "imports": {
      pattern: withId(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
      lookbehind: true,
      inside: Prism2.languages.javascript
    },
    "exports": {
      pattern: withId(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
      lookbehind: true,
      inside: Prism2.languages.javascript
    }
  });
  Prism2.languages.javascript["keyword"].unshift({
    pattern: /\b(?:as|default|export|from|import)\b/,
    alias: "module"
  }, {
    pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
    alias: "control-flow"
  }, {
    pattern: /\bnull\b/,
    alias: ["null", "nil"]
  }, {
    pattern: /\bundefined\b/,
    alias: "nil"
  });
  Prism2.languages.insertBefore("javascript", "operator", {
    "spread": {
      pattern: /\.{3}/,
      alias: "operator"
    },
    "arrow": {
      pattern: /=>/,
      alias: "operator"
    }
  });
  Prism2.languages.insertBefore("javascript", "punctuation", {
    "property-access": {
      pattern: withId(/(\.\s*)#?<ID>/.source),
      lookbehind: true
    },
    "maybe-class-name": {
      pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
      lookbehind: true
    },
    "dom": {
      pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
      alias: "variable"
    },
    "console": {
      pattern: /\bconsole(?=\s*\.)/,
      alias: "class-name"
    }
  });
  var maybeClassNameTokens = ["function", "function-variable", "method", "method-variable", "property-access"];
  for (var i = 0; i < maybeClassNameTokens.length; i++) {
    var token = maybeClassNameTokens[i];
    var value = Prism2.languages.javascript[token];
    if (Prism2.util.type(value) === "RegExp") {
      value = Prism2.languages.javascript[token] = {
        pattern: value
      };
    }
    var inside = value.inside || {};
    value.inside = inside;
    inside["maybe-class-name"] = /^[A-Z][\s\S]*/;
  }
})(prism);
(function (Prism2) {
  var javascript = Prism2.util.clone(Prism2.languages.javascript);
  var space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
  var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
  var spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function re(source, flags) {
    source = source.replace(/<S>/g, function () {
      return space;
    }).replace(/<BRACES>/g, function () {
      return braces;
    }).replace(/<SPREAD>/g, function () {
      return spread;
    });
    return RegExp(source, flags);
  }
  spread = re(spread).source;
  Prism2.languages.jsx = Prism2.languages.extend("markup", javascript);
  Prism2.languages.jsx.tag.pattern = re(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source);
  Prism2.languages.jsx.tag.inside["tag"].pattern = /^<\/?[^\s>\/]*/;
  Prism2.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
  Prism2.languages.jsx.tag.inside["tag"].inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
  Prism2.languages.jsx.tag.inside["comment"] = javascript["comment"];
  Prism2.languages.insertBefore("inside", "attr-name", {
    "spread": {
      pattern: re(/<SPREAD>/.source),
      inside: Prism2.languages.jsx
    }
  }, Prism2.languages.jsx.tag);
  Prism2.languages.insertBefore("inside", "special-attr", {
    "script": {
      pattern: re(/=<BRACES>/.source),
      alias: "language-javascript",
      inside: {
        "script-punctuation": {
          pattern: /^=(?=\{)/,
          alias: "punctuation"
        },
        rest: Prism2.languages.jsx
      }
    }
  }, Prism2.languages.jsx.tag);
  var stringifyToken = function stringifyToken(token) {
    if (!token) {
      return "";
    }
    if (typeof token === "string") {
      return token;
    }
    if (typeof token.content === "string") {
      return token.content;
    }
    return token.content.map(stringifyToken).join("");
  };
  var walkTokens = function walkTokens(tokens) {
    var openedTags = [];
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var notTagNorBrace = false;
      if (typeof token !== "string") {
        if (token.type === "tag" && token.content[0] && token.content[0].type === "tag") {
          if (token.content[0].content[0].content === "</") {
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
              openedTags.pop();
            }
          } else {
            if (token.content[token.content.length - 1].content === "/>") ;else {
              openedTags.push({
                tagName: stringifyToken(token.content[0].content[1]),
                openedBraces: 0
              });
            }
          }
        } else if (openedTags.length > 0 && token.type === "punctuation" && token.content === "{") {
          openedTags[openedTags.length - 1].openedBraces++;
        } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === "punctuation" && token.content === "}") {
          openedTags[openedTags.length - 1].openedBraces--;
        } else {
          notTagNorBrace = true;
        }
      }
      if (notTagNorBrace || typeof token === "string") {
        if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
          var plainText = stringifyToken(token);
          if (i < tokens.length - 1 && (typeof tokens[i + 1] === "string" || tokens[i + 1].type === "plain-text")) {
            plainText += stringifyToken(tokens[i + 1]);
            tokens.splice(i + 1, 1);
          }
          if (i > 0 && (typeof tokens[i - 1] === "string" || tokens[i - 1].type === "plain-text")) {
            plainText = stringifyToken(tokens[i - 1]) + plainText;
            tokens.splice(i - 1, 1);
            i--;
          }
          tokens[i] = new Prism2.Token("plain-text", plainText, null, plainText);
        }
      }
      if (token.content && typeof token.content !== "string") {
        walkTokens(token.content);
      }
    }
  };
  Prism2.hooks.add("after-tokenize", function (env) {
    if (env.language !== "jsx" && env.language !== "tsx") {
      return;
    }
    walkTokens(env.tokens);
  });
})(prism);
(function (Prism2) {
  Prism2.languages.diff = {
    "coord": [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m]
  };
  var PREFIXES = {
    "deleted-sign": "-",
    "deleted-arrow": "<",
    "inserted-sign": "+",
    "inserted-arrow": ">",
    "unchanged": " ",
    "diff": "!"
  };
  Object.keys(PREFIXES).forEach(function (name) {
    var prefix = PREFIXES[name];
    var alias = [];
    if (!/^\w+$/.test(name)) {
      alias.push(/\w+/.exec(name)[0]);
    }
    if (name === "diff") {
      alias.push("bold");
    }
    Prism2.languages.diff[name] = {
      pattern: RegExp("^(?:[" + prefix + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"),
      alias: alias,
      inside: {
        "line": {
          pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
          lookbehind: true
        },
        "prefix": {
          pattern: /[\s\S]/,
          alias: /\w+/.exec(name)[0]
        }
      }
    };
  });
  Object.defineProperty(Prism2.languages.diff, "PREFIXES", {
    value: PREFIXES
  });
})(prism);
prism.languages.git = {
  "comment": /^#.*/m,
  "deleted": /^[-–].*/m,
  "inserted": /^\+.*/m,
  "string": /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
  "command": {
    pattern: /^.*\$ git .*$/m,
    inside: {
      "parameter": /\s--?\w+/
    }
  },
  "coord": /^@@.*@@$/m,
  "commit-sha1": /^commit \w{40}$/m
};
prism.languages.go = prism.languages.extend("clike", {
  "string": {
    pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
    lookbehind: true,
    greedy: true
  },
  "keyword": /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  "boolean": /\b(?:_|false|iota|nil|true)\b/,
  "number": [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],
  "operator": /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  "builtin": /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
});
prism.languages.insertBefore("go", "string", {
  "char": {
    pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
    greedy: true
  }
});
delete prism.languages.go["class-name"];
(function (Prism2) {
  function getPlaceholder(language, index) {
    return "___" + language.toUpperCase() + index + "___";
  }
  Object.defineProperties(Prism2.languages["markup-templating"] = {}, {
    buildPlaceholders: {
      value: function value(env, language, placeholderPattern, replaceFilter) {
        if (env.language !== language) {
          return;
        }
        var tokenStack = env.tokenStack = [];
        env.code = env.code.replace(placeholderPattern, function (match) {
          if (typeof replaceFilter === "function" && !replaceFilter(match)) {
            return match;
          }
          var i = tokenStack.length;
          var placeholder;
          while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
            ++i;
          }
          tokenStack[i] = match;
          return placeholder;
        });
        env.grammar = Prism2.languages.markup;
      }
    },
    tokenizePlaceholders: {
      value: function value(env, language) {
        if (env.language !== language || !env.tokenStack) {
          return;
        }
        env.grammar = Prism2.languages[language];
        var j = 0;
        var keys = Object.keys(env.tokenStack);
        function walkTokens(tokens) {
          for (var i = 0; i < tokens.length; i++) {
            if (j >= keys.length) {
              break;
            }
            var token = tokens[i];
            if (typeof token === "string" || token.content && typeof token.content === "string") {
              var k = keys[j];
              var t = env.tokenStack[k];
              var s = typeof token === "string" ? token : token.content;
              var placeholder = getPlaceholder(language, k);
              var index = s.indexOf(placeholder);
              if (index > -1) {
                ++j;
                var before = s.substring(0, index);
                var middle = new Prism2.Token(language, Prism2.tokenize(t, env.grammar), "language-" + language, t);
                var after = s.substring(index + placeholder.length);
                var replacement = [];
                if (before) {
                  replacement.push.apply(replacement, walkTokens([before]));
                }
                replacement.push(middle);
                if (after) {
                  replacement.push.apply(replacement, walkTokens([after]));
                }
                if (typeof token === "string") {
                  tokens.splice.apply(tokens, [i, 1].concat(replacement));
                } else {
                  token.content = replacement;
                }
              }
            } else if (token.content) {
              walkTokens(token.content);
            }
          }
          return tokens;
        }
        walkTokens(env.tokens);
      }
    }
  });
})(prism);
(function (Prism2) {
  Prism2.languages.handlebars = {
    "comment": /\{\{![\s\S]*?\}\}/,
    "delimiter": {
      pattern: /^\{\{\{?|\}\}\}?$/,
      alias: "punctuation"
    },
    "string": /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    "number": /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    "boolean": /\b(?:false|true)\b/,
    "block": {
      pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
      lookbehind: true,
      alias: "keyword"
    },
    "brackets": {
      pattern: /\[[^\]]+\]/,
      inside: {
        punctuation: /\[|\]/,
        variable: /[\s\S]+/
      }
    },
    "punctuation": /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
    "variable": /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
  };
  Prism2.hooks.add("before-tokenize", function (env) {
    var handlebarsPattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
    Prism2.languages["markup-templating"].buildPlaceholders(env, "handlebars", handlebarsPattern);
  });
  Prism2.hooks.add("after-tokenize", function (env) {
    Prism2.languages["markup-templating"].tokenizePlaceholders(env, "handlebars");
  });
  Prism2.languages.hbs = Prism2.languages.handlebars;
})(prism);
prism.languages.json = {
  "property": {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: true,
    greedy: true
  },
  "string": {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: true,
    greedy: true
  },
  "comment": {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  "number": /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  "punctuation": /[{}[\],]/,
  "operator": /:/,
  "boolean": /\b(?:false|true)\b/,
  "null": {
    pattern: /\bnull\b/,
    alias: "keyword"
  }
};
prism.languages.webmanifest = prism.languages.json;
prism.languages.less = prism.languages.extend("css", {
  "comment": [/\/\*[\s\S]*?\*\//, {
    pattern: /(^|[^\\])\/\/.*/,
    lookbehind: true
  }],
  "atrule": {
    pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      "punctuation": /[:()]/
    }
  },
  "selector": {
    pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      "variable": /@+[\w-]+/
    }
  },
  "property": /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
  "operator": /[+\-*\/]/
});
prism.languages.insertBefore("less", "property", {
  "variable": [{
    pattern: /@[\w-]+\s*:/,
    inside: {
      "punctuation": /:/
    }
  }, /@@?[\w-]+/],
  "mixin-usage": {
    pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
    lookbehind: true,
    alias: "function"
  }
});
prism.languages.makefile = {
  "comment": {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: true
  },
  "string": {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  "builtin-target": {
    pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
    alias: "builtin"
  },
  "target": {
    pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
    alias: "symbol",
    inside: {
      "variable": /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
    }
  },
  "variable": /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  "keyword": /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
  "function": {
    pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
    lookbehind: true
  },
  "operator": /(?:::|[?:+!])?=|[|@]/,
  "punctuation": /[:;(){}]/
};
prism.languages.objectivec = prism.languages.extend("c", {
  "string": {
    pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  "keyword": /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  "operator": /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete prism.languages.objectivec["class-name"];
prism.languages.objc = prism.languages.objectivec;
prism.languages.ocaml = {
  "comment": {
    pattern: /\(\*[\s\S]*?\*\)/,
    greedy: true
  },
  "char": {
    pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,
    greedy: true
  },
  "string": [{
    pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/,
    greedy: true
  }, {
    pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/,
    greedy: true
  }],
  "number": [/\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i, /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i, /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i],
  "directive": {
    pattern: /\B#\w+/,
    alias: "property"
  },
  "label": {
    pattern: /\B~\w+/,
    alias: "property"
  },
  "type-variable": {
    pattern: /\B'\w+/,
    alias: "function"
  },
  "variant": {
    pattern: /`\w+/,
    alias: "symbol"
  },
  "keyword": /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
  "boolean": /\b(?:false|true)\b/,
  "operator-like-punctuation": {
    pattern: /\[[<>|]|[>|]\]|\{<|>\}/,
    alias: "punctuation"
  },
  "operator": /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
  "punctuation": /;;|::|[(){}\[\].,:;#]|\b_\b/
};
prism.languages.python = {
  "comment": {
    pattern: /(^|[^\\])#.*/,
    lookbehind: true,
    greedy: true
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: true,
    inside: {
      "interpolation": {
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: true,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: true
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      "string": /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: true,
    alias: "string"
  },
  "string": {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: true
  },
  "function": {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: true
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: true
  },
  "decorator": {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: true,
    alias: ["annotation", "punctuation"],
    inside: {
      "punctuation": /\./
    }
  },
  "keyword": /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  "builtin": /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  "boolean": /\b(?:False|None|True)\b/,
  "number": /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  "operator": /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  "punctuation": /[{}[\];(),.:]/
};
prism.languages.python["string-interpolation"].inside["interpolation"].inside.rest = prism.languages.python;
prism.languages.py = prism.languages.python;
prism.languages.reason = prism.languages.extend("clike", {
  "string": {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
    greedy: true
  },
  "class-name": /\b[A-Z]\w*/,
  "keyword": /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
  "operator": /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
});
prism.languages.insertBefore("reason", "class-name", {
  "char": {
    pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
    greedy: true
  },
  "constructor": /\b[A-Z]\w*\b(?!\s*\.)/,
  "label": {
    pattern: /\b[a-z]\w*(?=::)/,
    alias: "symbol"
  }
});
delete prism.languages.reason["function"];
(function (Prism2) {
  Prism2.languages.sass = Prism2.languages.extend("css", {
    "comment": {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
      lookbehind: true,
      greedy: true
    }
  });
  Prism2.languages.insertBefore("sass", "atrule", {
    "atrule-line": {
      pattern: /^(?:[ \t]*)[@+=].+/m,
      greedy: true,
      inside: {
        "atrule": /(?:@[\w-]+|[+=])/
      }
    }
  });
  delete Prism2.languages.sass.atrule;
  var variable = /\$[-\w]+|#\{\$[-\w]+\}/;
  var operator = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/, {
    pattern: /(\s)-(?=\s)/,
    lookbehind: true
  }];
  Prism2.languages.insertBefore("sass", "property", {
    "variable-line": {
      pattern: /^[ \t]*\$.+/m,
      greedy: true,
      inside: {
        "punctuation": /:/,
        "variable": variable,
        "operator": operator
      }
    },
    "property-line": {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
      greedy: true,
      inside: {
        "property": [/[^:\s]+(?=\s*:)/, {
          pattern: /(:)[^:\s]+/,
          lookbehind: true
        }],
        "punctuation": /:/,
        "variable": variable,
        "operator": operator,
        "important": Prism2.languages.sass.important
      }
    }
  });
  delete Prism2.languages.sass.property;
  delete Prism2.languages.sass.important;
  Prism2.languages.insertBefore("sass", "punctuation", {
    "selector": {
      pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
      lookbehind: true,
      greedy: true
    }
  });
})(prism);
prism.languages.scss = prism.languages.extend("css", {
  "comment": {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: true
  },
  "atrule": {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: {
      "rule": /@[\w-]+/
    }
  },
  "url": /(?:[-a-z]+-)?url(?=\()/i,
  "selector": {
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
    inside: {
      "parent": {
        pattern: /&/,
        alias: "important"
      },
      "placeholder": /%[-\w]+/,
      "variable": /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  "property": {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      "variable": /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
});
prism.languages.insertBefore("scss", "atrule", {
  "keyword": [/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i, {
    pattern: /( )(?:from|through)(?= )/,
    lookbehind: true
  }]
});
prism.languages.insertBefore("scss", "important", {
  "variable": /\$[-\w]+|#\{\$[-\w]+\}/
});
prism.languages.insertBefore("scss", "function", {
  "module-modifier": {
    pattern: /\b(?:as|hide|show|with)\b/i,
    alias: "keyword"
  },
  "placeholder": {
    pattern: /%[-\w]+/,
    alias: "selector"
  },
  "statement": {
    pattern: /\B!(?:default|optional)\b/i,
    alias: "keyword"
  },
  "boolean": /\b(?:false|true)\b/,
  "null": {
    pattern: /\bnull\b/,
    alias: "keyword"
  },
  "operator": {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
    lookbehind: true
  }
});
prism.languages.scss["atrule"].inside.rest = prism.languages.scss;
(function (Prism2) {
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+)/,
    lookbehind: true
  };
  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  var inside = {
    "comment": {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    },
    "url": {
      pattern: /\burl\((["']?).*?\1\)/i,
      greedy: true
    },
    "string": {
      pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
      greedy: true
    },
    "interpolation": null,
    "func": null,
    "important": /\B!(?:important|optional)\b/i,
    "keyword": {
      pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
      lookbehind: true
    },
    "hexcode": /#[\da-f]{3,6}/i,
    "color": [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        "unit": unit,
        "number": number,
        "function": /[\w-]+(?=\()/,
        "punctuation": /[(),]/
      }
    }],
    "entity": /\\[\da-f]{1,8}/i,
    "unit": unit,
    "boolean": /\b(?:false|true)\b/,
    "operator": [/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
    "number": number,
    "punctuation": /[{}()\[\];:,]/
  };
  inside["interpolation"] = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: "variable",
    inside: {
      "delimiter": {
        pattern: /^\{|\}$/,
        alias: "punctuation"
      },
      rest: inside
    }
  };
  inside["func"] = {
    pattern: /[\w-]+\([^)]*\).*/,
    inside: {
      "function": /^[^(]+/,
      rest: inside
    }
  };
  Prism2.languages.stylus = {
    "atrule-declaration": {
      pattern: /(^[ \t]*)@.+/m,
      lookbehind: true,
      inside: {
        "atrule": /^@[\w-]+/,
        rest: inside
      }
    },
    "variable-declaration": {
      pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
      lookbehind: true,
      inside: {
        "variable": /^\S+/,
        rest: inside
      }
    },
    "statement": {
      pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
      lookbehind: true,
      inside: {
        "keyword": /^\S+/,
        rest: inside
      }
    },
    "property-declaration": {
      pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
      lookbehind: true,
      inside: {
        "property": {
          pattern: /^[^\s:]+/,
          inside: {
            "interpolation": inside.interpolation
          }
        },
        rest: inside
      }
    },
    "selector": {
      pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
      lookbehind: true,
      inside: {
        "interpolation": inside.interpolation,
        "comment": inside.comment,
        "punctuation": /[{},]/
      }
    },
    "func": inside.func,
    "string": inside.string,
    "comment": {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true,
      greedy: true
    },
    "interpolation": inside.interpolation,
    "punctuation": /[{}()\[\];:.]/
  };
})(prism);
(function (Prism2) {
  var typescript = Prism2.util.clone(Prism2.languages.typescript);
  Prism2.languages.tsx = Prism2.languages.extend("jsx", typescript);
  delete Prism2.languages.tsx["parameter"];
  delete Prism2.languages.tsx["literal-property"];
  var tag = Prism2.languages.tsx.tag;
  tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + tag.pattern.source + ")", tag.pattern.flags);
  tag.lookbehind = true;
})(prism);
prism.languages.wasm = {
  "comment": [/\(;[\s\S]*?;\)/, {
    pattern: /;;.*/,
    greedy: true
  }],
  "string": {
    pattern: /"(?:\\[\s\S]|[^"\\])*"/,
    greedy: true
  },
  "keyword": [{
    pattern: /\b(?:align|offset)=/,
    inside: {
      "operator": /=/
    }
  }, {
    pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
    inside: {
      "punctuation": /\./
    }
  }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
  "variable": /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
  "number": /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
  "punctuation": /[()]/
};
var prism_default = prism;

// ../../node_modules/.pnpm/prism-react-renderer@1.3.5_react@18.2.0/node_modules/prism-react-renderer/themes/duotoneDark/index.js
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};
var duotoneDark_default = theme;

// ../../node_modules/.pnpm/prism-react-renderer@1.3.5_react@18.2.0/node_modules/prism-react-renderer/dist/index.js
var import_react = __toESM(require_react());
var defaultProps = {
  Prism: prism_default,
  theme: duotoneDark_default
};
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var newlineRe = /\r\n|\r|\n/;
var normalizeEmptyLines = function normalizeEmptyLines(line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};
var appendTypes = function appendTypes(types, add) {
  var typesSize = types.length;
  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }
  return types.concat(add);
};
var normalizeTokens = function normalizeTokens(tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];
  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i];
      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);
        if (token.alias) {
          types = appendTypes(types, token.alias);
        }
        content = token.content;
      }
      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      }
      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      });
      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    }
    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }
  normalizeEmptyLines(currentLine);
  return acc;
};
var themeToDict = function themeToDict(theme15, language) {
  var plain = theme15.plain;
  var base = /* @__PURE__ */Object.create(null);
  var themeDict = theme15.styles.reduce(function (acc, themeEntry) {
    var languages3 = themeEntry.languages;
    var style = themeEntry.style;
    if (languages3 && !languages3.includes(language)) {
      return acc;
    }
    themeEntry.types.forEach(function (type) {
      var accStyle = _extends({}, acc[type], style);
      acc[type] = accStyle;
    });
    return acc;
  }, base);
  themeDict.root = plain;
  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};
function objectWithoutProperties(obj, exclude) {
  var target = {};
  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];
  return target;
}
var Highlight = /* @__PURE__ */function (Component2) {
  function Highlight3() {
    var this$1 = this;
    var args = [],
      len = arguments.length;
    while (len--) args[len] = arguments[len];
    Component2.apply(this, args);
    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== void 0 && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }
      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : void 0;
      return this$1.themeDict = themeDict;
    });
    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;
      var output = _extends({}, rest, {
        className: "token-line",
        style: void 0,
        key: void 0
      });
      var themeDict = this$1.getThemeDict(this$1.props);
      if (themeDict !== void 0) {
        output.style = themeDict.plain;
      }
      if (style !== void 0) {
        output.style = output.style !== void 0 ? _extends({}, output.style, style) : style;
      }
      if (key !== void 0) {
        output.key = key;
      }
      if (className) {
        output.className += " " + className;
      }
      return output;
    });
    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);
      if (themeDict === void 0) {
        return void 0;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : void 0;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }
      var baseStyle = empty ? {
        display: "inline-block"
      } : {};
      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });
    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;
      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: void 0
      });
      if (style !== void 0) {
        output.style = output.style !== void 0 ? _extends({}, output.style, style) : style;
      }
      if (key !== void 0) {
        output.key = key;
      }
      if (className) {
        output.className += " " + className;
      }
      return output;
    });
    _defineProperty(this, "tokenize", function (Prism2, code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language,
        tokens: []
      };
      Prism2.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism2.tokenize(env.code, env.grammar, env.language);
      Prism2.hooks.run("after-tokenize", env);
      return tokens;
    });
  }
  if (Component2) Highlight3.__proto__ = Component2;
  Highlight3.prototype = Object.create(Component2 && Component2.prototype);
  Highlight3.prototype.constructor = Highlight3;
  Highlight3.prototype.render = function render() {
    var ref = this.props;
    var Prism2 = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism2.languages[language];
    var mixedTokens = grammar !== void 0 ? this.tokenize(Prism2, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== void 0 ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };
  return Highlight3;
}(import_react.Component);
var Dist_default = Highlight;

// src/styles.ts
var import_tailwind_factory = __toESM(require_tailwind_factory());
var HighlightContainer = (0, import_tailwind_factory.tf)("div", "\n  rounded-lg\n  flex\n  relative\n  overflow-hidden\n", {
  variants: {
    full: {
      "true": "\n          w-full\n        ",
      "false": "\n          w-min\n        "
    }
  },
  defaultVariants: {
    full: false
  }
});
var HighlightContent = (0, import_tailwind_factory.tf)("div", "\n  flex\n  relative\n  w-full\n  overflow-y-hidden\n  overflow-x-auto\n  scrollbar-thin\n  scrollbar-h-[4px]\n");
var HighlightPreContainer = (0, import_tailwind_factory.tf)("pre", "\n  w-full\n\n  py-2\n  z-10\n  \n  code, kdb, samp, pre {\n    font-code\n  }\n\n  .token-line {\n    pr-10\n    pl-3\n  }\n\n  highlight-tokens\n", {
  variants: {},
  defaultVariants: {}
});
var HighlightNumbers = (0, import_tailwind_factory.tf)("div", "\n  grid\n  pt-2\n  pb-3\n  gap-0\n  min-w-min\n  border-solid\n", {
  variants: {
    showBorder: {
      "true": "\n        border-r-[3px]\n      ",
      "false": ""
    }
  },
  defaultVariants: {
    showBorder: true
  }
});
var HighlightNumber = (0, import_tailwind_factory.tf)("p", "\n  font-code\n  mx-2\n  text-sm\n  pt-[2.5px]\n  h-[24px]\n  select-none\n");

// src/CodeBlock.tsx
function CodeBlock(_ref14) {
  var code = _ref14.code,
    language = _ref14.language,
    plugins = _ref14.plugins,
    _ref14$theme = _ref14.theme,
    theme15 = _ref14$theme === void 0 ? defaultProps.theme : _ref14$theme;
  return /*#__PURE__*/_reactJsxRuntime.jsx(Dist_default, Object.assign({}, defaultProps, {
    theme: theme15,
    code: code,
    Prism: prism_default,
    language: language,
    children: function children(_ref15) {
      var className = _ref15.className,
        style = _ref15.style,
        tokens = _ref15.tokens,
        getLineProps = _ref15.getLineProps,
        getTokenProps = _ref15.getTokenProps;
      return /*#__PURE__*/_reactJsxRuntime.jsx(HighlightPreContainer, {
        className: className,
        style: style,
        children: /*#__PURE__*/_reactJsxRuntime.jsx("code", {
          children: tokens.map(function (line, idx) {
            return /*#__PURE__*/_reactJsxRuntime.jsx("div", Object.assign({}, getLineProps({
              line: line,
              key: "line-" + idx
            }), {
              children: line.map(function (token, i) {
                return /*#__PURE__*/_reactJsxRuntime.jsx("span", Object.assign({}, getTokenProps({
                  token: token,
                  key: "token-" + i
                })));
              })
            }));
          })
        })
      });
    }
  }));
}
CodeBlock.displayName = "CodeBlock";
// ../../node_modules/.pnpm/prism-react-renderer@1.3.5_react@18.2.0/node_modules/prism-react-renderer/themes/dracula/index.js
var theme2 = {
  plain: {
    color: "#F8F8F2",
    backgroundColor: "#282A36"
  },
  styles: [{
    types: ["prolog", "constant", "builtin"],
    style: {
      color: "rgb(189, 147, 249)"
    }
  }, {
    types: ["inserted", "function"],
    style: {
      color: "rgb(80, 250, 123)"
    }
  }, {
    types: ["deleted"],
    style: {
      color: "rgb(255, 85, 85)"
    }
  }, {
    types: ["changed"],
    style: {
      color: "rgb(255, 184, 108)"
    }
  }, {
    types: ["punctuation", "symbol"],
    style: {
      color: "rgb(248, 248, 242)"
    }
  }, {
    types: ["string", "char", "tag", "selector"],
    style: {
      color: "rgb(255, 121, 198)"
    }
  }, {
    types: ["keyword", "variable"],
    style: {
      color: "rgb(189, 147, 249)",
      fontStyle: "italic"
    }
  }, {
    types: ["comment"],
    style: {
      color: "rgb(98, 114, 164)"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "rgb(241, 250, 140)"
    }
  }]
};
var dracula_default = theme2;

// ../../node_modules/.pnpm/prism-react-renderer@1.3.5_react@18.2.0/node_modules/prism-react-renderer/themes/duotoneLight/index.js
var theme3 = {
  plain: {
    backgroundColor: "#faf8f5",
    color: "#728fcb"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#b6ad9a"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#063289"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#b29762"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#2d2006"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#896724"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule"],
    style: {
      color: "#728fcb"
    }
  }, {
    types: ["placeholder", "variable"],
    style: {
      color: "#93abdc"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#896724"
    }
  }]
};
var duotoneLight_default = theme3;

// ../../node_modules/.pnpm/prism-react-renderer@1.3.5_react@18.2.0/node_modules/prism-react-renderer/themes/github/index.js
var theme4 = {
  plain: {
    color: "#393A34",
    backgroundColor: "#f6f8fa"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata"],
    style: {
      color: "#999988",
      fontStyle: "italic"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["string", "attr-value"],
    style: {
      color: "#e3116c"
    }
  }, {
    types: ["punctuation", "operator"],
    style: {
      color: "#393A34"
    }
  }, {
    types: ["entity", "url", "symbol", "number", "boolean", "variable", "constant", "property", "regex", "inserted"],
    style: {
      color: "#36acaa"
    }
  }, {
    types: ["atrule", "keyword", "attr-name", "selector"],
    style: {
      color: "#00a4db"
    }
  }, {
    types: ["function", "deleted", "tag"],
    style: {
      color: "#d73a49"
    }
  }, {
    types: ["function-variable"],
    style: {
      color: "#6f42c1"
    }
  }, {
    types: ["tag", "selector", "keyword"],
    style: {
      color: "#00009f"
    }
  }]
};
var github_default = theme4;

// ../../node_modules/.pnpm/prism-react-renderer@1.3.5_react@18.2.0/node_modules/prism-react-renderer/themes/nightOwl/index.js
var theme5 = {
  plain: {
    color: "#d6deeb",
    backgroundColor: "#011627"
  },
  styles: [{
    types: ["changed"],
    style: {
      color: "rgb(162, 191, 252)",
      fontStyle: "italic"
    }
  }, {
    types: ["deleted"],
    style: {
      color: "rgba(239, 83, 80, 0.56)",
      fontStyle: "italic"
    }
  }, {
    types: ["inserted", "attr-name"],
    style: {
      color: "rgb(173, 219, 103)",
      fontStyle: "italic"
    }
  }, {
    types: ["comment"],
    style: {
      color: "rgb(99, 119, 119)",
      fontStyle: "italic"
    }
  }, {
    types: ["string", "url"],
    style: {
      color: "rgb(173, 219, 103)"
    }
  }, {
    types: ["variable"],
    style: {
      color: "rgb(214, 222, 235)"
    }
  }, {
    types: ["number"],
    style: {
      color: "rgb(247, 140, 108)"
    }
  }, {
    types: ["builtin", "char", "constant", "function"],
    style: {
      color: "rgb(130, 170, 255)"
    }
  }, {
    types: ["punctuation"],
    style: {
      color: "rgb(199, 146, 234)"
    }
  }, {
    types: ["selector", "doctype"],
    style: {
      color: "rgb(199, 146, 234)",
      fontStyle: "italic"
    }
  }, {
    types: ["class-name"],
    style: {
      color: "rgb(255, 203, 139)"
    }
  }, {
    types: ["tag", "operator", "keyword"],
    style: {
      color: "rgb(127, 219, 202)"
    }
  }, {
    types: ["boolean"],
    style: {
      color: "rgb(255, 88, 116)"
    }
  }, {
    types: ["property"],
    style: {
      color: "rgb(128, 203, 196)"
    }
  }, {
    types: ["namespace"],
    style: {
      color: "rgb(178, 204, 214)"
    }
  }]
};
var nightOwl_default = theme5;

// ../../node_modules/.pnpm/prism-react-renderer@1.3.5_react@18.2.0/node_modules/prism-react-renderer/themes/nightOwlLight/index.js
var theme6 = {
  plain: {
    color: "#403f53",
    backgroundColor: "#FBFBFB"
  },
  styles: [{
    types: ["changed"],
    style: {
      color: "rgb(162, 191, 252)",
      fontStyle: "italic"
    }
  }, {
    types: ["deleted"],
    style: {
      color: "rgba(239, 83, 80, 0.56)",
      fontStyle: "italic"
    }
  }, {
    types: ["inserted", "attr-name"],
    style: {
      color: "rgb(72, 118, 214)",
      fontStyle: "italic"
    }
  }, {
    types: ["comment"],
    style: {
      color: "rgb(152, 159, 177)",
      fontStyle: "italic"
    }
  }, {
    types: ["string", "builtin", "char", "constant", "url"],
    style: {
      color: "rgb(72, 118, 214)"
    }
  }, {
    types: ["variable"],
    style: {
      color: "rgb(201, 103, 101)"
    }
  }, {
    types: ["number"],
    style: {
      color: "rgb(170, 9, 130)"
    }
  }, {
    types: ["punctuation"],
    style: {
      color: "rgb(153, 76, 195)"
    }
  }, {
    types: ["function", "selector", "doctype"],
    style: {
      color: "rgb(153, 76, 195)",
      fontStyle: "italic"
    }
  }, {
    types: ["class-name"],
    style: {
      color: "rgb(17, 17, 17)"
    }
  }, {
    types: ["tag"],
    style: {
      color: "rgb(153, 76, 195)"
    }
  }, {
    types: ["operator", "property", "keyword", "namespace"],
    style: {
      color: "rgb(12, 150, 155)"
    }
  }, {
    types: ["boolean"],
    style: {
      color: "rgb(188, 84, 84)"
    }
  }]
};
var nightOwlLight_default = theme6;

// ../../node_modules/.pnpm/prism-react-renderer@1.3.5_react@18.2.0/node_modules/prism-react-renderer/themes/oceanicNext/index.js
var colors = {
  "char": "#D8DEE9",
  comment: "#999999",
  keyword: "#c5a5c5",
  primitive: "#5a9bcf",
  string: "#8dc891",
  variable: "#d7deea",
  "boolean": "#ff8b50",
  punctuation: "#5FB3B3",
  tag: "#fc929e",
  "function": "#79b6f2",
  className: "#FAC863",
  method: "#6699CC",
  operator: "#fc929e"
};
var theme7 = {
  plain: {
    backgroundColor: "#282c34",
    color: "#ffffff"
  },
  styles: [{
    types: ["attr-name"],
    style: {
      color: colors.keyword
    }
  }, {
    types: ["attr-value"],
    style: {
      color: colors.string
    }
  }, {
    types: ["comment", "block-comment", "prolog", "doctype", "cdata", "shebang"],
    style: {
      color: colors.comment
    }
  }, {
    types: ["property", "number", "function-name", "constant", "symbol", "deleted"],
    style: {
      color: colors.primitive
    }
  }, {
    types: ["boolean"],
    style: {
      color: colors["boolean"]
    }
  }, {
    types: ["tag"],
    style: {
      color: colors.tag
    }
  }, {
    types: ["string"],
    style: {
      color: colors.string
    }
  }, {
    types: ["punctuation"],
    style: {
      color: colors.string
    }
  }, {
    types: ["selector", "char", "builtin", "inserted"],
    style: {
      color: colors["char"]
    }
  }, {
    types: ["function"],
    style: {
      color: colors["function"]
    }
  }, {
    types: ["operator", "entity", "url", "variable"],
    style: {
      color: colors.variable
    }
  }, {
    types: ["keyword"],
    style: {
      color: colors.keyword
    }
  }, {
    types: ["atrule", "class-name"],
    style: {
      color: colors.className
    }
  }, {
    types: ["important"],
    style: {
      fontWeight: "400"
    }
  }, {
    types: ["bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }]
};
var oceanicNext_default = theme7;

// ../../node_modules/.pnpm/prism-react-renderer@1.3.5_react@18.2.0/node_modules/prism-react-renderer/themes/palenight/index.js
var theme8 = {
  plain: {
    color: "#bfc7d5",
    backgroundColor: "#292d3e"
  },
  styles: [{
    types: ["comment"],
    style: {
      color: "rgb(105, 112, 152)",
      fontStyle: "italic"
    }
  }, {
    types: ["string", "inserted"],
    style: {
      color: "rgb(195, 232, 141)"
    }
  }, {
    types: ["number"],
    style: {
      color: "rgb(247, 140, 108)"
    }
  }, {
    types: ["builtin", "char", "constant", "function"],
    style: {
      color: "rgb(130, 170, 255)"
    }
  }, {
    types: ["punctuation", "selector"],
    style: {
      color: "rgb(199, 146, 234)"
    }
  }, {
    types: ["variable"],
    style: {
      color: "rgb(191, 199, 213)"
    }
  }, {
    types: ["class-name", "attr-name"],
    style: {
      color: "rgb(255, 203, 107)"
    }
  }, {
    types: ["tag", "deleted"],
    style: {
      color: "rgb(255, 85, 114)"
    }
  }, {
    types: ["operator"],
    style: {
      color: "rgb(137, 221, 255)"
    }
  }, {
    types: ["boolean"],
    style: {
      color: "rgb(255, 88, 116)"
    }
  }, {
    types: ["keyword"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["doctype"],
    style: {
      color: "rgb(199, 146, 234)",
      fontStyle: "italic"
    }
  }, {
    types: ["namespace"],
    style: {
      color: "rgb(178, 204, 214)"
    }
  }, {
    types: ["url"],
    style: {
      color: "rgb(221, 221, 221)"
    }
  }]
};
var palenight_default = theme8;

// ../../node_modules/.pnpm/prism-react-renderer@1.3.5_react@18.2.0/node_modules/prism-react-renderer/themes/okaidia/index.js
var theme9 = {
  plain: {
    color: "#f8f8f2",
    backgroundColor: "#272822"
  },
  styles: [{
    types: ["changed"],
    style: {
      color: "rgb(162, 191, 252)",
      fontStyle: "italic"
    }
  }, {
    types: ["deleted"],
    style: {
      color: "#f92672",
      fontStyle: "italic"
    }
  }, {
    types: ["inserted"],
    style: {
      color: "rgb(173, 219, 103)",
      fontStyle: "italic"
    }
  }, {
    types: ["comment"],
    style: {
      color: "#8292a2",
      fontStyle: "italic"
    }
  }, {
    types: ["string", "url"],
    style: {
      color: "#a6e22e"
    }
  }, {
    types: ["variable"],
    style: {
      color: "#f8f8f2"
    }
  }, {
    types: ["number"],
    style: {
      color: "#ae81ff"
    }
  }, {
    types: ["builtin", "char", "constant", "function", "class-name"],
    style: {
      color: "#e6db74"
    }
  }, {
    types: ["punctuation"],
    style: {
      color: "#f8f8f2"
    }
  }, {
    types: ["selector", "doctype"],
    style: {
      color: "#a6e22e",
      fontStyle: "italic"
    }
  }, {
    types: ["tag", "operator", "keyword"],
    style: {
      color: "#66d9ef"
    }
  }, {
    types: ["boolean"],
    style: {
      color: "#ae81ff"
    }
  }, {
    types: ["namespace"],
    style: {
      color: "rgb(178, 204, 214)",
      opacity: 0.7
    }
  }, {
    types: ["tag", "property"],
    style: {
      color: "#f92672"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#a6e22e !important"
    }
  }, {
    types: ["doctype"],
    style: {
      color: "#8292a2"
    }
  }, {
    types: ["rule"],
    style: {
      color: "#e6db74"
    }
  }]
};
var okaidia_default = theme9;

// ../../node_modules/.pnpm/prism-react-renderer@1.3.5_react@18.2.0/node_modules/prism-react-renderer/themes/shadesOfPurple/index.js
var theme10 = {
  plain: {
    color: "#9EFEFF",
    backgroundColor: "#2D2A55"
  },
  styles: [{
    types: ["changed"],
    style: {
      color: "rgb(255, 238, 128)"
    }
  }, {
    types: ["deleted"],
    style: {
      color: "rgba(239, 83, 80, 0.56)"
    }
  }, {
    types: ["inserted"],
    style: {
      color: "rgb(173, 219, 103)"
    }
  }, {
    types: ["comment"],
    style: {
      color: "rgb(179, 98, 255)",
      fontStyle: "italic"
    }
  }, {
    types: ["punctuation"],
    style: {
      color: "rgb(255, 255, 255)"
    }
  }, {
    types: ["constant"],
    style: {
      color: "rgb(255, 98, 140)"
    }
  }, {
    types: ["string", "url"],
    style: {
      color: "rgb(165, 255, 144)"
    }
  }, {
    types: ["variable"],
    style: {
      color: "rgb(255, 238, 128)"
    }
  }, {
    types: ["number", "boolean"],
    style: {
      color: "rgb(255, 98, 140)"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "rgb(255, 180, 84)"
    }
  }, {
    types: ["keyword", "operator", "property", "namespace", "tag", "selector", "doctype"],
    style: {
      color: "rgb(255, 157, 0)"
    }
  }, {
    types: ["builtin", "char", "constant", "function", "class-name"],
    style: {
      color: "rgb(250, 208, 0)"
    }
  }]
};
var shadesOfPurple_default = theme10;

// ../../node_modules/.pnpm/prism-react-renderer@1.3.5_react@18.2.0/node_modules/prism-react-renderer/themes/synthwave84/index.js
var theme11 = {
  plain: {
    background: "#2a2139",
    backgroundColor: "linear-gradient(to bottom, #2a2139 75%, #34294f)",
    backgroundImage: "#34294f",
    color: "#f92aad",
    textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"
  },
  styles: [{
    types: ["comment", "block-comment", "prolog", "doctype", "cdata"],
    style: {
      color: "#495495",
      fontStyle: "italic"
    }
  }, {
    types: ["punctuation"],
    style: {
      color: "#ccc"
    }
  }, {
    types: ["tag", "attr-name", "namespace", "number", "unit", "hexcode", "deleted"],
    style: {
      color: "#e2777a"
    }
  }, {
    types: ["property", "selector"],
    style: {
      color: "#72f1b8",
      textShadow: "0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"
    }
  }, {
    types: ["function-name"],
    style: {
      color: "#6196cc"
    }
  }, {
    types: ["boolean", "selector-id", "function"],
    style: {
      color: "#fdfdfd",
      textShadow: "0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"
    }
  }, {
    types: ["class-name", "maybe-class-name", "builtin"],
    style: {
      color: "#fff5f6",
      textShadow: "0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"
    }
  }, {
    types: ["constant", "symbol"],
    style: {
      color: "#f92aad",
      textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"
    }
  }, {
    types: ["important", "atrule", "keyword", "selector-class"],
    style: {
      color: "#f4eee4",
      textShadow: "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"
    }
  }, {
    types: ["string", "char", "attr-value", "regex", "variable"],
    style: {
      color: "#f87c32"
    }
  }, {
    types: ["parameter"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["entity", "url"],
    style: {
      color: "#67cdcc"
    }
  }, {
    types: ["operator"],
    style: {
      color: "ffffffee"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["entity"],
    style: {
      cursor: "help"
    }
  }, {
    types: ["inserted"],
    style: {
      color: "green"
    }
  }]
};
var synthwave84_default = theme11;

// ../../node_modules/.pnpm/prism-react-renderer@1.3.5_react@18.2.0/node_modules/prism-react-renderer/themes/ultramin/index.js
var theme12 = {
  plain: {
    color: "#282a2e",
    backgroundColor: "#ffffff"
  },
  styles: [{
    types: ["comment"],
    style: {
      color: "rgb(197, 200, 198)"
    }
  }, {
    types: ["string", "number", "builtin", "variable"],
    style: {
      color: "rgb(150, 152, 150)"
    }
  }, {
    types: ["class-name", "function", "tag", "attr-name"],
    style: {
      color: "rgb(40, 42, 46)"
    }
  }]
};
var ultramin_default = theme12;

// ../../node_modules/.pnpm/prism-react-renderer@1.3.5_react@18.2.0/node_modules/prism-react-renderer/themes/vsDark/index.js
var theme13 = {
  plain: {
    color: "#9CDCFE",
    backgroundColor: "#1E1E1E"
  },
  styles: [{
    types: ["prolog"],
    style: {
      color: "rgb(0, 0, 128)"
    }
  }, {
    types: ["comment"],
    style: {
      color: "rgb(106, 153, 85)"
    }
  }, {
    types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
    style: {
      color: "rgb(86, 156, 214)"
    }
  }, {
    types: ["number", "inserted"],
    style: {
      color: "rgb(181, 206, 168)"
    }
  }, {
    types: ["constant"],
    style: {
      color: "rgb(100, 102, 149)"
    }
  }, {
    types: ["attr-name", "variable"],
    style: {
      color: "rgb(156, 220, 254)"
    }
  }, {
    types: ["deleted", "string", "attr-value", "template-punctuation"],
    style: {
      color: "rgb(206, 145, 120)"
    }
  }, {
    types: ["selector"],
    style: {
      color: "rgb(215, 186, 125)"
    }
  }, {
    types: ["tag"],
    style: {
      color: "rgb(78, 201, 176)"
    }
  }, {
    types: ["tag"],
    languages: ["markup"],
    style: {
      color: "rgb(86, 156, 214)"
    }
  }, {
    types: ["punctuation", "operator"],
    style: {
      color: "rgb(212, 212, 212)"
    }
  }, {
    types: ["punctuation"],
    languages: ["markup"],
    style: {
      color: "#808080"
    }
  }, {
    types: ["function"],
    style: {
      color: "rgb(220, 220, 170)"
    }
  }, {
    types: ["class-name"],
    style: {
      color: "rgb(78, 201, 176)"
    }
  }, {
    types: ["char"],
    style: {
      color: "rgb(209, 105, 105)"
    }
  }]
};
var vsDark_default = theme13;

// ../../node_modules/.pnpm/prism-react-renderer@1.3.5_react@18.2.0/node_modules/prism-react-renderer/themes/vsLight/index.js
var theme14 = {
  plain: {
    color: "#000000",
    backgroundColor: "#ffffff"
  },
  styles: [{
    types: ["comment"],
    style: {
      color: "rgb(0, 128, 0)"
    }
  }, {
    types: ["builtin"],
    style: {
      color: "rgb(0, 112, 193)"
    }
  }, {
    types: ["number", "variable", "inserted"],
    style: {
      color: "rgb(9, 134, 88)"
    }
  }, {
    types: ["operator"],
    style: {
      color: "rgb(0, 0, 0)"
    }
  }, {
    types: ["constant", "char"],
    style: {
      color: "rgb(129, 31, 63)"
    }
  }, {
    types: ["tag"],
    style: {
      color: "rgb(128, 0, 0)"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "rgb(255, 0, 0)"
    }
  }, {
    types: ["deleted", "string"],
    style: {
      color: "rgb(163, 21, 21)"
    }
  }, {
    types: ["changed", "punctuation"],
    style: {
      color: "rgb(4, 81, 165)"
    }
  }, {
    types: ["function", "keyword"],
    style: {
      color: "rgb(0, 0, 255)"
    }
  }, {
    types: ["class-name"],
    style: {
      color: "rgb(38, 127, 153)"
    }
  }]
};
var vsLight_default = theme14;

// src/themes/primary/index.ts
var primary = {
  plain: {
    color: "#d4d7db",
    numbersColor: "#71717A",
    backgroundColor: "#252322",
    numbersBackgroundColor: "#1b1816",
    numbersBorderColor: "#9d25ba",
    srollbarThumbColor: "#ac38c9",
    scrollbarTrackColor: "#201d1b"
  },
  styles: [{
    types: ["prolog"],
    style: {
      color: "rgb(0, 0, 128)"
    }
  }, {
    types: ["comment", "inserted"],
    style: {
      color: "#7F848E"
    }
  }, {
    types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
    style: {
      color: "#C678DD"
    }
  }, {
    types: ["number"],
    style: {
      color: "#D19A66"
    }
  }, {
    types: ["constant"],
    style: {
      color: "rgb(100, 102, 149)"
    }
  }, {
    types: [],
    style: {
      color: "#D19A66"
    }
  }, {
    types: ["string", "attr-value", "template-punctuation"],
    style: {
      color: "#98C379"
    }
  }, {
    types: ["selector"],
    style: {
      color: "rgb(215, 186, 125)"
    }
  }, {
    types: ["tag", "atrule", "deleted"],
    style: {
      color: "#E06C75"
    }
  }, {
    types: ["tag"],
    languages: ["markup"],
    style: {
      color: "#E06C75"
    }
  }, {
    types: ["punctuation", "operator"],
    style: {
      color: "rgb(212, 212, 212)"
    }
  }, {
    types: ["punctuation"],
    languages: ["markup"],
    style: {
      color: "#808080"
    }
  }, {
    types: ["function"],
    style: {
      color: "#D19A66"
    }
  }, {
    types: ["class-name", "function", "mayble-class-name", "method", "function-variable", "variable", "attr-name", "constant"],
    style: {
      color: "#E5C07B"
    }
  }, {
    types: ["char"],
    style: {
      color: "rgb(209, 105, 105)"
    }
  }]
};
var primary_default = primary;

// src/utils/getThemeAdditionalColors.ts
function getThemeAdditionalColors(theme15) {
  switch (theme15) {
    case "dracula":
      return {
        numbersColor: "#86868b",
        numbersBorderColor: "#a47cde",
        numbersBackgroundColor: "#20212b",
        srollbarThumbColor: "#ad88e6",
        scrollbarTrackColor: "#191a22"
      };
    case "duotoneDark":
      return {
        numbersColor: "#86868b",
        numbersBorderColor: "#fac48e",
        numbersBackgroundColor: "#201d29",
        srollbarThumbColor: "#f8ca9d",
        scrollbarTrackColor: "#1b1824"
      };
    case "duotoneLight":
      return {
        numbersColor: "#4e4e58",
        numbersBorderColor: "#063289",
        numbersBackgroundColor: "#f0ebe4",
        srollbarThumbColor: "#0a317e",
        scrollbarTrackColor: "#e0dbd3"
      };
    case "github":
      return {
        numbersColor: "#4e4e58",
        numbersBorderColor: "#00008f",
        numbersBackgroundColor: "#ebebeb",
        srollbarThumbColor: "#03037e",
        scrollbarTrackColor: "#d8d3cc"
      };
    case "nightOwl":
      return {
        numbersColor: "#d4f5ef",
        numbersBorderColor: "#7fdbca",
        numbersBackgroundColor: "#01111f",
        srollbarThumbColor: "#6ecfbe",
        scrollbarTrackColor: "#010c16"
      };
    case "nightOwlLight":
      return {
        numbersColor: "#3a4745",
        numbersBorderColor: "#0c969b",
        numbersBackgroundColor: "#f1f1f1",
        srollbarThumbColor: "#149ea3",
        scrollbarTrackColor: "#e9e9e9"
      };
    case "oceanicNext":
      return {
        numbersColor: "#d3bbd3",
        numbersBorderColor: "#b098b0",
        numbersBackgroundColor: "#21252e",
        srollbarThumbColor: "#a38ca3",
        scrollbarTrackColor: "#1b1e25"
      };
    case "palenight":
      return {
        numbersColor: "#b8bfbd",
        numbersBorderColor: "#b8bfbd",
        numbersBackgroundColor: "#202333",
        srollbarThumbColor: "#a6afac",
        scrollbarTrackColor: "#1a1d2b"
      };
    case "okaidia":
      return {
        numbersColor: "#8c8c92",
        numbersBorderColor: "#4fc2df",
        numbersBackgroundColor: "#1c1d18",
        srollbarThumbColor: "#44b1cc",
        scrollbarTrackColor: "#171812"
      };
    case "shadesOfPurple":
      return {
        numbersColor: "#ffac3e",
        numbersBorderColor: "#fc9819",
        numbersBackgroundColor: "#252349",
        srollbarThumbColor: "#eb8f16",
        scrollbarTrackColor: "#1d1b3f"
      };
    case "synthwave84":
      return {
        numbersColor: "#d4ccc0",
        numbersBorderColor: "#d4ccc0",
        numbersBackgroundColor: "#251c33",
        srollbarThumbColor: "#c9c1b6",
        scrollbarTrackColor: "#181636"
      };
    case "ultramin":
      return {
        numbersColor: "#343338",
        numbersBorderColor: "#747377",
        numbersBackgroundColor: "#fafafa",
        srollbarThumbColor: "#6d6c72",
        scrollbarTrackColor: "#e9e9e9"
      };
    case "vsDark":
      return {
        numbersColor: "#71717A",
        numbersBorderColor: "#5095ca",
        numbersBackgroundColor: "#161616",
        srollbarThumbColor: "#438ac0",
        scrollbarTrackColor: "#131212"
      };
    case "vsLight":
      return {
        numbersColor: "#494957",
        numbersBorderColor: "#5290ff",
        numbersBackgroundColor: "#f7f7f7",
        srollbarThumbColor: "#4986f0",
        scrollbarTrackColor: "#eeebeb"
      };
    default:
      return {
        numbersColor: "#71717A",
        numbersBackgroundColor: "#1b1816",
        numbersBorderColor: "#9d25ba",
        srollbarThumbColor: "#ac38c9",
        scrollbarTrackColor: "#201d1b"
      };
  }
}

// src/themes/index.ts
var defaultThemes = {
  dracula: dracula_default,
  duotoneDark: duotoneDark_default,
  duotoneLight: duotoneLight_default,
  github: github_default,
  nightOwl: nightOwl_default,
  nightOwlLight: nightOwlLight_default,
  oceanicNext: oceanicNext_default,
  palenight: palenight_default,
  okaidia: okaidia_default,
  shadesOfPurple: shadesOfPurple_default,
  synthwave84: synthwave84_default,
  ultramin: ultramin_default,
  vsDark: vsDark_default,
  vsLight: vsLight_default
};
var newdefaultThemes = Object.entries(defaultThemes).reduce(function (prev, _ref16) {
  var _ref17 = _slicedToArray(_ref16, 2),
    key = _ref17[0],
    theme15 = _ref17[1];
  var _key = key;
  var someColorsOfPlain = getThemeAdditionalColors(_key);
  prev[_key] = Object.assign({}, theme15, {
    plain: Object.assign({}, theme15 === null || theme15 === void 0 ? void 0 : theme15.plain, someColorsOfPlain)
  });
  return prev;
}, defaultThemes);
var themes = Object.assign({}, newdefaultThemes, {
  primary: primary_default
});
var themes_default = themes;

// src/themes/languages/index.ts
var languages = ["markup", "html", "bash", "clike", "c", "cpp", "css", "css-extras", "javascript", "jsx", "js-extras", "js-templates", "coffeescript", "diff", "git", "go", "graphql", "markup-templating", "handlebars", "json", "less", "makefile", "markdown", "objectivec", "ocaml", "python", "reason", "sass", "scss", "sql", "stylus", "tsx", "typescript", "wasm", "yaml", new String()];
function _createLanguagePlugin(object) {
  return object;
}

// src/index.tsx
function Highlight2(_ref18) {
  var _children$match, _selectedTheme$plain, _selectedTheme$plain2, _selectedTheme$plain3, _selectedTheme$plain4, _selectedTheme$plain5;
  var children = _ref18.children,
    _ref18$theme = _ref18.theme,
    theme15 = _ref18$theme === void 0 ? "primary" : _ref18$theme,
    _ref18$language = _ref18.language,
    language = _ref18$language === void 0 ? "jsx" : _ref18$language,
    _ref18$showNumbers = _ref18.showNumbers,
    showNumbers = _ref18$showNumbers === void 0 ? true : _ref18$showNumbers,
    _ref18$showNumbersBor = _ref18.showNumbersBorder,
    showNumbersBorder = _ref18$showNumbersBor === void 0 ? true : _ref18$showNumbersBor,
    numbersContainerClassName = _ref18.numbersContainerClassName,
    numbersClassName = _ref18.numbersClassName,
    plugins = _ref18.plugins,
    rest = _objectWithoutProperties(_ref18, _excluded);
  var numberOfLines = (_children$match = children.match(/\n/g)) === null || _children$match === void 0 ? void 0 : _children$match.length;
  var lines = Array.from({
    length: numberOfLines ? numberOfLines + 1 : 1
  }).map(function (_, i) {
    return i + 1;
  });
  var selectedTheme = typeof theme15 === "string" ? themes_default[theme15] : theme15;
  return /*#__PURE__*/_reactJsxRuntime.jsx(HighlightContainer, Object.assign({}, rest, {
    style: Object.assign({
      backgroundColor: selectedTheme === null || selectedTheme === void 0 ? void 0 : (_selectedTheme$plain = selectedTheme.plain) === null || _selectedTheme$plain === void 0 ? void 0 : _selectedTheme$plain.backgroundColor
    }, rest.style),
    children: /*#__PURE__*/_reactJsxRuntime.jsxs(HighlightContent, {
      style: {
        "--scrollbar-thumb": selectedTheme === null || selectedTheme === void 0 ? void 0 : (_selectedTheme$plain2 = selectedTheme.plain) === null || _selectedTheme$plain2 === void 0 ? void 0 : _selectedTheme$plain2.srollbarThumbColor,
        "--scrollbar-track": selectedTheme === null || selectedTheme === void 0 ? void 0 : (_selectedTheme$plain3 = selectedTheme.plain) === null || _selectedTheme$plain3 === void 0 ? void 0 : _selectedTheme$plain3.scrollbarTrackColor
      },
      children: [showNumbers && /*#__PURE__*/_reactJsxRuntime.jsx(HighlightNumbers, {
        className: numbersContainerClassName,
        showBorder: showNumbersBorder,
        style: {
          gridTemplateRows: "repeat(" + numberOfLines + ",24px)",
          backgroundColor: selectedTheme === null || selectedTheme === void 0 ? void 0 : (_selectedTheme$plain4 = selectedTheme.plain) === null || _selectedTheme$plain4 === void 0 ? void 0 : _selectedTheme$plain4.numbersBackgroundColor,
          borderColor: selectedTheme === null || selectedTheme === void 0 ? void 0 : (_selectedTheme$plain5 = selectedTheme.plain) === null || _selectedTheme$plain5 === void 0 ? void 0 : _selectedTheme$plain5.numbersBorderColor
        },
        children: lines.map(function (line) {
          var _selectedTheme$plain6;
          return /*#__PURE__*/_reactJsxRuntime.jsx(HighlightNumber, {
            style: {
              color: selectedTheme === null || selectedTheme === void 0 ? void 0 : (_selectedTheme$plain6 = selectedTheme.plain) === null || _selectedTheme$plain6 === void 0 ? void 0 : _selectedTheme$plain6.numbersColor
            },
            className: numbersClassName,
            children: line
          }, line);
        })
      }), /*#__PURE__*/_reactJsxRuntime.jsx(CodeBlock, {
        plugins: plugins,
        code: children,
        theme: selectedTheme,
        language: language
      })]
    })
  }));
}
Highlight2.displayName = "Highlight2";
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */

/***/ }),

/***/ "./.storybook/preview.js-generated-config-entry.js":
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// NAMESPACE OBJECT: ./.storybook/preview.js
var preview_namespaceObject = {};
__webpack_require__.r(preview_namespaceObject);
__webpack_require__.d(preview_namespaceObject, {
  "__namedExportsOrder": () => (__namedExportsOrder),
  "decorators": () => (decorators),
  "parameters": () => (parameters)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.keys.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.symbol.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.array.filter.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.array.for-each.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/web.dom-collections.for-each.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.define-properties.js
var es_object_define_properties = __webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.define-properties.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.define-property.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+client-api@6.5.16_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/client-api/dist/esm/ClientApi.js + 6 modules
var ClientApi = __webpack_require__("../../node_modules/.pnpm/@storybook+client-api@6.5.16_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/client-api/dist/esm/ClientApi.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./.storybook/preview.js


var parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*'
  },
  layout: 'padded',
  /*backgrounds: {
    default: 'electric-ribbon',
    values: [
      {
        name: 'electric-ribbon',
        value: `linear-gradient(180deg, ${theme`colors.electric`}, ${theme`colors.ribbon`})`,
      },
    ],
  },*/
  controls: {
    expanded: true
  }
};
var decorators = [function (story) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: story()
  });
}];
var __namedExportsOrder = ["parameters", "decorators"];
;// CONCATENATED MODULE: ./.storybook/preview.js-generated-config-entry.js









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/* eslint-disable import/no-unresolved */


Object.keys(preview_namespaceObject).forEach(function (key) {
  var value = preview_namespaceObject[key];
  switch (key) {
    case 'args':
      {
        return (0,ClientApi/* addArgs */.uc)(value);
      }
    case 'argTypes':
      {
        return (0,ClientApi/* addArgTypes */.v9)(value);
      }
    case 'decorators':
      {
        return value.forEach(function (decorator) {
          return (0,ClientApi/* addDecorator */.$9)(decorator, false);
        });
      }
    case 'loaders':
      {
        return value.forEach(function (loader) {
          return (0,ClientApi/* addLoader */.HZ)(loader, false);
        });
      }
    case 'parameters':
      {
        return (0,ClientApi/* addParameters */.h1)(_objectSpread({}, value), false);
      }
    case 'argTypesEnhancers':
      {
        return value.forEach(function (enhancer) {
          return (0,ClientApi/* addArgTypesEnhancer */.My)(enhancer);
        });
      }
    case 'argsEnhancers':
      {
        return value.forEach(function (enhancer) {
          return (0,ClientApi/* addArgsEnhancer */._C)(enhancer);
        });
      }
    case 'render':
      {
        return (0,ClientApi/* setGlobalRender */.$P)(value);
      }
    case 'globals':
    case 'globalTypes':
      {
        var v = {};
        v[key] = value;
        return (0,ClientApi/* addParameters */.h1)(v, false);
      }
    case '__namedExportsOrder':
    case 'decorateStory':
    case 'renderToDOM':
      {
        return null; // This key is not handled directly in v6 mode.
      }

    default:
      {
        // eslint-disable-next-line prefer-template
        return console.log(key + ' was not supported :( !');
      }
  }
});

/***/ }),

/***/ "./storybook-init-framework-entry.js":
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@storybook+react@6.5.15_eva3rpnemaulribxdkfxya5kq4/node_modules/@storybook/react/dist/esm/client/index.js");


/***/ }),

/***/ "./stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Highlight.stories.tsx": "./stories/Highlight.stories.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$";

/***/ }),

/***/ "./stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "?0dd1":
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./generated-stories-entry.cjs":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _frameworkImportPath = __webpack_require__("../../node_modules/.pnpm/@storybook+react@6.5.15_eva3rpnemaulribxdkfxya5kq4/node_modules/@storybook/react/dist/esm/client/index.js");

/* eslint-disable import/no-unresolved */
(0, _frameworkImportPath.configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")], module, false);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [393], () => (__webpack_exec__("../../node_modules/.pnpm/@storybook+core-client@6.5.15_o3ten7nsuz3dqqktls46i6uq3y/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"), __webpack_exec__("../../node_modules/.pnpm/@storybook+core-client@6.5.15_o3ten7nsuz3dqqktls46i6uq3y/node_modules/@storybook/core-client/dist/esm/globals/globals.js"), __webpack_exec__("./storybook-init-framework-entry.js"), __webpack_exec__("../../node_modules/.pnpm/@storybook+react@6.5.15_eva3rpnemaulribxdkfxya5kq4/node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"), __webpack_exec__("../../node_modules/.pnpm/@storybook+react@6.5.15_eva3rpnemaulribxdkfxya5kq4/node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"), __webpack_exec__("../../node_modules/.pnpm/@storybook+addon-docs@6.5.15_mvln3sum6fvrjzpjn2dci54xdm/node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"), __webpack_exec__("../../node_modules/.pnpm/@storybook+addon-backgrounds@6.5.15_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"), __webpack_exec__("../../node_modules/.pnpm/@storybook+addon-measure@6.5.15_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"), __webpack_exec__("../../node_modules/.pnpm/@storybook+addon-outline@6.5.15_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"), __webpack_exec__("../../node_modules/.pnpm/@storybook+addon-links@6.5.15_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"), __webpack_exec__("../../node_modules/.pnpm/@storybook+addon-actions@6.5.15_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"), __webpack_exec__("../../node_modules/.pnpm/@storybook+addon-interactions@6.5.15_gsd45h2y6cltjdan3ml6xwncr4/node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"), __webpack_exec__("../../node_modules/.pnpm/@storybook+addon-a11y@6.5.15_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"), __webpack_exec__("./.storybook/preview.js-generated-config-entry.js"), __webpack_exec__("./generated-stories-entry.cjs")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.fb255890.iframe.bundle.js.map