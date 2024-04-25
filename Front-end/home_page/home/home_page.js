// JavaScript for Search Component
function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.trim();
    if (searchTerm) {
      window.location.href = `/search?q=${searchTerm}`;
    }
  }
  
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }
  