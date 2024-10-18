document.getElementById('expiryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const foodName = document.getElementById('foodName').value;
    const expiryDate = document.getElementById('expiryDate').value;

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = `${foodName} - Expires on: ${expiryDate}`;
    
    // Append the new list item to the expiry list
    document.getElementById('expiryList').appendChild(li);

    // Clear the input fields
    document.getElementById('expiryForm').reset();
});
