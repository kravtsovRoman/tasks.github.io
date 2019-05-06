var date = new Date(2012, 2, 1);


function formatDate(date) {

    var month = date.getMonth() + 1;
    var day = date.getDate();

    var output = (day < 10 ? '0' : '') + day + ":"
        + (month < 10 ? '0' : '') + month + ':'
        + (date.getFullYear() + "").slice(2);

    return output;
}




console.log(formatDate(date));