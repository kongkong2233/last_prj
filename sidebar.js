function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const isSidebarVisible = getComputedStyle(sidebar).right === '0px';

    if (isSidebarVisible) {
        sidebar.style.right = '-300px';
    } else {
        sidebar.style.right = '0';
    }
}

document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const isClickInsideSidebar = event.target.closest('#sidebar') !== null;

    if (!isClickInsideSidebar && getComputedStyle(sidebar).right === '0px') {
        sidebar.style.right = '-300px';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const currentUser = sessionStorage.getItem("currentUser");

    if (currentUser) {
        const userInfo = JSON.parse(currentUser);
    
        const userInfoText = document.getElementById('userInfo');
    
        userInfoText.innerHTML = `
            ${userInfo.userNm}
        `
    } else {
        console.log("사용자 정보 없음");
    }
});