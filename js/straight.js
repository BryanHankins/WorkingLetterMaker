




  var CapitalLetters2 = /([A-Z])\w+/g;
  var LowerLetters2 = /([a-z])\w/g;
  var NumberLetters2 = /([0-9])\d/g;
  var renderer = i2d.canvasLayer('#myCanvas', {}, { enableEvents: false
  });
  var Answers = document.getElementById('fname').value;
  var button1 = document.getElementById('buttonlog');

  
//   var CapitalLetters = {
//     "A" : [
//       " v-20 l10,-20 l10,20 v20 v-15 h-20 ",
//      ],
//      "B" : [
//       " v-40  a20,10 0 0 1 0,20   a20,10 0 0 1 0,20 ",
//      ],
//      "C" : [
//        "M40,40 a5,5 0 0 0 0,40 ",
//        // need to redo
//      ],
//      "D" : [
//       " a5,5 0 0 1 0,40  v-40",
//      ],
//      "E" : [
//       " h20 h-20 v20 h20 h-20 v20 h20 h-20 ",
//      ],
//      "F" : [
//       "  h20 h-20 v40 v-20 h20  ",
//      ],
//      "G" : [
//       " h10 v20 a5,5 0 0 1 0,-40 ",
//       // need to redo
//      ],
//      "H" : [
//       " v-40 v20 h20 v20 v-40 ",
//       // need to move down
//      ],
//      "I" : [
//       " h20 h-10 v-40 h10 h-20 ",
//       // need to move down
//      ],
//      "J" : [
//       " a10,10 90 0 0 20,-8 v-20  ",
//       // need to move right
//      ],
//      "K" : [
//       " v40 v-20 h2 l20,20  l-20,-20  l20,-20 ",
//       // Need to center
//      ],
//      "L" : [
//       "  v40  h20  ",
      
//      ],
//      "M" : [
//       " v-40  l10,20   l10,-20 v40 ",
//      ],
//      "N" : [
//        " v-36  l20,40  v-40  ",
//      ],
//      "O" : [
//         " a10,20 0 0 1 0,40 a10,20 0 0 1 0,-40   ",
//      ],
//       "P" : [
//       " v-36 h10 a5,5 0 0 1 5,15 h-15  ",
//      ],
//       "Q" : [
//       "M40,40 a4,4 0 0 1 10,40 a5,5 0 0 1 -10,-40 a4,4 0 0 1 10,40 l10,10   ",
//      ],
//       "R" : [
//       " v-36 h10 a5,5 0 0 1 5,20 h-15 h15 l5,20 ", 
//      ],
//       "S" : [
//       "M40,40  h-10 a3,3 0 0 0 0,20  a3,3 0 0 1 0,20 h-10 ",
//      ],
//       "T" : [
//        " v-40 h10 h-20 ",
//      ],
//       "U" : [
//        "  a5,20 0 0 0 20,0   ",
//      ],
//       "V" : [
//        "  l10,40 l10,-40 "  ,
//      ],
//       "W" : [
//        "  l10,40 l10,-40  l10,40 l10,-40"  ,
//      ],
//       "X" : [
//        "M40,40 l-10,20 l-10,-20 l10,20 l-10,20 l10,-20 l10,20"  ,  ,
//      ],
//       "Y" : [
//        "M40,40 l-10,20 l-10,-20 l10,20 v20", 
//      ],
//       "Z" : [
//         " h20 l-20,40 h20  ", 
//      ],
//    }
//   var LowerLetters = {
//     "a" : [
//       "M40,40   a5,5 45 0 1 20,0 v20 v-15 a10,4 1 0 0 0,15 ",
//      ],
//      "b" : [
//       " v-30 v15 a3,2 1 0 1 0,16  ",
//      ],
//      "c" : [
//       " a5,5 0 0 0 0,20 ",
//      ],
//      "d" : [
//       " v-30 v15 a3,2 1 0 0 0,16 ",
//      ],
 
