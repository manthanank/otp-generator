document.addEventListener('DOMContentLoaded', () => {
    const verifyOTPForm = document.getElementById('verifyOTPForm');

    if (verifyOTPForm) {
        verifyOTPForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = verifyOTPForm.elements.email.value;
            const otp = verifyOTPForm.elements.otp.value;
            const response = await fetch(`/api/verifyOTP?email=${email}&otp=${otp}`);
            const result = await response.text();
            alert(result);
        });
    }
});