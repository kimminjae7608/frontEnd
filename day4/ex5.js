let sinput;
let einput;

function startNo() {
  sinput = prompt("시작인덱스");
}
function endNo() {
  einput = prompt("시작인덱스");
}
function strMethod() {
  let input = prompt("문자열을 입력하세요");
  document.getElementById("sinput").innerHTML = sinput;
  document.getElementById("einput").innerHTML = einput;
  document.getElementById("len").innerHTML = input.length;
  document.getElementById("last").innerHTML = input.lastIndexOf("am");
  document.getElementById("subs").innerHTML = input.substring(sinput, einput);
  document.getElementById("subs11").innerHTML = input.substring(11);
}