//      "e" : [
//       "M20,50 h10 v-10 a5,5 0 0 0 -5,20 h7",
//      ],
//      "f" : [
//       " v-20  a5,5 90 0 1 10,0  a5,5 90 0 00 -10,0 v7 h-10 h20",
//      ],
//      "g" : [
//       " a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20 a10,10 0 0 1 10,10 v-10 v20  a10,15 0 0 1 -5,10 h-15",
//       // have g be placed on the bottom 
//      ],
//      "h" : [
//       " v40  a10,5 90 0 1 20,0 ",
//      ],
//      "i" : [
//       " v-20",
//     //  Have v-20 to find a way to make the dot
//      ],
//      "j" : [
//       " v20 a2,2 90 0 1  -10,1"
//      //  "Have to find a way to make the dot",
//      ],
//      "k" : [
//       " v20 v-10 h2 l20,10  l-20,-10  l20,-10 ",
//      ],
//      "l" : [
//       " v20 ",
//      ],
//      "m" : [
//       " v-20  v20 a1,3 0 0 1 10,0 a1,3 0 0 1 10,0",
//      ],
//      "n" : [
//       " v-23  v23 a1,2 0 0 1 20,0",
//       // possable replacement " v-20  v20 a1,3 0 0 1 10,0"
//      ],
//      "o" : [
//       " a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20    ",
//      ],
//       "P" : [
//       "M40,70 v-20  a2.5,5 90 0 1 1,10   "
//      ],
//       "q" : [
//       "M40,70 v-20  a2.5,5 90 0 0 1,10  "
//      ],
//       "r" : [
//       "  v-20 v7 a40,11 90 0 1 10,5   " 
//      ],
//       "s" : [
//       "M40,40 a5,5 45 0 0 -5,10   a5,5 45 0 1 -5,10  "
//      ],
//       "t" : [
//       " v-20 v10 h10 h-20 "
//      ],
//       "u" : [
//       " v15 a10,10 0 0 0 20,-4 v-10"
//      ],
//       "v" : [
//       "  l10,20 l10,-20  "
//      ],
//       "w" : [
//       "  l10,20 l10,-20  l10,20 l10,-20 "
//      ],
//       "x" : [
//       "  l20,-20  l-10,10 l10,10 l-10,-10 l-10,-10 "
//      ],
//       "y" : [
//       "  l10,20 l10,-20  l-10,20  l-10,20 "
//      ],
//       "z" : [
//         " h20 l-20,20 h20 ",
//      ]
//    }
//   var NumberLetters = {
//     0 : [
//       " a10,20 0 0 1 0,40 a10,20 0 0 1 1,-40  l-3,40",
//      ],
//   1 : [
//    " h20 h-10 v-40 l-10,10 ",
//   ],
//   2 : [
//    "  a5,7 0 0 1 20,0  l-20,33 h20 ",
//   ],
//   3 : [
//    "  h10 a4,4 0 0 1 0,20 h-10 h10  a4,4 0 0 1 0,20 h-10  ",
//   ],
//   4 : [
//    "  v-40 l-20,20 h30",
//   ],
//   5 : [
//    "M40,40  h-20 v20 a5,2.5 0 0 1 0,20  ",
//   ],
//   6 : [
//     " a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20  a1,1 0 0 1 0,20 a1,1 0 0 1 10,-40    ",
//   ],
//   7 : [
//      "  l5,-18 l5,-18 l-2.5,18 l18,15 l-18,-15 l-15,-18 "  ,
//   ],
//   8 : [
//    " a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20 a1,1 0 0 1 1,-20  a1,1 0 0 1 0,20  ",    
//   ],
//   9 : [
//     " a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20  a1,1 0 0 1 0,20  a10,10 90 0 0 0,-20   h10 v25 a10,5 0 0 1 -20,0 ",
//   ]
// }

var M4060 = {
  "A" : [
    " v-20 l10,-20 l10,20 v20 v-15 h-20 ",
   ],
   "S" : [
    " h-10 a3,3 0 0 0 0,20  a3,3 0 0 1 0,20 h-10 ",
   ],
   "d" : [
    " v-30 v15 a3,2 1 0 0 0,16 ",
   ],
   "4" : [
    "  v-40 l-20,20 h30",
   ]
  }

