var canvas = document.getElementById('canvas')

var ctx = canvas.getContext("2d");
ctx.fillStyle = '#000'

var offset = {
    x: 0,
    y: 0
}

function printPixel(x, y) {
    ctx.fillRect(x + offset.x, y + offset.y, 1, 1);
}


function midPointCircle(offsetX, offsetY, radius) {
    var firstQuad = []
    x = 0;
    y = radius;
    offset.x = offsetX;
    offset.y = offsetY;

    p = 1.25 - radius;

    while (x < y) {
        firstQuad.push({
            x: x,
            y: y
        });

        if (p < 0) {
            x = x + 1;
            p = p + (2 * x) + 1
        } else {
            x = x + 1;
            y = y - 1;
            p = p + (2 * (x - y)) + 1
        }
    }
    let l = firstQuad.length
    for (let index = 0; index < l; index++) {
        const puranaElement = firstQuad[index];
        var nayaElement = {
            x: puranaElement.y,
            y: puranaElement.x
        }
        firstQuad.push(nayaElement)
    }
    printFirstQuad();
    print2ndQuad();
    print3rdQuad();
    print4thQuad();

    // struct Pixel{
    //     int x;
    //     int y;
    // }
    // struct Pixel[10000] Pixeles;
    // int l=0;

    // void addPixel(Pixel p)
    // {
    //     Pixeles[l] = p;
    //     l++;
    // }

    // Pixel _pixel;
    // _pixel.x=x;
    // _pixel.y=y;
    // addPixel(_pixel)


    function printFirstQuad() {
        firstQuad.forEach(e => {
            printPixel(e.x, e.y);
        });
    }

    function print2ndQuad() {
        firstQuad.forEach(e => {
            x = e.x;
            y = -1 * e.y;
            printPixel(x, y)
        });
    }

    function print3rdQuad() {
        firstQuad.forEach(e => {
            x = -1 * e.x;
            y = -1 * e.y;
            printPixel(x, y)
        });
    }

    function print4thQuad() {
        firstQuad.forEach(e => {
            x = -1 * e.x;
            y = e.y;
            printPixel(x, y)
        });
    }
}

// for (var i = 10; i < 200; i += 50) {
//     console.log(i);   
//     mi
dPointCircle(200, 200, i);
// }

midPointCircle(250,250,150)
midPointCircle(250,250,250)

for (var i = 0; i < 100 * 5; i += 100) {
    // console.log(i);
    midPointCircle(250, i + 50, 50);
}
for (var i = 0; i < 100 * 5; i += 100) {
    // console.log(i);
    midPointCircle(i+50, 250, 50);
}
