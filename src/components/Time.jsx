// import {differenceInHours,} from "date-fns"

// const date = new Date("2025/03/10/:22:22");
// const today = new Date();

// const tsagiinZoruu = () => {

//   const tsag = differenceInHours(today, postedTime);
//   const isItDay = tsag >= 24 ? true : false;

//   if (isItDay) {
//     const dayDiff = `${tsag / 24}`.split(".")[0];

//     if (dayDiff >= 31) {
//       const monthDiff = `${dayDiff / 30}`.split(".")[0];

//       if (monthDiff >= 12) {
//         const yearDiff = `${monthDiff / 12}`.split(".")[0];
//         return `${yearDiff} ${yearDiff === 1 ? " year ago" : " years ago"}`;
//       } else {
//         return `${monthDiff} ${
//           monthDiff === 1 ? " month ago" : " months ago"
//         }`;
//       }
//     } else {
//       return `${dayDiff}${dayDiff === 1 ? ` day ago` : " days ago"} `;
//     }
//   }

//   return `${tsag} ${tsag === 1 ? " hour ago" : " hours ago"} `;

// };

// export default tsagiinZoruu;
import { differenceInMinutes, differenceInHours, differenceInDays, differenceInMonths, differenceInYears } from "date-fns";

const tsagiinZoruu = (postedTime) => {
  const today = new Date();
  
  // Handle invalid or future dates
//   if (!(postedTime instanceof Date) || isNaN(postedTime)) {
//     return "Invalid date";
//   }
//   if (postedTime > today) {
//     return "Posted in the future";
//   }

  const hours = differenceInHours(today, postedTime);
  if (hours < 24) {
    return `${hours} ${hours === 1 ? "hour ago" : "hours ago"}`;
  }

  const minutes = differenceInMinutes(today, postedTime);
    if (minutes < 60) {

  return `${minutes} ${minutes === 1 ? "minute ago" : "minutes ago"}`;
}

  const days = differenceInDays(today, postedTime);
  if (days < 31) {
    return `${days} ${days === 1 ? "day ago" : "days ago"}`;
  }

  const months = differenceInMonths(today, postedTime);
  if (months < 12) {
    return `${months} ${months === 1 ? "month ago" : "months ago"}`;
  }

  const years = differenceInYears(today, postedTime);
  return `${years} ${years === 1 ? "year ago" : "years ago"}`;
};

export default tsagiinZoruu;