// 初始化桌子数组，每天100张桌子
let tables = {
    small: Array(30).fill(0), // 0表示未被预定
    medium: Array(30).fill(0),
    large: Array(40).fill(0)
};

// 检查日期是否有效
function isValidDate(date) {
    let today = new Date();
    today.setHours(0, 0, 0, 0); // 将时间设置为当天的开始
    let selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0); // 将时间设置为选定日期的开始
    return selectedDate >= today;
}

// 检查是否有合适的桌子
function checkTables(people) {
    let tableType = null;
    if (people <= 2) {
        tableType = 'small';
    } else if (people <= 4) {
        tableType = 'medium';
    } else if (people <= 10) {
        tableType = 'large';
    } else {
        alert('人数超出最大限制！');
        return false;
    }

    let tableArray = tables[tableType];
    for (let i = 0; i < tableArray.length; i++) {
        if (tableArray[i] === 0) {
            tableArray[i] = 1; // 标记为已预定
            return true;
        }
    }
    return false;
}

// 预定函数
function makeReservation() {
    let date = document.getElementById('date').value;
    let people = parseInt(document.getElementById('people').value);
    let name = document.getElementById('name').value;
    let contact = document.getElementById('contact').value;

    if (!isValidDate(date)) {
        alert('NOT ABLE！');
        return;
    }
    
    if (checkTables(people)) {
        let reservationInfo = `Congratulation！\nName: ${name}\nConnect number: ${contact}\nDate: ${date}\nTime: ${document.getElementById('time').value}\nNumber of people:: ${people}`;
        alert(reservationInfo);
    } else {
        alert('Sorry, the reservation is full for today!');
    }
}