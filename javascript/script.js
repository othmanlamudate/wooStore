
const toggleButton = document.getElementById('toggleButton');
const navCenter = document.getElementById('navCenter');

toggleButton.addEventListener('click', function() {
    
    if (navCenter.style.display === 'flex') {
        navCenter.style.display = 'none';
       
    } else {
        navCenter.style.display = 'flex';
        
    }
});

