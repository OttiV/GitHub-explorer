export const orderTimeAndDate = time => {
    const timeSplit = time && time.split(" ");
    const hour = timeSplit[1];
    const dateSplit = timeSplit[0].split("-");
    const day = dateSplit[2];
    const month = dateSplit[1];
    const year = dateSplit[0];
    return `${day}/${month}/${year} ${hour}`;
  };