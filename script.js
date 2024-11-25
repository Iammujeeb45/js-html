function addsum(s1, s2, s3, s4, s5, s6, name) {
  const total = s1 + s2 + s3 + s4 + s5 + s6;
  const avg = total / 600;
  const percentage = avg * 100;
  return `The student ${name} Total marks ${total} avg is ${avg} and the Percentage ${percentage}%`;
}

function listenToclick(e) {
  e.preventDefault();
  const s1 = Number(document.getElementById("s1").value);
  const s2 = Number(document.getElementById("s2").value);
  const s3 = Number(document.getElementById("s3").value);
  const s4 = Number(document.getElementById("s4").value);
  const s5 = Number(document.getElementById("s5").value);
  const s6 = Number(document.getElementById("s6").value);
  const myName = String(document.getElementById("myname").value);

  const template = addsum(s1, s2, s3, s4, s5, s6, myName);
  console.log(template);
  document.getElementById("temp").innerText = template;
}
document.getElementById("mybtn").addEventListener("click", listenToclick);
