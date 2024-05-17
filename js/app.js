const firebaseConfig = {
    apiKey: "AIzaSyB4TnQTCwnUQhehJyvR0NC2kt29HGypde8",
    authDomain: "scholars-2178d.firebaseapp.com",
    databaseURL: "https://scholars-2178d-default-rtdb.firebaseio.com",
    projectId: "scholars-2178d",
    storageBucket: "scholars-2178d.appspot.com",
    messagingSenderId: "304785758594",
    appId: "1:304785758594:web:01be790883597d3076579b",
    measurementId: "G-HNLF82B27R"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference to the Firebase database
  var database = firebase.database();
  
  // Get input fields by ID
  var lastNameInput = document.getElementById('lastName');
  var firstNameInput = document.getElementById('firstName');
  var middleNameInput = document.getElementById('middleName');
  var extensionNameInput = document.getElementById('extensionName');
  var addressInput = document.getElementById('address');
  var municipalityInput = document.getElementById('municipality');
  var contactInput = document.getElementById('contact');
  var birthdayInput = document.getElementById('birthday');
  var ageInput = document.getElementById('age');
  var gcashInput = document.getElementById('gcash');
  var civilStatusInput = document.getElementById('civilStatus');
  var sexInput = document.getElementById('sex');
  var courseInput = document.getElementById('course');
  var yearLevelInput = document.getElementById('yearLevel');
  var semesterInput = document.getElementById('semester');
  var academicYearInput = document.getElementById('academicYear');
  
  
  function saveData() {
    var submitButton = document.getElementById('submitBtn');
    submitButton.disabled = true; // Disable the submit button
    
    var lastName = lastNameInput.value;
    var firstName = firstNameInput.value;
    var middleName = middleNameInput.value;
    var extensionName = extensionNameInput.value;
    var address = addressInput.value;
    var municipality = municipalityInput.value;
    var contact = contactInput.value;
    var birthday = birthdayInput.value;
    var age = ageInput.value;
    var gcash = gcashInput.value;
    var civilStatus = civilStatusInput.value;
    var sex = sexInput.value;
    var course = courseInput.value;
    var yearLevel = yearLevelInput.value;
    var semester = semesterInput.value;
    var academicYear = academicYearInput.value;

    // Generate unique userID
    var userID = municipalityInput.value + "-" + new Date().getTime(); // Using timestamp for simplicity
  
    // Push data to Firebase
    database.ref(municipalityInput.value).child(userID).set({
        userID : userID,
        lastName: lastName,
        firstName: firstName,
        middleName: middleName,
        extensionName : extensionName,
        address : address,
        municipality : municipality,
        contact: contact,
        birthday: birthday,
        age : age,
        gcash : gcash,
        civilStatus : civilStatus,
        sex : sex,
        course : course,
        yearLevel : yearLevel,
        semester : semester,
        academicYear : academicYear


    }).then(function() {
        document.getElementById('message').innerHTML = "Successful submission!";
        lastNameInput.value="";
        // firstNameInput.value="";
        // middleNameInput.value="";
        // contactInput.value="";
        // addressInput.value="";
        // birthdayInput.value="";

        submitButton.disabled = false; // Re-enable the submit button
    }).catch(function(error) {
        document.getElementById('message').innerHTML = "Submission failed: " + error.message;
        submitButton.disabled = false; // Re-enable the submit button
    });
  }
  
