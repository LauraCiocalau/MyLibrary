export interface MyResetPasswordRequest {
    email: string;
    token: string;
    newPassword: string;
    confirmPassword: string; 
}