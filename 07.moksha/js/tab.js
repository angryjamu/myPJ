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