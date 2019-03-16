var userName;
var userPhoto;
var userScores = [];

function getFormData() {
  userName = $("#name").val().trim();
  userPhoto = $("#photo").val().trim();
  var test1 = parseInt($('#q1 option:selected').val());
  var test2 = parseInt($('#q2 option:selected').val());
  var test3 = parseInt($('#q3 option:selected').val());
  var test4 = parseInt($('#q4 option:selected').val());
  var test5 = parseInt($('#q5 option:selected').val());
  var test6 = parseInt($('#q6 option:selected').val());
  var test7 = parseInt($('#q7 option:selected').val());
  var test8 = parseInt($('#q8 option:selected').val());
  var test9 = parseInt($('#q9 option:selected').val());
  var test10 = parseInt($('#q10 option:selected').val());

  userScores.push(test1, test2, test3, test4, test5, test6, test7, test8, test9, test10);
};

function clearForm() {
  $("#name").val("");
  $("#photo").val("");
  $("#q1").val("");
  $("#q2").val("");
  $("#q3").val("");
  $("#q4").val("");
  $("#q5").val("");
  $("#q6").val("");
  $("#q7").val("");
  $("#q8").val("");
  $("#q9").val("");
  $("#q10").val("");
};

$('#submit').on("click", function () {
  getFormData();

  if ((userName === "") || (userPhoto === "")) {
    alert("Please complete the form")
  } else {
    var newFriend = {
      name: userName,
      photo: userPhoto,
      scores: userScores
    }

    $.post("/api/friends", newFriend, function (data) {
      $("#match-name").text(data.name);
      $("#match-image").attr("src", data.photo);
      $("#results").modal()
    });
    clearForm();
  };
  userScores = [];
});