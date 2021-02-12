
var a = '';
function zero1() {
  one11 = '0';
  a = a + one11;
  document.getElementById('value').innerHTML = a;
}
function dubZero() {
  one11 = '00';
  a = a + one11;
  document.getElementById('value').innerHTML = a;
}
function point1() {
  one11 = '.';
  a = a + one11;
  document.getElementById('value').innerHTML = a;
}
function one1() {
  one11 = '1';
  a = a + one11;
  document.getElementById('value').innerHTML = a;
  if (a.length > 12) {
    document.getElementById('value').style.fontSize = '40px';
  }
  if (a.length > 17) {
    document.getElementById('value').style.fontSize = '30px';
  }
}
function two2() {
  two22 = '2';
  a = a + two22;
  document.getElementById('value').innerHTML = a;
  if (a.length > 12) {
    document.getElementById('value').style.fontSize = '40px';
  }
  if (a.length > 17) {
    document.getElementById('value').style.fontSize = '30px';
  }
}

function three3() {
  three33 = 3;
  a = a + three33;
  document.getElementById('value').innerHTML = a;
  if (a.length > 12) {
    document.getElementById('value').style.fontSize = '40px';
  }
  if (a.length > 17) {
    document.getElementById('value').style.fontSize = '30px';
  }
}
function four4() {
  four44 = 4;
  a = a + four44;
  document.getElementById('value').innerHTML = a;
  if (a.length > 12) {
    document.getElementById('value').style.fontSize = '40px';
  }
  if (a.length > 17) {
    document.getElementById('value').style.fontSize = '30px';
  }
}
function five5() {
  five55 = 5;
  a = a + five55;
  document.getElementById('value').innerHTML = a;
  if (a.length > 12) {
    document.getElementById('value').style.fontSize = '40px';
  }
  if (a.length > 17) {
    document.getElementById('value').style.fontSize = '30px';
  }
}
function six6() {
  six66 = 6;
  a = a + six66;
  document.getElementById('value').innerHTML = a;
  if (a.length > 12) {
    document.getElementById('value').style.fontSize = '40px';
  }
  if (a.length > 17) {
    document.getElementById('value').style.fontSize = '30px';
  }
}
function seven7() {
  seven77 = 7;
  a = a + seven77;
  document.getElementById('value').innerHTML = a;
  if (a.length > 12) {
    document.getElementById('value').style.fontSize = '40px';
  }
  if (a.length > 17) {
    document.getElementById('value').style.fontSize = '30px';
  }
}
function eight8() {
  eight88 = 8;
  a = a + eight88;
  document.getElementById('value').innerHTML = a;
  if (a.length > 12) {
    document.getElementById('value').style.fontSize = '40px';
  }
  if (a.length > 17) {
    document.getElementById('value').style.fontSize = '30px';
  }
}
function nine9() {
  nine99 = 9;
  a = a + nine99;
  document.getElementById('value').innerHTML = a;
  if (a.length > 12) {
    document.getElementById('value').style.fontSize = '40px';
  }
  if (a.length > 17) {
    document.getElementById('value').style.fontSize = '30px';
  }
}
function sum() {
  a = a + '+';
  document.getElementById('value').innerHTML = a;
  if (a.length > 12) {
    document.getElementById('value').style.fontSize = '40px';
  }
  if (a.length > 17) {
    document.getElementById('value').style.fontSize = '30px';
  }

}
function sub() {
  a = a + '-';
  document.getElementById('value').innerHTML = a;
  if (a.length > 12) {
    document.getElementById('value').style.fontSize = '40px';
  }
  if (a.length > 17) {
    document.getElementById('value').style.fontSize = '30px';
  }

}
function mul() {
  a = a + '*';
  document.getElementById('value').innerHTML = a;
  if (a.length > 12) {
    document.getElementById('value').style.fontSize = '40px';
  }
  if (a.length > 17) {
    document.getElementById('value').style.fontSize = '30px';
  }

}
function divi() {
  a = a + '/';
  document.getElementById('value').innerHTML = a;
  if (a.length > 12) {
    document.getElementById('value').style.fontSize = '40px';
  }
  if (a.length > 17) {
    document.getElementById('value').style.fontSize = '30px';
  }

}
function mod() {
  a = a + '%';
  document.getElementById('value').innerHTML = a;
  if (a.length > 12) {
    document.getElementById('value').style.fontSize = '40px';
  }
  if (a.length > 17) {
    document.getElementById('value').style.fontSize = '30px';
  }

}
function equal1() {
  document.getElementById('value').innerHTML = eval(a);
  a = '';
}
function clear1() {
  a = a.slice(0, -1);
  document.getElementById('value').innerHTML = a;
}
function clearEntry() {
  a = '';
  document.getElementById('value').innerHTML = a;
}
