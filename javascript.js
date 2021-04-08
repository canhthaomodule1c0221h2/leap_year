let year = +prompt("nhập năm vào")
if (year % 400 ==0) {
    if (year % 100 ==0){
        alert("đây là năm nhuận");
    }
    else {
    alert("đây không phải là năm nhuận");}
}
else if (year % 4==0) {
    if (year % 100 ==0) {
        alert(" đây không phải là năm nhuận");
    }
    else {
    alert(" đây là năm nhuân");}
}
else {
alert("không phải năm nhuận");}


