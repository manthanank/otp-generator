document.addEventListener('DOMContentLoaded', () => {
    const sendOTPForm = document.getElementById('sendOTPForm');

    if (sendOTPForm) {
        sendOTPForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = sendOTPForm.elements.email.value;
            const response = await fetch(`/api/sendOTP?email=${email}`);
            const result = await response.json();
            // console.log(result);
            alert(result.message);
            if (result.success) {
                window.location.href = 'verifyOTP.html';
            }
        });
    }
});