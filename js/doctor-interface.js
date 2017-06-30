var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(location) {
  $('.showDoctors').text();
};

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#doctor').click(function() {
    var location = $('#location').val();
    $('#location').val("");
    currentDoctorObject.getDoctor(location, displayDoctors);
  });
});
