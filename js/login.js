
var attempt = 3;
$(document).ready(function () {
  $("#new-story").on("submit", function (event) {
    event.preventDefault();

    var newEmail = $("#email").val();
    var newPassword = $("#password").val();
    var form = $(this)

  $.ajax({
      method: "GET",
      url: "text.csv",
    }).done(function (data) {
    })

    if (newEmail !== "undefined" && newPassword !== "undefined" && newEmail !== null && newPassword !== null && newEmail !== "" && newPassword !== "") {
      $.ajax({
       url: "text.csv",
        method: "POST",
        headers: true,
        data: { newEmail, newPassword },
        success: function (data) {
          console.log(data);
        },
      }).done(function (data) {
        window.document.write(data)
      });
    } else {
      attempt--;
      console.log("Please log in" + attempt);
      // debugger

      if (attempt === 0) {
        document.getElementById('email').disabled = true
        document.getElementById('password').disabled = true
        return false
      }
    }
    // request.send()
    //
    // myObj = { "name":"John", "age":31, "city":"New York" };
    // myJSON = JSON.stringify(myObj);
    // console.log(myJSON);
    // localStorage.setItem(text.json, myJSON);
    //
    // var webURL = $.ajax({
    //   method: "GET",
    //   url: "text.json",
    // }).done(function (data) {
    //   console.log(data);
    // var request = $.ajax({
    //   method: "POST",
    //   dataType: "json",
    //   success: function (data) {
    //     var resourceContent = data;
    //   },
    //   data: { Email: newEmail },
    //   url: "text.json",
    // }).done(function (data) {
    //   console.log(data);
    // });
  });
    // })
});
