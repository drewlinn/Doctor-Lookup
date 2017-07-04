var apiKey = require('./../.env').apiKey;

function Doctor(first, last, title, specialty) {
    this.firstName = first;
    this.lastName = last;
    this.title = title;
    this.specialty = specialty;
}

Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
      var doctors = [];
      result.data.forEach(function(object) {
        var doctor = new Doctor();
        doctor.firstName = object.profile.first_name;
        doctor.lastName = object.profile.last_name;
        doctor.title = object.profile.title;
        doctor.specialty = object.specialty[0];
        doctors.push(object);
        console.log(doctors);
      });
    })
   .fail(function(error){
      console.log("fail");
    });
};


exports.doctorModule = Doctor;
