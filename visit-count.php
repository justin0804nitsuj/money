<?php
// 檔案名：visit-count.php

// 設定計數器檔案的路徑
$counterFile = 'counter.txt';

// 如果檔案不存在，則創建並初始化為0
if (!file_exists($counterFile)) {
    file_put_contents($counterFile, 0);
}

// 讀取當前的計數器數值
$visitCount = (int)file_get_contents($counterFile);

// 增加來訪人數
$visitCount++;

// 將新的數值寫回檔案
file_put_contents($counterFile, $visitCount);

// 返回 JSON 格式的數據
header('Content-Type: application/json');
echo json_encode(['visitCount' => $visitCount]);
