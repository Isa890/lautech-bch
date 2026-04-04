const ADMIN_WHITELIST = [
        "your-email@example.com", // YOUR EMAIL
        "admin2@school.com",
        "admin3@school.com",
        "admin4@school.com",
        "admin5@school.com"
    ];
    let isVerifiedAdmin = false;
        
        document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
        const targetView = document.getElementById(viewId);
        if (targetView) targetView.classList.remove('hidden');
    
      function handleMobileNav(viewId) {
        showView(viewId);
        toggleMobileMenu();
      }

      function showView(viewId) {
        // ADMIN SECURITY CHECK
        if (viewId === 'admin' && !isVerifiedAdmin) {
            const email = prompt("Please enter an authorized admin email:");
            if (ADMIN_WHITELIST.includes(email?.toLowerCase().trim())) {
                isVerifiedAdmin = true;
                alert("Welcome, Admin.");
            } else {
                alert("Unauthorized access denied.");
                return;
            }
        }
      }