// 使用 Fetch API 獲取來訪人次
function updateVisitCount() {
    fetch('/api/visit-count')
        .then(response => response.json())
        .then(data => {
            document.getElementById('visit-count').textContent = data.visitCount;
        })
        .catch(error => console.error('Error fetching visit count:', error));
}

// 初始化
updateVisitCount();

// 如果需要定期更新
setInterval(updateVisitCount, 60000); // 每分鐘更新一次