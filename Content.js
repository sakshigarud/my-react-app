// content.js

// Function to upvote a comment
function upvoteComment(comment) {
    const upvoteButton = comment.querySelector('[aria-label="upvote"]');
    if (upvoteButton && !comment.classList.contains('upvoted')) {
        upvoteButton.click(); // Simulate click on upvote button
        comment.classList.add('upvoted'); // Mark as upvoted to prevent re-upvoting
    }
}

// Function to upvote all comments on the page
function upvoteAllComments() {
    const comments = document.querySelectorAll('.Comment'); // Adjust selector based on Reddit's comment structure
    comments.forEach(upvoteComment);

    // Show a message indicating the upvote action is completed
    const message = document.createElement('div');
    message.className = 'success-message';
    message.innerText = 'All visible comments have been upvoted!';
    document.body.appendChild(message);
    
    // Automatically remove the message after a few seconds
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Add a button to upvote all comments after a slight delay
setTimeout(() => {
    const button = document.createElement('button');
    button.className = 'upvote-button';
    button.innerText = 'Upvote All Comments';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.backgroundColor = '#ff4500';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.padding = '10px 15px';
    button.style.borderRadius = '5px';
    button.style.zIndex = '9999';
    button.style.cursor = 'pointer';

    // Add event listener to the button
    button.addEventListener('click', upvoteAllComments);
    document.body.appendChild(button);
}, 2000); // Adjust time if needed