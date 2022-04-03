var form = document.getElementById('MentorForm');

form.addEventListener("submit", function(){
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var linkedIn = document.getElementById("linkedIn").value;
  var email = document.getElementById("email").value;
  var work = document.getElementById("work").value;
  var field = document.getElementById("field").value;
  \var menteeRe = document.getElementById("menteeRe").value;
  sessionStorage.setItem("fname", fname);
  sessionStorage.setItem("lname", lname);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("work", work);
  sessionStorage.setItem("field", field);
  sessionStorage.setItem("menteeRe", menteeRe);

  // document.getElementById("fNameOutput").innerText = fname;
  // document.getElementById("lNameOutput").innerText = lname;
  // document.getElementById("workOutput").innerText = work;
  // document.getElementById("fieldOutput").innerText = field;
  // document.getElementById("menteeRe").innerText = menteeRe;
})
