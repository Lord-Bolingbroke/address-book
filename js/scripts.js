$(document).ready(function() {

  var modal = document.getElementById("contact-modal");

  var btn = document.getElementById("add-contact");

  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  $("form#details").submit(function(event) {
    event.preventDefault();
    $("#output").append("");
  });

});
