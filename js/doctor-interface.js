var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(medicalIssue, doctors, doctor, first, last, title) {
  $('.showDoctors').text('Here is a list of doctors in your area that specialize in ' + medicalIssue + ':');
  doctors.forEach(function(doctor)  {
    $('ul#listDoctors').append('Dr. ' + first + last + ', ' + title);
  });
};

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#find').click(function() {
    event.preventDefault();
    var medicalIssue = $('#medical-issue').val();
    $('#medical-issue').val("");
    // var location = $('#location').val();
    // $('#location').val("");
    currentDoctorObject.getDoctors(medicalIssue, displayDoctors);
  });
});

// doctors.forEach(function(doctor){
//   $('ul#listDoctors').append("<li>" + doctor + "</li>");
// });
