// PasswordValidator.js
import React, { useState } from "react";
import "../styles.css";

function PasswordValidator() {
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState("");

    // Function to check password strength
    const evaluatePasswordStrength = (password) => {
        let score = 0;

        if (password.length >= 8) score += 1;
        if (password.length >= 12) score += 1;
        if (/[A-Z]/.test(password)) score += 1;
        if (/[a-z]/.test(password)) score += 1;
        if (/[0-9]/.test(password)) score += 1;
        if (/[^A-Za-z0-9]/.test(password)) score += 1;

        if (score <= 2) return "Weak";
        if (score === 3) return "Good";
        if (score === 4) return "Very Good";
        if (score === 5) return "Strong";
        return "Excellent";
    };

    // Handle password change and update strength
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setStrength(evaluatePasswordStrength(newPassword));
    };

    return (
        <div className="password-validator">
            <h2>Password Strength Validator</h2>
            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
            />
            <p>Password strength: <strong>{strength}</strong></p>
        </div>
    );
}

export default PasswordValidator;
