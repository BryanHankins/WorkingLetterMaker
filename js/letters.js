function test() {
  // const path1 = CapitalLetters[input] = {
  //   "A" : [
  //     "M40,60 v-20 l10,-20 l10,20 v20 v-15 h-20 ",
  //    ],
  //    "B" : [
  //     "M20,60 v-40  a20,10 0 0 1 0,20   a20,10 0 0 1 0,20 ",
  //    ],
  //    "C" : [
  //      "M40,40 a5,5 0 0 0 0,40 ",
  //      // need to redo
  //    ],
  //    "D" : [
  //     "M20,40 a5,5 0 0 1 0,40  v-40",
  //    ],
  //    "E" : [
  //     "M20,40 h20 h-20 v20 h20 h-20 v20 h20 h-20 ",
  //    ],
  //    "F" : [
  //     "M20,40  h20 h-20 v40 v-20 h20  ",
  //    ],
  //    "G" : [
  //     "M30,40 h10 v20 a5,5 0 0 1 0,-40 ",
  //     // need to redo
  //    ],
  //    "H" : [
  //     "M20,60 v-40 v20 h20 v20 v-40 ",
  //     // need to move down
  //    ],
  //    "I" : [
  //     "M20,60 h20 h-10 v-40 h10 h-20 ",
  //     // need to move down
  //    ],
  //    "J" : [
  //     "M20,70 a10,10 90 0 0 20,-8 v-20  ",
  //     // need to move right
  //    ],
  //    "K" : [
  //     "M20,40 v40 v-20 h2 l20,20  l-20,-20  l20,-20 ",
  //     // Need to center
  //    ],
  //    "L" : [
  //     " M20,40 v40  h20  ",
      
  //    ],
  //    "M" : [
  //     "M20,40 v-40  l10,20   l10,-20 v40 ",
  //    ],
  //    "N" : [
  //      "M20,60 v-36  l20,40  v-40  ",
  //    ],
  //    "O" : [
  //       "M30,40 a10,20 0 0 1 0,40 a10,20 0 0 1 0,-40   ",
  //    ],
  //     "P" : [
  //     "M20,60 v-36 h10 a5,5 0 0 1 5,15 h-15  ",
  //    ],
  //     "Q" : [
  //     "M40,40 a4,4 0 0 1 10,40 a5,5 0 0 1 -10,-40 a4,4 0 0 1 10,40 l10,10   ",
  //    ],
  //     "R" : [
  //     "M20,60 v-36 h10 a5,5 0 0 1 5,20 h-15 h15 l5,20 ", 
  //    ],
  //     "S" : [
  //     "M40,40  h-10 a3,3 0 0 0 0,20  a3,3 0 0 1 0,20 h-10 ",
  //    ],
  //     "T" : [
  //      "M30,60 v-40 h10 h-20 ",
  //    ],
  //     "U" : [
  //      "M20,40  a5,20 0 0 0 20,0   ",
  //    ],
  //     "V" : [
  //      "M20,40  l10,40 l10,-40 "  ,
  //    ],
  //     "W" : [
  //      "M20,40  l10,40 l10,-40  l10,40 l10,-40"  ,
  //    ],
  //     "X" : [
  //      "M40,40 l-10,20 l-10,-20 l10,20 l-10,20 l10,-20 l10,20"  ,  ,
  //    ],
  //     "Y" : [
  //      "M40,40 l-10,20 l-10,-20 l10,20 v20", 
  //    ],
  //     "Z" : [
  //       "M20,40 h20 l-20,40 h20  ", 
  //    ],
  // }
  // const path2 = LowerLetters[input] = {
  //   "a" : [
  //     "M40,40   a5,5 45 0 1 20,0 v20 v-15 a10,4 1 0 0 0,15 ",
  //    ],
  //    "b" : [
  //     "M20,60 v-30 v15 a3,2 1 0 1 0,16  ",
  //    ],
  //    "c" : [
  //     "M30,40 a5,5 0 0 0 0,20 ",
  //    ],
  //    "d" : [
  //     "M40,60 v-30 v15 a3,2 1 0 0 0,16 ",
  //    ],
 
  //    "e" : [
  //     "M20,50 h10 v-10 a5,5 0 0 0 -5,20 h7",
  //    ],
  //    "f" : [
  //     "M30,60 v-20  a5,5 90 0 1 10,0  a5,5 90 0 00 -10,0 v7 h-10 h20",
  //    ],
  //    "g" : [
  //     "M30,40 a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20 a10,10 0 0 1 10,10 v-10 v20  a10,15 0 0 1 -5,10 h-15",
  //     // have g be placed on the bottom 
  //    ],
  //    "h" : [
  //     "M20,20 v40  a10,5 90 0 1 20,0 ",
  //    ],
  //    "i" : [
  //     "M30,60 v-20",
  //   //  HaveM30,60 v-20 to find a way to make the dot
  //    ],
  //    "j" : [
  //     "M30,40 v20 a2,2 90 0 1  -10,1"
  //    //  "Have to find a way to make the dot",
  //    ],
  //    "k" : [
  //     "M20,40 v20 v-10 h2 l20,10  l-20,-10  l20,-10 ",
  //    ],
  //    "l" : [
  //     "M20,40 v20 ",
  //    ],
  //    "m" : [
  //     "M20,60 v-20  v20 a1,3 0 0 1 10,0 a1,3 0 0 1 10,0",
  //    ],
  //    "n" : [
  //     "M20,40 v-23  v23 a1,2 0 0 1 20,0",
  //     // possable replacement "M20,60 v-20  v20 a1,3 0 0 1 10,0"
  //    ],
  //    "o" : [
  //     "M30,40 a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20    ",
  //    ],
  //     "p" : [
  //     "M20,70 v-20  a2.5,5 90 0 1 1,10   "
  //    ],
  //     "q" : [
  //     "M20,70 v-20  a2.5,5 90 0 0 1,10  "
  //    ],
  //     "r" : [
  //     "M30,60  v-20 v7 a40,11 90 0 1 10,5   " 
  //    ],
  //     "s" : [
  //     "M40,40 a5,5 45 0 0 -5,10   a5,5 45 0 1 -5,10  "
  //    ],
  //     "t" : [
  //     "M30,60 v-20 v10 h10 h-20 "
  //    ],
  //     "u" : [
  //     "M20,40 v15 a10,10 0 0 0 20,-4 v-10"
  //    ],
  //     "v" : [
  //     "M20,40  l10,20 l10,-20  "
  //    ],
  //     "w" : [
  //     "M20,40  l10,20 l10,-20  l10,20 l10,-20 "
  //    ],
  //     "x" : [
  //     "M20,60  l20,-20  l-10,10 l10,10 l-10,-10 l-10,-10 "
  //    ],
  //     "y" : [
  //     "M20,40  l10,20 l10,-20  l-10,20  l-10,20 "
  //    ],
  //     "z" : [
  //       "M20,40 h20 l-20,20 h20 ",
  //    ]
  // }
  // const path3 = NumberLetters[input] = {
  //   0 : [
  //     "M30,40 a10,20 0 0 1 0,40 a10,20 0 0 1 1,-40  l-3,40",
  //    ],
  //   1 : [
  //   "M20,60 h20 h-10 v-40 l-10,10 ",
  //   ],
  //   2 : [
  //   "M20,40  a5,7 0 0 1 20,0  l-20,33 h20 ",
  //   ],
  //   3 : [
  //   "M20,40  h10 a4,4 0 0 1 0,20 h-10 h10  a4,4 0 0 1 0,20 h-10  ",
  //   ],
  //   4 : [
  //   "M40,60  v-40 l-20,20 h30",
  //   ],
  //   5 : [
  //   "M40,40  h-20 v20 a5,2.5 0 0 1 0,20  ",
  //   ],
  //   6 : [
  //     "M30,40 a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20  a1,1 0 0 1 0,20 a1,1 0 0 1 10,-40    ",
  //   ],
  //   7 : [
  //     "M20,40  l5,-18 l5,-18 l-2.5,18 l18,15 l-18,-15 l-15,-18 "  ,
  //   ],
  //   8 : [
  //   "M30,40 a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20 a1,1 0 0 1 1,-20  a1,1 0 0 1 0,20  ",    
  //   ],
  //   9 : [
  //     "M30,40 a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20  a1,1 0 0 1 0,20  a10,10 90 0 0 0,-20   h10 v25 a10,5 0 0 1 -20,0 ",
  //   ]
  // }

  // var MSamples = {
  //   DM2000 : [
  //     "M20,00"
  //   ],
  //  DM2060 : [
  //    "M20,60"
  //  ],
  //  "DM4040" : [
  //    "M40,40"
  //  ],
  //  DM4060 :[
  //    "M40,60"
  //  ],
  //  "DM2040" : [
  //    "M20,40"
  //  ],
  //  DM3040 : [
  //    "M30,40"
  //  ],
  //  DM3060 : [
  //    "M30,60"
  //  ],
  //  DM2070 : [
  //    "M20,70"
  //  ],
  //  Space : [
  //  " "
  //  ]
  // }


  

  // let numberOfIterations = 5; // number of uses 
  // // I will have to have the number of iterations detect the amount of letters/numbers the user puts in 
  // let i = 0;
  // let sum = 0;
  // while(i++ < answersSplit.length) {
  //   sum += i === 0 ? 40 : 20 ;
  // }

  var answers2 = document.getElementById('fname').value;
  console.log(answers2);
var input = document.getElementById("buttonlog").value;
var renderer = i2d.canvasLayer("#myCanvas", {}, {});

let answersString = Object.entries(answers2);

console.log(answersString);
console.log(typeof answersString);


// var answersObject = _.invert(answersString);
// console.log(answersObject);
// console.log(Object.values(answersString));
// let answers5 = Object.values(answersString);


let result  = Object.fromEntries(
  Object.entries(answers2).map(([k, v]) => [k, MSamples[v] ])
);
console.log(result);
// console.log(Object.values(MSamples));
// console.log(typeof result);
// console.log(result.includes('M20,60'))

// Bellow is a way how I can turn an array to a string then back into a array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)
let text = fruits.toString();
console.log(text);
let MyFruits = text.split(",")
console.log(MyFruits);
if ("A".includes('M20,60')) {
  console.log('YES')
}
for (let i = 0; i < result.forEach; i++) {
  if (result.includes('M20,60')) {
    // let soultion1 = "M" + ((20 + 20).toString() + "," + (60 + 00).toString() + " " + M2060[answersString]); 
    console.log('this is M20,60');
    console.log(soultion1);
    console.log(typeof soultion1);
    return soultion1;
    // check if what number in the order it is
  } else if (result.includes('M40,40') ) {
    let soultion2 = "M" + ((40 + 20).toString() + "," + (40 + 00).toString() + " " + M4040[answersString]); 
    console.log('this is M40,40');
console.log(soultion2);
  } else if (result.includes('M40,60') ) {
   
    console.log('this is M40,60');
    console.log(soultion);
    return soultion;
    // check if what number in the order it is

    // check if what number in the order it is
  } else if (result.includes('M20,40') ) {
    let soultion = "M" + ((20 + 20).toString() + "," + (40 + 00).toString() + " " + M2040[answersString]); 
    console.log('this is M20,40');
    console.log(soultion);
    console.log(typeof soultion);
    return soultion;
    // check if what number in the order it is
  } else if (result.includes('M30,40')) {
    let soultion = "M" + ((30 + 20).toString() + "," + (40 + 00).toString() + " " + M3040[answersString]); 
    console.log('this is M30,40');
    console.log(soultion);
    console.log(typeof soultion);
    return soultion;
    // check if what number in the order it is
  }
  else if (result.includes('M30,60')) {
    let soultion = "M" + ((30 + 20).toString() + "," + (60 + 00).toString() + " " + M3060[answersString]); 
    console.log('this is M30,60');
    console.log(soultion);
    console.log(typeof soultion);
    // check if what number in the order it is
    return soultion;
  }
  else if (result.includes('M20,70') ) {
    let soultion = "M" + ((20 + 20).toString() + "," + (70 + 00).toString() + " " + M2070[answersString]); 
    console.log('this is M20,70');
    console.log(soultion);
    console.log(typeof soultion);
    return soultion;
    // check if what number in the order it is
  }
  // else if (Space[answers2]) {
  //   let soultion = "M" + ((20 + 20).toString() + "," + (00 + 00).toString() + " " + space); 
  //   console.log('this is a space');
  //   console.log(soultion);
  //   console.log(typeof soultion)
  //   // check if what number in the order it is
  // }
  else  ()  => {
    console.log('Something is wrong');
  }
}

//   console.log(M2060[answersString] || M4040[answersString]  || M4060[answersString] || M2040[answersString] || M3040[answersString] || M3060[answersString] || M2070[answersString] );
// console.log(answersString);
// }

  var Answers = document.getElementById('fname').value;
  var answers2 = document.getElementById('fname').value;
  var input = document.getElementById("buttonlog").value;
  var renderer = i2d.canvasLayer("#myCanvas", {}, {});
  // console.log(CapitalLetters.hasOwnProperty('A'));
  console.log(result);

//   for (let sh = 1; i < answersSplit.length; i++) { 
//     let soultion = "M" + ((20 + 20).toString() + "," + (60 + 00).toString() + " " + M2060[answers2]); 


// console.log(sum);
//   }
console.log(result);
  if(MSamples.hasOwnProperty(result) ) {
    console.log('yes')
    console.log(MSamples[result] );
    var answers1 = MSamples[result] ;
    // I could switch answers1 with soultion
   console.log(answers1)
   // answers2 is the full d=" " script
    console.log(typeof answers1)
   console.log(answers1.join());
   
    var objectS = String(answers1); 
   console.log(objectS);
   console.log(typeof nodes.attr.d);
   console.log(typeof soultion)
   let answers3 = nodes.getAttr('d', objectS);
   console.log(nodes.setAttr('d', objectS ));
   console.log(answers3);
   console.log( typeof soultion)
  } else {
    console.log('no')
    console.log(answers2);
  }
  ChainInstance.start();

    // var answers1 = CapitalLetters[answers2] || LowerLetters[answers2] || NumberLetters[answers2]



      // for (Answers in CapitalLetters || A in LowerLetters || key in NumberLetters) {
      //   if (answers2 === CapitalLetters['A'][0]) {
      //     console.log('something')
      //     break;
      // }
        


// function bobds(nodes,  renderer , answers3) {    
//   let ChainInstance = (selectedtype === 'sequence' ? i2d.chain.parallelChain() : i2d.chain.sequenceChain());
//         nodes.createEl( {
//             el: "path",
//            attr: {
//             d: 'M20,40  l10,16 l10,-16',

//             },
//             style: {
//                 lineWidth: 5,
//                 strokeStyle: "#f00000",
//                 shadowColor: "red",
//                 lineCap: "round",
//             },
//         }).forEach(function chains(da){
//             nodes.add(this.animateExe({
//                 duration:1000,
//                 ease: 'linear',
//                 attr: {
//                     d: 'M40,50  l10,16 l10,-16',
//                     // x2: da.x,

//                 },
//             end: function (d) {
//           nodes.createEl({
//               el: 'linear ',
//               attr: {
//                 d: 'M20,40  a4,4 0 0 1 5,35   a4,4 0 0 1 5,35  a4,4 0 0 1 -5,-35 a4,4 0 0 1 -5,-35',
//               },
//               style: { lineWidth: 5,
//                 strokeStyle: "#f00000",
//                 shadowColor: "red",
//                 lineCap: "round", }
//          });
         
//          console.log(bobs);
//          bobs(d);
//             }
//           }))
//           });
//             ChainInstance.start();
//         }
   
// Mvariables = {
//   M2060:[ 'M20,60'],
//   M4040: ['M40,40'],
//   M2040:["20,40"],
//   M3040:[ 'M30,40'],
//   M3060: ['M30,60'],
//   M2070:[ 'M20,70'],
// }


// I am also going to have tp figure out a way to make it so letters and numers equal these variables
// The codes for the letters and numbers are in thinkings.rtf
}