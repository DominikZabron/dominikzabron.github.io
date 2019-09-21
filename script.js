var modal = document.getElementById("modal");

var btn = document.getElementById("msg-btn");

btn.onclick = function() {
  if (modal.style.display === "") {
    modal.style.display = "block";
  } else if (modal.style.display == "block") {
    modal.style.display = "";
  } else {
    console.log(modal.style.display)
  };
}