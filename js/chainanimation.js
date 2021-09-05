
var renderer_ = i2d.canvasLayer('#Mycanvas', {}, {});
       

    
    
    
    
        
   
  var nodes = renderer_.createEl({ 
            el: "group",
           attr: {
            d: 'M20,36  l10,16 l10,-16',
            
            },
            

        });
        nodes.animatePathTo({
            duration: 1000,
            loop: 1,
            ease: "linear",
            direction: "alternate",
        });
        let selectedtype;
                console.log(nodes);
           
     
function ChainsClicks (nodes) {

             console.log(nodes);
               };
function bobs(nodes,  renderer , d) {    
  console.log(nodes);
  let ChainInstance = ( i2d.chain.sequenceChain());
        renderer.createEl({
            el: "line",
           attr: {
            d: 'M20,36  l10,16 l10,-16',
            x1: d.x, y1: d.y,
            x2: d.x, y2: d.y
            },
            style: {
                lineWidth: 5,
                strokeStyle: "#f00000",
                shadowColor: "red",
                lineCap: "round",
            },
        }).forEach(function (da){
            nodes.add(this.animateExe({
                duration:1000,
                ease: 'linear',
                attr: {
                    d: 'M40,50  l10,16 l10,-16',
                  
                },
              
                  style: {
                    lineWidth: 5,
                    strokeStyle: "#f00000",
                    shadowColor: "red",
                    lineCap: "round",
                },
              
            end: function (d) {
          nodes.createEl({
              el: 'linear ',
              attr: {
                cx: d.x, cy: d.y, r: 3
              },
              style: { lineWidth: 5,
                strokeStyle: "#f00000",
                shadowColor: "red",
                lineCap: "round", }
         });
         
         console.log(bobs);
         bobs(d);
            }
          }))
          });
            ChainInstance.start();
        }
   




        function DataGen (obj) {
          let child = [];
          if (obj.x === 0 && obj.y === 0 && obj.width > 25) {
            child.push(DataGen({x: obj.width, y: obj.width, width: obj.width, p: obj}))
            child.push(DataGen({x: -obj.width, y: obj.width, width: obj.width, p: obj}))
            child.push(DataGen({x: obj.width, y: -obj.width, width: obj.width, p: obj}))
            child.push(DataGen({x: -obj.width, y: -obj.width, width: obj.width, p: obj}))
          }
          if ((obj.x - obj.p.x) > 0 && (obj.y - obj.p.y) > 0 && obj.width > 10) {
            child.push(DataGen({x: (obj.x + obj.width / 2), y: (obj.y + obj.width / 2), width: obj.width / 2, p: obj}))
            child.push(DataGen({x: (obj.x - obj.width / 2), y: (obj.y + obj.width / 2), width: obj.width / 2, p: obj}))
            child.push(DataGen({x: (obj.x + obj.width / 2), y: (obj.y - obj.width / 2), width: obj.width / 2, p: obj}))
          }
          if ((obj.x - obj.p.x) < 0 && (obj.y - obj.p.y) < 0 && obj.width > 10) {
            child.push(DataGen({x: (obj.x - obj.width / 2), y: (obj.y - obj.width / 2), width: obj.width / 2, p: obj}))
            child.push(DataGen({x: (obj.x - obj.width / 2), y: (obj.y + obj.width / 2), width: obj.width / 2, p: obj}))
            child.push(DataGen({x: (obj.x + obj.width / 2), y: (obj.y - obj.width / 2), width: obj.width / 2, p: obj}))
          }
          if ((obj.x - obj.p.x) > 0 && (obj.y - obj.p.y) < 0 && obj.width > 10) {
            child.push(DataGen({x: (obj.x + obj.width / 2), y: (obj.y - obj.width / 2), width: obj.width / 2, p: obj}))
            child.push(DataGen({x: (obj.x - obj.width / 2), y: (obj.y - obj.width / 2), width: obj.width / 2, p: obj}))
            child.push(DataGen({x: (obj.x + obj.width / 2), y: (obj.y + obj.width / 2), width: obj.width / 2, p: obj}))
          }
          if ((obj.x - obj.p.x) < 0 && (obj.y - obj.p.y) > 0 && obj.width > 10) {
            child.push(DataGen({x: (obj.x - obj.width / 2), y: (obj.y + obj.width / 2), width: obj.width / 2, p: obj}))
            child.push(DataGen({x: (obj.x - obj.width / 2), y: (obj.y - obj.width / 2), width: obj.width / 2, p: obj}))
            child.push(DataGen({x: (obj.x + obj.width / 2), y: (obj.y + obj.width / 2), width: obj.width / 2, p: obj}))
          }
          
          obj.children = child;
          return obj;
        }
        
          
        // var nodes1 = renderer.setAttr('d', answers1)
    
//    function animatessss() {
       
//     let ChainInstance = i2d.chain.sequenceChain();
//     // console.log(i2d.chain);
//     console.log(ChainInstance);
    
//     let junk = ('M40,50  l10,16 l10,-16')
        
   
//   var nodes = renderer.createEl({ 
//             el: "path",
//            attr: {
//             d: 'M20,36  l10,16 l10,-16',
//             },
//             style: {
//                 lineWidth: 5,
//                 strokeStyle: "#f00000",
//                 shadowColor: "red",
//                 lineCap: "round",
//             },
//         });
//         nodes.animatePathTo({
//             duration: 1000,
//             loop: 1,
//             ease: "linear",
//             direction: "alternate",
//         })
//         ChainInstance.start();
//     ChainInstance.start();        
//      }

//      function bobs() {
//         let ChainInstance = i2d.chain.sequenceChain()
//         nodes.createEl(ChainInstance, {
//             el: "path",
//            attr: {
//             d: 'M20,36  l10,16 l10,-16',
//             },
//             style: {
//                 lineWidth: 5,
//                 strokeStyle: "#f00000",
//                 shadowColor: "red",
//                 lineCap: "round",
//             },
//         }).forEach(function chains(){
//             ChainInstance(this.animateExe({
//                 duration:1000,
//                 ease: 'linear',
//                 attr: {
//                     d: 'M40,50  l10,16 l10,-16',
//                 },
//             end: function (d) {
//          nodes.createEl({
//               el: 'linear ',
//               attr: {
//                d= "M24,40 v-3 h10 h-10 v10 h10 h-10 v10 h10 h-10" 
//               },
//               style: { fillStyle: 'white' }
//          });
//             }})
//             )});
//             ChainInstance.start();
//         }
//         // var nodes1 = renderer.setAttr('d', answers1)