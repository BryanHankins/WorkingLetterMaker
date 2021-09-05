
var renderer_ = i2d.svgLayer('#MySVG', {});


var data = [{ id:1}, {id:2}, {id:3}, {id:4}];
var v_;

function dataJoin (data){

     v_ = renderer_.join(data, 'circle,text', {
        joinOn: function (d) {
            return d.id;
        },
        action: {
            enter: function (data) {
                this.createEls (data.circle, {
                    el: 'circle',
                    attr: {
                        cx: function (d) {
                         return d.id * 40 + 200;
                        
                },
                
                cy: function (d) { 
                    return 150;
                },
                r: 10
            },
            style: {
                fill: '#ff0000'
            }
        }).animateTo({
            // duration is the duration of the animation
            duration: 1000, 
            // attr is the size of the shape which is currently the circle
            attr: { r: 20}
        });
        // Bellow is for the text obviously
        this.createEls(data.text, {
            el : 'text',
            attr: {
                 x: function (d) {
                     return d.id * 40 + 200;
                    },
                    y: function (d) {
                    return 185;
                 },
                 text: function (d) {
                     return d.id;
                 }
            },
            style:  {
                fill:' #ff0000',
            'text-align': 'middle'
            }
        });
        },
        // Bellow removes the 3 & 4 circle
        exit: function (oldNodes) {
            oldNodes.circle.remove();
            oldNodes.text.remove();
        },
        // Bellow creates 7 & 8
        update: function (nodes) {
            nodes.circle.animateTo({
                duration: 1000,
                style: { 
                    fill: '#00ff00'
                }
            });
            nodes.text
                .text(function (d) {
                    return d.id;
                });
        }
    }
    });
}

// Calls
dataJoin(data);

// adding new data;
setTimeout( function() {
    dataJoin([{ id:1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}]);
}, 2000);

// adding and removing
setTimeout(function () {
    dataJoin([{ id:1}, {id: 2}, {id: 5}, {id: 6}, {id:7}, {id:8}]);
}, 4000);