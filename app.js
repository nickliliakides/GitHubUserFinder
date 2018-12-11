// Initialise github variable
const github = new GitHub;

// Initialise UI variable
const ui = new UI; 

// Search input 
const searchUser = document.getElementById('searchUser');

// Add event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const searchText = e.target.value;

  // Check if search field is not empty
  if (searchText != '') {
    // Make HTTP call
      github.getUser(searchText)
      .then(res => {
        if(res.profile.message === 'Not Found'){
          // Show alert
          ui.showAlert('User not found', 'alert alert-danger font-weight-bold mt-3');
        } else {
          // Show Profile
          ui.showProfile(res.profile);
          ui.showRepos(res.repos);
        }
      })
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});