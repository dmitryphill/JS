let student1 = {firstName: 'Ezio',
    lastName: 'Auditore',
    rating: 70};
let student2 = {firstName: 'Illidan',
    lastName: 'Stormrage',
    rating: 96};
let student3 = {firstName: 'Emiya',
    lastName: 'Shirou',
    rating: 67};
let student4 =  {firstName: 'Arthur',
    lastName: 'Pendragon',
    rating: 81};
let student5 =  {firstName: 'Mordred',
    lastName: 'Pendragon',
    rating: 83};
let student6 =   {firstName: 'Uther',
    lastName: 'Lightbringer',
    rating: 69};
let student7 =  {firstName: 'Arthas',
    lastName: 'Menethil',
    rating: 57};
let StudentsList = [student1, student2, student3, student4, student5, student6, student7];
function ShowStudentList (id, number){
    document.getElementById(id).innerHTML = StudentsList[number].firstName +" "+ StudentsList[number].lastName +" "+ StudentsList[number].rating
};

ShowStudentList("first", 0);
ShowStudentList("second", 1);
ShowStudentList("third", 2);
ShowStudentList("fourth", 3);
ShowStudentList("fifth", 4);
ShowStudentList("sixth", 5);
ShowStudentList("seventh", 6);

function sortByName(arr) {
    arr.sort((a, b) => a.firstName > b.firstName ? 1 : -1)
};
sortByName(StudentsList);
ShowStudentList("first2", 0);
ShowStudentList("second2", 1);
ShowStudentList("third2", 2);
ShowStudentList("fourth2", 3);
ShowStudentList("fifth2", 4);
ShowStudentList("sixth2", 5);
ShowStudentList("seventh2", 6);

function sortByRating(arr) {
    arr.sort((a, b) => a.rating > b.rating ? 1 : -1)
};
sortByRating(StudentsList);
ShowStudentList("first3", 0);
ShowStudentList("second3", 1);
ShowStudentList("third3", 2);
ShowStudentList("fourth3", 3);
ShowStudentList("fifth3", 4);
ShowStudentList("sixth3", 5);
ShowStudentList("seventh3", 6);

function findMaxMark (arr){
    sortByRating(arr);
    let maxMarkStudent = arr[arr.length-1].firstName + " " + arr[arr.length-1].lastName + " " + arr[arr.length-1].rating;
    return maxMarkStudent;
};

function findMinMark (arr){
    sortByRating(arr);
    let minMarkStudent = arr[0].firstName + " " + arr[0].lastName + " " + arr[0].rating;
    return minMarkStudent;
};

function findAverageMark (arr){
    sortByRating(arr);
    let averageNumber = 0, averageMark, closestLeft, closestRight, current;
    for (let i = 0; i < arr.length; i++){
        averageNumber += arr[i].rating;
    };
    averageNumber = averageNumber/arr.length;

    for (let i = 0; i < arr.length; i++) {
        current = arr[i].rating;
        if (current < averageNumber)
        closestLeft = current;
        else if (current > averageNumber){
        closestRight = current;
        break;}
    }

    if (Math.abs(closestLeft-averageNumber)<Math.abs(closestRight-averageNumber))
    averageMark = closestLeft;
    else if(Math.abs(closestLeft-averageNumber)>Math.abs(closestRight-averageNumber))
    averageMark = closestRight;
    for (let i = 0; i < arr.length; i++){
        if (averageMark == arr[i].rating)
        averageMark = arr[i].firstName + " " + arr[i].lastName + " " + arr[i].rating;
        
    };
    return averageMark;
};


document.getElementById('maxMark').innerHTML = findMaxMark(StudentsList);
document.getElementById('minMark').innerHTML = findMinMark(StudentsList);
document.getElementById('averageMark').innerHTML = findAverageMark(StudentsList);

let StudentsListRate = StudentsList.slice(0);

function findRating (arr){
    StudentsListRate.reverse();
    let rate;
    for (let i = 0; i < arr.length; i++) {
    rate = ((arr[i].rating - arr[length].rating)/arr[length].rating)*100;
    arr[i].rate = "~ " + rate.toFixed(2) + "% from leader"}
}
findRating(StudentsListRate)

function ShowRatelist (id, number){
    document.getElementById(id).innerHTML = StudentsListRate[number].firstName +" "+
     StudentsListRate[number].lastName +" "+ StudentsListRate[number].rating + " " + StudentsListRate[number].rate;
};
ShowRatelist("first4", 0);
ShowRatelist("second4", 1);
ShowRatelist("third4", 2);
ShowRatelist("fourth4", 3);
ShowRatelist("fifth4", 4);
ShowRatelist("sixth4", 5);
ShowRatelist("seventh4", 6);


function generatePassword() {
    let length = document.getElementById('passwordCharNum').value;
    const charsetEn = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const charsetEnNum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    const charsetEnNumSumb = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_-+[]{}"
    let password = ""

    if (document.getElementById("onlyChars").checked){
        for (let i = 0, n = charsetEn.length; i < length; ++i) {
        password += charsetEn.charAt(Math.floor(Math.random() * n)); 
        }
    }
    else if (document.getElementById("CharsNumbers").checked){
    for (let i = 0, n = charsetEnNum.length; i < length; ++i) {
        password += charsetEnNum.charAt(Math.floor(Math.random() * n));
        }
    }
    else if (document.getElementById("CharsNumbersSymbols").checked){
        for (let i = 0, n = charsetEnNumSumb.length; i < length; ++i) {
            password += charsetEnNumSumb.charAt(Math.floor(Math.random() * n));
            }
        }
    document.getElementById('password').innerHTML = password;
} 

let genPass = document.getElementById('generatePassword');
genPass.addEventListener("click", function () {generatePassword()}, false);