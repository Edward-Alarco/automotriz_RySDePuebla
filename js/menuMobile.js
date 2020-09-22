var propMenu = {
    burger_menu: document.getElementById('burger_menu'),
    slide_menu: document.getElementById('menu-despegable'),
    menu_activo: false,
    elem_menu: document.querySelectorAll('#menu-despegable .menu-principal a')
}

var metMenu = {

    inicio: function () {
        propMenu.burger_menu.addEventListener('click', metMenu.toogleMenu);

        for (var i = 0; i < propMenu.elem_menu.length; i++) {
            propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu);

        }
    },

    toogleMenu: function () {
        if (propMenu.menu_activo == false) {
            propMenu.menu_activo = true;
            propMenu.slide_menu.className += ' active';
        } else {
            propMenu.menu_activo = false;
            propMenu.slide_menu.className = propMenu.slide_menu.className.replace(' active', '');
        }
    },

    ocultarMenu: function () {
        propMenu.menu_activo = false;
        propMenu.slide_menu.className = propMenu.slide_menu.className.replace(' active', '');
    }

}

metMenu.inicio();