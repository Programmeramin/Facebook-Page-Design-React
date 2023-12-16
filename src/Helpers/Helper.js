import { toast } from "react-toastify"



 
 export const createToast = (msg, type = "error") =>{
    return toast[type](msg)
 }


 /**
  * 
  * @param {*} isEmail Function
  * @returns 
  */


   export const  isEmail = (email) =>{
   // Regular expression for basic email validation
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
   // Test the email against the regex
   return emailRegex.test(email);
 }
 
 // Example usage:
 const email1 = "test@example.com";
 const email2 = "invalid.gmail";
 console.log(isEmail(email1)); // Output: true
 console.log(isEmail(email2)); // Output: false





/**
 * 
 * @param {*} Ismobile 
 * @returns 
 */

 export const isMobile = (mobile) => {
   // Regular expression for mobile number validation (10 or 13 digits)
   const mobileRegex = /^\d{10}$|^\d{13}$/;
   
   // Test the mobile number against the regex
   return mobileRegex.test(mobile);
 }
 
 // Example usage:
 const mobile1 = "1234567890";      // Valid: 10 digits
 const mobile2 = "9876543210123";   // Valid: 13 digits
 const mobile3 = "987654321";       // Invalid: less than 10 digits
 const mobile4 = "abcdefghij";       // Invalid: contains non-numeric characters
 const mobile5 = "98765432101234";  // Invalid: more than 13 digits
 console.log(isMobile(mobile1)); // Output: true
 console.log(isMobile(mobile2)); // Output: true
 console.log(isMobile(mobile3)); // Output: false
 console.log(isMobile(mobile4)); // Output: false
 console.log(isMobile(mobile5)); // Output: false
 

 

 /**
  * 
  * @param {*} Isotp 
  * @returns 
  */



 export const isOTP = (otp) => {
   // Regular expression for OTP validation (exactly 6 digits)
   const otpRegex = /^\d{6}$/;
   
   // Test the OTP against the regex
   return otpRegex.test(otp);
 }
 
 // Example usage:
 const otp1 = "123456";      // Valid: 6 digits
 const otp2 = "987654321";   // Invalid: more than 6 digits
 const otp3 = "12345";       // Invalid: less than 6 digits
 const otp4 = "abcdefghij";   // Invalid: contains non-numeric characters
 console.log(isOTP(otp1)); // Output: true
 console.log(isOTP(otp2)); // Output: false
 console.log(isOTP(otp3)); // Output: false
 console.log(isOTP(otp4)); // Output: false
 