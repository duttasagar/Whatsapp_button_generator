// import { cleanPhone } from "./validator";

// export function generateWhatsappLink(phone, message = "", defaultMessageOn = true) {
//   const cleaned = cleanPhone(phone);
//   if (!cleaned) return "";

//   const PhoneCleaned = cleaned.startsWith("+") ? cleaned.slice(1) : cleaned;
  


//   if (!defaultMessageOn) {
//     return `https://wa.me/${PhoneCleaned}`;
//   }



//   const encoded = encodeURIComponent(message);
//   console.log(encoded)
//   return `https://wa.me/${PhoneCleaned}?text=${encoded}`;
// }
