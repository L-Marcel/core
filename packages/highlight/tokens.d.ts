export type HighlightTokens = [
  "char",
  "cdata",
  "doctype",
  "entity",
  "class-name",
  "boolean",
  "property",
  "function",
  "maybe-class-name",
  "method",
  "function-variable",
  "variable",
  "attr-name",
  "punctuation",
  "operator",
  "control-flow",
  "markup",
  "tag",
  "atrule",
  "deleted",
  "selector",
  "url",
  "string",
  "attr-value",
  "template-punctuation",
  "constant",
  "number",
  "builtin",
  "changed",
  "keyword",
  "interpolation-punctuation",
  "comment",
  "inserted",
  "important",
  "content",
  "null",
  "prolog",
  "blockquote",
  "hr",
  "code-snippet",
  "italic",
  "style",
  "bold",
  "strike",
  "list",
  "title",
  "property-line",
  "property-declaration",
  "hexcode",
  "unit",
  "macro",
  "symbol",
  "regex",
  "directive-hash",
  "script",
  "named-entity",
  "color",
  "hashbang",
  "template-string",
  "string-property",
  "method-variable",
  "parameter",
  "known-class-name",
  "imports",
  "exports",
  "module",
  "nil",
  "literal-property",
  "spread",
  "arrow",
  "property-access",
  "dom",
  "console",
  "string-template",
  "eol-comment",
  "string-operator",
  "token-operator",
  "range",
  "terminal",
  "repetition",
  "definition",
  "core-rule",
  "rule",
  "xml",
  "attribute",
  "character-class",
  "action",
  "command",
  "annotation",
  "label",
  "token",
  "directive-inline",
  "directive-block",
  "directive-flags",
  "sql",
  "trigger",
  "statement",
  "system-function",
  "monadic-operator",
  "dyadic-operator",
  "assignment",
  "dfn",
  "identifier",
  "raw-string",
  "base-clause",
  "generic-function",
  "double-colon",
  "version-symbol",
  "directive",
  "instruction",
  "register",
  "character",
  "html-string",
  "css-string",
  "js-string",
  "md-string",
  "sql-string",
  "sh-string",
  "multistring",
  "literal",
  "type",
  "predicate",
  "builtin-function",
  "sugar",
  "comment-block",
  "table",
  "passthrough-block",
  "literal-block",
  "other-block",
  "list-punctuation",
  "list-label",
  "indented-block",
  "attribute-entry",
  "attributes",
  "page-break",
  "admonition",
  "callout",
  "inline",
  "replacement",
  "line-continuation",
  "asp-comment",
  "page-directive",
  "op-code",
  "hex-number",
  "binary-number",
  "decimal-number",
  "r-register",
  "argument",
  "argument-label",
  "type-cast",
  "function-identifier",
  "shebang",
  "function-name",
  "for-or-select",
  "assign-left",
  "environment",
  "file-descriptor",
  "interpolated-string",
  "datatype",
  "decorator",
  "metadata",
  "bison",
  "string-literal",
  "character-literal",
  "dot-notation-on-brackets",
  "special-name",
  "dot-notation-on-name",
  "word-number-scientific",
  "word-name",
  "word-number",
  "null-literal",
  "primitive-functions",
  "primitive-1-operators",
  "primitive-2-operators",
  "pointer",
  "increment",
  "decrement",
  "branching",
  "directive-statement",
  "interpolation-string",
  "namespace",
  "type-expression",
  "return-type",
  "constructor-invocation",
  "generic-method",
  "type-list",
  "preprocessor",
  "named-parameter",
  "scope",
  "string-interpolation",
  "parameter-type",
  "parallel-keyword",
  "level",
  "multiline-comment",
  "block-regex",
  "inline-javascript",
  "multiline-string",
  "class-member",
  "regex-literal",
  "langext",
  "scheme",
  "none",
  "nonce",
  "hash",
  "host",
  "unsafe",
  "safe",
  "meta",
  "cookware-group",
  "ingredient-group",
  "timer-group",
  "punct",
  "expansion",
  "heredoc-string",
  "command-literal",
  "method-definition",
  "value",
  "relationship",
  "token-string",
  "generics",
  "mime-type",
  "date",
  "data-field",
  "measure",
  "env",
  "coord",
  "deleted-sign",
  "deleted-arrow",
  "inserted-sign",
  "inserted-arrow",
  "unchanged",
  "diff",
  "delimiter",
  "filter",
  "test",
  "class",
  "graph-name",
  "compass-point",
  "node",
  "special",
  "section",
  "key",
  "language-javascript",
  "doc",
  "atom",
  "import-statement",
  "hvariable",
  "language-lua",
  "ruby",
  "quoted-function",
  "quoted-atom",
  "reference",
  "cell",
  "computation-expression",
  "regexp",
  "custom-string",
  "special-using",
  "stack-effect-delimiter",
  "combinators",
  "kernel-builtin",
  "sequences-builtin",
  "math-builtin",
  "constructor-word",
  "other-builtin-syntax",
  "conventionally-named-word",
  "colon-syntax",
  "semicolon-or-setlocal",
  "curly-brace-literal-delimiter",
  "quotation-delimiter",
  "normal-word",
  "character-code",
  "assembler-code",
  "non-standard",
  "path",
  "flow-punctuation",
  "quoted-number",
  "ftl-comment",
  "ftl-directive",
  "ftl-interpolation",
  "shell",
  "continuation",
  "checksum",
  "line-value",
  "record",
  "translator-comment",
  "extracted-comment",
  "reference-comment",
  "flag-comment",
  "previously-untranslated-comment",
  "pystring",
  "feature",
  "scenario",
  "table-body",
  "table-head",
  "outline",
  "commit-sha1",
  "location-counter",
  "version",
  "go-version",
  "spock-block",
  "description",
  "atom-input",
  "scalar",
  "fragment",
  "definition-mutation",
  "definition-query",
  "property-query",
  "object",
  "multiline-code",
  "filter-css",
  "filter-coffee",
  "filter-erb",
  "filter-javascript",
  "filter-ruby",
  "code",
  "interpolation",
  "block",
  "brackets",
  "reification",
  "heredoc",
  "request-line",
  "response-status",
  "application-javascript",
  "application-json",
  "application-xml",
  "text-xml",
  "text-html",
  "text-css",
  "text-plain",
  "header",
  "builtin-keyword",
  "escape",
  "entry",
  "verb",
  "position",
  "text",
  "triple-quoted-string",
  "adverb",
  "conjunction",
  "import",
  "static",
  "code-section",
  "summary",
  "stack-frame",
  "more",
  "transform",
  "aggregates",
  "redirects",
  "property-literal",
  "pipe",
  "c-style-function",
  "dot",
  "optional-parameter",
  "example",
  "unquoted",
  "error-message",
  "ip",
  "email",
  "conditional-configuration",
  "virtual-key",
  "header-keyword",
  "header-statement",
  "rule-keyword",
  "structural-keyword",
  "compile-target",
  "multiline",
  "singleline",
  "operator-word",
  "system-variable",
  "name",
  "operator-char",
  "datetime",
  "equation",
  "headline",
  "latte-tag",
  "php",
  "mixin-usage",
  "embedded-scheme",
  "empty",
  "heading",
  "quoted-symbol",
  "lisp-property",
  "splice",
  "declare",
  "interactive",
  "defvar",
  "defun",
  "lambda",
  "car",
  "keyword-operator",
  "exception",
  "error",
  "warning",
  "info",
  "debug",
  "trace",
  "separator",
  "ip-address",
  "mac-address",
  "domain",
  "uuid",
  "file-path",
  "time",
  "output",
  "generator",
  "builtin-target",
  "target",
  "front-matter-block",
  "url-reference",
  "missing",
  "function-call",
  "function-definition",
  "flag",
  "tensor-punctuation",
  "inter-arrow-label",
  "quantity",
  "doc-comment",
  "type-char",
  "define",
  "generic-text",
  "pattern",
  "search",
  "standard-pattern",
  "quantifier",
  "pattern-def",
  "optionality",
  "variation",
  "sequence",
  "span",
  "field-capture",
  "antiquotation",
  "type-variable",
  "variant",
  "operator-like-punctuation",
  "discard",
  "procedure-definition",
  "procedure-name",
  "constant-parameter-sign",
  "undefined",
  "builtin-type",
  "constant-opencl-kernel",
  "parser-comment",
  "expression",
  "asm",
  "foreach-variable",
  "tlist",
  "operator-keyword",
  "filehandle",
  "v-string",
  "nowdoc-string",
  "backtick-quoted-string",
  "single-quoted-string",
  "double-quoted-string",
  "package",
  "class-name-definition",
  "type-casting",
  "type-hint",
  "type-declaration",
  "static-context",
  "argument-name",
  "class-name-fully-qualified",
  "divider",
  "quoted-identifier",
  "data-type",
  "vector-match",
  "context-labels",
  "context-range",
  "map",
  "positional-class-name",
  "multiline-script",
  "filter-ejs",
  "filter-handlebars",
  "filter-less",
  "filter-livescript",
  "filter-markdown",
  "multiline-plain-text",
  "flow-control",
  "mixin",
  "plain-text",
  "inline-lang-c",
  "inline-lang-cpp",
  "inline-lang-fortran",
  "inline-lang",
  "javascript-function",
  "javascript-expression",
  "percent-operator",
  "ellipsis",
  "lang",
  "lambda-parameter",
  "razor-comment",
  "delegate-operator",
  "constructor",
  "char-class",
  "special-escape",
  "char-set",
  "backreference",
  "anchor",
  "group",
  "alternation",
  "substitution-def",
  "link-target",
  "field",
  "command-line-option",
  "quoted-literal-block",
  "list-bullet",
  "doctest-block",
  "link",
  "component",
  "optional",
  "wildcard",
  "settings",
  "variables",
  "test-cases",
  "keywords",
  "tasks",
  "closure-params",
  "lifetime-annotation",
  "fragment-specifier",
  "type-definition",
  "module-declaration",
  "datalines",
  "proc-sql",
  "proc-groovy",
  "proc-lua",
  "proc-cas",
  "proc-args",
  "macro-keyword",
  "macro-variable",
  "macro-string-functions",
  "macro-declaration",
  "macro-end",
  "input",
  "options-args",
  "cas-actions",
  "format",
  "altformat",
  "numeric-constant",
  "step",
  "atrule-line",
  "variable-line",
  "module-modifier",
  "placeholder",
  "block-arguments",
  "temporary-variables",
  "embedded-php",
  "word",
  "guid",
  "command-arg",
  "magic-variable",
  "attribute-punctuation",
  "function-arg",
  "constraint",
  "program-block",
  "mata",
  "java",
  "python",
  "address",
  "atrule-declaration",
  "variable-declaration",
  "func",
  "other-directive",
  "short-argument",
  "omit",
  "fail",
  "pass",
  "pragma",
  "bailout",
  "plan",
  "subtest",
  "yamlish",
  "phrase",
  "extractor",
  "pattern-punctuation",
  "tag-name",
  "category",
  "comment-hash",
  "comment-slash",
  "source-layers",
  "source-commands",
  "query",
  "authority",
  "generic",
  "unparsed",
  "velocity-comment",
  "kernel-function",
  "vhdl-vectors",
  "builtin-attribute",
  "functions",
  "function-calls",
  "bool-literal",
  "hex-int-literal",
  "hex-float-literal",
  "decimal-float-literal",
  "int-literal",
  "nowiki",
  "block-comment",
  "emphasis",
  "table-tag",
  "context",
  "blank",
  "global-variable",
  "function-inline",
  "function-block",
  "directive-block-open",
  "directive-block-separator",
  "directive-block-close",
  "xquery-comment",
  "extension",
  "axis",
  "xquery-element",
  "xquery-attribute"
][number];

