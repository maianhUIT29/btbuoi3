function isPalindrome(str) {
    // Loại bỏ các ký tự không phải chữ cái và chuyển thành chữ thường
    let cleanedStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
    let reversedStr = cleanedStr.split("").reverse().join("");

    return cleanedStr === reversedStr;
}

console.log("Chuỗi 'madam' có phải là palindrome?", isPalindrome("madam"));
console.log("Chuỗi 'hello' có phải là palindrome?", isPalindrome("hello"));