var M2060 = {
  "B" : [
    " v-40  a20,10 0 0 1 0,20   a20,10 0 0 1 0,20 ",
   ],
   "H" : [
    " v-40 v20 h20 v20 v-40 ",
    // need to move down
   ],
   "I" : [
    " h20 h-10 v-40 h10 h-20 ",
    // need to move down
   ],
   "N" : [
    " v-36  l20,40  v-40  ",
  ],
  "P" : [
    " v-36 h10 a5,5 0 0 1 5,15 h-15  ",
   ],
   "R" : [
    " v-36 h10 a5,5 0 0 1 5,20 h-15 h15 l5,20 ", 
   ],
   "b" : [
    " v-30 v15 a3,2 1 0 1 0,16  ",
   ],
    
   "e" : [
    "M20,50 h10 v-10 a5,5 0 0 0 -5,20 h7",
   ],
   "x" : [
    "  l20,-20  l-10,10 l10,10 l-10,-10 l-10,-10 "
   ],
   1 : [
    " h20 h-10 v-40 l-10,10 ",
    ],
    2 : [
      "  a5,7 0 0 1 20,0  l-20,33 h20 ",
      ]
}
 var M4040 = {
  "C" : [
    " a5,5 0 0 0 0,40 ",
    // need to redo
  ],
  "Q" : [
    "a4,4 0 0 1 10,40 a5,5 0 0 1 -10,-40 a4,4 0 0 1 10,40 l10,10   ",
   ],
   "S" : [
    " h-10 a3,3 0 0 0 0,20  a3,3 0 0 1 0,20 h-10 ",
   ],
   5 : [
    " h-20 v20 a5,2.5 0 0 1 0,20  ",
    ],
    7 : [
      "  h20 l-20,40"  ,
    ],
    "a" : [
      " a5,5 45 0 1 20,0 v20 v-15 a10,4 1 0 0 0,15 ",
     ],
     "s" : [
      "a5,5 45 0 0 -5,10   a5,5 45 0 1 -5,10  "
     ],
 }
 var M2040 = {
  "D" : [
    " a5,5 0 0 1 0,40  v-40",
   ],
   "E" : [
    " h20 h-20 v20 h20 h-20 v20 h20 h-20 ",
   ],
   "F" : [
    " h20 h-20 v40 v-20 h20  ",
   ],
   "K" : [
    " v40 v-20 h2 l20,20  l-20,-20  l20,-20 ",
    // Need to center
   ],
   "L" : [
    "  v40  h20  ",
    
   ],
   "M" : [
    " v-40  l10,20   l10,-20 v40 ",
   ],
   "U" : [
    "  a5,20 0 0 0 20,0   ",
  ],
   "V" : [
    "  l10,40 l10,-40 "  ,
  ],
   "W" : [
    "  l10,40 l10,-40  l10,40 l10,-40"  ,
  ],
  "Y" : [
    " l-10,20 l-10,-20 l10,20 v20", 
  ],
   "Z" : [
     " h20 l-20,40 h20  ", 
  ],
  "h" : [
    " v40  a10,5 90 0 1 20,0 ",
   ],
   "k" : [
    " v20 v-10 h2 l20,10  l-20,-10  l20,-10 ",
   ],
   "l" : [
    " v20 ",
   ],
   "n" : [
    " v-23  v23 a1,2 0 0 1 20,0",
    // possable replacement " v-20  v20 a1,3 0 0 1 10,0"
   ],
   "u" : [
    " v15 a10,10 0 0 0 20,-4 v-10"
   ],
    "v" : [
    "  l10,20 l10,-20  "
   ],
    "w" : [
    "  l10,20 l10,-20  l10,20 l10,-20 "
   ],
   "y" : [
    "  l10,20 l10,-20  l-10,20  l-10,20 "
   ],
    "z" : [
      " h20 l-20,20 h20 ",
   ]
 }
 var M3040 = {
    "G" : [
      " h10 v20 a5,5 0 0 1 0,-40 ",
      // need to redo
    ],
    "O" : [
      " a10,20 0 0 1 0,40 a10,20 0 0 1 0,-40   ",
  ],
  "c" : [
    " a5,5 0 0 0 0,20 ",
  ],
  "j" : [
    " v20 a2,2 90 0 1  -10,1"
  //  "Have to find a way to make the dot",
  ],
  "g" : [
    " a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20 a10,10 0 0 1 10,10 v-10 v20  a10,15 0 0 1 -5,10 h-15",
    // have g be placed on the bottom 
  ],
  "o" : [
    " a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20    ",
  ],
  0 : [
    " a10,20 0 0 1 0,40 a10,20 0 0 1 1,-40  l-3,40",
  ],
  6 : [
    " a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20  a1,1 0 0 1 0,20 a1,1 0 0 1 10,-40    ",
    ],
    8 : [
    " a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20 a1,1 0 0 1 1,-20  a1,1 0 0 1 0,20  ",    
    ],
    9 : [
      " a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20  a1,1 0 0 1 0,20  a10,10 90 0 0 0,-20   h10 v25 a10,5 0 0 1 -20,0 ",
    ],
 }
 var M3060 = {
  "T" : [
    " v-40 h10 h-20 ",
  ],
  "t" : [
    " v-20 v10 h10 h-20 "
   ],
   "i" : [
    " v-20",
  //  Have v-20 to find a way to make the dot
   ],
   "r" : [
    "  v-20 v7 a40,11 90 0 1 10,5   " 
   ],
 }
