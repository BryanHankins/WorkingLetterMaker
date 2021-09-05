function test() {
  

  

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
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits)
// let text = fruits.toString();
// console.log(text);
// let MyFruits = text.split(",")
// console.log(MyFruits);
// if ("A".includes('M20,60')) {
//   console.log('YES')
// }
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