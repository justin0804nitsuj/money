function login() {
    const username = document.getElementById('username').value;
    if (username) {
        // 更新使用者的登入次數
        let loginCount = localStorage.getItem(`${username}_loginCount`) || 0;
        loginCount++;
        localStorage.setItem(`${username}_loginCount`, loginCount);

        // 更新總登入人次
        let totalLogins = localStorage.getItem('totalLogins') || 0;
        totalLogins++;
        localStorage.setItem('totalLogins', totalLogins);

        // 導向到 main.html 並傳遞使用者名稱
        window.location.href = `main.html?username=${encodeURIComponent(username)}`;
    } else {
        alert("請輸入姓名");
    }
}

function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function displayWelcomeMessage() {
    const username = getParameterByName('username');
    if (username) {
        const loginCount = localStorage.getItem(`${username}_loginCount`) || 0;
        document.getElementById('welcome-message').textContent = `已成功登入 名稱為:${username}`;
        document.getElementById('login-count').textContent = `這是您第 ${loginCount} 次登入`;

        const totalLogins = localStorage.getItem('totalLogins') || 0;
        document.getElementById('total-logins').textContent = `總來訪人次：${totalLogins}`;
    } else {
        document.getElementById('welcome-message').textContent = `未提供姓名`;
    }
}
