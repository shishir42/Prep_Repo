// Input: date = "20th Oct 2052"
// Output: "2052-10-20"

function reformatDate(date) {
    const months = {
      Jan: '01',
      Feb: '02',
      Mar: '03',
      Apr: '04',
      May: '05',
      Jun: '06',
      Jul: '07',
      Aug: '08',
      Sep: '09',
      Oct: '10',
      Nov: '11',
      Dec: '12'
    };
    
    const [day, monthStr, year] = date.split(' ');
    const month = months[monthStr];
    const paddedDay = day.length === 3 ? '0' + day[0] : day.slice(0, 2);
    
    return `${year}-${month}-${paddedDay}`;
  }

  
  const date = "20th Oct 2052";
  const reformattedDate = reformatDate(date);
  console.log(reformattedDate); // prints "2052-10-20"