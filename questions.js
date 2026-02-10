export const questions = [
  // JavaScript Basics (1–25)
  {
    number: 1,
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    number: 2,
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["/", "//", "/* */", "#"],
    correctAnswer: "//"
  },
  {
    number: 3,
    question: "Which method outputs messages to the browser console?",
    options: ["console.print()", "print()", "console.log()", "log()"],
    correctAnswer: "console.log()"
  },
  {
    number: 4,
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "var colors = (1:'red', 2:'blue')",
      "var colors = ['red', 'blue']",
      "var colors = 'red', 'blue'",
      "var colors = {red, blue}"
    ],
    correctAnswer: "var colors = ['red', 'blue']"
  },
  {
    number: 5,
    question: "Which operator checks both value and type?",
    options: ["==", "=", "===", "!="],
    correctAnswer: "==="
  },
  {
    number: 6,
    question: "What does NaN stand for?",
    options: ["Not a Name", "Not a Number", "New and Null", "Number and Null"],
    correctAnswer: "Not a Number"
  },
  {
    number: 7,
    question: "Which keyword is used to define a constant?",
    options: ["var", "let", "const", "static"],
    correctAnswer: "const"
  },
  {
    number: 8,
    question: "Which function is used to parse a string to an integer?",
    options: ["parseInt()", "Number()", "int()", "toInteger()"],
    correctAnswer:"parseInt()"
  },
  {
    number: 9,
    question: "Which loop executes at least once?",
    options: ["for", "while", "do...while", "foreach"],
    correctAnswer: "do...while"
  },
  {
    number: 10,
    question: "Which method removes the last element from an array?",
    options: ["shift()", "pop()", "push()", "slice()"],
    correctAnswer: "pop()"
  },
  {
    number: 11,
    question: "How do you write an arrow function?",
    options: [
      "function => myFunc()",
      "() => {}",
      "=> function()",
      "arrow() {}"
    ],
    correctAnswer: "() => {}"
  },
  {
    number: 12,
    question: "What will typeof undefined return?",
    options: ["null", "undefined", "object", "string"],
    correctAnswer: "undefined"
  },
  {
    number: 13,
    question: "Which event occurs when a button is clicked?",
    options: ["onhover", "onload", "onclick", "onchange"],
    correctAnswer: "onclick"
  },
  {
    number: 14,
    question: "Which method converts an object to JSON?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.object()"
    ],
    correctAnswer: "JSON.stringify()"
  },
  {
    number: 15,
    question: "Which keyword exits a loop?",
    options: ["stop", "exit", "break", "return"],
    correctAnswer:"break"
  },
  {
    number: 16,
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Document Order Method",
      "Display Object Mode"
    ],
    correctAnswer:"Document Object Model"
  },
  {
    number: 17,
    question: "Which method selects an element by ID?",
    options: [
      "getElementById()",
      "querySelectorAll()",
      "getElementsByClass()",
      "selectById()"
    ],
    correctAnswer: "getElementById()"
  },
  {
    number: 18,
    question: "Which value is falsy in JavaScript?",
    options: ["1", "true", "0", "'false'"],
    correctAnswer: "0"
  },
  {
    number: 19,
    question: "Which operator is used for logical AND?",
    options: ["||", "&&", "!", "&"],
    correctAnswer: "&&"
  },
  {
    number: 20,
    question: "Which keyword defines a function?",
    options: ["function", "func", "define", "method"],
    correctAnswer: "function"
  },
  {
    number: 21,
    question: "Which array method adds an item to the end?",
    options: ["push()", "unshift()", "pop()", "splice()"],
    correctAnswer: "push()"
  },
  {
    number: 22,
    question: "Which JavaScript feature allows reusable code?",
    options: ["Loops", "Functions", "Events", "Conditions"],
    correctAnswer: "Functions"
  },
  {
    number: 23,
    question: "Which statement handles errors?",
    options: ["try...catch", "if...else", "switch", "throw"],
    correctAnswer: "try...catch"
  },
  {
    number: 24,
    question: "Which keyword refers to the current object?",
    options: ["self", "this", "object", "current"],
    correctAnswer: "this"
  },
  {
    number: 25,
    question: "Which method delays execution?",
    options: ["setTimeout()", "setInterval()", "delay()", "wait()"],
    correctAnswer: "setTimeout()"
  },

  // HTML & CSS (26–50)
  {
    number: 26,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language"
    ],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    number: 27,
    question: "Which tag is used to create a hyperlink?",
    options: ["a", "link", "href", "url"],
    correctAnswer: "a"
  },
  {
    number: 28,
    question: "Which HTML tag is used to insert an image?",
    options: ["img", "image", "src", "pic"],
    correctAnswer: "img"
  },
  {
    number: 29,
    question: "Which tag is used for the largest heading?",
    options: ["h6", "h4", "h1", "head"],
    correctAnswer: "h1"
  },
  {
    number: 30,
    question: "Which attribute specifies the image source?",
    options: ["href", "alt", "src", "link"],
    correctAnswer: "src"
  },
  {
    number: 31,
    question: "Which tag creates an ordered list?",
    options: ["ul", "ol", "li", "list"],
    correctAnswer: "ol"
  },
  {
    number: 32,
    question: "Which HTML tag is used to create a form?",
    options: ["input", "form", "fieldset", "label"],
    correctAnswer: "form"
  },
  {
    number: 33,
    question: "Which CSS property changes text color?",
    options: ["font-color", "text-color", "color", "background"],
    correctAnswer: "color"
  },
  {
    number: 34,
    question: "Which CSS property controls spacing inside an element?",
    options: ["margin", "padding", "border", "gap"],
    correctAnswer: "padding"
  },
  {
    number: 35,
    question: "Which CSS property changes background color?",
    options: ["color", "bgcolor", "background-color", "fill"],
    correctAnswer: "background-color"
  },
  {
    number: 36,
    question: "Which display value places elements in a row by default?",
    options: ["block", "inline", "flex", "grid"],
    correctAnswer: "inline"
  },
  {
    number: 37,
    question: "Which position value keeps element relative to itself?",
    options: ["absolute", "fixed", "relative", "static"],
    correctAnswer: "relative"
  },
  {
    number: 38,
    question: "Which CSS unit is relative to viewport width?",
    options: ["px", "em", "%", "vw"],
    correctAnswer: "vw"
  },
  {
    number: 39,
    question: "Which CSS layout system is two-dimensional?",
    options: ["Flexbox", "Grid", "Block", "Inline"],
    correctAnswer: "Grid"
  },
  {
    number: 40,
    question: "Which tag links an external CSS file?",
    options: ["style", "css", "script", "link"],
    correctAnswer: "link"
  },
  {
    number: 41,
    question: "Which CSS property makes text bold?",
    options: ["font-style", "font-weight", "text-bold", "bold"],
    correctAnswer: "font-weight"
  },
  {
    number: 42,
    question: "Which HTML element is semantic?",
    options: ["div", "span", "section", "b"],
    correctAnswer: "section"
  },
  {
    number: 43,
    question: "Which input type hides text?",
    options: ["text", "password", "hidden", "secure"],
    correctAnswer: "password"
  },
  {
    number: 44,
    question: "Which CSS property aligns text?",
    options: ["text-align", "align-text", "font-align", "justify-text"],
    correctAnswer: "text-align"
  },
  {
    number: 45,
    question: "Which tag is used to embed JavaScript?",
    options: ["js", "javascript", "script", "code"],
    correctAnswer: "script"
  },
  {
    number: 46,
    question: "Which HTML tag defines the page title?",
    options: ["meta", "title", "head", "header"],
    correctAnswer: "title"
  },
  {
    number: 47,
    question: "Which CSS property controls element size?",
    options: ["scale", "size", "width", "dimension"],
    correctAnswer: "width"
  },
  {
    number: 48,
    question: "Which CSS property hides overflow?",
    options: ["display", "visibility", "overflow", "hidden"],
    correctAnswer: "overflow"
  },
  {
    number: 49,
    question: "Which tag is used for line break?",
    options: ["lb", "break", "br", "hr"],
    correctAnswer: "br"
  },
  {
    number: 50,
    question: "Which CSS value removes default spacing?",
    options: ["0", "none", "auto", "clear"],
    correctAnswer: "0"
  }
];