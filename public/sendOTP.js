document.addEventListener('DOMContentLoaded', () => {
    const sendOTPForm = document.getElementById('sendOTPForm');

    if (sendOTPForm) {
        sendOTPForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = sendOTPForm.elements.email.value;
            const response = await fetch(`/api/sendOTP?email=${email}`);
            const result = await response.text();
            alert(result);
        });
    }
});