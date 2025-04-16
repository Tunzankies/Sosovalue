// OTP Sosovalue Extractor - Copyright © 2025 @tunzankies (https://t.me/tunzankies)

class EmailOTPClient {
    constructor() {
        this.BASEURLMAIL = 'https://api.mail.tm';
    }

    async Authentication(address, password) {
        const url = `${this.BASEURLMAIL}/token`;
        const payload = { address, password };
        
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
        if (!response.ok) throw new Error('Authentication failed');
        return response.json();
    }

    async getMessage(token) {
        const url = `${this.BASEURLMAIL}/messages`;
        const response = await fetch(url, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (!response.ok) throw new Error('Failed to fetch messages');
        return response.json();
    }

    async deleteMessage(token, messageId) {
        const id = messageId.includes('/') ? messageId.split('/').pop() : messageId;
        const url = `${this.BASEURLMAIL}/messages/${id}`;
        
        const response = await fetch(url, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (!response.ok) throw new Error('Failed to delete message');
        return response.json();
    }

    extractOTPFromMessage(message) {
        const fieldsToCheck = ['subject', 'intro'];
        const otpPattern = /\b\d{6}\b/;
        
        for (const field of fieldsToCheck) {
            if (message[field]) {
                const match = message[field].match(otpPattern);
                if (match) {
                    return {
                        otp: match[0],
                        messageId: message.id || message['@id']
                    };
                }
            }
        }
        return null;
    }

    findOTP(data) {
        if (!data || !data['hydra:member'] || !Array.isArray(data['hydra:member']) || data['hydra:member'].length === 0) {
            return null;
        }

        for (const message of data['hydra:member']) {
            const result = this.extractOTPFromMessage(message);
            if (result) return result;
        }
        return null;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const client = new EmailOTPClient();
    const getOtpBtn = document.getElementById('getOtpBtn');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const resultDiv = document.getElementById('result');
    const loadingDiv = document.getElementById('loading');
    let currentToken = null;
    let currentMessageId = null;

    getOtpBtn.addEventListener('click', async () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            showResult('Please enter both email and password', 'error');
            return;
        }

        try {
            loadingDiv.style.display = 'block';
            resultDiv.style.display = 'none';
            
            const authResult = await client.Authentication(email, password);
            if (!authResult.token) throw new Error('Authentication failed');

            currentToken = authResult.token; // Store the token for later use
            const messageData = await client.getMessage(authResult.token);
            const otpResult = client.findOTP(messageData);

            if (otpResult) {
                currentMessageId = otpResult.messageId; // Store the message ID
                showResultWithDelete(`OTP: <strong>${otpResult.otp}</strong>`, 'success', currentToken, currentMessageId);
            } else {
                showResult('No OTP found in recent messages', 'error');
            }
        } catch (error) {
            showResult(`Error: ${error.message}`, 'error');
        } finally {
            loadingDiv.style.display = 'none';
        }
    });

    function showResult(message, type) {
        resultDiv.innerHTML = message;
        resultDiv.className = `result-container ${type}`;
        resultDiv.style.display = 'block';
    }

    function showResultWithDelete(message, type, token, messageId) {
        resultDiv.innerHTML = `
            ${message}
            <button id="deleteBtn" class="delete-btn">Delete Message</button>
        `;
        resultDiv.className = `result-container ${type}`;
        resultDiv.style.display = 'block';

        // Add event listener to the delete button
        const deleteBtn = document.getElementById('deleteBtn');
        deleteBtn.addEventListener('click', async () => {
            if (!token || !messageId) {
                showResult('No message to delete or authentication token missing', 'error');
                return;
            }

            try {
                loadingDiv.style.display = 'block';
                await client.deleteMessage(token, messageId);
                showResult('Message deleted successfully!', 'success');
                deleteBtn.style.display = 'none'; // Hide the button after deletion
            } catch (error) {
                showResult(`Error deleting message: ${error.message}`, 'error');
            } finally {
                loadingDiv.style.display = 'none';
            }
        });
    }
});