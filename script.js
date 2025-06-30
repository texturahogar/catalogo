// script.js

// 1. Datos de los productos organizados por categoría
// All image paths are now relative to the 'TEXTURA HOGAR' folder, assuming
// a 'productos' subfolder exists at the same level as script.js and index.html
const productsData = {
    cortineria: [
        {
            name: "Eco-voile",
            description: "Varias Medidas",
            price: "$ 5.945,00",
            image: "productos/cortina_voile.jpg",
            alt: "Eco-voile",
            colors: [{ name: "blanca", hex: "white" }]
        },
        {
            name: "Voile tradicional",
            description: "Varias Medidas",
            price: "$ 7.540,00",
            image: "productos/cortina_voile.jpg",
            alt: "Voile tradicional"
        },
        {
            name: "Voile C/cinta fruncidora",
            price: "$ 9.350,00",
            image: "productos/cortina_voile.jpg",
            alt: "Voile C/cinta fruncidora"
        },
        {
            name: "Tropical",
            description: "Varias Medidas",
            price: "$ 9.152,00",
            image: "productos/cortina_tropical_blanca.webp",
            alt: "Tropical"
        },
        {
            name: "Tropical Con Vivo y Boton",
            price: "$ 11.705,00",
            image: "productos/cortina_tropical_grisclara.webp",
            alt: "Tropical Con Vivo y Boton"
        },
        {
            name: "Cortina Tropical Bordo",
            description: "Varias Medidas",
            price: "$ 22.969,00",
            image: "productos/cortina_tropical_bordo.webp",
            alt: "Cortina Tropical Bordo"
        },
        {
            name: "Cortina Tropical Maiz",
            price: "$ 24.300,00",
            image: "productos/cortina_tropical_maiz.webp",
            alt: "Cortina Tropical Maiz"
        },
        {
            name: "Cortina Tropical Negra",
            price: "$ 24.219,00",
            image: "productos/cortina_tropical_negra.webp",
            alt: "Cortina Tropical Negra"
        },
        {
            name: "Cortina Tropical Roja",
            price: "$ 32.054,00",
            image: "productos/cortina_tropical_roja.webp",
            alt: "Cortina Tropical Roja"
        },
        {
            name: "Cortina Jaquard",
            price: "$ 9.856,00",
            image: "productos/cortina_tropical_blanca.webp",
            alt: "Cortina Jaquard"
        },
        {
            name: "Cortina de Cocina",
            price: "$ 5.022,00",
            image: "productos/cortina_tropical_blanca.webp",
            alt: "Cortina de Cocina"
        },
        {
            name: "Cortina rombo pesado",
            description: "Con/Sin botón",
            price: "$ 14.702,00",
            image: "productos/cortina_tropical_blanca.webp",
            alt: "Cortina rombo pesado"
        },
        {
            name: "Cortina floral estampada",
            price: "$ 4.625,00",
            image: "productos/cortina_tropical_blanca.webp",
            alt: "Cortina floral estampada"
        },
        {
            name: "Cortina Tusor",
            description: "Varias Medidas",
            price: "$ 18.806,00",
            image: "productos/cortina_tropical_blanca.webp",
            alt: "Cortina tusor"
        },
        {
            name: "Cortina Baño Tusor",
            price: "$ 14.518,00",
            image: "productos/CORTINA_BANO_GASA_TUSOR_BLANCA.webp",
            alt: "Cortina Baño Tusor"
        },
        {
            name: "Cortina Gasa C/ Tiritas S/ Volados",
            description: "Varias Medidas",
            price: "$ 17.253,00",
            image: "productos/CORTINA_BANO_GASA_TUSOR_CON_TIRITA_SIN VOLADO_BLANCA.webp",
            alt: "Cortina Gasa Algodon"
        },
        {
            name: "Cortina Baño Gasa Tusor Grafito",
            price: "$ 13.630,00",
            image: "productos/CORTINA_BANO_GASA_TUSOR_GRAFITO.webp",
            alt: "Cortina Baño Gasa Tusor"
        },
        {
            name: "CORTINA DE GASA CON TIRITAS",
            price: "$ 21.114,00",
            image: "productos/CORTINA_BANO_GASA_TUSOR_CON_TIRITA_SIN VOLADO_BLANCA.webp",
            alt: "CORTINA DE GASA CON TIRITAS"
        }
    ],
    fundaSillon: [
        {
            name: "Funda de sillon Rustico Pesado",
            description: "1, 2 y 3 cuerpos",
            price: "$ 12.393,00",
            image: "productos/funda_sillon_rustico.jpg",
            alt: "Funda de sillon Rustico Pesado"
        },
        {
            name: "Funda De Sillon Tusor",
            description: "1, 2 y 3 cuerpos",
            price: "$ 17.469,00",
            image: "productos/funda_sillon_tusor.jpg",
            alt: "Funda De Sillon Tusor"
        }
    ],
    manteleria: [
        {
            name: "Mantel cuerina",
            description: "Varias Medidas",
            price: "$ 4.928,00",
            image: "productos/mantel_cuerina.jpg",
            alt: "Mantel cuerina"
        },
        {
            name: "Mantel Ecocuero Blanco",
            description: "Varias Medidas",
            price: "$ 4.928,00",
            image: "productos/mantel_ecocuero_blanco.webp",
            alt: "Mantel cuerina estampada"
        },
        {
            name: "Mantel tusor",
            description: "Varias Medidas",
            price: "$ 7.904,00",
            image: "productos/mantel_ecocuero_blanco.webp",
            alt: "Mantel tusor"
        },
        {
            name: "Mantel Gasa tusor NEW",
            price: "$ 7.587,00",
            image: "productos/mantel_ecocuero_blanco.webp",
            alt: "Mantel Gasa tusor NEW"
        },
        {
            name: "Mantel De Cocina Eco NEW",
            description: "Varias Medidas",
            price: "$ 2.086,00",
            image: "productos/mantel_ecocuero_blanco.webp",
            alt: "Mantel De Cocina Eco NEW"
        },
        {
            name: "Servilleta Tusor Pack x4",
            price: "$ 2.288,00",
            image: "productos/mantel_ecocuero_blanco.webp",
            alt: "Servilleta Tusor Pack x4"
        }
    ],
    sabanas: [
        {
            name: "JUEGO DE SABANA 180 HILOS",
            description: "1 ½, 2 ½, Queen, King Size",
            price: "$ 6.257,00",
            image: "productos/SABANA_HOTELERA_BLANCA.webp",
            alt: "JUEGO DE SABANA 180 HILOS"
        },
        {
            name: "JUEGO DE SABANA MULTIAGUJA",
            description: "1 ½, 2 ½, Queen, King Size",
            price: "$ 8.370,00",
            image: "productos/SABANA_MULTIAGUJA_AZULMARINO.webp",
            alt: "JUEGO DE SABANA MULTIAGUJA"
        },
        {
            name: "JUEGO DE SABANA PERCAL ALGODÓN 144 HILOS",
            description: "1 y media, 2 y media, Queen, King Size",
            price: "$ 19.980,00",
            image: "productos/SABANA_PERCAL_ALGODON_BLANCA.webp",
            alt: "JUEGO DE SABANA PERCAL ALGODÓN 144 HILOS"
        },
        {
            name: "JUEGO DE SABANA DOBBY SATEN 400 HILOS",
            description: "1 y media, 2 y media, Queen, King Size",
            price: "$ 13.365,00",
            image: "productos/SABANA_SATEN_BLANCAGRIS.webp",
            alt: "JUEGO DE SABANA DOBBY SATEN 400 HILOS"
        },
        {
            name: "JUEGO SABANA BRODERI",
            description: "Full",
            price: "$ 21.385,00",
            image: "productos/SABANA_MULTIAGUJA_BLANCA.webp",
            alt: "JUEGO SABANA BRODERI"
        },
        {
            name: "AJUSTABLE PERCAL ALGODON 200 HILOS",
            description: "1 y media, 2 y media",
            price: "$ 8.505,00",
            image: "productos/SABANA_MULTIAGUJA_BLANCA.webp",
            alt: "AJUSTABLE PERCAL ALGODON 200 HILOS"
        },
        {
            name: "Funda de colchon con cierre",
            description: "Varias Medidas",
            price: "$ 5.688,00",
            image: "productos/SABANA_MULTIAGUJA_BLANCA.webp",
            alt: "Funda de colchon con cierre"
        },
        {
            name: "Mantas Plush",
            price: "$ 8.100,00",
            image: "productos/MANTA_PLUSH_BORDO.webp",
            alt: "Mantas Plush",
            colors: [
                { name: "Bordo", hex: "#800000" },
                { name: "Gris claro", hex: "lightgray" },
                { name: "maiz", hex: "#f7d05e" },
                { name: "negra", hex: "black" },
                { name: "roja", hex: "red" },
                { name: "blanca", hex: "white" }
            ]
        },
        {
            name: "Mantas Plush ESTAMPADAS",
            price: "$ 8.100,00",
            image: "productos/manta_plush_tostado.webp",
            alt: "Mantas Plush ESTAMPADAS"
        }
    ],
    toalleriaBatas: [
        {
            name: "Bata secado rapido",
            price: "$ 11.760,00",
            image: "productos/MANTA_PLUSH_ROSA.webp",
            alt: "Bata secado rapido"
        },
        {
            name: "Juego Toalla y Toallon 650 grms.",
            price: "$ 14.837,00",
            image: "productos/MANTA_PLUSH_TOSTADO.webp",
            alt: "Juego Toalla y Toallon 650 grms."
        },
        {
            name: "Toallon Algodón con guarda Menucha",
            price: "$ 4.590,00",
            image: "productos/MANTA_PLUSH_BORDO.webp",
            alt: "Toallon Algodón con guarda Menucha"
        },
        {
            name: "Toallon playero microfibra",
            price: "$ 5.360,00",
            image: "productos/MANTA_PLUSH_BORDO.webp",
            alt: "Toallon playero microfibra"
        },
        {
            name: "Toallon secado rapido tubito",
            price: "$ 7.695,00",
            image: "productos/MANTA_PLUSH_BORDO.webp",
            alt: "Toallon secado rapido tubito"
        }
    ],
    acolchadosCovers: [
        {
            name: "SIMIL PLUMON QUEEN SIZE",
            description: "Varias Medidas",
            price: "$ 11.740,00",
            image: "productos/MANTA_PLUSH_BORDO.webp",
            alt: "SIMIL PLUMON QUEEN SIZE"
        },
        {
            name: "Acolchado",
            price: "$ 14.123,00",
            image: "productos/MANTA_PLUSH_BORDO.webp",
            alt: "Acolchado"
        },
        {
            name: "Plumon Queen Size",
            description: "Queen y King Size",
            price: "$ 53.105,00",
            image: "productos/MANTA_PLUSH_BORDO.webp",
            alt: "Plumon queen size"
        },
        {
            name: "Frazada Terciopelo Soft Corderito 2 1/2",
            description: "Este producto no tiene precio definido.",
            price: "Consultar", // Es mejor tener un valor explícito para "Consultar"
            image: "productos/MANTA_PLUSH_BORDO.webp",
            alt: "Frazada Terciopelo Soft Corderito 2 1/2",
            colors: [{ name: "Crudo", hex: "#E6D8AD" }]
        }
    ],
    otros: [
        {
            name: "Ambos Médicos",
            price: "$ 9.369,00",
            image: "productos/MANTA_PLUSH_BORDO.webp",
            alt: "Ambos Medicos"
        },
        {
            name: "Coflas",
            price: "$ 1.300,00",
            image: "productos/MANTA_PLUSH_BORDO.webp",
            alt: "coflas"
        },
        {
            name: "Almohada Viscoelástica",
            price: "$ 8.385,00",
            image: "productos/ALMOHADA_VISCOELASTICA.WEBP",
            alt: "Almohada Viscoelástica"
        },
        {
            name: "Alfombra de baño (Crema)",
            price: "Consultar",
            image: "productos/ALFOMBRA_BANO_CREMA.webp",
            alt: "Alfombra de baño crema"
        },
        {
            name: "Alfombra de baño (Gris)",
            price: "Consultar",
            image: "productos/ALFOMBRA_BANO_GRIS.webp",
            alt: "Alfombra de baño gris"
        },
        {
            name: "Alfombra de baño (Varios)",
            price: "Consultar",
            image: "productos/alfombra_bano_varios.webp",
            alt: "Alfombra de baño varios"
        }
    ]
};

