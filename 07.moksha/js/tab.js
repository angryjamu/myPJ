document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('.seasonal-category');
    const menus = document.querySelectorAll('.menu-list-wrapper');

    function showMenu() {
        menus.forEach(menu => {
            menu.style.display = 'none';
        });

        const activeMenuId = document.querySelector('.seasonal-category:checked').value + '-menu';
        document.getElementById(activeMenuId).style.display = 'block';
    }

    inputs.forEach(input => {
        input.addEventListener('change', showMenu);
    });

    // 초기 로딩 시 현재 체크된 메뉴를 보여줌
    showMenu();
});

document.addEventListener('DOMContentLoaded', function () {
    const detailButton = document.getElementById('attention-detail-button');
    const explanationBox = document.getElementById('explanation-box');

    detailButton.addEventListener('click', function () {
        if (explanationBox.style.display === 'none' || explanationBox.style.display === '') {
            explanationBox.style.display = 'flex';
            setTimeout(() => {
                explanationBox.style.opacity = '1';
            }, 10);  // 약간의 지연을 주어 transition이 적용되도록 함
        } else {
            explanationBox.style.opacity = '0';
            setTimeout(() => {
                explanationBox.style.display = 'none';
            }, 400);  // CSS transition 시간과 동일하게 설정
        }
    });
});
