const shmoment = value => {
  const date = value;
  let newDate = new Date(date);

  const calculator = {
    add(units, value) {
      if (units === 'years') {
        const editDate = new Date(newDate.setFullYear(newDate.getFullYear() + value));
        newDate = editDate;
        console.log(new Date(editDate));
        return calculator;
      }
      if (units === 'months') {
        const editDate = new Date(newDate.setMonth(newDate.getMonth() + value));
        newDate = editDate;
        console.log(new Date(editDate));
        return calculator;
      }
      if (units === 'days') {
        const editDate = new Date(newDate.setDate(newDate.getDate() + value));
        newDate = editDate;
        console.log(new Date(editDate));
        return calculator;
      }
      if (units === 'hours') {
        const editDate = new Date(newDate.setHours(newDate.getHours() + value));
        newDate = editDate;
        console.log(new Date(editDate));
        return calculator;
      }
      if (units === 'minutes') {
        const editDate = new Date(newDate.setMinutes(newDate.getMinutes() + value));
        newDate = editDate;
        console.log(new Date(editDate));
        return calculator;
      }
      if (units === 'seconds') {
        const editDate = new Date(newDate.setSeconds(newDate.getSeconds() + value));
        newDate = editDate;
        console.log(new Date(editDate));
        return calculator;
      }
      if (units === 'milliseconds') {
        const editDate = new Date(newDate.setMilliseconds(newDate.getMilliseconds() + value));
        newDate = editDate;
        console.log(new Date(editDate));
        return calculator;
      }
    },
    subtract(units, value) {
      if (units === 'years') {
        const editDate = new Date(newDate.setFullYear(newDate.getFullYear() - value));
        newDate = editDate;
        console.log(new Date(editDate));
        return calculator;
      }
      if (units === 'months') {
        const editDate = new Date(newDate.setMonth(newDate.getMonth() - value));
        newDate = editDate;
        console.log(new Date(editDate));
        return calculator;
      }
      if (units === 'days') {
        const editDate = new Date(newDate.setDate(newDate.getDate() - value));
        newDate = editDate;
        console.log(new Date(editDate));
        return calculator;
      }
      if (units === 'hours') {
        const editDate = new Date(newDate.setHours(newDate.getHours() - value));
        newDate = editDate;
        console.log(new Date(editDate));
        return calculator;
      }
      if (units === 'minutes') {
        const editDate = new Date(newDate.setMinutes(newDate.getMinutes() - value));
        newDate = editDate;
        console.log(new Date(editDate));
        return calculator;
      }
      if (units === 'seconds') {
        const editDate = new Date(newDate.setSeconds(newDate.getSeconds() - value));
        newDate = editDate;
        console.log(new Date(editDate));
        return calculator;
      }
      if (units === 'milliseconds') {
        const editDate = new Date(newDate.setMilliseconds(newDate.getMilliseconds() - value));
        newDate = editDate;
        console.log(new Date(editDate));
        return calculator;
      }
    },
    result() {
      return newDate;
    },
  };

  return calculator;
};

const result = shmoment(new Date(2020, 0, 7, 17, 17, 17))
  .add('years', 2)
  .add('seconds', 8)
  .add('months', 8)
  .subtract('years', 1)
  .subtract('months', 1)
  .result(); // ... Jan 15 2019 17:19:17 ...

console.log(result);
