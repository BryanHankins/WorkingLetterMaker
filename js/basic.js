var renderer = i2d.canvasLayer('#myCanvas', {}, false);

renderer.createEl({
    el: 'circle',
    attr: {
        r: 50,
        cx: renderer.width / 2,
        cy: renderer.height / 2
    },
    style: {
        fillStyle: '#ff0000'
    }
}).animateTo({
    duration: 500,
    loop: Infinity,
    ease: 'easeInOutSin',
    direction: 'alternate',
    attr: {
        r: 200
    },
    style: {
        fillStyle: '#00ff00'
    }
})