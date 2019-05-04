var arr = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];


function getWeekDay(date) {
    console.log(date)
    return arr[date.getDay()]
}




console.log(getWeekDay(new Date()));