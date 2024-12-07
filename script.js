document.addEventListener("DOMContentLoaded", function () {
    const loginPanel = document.getElementById("loginPanel");
    const registrationPanel = document.getElementById("registrationPanel");
    const driverRegistrationPanel = document.getElementById("driverRegistrationPanel");
    const emergencyPanel = document.getElementById("emergencyPanel");

    // Helper function to switch panels
    function showPanel(panelToShow) {
        document.querySelectorAll(".panel").forEach(panel => {
            panel.classList.add("hidden");
        });
        panelToShow.classList.remove("hidden");
    }

    // Show login panel initially
    showPanel(loginPanel);

    // Login button event
    document.getElementById("loginButton").addEventListener("click", function () {
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();

        if (email && password) {
            alert("Login successful!");
            showPanel(emergencyPanel);
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Register button event
    document.getElementById("registerButton").addEventListener("click", function () {
        showPanel(registrationPanel);
    });

    // Registration submit button event
    document.getElementById("registerSubmitButton").addEventListener("click", function () {
        const name = document.getElementById("regName").value.trim();
        const email = document.getElementById("regEmail").value.trim();
        const password = document.getElementById("regPassword").value.trim();

        if (name && email && password) {
            alert("Registration successful! You can now log in.");
            showPanel(loginPanel);
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Back to login from registration button event
    document.getElementById("backToLoginButton").addEventListener("click", function () {
        showPanel(loginPanel);
    });

    // Driver registration submit button event
    document.getElementById("driverRegisterSubmitButton").addEventListener("click", function () {
        const email = document.getElementById("driverEmail").value.trim();
        const password = document.getElementById("driverPassword").value.trim();

        if (email && password) {
            alert("Driver registration successful! You can now log in.");
            showPanel(loginPanel);
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Back to login from driver registration button event
    document.getElementById("backToLoginFromDriverButton").addEventListener("click", function () {
        showPanel(loginPanel);
    });

    // Emergency panel back to login button event
    document.getElementById("emergencyBackButton").addEventListener("click", function () {
        alert("You have logged out.");
        showPanel(loginPanel);
    });

    // Notify emergency services button event
    document.getElementById("emergencyButton").addEventListener("click", function () {
        alert("Emergency services have been notified!");
    });
});
