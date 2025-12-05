document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-run-btn');

    // 监听“开始户外跑”按钮的点击事件
    startButton.addEventListener('click', function() {
        // 在实际应用中，这里会启动 GPS, 计时器, 并跳转到运动中界面

        // 简单提示用户运动开始
        alert('🏃‍♀️ 运动开始！GPS 已连接，计时器启动。');

        // 可选：更改按钮状态
        startButton.textContent = '停止';
        startButton.style.backgroundColor = '#dc3545'; // 变成红色
    });

    // 可以在这里添加其他交互逻辑，例如底部导航栏切换等

    console.log('运动App前端脚本加载完成。');
});