
let numArray = [],
    arrayFloat = [];

function getNumber() {
    var n = Number(document.getElementById("inputNum").value);
    numArray.push(n);
    document.getElementById("spanSo").innerHTML = numArray;
}

function getSum() {
    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    document.getElementById("spanBai1").innerHTML = sum;
}

function getCountPositive() {
    let countP = 0;
    for (let i = 0; i < numArray.length; i++) {
        numArray[i] > 0 && countP++;
    }
    document.getElementById("spanBai2").innerHTML = countP;
}

function findMini() {
    let paraMin = numArray[0];
    for (let i = 0; i < numArray.length; i++) {
        numArray[i] < paraMin && (paraMin = numArray[i]);
    }
    document.getElementById("spanBai3").innerHTML = paraMin;
}

function findMinPos() {
    let minArray = [],
        paraMin;
    for (let i = 0; i < numArray.length; i++) numArray[i] > 0 && (minArray.push(numArray[i]));

    paraMin = minArray[0];
    for (let i = 0; i < minArray.length; i++) minArray[i] < paraMin && (paraMin = minArray[i]);

    document.getElementById("spanBai4").innerHTML = paraMin;
}

function findLastOdd() {
    let lastOdd = -1;
    for (let i = numArray.length - 1; i >= 0; i--) {
        if (numArray[i] % 2 !== 0) {
            lastOdd = numArray[i];
            break;
        }
    }
    document.getElementById("spanBai5").innerHTML = lastOdd;
}

function swap(n, r) {
    var e = numArray[n];
    numArray[n] = numArray[r];
    numArray[r] = e;
}

function changePosition() {
    swap(Document.getElementById("inputIndex1").value, Document.getElementById("inputIndex2").value);
    document.getElementById("spanBai7").innerHTML = "Mảng sau khi đổi: " + numArray
}

function sortIncrease() {
    for (var n = 0; n < numArray.length; n++)
        for (var r = 0; r < numArray.length - 1; r++) numArray[r] > numArray[r + 1] && swap(r, r + 1);
    document.getElementById("spanBai7").innerHTML = "Mảng sau khi sắp xếp: " + numArray
}

function checkPrime(n) {
    if (n < 2) return !1;
    for (var r = 2; r <= Math.sqrt(n); r++)
        if (n % r == 0) return !1;
    return !0
}

function findPrime() {
    for (var n = -1, r = 0; r < numArray.length; r++) {
        if (checkPrime(numArray[r])) {
            n = numArray[r];
            break;
        }
    }
    document.getElementById("spanBai8").innerHTML = -1 !== n ? n : "Không có số nguyên tố"
}

function getFloat() {
    var n = Number(document.getElementById("inputFloat").value);
    arrayFloat.push(n), document.getElementById("txtArrayFloat").innerHTML = arrayFloat
}

function findInt() {
    for (var n = 0, r = 0; r < arrayFloat.length; r++) Number.isInteger(arrayFloat[r]) && n++;
    document.getElementById("txtInt").innerHTML = "Số nguyên: " + n
}

function compareNum() {
    for (var n = 0, r = 0, e = 0; e < numArray.length; e++) numArray[e] > 0 ? n++ : numArray[e] < 0 && r++;
    document.getElementById("spanBai10").innerHTML = n > r ? "Số dương > Số âm" : n < r ? "Số âm > Số dương" : "Số âm = Số dương"
}