var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(doctors) {
  $('.showDoctors').text('Here is a list of doctors in your area that specialize in ' + medicalIssue + ':');

};

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#find').click(function() {
    event.preventDefault();
    var medicalIssue = $('#medical-issue').val();
    $('#medical-issue').val("");
    // var location = $('#location').val();
    // $('#location').val("");
    currentDoctorObject.getDoctors(displayDoctors);
  });
});

// doctors.forEach(function(doctor){
//   $('ul#listDoctors').append("<li>" + doctor + "</li>");
// });
