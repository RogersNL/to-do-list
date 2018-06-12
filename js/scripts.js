//Global variables
function Task (task, time, description) {
  this.task = task;
  this.time = time;
  this.description = description;
};
var currentTask = "";
$(document).ready(function(){
  $("#form-to-do").submit(function(event){
    event.preventDefault();
    var inputtedTask = $("#new-task").val();
    var inputtedTime = $("#new-time").val();
    var inputtedDescription = $("#new-description").val();
    if (inputtedTask !== "") {
      var newTask = new Task (inputtedTask, inputtedTime, inputtedDescription);

      $("#task-list").append("<li><span class='task-element'>" + newTask.task + "</span> " + "<a class='remove'>Remove</a></li>");

      $(".task-element").last().click(function() {
        $("#task-info").show();
        $("#task-info h2").text(newTask.task);
        $(".time-input").text(newTask.time);
        $(".description-input").text(newTask.description);
        currentTask = newTask.task;
        alert(currentTask);
      });

      $(".remove").click(function(){
        $(this).parent().remove();
        if (currentTask === newTask.task){
          $("#task-info").hide();
        }
      })
      $("#new-task").val("");
      $("#new-time").val("");
      $("#new-description").val("");
    }
  });
});