// 2. Función para crear una tarjeta de producto
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // Determines if the product has multiple images (carousel) or just one
    // We ensure product.images is an array; if not, we create an array with product.image
    const productImages = Array.isArray(product.images) ? product.images : [product.image];
    const hasMultipleImages = productImages.length > 1;

    let imageContent = '';
    if (hasMultipleImages) {
        // Structure for the carousel
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
        // Structure for a single image
        imageContent = `
            <div class="product-image-placeholder">
                <img src="${productImages[0]}" alt="${product.alt || product.name}">
            </div>
        `;
    }

    productCard.innerHTML = `
        ${imageContent}
        <h3>${product.name}</h3>
        ${product.description ? `<p>${product.description}</p>` : ''}
        ${product.colors ? `
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
    for (const category in productsData) {
        const gridElement = document.getElementById(`${category}-products-grid`);
        if (gridElement) {
            productsData[category].forEach(product => {
                gridElement.appendChild(createProductCard(product));
            });
        }
    }
}

// 4. Function to initialize carousels
function initializeCarousels() {
    // Selects all carousel containers on the page
    const carouselContainers = document.querySelectorAll('.carousel-container');

    carouselContainers.forEach(container => {
        const slides = container.querySelectorAll('.carousel-slide');
        const indicators = container.querySelectorAll('.indicator');
        const prevButton = container.querySelector('.carousel-button.prev');
        const nextButton = container.querySelector('.carousel-button.next');

        let currentSlide = 0; // Index of the current image

        // Function to show a specific slide
        function showSlide(index) {
            // Ensures the index is within bounds
            if (index >= slides.length) {
                index = 0; // Loops back to the start if it goes past the end
            } else if (index < 0) {
                index = slides.length - 1; // Goes to the end if it goes before the start
            }

            // Hides all slides and deactivates all indicators
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));

            // Shows the current slide and activates the corresponding indicator
            slides[index].classList.add('active');
            indicators[index].classList.add('active');

            currentSlide = index; // Updates the current slide index
        }

        // Event Listeners for navigation buttons
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

        // Event Listeners for dot indicators
        indicators.forEach(indicator => {
            indicator.addEventListener('click', (event) => {
                const slideIndex = parseInt(event.target.dataset.slideIndex);
                showSlide(slideIndex);
            });
        });

        // Optional: Automatic carousel (uncomment to activate)
        // setInterval(() => {
        //     showSlide(currentSlide + 1);
        // }, 5000); // Changes slide every 5 seconds
    });
}

// 5. Make sure to call initializeCarousels after products have loaded
document.addEventListener('DOMContentLoaded', () => {
    loadProducts(); // First, load the products
    initializeCarousels(); // Then, initialize the carousels
});