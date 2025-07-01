
// script.js

// 1. Datos de los productos organizados por categoría

const productsData = {
    // Las claves aquí deben coincidir con los IDs de tu HTML sin "-products-grid"
    // Ejemplo: 'cortineria' para 'cortineria-products-grid'
    cortineria: [
        {
            name: "Eco-voile",
            description: "Varias Medidas",
            price: "$ 5.945,00",
            // IMPORTANTE: Si es una sola imagen, igual ponela en un array para el carrusel
            images: ["productos/cortineria/cortina_voile.webp"],
            alt: "Eco-voile",
            colors: [{ name: "blanca", hex: "white" }]
        },
        {
            name: "Voile tradicional",
            description: "Varias Medidas",
            price: "$ 7.540,00",
            images: ["productos/cortineria/cortina_voile.webp"], // Asumiendo que esta está en la subcarpeta
            alt: "Voile tradicional"
        },
        {
            name: "Voile C/cinta fruncidora",
            price: "$ 9.350,00",
            // Esta ruta es directa a 'productos', si está en 'productos/cortineria' ajustarla
            images: ["productos/cortineria/cortina_voile.webp"],
            alt: "Voile C/cinta fruncidora"
        },
        {
            name: "Tropical",
            description: "Varias Medidas",
            price: "$ 9.152,00",
            images: ["productos/cortineria/cortina_tropical_blanca.webp"],
            alt: "Tropical"
        },
        {
            name: "Tropical Con Vivo y Boton",
            price: "$ 11.705,00",
            images: ["productos/cortineria/cortina_tropical_grisclara.webp"],
            alt: "Tropical Con Vivo y Boton"
        },
        {
            name: "Cortina Tropical Bordo",
            description: "Varias Medidas",
            price: "$ 22.969,00",
            images: ["productos/cortineria/cortina_tropical_bordo.webp"],
            alt: "Cortina Tropical Bordo"
        },
        {
            name: "Cortina Tropical Maiz",
            price: "$ 24.300,00",
            images: ["productos/cortineria/cortina_tropical_maiz.webp"],
            alt: "Cortina Tropical Maiz"
        },
        {
            name: "Cortina Tropical Negra",
            price: "$ 24.219,00",
            images: ["productos/cortineria/cortina_tropical_negra.webp"],
            alt: "Cortina Tropical Negra"
        },
        {
            name: "Cortina Tropical Roja",
            price: "$ 32.054,00",
            images: ["productos/cortineria/cortina_tropical_roja.webp"],
            alt: "Cortina Tropical Roja"
        },
        {
            name: "Cortina Jaquard",
            price: "$ 9.856,00",
            images: ["productos/cortineria/cortina_jaquard.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "Cortina Jaquard"
        },
        {
            name: "Cortina de Cocina",
            price: "$ 5.022,00",
            images: ["productos/cortineria/cortina_cocina.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "Cortina de Cocina"
        },
        {
            name: "Cortina rombo pesado",
            description: "Con/Sin botón",
            price: "$ 14.702,00",
            images: ["productos/cortineria/cortina_rombo_pesado.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "Cortina rombo pesado"
        },
        {
            name: "Cortina floral estampada",
            price: "$ 4.625,00",
            images: ["productos/cortineria/cortina_floral_estampada.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "Cortina floral estampada"
        },
        {
            name: "Cortina Tusor",
            description: "Varias Medidas",
            price: "$ 18.806,00",
            images: ["productos/cortineria/cortina_tusor.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "Cortina tusor"
        },
        {
            name: "Cortina Baño Tusor",
            price: "$ 14.518,00",
            images: ["productos/CORTINERIA_BANO/CORTINA_BANO_GASA_TUSOR_BLANCA.webp"],
            alt: "Cortina Baño Tusor"
        },
        {
            name: "Cortina Gasa C/ Tiritas S/ Volados",
            description: "Varias Medidas",
            price: "$ 17.253,00",
            images: ["productos/CORTINERIA_BANO/CORTINA_BANO_GASA_TUSOR_CON_TIRITA_SIN_VOLADO_BLANCA.webp"], // Nombre de archivo ajustado si aplica
            alt: "Cortina Gasa Algodon"
        },
        {
            name: "Cortina Baño Gasa Tusor Grafito",
            price: "$ 13.630,00",
            images: ["productos/CORTINERIA_BANO/CORTINA_BANO_GASA_TUSOR_GRAFITO.webp"],
            alt: "Cortina Baño Gasa Tusor"
        },
        {
            name: "CORTINA DE GASA CON TIRITAS",
            price: "$ 21.114,00",
            images: ["productos/CORTINERIA_BANO/CORTINA_BANO_GASA_TUSOR_CON_TIRITA_SIN_VOLADO_BLANCA.webp"], // Nombre de archivo ajustado si aplica
            alt: "CORTINA DE GASA CON TIRITAS"
        }
    ],
    // NOTA: Ajusté las claves para que coincidan con los IDs de tu HTML
    // Por ejemplo, "fundaSillon" ahora es "funda-sillon"
    "funda-sillon": [
        {
            name: "Funda de sillon Rustico Pesado",
            description: "1, 2 y 3 cuerpos",
            price: "$ 12.393,00",
            images: ["productos/funda_sillon/funda_sillon_rustico.jpg"],
            alt: "Funda de sillon Rustico Pesado"
        },
        {
            name: "Funda De Sillon Tusor",
            description: "1, 2 y 3 cuerpos",
            price: "$ 17.469,00",
            images: ["productos/funda_sillon/funda_sillon_tusor.jpg"],
            alt: "Funda De Sillon Tusor"
        }
    ],
    manteleria: [
        {
            name: "Mantel cuerina",
            description: "Varias Medidas",
            price: "$ 4.928,00",
            images: ["productos/manteleria/mantel_cuerina.jpg"],
            alt: "Mantel cuerina"
        },
        {
            name: "Mantel Ecocuero Blanco",
            description: "Varias Medidas",
            price: "$ 4.928,00",
            images: ["productos/manteleria/mantel_ecocuero_blanco.webp"],
            alt: "Mantel cuerina estampada"
        },
        {
            name: "Mantel tusor",
            description: "Varias Medidas",
            price: "$ 7.904,00",
            images: ["productos/manteleria/mantel_tusor.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "Mantel tusor"
        },
        {
            name: "Mantel Gasa tusor NEW",
            price: "$ 7.587,00",
            images: ["productos/manteleria/mantel_gasa_tusor_new.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "Mantel Gasa tusor NEW"
        },
        {
            name: "Mantel De Cocina Eco NEW",
            description: "Varias Medidas",
            price: "$ 2.086,00",
            images: ["productos/manteleria/mantel_cocina_eco_new.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "Mantel De Cocina Eco NEW"
        },
        {
            name: "Servilleta Tusor Pack x4",
            price: "$ 2.288,00",
            images: ["productos/manteleria/servilleta_tusor_pack.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "Servilleta Tusor Pack x4"
        }
    ],
    sabanas: [
        {
            name: "JUEGO DE SABANA 180 HILOS",
            description: "1 ½, 2 ½, Queen, King Size",
            price: "$ 6.257,00",
            images: ["productos/sabanas/SABANA_HOTELERA_BLANCA.webp"],
            alt: "JUEGO DE SABANA 180 HILOS"
        },
        {
            name: "JUEGO DE SABANA MULTIAGUJA",
            description: "1 ½, 2 ½, Queen, King Size",
            price: "$ 8.370,00",
            images: ["productos/sabanas/SABANA_MULTIAGUJA_AZULMARINO.webp"],
            alt: "JUEGO DE SABANA MULTIAGUJA"
        },
        {
            name: "JUEGO DE SABANA PERCAL ALGODÓN 144 HILOS",
            description: "1 y media, 2 y media, Queen, King Size",
            price: "$ 19.980,00",
            images: ["productos/sabanas/SABANA_PERCAL_ALGODON_BLANCA.webp"],
            alt: "JUEGO DE SABANA PERCAL ALGODÓN 144 HILOS"
        },
        {
            name: "JUEGO DE SABANA DOBBY SATEN 400 HILOS",
            description: "1 y media, 2 y media, Queen, King Size",
            price: "$ 13.365,00",
            images: ["productos/sabanas/SABANA_SATEN_BLANCAGRIS.webp"],
            alt: "JUEGO DE SABANA DOBBY SATEN 400 HILOS"
        },
        {
            name: "JUEGO SABANA BRODERI",
            description: "Full",
            price: "$ 21.385,00",
            images: ["productos/sabanas/SABANA_BRODERI.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "JUEGO SABANA BRODERI"
        },
        {
            name: "AJUSTABLE PERCAL ALGODON 200 HILOS",
            description: "1 y media, 2 y media",
            price: "$ 8.505,00",
            images: ["productos/sabanas/AJUSTABLE_PERCAL_ALGODON.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "AJUSTABLE PERCAL ALGODON 200 HILOS"
        },
        {
            name: "Funda de colchon con cierre",
            description: "Varias Medidas",
            price: "$ 5.688,00",
            images: ["productos/sabanas/funda_colchon_cierre.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "Funda de colchon con cierre"
        },
        {
            name: "Mantas Plush",
            price: "$ 8.100,00",
            images: ["productos/sabanas/MANTA_PLUSH_BORDO.webp", "productos/mantas/plush_gatos.jpg"],
            alt: "Mantas Plush",
            colors: [
                { name: "Bordo", hex: "#800000" },
                { name: "Gatos", hex: "lightgray" },
                { name: "maiz", hex: "#f7d05e" },
                { name: "negra", hex: "black" },
                { name: "roja", hex: "red" },
                { name: "blanca", hex: "white" }
            ]
        },
        {
            name: "Mantas Plush ESTAMPADAS",
            price: "$ 8.100,00",
            images: ["productos/mantas/plush_gatos.jpg"], // REVISAR RUTA DE IMAGEN REAL
            alt: "Mantas Plush ESTAMPADAS"
        }
    ],
    "toalleria-batas": [ // Clave ajustada a kebab-case
        {
            name: "Bata secado rapido",
            price: "$ 11.760,00",
            images: ["productos/toalleria_y_batas/BATA_SECADO_RAPIDO.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "Bata secado rapido"
        },
        {
            name: "Juego Toalla y Toallon 650 grms.",
            price: "$ 14.837,00",
            images: ["productos/toalleria_y_batas/JUEGO_TOALLA_TOALLON.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "Juego Toalla y Toallon 650 grms."
        },
        {
            name: "Toallon Algodón con guarda Menucha",
            price: "$ 4.590,00",
            images: ["productos/toalleria_y_batas/TOALLON_ALGODON_MENUCHA.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "Toallon Algodón con guarda Menucha"
        },
        {
            name: "Toallon playero microfibra",
            price: "$ 5.360,00",
            images: ["productos/toalleria_y_batas/TOALLON_PLAYERO_MICROFIBRA.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "Toallon playero microfibra"
        },
        {
            name: "Toallon secado rapido tubito",
            price: "$ 7.695,00",
            images: ["productos/toalleria_y_batas/TOALLON_SECADO_RAPIDO_TUBITO.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "Toallon secado rapido tubito"
        }
    ],
    "acolchados-covers": [ // Clave ajustada a kebab-case
        {
            name: "SIMIL PLUMON QUEEN SIZE",
            description: "Varias Medidas",
            price: "$ 11.740,00",
            images: ["productos/acolchados_y_covers/SIMIL_PLUMON_QUEEN.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "SIMIL PLUMON QUEEN SIZE"
        },
        {
            name: "Acolchado",
            price: "$ 14.123,00",
            images: ["productos/acolchados_y_covers/ACOLCHADO.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "Acolchado"
        },
        {
            name: "Plumon Queen Size",
            description: "Queen y King Size",
            price: "$ 53.105,00",
            images: ["productos/acolchados_y_covers/PLUMON_QUEEN.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "Plumon queen size"
        },
        {
            name: "Frazada Terciopelo Soft Corderito 2 1/2",
            description: "Este producto no tiene precio definido.",
            price: "Consultar",
            images: ["productos/acolchados_y_covers/FRAZADA_TERCIOPELO_SOFT.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "Frazada Terciopelo Soft Corderito 2 1/2",
            colors: [{ name: "Crudo", hex: "#E6D8AD" }]
        }
    ],
    otros: [
        {
            name: "Ambos Médicos",
            price: "$ 9.369,00",
            images: ["productos/otros/AMBOS_MEDICOS.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "Ambos Medicos"
        },
        {
            name: "Coflas",
            price: "$ 1.300,00",
            images: ["productos/otros/COFLAS.webp"], // REVISAR RUTA DE IMAGEN REAL
            alt: "coflas"
        },
        {
            name: "Almohada Viscoelástica",
            price: "$ 8.385,00",
            images: ["productos/otros/ALMOHADA_VISCOELASTICA.WEBP"],
            alt: "Almohada Viscoelástica"
        },
        {
            name: "Alfombra de baño (Crema)",
            price: "Consultar",
            images: ["productos/otros/ALFOMBRA_BANO_CREMA.webp"],
            alt: "Alfombra de baño crema"
        },
        {
            name: "Alfombra de baño (Gris)",
            price: "Consultar",
            images: ["productos/otros/ALFOMBRA_BANO_GRIS.webp"],
            alt: "Alfombra de baño gris"
        },
        {
            name: "Alfombra de baño (Varios)",
            price: "Consultar",
            images: ["productos/otros/alfombra_bano_varios.webp"],
            alt: "Alfombra de baño varios"
        }
    ]
};

// 2. Función para crear una tarjeta de producto
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // Ahora siempre asumimos que product.images es un array
    const productImages = product.images;
    const hasMultipleImages = productImages && productImages.length > 1; // Verifica que 'images' exista y tenga más de 1

    let imageContent = '';
    if (hasMultipleImages) {
        // Estructura para el carrusel
        imageContent = `
            <div class="carousel-container">
                <div class="carousel-images">
                    ${productImages.map((imgSrc, index) => `
                        <div class="carousel-slide ${index === 0 ? 'active' : ''}">
                            <img src="${imgSrc}" alt="${product.alt || product.name} - Imagen ${index + 1}">
                        </div>
                    `).join('')}
                </div>
                <button class="carousel-button prev">&lt;</button>
                <button class="carousel-button next">&gt;</button>
                <div class="carousel-indicators">
                    ${productImages.map((_, index) => `
                        <span class="indicator ${index === 0 ? 'active' : ''}" data-slide-index="${index}"></span>
                    `).join('')}
                </div>
            </div>
        `;
    } else {
        // Estructura para una sola imagen
        imageContent = `
            <div class="product-image-placeholder">
                <img src="${productImages[0] || ''}" alt="${product.alt || product.name}">
            </div>
        `;
    }

    productCard.innerHTML = `
        ${imageContent}
        <h3>${product.name}</h3>
        ${product.description ? `<p>${product.description}</p>` : ''}
        ${product.colors && product.colors.length > 0 ? `
            <div class="colors-available">
                ${product.colors.map(color => `<div class="color-circle" style="background-color: ${color.hex};" title="${color.name}"></div>`).join('')}
            </div>
        ` : ''}
        <div class="price">${product.price}</div>
    `;

    return productCard;
}

// 3. Function to load all products
function loadProducts() {
    for (const categoryKey in productsData) {
        // Convierte la clave del objeto a kebab-case para que coincida con el ID del HTML
        const gridId = categoryKey.toLowerCase().replace(/ /g, '-');
        const gridElement = document.getElementById(`${gridId}-products-grid`);

        if (gridElement) {
            productsData[categoryKey].forEach(product => {
                gridElement.appendChild(createProductCard(product));
            });
        }
    }
}

// 4. Function to initialize carousels
function initializeCarousels() {
    // Selecciona todos los contenedores de carrusel en la página
    const carouselContainers = document.querySelectorAll('.carousel-container');

    carouselContainers.forEach(container => {
        const slides = container.querySelectorAll('.carousel-slide');
        // Solo inicializa el carrusel si hay más de una imagen
        if (slides.length <= 1) {
            // Oculta botones e indicadores si no hay carrusel
            const buttons = container.querySelectorAll('.carousel-button');
            buttons.forEach(btn => btn.style.display = 'none');
            const indicatorsDiv = container.querySelector('.carousel-indicators');
            if (indicatorsDiv) indicatorsDiv.style.display = 'none';
            return; // Sale de la función para este contenedor
        }

        const indicators = container.querySelectorAll('.indicator');
        const prevButton = container.querySelector('.carousel-button.prev');
        const nextButton = container.querySelector('.carousel-button.next');

        let currentSlide = 0; // Índice de la imagen actual

        // Función para mostrar un slide específico
        function showSlide(index) {
            // Asegura que el índice esté dentro de los límites
            if (index >= slides.length) {
                index = 0; // Vuelve al inicio si se pasa del final
            } else if (index < 0) {
                index = slides.length - 1; // Va al final si se pasa del inicio
            }

            // Oculta todos los slides y desactiva todos los indicadores
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));

            // Muestra el slide actual y activa el indicador correspondiente
            slides[index].classList.add('active');
            indicators[index].classList.add('active');

            currentSlide = index; // Actualiza el índice del slide actual
        }

        // Event Listeners para los botones de navegación
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                showSlide(currentSlide - 1);
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                showSlide(currentSlide + 1);
            });
        }

        // Event Listeners para los indicadores de puntos
        indicators.forEach(indicator => {
            indicator.addEventListener('click', (event) => {
                const slideIndex = parseInt(event.target.dataset.slideIndex);
                showSlide(slideIndex);
            });
        });

        // Opcional: Carrusel automático (descomentar para activar)
        // setInterval(() => {
        //     showSlide(currentSlide + 1);
        // }, 5000); // Cambia de slide cada 5 segundos
    });
}

// 5. Asegúrate de llamar a initializeCarousels después de que los productos se hayan cargado
document.addEventListener('DOMContentLoaded', () => {
    loadProducts(); // Primero, carga los productos
    initializeCarousels(); // Luego, inicializa los carruseles
});