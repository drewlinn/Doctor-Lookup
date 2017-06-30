var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(medicalIssue) {
  $('.showDoctors').text('Here is a list of doctors in your area that specialize in your medical issue: ' + response);
};

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#find').click(function() {
    var medicalIssue = $('#medical-issue').val();
    $('#medical-issue').val();
    // var location = $('#location').val();
    // $('#location').val("");
    currentDoctorObject.getDoctors(displayDoctors);
  });
});
