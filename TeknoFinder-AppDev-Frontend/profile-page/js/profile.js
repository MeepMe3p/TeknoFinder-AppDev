$(document).ready(function () {
    var token = sessionStorage.getItem("token");
    var studentId = sessionStorage.getItem("studentId");
    var userId = sessionStorage.getItem("userId");
    console.log("Token: ", token);
    console.log("Student ID: ", studentId);
    console.log("User ID: ", userId);
    $.ajax({
        url: `http://localhost:5099/api/Students/${studentId}`,
        type: 'GET',
        contentType: 'application/json',
        headers: {
          Authorization: `Bearer ${token}`, // Add JWT token in Authorization header
        },
        success: function (response) {
            console.log("Response from server: ", response);
            $('#student-username-label').text(response.username);
            $('#student-number-label').text(response.studentNumber);
            $('.fullname').text(response.firstName + " " + response.lastName)
            $('.username').text(response.username)
            // $('.email').
            // $('.datecreated').
            $('#studentfirstname').val(response.firstName)
            $('#studentlastname').val(response.lastName)
            $('#studentstatus').val(response.status)
            $('#studentnumber').val(response.studentNumber)
            $('#studentprogram').val(response.program)
            $('#studentyear').val(response.yearLevel)
            
            // $('#student-program').text(response.program);
            // $('#student-year').text(response.yearLevel);
            // $('#student-status').text(response.status);

        },
        error: function (error) {
            console.error("Error: ", error);
        }
    })
    $.ajax({
        url: `http://localhost:5099/api/Account/${userId}`,
        type: 'GET',
        contentType: 'application/json',
        headers: {
          Authorization: `Bearer ${token}`, // Add JWT token in Authorization header
        },
        success: function (response) {
            console.log("Response from server: ", response);
             $('.email').text(response.email)
             $('.datecreated').text(new Date(response.createdOn).toLocaleString('en-GB', { dateStyle: 'short', timeStyle: 'short' }))
            // $('#student-program').text(response.program);
            // $('#student-year').text(response.yearLevel);
            // $('#student-status').text(response.status);

        },
        error: function (error) {
            console.error("Error: ", error);
        }
    });
});