/* 
Date: 3/02/25
Purpose: This script handles form validation.
*/

document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate Date of Birth (student must be at least 16 years old)
    const dob = document.getElementById('dob').value;
	
    if (dob) 
	{
        const dobDate = new Date(dob);
        const today = new Date();
        const age = today.getFullYear() - dobDate.getFullYear();

        if (age < 16 || (age === 16 && today.getMonth() < dobDate.getMonth()) || (age === 16 && today.getMonth() === dobDate.getMonth() && today.getDate() < dobDate.getDate())) {
            alert('Student must be at least 16 years old.');
            return; // Stop form submission
        }
    }

    // Validate Course Code
    const courseCode = document.getElementById('courseCode').value;
    const courseCodePattern = /^[A-Za-z]{2}\d{3}$/;

    if (courseCode && !courseCodePattern.test(courseCode)) 
	{
        alert('Invalid Course Code!');
        return; // Stop form submission
    }

    // Confirm before submission
    if (confirm('Are you sure you want to insert this record?')) 
	{
        this.submit();
    }
});
