var values = [0, 5, 15, 20];
debugger
values.sort(compare);
alert(values);

function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}