<script>
// Get the user counter element
const userCounterElement = document.getElementById('userCounter');

// Check if userCounter exists in localStorage, and initialize if not
if (!localStorage.getItem('userCounter')) {
  localStorage.setItem('userCounter', '0');
}

// Get the current user count from localStorage and update the userCounterElement
const currentUserCount = parseInt(localStorage.getItem('userCounter'));
userCounterElement.textContent = currentUserCount;

// Increment the user count and update localStorage
const newUserCount = currentUserCount + 1;
localStorage.setItem('userCounter', newUserCount.toString());
userCounterElement.textContent = newUserCount;
</script>
