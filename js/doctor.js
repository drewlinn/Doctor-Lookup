var apiKey = require('./../.env').apiKey;

function Doctor(first, last, title) {
    this.first = first;
    this.last = last;
    this.title = title;
}

Doctor.prototype.getDoctors = function(medicalIssue, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' +  medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      var doctors = [];
      result.data.forEach(function(object) {
        console.log(object);
        var doctor = new Doctor(object.profile.first_name, object.profile.last_name, object.profile.title);
        doctors.push(doctor);
        displayDoctors(medicalIssue, doctors);
      });
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
