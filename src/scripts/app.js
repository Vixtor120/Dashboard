document.addEventListener('DOMContentLoaded', () => {
    const notificationButton = document.getElementById('notificationButton');
    const notificationDropdown = document.getElementById('notificationDropdown');
    const notificationCount = document.getElementById('notificationCount');
    const closeNotifications = document.getElementById('closeNotifications');
    const removeNotificationButtons = document.querySelectorAll('.remove-notification');
    const notificationList = document.getElementById('notificationList');
    const noNotificationsMessage = document.getElementById('noNotificationsMessage');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarCollapseButton = document.getElementById('sidebarCollapseButton');
    const dashboardContent = document.getElementById('dashboardContent');

    // Mostrar u ocultar las notificaciones al hacer clic en el botón
    notificationButton.addEventListener('click', (event) => {
        event.stopPropagation();
        notificationDropdown.classList.toggle('hidden');
    });

    // Ocultar las notificaciones si haces clic fuera del menú desplegable
    document.addEventListener('click', (event) => {
        if (!notificationButton.contains(event.target) && !notificationDropdown.contains(event.target)) {
            notificationDropdown.classList.add('hidden');
        }
    });

    // Cerrar todas las notificaciones al hacer clic en el botón "Close"
    closeNotifications.addEventListener('click', () => {
        notificationDropdown.classList.add('hidden');
    });

    // Eliminar una notificación específica
    removeNotificationButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            button.parentElement.remove();
            const currentCount = parseInt(notificationCount.textContent);
            notificationCount.textContent = currentCount - 1;
            if (currentCount - 1 === 0) {
                notificationCount.classList.add('hidden');
                noNotificationsMessage.classList.remove('hidden');
                notificationList.classList.add('hidden');
            }
        });
    });

    // Toggle the sidebar width and adjust the dashboard content
    sidebarToggle.addEventListener('click', () => {
        if (sidebar.classList.contains('w-64')) {
            sidebar.classList.remove('w-64');
            sidebar.classList.add('w-16');
            dashboardContent.classList.add('ml-16');
            dashboardContent.classList.remove('ml-64');
            localStorage.setItem('sidebarState', 'collapsed');
        } else {
            sidebar.classList.remove('w-16');
            sidebar.classList.add('w-64');
            dashboardContent.classList.add('ml-64');
            dashboardContent.classList.remove('ml-16');
            localStorage.setItem('sidebarState', 'expanded');
        }
    });

    // Set the sidebar state based on localStorage
    const sidebarState = localStorage.getItem('sidebarState');
    if (sidebarState === 'collapsed') {
        sidebar.classList.remove('w-64');
        sidebar.classList.add('w-16');
        dashboardContent.classList.add('ml-16');
        dashboardContent.classList.remove('ml-64');
    } else {
        sidebar.classList.remove('w-16');
        sidebar.classList.add('w-64');
        dashboardContent.classList.add('ml-64');
        dashboardContent.classList.remove('ml-16');
    }
});
