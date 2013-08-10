unction get_value(items, calc, cmp) {
  var result;
  for (var i = 0; i < items.length; i++) {
    var cur_value = calc(items[i]);
    if (i == 0) {
      result = cur_value;
    } else if (cmp(cur_value, result)) {
      result = cur_value;
    }
  }
  return result;
}

function max_cmp(a, b) { return a > b };
function min_cmp(a, b) { return a < b };

function get_x(a) { return a.x }
function get_y(a) { return a.y }

function width(page) {
  return get_value(page, get_x, max_cmp) - 
         get_value(page, get_x, min_cmp);
}

function height(page) {
  return get_value(page, get_y, max_cmp) - 
         get_value(page, get_y, min_cmp);
}