//Global variables
function Task (task, time, description) {
  this.task = task;
  this.time = time;
  this.description = description;
};

$(document).ready(function(){
  $("#form-to-do").submit(function(event){
    event.preventDefault();
    var inputtedTask = $("#new-task").val();
    var inputtedTime = $("#new-time").val();
    var inputtedDescription = $("#new-description").val();

    var newTask = new Task (inputtedTask, inputtedTime, inputtedDescription);

    $("#task-list").append("<li class='task-element'>" + newTask.task + "</li>");

    $(".task-element").last().click(function() {
      $("#task-info").show();
      $("#task-info h2").text(newTask.task);
      $(".time-input").text(newTask.time);
      $(".description-input").text(newTask.description);
    });
  });
});
