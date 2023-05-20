let cad = `
    <div class="logo">
      <img src="Imagenes/Logo. -.png" alt="Di Nonna">
    </div>

    <input type="checkbox" class="menu-btn" id="menu-btn" />

    <label class="menu-icon" for="menu-btn">
      <span class="navicon"></span>
    </label>

    <ul class="menu">
      <li><a href="index.html" class="ventanaInicio">Inicio</a></li>
      <li><a href="menu.html" class="ventanaMenu">Nuestra carta</a></li>
      <li><a href="sucursales.html" class="ventanaSucursales">Sucursales</a></li>
      <li><a href="trabaja-con-nosotros.html" class="ventanaTrabaja">Trabaja con Nosotros</a></li>
    </ul>
`

document.getElementById("cab").innerHTML = cad;

cadFooter = `
    <div class="footer-section">
        <div class="row">
            <a href="https://es-la.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a>
            <a href="https://www.whatsapp.com/?lang=es"><i class="fa-brands fa-whatsapp"></i></a>
        </div>

        <div class=" row">
            <ul>
                <li><a href="index.html" class="ventanaInicio">Inicio</a></li>
                <li><a href="menu.html" class="ventanaMenu">Menu</a></li>
                <li><a href="sucursales.html" class="ventanaSucursales">Sucursales</a></li>
                <li><a href="trabaja-con-nosotros.html" class="ventanaTrabaja">Trabaja con Nosotros</a></li>
            </ul>
        </div>

        <div class="row">
            <p>Copyright 2023 - All rights reserved</p> 
            <p>Designed By: Nazareno Taux & Julieta Solomonovici</p>
        </div>
    </div>
`

document.getElementById("pie").innerHTML = cadFooter;
