var webglRenderer = i2d.webglLayer('#canvas', {}, {});
var a = -2;
var b = -2;
var c = -1.2;
var d = 2;
var n = Math.pow(2, 18);

var geome = webglRenderer.PointsGeometry();
    geome.setAttr('a_position', {
        value: new Float32Array(n * 2).map(() => Math.random() * 2 - 1),
        size: 2
    });
    geome.setDrawRange(0 , n);

var shaderRef = webglRenderer.createShaderEl({
    fragmentShader:
document.getElementById('fragmentShader').textContent,
    vertexShader:
document.getElementById('vertexShader').textContent,
    uniforms: {
        u_a: {
            value: a.toFixed(2)
        },
        u_b: {
            value: b.toFixed(2)
        },
        u_c: {
            value: c.toFixed(2)
        },
        u_d: {
            value: d.toFixed(2)
        }
    },
    geometry: geome
});

i2d.queue.onRequestFrame(function (t) {
    shaderRef.setUniformData('u_a', -2.0 +
    Math.sin(t / 8000));
});