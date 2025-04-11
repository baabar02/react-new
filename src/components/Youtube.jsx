const Videos = () => {
  const date = new Date();

  const tsagiinZoruu = () => {
    const tsag = differenceInHours(today, postedTime);
    const isItDay = tsag >= 24 ? true : false;

    if (isItDay) {
      const dayDiff = `${tsag / 24}`.split(".")[0];

      if (dayDiff >= 31) {
        const monthDiff = `${dayDiff / 30}`.split(".")[0];

        if (monthDiff >= 12) {
          const yearDiff = `${monthDiff / 12}`.split(".")[0];
          return `${yearDiff} ${yearDiff === 1 ? " year ago" : " years ago"}`;
        } else {
          return `${monthDiff} ${
            monthDiff === 1 ? " month ago" : " months ago"
          }`;
        }
      } else {
        return `${dayDiff}${dayDiff === 1 ? ` day ago` : " days ago"} `;
      }
    }

    return `${tsag} ${tsag === 1 ? " hour ago" : " hours ago"} `;
  };

  return <div style={{ border: "1px solid green" }}>asd</div>;
};

export default Videos;
