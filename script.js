// 这是一个简单的JavaScript文件，用于未来添加交互功能
// 例如：图片灯箱、导航栏响应式菜单等

document.addEventListener('DOMContentLoaded', function() {
    console.log('网站加载完毕！');

    // 示例：你可以在这里为图片添加点击放大功能
    const images = document.querySelectorAll('.gallery-item img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            alert('未来这里可以实现图片放大查看的功能！');
        });
    });
});