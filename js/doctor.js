var apiKey = require('./../.env').apiKey;

Doctor = function(){
  // this.profile.first_name = firstName;
  // this.profile.last_name = lastName;
  // this.profile.title = title;
  // this.specialties[0] = specialty1;
  // this.specialties[1] = specialty2;
};
var doctors = [];

Doctor.prototype.getDoctors = function(medicalIssue) {
  console.log(medicalIssue);
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(response) {
     console.log(apiKey);
     var doctors = [];
      // reponse.data.objects.forEach(function(object) {
      //   response.data.object = new Doctor();
      //   console.log(Doctor);
      //   doctors.push(Doctor);
      // });
      displayDoctors(doctors);
    }).fail(function(error){
     $('.showDoctors').text(error.responseJSON.message);
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
