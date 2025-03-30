let canInput = true;           // 是否允許輸入
let timeLeft = 10;             // 倒數秒數
let countdown;                 // 記錄倒數計時的 interval ID
const display = document.getElementById('display');
const timerDisplay = document.getElementById('timerDisplay');
const clearBtn = document.getElementById('clearBtn');

// 開始倒數計時
function startTimer() {
  canInput = true;
  timeLeft = 5;
  timerDisplay.textContent = "剩餘時間： " + timeLeft + "秒";

  // 清除前一次的計時器（如果有的話）
  if (countdown) {
    clearInterval(countdown);
  }
  countdown = setInterval(() => {
    timeLeft--;
    if (timeLeft >= 0) {
      timerDisplay.textContent = "剩餘時間： " + timeLeft + "秒";
    }
    if (timeLeft <= 0) {
      clearInterval(countdown);
      canInput = false;
      timerDisplay.textContent = "時間到！";
    }
  }, 1000);
}

// 啟動計時器
startTimer();

// 監聽鍵盤輸入事件
document.addEventListener('keydown', (event) => {
  if (!canInput) return;
  // event.key 自動處理大小寫
  display.textContent += event.key;
});

// 清空按鈕的功能：清除顯示區域與重置計時器
clearBtn.addEventListener('click', () => {
  display.textContent = "";
  if (countdown) {
    clearInterval(countdown);
  }
  startTimer();
});
