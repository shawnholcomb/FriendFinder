// $('#submit').on("click", function(){});

// function grabInfo() {
//     var userScores = [];
//     var newFriend = {
//         name: $("#name").val().trim(),
//         photo: $("#photo").val().trim(),
//         // scores: $("#age").val().trim(),
//       };
// }
var vals = [];

function tests() {
  var test1 = $('#q1 option:selected').val();
  var test2 = $('#q2 option:selected').val();
  var test3 = $('#q3 option:selected').val();
  var test4 = $('#q4 option:selected').val();
  var test5 = $('#q5 option:selected').val();
  var test6 = $('#q6 option:selected').val();
  var test7 = $('#q7 option:selected').val();
  var test8 = $('#q8 option:selected').val();
  var test9 = $('#q9 option:selected').val();
  var test10 = $('#q10 option:selected').val();

  vals.push(test1, test2, test3, test4, test5, test6, test7, test8, test9, test10);
};

$('#submit').on("click", function() {
  tests();
  console.log(vals);
});


