document.getElementById('upvote-all').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: upvoteComments
      });
    });
  });
  
  // Function to be injected into the page
  function upvoteComments() {
    const upvoteButtons = document.querySelectorAll('[aria-label="upvote"]');
    upvoteButtons.forEach((button, index) => {
      setTimeout(() => {
        if (!button.classList.contains('active')) {
          button.click();
          console.log(`Upvoted comment #${index + 1}`);
        }
      }, index * 1000); // 1-second delay between upvotes
    });
  }
  