var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(medicalIssue, doctors) {
  $('.showDoctors').text('Here is a list of doctors in your area that specialize in ' + medicalIssue + ' research' + ':');
  $('ul#listDoctors').empty();
  doctors.forEach(function(doctor) {
    $('ul#listDoctors').append('<li>' + 'Dr. ' + doctor.first + " " + doctor.last + ', ' + doctor.title + '</li>');
  });
};

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#find').click(function() {
    event.preventDefault();
    var medicalIssue = $('#medical-issue').val();
    $('#medical-issue').val("");
    currentDoctorObject.getDoctors(medicalIssue, displayDoctors);
  });
});
