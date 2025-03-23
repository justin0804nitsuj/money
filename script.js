function login() {
    const username = document.getElementById('username').value;
    if (username) {
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
        document.getElementById('welcome-message').textContent = `你好 ${username} !`;
    } else {
        document.getElementById('welcome-message').textContent = `未提供姓名`;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // 取得元素
    const menuBtn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav');
  
    // 設定一個狀態，用來表示選單是否已開啟
    let menuOpen = false;
  
    // 綁定點擊事件
    menuBtn.addEventListener('click', () => {
      // 切換漢堡按鈕樣式
      menuBtn.classList.toggle('open');
      // 切換選單滑出/收合
      nav.classList.toggle('show-nav');
      
      // 更新狀態
      menuOpen = !menuOpen;
    });
  });
  