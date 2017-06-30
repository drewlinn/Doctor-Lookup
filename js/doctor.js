var apiKey = require('./../.env').apiKey;

Doctor = function(firstName, lastName, title, specialty1, specialty2){
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
  this.specialty1 = specialty1;
  this.specialty2 = specialty2;
};
var doctors = [];

Doctor.prototype.getDoctors = function(medicalIssue) {
  console.log(medicalIssue);
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(response) {
     console.log(response);
     var doctors[];
      reponse.data.objects.forEach(function(object) {
        var doctor = new Doctor(firstName, lastName, title, specialty1, specialty2); {
          this.firstName = object.profile.first_name;
          this.lastName = object.profile.last_name;
          this.title = object.profile.title;
          this.specialty1 = object.specialties[0];
          this.specialty2 = object.specialties[1];
          doctors.push(doctor);
        }
      console.log(doctor);
      });
      displayDoctors(doctors);
    }).fail(function(error){
     $('.showDoctors').text(error.responseJSON.message);
      console.log("fail");
    });
};

exports.doctorModule = Doctor;