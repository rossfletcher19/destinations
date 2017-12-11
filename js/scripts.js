// business logic
function Destination (locName, desLoc, landmarks, timeOfYear, desNotes) {
  this.locName = locName;
  this.desLoc = desLoc;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.desNotes = desNotes;
};

Destination.prototype.displayName = function () {
  return this.locName + " (" + this.desLoc + ")";
};


// user interface logic
$(document).ready(function() {
  $("form#new-des").submit(function(event) {
    event.preventDefault();

    var inputtedLocName = $("input#newLocName").val();
    var inputtedDesLoc = $("input#newDesLoc").val();
    var inputtedLandmarks = $("input#landmarks").val();
    var inputtedTimeOfYear = $("input#timeOfYear").val();
    var inputtedDesNotes = $("input#desNotes").val();
    console.log(inputtedLocName);
    var newDestination = new Destination(inputtedLocName, inputtedDesLoc, inputtedLandmarks, inputtedTimeOfYear, inputtedDesNotes);

    $("ul#destinations").append("<li><span class='destinations'>" + newDestination.displayName() + "</span></li>");

    // $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");


    var inputtedLocName = $("input#newLocName").val("");
    var inputtedDesLoc = $("input#newDesLoc").val("");
    var inputtedLandmarks = $("input#landmarks").val("");
    var inputtedTimeOfYear = $("input#timeOfYear").val("");
    var inputtedDesNotes = $("input#desNotes").val("");
  });
});
