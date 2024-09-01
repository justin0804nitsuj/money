// 登入功能
function login() {
    var username = document.getElementById('username').value;
    if (username) {
        // 更新使用者的登入次數
        var loginCount = localStorage.getItem(username + '_loginCount') || 0;
        loginCount++;
        localStorage.setItem(username + '_loginCount', loginCount);

        // 更新總登入人次
        var totalLogins = localStorage.getItem('totalLogins') || 0;
        totalLogins++;
        localStorage.setItem('totalLogins', totalLogins);

        // 導向到歡迎頁面並傳遞使用者名稱
        window.location.href = `main.html?username=${encodeURIComponent(username)}`;
    } else {
        alert("請輸入姓名");
    }
}

// 取得 URL 參數
function getParameterByName(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

// 顯示歡迎訊息與登入次數
function displayWelcomeMessage() {
    var username = getParameterByName('username');
    if (username) {
        var loginCount = localStorage.getItem(username + '_loginCount') || 0;
        document.getElementById('welcome-message').textContent = `${username} 已成功登入`;
        document.getElementById('login-count').textContent = `這是您第 ${loginCount} 次登入。`;

        var totalLogins = localStorage.getItem('totalLogins') || 0;
        document.getElementById('total-logins').textContent = `總登入人次：${totalLogins}`;
    } else {
        document.getElementById('welcome-message').textContent = `未提供姓名`;
    }
}