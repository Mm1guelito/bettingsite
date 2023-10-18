$(document).ready(function () {
  // Bet Now button hover effect
  $("#betNow").hover(
    function () {
      $(this).css("background-color", "newColor"); // Replace 'newColor' with the color you want
    },
    function () {
      $(this).css("background-color", "originalColor"); // Replace 'originalColor' with the original color
    }
  );

  // About Coral Sports Betting slide up animation
  $("#about").click(function () {
    $(this).slideUp("slow");
  });

  // Terms & Conditions popup
  $("#terms").click(function (e) {
    e.preventDefault();
    $("#termsModal").show();
  });

  // Email validation
  $("#email").blur(function () {
    var email = $(this).val();

    $.ajax({
      url: "validate_email.php",
      type: "post",
      data: { email: email },
      success: function (response) {
        var data = JSON.parse(response);
        $("#message").text(data.message);

        if (data.error) {
          $("#message").css("color", "red");
        } else {
          $("#message").css("color", "green");
        }
      },
    });
  });
});