export type TokenObject = {
  pattern: RegExp;

  /**
   * If `true`, then the first capturing group of `pattern` will (effectively) behave as a lookbehind
   * group meaning that the captured text will not be part of the matched text of the new token.
   */
  lookbehind?: boolean | undefined;

  /**
   * Whether the token is greedy.
   *
   * @default false
   */
  greedy?: boolean | undefined;

  /**
   * An optional alias or list of aliases.
   */
  alias?: string | string[] | undefined;

  /**
   * The nested tokens of this token.
   *
   * This can be used for recursive language definitions.
   *
   * Note that this can cause infinite recursion.
   */
  inside?: Grammar | undefined;
};

export type TokenRule = RegExp | TokenObject;

export type Grammar = {
  [Key in DefinedGrammarToken]?: TokenRule[];
};  

export type Grammar = {
  char?: TokenRule[]
	cdata?: TokenRule[]
	doctype?: TokenRule[]
	entity?: TokenRule[]
	"class-name"?: TokenRule[];
	boolean?: TokenRule[]
	property?: TokenRule[]
	function?: TokenRule[]
	"maybe-class-name"?: TokenRule[];
	method?: TokenRule[]
	"function-variable"?: TokenRule[];
	variable?: TokenRule[]
	"attr-name"?: TokenRule[];
	punctuation?: TokenRule[]
	operator?: TokenRule[]
	"control-flow"?: TokenRule[];
	markup?: TokenRule[]
	tag?: TokenRule[]
	atrule?: TokenRule[]
	deleted?: TokenRule[]
	selector?: TokenRule[]
	url?: TokenRule[]
	string?: TokenRule[]
	"attr-value"?: TokenRule[];
	"template-punctuation"?: TokenRule[];
	constant?: TokenRule[]
	number?: TokenRule[]
	builtin?: TokenRule[]
	changed?: TokenRule[]
	keyword?: TokenRule[]
	"interpolation-punctuation"?: TokenRule[];
	comment?: TokenRule[]
	inserted?: TokenRule[]
	important?: TokenRule[]
	content?: TokenRule[]
	null?: TokenRule[]
	prolog?: TokenRule[]
	blockquote?: TokenRule[]
	hr?: TokenRule[]
	"code-snippet"?: TokenRule[];
	italic?: TokenRule[]
	style?: TokenRule[]
	bold?: TokenRule[]
	strike?: TokenRule[]
	list?: TokenRule[]
	title?: TokenRule[]
	"property-line"?: TokenRule[];
	"property-declaration"?: TokenRule[];
	hexcode?: TokenRule[]
	unit?: TokenRule[]
	macro?: TokenRule[]
	symbol?: TokenRule[]
	regex?: TokenRule[]
	"directive-hash"?: TokenRule[];
	script?: TokenRule[]
	"named-entity"?: TokenRule[];
	color?: TokenRule[]
	hashbang?: TokenRule[]
	"template-string"?: TokenRule[];
	"string-property"?: TokenRule[];
	"method-variable"?: TokenRule[];
	parameter?: TokenRule[]
	"known-class-name"?: TokenRule[];
	imports?: TokenRule[]
	exports?: TokenRule[]
	module?: TokenRule[]
	nil?: TokenRule[]
	"literal-property"?: TokenRule[];
	spread?: TokenRule[]
	arrow?: TokenRule[]
	"property-access"?: TokenRule[];
	dom?: TokenRule[]
	console?: TokenRule[]
	"string-template"?: TokenRule[];
	"eol-comment"?: TokenRule[];
	"string-operator"?: TokenRule[];
	"token-operator"?: TokenRule[];
	range?: TokenRule[]
	terminal?: TokenRule[]
	repetition?: TokenRule[]
	definition?: TokenRule[]
	"core-rule"?: TokenRule[];
	rule?: TokenRule[]
	xml?: TokenRule[]
	attribute?: TokenRule[]
	"character-class"?: TokenRule[];
	action?: TokenRule[]
	command?: TokenRule[]
	annotation?: TokenRule[]
	label?: TokenRule[]
	token?: TokenRule[]
	"directive-inline"?: TokenRule[];
	"directive-block"?: TokenRule[];
	"directive-flags"?: TokenRule[];
	sql?: TokenRule[]
	trigger?: TokenRule[]
	statement?: TokenRule[]
	"system-function"?: TokenRule[];
	"monadic-operator"?: TokenRule[];
	"dyadic-operator"?: TokenRule[];
	assignment?: TokenRule[]
	dfn?: TokenRule[]
	identifier?: TokenRule[]
	"raw-string"?: TokenRule[];
	"base-clause"?: TokenRule[];
	"generic-function"?: TokenRule[];
	"double-colon"?: TokenRule[];
	"version-symbol"?: TokenRule[];
	directive?: TokenRule[]
	instruction?: TokenRule[]
	register?: TokenRule[]
	character?: TokenRule[]
	"html-string"?: TokenRule[];
	"css-string"?: TokenRule[];
	"js-string"?: TokenRule[];
	"md-string"?: TokenRule[];
	"sql-string"?: TokenRule[];
	"sh-string"?: TokenRule[];
	multistring?: TokenRule[]
	literal?: TokenRule[]
	type?: TokenRule[]
	predicate?: TokenRule[]
	"builtin-function"?: TokenRule[];
	sugar?: TokenRule[]
	"comment-block"?: TokenRule[];
	table?: TokenRule[]
	"passthrough-block"?: TokenRule[];
	"literal-block"?: TokenRule[];
	"other-block"?: TokenRule[];
	"list-punctuation"?: TokenRule[];
	"list-label"?: TokenRule[];
	"indented-block"?: TokenRule[];
	"attribute-entry"?: TokenRule[];
	attributes?: TokenRule[]
	"page-break"?: TokenRule[];
	admonition?: TokenRule[]
	callout?: TokenRule[]
	inline?: TokenRule[]
	replacement?: TokenRule[]
	"line-continuation"?: TokenRule[];
	"asp-comment"?: TokenRule[];
	"page-directive"?: TokenRule[];
	"op-code"?: TokenRule[];
	"hex-number"?: TokenRule[];
	"binary-number"?: TokenRule[];
	"decimal-number"?: TokenRule[];
	"r-register"?: TokenRule[];
	argument?: TokenRule[]
	"argument-label"?: TokenRule[];
	"type-cast"?: TokenRule[];
	"function-identifier"?: TokenRule[];
	shebang?: TokenRule[]
	"function-name"?: TokenRule[];
	"for-or-select"?: TokenRule[];
	"assign-left"?: TokenRule[];
	environment?: TokenRule[]
	"file-descriptor"?: TokenRule[];
	"interpolated-string"?: TokenRule[];
	datatype?: TokenRule[]
	decorator?: TokenRule[]
	metadata?: TokenRule[]
	bison?: TokenRule[]
	"string-literal"?: TokenRule[];
	"character-literal"?: TokenRule[];
	"dot-notation-on-brackets"?: TokenRule[];
	"special-name"?: TokenRule[];
	"dot-notation-on-name"?: TokenRule[];
	"word-number-scientific"?: TokenRule[];
	"word-name"?: TokenRule[];
	"word-number"?: TokenRule[];
	"null-literal"?: TokenRule[];
	"primitive-functions"?: TokenRule[];
	"primitive-1-operators"?: TokenRule[];
	"primitive-2-operators"?: TokenRule[];
	pointer?: TokenRule[]
	increment?: TokenRule[]
	decrement?: TokenRule[]
	branching?: TokenRule[]
	"directive-statement"?: TokenRule[];
	"interpolation-string"?: TokenRule[];
	namespace?: TokenRule[]
	"type-expression"?: TokenRule[];
	"return-type"?: TokenRule[];
	"constructor-invocation"?: TokenRule[];
	"generic-method"?: TokenRule[];
	"type-list"?: TokenRule[];
	preprocessor?: TokenRule[]
	"named-parameter"?: TokenRule[];
	scope?: TokenRule[]
	"string-interpolation"?: TokenRule[];
	"parameter-type"?: TokenRule[];
	"parallel-keyword"?: TokenRule[];
	level?: TokenRule[]
	"multiline-comment"?: TokenRule[];
	"block-regex"?: TokenRule[];
	"inline-javascript"?: TokenRule[];
	"multiline-string"?: TokenRule[];
	"class-member"?: TokenRule[];
	"regex-literal"?: TokenRule[];
	langext?: TokenRule[]
	scheme?: TokenRule[]
	none?: TokenRule[]
	nonce?: TokenRule[]
	hash?: TokenRule[]
	host?: TokenRule[]
	unsafe?: TokenRule[]
	safe?: TokenRule[]
	meta?: TokenRule[]
	"cookware-group"?: TokenRule[];
	"ingredient-group"?: TokenRule[];
	"timer-group"?: TokenRule[];
	punct?: TokenRule[]
	expansion?: TokenRule[]
	"heredoc-string"?: TokenRule[];
	"command-literal"?: TokenRule[];
	"method-definition"?: TokenRule[];
	value?: TokenRule[]
	relationship?: TokenRule[]
	"token-string"?: TokenRule[];
	generics?: TokenRule[]
	"mime-type"?: TokenRule[];
	date?: TokenRule[]
	"data-field"?: TokenRule[];
	measure?: TokenRule[]
	env?: TokenRule[]
	coord?: TokenRule[]
	"deleted-sign"?: TokenRule[];
	"deleted-arrow"?: TokenRule[];
	"inserted-sign"?: TokenRule[];
	"inserted-arrow"?: TokenRule[];
	unchanged?: TokenRule[]
	diff?: TokenRule[]
	delimiter?: TokenRule[]
	filter?: TokenRule[]
	test?: TokenRule[]
	class?: TokenRule[]
	"graph-name"?: TokenRule[];
	"compass-point"?: TokenRule[];
	node?: TokenRule[]
	special?: TokenRule[]
	section?: TokenRule[]
	key?: TokenRule[]
	"language-javascript"?: TokenRule[];
	doc?: TokenRule[]
	atom?: TokenRule[]
	"import-statement"?: TokenRule[];
	hvariable?: TokenRule[]
	"language-lua"?: TokenRule[];
	ruby?: TokenRule[]
	"quoted-function"?: TokenRule[];
	"quoted-atom"?: TokenRule[];
	reference?: TokenRule[]
	cell?: TokenRule[]
	"computation-expression"?: TokenRule[];
	regexp?: TokenRule[]
	"custom-string"?: TokenRule[];
	"special-using"?: TokenRule[];
	"stack-effect-delimiter"?: TokenRule[];
	combinators?: TokenRule[]
	"kernel-builtin"?: TokenRule[];
	"sequences-builtin"?: TokenRule[];
	"math-builtin"?: TokenRule[];
	"constructor-word"?: TokenRule[];
	"other-builtin-syntax"?: TokenRule[];
	"conventionally-named-word"?: TokenRule[];
	"colon-syntax"?: TokenRule[];
	"semicolon-or-setlocal"?: TokenRule[];
	"curly-brace-literal-delimiter"?: TokenRule[];
	"quotation-delimiter"?: TokenRule[];
	"normal-word"?: TokenRule[];
	"character-code"?: TokenRule[];
	"assembler-code"?: TokenRule[];
	"non-standard"?: TokenRule[];
	path?: TokenRule[]
	"flow-punctuation"?: TokenRule[];
	"quoted-number"?: TokenRule[];
	"ftl-comment"?: TokenRule[];
	"ftl-directive"?: TokenRule[];
	"ftl-interpolation"?: TokenRule[];
	shell?: TokenRule[]
	continuation?: TokenRule[]
	checksum?: TokenRule[]
	"line-value"?: TokenRule[];
	record?: TokenRule[]
	"translator-comment"?: TokenRule[];
	"extracted-comment"?: TokenRule[];
	"reference-comment"?: TokenRule[];
	"flag-comment"?: TokenRule[];
	"previously-untranslated-comment"?: TokenRule[];
	pystring?: TokenRule[]
	feature?: TokenRule[]
	scenario?: TokenRule[]
	"table-body"?: TokenRule[];
	"table-head"?: TokenRule[];
	outline?: TokenRule[]
	"commit-sha1"?: TokenRule[];
	"location-counter"?: TokenRule[];
	version?: TokenRule[]
	"go-version"?: TokenRule[];
	"spock-block"?: TokenRule[];
	description?: TokenRule[]
	"atom-input"?: TokenRule[];
	scalar?: TokenRule[]
	fragment?: TokenRule[]
	"definition-mutation"?: TokenRule[];
	"definition-query"?: TokenRule[];
	"property-query"?: TokenRule[];
	object?: TokenRule[]
	"multiline-code"?: TokenRule[];
	"filter-css"?: TokenRule[];
	"filter-coffee"?: TokenRule[];
	"filter-erb"?: TokenRule[];
	"filter-javascript"?: TokenRule[];
	"filter-ruby"?: TokenRule[];
	code?: TokenRule[]
	interpolation?: TokenRule[]
	block?: TokenRule[]
	brackets?: TokenRule[]
	reification?: TokenRule[]
	heredoc?: TokenRule[]
	"request-line"?: TokenRule[];
	"response-status"?: TokenRule[];
	"application-javascript"?: TokenRule[];
	"application-json"?: TokenRule[];
	"application-xml"?: TokenRule[];
	"text-xml"?: TokenRule[];
	"text-html"?: TokenRule[];
	"text-css"?: TokenRule[];
	"text-plain"?: TokenRule[];
	header?: TokenRule[]
	"builtin-keyword"?: TokenRule[];
	escape?: TokenRule[]
	entry?: TokenRule[]
	verb?: TokenRule[]
	position?: TokenRule[]
	text?: TokenRule[]
	"triple-quoted-string"?: TokenRule[];
	adverb?: TokenRule[]
	conjunction?: TokenRule[]
	import?: TokenRule[]
	static?: TokenRule[]
	"code-section"?: TokenRule[];
	summary?: TokenRule[]
	"stack-frame"?: TokenRule[];
	more?: TokenRule[]
	transform?: TokenRule[]
	aggregates?: TokenRule[]
	redirects?: TokenRule[]
	"property-literal"?: TokenRule[];
	pipe?: TokenRule[]
	"c-style-function"?: TokenRule[];
	dot?: TokenRule[]
	"optional-parameter"?: TokenRule[];
	example?: TokenRule[]
	unquoted?: TokenRule[]
	"error-message"?: TokenRule[];
	ip?: TokenRule[]
	email?: TokenRule[]
	"conditional-configuration"?: TokenRule[];
	"virtual-key"?: TokenRule[];
	"header-keyword"?: TokenRule[];
	"header-statement"?: TokenRule[];
	"rule-keyword"?: TokenRule[];
	"structural-keyword"?: TokenRule[];
	"compile-target"?: TokenRule[];
	multiline?: TokenRule[]
	singleline?: TokenRule[]
	"operator-word"?: TokenRule[];
	"system-variable"?: TokenRule[];
	name?: TokenRule[]
	"operator-char"?: TokenRule[];
	datetime?: TokenRule[]
	equation?: TokenRule[]
	headline?: TokenRule[]
	"latte-tag"?: TokenRule[];
	php?: TokenRule[]
	"mixin-usage"?: TokenRule[];
	"embedded-scheme"?: TokenRule[];
	empty?: TokenRule[]
	heading?: TokenRule[]
	"quoted-symbol"?: TokenRule[];
	"lisp-property"?: TokenRule[];
	splice?: TokenRule[]
	declare?: TokenRule[]
	interactive?: TokenRule[]
	defvar?: TokenRule[]
	defun?: TokenRule[]
	lambda?: TokenRule[]
	car?: TokenRule[]
	"keyword-operator"?: TokenRule[];
	exception?: TokenRule[]
	error?: TokenRule[]
	warning?: TokenRule[]
	info?: TokenRule[]
	debug?: TokenRule[]
	trace?: TokenRule[]
	separator?: TokenRule[]
	"ip-address"?: TokenRule[];
	"mac-address"?: TokenRule[];
	domain?: TokenRule[]
	uuid?: TokenRule[]
	"file-path"?: TokenRule[];
	time?: TokenRule[]
	output?: TokenRule[]
	generator?: TokenRule[]
	"builtin-target"?: TokenRule[];
	target?: TokenRule[]
	"front-matter-block"?: TokenRule[];
	"url-reference"?: TokenRule[];
	missing?: TokenRule[]
	"function-call"?: TokenRule[];
	"function-definition"?: TokenRule[];
	flag?: TokenRule[]
	"tensor-punctuation"?: TokenRule[];
	"inter-arrow-label"?: TokenRule[];
	quantity?: TokenRule[]
	"doc-comment"?: TokenRule[];
	"type-char"?: TokenRule[];
	define?: TokenRule[]
	"generic-text"?: TokenRule[];
	pattern?: TokenRule[]
	search?: TokenRule[]
	"standard-pattern"?: TokenRule[];
	quantifier?: TokenRule[]
	"pattern-def"?: TokenRule[];
	optionality?: TokenRule[]
	variation?: TokenRule[]
	sequence?: TokenRule[]
	span?: TokenRule[]
	"field-capture"?: TokenRule[];
	antiquotation?: TokenRule[]
	"type-variable"?: TokenRule[];
	variant?: TokenRule[]
	"operator-like-punctuation"?: TokenRule[];
	discard?: TokenRule[]
	"procedure-definition"?: TokenRule[];
	"procedure-name"?: TokenRule[];
	"constant-parameter-sign"?: TokenRule[];
	undefined?: TokenRule[]
	"builtin-type"?: TokenRule[];
	"constant-opencl-kernel"?: TokenRule[];
	"parser-comment"?: TokenRule[];
	expression?: TokenRule[]
	asm?: TokenRule[]
	"foreach-variable"?: TokenRule[];
	tlist?: TokenRule[]
	"operator-keyword"?: TokenRule[];
	filehandle?: TokenRule[]
	"v-string"?: TokenRule[];
	"nowdoc-string"?: TokenRule[];
	"backtick-quoted-string"?: TokenRule[];
	"single-quoted-string"?: TokenRule[];
	"double-quoted-string"?: TokenRule[];
	package?: TokenRule[]
	"class-name-definition"?: TokenRule[];
	"type-casting"?: TokenRule[];
	"type-hint"?: TokenRule[];
	"type-declaration"?: TokenRule[];
	"static-context"?: TokenRule[];
	"argument-name"?: TokenRule[];
	"class-name-fully-qualified"?: TokenRule[];
	divider?: TokenRule[]
	"quoted-identifier"?: TokenRule[];
	"data-type"?: TokenRule[];
	"vector-match"?: TokenRule[];
	"context-labels"?: TokenRule[];
	"context-range"?: TokenRule[];
	map?: TokenRule[]
	"positional-class-name"?: TokenRule[];
	"multiline-script"?: TokenRule[];
	"filter-ejs"?: TokenRule[];
	"filter-handlebars"?: TokenRule[];
	"filter-less"?: TokenRule[];
	"filter-livescript"?: TokenRule[];
	"filter-markdown"?: TokenRule[];
	"multiline-plain-text"?: TokenRule[];
	"flow-control"?: TokenRule[];
	mixin?: TokenRule[]
	"plain-text"?: TokenRule[];
	"inline-lang-c"?: TokenRule[];
	"inline-lang-cpp"?: TokenRule[];
	"inline-lang-fortran"?: TokenRule[];
	"inline-lang"?: TokenRule[];
	"javascript-function"?: TokenRule[];
	"javascript-expression"?: TokenRule[];
	"percent-operator"?: TokenRule[];
	ellipsis?: TokenRule[]
	lang?: TokenRule[]
	"lambda-parameter"?: TokenRule[];
	"razor-comment"?: TokenRule[];
	"delegate-operator"?: TokenRule[];
	constructor?: TokenRule[]
	"char-class"?: TokenRule[];
	"special-escape"?: TokenRule[];
	"char-set"?: TokenRule[];
	backreference?: TokenRule[]
	anchor?: TokenRule[]
	group?: TokenRule[]
	alternation?: TokenRule[]
	"substitution-def"?: TokenRule[];
	"link-target"?: TokenRule[];
	field?: TokenRule[]
	"command-line-option"?: TokenRule[];
	"quoted-literal-block"?: TokenRule[];
	"list-bullet"?: TokenRule[];
	"doctest-block"?: TokenRule[];
	link?: TokenRule[]
	component?: TokenRule[]
	optional?: TokenRule[]
	wildcard?: TokenRule[]
	settings?: TokenRule[]
	variables?: TokenRule[]
	"test-cases"?: TokenRule[];
	keywords?: TokenRule[]
	tasks?: TokenRule[]
	"closure-params"?: TokenRule[];
	"lifetime-annotation"?: TokenRule[];
	"fragment-specifier"?: TokenRule[];
	"type-definition"?: TokenRule[];
	"module-declaration"?: TokenRule[];
	datalines?: TokenRule[]
	"proc-sql"?: TokenRule[];
	"proc-groovy"?: TokenRule[];
	"proc-lua"?: TokenRule[];
	"proc-cas"?: TokenRule[];
	"proc-args"?: TokenRule[];
	"macro-keyword"?: TokenRule[];
	"macro-variable"?: TokenRule[];
	"macro-string-functions"?: TokenRule[];
	"macro-declaration"?: TokenRule[];
	"macro-end"?: TokenRule[];
	input?: TokenRule[]
	"options-args"?: TokenRule[];
	"cas-actions"?: TokenRule[];
	format?: TokenRule[]
	altformat?: TokenRule[]
	"numeric-constant"?: TokenRule[];
	step?: TokenRule[]
	"atrule-line"?: TokenRule[];
	"variable-line"?: TokenRule[];
	"module-modifier"?: TokenRule[];
	placeholder?: TokenRule[]
	"block-arguments"?: TokenRule[];
	"temporary-variables"?: TokenRule[];
	"embedded-php"?: TokenRule[];
	word?: TokenRule[]
	guid?: TokenRule[]
	"command-arg"?: TokenRule[];
	"magic-variable"?: TokenRule[];
	"attribute-punctuation"?: TokenRule[];
	"function-arg"?: TokenRule[];
	constraint?: TokenRule[]
	"program-block"?: TokenRule[];
	mata?: TokenRule[]
	java?: TokenRule[]
	python?: TokenRule[]
	address?: TokenRule[]
	"atrule-declaration"?: TokenRule[];
	"variable-declaration"?: TokenRule[];
	func?: TokenRule[]
	"other-directive"?: TokenRule[];
	"short-argument"?: TokenRule[];
	omit?: TokenRule[]
	fail?: TokenRule[]
	pass?: TokenRule[]
	pragma?: TokenRule[]
	bailout?: TokenRule[]
	plan?: TokenRule[]
	subtest?: TokenRule[]
	yamlish?: TokenRule[]
	phrase?: TokenRule[]
	extractor?: TokenRule[]
	"pattern-punctuation"?: TokenRule[];
	"tag-name"?: TokenRule[];
	category?: TokenRule[]
	"comment-hash"?: TokenRule[];
	"comment-slash"?: TokenRule[];
	"source-layers"?: TokenRule[];
	"source-commands"?: TokenRule[];
	query?: TokenRule[]
	authority?: TokenRule[]
	generic?: TokenRule[]
	unparsed?: TokenRule[]
	"velocity-comment"?: TokenRule[];
	"kernel-function"?: TokenRule[];
	"vhdl-vectors"?: TokenRule[];
	"builtin-attribute"?: TokenRule[];
	functions?: TokenRule[]
	"function-calls"?: TokenRule[];
	"bool-literal"?: TokenRule[];
	"hex-int-literal"?: TokenRule[];
	"hex-float-literal"?: TokenRule[];
	"decimal-float-literal"?: TokenRule[];
	"int-literal"?: TokenRule[];
	nowiki?: TokenRule[]
	"block-comment"?: TokenRule[];
	emphasis?: TokenRule[]
	"table-tag"?: TokenRule[];
	context?: TokenRule[]
	blank?: TokenRule[]
	"global-variable"?: TokenRule[];
	"function-inline"?: TokenRule[];
	"function-block"?: TokenRule[];
	"directive-block-open"?: TokenRule[];
	"directive-block-separator"?: TokenRule[];
	"directive-block-close"?: TokenRule[];
	"xquery-comment"?: TokenRule[];
	extension?: TokenRule[]
	axis?: TokenRule[]
	"xquery-element"?: TokenRule[];
	"xquery-attribute"?: TokenRule[];
  [anotherToken: string]: TokenRule[];
};
