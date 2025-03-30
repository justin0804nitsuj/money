document.addEventListener('DOMContentLoaded', () => {
    // 取得漢堡按鈕與側邊選單元素
    const menuBtn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav');
    let menuOpen = false;
  
    // 透過點擊漢堡按鈕來切換選單開啟與收合
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('open');
      nav.classList.toggle('show-nav');
      menuOpen = !menuOpen;
    });
  
    // 定義要偵測的序列：m, e, n, u
    const sequence = ['m', 'e', 'n', 'u'];
    let currentIndex = 0;       // 追蹤目前進行到序列的哪一個字母
    let lastKeyTime = 0;        // 記錄最後一次正確按鍵的時間（毫秒）
    const sequenceTimeout = 3000; // 設定3秒內完成序列
  
    // 新增鍵盤事件監聽器來偵測按鍵輸入
    document.addEventListener('keydown', (event) => {
      const currentTime = Date.now();
  
      // 如果上次按鍵距離現在超過3秒，重置序列
      if (lastKeyTime && (currentTime - lastKeyTime > sequenceTimeout)) {
        currentIndex = 0;
      }
  
      // 檢查使用者按下的鍵是否符合序列中下一個要求的字母（不區分大小寫）
      if (event.key.toLowerCase() === sequence[currentIndex]) {
        // 記錄此次按鍵的時間
        lastKeyTime = currentTime;
        currentIndex++;
  
        // 如果完成整個序列，則觸發選單開啟
        if (currentIndex === sequence.length) {
          menuBtn.classList.add('open');
          nav.classList.add('show-nav');
          menuOpen = true;
          // 重置序列以便下一次偵測
          currentIndex = 0;
        }
      } else {
        // 若按下的鍵不符合預期，則重置序列
        currentIndex = 0;
        lastKeyTime = 0;
      }
    });
  });
  