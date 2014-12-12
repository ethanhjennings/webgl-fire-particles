function markForDeletion(array,index) {
  array[index] = undefined;
}

function deleteMarked(array) {
  var newIndex = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== undefined) {
      array[newIndex] = array[i];
      newIndex += 1;
    }
  }
  return array.slice(0,newIndex);
}


// hsv to rgb
function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (h && s === undefined && v === undefined) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: r,
        g: g,
        b: b
    };
}

function convertHue(hue) {
  hue /= 360.0;
  if (hue < 0)
    hue += 1.0;
  return hue;
}

function componentToHex(c) {
    var hex = Math.round(c*255).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(c) {
    return "#" + componentToHex(c.r) + componentToHex(c.g) + componentToHex(c.b);
}