var  M2070 = {
  "J" : [
    " a10,10 90 0 0 20,-8 v-20  ",
    // need to move right
   ],
   "p" : [
    " v-20  a2.5,5 90 0 1 1,10   "
   ],
    "q" : [
    " v-20  a2.5,5 90 0 0 1,10  "
   ],
 }

 var MSamples = {
   DM2000 : [
     "M20,00"
   ],
  DM2060 : [
    ""
  ],
  DM4040 : [
    "M40,40"
  ],
  DM4060 :[
    ""
  ],
  "DM2040" : [
    "  "
  ],
  DM3040 : [
    ""
  ],
  DM3060 : [
    ""
  ],
  DM2070 : [
    ""
  ]
 }

  $('#fname').each(function() {
    var elem = $(this);
  
    // Save current value of element
    elem.data('oldVal', elem.val());
  
    // Look for changes in the value
    elem.bind("propertychange change click keyup input paste", function(event){
       // If value has changed...
       if (elem.data('oldVal') != elem.val()) {
        // Updated stored value
        elem.data('oldVal', elem.val());
  
  
      }
    });
  });
  
var answers2 = document.getElementById('fname').value;
var input = document.getElementById("buttonlog").value;

function Basics(answers2, NumberLetters) {
  var answers2 = document.getElementById('fname').value;
var input = document.getElementById("buttonlog").value;
var NumberLetters = {
  0 : [
    " a10,20 0 0 1 0,40 a10,20 0 0 1 1,-40  l-3,40",
   ],
1 : [
 " h20 h-10 v-40 l-10,10 ",
],
2 : [
 "  a5,7 0 0 1 20,0  l-20,33 h20 ",
],
3 : [
 "  h10 a4,4 0 0 1 0,20 h-10 h10  a4,4 0 0 1 0,20 h-10  ",
],
4 : [
 "  v-40 l-20,20 h30",
],
5 : [
 "M40,40  h-20 v20 a5,2.5 0 0 1 0,20  ",
],
6 : [
  " a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20  a1,1 0 0 1 0,20 a1,1 0 0 1 10,-40    ",
],
7 : [
   "  l5,-18 l5,-18 l-2.5,18 l18,15 l-18,-15 l-15,-18 "  ,
],
8 : [
 " a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20 a1,1 0 0 1 1,-20  a1,1 0 0 1 0,20  ",    
],
9 : [
  " a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20  a1,1 0 0 1 0,20  a10,10 90 0 0 0,-20   h10 v25 a10,5 0 0 1 -20,0 ",
]
}

  if (Number(answers2))  {
    console.log(NumberLetters[1]);
      console.log(answers2);
      console.log(typeof answers2);
       return console.log('It is a number');
  } else if ( answers2 == answers2.toLowerCase()) {
    console.log(LowerLetters['b']);
     return  console.log('It is a lower letter'); 
  } else if ( answers2 == answers2.toUpperCase()) {
    console.log(CapitalLetters['A']);
    return console.log('It is a Capital Letter');
    var nodes = renderer.setAttr('d', answers1)
    
  } else ( answers2 === answers2 ); {
   
    return  console.log('something is wrong');
    var nodes = renderer.setAttr('d', answers1)
}

  function Basic(LowerLetters, answers2) {
    var answers2 = document.getElementById('fname').value;
    var input = document.getElementById("buttonlog").value;
 
  }
}