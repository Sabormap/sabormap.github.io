
        // Service Worker para PWA
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('data:text/javascript,' + encodeURIComponent(`
                self.addEventListener('install', e => self.skipWaiting());
                self.addEventListener('activate', e => e.waitUntil(clients.claim()));
                self.addEventListener('fetch', e => {
                    e.respondWith(fetch(e.request).catch(() => {
                        return new Response('Offline');
                    }));
                });
            `)).catch(() => {});
        }

        // Datos de ejemplo
        const places = [
            {
                id: 1,
                name: "Yo Invito",
                category: "restaurant",
                image: "imagenes/Yo invito.webp",
                rating: 4.8,
                reviews: 324,
                address: "📍Calle 3era, esquina a D, Vedado",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4428.31293970352!2d-82.40070568849433!3d23.142295711761346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd7753ed68eb81%3A0xc7348a78249be9df!2sYo%20Invito...!5e1!3m2!1ses!2sus!4v1771418149936!5m2!1ses!2sus",
                description: "Contamos con área infantil para el disfrute de los peques. Siéntete como en casa 😊😌",
                specialties: ["Variedad de comida cubana e internacional"],
                priceRange: "$$$",
                menu: {
                    entrees: [
                        { item: "Tostones Rellenos", price: "$3.500", desc: "De jamón y queso, con salsa tártara" },
                        { item: "Croquetas de la Casa", price: "$2.800", desc: "6 unidades, bechamel cremosa" },
                        { item: "Ensalada Mixta", price: "$2.800", desc: "Lechuga, tomate, cebolla y pepino" },
                        { item: "Sopa del Día", price: "$2.200", desc: "Consultar variedad disponible" }
                    ],
                    mains: [
                        { item: "Bife de Chorizo (400g)", price: "$12.500", desc: "Corte premium con guarnición" },
                        { item: "Asado para 2 personas", price: "$18.900", desc: "Vacio, entraña, chorizo y morcilla" },
                        { item: "Pollo Grille", price: "$8.500", desc: "Pechuga marinada con vegetales" },
                        { item: "Ropa Vieja", price: "$9.200", desc: "Clásico cubano con arroz y plátano" }
                    ],
                    pasta: [
                        { item: "Spaghetti Bolognesa", price: "$7.500", desc: "Salsa de tomate con carne molida" },
                        { item: "Fettuccine Alfredo", price: "$8.200", desc: "Salsa cremosa con pollo" },
                        { item: "Lasagna de Carne", price: "$8.800", desc: "Capas de pasta con bechamel" }
                    ],
                    sandwiches: [
                        { item: "Cubano Tradicional", price: "$5.500", desc: "Jamón, cerdo, queso, pepinillos y mostaza" },
                        { item: "Pan con Lechón", price: "$6.200", desc: "Cerdo asado, cebolla crujiente y mojo" },
                        { item: "Hamburguesa Clásica", price: "$6.800", desc: "Carne 150g, queso cheddar, vegetales" },
                        { item: "Chivito Uruguayo", price: "$8.500", desc: "Lomo, jamón, queso, huevo y mayonesa" },
                        { item: "Sándwich de Pollo", price: "$5.800", desc: "Pechuga grille, lechuga y tomate" }
                    ],
                    desserts: [
                        { item: "Flan de Caramelo", price: "$2.500", desc: "Casero, receta tradicional" },
                        { item: "Tarta de Queso", price: "$3.200", desc: "Con mermelada de frutos rojos" },
                        { item: "Helado Artesanal", price: "$2.800", desc: "2 bolas, varios sabores" }
                    ],
                    drinks: [
                        { item: "Vino Malbec Reserva", price: "$8.500", desc: "Botella de bodega Trapiche" },
                        { item: "Cerveza Nacional", price: "$2.200", desc: "Cristal o Bucanero" },
                        { item: "Refrescos Importados", price: "$2.800", desc: "Coca-Cola, Sprite, Fanta" },
                        { item: "Agua Natural", price: "$1.500", desc: "500ml" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-23:00pm",
                phone: "#",
            }, 
            {
                id: 2,
                name: "5 Esquinas Trattoria",
                category: "restaurant",
                image: "imagenes/5 esquinas.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍calle Habana esq. Cuarteles, Habana Vieja",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Creamos verdaderas obras de arte con el más puro sabor italiano.",
                specialties: ["Comida Italiana"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Bruschetta Clásica", price: "$3.200", desc: "Tomate, albahaca y aceite de oliva" },
                        { item: "Provoleta", price: "$4.200", desc: "Queso provolone a la parrilla" },
                        { item: "Antipasto Mixto", price: "$5.800", desc: "Jamón, queso, aceitunas y pepinillos" }
                    ],
                    mains: [
                        { item: "Osso Buco", price: "$14.500", desc: "Con risotto milanés" },
                        { item: "Saltimbocca", price: "$13.200", desc: "Lomo de ternera con jamón y salvia" }
                    ],
                    pasta: [
                        { item: "Spaghetti Carbonara", price: "$9.500", desc: "Con huevo, panceta y queso pecorino" },
                        { item: "Ravioli de Ricotta", price: "$10.200", desc: "Con salsa de tomate y albahaca" },
                        { item: "Tagliatelle al Pesto", price: "$9.800", desc: "Salsa genovesa casera" },
                        { item: "Lasagna Bolognesa", price: "$11.500", desc: "Receta tradicional emiliana" }
                    ],
                    sandwiches: [
                        { item: "Panini Caprese", price: "$6.500", desc: "Mozzarella, tomate y pesto" },
                        { item: "Ciabatta de Pollo", price: "$7.200", desc: "Pechuga, rúcula y parmesano" },
                        { item: "Focaccia de Jamón", price: "$6.800", desc: "Jamón serrano y tomates secos" }
                    ],
                    desserts: [
                        { item: "Tiramisú", price: "$4.500", desc: "Auténtico italiano con mascarpone" },
                        { item: "Panna Cotta", price: "$3.800", desc: "Con coulis de frutos rojos" },
                        { item: "Cannoli Siciliano", price: "$3.200", desc: "Relleno de ricotta y chocolate" }
                    ],
                    drinks: [
                        { item: "Chianti Classico", price: "$12.000", desc: "Botella DOCG" },
                        { item: "Prosecco", price: "$8.500", desc: "Espumante italiano" },
                        { item: "Aperol Spritz", price: "$4.200", desc: "Cóctel clásico veneciano" }
                    ]
                },
                hours: "⏰️ Mar-Dom: 18:00-02:00",
                phone: "#",
            },
            {
                id: 3,
                name: "Sapori",
                category: "bar",
                image: "imagenes/Sapori.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍| Calle 31 entre 6 y 8. Miramar. Playa.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Con amor y con sabor. Postres peligrosamente adictivos.",
                specialties: ["Dulcería-Brunch"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Tostada Francesa", price: "$4.500", desc: "Con frutas frescas y miel" },
                        { item: "Yogurt Griego", price: "$3.800", desc: "Con granola y frutos rojos" }
                    ],
                    mains: [
                        { item: "Waffles Belgas", price: "$6.500", desc: "Con helado y salsa de chocolate" },
                        { item: "Pancakes", price: "$5.800", desc: "Stack de 3 con maple syrup" }
                    ],
                    pasta: [
                        { item: "Fettuccine al Huevo", price: "$8.200", desc: "Con mantequilla y parmesano" }
                    ],
                    sandwiches: [
                        { item: "Bagel con Salmón", price: "$7.500", desc: "Queso crema, alcaparras y cebolla" },
                        { item: "Sándwich de Huevo", price: "$5.200", desc: "Huevo poché, aguacate y espinaca" },
                        { item: "Croissant Mixto", price: "$4.800", desc: "Jamón y queso gratinado" }
                    ],
                    desserts: [
                        { item: "Cheesecake Oreo", price: "$4.800", desc: "Base de galleta y crema" },
                        { item: "Torta de Chocolate", price: "$5.200", desc: "Húmeda con ganache" },
                        { item: "Macarons", price: "$2.500", desc: "2 unidades, variedad de sabores" },
                        { item: "Cupcakes", price: "$2.200", desc: "Decorados artesanalmente" }
                    ],
                    drinks: [
                        { item: "Café Especial", price: "$2.500", desc: "Grano de origen único" },
                        { item: "Chocolate Caliente", price: "$3.200", desc: "Con malvaviscos" },
                        { item: "Smoothies", price: "$3.800", desc: "Frutas naturales" },
                        { item: "Té Helado", price: "$2.200", desc: "Casero, varios sabores" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 8:00am-22:00pm",
                phone: "#",
            },

            {
                id: 4,
                name: "El Portal de Cojímar",
                category: "restaurant",
                image: "imagenes/El Portal de Cojimar.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle Morro, Esq. K, Cojímar",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🍽 Restaurante familiar en Cojímar. A minutos del mar.",
                specialties: ["🔥 Parrilladas", "🦐 Mariscos", "🍕 Pizzas"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Ceviche de Pescado", price: "$4.500", desc: "Leche de tigre y camote" },
                        { item: "Conchas de Mariscos", price: "$5.200", desc: "Gratinadas con queso" },
                        { item: "Papa a la Huancaína", price: "$3.800", desc: "Salsa cremosa y aceitunas" }
                    ],
                    mains: [
                        { item: "Parrilla del Mar", price: "$16.800", desc: "Langosta, camarones y pescado" },
                        { item: "Chuleta de Cerdo", price: "$9.500", desc: "A la parrilla con yuca frita" },
                        { item: "Pescado Entero", price: "$12.000", desc: "Frito o al ajillo" }
                    ],
                    pasta: [
                        { item: "Pizza Familiar", price: "$11.500", desc: "8 porciones, 2 ingredientes" },
                        { item: "Spaghetti con Mariscos", price: "$10.800", desc: "Salsa de tomate y langostinos" }
                    ],
                    sandwiches: [
                        { item: "Sándwich de Pescado", price: "$7.800", desc: "Filete empanizado con tártara" },
                        { item: "Torta de Jamón", price: "$5.500", desc: "Jamón, queso y aguacate" },
                        { item: "Wrap de Pollo", price: "$6.200", desc: "Pollo grille, vegetales y aderezo" }
                    ],
                    desserts: [
                        { item: "Suspiro Limeño", price: "$3.500", desc: "Dulce de leche y merengue" },
                        { item: "Mazamorra Morada", price: "$2.800", desc: "Postre tradicional peruano" }
                    ],
                    drinks: [
                        { item: "Pisco Sour", price: "$3.800", desc: "Cóctel bandera peruano" },
                        { item: "Chicha Morada", price: "$2.200", desc: "Bebida de maíz morado" },
                        { item: "Limonada Frozen", price: "$2.500", desc: "Con hierbabuena" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 8:00am-22:00pm",
                phone: "53 55422269",
            },
            {
                id: 5,
                name: "Los 3 Chinitos",
                category: "restaurant",
                image: "imagenes/Los 3 Chinitos.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle 10 entre 3ra y 5ta Miramar",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Bienvenidos a Los 3 Chinitos en Miramar. Servicio a Domicilio en toda la Habana.",
                specialties: ["pizzas grandes con agregos exóticos"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Palitos de Queso", price: "$3.200", desc: "Con salsa marinara" },
                        { item: "Alitas de Pollo", price: "$4.500", desc: "6 unidades, BBQ o picantes" },
                        { item: "Aros de Cebolla", price: "$3.500", desc: "Empanizados y crujientes" }
                    ],
                    mains: [
                        { item: "Pizza Extravaganza", price: "$13.500", desc: "Pepperoni, champiñones, pimientos" },
                        { item: "Pizza Hawaiana", price: "$12.800", desc: "Jamón y piña" },
                        { item: "Pizza 4 Quesos", price: "$14.200", desc: "Mozzarella, cheddar, parmesano, gorgonzola" }
                    ],
                    pasta: [
                        { item: "Spaghetti con Albóndigas", price: "$8.500", desc: "Salsa de tomate casera" },
                        { item: "Fettuccine Carbonara", price: "$9.200", desc: "Crema, panceta y huevo" }
                    ],
                    sandwiches: [
                        { item: "Sub de Pepperoni", price: "$7.500", desc: "Pepperoni, queso y vegetales" },
                        { item: "Sándwich de Pollo BBQ", price: "$6.800", desc: "Pollo desmenuzado con salsa BBQ" },
                        { item: "Calzone Especial", price: "$9.500", desc: "Relleno de jamón, queso y champiñones" }
                    ],
                    desserts: [
                        { item: "Pizza de Nutella", price: "$6.500", desc: "Con fresas y plátano" },
                        { item: "Cinnamon Rolls", price: "$3.200", desc: "2 unidades con glaseado" }
                    ],
                    drinks: [
                        { item: "Cerveza Artesanal", price: "$3.500", desc: "IPA o Stout local" },
                        { item: "Malteada", price: "$4.200", desc: "Vainilla, chocolate o fresa" },
                        { item: "Soda Italiana", price: "$2.800", desc: "Jarabe de frutas con gas" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 8:00am-22:00pm",
                phone: "+53 56143419",
            },
            {
                id: 6,
                name: "Café de la Esquina",
                category: "restaurant",
                image: "imagenes/Café de la Esquina.webp",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle 10 entre 3ra y 5ta Miramar",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "¡No pierdas la oportunidad, únete a esta experiencia de sabores únicos!",
                specialties: ["Fusión entre comida cubana e italiana 🇨🇺🇮🇹"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Tamal en Cazuela", price: "$3.800", desc: "Versión gourmet del clásico" },
                        { item: "Focaccia de Hierbas", price: "$2.500", desc: "Con aceite de oliva y romero" },
                        { item: "Yuca con Mojo", price: "$2.800", desc: "Aliño de ajo y limón" }
                    ],
                    mains: [
                        { item: "Ropa Vieja Risotto", price: "$11.500", desc: "Fusión cubano-italiana" },
                        { item: "Lechón Asado", price: "$13.200", desc: "Con congrí y yuca" },
                        { item: "Pollo al Ajillo", price: "$9.800", desc: "Con vino blanco y champiñones" }
                    ],
                    pasta: [
                        { item: "Spaghetti con Ropa Vieja", price: "$10.500", desc: "Nuestra especialidad fusión" },
                        { item: "Ravioli de Plátano", price: "$9.800", desc: "Relleno de plátano macho" }
                    ],
                    sandwiches: [
                        { item: "Cubano Especial", price: "$7.200", desc: "Lechón, jamón y queso suizo" },
                        { item: "Medianoche", price: "$6.500", desc: "Pan dulce, jamón y queso" },
                        { item: "Elena Ruz", price: "$5.800", desc: "Pavo, crema de queso y mermelada" },
                        { item: "Pan con Bistec", price: "$8.200", desc: "Palomilla, cebolla y papas fritas" }
                    ],
                    desserts: [
                        { item: "Tres Leches", price: "$3.800", desc: "Clásico cubano" },
                        { item: "Tiramisú de Ron", price: "$4.500", desc: "Con añejo havana club" },
                        { item: "Flan de Coco", price: "$3.200", desc: "Con salsa de caramelo" }
                    ],
                    drinks: [
                        { item: "Café Cubano", price: "$1.500", desc: "Expresso intenso" },
                        { item: "Cortadito", price: "$2.000", desc: "Con leche evaporada" },
                        { item: "Café Bombón", price: "$2.500", desc: "Con leche condensada" },
                        { item: "Mojito", price: "$3.500", desc: "Clásico cubano" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 10:30am-23:30pm",
                phone: "78362565",
            },

            {
                id: 7,
                name: "Ela & Paleta",
                category: "icecream",
                image: "imagenes/Ela & Paleta.jpg",
                rating: 4.9,
                reviews: 512,
                address: "Calle 9na. e/ F y G, Vedado.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285!2d-58.42!3d-34.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDMzJzAwLjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Dicen que los colores hacen la vida más bonita... 🌈Y si la disfrutas con un helado, puede ser perfecta. 🍨💕",
                specialties: ["🍦Helado artesanal, inclusivo y sabroso."],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Mini Cono Degustación", price: "$1.800", desc: "3 mini porciones para probar" }
                    ],
                    mains: [
                        { item: "Waffle con Helado", price: "$5.500", desc: "Con 2 sabores a elección" },
                        { item: "Brownie Caliente", price: "$6.200", desc: "Con bola de helado vainilla" }
                    ],
                    pasta: [],
                    sandwiches: [
                        { item: "Donuts Rellenos", price: "$3.200", desc: "De crema pastelera y chocolate" },
                        { item: "Cookie Sándwich", price: "$4.500", desc: "2 galletas con helado en medio" }
                    ],
                    desserts: [
                        { item: "1/4 kg (2 sabores)", price: "$3.800", desc: "Incluye cucurucho o envase" },
                        { item: "1/2 kg (3 sabores)", price: "$6.200", desc: "Ideal para compartir" },
                        { item: "1 kg (4 sabores)", price: "$11.500", desc: "Familiar" },
                        { item: "Cucurucho Gourmet", price: "$2.500", desc: "Con chocolate y almendras" },
                        { item: "Café Affogato", price: "$4.200", desc: "Helado de vainilla con espresso" },
                        { item: "Sundae Especial", price: "$5.800", desc: "Con salsa, crema y frutos" }
                    ],
                    drinks: [
                        { item: "Smoothie de Helado", price: "$4.500", desc: "Batido cremoso de helado" },
                        { item: "Granizado", price: "$3.200", desc: "Café o limón con helado" },
                        { item: "Agua Mineral", price: "$1.800", desc: "Con o sin gas" }
                    ]
                },
                hours: "Lun-Dom: 10:00am-1:00am",
                phone: "#",
                
            },

            {
                id: 8,
                name: "LILU CHURROS CUBA",
                category: "streetfood",
                image: "imagenes/Lilu-Churros.jpg",
                rating: 4.7,
                reviews: 267,
                address: "Linea no. 406 e/ F y G, VEDADO.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.2!2d-58.36!3d-34.61!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzM2LjAiUyA1OMKwMjEnMzYuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Food truck de tacos auténticos mexicanos. Tortillas hechas a mano y salsas caseras picantes.",
                specialties: ["Churros Rellenos"],
                priceRange: "$",
                menu: {
                    entrees: [
                        { item: "Totopos con Guacamole", price: "$2.800", desc: "Totopos caseros con guacamole fresco" },
                        { item: "Elote", price: "$1.800", desc: "Mazorca con mayo, queso y chile" },
                        { item: "Chicharrones", price: "$2.200", desc: "Con salsa verde picante" }
                    ],
                    mains: [
                        { item: "Taco al Pastor", price: "$1.200", desc: "Cerdo marinado con piña" },
                        { item: "Taco de Carnitas", price: "$1.300", desc: "Cerdo desmenuzado crujiente" },
                        { item: "Taco de Barbacoa", price: "$1.400", desc: "Res al horno underground" },
                        { item: "Quesadilla", price: "$2.500", desc: "Con queso Oaxaca y guacamole" },
                        { item: "Burrito", price: "$3.800", desc: "Grande con arroz, frijoles y carne" }
                    ],
                    pasta: [],
                    sandwiches: [
                        { item: "Torta de Milanesa", price: "$4.500", desc: "Pollo empanizado con aguacate" },
                        { item: "Pambazo", price: "$3.800", desc: "Pan en salsa de chile guajillo" }
                    ],
                    desserts: [
                        { item: "Churros", price: "$2.500", desc: "4 unidades con chocolate caliente" },
                        { item: "Flan Napolitano", price: "$2.200", desc: "Con cajeta" }
                    ],
                    drinks: [
                        { item: "Agua de Horchata", price: "$900", desc: "Bebida tradicional de arroz" },
                        { item: "Agua de Jamaica", price: "$900", desc: "Flor de jamaica" },
                        { item: "Michelada", price: "$2.800", desc: "Cerveza con limón y especias" },
                        { item: "Refresco Mexicano", price: "$1.200", desc: "Jarritos, variedad de sabores" }
                    ]
                },
                hours: "Vie-Dom: 19:00-02:00",
                phone: "+54 11 5678-9012",
                distance: 3.1
            },
            {
                id: 9,
                name: "Crispy Chicken",
                category: "restaurant",
                image: "imagenes/Crispy Chicken.jpg",
                rating: 4.5,
                reviews: 198,
                address: "🗺️📍Ave. Acosta, esq Juan Delgado,Monaco",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3!2d-58.41!3d-34.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM1JzI0LjAiUyA1OMKwMjQnMzYuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "El secreto de la felicidad está en un pollito.",
                specialties: ["Variedades de Pollo y otras delicias 🍗🧋"],
                priceRange: "$$$$",
                menu: {
                    entrees: [
                        { item: "Edamame", price: "$2.800", desc: "Con sal de mar" },
                        { item: "Gyozas de Cerdo", price: "$4.200", desc: "6 unidades, fritas o al vapor" },
                        { item: "Tempura de Langostinos", price: "$5.800", desc: "4 unidades con salsa tentsuyu" }
                    ],
                    mains: [
                        { item: "Tabla Omakase (15 piezas)", price: "$15.000", desc: "Selección del chef" },
                        { item: "Sashimi Mixto", price: "$8.900", desc: "12 cortes de salmón, atún y pez blanco" },
                        { item: "Tartar de Atún", price: "$6.500", desc: "Con aguacate y salsa ponzu" }
                    ],
                    pasta: [
                        { item: "Yakisoba", price: "$7.200", desc: "Fideos salteados con vegetales" }
                    ],
                    sandwiches: [
                        { item: "Sushi Burger", price: "$8.500", desc: "Arroz tempurizado con salmón" },
                        { item: "Onigiri Mixto", price: "$4.200", desc: "3 piezas, variados rellenos" }
                    ],
                    desserts: [
                        { item: "Mochi de Matcha", price: "$3.200", desc: "2 unidades" },
                        { item: "Helado de Sésamo Negro", price: "$3.800", desc: "Con coulis de frambuesa" },
                        { item: "Dorayaki", price: "$2.800", desc: "Panqueque japonés relleno" }
                    ],
                    drinks: [
                        { item: "Sake Premium", price: "$12.000", desc: "Botella Dassai 23" },
                        { item: "Sake Caliente", price: "$3.500", desc: "Por copa" },
                        { item: "Té Verde Japonés", price: "$2.200", desc: "Genmaicha o sencha" },
                        { item: "Ramune", price: "$2.800", desc: "Refresco japonés" }
                    ]
                },
                hours: "Lun-Dom: 10:00am-23:30pm",
                phone: "+53 63182745",
            },
            {
                id: 10,
                name: "Cafetería Pilón",
                category: "bar",
                image: "imagenes/Cafetería Pilón.jpg",
                rating: 4.4,
                reviews: 156,
                address: "Calle 25 entre M y N",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1!2d-58.37!3d-34.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM3JzEyLjAiUyA1OMKwMjInMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "nuevos espacios para pilonear junto a nosotros.",
                specialties: ["Descubrelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Medialunas", price: "$1.800", desc: "2 unidades, dulces o saladas" },
                        { item: "Tostado de Campo", price: "$3.200", desc: "Con jamón crudo y rúcula" }
                    ],
                    mains: [
                        { item: "Avocado Toast", price: "$4.500", desc: "Con huevo pochado y semillas" },
                        { item: "Huevos Benedictinos", price: "$5.800", desc: "Con salsa holandesa" },
                        { item: "Tostado J&Q", price: "$3.800", desc: "Jamón, queso y tomate" }
                    ],
                    pasta: [],
                    sandwiches: [
                        { item: "Sándwich de Salmón", price: "$7.200", desc: "Salmón ahumado y queso crema" },
                        { item: "Bagel de Pavo", price: "$6.500", desc: "Pavo, rúcula y mostaza dulce" },
                        { item: "Ciabatta Caprese", price: "$5.800", desc: "Mozzarella fresca y tomate" }
                    ],
                    desserts: [
                        { item: "Cheesecake", price: "$3.200", desc: "Estilo Nueva York con frutos rojos" },
                        { item: "Carrot Cake", price: "$3.500", desc: "Con frosting de queso crema" },
                        { item: "Cookie Gigante", price: "$2.200", desc: "Con chips de chocolate" }
                    ],
                    drinks: [
                        { item: "Flat White", price: "$1.800", desc: "Doble espresso con leche texturizada" },
                        { item: "Café Filtrado", price: "$1.500", desc: "Origen Colombia, notas cítricas" },
                        { item: "Cold Brew", price: "$2.200", desc: "Extracción en frío 12 horas" },
                        { item: "Chai Latte", price: "$2.500", desc: "Té especiado con leche" }
                    ]
                },
                hours: "Lun-Vie: 08:00-20:00, Sáb-Dom: 09:00-21:00",
                phone: "#",
                
            },
            {
                id: 11,
                name: "Parranda Grill Bar",
                category: "restaurant",
                image: "imagenes/Parranda Grill Bar.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍O'farrill #366 % D'strampes y Figueroa. La víbora.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "✨Una vista perfecta al horizonte habanero✨",
                specialties: ["picadera Parrandas te garantiza una experiencia agradable y entretenida"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00am-00:00pm",
                phone: "#",
            },

            {
                id: 12,
                name: "Sensaciones Restaurante-Grill",
                category: "restaurant",
                image: "imagenes/Sensacioones Restaurante-Grill.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle 70 No. 902 entre 9na y 11, Playa",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Dónde comer es un placer✨ Una experiencia del Grupo Tentaciones",
                specialties: ["Sabores frescos, platos sorprendentes"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00am-00:00pm",
                phone: "#",
            },

            {
                id: 13,
                name: "RESTAURANTE EL JARDIN",
                category: "restaurant",
                image: "imagenes/RESTAURANTE EL JARDIN.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Linea y Calle C, Vedado",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "El espacio ideal para disfrutar en familia",
                specialties: ["🥘Comida criolla e internacional"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00am-00:00pm",
                phone: "7 8311414",
            },

            {
                id: 14,
                name: "La Despensa",
                category: "restaurant",
                image: "imagenes/La despensa.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle 9 / F y G",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "💛 Sabor Tropical 🍻🌴.Tu nuevo vicio en el Vedado",
                specialties: ["Personaliza🍕 | Disfruta 🥪| Dispensa 🍺"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 7:30am-3:00am",
                phone: "7 8311414",
            },

            {
                id: 15,
                name: "Fuego Lento Steakhouse",
                category: "restaurant",
                image: "imagenes/Fuego Lento Steakhouse.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle 1ra e/ C y D, Vedado",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🧑🏾‍🍳 Hay sabores que no se apresuran... se construyen. Esta tabla nace del respeto por el tiempo, la brasa y la buena carne.",
                specialties: ["CORTES & CARNES"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:30pm-12:00am",
                phone: "+53 52145269",
            },

            {
                id: 16,
                name: "Sabores",
                category: "restaurant",
                image: "imagenes/Sabores.webp",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle 1ra e/ C y D, Vedado",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Sabores, en el Palacio del Conde Lombillo🏛️.",
                specialties: ["Descubrelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:30pm-12:00am",
                phone: "#",
            },

            {
                id: 17,
                name: "The Monkey Restobar",
                category: "restaurant",
                image: "imagenes/The Monkey Restobar.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle L e/ calle 17 y calle 15, Vedado.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "RestoBar-Eventos privados-DJ Session🎧.",
                specialties: ["Especializados en comida internacional y cortes de carnes🥩"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 10:00pm-1:00am",
                phone: "+53 58058576",
            },

            {
                id: 18,
                name: "Malcriado",
                category: "bar",
                image: "imagenes/Malcriado.webp",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle Infanta entre Jovellar y San Lázaro # 202A",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Aquí el sabor no tiene reglas, las reglas las pones tu..",
                specialties: ["☕️Rico café y más"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Tostada Francesa", price: "$4.500", desc: "Con frutas frescas y miel" },
                        { item: "Yogurt Griego", price: "$3.800", desc: "Con granola y frutos rojos" }
                    ],
                    mains: [
                        { item: "Waffles Belgas", price: "$6.500", desc: "Con helado y salsa de chocolate" },
                        { item: "Pancakes", price: "$5.800", desc: "Stack de 3 con maple syrup" }
                    ],
                    pasta: [
                        { item: "Fettuccine al Huevo", price: "$8.200", desc: "Con mantequilla y parmesano" }
                    ],
                    sandwiches: [
                        { item: "Bagel con Salmón", price: "$7.500", desc: "Queso crema, alcaparras y cebolla" },
                        { item: "Sándwich de Huevo", price: "$5.200", desc: "Huevo poché, aguacate y espinaca" },
                        { item: "Croissant Mixto", price: "$4.800", desc: "Jamón y queso gratinado" }
                    ],
                    desserts: [
                        { item: "Cheesecake Oreo", price: "$4.800", desc: "Base de galleta y crema" },
                        { item: "Torta de Chocolate", price: "$5.200", desc: "Húmeda con ganache" },
                        { item: "Macarons", price: "$2.500", desc: "2 unidades, variedad de sabores" },
                        { item: "Cupcakes", price: "$2.200", desc: "Decorados artesanalmente" }
                    ],
                    drinks: [
                        { item: "Café Especial", price: "$2.500", desc: "Grano de origen único" },
                        { item: "Chocolate Caliente", price: "$3.200", desc: "Con malvaviscos" },
                        { item: "Smoothies", price: "$3.800", desc: "Frutas naturales" },
                        { item: "Té Helado", price: "$2.200", desc: "Casero, varios sabores" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 8:00am-22:00pm",
                phone: "#",
            },

            {
                id: 19,
                name: "El Frito",
                category: "bar",
                image: "imagenes/El Frito.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle Aguacate entre Obispo y Obrapía. Habana Vieja",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Apúrate y prueba las alitas antes de que vuelen 😏",
                specialties: ["Alitas crujientes, croquetas saciantes, papas fritas en su punto"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Tostada Francesa", price: "$4.500", desc: "Con frutas frescas y miel" },
                        { item: "Yogurt Griego", price: "$3.800", desc: "Con granola y frutos rojos" }
                    ],
                    mains: [
                        { item: "Waffles Belgas", price: "$6.500", desc: "Con helado y salsa de chocolate" },
                        { item: "Pancakes", price: "$5.800", desc: "Stack de 3 con maple syrup" }
                    ],
                    pasta: [
                        { item: "Fettuccine al Huevo", price: "$8.200", desc: "Con mantequilla y parmesano" }
                    ],
                    sandwiches: [
                        { item: "Bagel con Salmón", price: "$7.500", desc: "Queso crema, alcaparras y cebolla" },
                        { item: "Sándwich de Huevo", price: "$5.200", desc: "Huevo poché, aguacate y espinaca" },
                        { item: "Croissant Mixto", price: "$4.800", desc: "Jamón y queso gratinado" }
                    ],
                    desserts: [
                        { item: "Cheesecake Oreo", price: "$4.800", desc: "Base de galleta y crema" },
                        { item: "Torta de Chocolate", price: "$5.200", desc: "Húmeda con ganache" },
                        { item: "Macarons", price: "$2.500", desc: "2 unidades, variedad de sabores" },
                        { item: "Cupcakes", price: "$2.200", desc: "Decorados artesanalmente" }
                    ],
                    drinks: [
                        { item: "Café Especial", price: "$2.500", desc: "Grano de origen único" },
                        { item: "Chocolate Caliente", price: "$3.200", desc: "Con malvaviscos" },
                        { item: "Smoothies", price: "$3.800", desc: "Frutas naturales" },
                        { item: "Té Helado", price: "$2.200", desc: "Casero, varios sabores" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 10:00am-19:30pm",
                phone: "#",
            },

            {
                id: 20,
                name: "Birra | Casa de la Cerveza",
                category: "bar",
                image: "imagenes/Birra  Casa de la Cerveza.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍15 entre L y K #153.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🍺 Cerveza siempre helada y gran variedad.",
                specialties: ["🍸 Cocteles únicos con base de cerveza."],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Tostada Francesa", price: "$4.500", desc: "Con frutas frescas y miel" },
                        { item: "Yogurt Griego", price: "$3.800", desc: "Con granola y frutos rojos" }
                    ],
                    mains: [
                        { item: "Waffles Belgas", price: "$6.500", desc: "Con helado y salsa de chocolate" },
                        { item: "Pancakes", price: "$5.800", desc: "Stack de 3 con maple syrup" }
                    ],
                    pasta: [
                        { item: "Fettuccine al Huevo", price: "$8.200", desc: "Con mantequilla y parmesano" }
                    ],
                    sandwiches: [
                        { item: "Bagel con Salmón", price: "$7.500", desc: "Queso crema, alcaparras y cebolla" },
                        { item: "Sándwich de Huevo", price: "$5.200", desc: "Huevo poché, aguacate y espinaca" },
                        { item: "Croissant Mixto", price: "$4.800", desc: "Jamón y queso gratinado" }
                    ],
                    desserts: [
                        { item: "Cheesecake Oreo", price: "$4.800", desc: "Base de galleta y crema" },
                        { item: "Torta de Chocolate", price: "$5.200", desc: "Húmeda con ganache" },
                        { item: "Macarons", price: "$2.500", desc: "2 unidades, variedad de sabores" },
                        { item: "Cupcakes", price: "$2.200", desc: "Decorados artesanalmente" }
                    ],
                    drinks: [
                        { item: "Café Especial", price: "$2.500", desc: "Grano de origen único" },
                        { item: "Chocolate Caliente", price: "$3.200", desc: "Con malvaviscos" },
                        { item: "Smoothies", price: "$3.800", desc: "Frutas naturales" },
                        { item: "Té Helado", price: "$2.200", desc: "Casero, varios sabores" }
                    ]
                },
                hours: "⏰️ Lun-Jue: 10:00am-23:00pm Vie-Dom: 10:00am-00:00am  ",
                phone: "#",
            },

            {
                id: 21,
                name: "JAMA | Best sushi in Town 💎",
                category: "restaurant",
                image: "imagenes/Best Sushi in Town.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Aguiar 261 entre O'Really y San Juan de Dios.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Best Sushi in Town.",
                specialties: ["Sushi"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 10:00pm-1:00am",
                phone: "+53 58058576",
            },

            {
                id: 22,
                name: "Café Literario La Copa",
                category: "bar",
                image: "imagenes/Café Literario La Copa.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍1ra A/42 y 44, La Copa, Playa.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🤎✨ Un rincón para leer, crear y saborear.",
                specialties: ["Descrubelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Tostada Francesa", price: "$4.500", desc: "Con frutas frescas y miel" },
                        { item: "Yogurt Griego", price: "$3.800", desc: "Con granola y frutos rojos" }
                    ],
                    mains: [
                        { item: "Waffles Belgas", price: "$6.500", desc: "Con helado y salsa de chocolate" },
                        { item: "Pancakes", price: "$5.800", desc: "Stack de 3 con maple syrup" }
                    ],
                    pasta: [
                        { item: "Fettuccine al Huevo", price: "$8.200", desc: "Con mantequilla y parmesano" }
                    ],
                    sandwiches: [
                        { item: "Bagel con Salmón", price: "$7.500", desc: "Queso crema, alcaparras y cebolla" },
                        { item: "Sándwich de Huevo", price: "$5.200", desc: "Huevo poché, aguacate y espinaca" },
                        { item: "Croissant Mixto", price: "$4.800", desc: "Jamón y queso gratinado" }
                    ],
                    desserts: [
                        { item: "Cheesecake Oreo", price: "$4.800", desc: "Base de galleta y crema" },
                        { item: "Torta de Chocolate", price: "$5.200", desc: "Húmeda con ganache" },
                        { item: "Macarons", price: "$2.500", desc: "2 unidades, variedad de sabores" },
                        { item: "Cupcakes", price: "$2.200", desc: "Decorados artesanalmente" }
                    ],
                    drinks: [
                        { item: "Café Especial", price: "$2.500", desc: "Grano de origen único" },
                        { item: "Chocolate Caliente", price: "$3.200", desc: "Con malvaviscos" },
                        { item: "Smoothies", price: "$3.800", desc: "Frutas naturales" },
                        { item: "Té Helado", price: "$2.200", desc: "Casero, varios sabores" }
                    ]
                },
                hours: "⏰️ Lun-Jue: 9:00am-17:00pm",
                phone: "#",
            },

            {
                id: 23,
                name: "LUQUE HABANA",
                category: "restaurant",
                image: "imagenes/LUQUE HABANA.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle G #556 / 23 y 25. Vedado.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Prueba nuestras pizzas y pastas 🍕🍝. Disfruta de cócteles clásicos 🍹🍸.",
                specialties: ["Especializado en comida italiana"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 11:00pm-23:30pm",
                phone: "+53 50633569",
            },

            {
                id: 24,
                name: "Encuentro Restaurante Chino",
                category: "restaurant",
                image: "imagenes/Encuentro Restaurante Chino.webp",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Hotel Manzana Kempinski piso 2.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🔥 Donde hay fuego, hay sabor.Y en Encuentro, el fuego es solo el comienzo.",
                specialties: ["Hot pot & Auténtica Comida China en Cuba"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-00:00am",
                phone: "+53 50134757",
            },

            {
                id: 25,
                name: "𝐋𝐀 𝐂𝐀𝐑𝐑𝐄𝐓𝐀",
                category: "restaurant",
                image: "imagenes/La Carreta.webp",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle 21. Esq. K Vedado.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "⭐️El Icónico Famoso Restaurant en CUBA donde nació LA CARRETA ORIGINAL. Música en vivo a diario",
                specialties: ["Hot pot & Auténtica Comida China en Cuba"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-00:00am",
                phone: "#",
            },

            {
                id: 26,
                name: "Café Clington",
                category: "bar",
                image: "imagenes/Café Clington.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle 60 e/ 3era y 3era A no.303,Playa.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "“Unirnos es un comienzo ,estar juntos es un progreso y trabajar juntos es un éxito“🧡",
                specialties: ["Descrubelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Tostada Francesa", price: "$4.500", desc: "Con frutas frescas y miel" },
                        { item: "Yogurt Griego", price: "$3.800", desc: "Con granola y frutos rojos" }
                    ],
                    mains: [
                        { item: "Waffles Belgas", price: "$6.500", desc: "Con helado y salsa de chocolate" },
                        { item: "Pancakes", price: "$5.800", desc: "Stack de 3 con maple syrup" }
                    ],
                    pasta: [
                        { item: "Fettuccine al Huevo", price: "$8.200", desc: "Con mantequilla y parmesano" }
                    ],
                    sandwiches: [
                        { item: "Bagel con Salmón", price: "$7.500", desc: "Queso crema, alcaparras y cebolla" },
                        { item: "Sándwich de Huevo", price: "$5.200", desc: "Huevo poché, aguacate y espinaca" },
                        { item: "Croissant Mixto", price: "$4.800", desc: "Jamón y queso gratinado" }
                    ],
                    desserts: [
                        { item: "Cheesecake Oreo", price: "$4.800", desc: "Base de galleta y crema" },
                        { item: "Torta de Chocolate", price: "$5.200", desc: "Húmeda con ganache" },
                        { item: "Macarons", price: "$2.500", desc: "2 unidades, variedad de sabores" },
                        { item: "Cupcakes", price: "$2.200", desc: "Decorados artesanalmente" }
                    ],
                    drinks: [
                        { item: "Café Especial", price: "$2.500", desc: "Grano de origen único" },
                        { item: "Chocolate Caliente", price: "$3.200", desc: "Con malvaviscos" },
                        { item: "Smoothies", price: "$3.800", desc: "Frutas naturales" },
                        { item: "Té Helado", price: "$2.200", desc: "Casero, varios sabores" }
                    ]
                },
                hours: "⏰️ Lun-Jue: 9:00am-20:00pm",
                phone: "#",
            },

            {
                id: 27,
                name: "Food Master",
                category: "restaurant",
                image: "imagenes/Food Master.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle 7ma A #6620 e/66 y 70 Miramar ",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Porque los buenos momentos merecen un buen lugar. 💚💚💚",
                specialties: ["BURGER 🍔 PIZZA 🍕 PASTA & GOOD MOOD"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Dom-Jue: 11:00am- 21:00pm Vie-Sab 11:00am-22:00am",
                phone: "#",
            },

            {
                id: 28,
                name: "Sibarita 🍍",
                category: "restaurant",
                image: "imagenes/sibarita.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍O'Reilly 528 / Bernaza y Villegas, Habana Vieja.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🌎 Cuban Food & Tiki Cocktails 🗿🍸. Havanos & Hookahs | Live Music&DJs🎶.",
                specialties: ["Descubrelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-00:00am",
                phone: "#",
            },

            {
                id: 29,
                name: "EL PROYECTO",
                category: "bar",
                image: "imagenes/EL PROYECTO.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍14 y 11, Vedado",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🎥 cine gratis en un portal.",
                specialties: ["Descrubelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Tostada Francesa", price: "$4.500", desc: "Con frutas frescas y miel" },
                        { item: "Yogurt Griego", price: "$3.800", desc: "Con granola y frutos rojos" }
                    ],
                    mains: [
                        { item: "Waffles Belgas", price: "$6.500", desc: "Con helado y salsa de chocolate" },
                        { item: "Pancakes", price: "$5.800", desc: "Stack de 3 con maple syrup" }
                    ],
                    pasta: [
                        { item: "Fettuccine al Huevo", price: "$8.200", desc: "Con mantequilla y parmesano" }
                    ],
                    sandwiches: [
                        { item: "Bagel con Salmón", price: "$7.500", desc: "Queso crema, alcaparras y cebolla" },
                        { item: "Sándwich de Huevo", price: "$5.200", desc: "Huevo poché, aguacate y espinaca" },
                        { item: "Croissant Mixto", price: "$4.800", desc: "Jamón y queso gratinado" }
                    ],
                    desserts: [
                        { item: "Cheesecake Oreo", price: "$4.800", desc: "Base de galleta y crema" },
                        { item: "Torta de Chocolate", price: "$5.200", desc: "Húmeda con ganache" },
                        { item: "Macarons", price: "$2.500", desc: "2 unidades, variedad de sabores" },
                        { item: "Cupcakes", price: "$2.200", desc: "Decorados artesanalmente" }
                    ],
                    drinks: [
                        { item: "Café Especial", price: "$2.500", desc: "Grano de origen único" },
                        { item: "Chocolate Caliente", price: "$3.200", desc: "Con malvaviscos" },
                        { item: "Smoothies", price: "$3.800", desc: "Frutas naturales" },
                        { item: "Té Helado", price: "$2.200", desc: "Casero, varios sabores" }
                    ]
                },
                hours: "⏰️ Lun-Jue: 9:00am-20:00pm",
                phone: "#",
            },

            {
                id: 30,
                name: "Mila",
                category: "restaurant",
                image: "imagenes/Mila.webp",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle 9na/J e I # 254 Vedado.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Un spot italiano con detalles que enamoran desde que entras.",
                specialties: ["🍕Auténtica Cocina Italiana en La Habana"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-23:00am",
                phone: "+53 58695188",
            },

            {
                id: 31,
                name: "Brasserie 255 Restaurant",
                category: "restaurant",
                image: "imagenes/Brasserie 255 Restaurant.webp",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Juan Delgado 255, entre Santa Catalina y Milagros Santos Suarez.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Sabores que te hacen querer volver ✨",
                specialties: ["Desayuno | Almuerzo | Cena 🍽️🍷"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 8:00am-23:00am",
                phone: "+53 56147642",
            },

            {
                id: 32,
                name: "ATENEO DE LA HABANA",
                category: "Bar",
                image: "imagenes/ATENEO DE LA HABANA.webp",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Prado 121 esquina Refugio.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Creando un espacio para todxs 🌈",
                specialties: ["☕ Café Ateneo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Vie: 8:30am-18:00pm Sab-Dom: 10:00am-18:00pm ",
                phone: "+53 52845235",
            },

            {
                id: 33,
                name: "Paladar Kilómetro Zero",
                category: "restaurant",
                image: "imagenes/Paladar Kilómetro Zero.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Juan Delgado 255, entre Santa Catalina y Milagros Santos Suarez.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Sabores que te hacen querer volver ✨",
                specialties: ["Desayuno | Almuerzo | Cena 🍽️🍷"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 8:00am-23:00am",
                phone: "+53 56147642",
            },

            {
                id: 34,
                name: "Kore • Café",
                category: "Bar",
                image: "imagenes/Kore • Café.webp",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calzada y K, Vedado.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Si buscas un almuerzo que te deje satisfecho pero ligero para seguir con tu día, nuestra Ensalada César es la respuesta definitiva.😌👌🏻",
                specialties: ["🧇 Waffles, ☕️ Cafés, 🥗 Ensaladas, 🐾Pet Friendly"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 7:00am-00:00am ",
                phone: "#",
            },

            {
                id: 35,
                name: "Mambo",
                category: "restaurant",
                image: "imagenes/Mambo.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Ave 23 entre 12 y 14",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "📍Donde se vive el entretenimiento en vivo.✨Experimenta el Multiverso Mambo✨",
                specialties: ["Descrubelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 11:00am-00:00am",
                phone: "#",
            },

            {
                id: 36,
                name: "Zooppelia 🍦 Heladería",
                category: "icecream",
                image: "imagenes/Zooppelia 🍦 Heladería.jpg",
                rating: 4.9,
                reviews: 512,
                address: "Calle 9na. e/ F y G, Vedado.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285!2d-58.42!3d-34.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDMzJzAwLjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "En @zoomarket_habana podrás comprar Helados, Yogurts probióticos y otros productos de Helados CID.",
                specialties: ["Descubrelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Mini Cono Degustación", price: "$1.800", desc: "3 mini porciones para probar" }
                    ],
                    mains: [
                        { item: "Waffle con Helado", price: "$5.500", desc: "Con 2 sabores a elección" },
                        { item: "Brownie Caliente", price: "$6.200", desc: "Con bola de helado vainilla" }
                    ],
                    pasta: [],
                    sandwiches: [
                        { item: "Donuts Rellenos", price: "$3.200", desc: "De crema pastelera y chocolate" },
                        { item: "Cookie Sándwich", price: "$4.500", desc: "2 galletas con helado en medio" }
                    ],
                    desserts: [
                        { item: "1/4 kg (2 sabores)", price: "$3.800", desc: "Incluye cucurucho o envase" },
                        { item: "1/2 kg (3 sabores)", price: "$6.200", desc: "Ideal para compartir" },
                        { item: "1 kg (4 sabores)", price: "$11.500", desc: "Familiar" },
                        { item: "Cucurucho Gourmet", price: "$2.500", desc: "Con chocolate y almendras" },
                        { item: "Café Affogato", price: "$4.200", desc: "Helado de vainilla con espresso" },
                        { item: "Sundae Especial", price: "$5.800", desc: "Con salsa, crema y frutos" }
                    ],
                    drinks: [
                        { item: "Smoothie de Helado", price: "$4.500", desc: "Batido cremoso de helado" },
                        { item: "Granizado", price: "$3.200", desc: "Café o limón con helado" },
                        { item: "Agua Mineral", price: "$1.800", desc: "Con o sin gas" }
                    ]
                },
                hours: "Lun-Dom: 10:00am-1:00am",
                phone: "#",
                
            },

            {
                id: 37,
                name: "IMPERIOS",
                category: "restaurant",
                image: "imagenes/IMPERIOS.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Avenida 9na #12018 entre calle 120 y 130 Reparto Cubanacan ,playa.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Vive una experiencia en cada nivel: Sport Bar(billar🎱 y dardos🎯) ●Discoteca(Vie-Sáb DJ+shows)",
                specialties: ["●Terraza con pizzas y parrilladas."],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Mie: 12:00pm-00:00am Jue-Dom: 12:00pm-3:00am",
                phone: "+53 50284747",
            },

            {
                id: 38,
                name: "Alta Casa",
                category: "restaurant",
                image: "imagenes/Alta Casa.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle 47 # 807 e/ Conill y Santa Ana, Nuevo Vedado",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Sabores que elevan tu experiencia ✨",
                specialties: ["Descrubelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 11:00am-00:00am",
                phone: "78831365",
            },

            {
                id: 39,
                name: "El Bejuco",
                category: "Bar",
                image: "imagenes/El Bejuco.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle Línea 1206 entre 18 y 20, Vedado.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "☀️ |Co-working by day 💻 |☕ Café |.🌙 |🍹 Bar | 🎲 Dominó |.🌿 Ambiente urbano y alternativo.",
                specialties: ["Descubrelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 9:00am-4:00am ",
                phone: "#",
            },

            {
                id: 40,
                name: "Montefreddo",
                category: "icecream",
                image: "imagenes/Montefreddo.jpg",
                rating: 4.9,
                reviews: 512,
                address: "Calle San Rafael #1209, entre Ronda y Mazón. Edificio Victoria. Plaza de la Revolución.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285!2d-58.42!3d-34.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDMzJzAwLjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🍦✨ Helados, frapuccinos, dulces variados, bocadillos y cafés.",
                specialties: [" Helado artesanal con alta dosis de felicidad"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Mini Cono Degustación", price: "$1.800", desc: "3 mini porciones para probar" }
                    ],
                    mains: [
                        { item: "Waffle con Helado", price: "$5.500", desc: "Con 2 sabores a elección" },
                        { item: "Brownie Caliente", price: "$6.200", desc: "Con bola de helado vainilla" }
                    ],
                    pasta: [],
                    sandwiches: [
                        { item: "Donuts Rellenos", price: "$3.200", desc: "De crema pastelera y chocolate" },
                        { item: "Cookie Sándwich", price: "$4.500", desc: "2 galletas con helado en medio" }
                    ],
                    desserts: [
                        { item: "1/4 kg (2 sabores)", price: "$3.800", desc: "Incluye cucurucho o envase" },
                        { item: "1/2 kg (3 sabores)", price: "$6.200", desc: "Ideal para compartir" },
                        { item: "1 kg (4 sabores)", price: "$11.500", desc: "Familiar" },
                        { item: "Cucurucho Gourmet", price: "$2.500", desc: "Con chocolate y almendras" },
                        { item: "Café Affogato", price: "$4.200", desc: "Helado de vainilla con espresso" },
                        { item: "Sundae Especial", price: "$5.800", desc: "Con salsa, crema y frutos" }
                    ],
                    drinks: [
                        { item: "Smoothie de Helado", price: "$4.500", desc: "Batido cremoso de helado" },
                        { item: "Granizado", price: "$3.200", desc: "Café o limón con helado" },
                        { item: "Agua Mineral", price: "$1.800", desc: "Con o sin gas" }
                    ]
                },
                hours: "Lun-Dom: 10:00am-9:00pm",
                phone: "78781535",
                
            },

            {
                id: 41,
                name: "Paladar El jardin de los Milagros",
                category: "restaurant",
                image: "imagenes/Paladar El jardin de los Milagros.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle 37 entre 24 y San Juan Bautista Nuevo Vedado.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Sabores que elevan tu experiencia ✨",
                specialties: ["Comida al carbon🥩"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-9:30pm",
                phone: "78811053",
            },

            {
                id: 42,
                name: "Nero di seppia 🦑",
                category: "restaurant",
                image: "imagenes/Nero di seppia 🦑.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle 6 / 1ra y 3ra, Miramar, Playa.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Esencia italiana 🇮🇹✨",
                specialties: ["Descrubelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Mie-Jue: 16:00pm-00:00am Vie-Dom: 12:00pm-00:00am",
                phone: "53 54787871",
            },

            {
                id: 43,
                name: "San Ignacio 214",
                category: "restaurant",
                image: "imagenes/San Ignacio 214.webp",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍San Ignacio214 esq. Lamparilla.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "☕ Donde el aroma del tabaco se mezcla con el sabor cubano.",
                specialties: ["Auténticas recetas cubanas"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 9:00am-22:00pm",
                phone: "#",
            },

            {
                id: 44,
                name: "A la Turca Istanbul",
                category: "icecream",
                image: "imagenes/A la Turca Istanbul.jpg",
                rating: 4.9,
                reviews: 512,
                address: "🗺️📍21 y L, Vedado.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285!2d-58.42!3d-34.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDMzJzAwLjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Restaurante-Heladería 🇹🇷🍨.",
                specialties: ["Descubrelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Mini Cono Degustación", price: "$1.800", desc: "3 mini porciones para probar" }
                    ],
                    mains: [
                        { item: "Waffle con Helado", price: "$5.500", desc: "Con 2 sabores a elección" },
                        { item: "Brownie Caliente", price: "$6.200", desc: "Con bola de helado vainilla" }
                    ],
                    pasta: [],
                    sandwiches: [
                        { item: "Donuts Rellenos", price: "$3.200", desc: "De crema pastelera y chocolate" },
                        { item: "Cookie Sándwich", price: "$4.500", desc: "2 galletas con helado en medio" }
                    ],
                    desserts: [
                        { item: "1/4 kg (2 sabores)", price: "$3.800", desc: "Incluye cucurucho o envase" },
                        { item: "1/2 kg (3 sabores)", price: "$6.200", desc: "Ideal para compartir" },
                        { item: "1 kg (4 sabores)", price: "$11.500", desc: "Familiar" },
                        { item: "Cucurucho Gourmet", price: "$2.500", desc: "Con chocolate y almendras" },
                        { item: "Café Affogato", price: "$4.200", desc: "Helado de vainilla con espresso" },
                        { item: "Sundae Especial", price: "$5.800", desc: "Con salsa, crema y frutos" }
                    ],
                    drinks: [
                        { item: "Smoothie de Helado", price: "$4.500", desc: "Batido cremoso de helado" },
                        { item: "Granizado", price: "$3.200", desc: "Café o limón con helado" },
                        { item: "Agua Mineral", price: "$1.800", desc: "Con o sin gas" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-23:00pm",
                phone: "#",
                
            },

            {
                id: 45,
                name: "Amaya",
                category: "restaurant",
                image: "imagenes/Amaya.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍21 y L, Vedado.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Descubre la magia de la cocina turca en el corazón de Amaya ✨️",
                specialties: ["Descrubelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Mar-Dom: 12:00pm-00:00am",
                phone: "#",
            },
 
            {
                id: 46,
                name: "PanParaPan 23y18",
                category: "restaurant",
                image: "imagenes/PanParaPan 23y18.webp",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle 23, esq 18 # 1202, Vedado, Plaza de la Revolución.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Capturando la perfección en cada rebanada🍕📷",
                specialties: ["Restaurante de comida rápida"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Mar-Dom: 10:00am-11:30pm",
                phone: "+53 52724660",
            },

            {
                id: 47,
                name: "Restaurante Snack Bar G310",
                category: "restaurant",
                image: "imagenes/Restaurante Snack Bar G310.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle G No 310 e/ 13 y 15.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Wifi gratis",
                specialties: ["🍔 Snack, tragos y comida cubana"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 24 horas",
                phone: "#",
            },


            {
                id: 48,
                name: "La Macorina",
                category: "restaurant",
                image: "imagenes/La Macorina.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Prado 62. Frente al hotel Packard, Havana.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "⭐ Sabores que te hacen querer volver",
                specialties: ["Cocina Cubana & Internacional"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 8:30am-23:00pm",
                phone: "#",
            },

            {
                id: 49,
                name: "Café FM",
                category: "Bar",
                image: "imagenes/Café FM.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Playa 13 entre 60 y 62.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Descubre el placer de saborear una jugosa hamburguesa",
                specialties: ["Descubrelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 24 horas",
                phone: "+53 51967272",
            },

            {
                id: 50,
                name: "Razones y Motivos",
                category: "restaurant",
                image: "imagenes/Razones y Motivos.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle F #63 entre 3ra y 5ta, Vedado.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Un lugar perfecto para ir con tus amigos y compartir una tarde especial",
                specialties: ["Restaurante de Comida Criolla e Internacional."],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-23:30pm",
                phone: "+53 52930021",
            },

            {
                id: 51,
                name: "El Idilio",
                category: "restaurant",
                image: "imagenes/El Idilio.webp",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Esquina de 15 y G, Vedado.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🔥 Que no se apague la llama",
                specialties: ["Cocina al carbón + cerveza dispensada 🍻"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-23:00pm",
                phone: "+53 52913911",
            },

            {
                id: 52,
                name: "Café Del Ángel",
                category: "Bar",
                image: "imagenes/Café Del Ángel.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Compostela 1 Esquina Cuarteles.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🍝🍗 Elige entre pasta pomodoro o nuggets, ¡y disfruta de un menú delicioso para todos! 😋",
                specialties: ["Descubrelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 8:00am-22:00pm ",
                phone: "#",
            },

            {
                id: 53,
                name: "Sushi Level_Qva",
                category: "restaurant",
                image: "imagenes/Sushi Level_Qva.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Concordia/lealtad y perseverancia 304, Centro Habana.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🍱Restaurante y Delivery",
                specialties: ["Comida asiática."],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Mar-Dom: 19:00pm-23:30pm",
                phone: "+53 52913911",
            },

            {
                id: 54,
                name: "MiauCafé",
                category: "Bar",
                image: "imagenes/MiauCafé.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle Línea #1057 entre 12 y 14, Plaza de la Revolución.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🍝🖼️El ronroneo del arte.☕️El maullido del café.📚El pelaje de los libros.🎶El zarpazo de la música",
                specialties: ["Descubrelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Sab: 11:00am-22:00pm Dom: 14:00pm-22:00pm",
                phone: "#",
            },

            {
                id: 54,
                name: "ENPLAZA23",
                category: "Bar",
                image: "imagenes/ENPLAZA23.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Ave. 23 e/ Paseo y 2, Vedado.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🛒🍕 Un lugar para hacer compras y comer delicioso.",
                specialties: ["Descubrelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 10:00am-22:00pm",
                phone: "#",
            },

            {
                id: 55,
                name: "Thaly’s Cafe",
                category: "Bar",
                image: "imagenes/Thaly’s Cafe.webp",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle 12 #318 entre 3ra y 5ta Miramar",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Diseñado para hacerte feliz ☺️",
                specialties: ["Descubrelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Vie: 8:00am-18:00pm",
                phone: "72035525",
            },

            {
                id: 56,
                name: "La Torre de Marfil Restaurant & Bar",
                category: "restaurant",
                image: "imagenes/La Torre de Marfil Restaurant & Bar.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle Mercaderes entre Obispo y Obrapia.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Restaurante de cocina cubana e internacional con toques de la cocina oriental,",
                specialties: ["Descubrelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Mar-Dom: 11:00am-23:00pm",
                phone: "+53 52667604",
            },

            {
                id: 57,
                name: "Teniente Rey 360",
                category: "restaurant",
                image: "imagenes/Teniente Rey 360.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle Teniente Rey #360 e/ Villegas y Aguacate.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🍹Bar-Restaurante especializado en comida tradicional cubana🇨🇺",
                specialties: ["Descubrelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 11:00am-21:30pm",
                phone: "78602916",
            },

            {
                id: 58,
                name: "Restuarante Perla Negra🏴",
                category: "restaurant",
                image: "imagenes/Restuarante Perla Negra.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle Milagros No.114 e/ Heredia y Felipe Poey, Santos Suárez.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "¿Quieres conocer un Barco Pirata ☠️ en plena Habana?",
                specialties: ["Descubrelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Vie: 12:00pm-00:00am Sab-Vie: 12:00pm-2:00am",
                phone: "+53 59333495",
            },

            {
                id: 59,
                name: "Restaurant Habana Blues",
                category: "restaurant",
                image: "imagenes/Restaurant Habana Blues.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle H entre 17 y 19 vedado.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🤤 Menú variado.🖼️ Decoración única.🎶 Musica y show en vivo.",
                specialties: ["Descubrelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-23:30am ",
                phone: "+53 7835654",
            },

            {
                id: 60,
                name: "La Lola Bar & Cafeteria",
                category: "Bar",
                image: "imagenes/LaLola bar & cafetería.webp",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Ayestaran & Pedro Perez",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🛵 domicilio en toda la habana",
                specialties: ["Descubrelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 14:00pm-3:00am",
                phone: "+53 53654726",
            },

            {
                id: 61,
                name: "Kanda",
                category: "Bar",
                image: "imagenes/Kanda.webp",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle J #460 entre 21 y 23, Vedado.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🥤 En Kanda puedes pedir tus bebidas favoritas para llevar.Iced coffee, matcha, shakes o cualquier clásico…",
                specialties: ["Descubrelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 9:00am-21:00pm",
                phone: "#",
            },

            {
                id: 62,
                name: "Tiky Tiky",
                category: "Bar",
                image: "imagenes/Tiky Tiky.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle 19 entre 2 y 4 #825 Vedado.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🥤 En Kanda puedes pedir tus bebidas favoritas para llevar.Iced coffee, matcha, shakes o cualquier clásico…",
                specialties: ["🍽️Comida criolla e internacional!!!"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 10:00am-22:00pm",
                phone: "+53 59172820",
            },

            {
                id: 63,
                name: "Mojito Mojito",
                category: "restaurant",
                image: "imagenes/Mojito Mojito.webp",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Muralla e/Cuba y San Ignacio (entrada en PLAZA VIEJA).",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🍋🍋MOJITO MOJITO :Porque cuando tomas mojito: UNA VEZ NO BASTA.",
                specialties: ["Descubrelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-23:30pm ",
                phone: "#",
            },

            {
                id: 64,
                name: "🍝Sfornabontà by Amalfi🍸",
                category: "restaurant",
                image: "imagenes/Sfornabontà by Amalfi.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle 1ra # 4215 entre 42 y 44, Playa.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🇮🇹 Il Gusto della Qualitá.🍋 Restaurante Coffee Shop",
                specialties: ["Descubrelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 7:30am-23:00pm ",
                phone: "#",
            },

            {
                id: 65,
                name: "Betty Boom",
                category: "restaurant",
                image: "imagenes/Betty Boom.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle 60 y 5ta A, Miramar.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Deliciosa comida a la parrilla, así como por sus opciones vegetarianas y saludables.",
                specialties: ["Descubrelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 8:30am-00:00am ",
                phone: "+53 53904259",
            },

            {
                id: 66,
                name: "Restaurante 7 Dias",
                category: "restaurant",
                image: "imagenes/Restaurante 7 Dias.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle 14 y Mar, Miramar, Playa",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "¡Una experiencia explosiva!",
                specialties: ["Descubrelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Dom-Jue: 11:00am-22:30pm Vie-Sab: 11:00am-00:00am ",
                phone: "+53 52837046.",
            },

            {
                id: 66,
                name: "FONDA LA PAILA",
                category: "restaurant",
                image: "imagenes/FONDA LA PAILA.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Esq 25,calle M,Vedado.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Los colores de nuestros platos no son casualidad… son identidad. 🎨🔥",
                specialties: ["COMIDA AL CARBÓN"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-00:00am",
                phone: "+53 58846474",
            },

            {
                id: 67,
                name: "Bohío Mercadito",
                category: "Bar",
                image: "imagenes/Bohío Mercadito.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle 19 / 12 y 10 Vedado.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Realiza tu compra y de paso tómate un café ☕️✨",
                specialties: ["Descrubelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 10:00am-21:00pm",
                phone: "#",
            },

            {
                id: 68,
                name: "El Farallón",
                category: "restaurant",
                image: "imagenes/El Farallón.jpg",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle 22, esquina 23, Vedado.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🥇Restaurante-Pizzería de lujo con una carta amplia, variada y exquisita🤤.",
                specialties: ["💯Las pastas, carnes, pescados y arroces que nunca probaste en La Habana‼️."],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 11:00am-23:00pm",
                phone: "+53 59652021",
            },

            {
                id: 69,
                name: "Entre Nos",
                category: "restaurant",
                image: "",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Aguiar 62 / Cuarteles y Peña Pobre, Cabañas, La Habana.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🍀Lo que aquí pase, Entre nos se queda🍀",
                specialties: ["🥗ensaladas.🍹smothies.🥐 sandwiches.🍖platos al grill.🍝pastas"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 11:00am-23:00pm",
                phone: "#",
            },

            {
                id: 70,
                name: "Helad'oro",
                category: "icecream",
                image: "",
                rating: 4.9,
                reviews: 512,
                address: "Calle Aguiar 206btw/Empedrado y Tejadillom La Habana.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285!2d-58.42!3d-34.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDMzJzAwLjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Helado artesanal con un toque cubano.",
                specialties: ["Descubrelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Mini Cono Degustación", price: "$1.800", desc: "3 mini porciones para probar" }
                    ],
                    mains: [
                        { item: "Waffle con Helado", price: "$5.500", desc: "Con 2 sabores a elección" },
                        { item: "Brownie Caliente", price: "$6.200", desc: "Con bola de helado vainilla" }
                    ],
                    pasta: [],
                    sandwiches: [
                        { item: "Donuts Rellenos", price: "$3.200", desc: "De crema pastelera y chocolate" },
                        { item: "Cookie Sándwich", price: "$4.500", desc: "2 galletas con helado en medio" }
                    ],
                    desserts: [
                        { item: "1/4 kg (2 sabores)", price: "$3.800", desc: "Incluye cucurucho o envase" },
                        { item: "1/2 kg (3 sabores)", price: "$6.200", desc: "Ideal para compartir" },
                        { item: "1 kg (4 sabores)", price: "$11.500", desc: "Familiar" },
                        { item: "Cucurucho Gourmet", price: "$2.500", desc: "Con chocolate y almendras" },
                        { item: "Café Affogato", price: "$4.200", desc: "Helado de vainilla con espresso" },
                        { item: "Sundae Especial", price: "$5.800", desc: "Con salsa, crema y frutos" }
                    ],
                    drinks: [
                        { item: "Smoothie de Helado", price: "$4.500", desc: "Batido cremoso de helado" },
                        { item: "Granizado", price: "$3.200", desc: "Café o limón con helado" },
                        { item: "Agua Mineral", price: "$1.800", desc: "Con o sin gas" }
                    ]
                },
                hours: "Lun-Dom: 11:00am-20:00pm",
                phone: "53 50131498",
                
            },

            {
                id: 70,
                name: "El Gelato",
                category: "icecream",
                image: "",
                rating: 4.9,
                reviews: 512,
                address: "Ave 1ra Esq. 46, Playa.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285!2d-58.42!3d-34.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDMzJzAwLjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Donde se celebran los momentos especiales.",
                specialties: ["Helado artesanal premium 🍨"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Mini Cono Degustación", price: "$1.800", desc: "3 mini porciones para probar" }
                    ],
                    mains: [
                        { item: "Waffle con Helado", price: "$5.500", desc: "Con 2 sabores a elección" },
                        { item: "Brownie Caliente", price: "$6.200", desc: "Con bola de helado vainilla" }
                    ],
                    pasta: [],
                    sandwiches: [
                        { item: "Donuts Rellenos", price: "$3.200", desc: "De crema pastelera y chocolate" },
                        { item: "Cookie Sándwich", price: "$4.500", desc: "2 galletas con helado en medio" }
                    ],
                    desserts: [
                        { item: "1/4 kg (2 sabores)", price: "$3.800", desc: "Incluye cucurucho o envase" },
                        { item: "1/2 kg (3 sabores)", price: "$6.200", desc: "Ideal para compartir" },
                        { item: "1 kg (4 sabores)", price: "$11.500", desc: "Familiar" },
                        { item: "Cucurucho Gourmet", price: "$2.500", desc: "Con chocolate y almendras" },
                        { item: "Café Affogato", price: "$4.200", desc: "Helado de vainilla con espresso" },
                        { item: "Sundae Especial", price: "$5.800", desc: "Con salsa, crema y frutos" }
                    ],
                    drinks: [
                        { item: "Smoothie de Helado", price: "$4.500", desc: "Batido cremoso de helado" },
                        { item: "Granizado", price: "$3.200", desc: "Café o limón con helado" },
                        { item: "Agua Mineral", price: "$1.800", desc: "Con o sin gas" }
                    ]
                },
                hours: "Lun-Dom: 9:00am-23:00pm",
                phone: "53 59605045",
                
            },

            {
                id: 71,
                name: "Café & Estancia Bohemia",
                category: "restaurant",
                image: "",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍San Ignacio 364 Muralla y Teniente Rey.La Habana.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Se refleja la riqueza histórica y cultural que definen a la ciudad.",
                specialties: ["Descrubelo."],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 11:00am-23:00pm",
                phone: "+53 52871607",
            },

            {
                id: 72,
                name: "Mango Gelateria & Cafe",
                category: "icecream",
                image: "",
                rating: 4.9,
                reviews: 512,
                address: "Teniente Rey #106 / San Ignacio y Cuba. La Habana Vieja.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285!2d-58.42!3d-34.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDMzJzAwLjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Un paseo por Plaza Vieja siempre es mejor con un gelato🍦",
                specialties: ["Helado artesanal 🍧 basado en el puro sabor tropical 🍍 y con receta italiana 🇮🇹."],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Mini Cono Degustación", price: "$1.800", desc: "3 mini porciones para probar" }
                    ],
                    mains: [
                        { item: "Waffle con Helado", price: "$5.500", desc: "Con 2 sabores a elección" },
                        { item: "Brownie Caliente", price: "$6.200", desc: "Con bola de helado vainilla" }
                    ],
                    pasta: [],
                    sandwiches: [
                        { item: "Donuts Rellenos", price: "$3.200", desc: "De crema pastelera y chocolate" },
                        { item: "Cookie Sándwich", price: "$4.500", desc: "2 galletas con helado en medio" }
                    ],
                    desserts: [
                        { item: "1/4 kg (2 sabores)", price: "$3.800", desc: "Incluye cucurucho o envase" },
                        { item: "1/2 kg (3 sabores)", price: "$6.200", desc: "Ideal para compartir" },
                        { item: "1 kg (4 sabores)", price: "$11.500", desc: "Familiar" },
                        { item: "Cucurucho Gourmet", price: "$2.500", desc: "Con chocolate y almendras" },
                        { item: "Café Affogato", price: "$4.200", desc: "Helado de vainilla con espresso" },
                        { item: "Sundae Especial", price: "$5.800", desc: "Con salsa, crema y frutos" }
                    ],
                    drinks: [
                        { item: "Smoothie de Helado", price: "$4.500", desc: "Batido cremoso de helado" },
                        { item: "Granizado", price: "$3.200", desc: "Café o limón con helado" },
                        { item: "Agua Mineral", price: "$1.800", desc: "Con o sin gas" }
                    ]
                },
                hours: "Lun-Dom: 10:00am-23:00pm",
                phone: "+53 50914755",
                
            },

            {
                id: 73,
                name: "Bar Restaurante Industria 8 ⭐",
                category: "restaurant",
                image: "",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Industria, Genios y Refugio, Centro Habana.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "El sótano más privado de La Habana ✨ Comida, Música y más ⭐ Ofertas nuevas todas las semanas 🎁.",
                specialties: ["Descrubelo."],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-00:00am",
                phone: "#",
            },

             {
                id: 74,
                name: "Los Mercaderes",
                category: "restaurant",
                image: "",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Mercaderes 207 / Lamparilla y Amargura. Habana Vieja, Havana, Cuba.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Una experiencia para vivir y compartir.",
                specialties: ["Descrubelo."],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-00:00am",
                phone: "+53 52901531",
            },

            {
                id: 75,
                name: "Restaurante El Rum Rum de La Habana",
                category: "restaurant",
                image: "",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle Empedrado No. 256 Entre Cuba y Aguiar, Havana.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Un restaurante de primera categoría con cocina creativa, cócteles de autor y auténticos momentos con puros. Consolidado como uno de los favoritos de La Habana y la mejor opción.",
                specialties: ["Descrubelo."],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-23:00pm",
                phone: "+53 52901531",
            },

            {
                id: 76,
                name: "La Guarida",
                category: "restaurant",
                image: "",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle Empedrado No. 256 Entre Cuba y Aguiar, Havana.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Un viaje al corazón de La Habana.",
                specialties: ["Descrubelo."],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-23:00pm",
                phone: "#",
            },

            {
                id: 77,
                name: "LA ESQUINA DE CUBA",
                category: "restaurant",
                image: "",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle Cuba #203 e/ Empedrado y O'Reilly, Havana.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Un balcón en la Habana Vieja.",
                specialties: ["Descrubelo."],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-23:00pm",
                phone: "#",
            },

            {
                id: 78,
                name: "Vistamar Restaurante",
                category: "restaurant",
                image: "",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle 1ra entre 22 y 24.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "✨Un sabor, un estilo, un océano.",
                specialties: ["Descrubelo."],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-00:00am",
                phone: "#",
            },

            {
                id: 79,
                name: "ChaChaChá Bar-Restaurante",
                category: "restaurant",
                image: "",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Monserrate #159 / Tejadillo y Chacon, Havana.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Música en vivo• Coctelería de autor.",
                specialties: ["Comida cubana contemporánea."],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-00:00am",
                phone: "#",
            },

             {
                id: 80,
                name: "Bar El Dandy",
                category: "Bar",
                image: "",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Teniente Rey 401, esquina Villegas, Parque Cristo, La Habana.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Tapas and cocktail bar ☕️✨",
                specialties: ["Descrubelo"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 8:00am-22:00pm",
                phone: "53 53254319",
            },

            {
                id: 81,
                name: "O'Reilly 304",
                category: "restaurant",
                image: "",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍O'Reilly #304 Habana y Aguiar, Habana Viieja.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Opciones vegetarianas, Opciones veganas, Opciones sin gluten.",
                specialties: ["Descrubelo."],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-00:00am",
                phone: "#",
            },

            {
                id: 82,
                name: "Café Laurent",
                category: "Bar",
                image: "",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Calle M #257 entre 19 y 21, Vedado.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Tapas and cocktail bar ☕️✨",
                specialties: [" Coctelería premium"],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-23:00pm",
                phone: "53 53254319",
            },

            {
                id: 83,
                name: "Doña Eutimia",
                category: "restaurant",
                image: "",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Callejón del Chorro 60C Plaza de La Catedral Habana Vieja.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🥘 Comida Tradicional Cubana ",
                specialties: ["Descrubelo."],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-00:00am",
                phone: "+53 53284713",
            },

            {
                id: 84,
                name: "Adastra Restaurante",
                category: "restaurant",
                image: "",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Obipo #255 entre Cuba Y Aguiar,Habana Viieja.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "Donde el sabor y la calidez te llevan hacia las estrellas✨",
                specialties: ["Descrubelo."],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-00:00am",
                phone: "+53 63518498",
            },

            {
                id: 85,
                name: "Doña Eutimia",
                category: "restaurant",
                image: "",
                rating: 4.9,
                reviews: 189,
                address: "🗺️📍Callejón del Chorro 60C Plaza de La Catedral Habana Vieja.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.42!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQ4LjAiUyA1OMKwMjUnMTIuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
                description: "🥘 Comida Tradicional Cubana ",
                specialties: ["Descrubelo."],
                priceRange: "$$",
                menu: {
                    entrees: [
                        { item: "Picadera Parranda", price: "$8.500", desc: "Mix de frituras para compartir" },
                        { item: "Croquetas Variadas", price: "$3.800", desc: "6 unidades, jamón y pollo" },
                        { item: "Papas Fritas Cargadas", price: "$4.200", desc: "Con cheddar, panceta y verdeo" }
                    ],
                    mains: [
                        { item: "Hamburguesa Parranda", price: "$7.800", desc: "Doble carne, cheddar y huevo" },
                        { item: "Chivito al Plato", price: "$9.500", desc: "Lomo, jamón, queso y huevo" },
                        { item: "Milanesa Napolitana", price: "$10.200", desc: "Con papas españolas" }
                    ],
                    pasta: [
                        { item: "Pizza de la Casa", price: "$11.000", desc: "Salsa especial y 4 quesos" }
                    ],
                    sandwiches: [
                        { item: "Hamburguesa Bacon", price: "$8.500", desc: "Doble panceta y cebolla caramelizada" },
                        { item: "Sándwich de Bondiola", price: "$7.200", desc: "Cerdo desmenuzado con salsa BBQ" },
                        { item: "Wrap de Pollo Crispy", price: "$6.800", desc: "Pollo empanizado y vegetales" },
                        { item: "Pan de Queso XL", price: "$5.500", desc: "3 unidades, receta brasileña" }
                    ],
                    desserts: [
                        { item: "Chocotorta", price: "$3.500", desc: "Clásica argentina" },
                        { item: "Helado Frito", price: "$4.200", desc: "Tempura de helado vainilla" }
                    ],
                    drinks: [
                        { item: "Pinta IPA", price: "$2.800", desc: "Indian Pale Ale local" },
                        { item: "Pinta Stout", price: "$3.200", desc: "Cerveza negra con notas de café" },
                        { item: "Cuba Libre", price: "$3.500", desc: "Ron, coca y limón" },
                        { item: "Gin Tonic", price: "$4.200", desc: "Con frutos rojos" }
                    ]
                },
                hours: "⏰️ Lun-Dom: 12:00pm-00:00am",
                phone: "+53 53284713",
            }
    

        ];

        const events = [
            {
                id: 1,
                title: "Feria de Comida Callejera",
                type: "festival",
                date: "15-17 Dic",
                location: "Parque Centenario",
                image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
                description: "Los mejores food trucks de la ciudad en un solo lugar",
                price: "Entrada libre"
            },
            {
                id: 2,
                title: "Taller de Sushi para Principiantes",
                type: "workshop",
                date: "20 Dic",
                location: "Sushi Master",
                image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400",
                description: "Aprende a hacer rolls básicos con un chef profesional",
                price: "$15.000"
            },
            {
                id: 3,
                title: "Degustación de Vinos Malbec",
                type: "tasting",
                date: "22 Dic",
                location: "El Asador Argentino",
                image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400",
                description: "Cata guiada de 6 etiquetas premium con maridaje",
                price: "$25.000"
            },
            {
                id: 4,
                title: "Noche de Cerveza Artesanal",
                type: "festival",
                date: "28 Dic",
                location: "La Birrería Artesanal",
                image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400",
                description: "Presentación de cervezas de temporada con música en vivo",
                price: "$8.000"
            }
            
            
        ];

        let currentFilter = 'all';
        let currentSort = 'default';
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        let userPoints = parseInt(localStorage.getItem('sabormap_points')) || 0;
        let isRewardsMember = localStorage.getItem('sabormap_rewards_member') === 'true';

        // Intersection Observer para lazy loading
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        function showToast(message) {
            const toast = document.getElementById('toast');
            const toastMessage = document.getElementById('toastMessage');
            toastMessage.textContent = message;
            toast.classList.remove('hidden');
            setTimeout(() => toast.classList.add('hidden'), 3000);
        }

        function openCommunityModal(modalId) {
            document.getElementById(modalId).classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            
            if (modalId === 'rewardsModal') {
                updateRewardsDisplay();
            }
            if (modalId === 'eventsModal') {
                renderEvents('all');
            }
        }

        function closeCommunityModal(modalId) {
            document.getElementById(modalId).classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        function submitPlaceRegistration(e) {
            e.preventDefault();
            
            const form = e.target;
            const nombreLocal = form.nombre.value;
            const tipoEstablecimiento = form.tipo.value;
            const direccion = form.direccion.value;
            const telefono = form.telefono.value;
            const descripcion = form.descripcion.value;
            
            const tipos = {
                'restaurant': 'Restaurante',
                'bar': 'Bar',
                'cafe': 'Cafetería',
                'icecream': 'Heladería',
                'streetfood': 'Street Food',
                'other': 'Otro'
            };
            
            const mensaje = `*🍽️ NUEVA SOLICITUD DE REGISTRO - SaborMap*%0A%0A` +
                `*📍 Nombre del Local:*%0A${nombreLocal}%0A%0A` +
                `*🏷️ Tipo:*%0A${tipos[tipoEstablecimiento] || tipoEstablecimiento}%0A%0A` +
                `*📮 Dirección:*%0A${direccion}%0A%0A` +
                `*📞 Teléfono:*%0A${telefono}%0A%0A` +
                `*📝 Descripción:*%0A${descripcion || 'No proporcionada'}%0A%0A` +
                `*Enviado desde:* SaborMap Web%0A` +
                `*Fecha:* ${new Date().toLocaleString('es-ES')}`;
            
            const numeroWhatsApp = '5356578961';
            const whatsappURL = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
            
            closeCommunityModal('registerPlaceModal');
            showToast('Redirigiendo a WhatsApp...');
            
            setTimeout(() => {
                window.open(whatsappURL, '_blank');
            }, 800);
            
            form.reset();
        }

        function joinRewardsProgram() {
            isRewardsMember = true;
            localStorage.setItem('sabormap_rewards_member', 'true');
            addPoints(50);
            updateRewardsDisplay();
            showToast('¡Bienvenido al programa! +50 pts de regalo');
        }

        function addPoints(points) {
            if (!isRewardsMember) return;
            userPoints += points;
            localStorage.setItem('sabormap_points', userPoints);
            updateRewardsDisplay();
        }

        function redeemReward(type, cost) {
            if (!isRewardsMember) {
                showToast('Únete al programa de recompensas primero');
                return;
            }
            if (userPoints < cost) {
                showToast(`Te faltan ${cost - userPoints} puntos`);
                return;
            }
            
            const rewards = {
                'coffee': 'Café gratis',
                'discount': '20% de descuento',
                'dinner': 'Cena para 2'
            };
            
            if (confirm(`¿Canjear ${rewards[type]} por ${cost} puntos?`)) {
                userPoints -= cost;
                localStorage.setItem('sabormap_points', userPoints);
                updateRewardsDisplay();
                showToast(`¡Canje exitoso! Disfruta tu ${rewards[type]}`);
            }
        }

        function renderEvents(filter) {
            const container = document.getElementById('eventsList');
            let filteredEvents = filter === 'all' ? events : events.filter(e => e.type === filter);
            
            container.innerHTML = filteredEvents.map(event => `
                <div class="flex gap-4 bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition cursor-pointer" onclick="showEventDetail(${event.id})">
                    <img src="${event.image}" loading="lazy" class="w-24 h-24 rounded-lg object-cover flex-shrink-0" alt="${event.title}">
                    <div class="flex-1">
                        <div class="flex items-start justify-between mb-1">
                            <h5 class="font-bold text-lg">${event.title}</h5>
                            <span class="bg-primary text-white text-xs px-2 py-1 rounded-full">${event.date}</span>
                        </div>
                        <p class="text-sm text-gray-600 mb-2">${event.description}</p>
                        <div class="flex items-center gap-4 text-sm text-gray-500">
                            <span><i class="fas fa-map-marker-alt mr-1"></i>${event.location}</span>
                            <span><i class="fas fa-ticket-alt mr-1"></i>${event.price}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function filterEvents(type) {
            document.querySelectorAll('.event-filter').forEach(btn => {
                btn.classList.remove('active', 'bg-primary', 'text-white');
                btn.classList.add('bg-gray-100', 'text-gray-700');
                if (btn.dataset.eventFilter === type) {
                    btn.classList.add('active', 'bg-primary', 'text-white');
                    btn.classList.remove('bg-gray-100', 'text-gray-700');
                }
            });
            renderEvents(type);
        }

        function showEventDetail(eventId) {
            const event = events.find(e => e.id === eventId);
            showToast(`Evento: ${event.title} - Inscripciones próximamente`);
        }

        function submitEventProposal() {
            const title = prompt('Nombre del evento:');
            if (title) {
                showToast('Propuesta enviada. Nos contactaremos contigo.');
            }
        }

        function filterFromFooter(category) {
            currentFilter = category;
            currentSort = 'default';
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.category === category) btn.classList.add('active');
            });
            showFilterIndicator(getCategoryName(category));
            document.getElementById('filterSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
            renderPlaces();
            showToast(`Mostrando: ${getCategoryName(category)}`);
        }

        function showTopRated() {
            currentFilter = 'all';
            currentSort = 'rating';
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.category === 'all') btn.classList.add('active');
            });
            showFilterIndicator('Mejor valorados');
            document.getElementById('filterSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
            renderPlaces();
            showToast('Ordenando por mejor valorados');
        }

        function showNearbyPlaces() {
            currentFilter = 'all';
            currentSort = 'distance';
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.category === 'all') btn.classList.add('active');
            });
            showFilterIndicator('Cerca de ti');
            document.getElementById('filterSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
            renderPlaces();
            showToast('Mostrando lugares más cercanos');
        }

        function resetFilters() {
            currentFilter = 'all';
            currentSort = 'default';
            document.getElementById('searchInput').value = '';
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.category === 'all') btn.classList.add('active');
            });
            hideFilterIndicator();
            renderPlaces();
        }

        function showFilterIndicator(name) {
            document.getElementById('activeFilterIndicator').classList.remove('hidden');
            document.getElementById('activeFilterName').textContent = name;
        }

        function hideFilterIndicator() {
            document.getElementById('activeFilterIndicator').classList.add('hidden');
        }

        function getCategoryName(cat) {
            const names = {
                'restaurant': 'Restaurantes',
                'bar': 'Bares',
                'icecream': 'Heladerías',
                'streetfood': 'Street Food',
                'all': 'Todos'
            };
            return names[cat] || cat;
        }

        function getMenuCategoryCount(menu) {
            if (!menu || typeof menu !== 'object') return 0;
            const categories = ['entrees', 'mains', 'pasta', 'sandwiches', 'desserts', 'drinks'];
            return categories.filter(cat => menu[cat] && menu[cat].length > 0).length;
        }

        function renderPlaces() {
    const grid = document.getElementById('placesGrid');
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    let filtered = places.filter(place => {
        const matchesCategory = currentFilter === 'all' || place.category === currentFilter;
        const matchesSearch = place.name.toLowerCase().includes(searchTerm) || 
                            place.description.toLowerCase().includes(searchTerm) ||
                            place.address.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    if (currentSort === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === 'distance') {
        filtered.sort((a, b) => (a.distance || 0) - (b.distance || 0));
    }

    document.getElementById('statPlaces').textContent = filtered.length + '+';

    if (filtered.length === 0) {
        document.getElementById('emptyState').classList.remove('hidden');
        grid.innerHTML = '';
        return;
    }

    document.getElementById('emptyState').classList.add('hidden');
    
    grid.innerHTML = filtered.map((place, index) => {
        const menuCategoryCount = getMenuCategoryCount(place.menu);
        const hasMultipleCategories = menuCategoryCount > 2;
        
        // Escapar comillas en URLs para evitar romper el HTML
        const imageUrl = place.image ? place.image.replace(/"/g, '&quot;') : '';
        const escapedName = place.name ? place.name.replace(/"/g, '&quot;') : '';
        
        return `
        <div class="bg-white rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer slide-in place-card" 
             style="animation-delay: ${index * 0.1}s"
             onclick="openModal(${place.id})">
            <div class="relative h-48 overflow-hidden">
                <img data-src="${imageUrl}" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" loading="lazy" alt="${escapedName}" class="w-full h-full object-cover transition-transform duration-700 hover:scale-110">
                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold shadow-md">
                    <span class="star-rating"><i class="fas fa-star mr-1"></i>${place.rating}</span>
                </div>
                <div class="absolute top-4 left-4">
                    <span class="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                        ${getCategoryName(place.category)}
                    </span>
                </div>
                ${currentSort === 'distance' && place.distance ? `
                <div class="absolute bottom-4 left-4 bg-gray-900/80 text-white px-2 py-1 rounded text-xs">
                    <i class="fas fa-walking mr-1"></i>${place.distance} km
                </div>
                ` : ''}
                <button onclick="toggleFavorite(event, ${place.id})" class="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 ${favorites.includes(place.id) ? 'text-red-500' : 'text-gray-400'}">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="p-6 place-card-content">
                <div class="place-card-info">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-serif text-xl font-bold text-gray-900 line-clamp-1">${place.name}</h3>
                        <span class="text-sm font-semibold text-gray-600">${place.priceRange}</span>
                    </div>
                    <p class="text-gray-600 text-sm mb-4 line-clamp-2 place-description">${place.description}</p>
                    <div class="flex items-center text-sm text-gray-500 mb-3">
                        <i class="fas fa-map-marker-alt text-primary mr-2"></i>
                        <span class="truncate">${place.address}</span>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${place.specialties.slice(0, 2).map(s => `
                            <span class="bg-orange-50 text-orange-700 px-2 py-1 rounded text-xs font-medium">${s}</span>
                        `).join('')}
                        ${place.specialties.length > 2 ? `<span class="text-xs text-gray-400 self-center">+${place.specialties.length - 2}</span>` : ''}
                        ${hasMultipleCategories ? `
                            <span class="menu-preview-indicator" title="Menú completo disponible">
                                <i class="fas fa-utensils"></i> +${menuCategoryCount - 2}
                            </span>
                        ` : ''}
                    </div>
                </div>
                <button class="w-full bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-primary transition-colors flex items-center justify-center gap-2 group">
                    Ver detalles <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </button>
            </div>
        </div>
    `}).join('');
    
    // Observar imágenes para lazy loading
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

        function filterCategory(category) {
            currentFilter = category;
            currentSort = 'default';
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.closest('button').classList.add('active');
            
            if (category === 'all') {
                hideFilterIndicator();
            } else {
                showFilterIndicator(getCategoryName(category));
            }
            renderPlaces();
        }

        function filterPlaces() {
            renderPlaces();
        }

function openModal(id) {
    const place = places.find(p => p.id === id);
    const modal = document.getElementById('detailModal');
    const content = document.getElementById('modalContent');
    const isFav = favorites.includes(id);
    
    const menuHTML = generateMenuHTML(place.menu);
    
    // Escapar comillas en URLs para evitar romper el HTML
    const imageUrl = place.image ? place.image.replace(/"/g, '&quot;') : '';
    const escapedName = place.name ? place.name.replace(/"/g, '&quot;') : '';
    
    content.innerHTML = `
        <div class="relative">
            <button onclick="closeModal()" class="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition">
                <i class="fas fa-times text-gray-800"></i>
            </button>
            <div class="h-64 sm:h-80 overflow-hidden relative">
                <img data-src="${imageUrl}" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" loading="lazy" alt="${escapedName}" class="w-full h-full object-cover transition-transform duration-700 hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute bottom-6 left-6 text-white">
                    <span class="bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2 inline-block">
                        ${getCategoryName(place.category)}
                    </span>
                    <h2 class="font-serif text-3xl sm:text-4xl font-bold mb-2">${place.name}</h2>
                    <div class="flex items-center gap-4 text-sm">
                        <span class="flex items-center"><i class="fas fa-star text-yellow-400 mr-1"></i> ${place.rating} (${place.reviews} reseñas)</span>
                        <span>${place.priceRange}</span>
                        ${place.distance ? `<span><i class="fas fa-walking mr-1"></i>${place.distance} km</span>` : ''}
                    </div>
                </div>
            </div>
            <div class="p-6 sm:p-8">
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="font-serif text-xl font-bold mb-3">Sobre el lugar</h3>
                        <p class="text-gray-600 mb-6 leading-relaxed">${place.description}</p>
                        <div class="space-y-4 mb-6">
                            <div class="flex items-start gap-3">
                                <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-900">Dirección</h4>
                                    <p class="text-gray-600 text-sm">${place.address}</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                    <i class="fas fa-clock"></i>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-900">Horario</h4>
                                    <p class="text-gray-600 text-sm">${place.hours}</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-900">Contacto</h4>
                                    <p class="text-gray-600 text-sm">${place.phone}</p>
                                </div>
                            </div>
                        </div>
                        <div class="mb-6">
                            <h4 class="font-semibold text-gray-900 mb-2">Especialidades</h4>
                            <div class="flex flex-wrap gap-2">
                                ${place.specialties.map(s => `
                                    <span class="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium border border-orange-200">
                                        <i class="fas fa-check mr-1 text-xs"></i>${s}
                                    </span>
                                `).join('')}
                            </div>
                        </div>
                        <button onclick="toggleFavorite(event, ${place.id}); updateModalFav(${place.id})" 
                            class="w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${isFav ? 'bg-red-50 text-red-600 border-2 border-red-200' : 'bg-gray-100 text-gray-700 border-2 border-gray-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600'}">
                            <i class="fas fa-heart ${isFav ? 'animate-pulse' : ''}"></i>
                            ${isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                        </button>
                    </div>
                    <div class="space-y-6">
                        <div class="bg-gray-50 rounded-xl overflow-hidden h-64 border border-gray-200">
                            <iframe src="${place.mapUrl}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        
                        <div class="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg">
                            <div class="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-4">
                                <h3 class="font-serif text-xl font-bold flex items-center gap-2">
                                    <i class="fas fa-utensils text-primary"></i>
                                    Nuestra Carta
                                </h3>
                                <p class="text-gray-300 text-sm mt-1">Explora nuestros platos por categoría</p>
                            </div>
                            
                            ${menuHTML}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Observar la imagen del modal para lazy loading
    const modalImg = content.querySelector('img[data-src]');
    if (modalImg) {
        imageObserver.observe(modalImg);
    }
    
    setTimeout(initMenuTabs, 100);
}

        function generateMenuHTML(menu) {
            if (!menu || typeof menu !== 'object') {
                return '<p class="p-6 text-gray-500">Menú no disponible</p>';
            }

            const categories = [
                { key: 'entrees', label: 'Entrantes', icon: 'fa-utensils', color: 'entrees' },
                { key: 'mains', label: 'Platos Fuertes', icon: 'fa-drumstick-bite', color: 'mains' },
                { key: 'pasta', label: 'Pastas', icon: 'fa-bacon', color: 'pasta' },
                { key: 'sandwiches', label: 'Entrepanes', icon: 'fa-hamburger', color: 'sandwiches' },
                { key: 'desserts', label: 'Postres', icon: 'fa-ice-cream', color: 'desserts' },
                { key: 'drinks', label: 'Bebidas', icon: 'fa-wine-glass-alt', color: 'drinks' }
            ];

            const availableCategories = categories.filter(cat => menu[cat.key] && menu[cat.key].length > 0);
            
            if (availableCategories.length === 0) {
                return '<p class="p-6 text-gray-500">Menú no disponible</p>';
            }

            const totalItems = availableCategories.reduce((acc, cat) => acc + menu[cat.key].length, 0);
            const needsNavigation = availableCategories.length > 2;

            let tabsHTML = `
                <div class="menu-nav-container">
                    ${needsNavigation ? `
                        <button class="menu-nav-btn menu-nav-prev" onclick="scrollMenuTabs('left')" title="Anterior" disabled>
                            <i class="fas fa-chevron-left"></i>
                        </button>
                    ` : ''}
                    
                    <div class="menu-tabs-wrapper">
                        <div class="menu-tabs-scroll" id="menuTabsScroll">
                            ${availableCategories.map((cat, index) => {
                                const isActive = index === 0 ? 'active' : '';
                                return `
                                    <button onclick="switchMenuTab('${cat.key}')" 
                                            class="menu-tab menu-tab-${cat.color} ${isActive}" 
                                            data-tab="${cat.key}">
                                        <i class="fas ${cat.icon}"></i>
                                        ${cat.label}
                                        <span class="category-counter">${menu[cat.key].length}</span>
                                    </button>
                                `;
                            }).join('')}
                        </div>
                        <div class="menu-scroll-progress" id="menuScrollProgress" style="width: ${needsNavigation ? '33%' : '100%'}"></div>
                    </div>
                    
                    ${needsNavigation ? `
                        <button class="menu-nav-btn menu-nav-next pulse" onclick="scrollMenuTabs('right')" title="Siguiente">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                        <div class="menu-nav-hint">
                            <i class="fas fa-mouse-pointer mr-1"></i> Usa las flechas para navegar
                        </div>
                    ` : ''}
                </div>
            `;
            
            let contentHTML = '<div class="p-4">';

            availableCategories.forEach((cat, index) => {
                const isActive = index === 0 ? 'active' : '';
                const items = menu[cat.key];
                
                contentHTML += `
                    <div id="menu-section-${cat.key}" class="menu-section ${isActive}">
                        <div class="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
                            <h4 class="font-bold text-gray-800 flex items-center gap-2">
                                <span class="category-icon ${cat.color}">
                                    <i class="fas ${cat.icon}"></i>
                                </span>
                                ${cat.label}
                            </h4>
                            <span class="text-sm text-gray-500">${items.length} platos</span>
                        </div>
                        <div class="space-y-3">
                            ${items.map((item, idx) => `
                                <div class="menu-item-card bg-white rounded-lg p-4 flex justify-between items-start gap-4 cursor-pointer group hover:bg-gray-50" 
                                     style="animation-delay: ${idx * 0.05}s"
                                     onclick="highlightMenuItem(this)">
                                    <div class="flex-1">
                                        <div class="flex items-center gap-2 mb-1">
                                            <h4 class="font-bold text-gray-900 group-hover:text-primary transition-colors">${item.item}</h4>
                                            ${item.featured ? '<span class="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full">DESTACADO</span>' : ''}
                                        </div>
                                        <p class="text-sm text-gray-500 leading-relaxed">${item.desc}</p>
                                    </div>
                                    <span class="menu-price-tag flex-shrink-0">${item.price}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            });

            contentHTML += `
                <div class="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200 text-center">
                    <p class="text-sm text-blue-800">
                        <i class="fas fa-info-circle mr-2"></i>
                        ${totalItems} platos disponibles en ${availableCategories.length} categorías
                        ${needsNavigation ? '• Usa las flechas para navegar' : ''}
                    </p>
                </div>
            </div>`;

            return tabsHTML + contentHTML;
        }

        function initMenuTabs() {
            updateMenuNavButtons();
        }

        function scrollMenuTabs(direction) {
            const container = document.getElementById('menuTabsScroll');
            if (!container) return;
            
            const scrollAmount = 200;
            
            if (direction === 'left') {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
            
            setTimeout(updateMenuNavButtons, 300);
        }

        function updateMenuNavButtons() {
            const container = document.getElementById('menuTabsScroll');
            const prevBtn = document.querySelector('.menu-nav-prev');
            const nextBtn = document.querySelector('.menu-nav-next');
            const progressBar = document.getElementById('menuScrollProgress');
            
            if (!container) return;
            
            const scrollLeft = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;
            const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 100;
            
            if (progressBar) {
                progressBar.style.width = `${Math.max(20, progress)}%`;
            }
            
            if (prevBtn) {
                prevBtn.disabled = scrollLeft <= 0;
                if (scrollLeft <= 0) {
                    prevBtn.classList.remove('pulse');
                    if (nextBtn) nextBtn.classList.add('pulse');
                }
            }
            
            if (nextBtn) {
                nextBtn.disabled = scrollLeft >= maxScroll - 5;
                if (scrollLeft >= maxScroll - 5) {
                    nextBtn.classList.remove('pulse');
                    if (prevBtn) prevBtn.classList.add('pulse');
                }
            }
            
            if (scrollLeft > 0 && scrollLeft < maxScroll - 5) {
                if (prevBtn) prevBtn.classList.remove('pulse');
                if (nextBtn) nextBtn.classList.remove('pulse');
            }
        }

        window.switchMenuTab = function(tabName) {
            document.querySelectorAll('.menu-tab').forEach(tab => {
                tab.classList.remove('active');
                if (tab.dataset.tab === tabName) {
                    tab.classList.add('active');
                    tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
            });
            
            document.querySelectorAll('.menu-section').forEach(section => {
                section.classList.remove('active');
                section.style.opacity = '0';
            });
            
            const targetSection = document.getElementById(`menu-section-${tabName}`);
            if (targetSection) {
                setTimeout(() => {
                    targetSection.classList.add('active');
                    let opacity = 0;
                    const fadeIn = setInterval(() => {
                        opacity += 0.1;
                        targetSection.style.opacity = opacity;
                        if (opacity >= 1) clearInterval(fadeIn);
                    }, 30);
                }, 150);
            }
            
            setTimeout(updateMenuNavButtons, 100);
        };

        function highlightMenuItem(element) {
            document.querySelectorAll('.menu-item-card').forEach(card => {
                card.classList.remove('ring-2', 'ring-primary', 'bg-orange-50');
            });
            
            element.classList.add('ring-2', 'ring-primary', 'bg-orange-50');
            
            const itemName = element.querySelector('h4').textContent;
            showToast(`Seleccionado: ${itemName}`);
            
            setTimeout(() => {
                element.classList.remove('ring-2', 'ring-primary', 'bg-orange-50');
            }, 2000);
        }

        function closeModal() {
            document.getElementById('detailModal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        function toggleFavorite(event, id) {
            event.stopPropagation();
            const index = favorites.indexOf(id);
            if (index > -1) {
                favorites.splice(index, 1);
                showToast('Eliminado de favoritos');
            } else {
                favorites.push(id);
                showToast('Agregado a favoritos +5 pts');
                addPoints(5);
            }
            localStorage.setItem('favorites', JSON.stringify(favorites));
            updateFavCount();
            renderPlaces();
        }

        function updateModalFav(id) {
            openModal(id);
        }

        function updateFavCount() {
            const count = favorites.length;
            const badge = document.getElementById('fav-count');
            if (count > 0) {
                badge.textContent = count;
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }
        }

        function toggleFavorites() {
            if (favorites.length === 0) {
                showToast('No tienes favoritos guardados');
                return;
            }
            currentFilter = 'favorites';
            const grid = document.getElementById('placesGrid');
            const favPlaces = places.filter(p => favorites.includes(p.id));
            
            showFilterIndicator('Mis favoritos');
            
            grid.innerHTML = favPlaces.map((place, index) => `
                <div class="bg-white rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer slide-in place-card" 
                     style="animation-delay: ${index * 0.1}s"
                     onclick="openModal(${place.id})">
                    <div class="relative h-48 overflow-hidden">
                        <img data-src="${place.image}" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" loading="lazy" alt="${place.name}" class="w-full h-full object-cover transition-transform duration-700 hover:scale-110">
                        <div class="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold shadow-md">
                            <span class="star-rating"><i class="fas fa-star mr-1"></i>${place.rating}</span>
                        </div>
                        <div class="absolute top-4 left-4">
                            <span class="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                                ${getCategoryName(place.category)}
                            </span>
                        </div>
                        <button onclick="toggleFavorite(event, ${place.id})" class="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-red-500">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                    <div class="p-6 place-card-content">
                        <div class="place-card-info">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="font-serif text-xl font-bold text-gray-900 line-clamp-1">${place.name}</h3>
                                <span class="text-sm font-semibold text-gray-600">${place.priceRange}</span>
                            </div>
                            <p class="text-gray-600 text-sm mb-4 line-clamp-2 place-description">${place.description}</p>
                            <div class="flex items-center text-sm text-gray-500 mb-3">
                                <i class="fas fa-map-marker-alt text-primary mr-2"></i>
                                <span class="truncate">${place.address}</span>
                            </div>
                        </div>
                        <button class="w-full bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-primary transition-colors flex items-center justify-center gap-2 group">
                            Ver detalles <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </div>
            `).join('');
            
            document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            document.getElementById('filterSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        function showHelpModal() {
            const modalHTML = `
                <div id="helpModal" class="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <div class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" onclick="closeHelpModal()"></div>
                    <div class="relative bg-white rounded-2xl max-w-lg w-full p-8 modal-enter shadow-2xl">
                        <button onclick="closeHelpModal()" class="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition">
                            <i class="fas fa-times text-gray-600"></i>
                        </button>
                        
                        <div class="text-center mb-6">
                            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-headset text-3xl text-blue-600"></i>
                            </div>
                            <h3 class="font-serif text-2xl font-bold text-gray-900">Centro de Ayuda</h3>
                            <p class="text-gray-600 mt-2">¿Cómo podemos ayudarte?</p>
                        </div>

                        <div class="space-y-3 mb-6">
                            <div class="bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition cursor-pointer" onclick="showToast('Próximamente: Guía de búsqueda')">
                                <div class="flex items-center gap-3">
                                    <i class="fas fa-search text-blue-500"></i>
                                    <div>
                                        <p class="font-semibold text-gray-900">Cómo buscar restaurantes</p>
                                        <p class="text-sm text-gray-500">Aprende a usar filtros y búsqueda avanzada</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition cursor-pointer" onclick="showToast('Próximamente: Guía de favoritos')">
                                <div class="flex items-center gap-3">
                                    <i class="fas fa-heart text-red-500"></i>
                                    <div>
                                        <p class="font-semibold text-gray-900">Guardar y gestionar favoritos</p>
                                        <p class="text-sm text-gray-500">Crea tu lista de lugares preferidos</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition cursor-pointer" onclick="showToast('Próximamente: Guía de recompensas')">
                                <div class="flex items-center gap-3">
                                    <i class="fas fa-crown text-yellow-500"></i>
                                    <div>
                                        <p class="font-semibold text-gray-900">Programa de recompensas</p>
                                        <p class="text-sm text-gray-500">Gana puntos y canjea premios</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition cursor-pointer" onclick="showToast('Próximamente: Guía para dueños')">
                                <div class="flex items-center gap-3">
                                    <i class="fas fa-store text-green-500"></i>
                                    <div>
                                        <p class="font-semibold text-gray-900">Registrar tu local</p>
                                        <p class="text-sm text-gray-500">Publica tu restaurante gratis</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="border-t border-gray-200 pt-4">
                            <p class="text-sm text-gray-500 text-center mb-3">¿No encontraste lo que buscabas?</p>
                            <a href="mailto:sabormap1@gmail.com" class="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition">
                                <i class="fas fa-envelope"></i> Contactar soporte
                            </a>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.insertAdjacentHTML('beforeend', modalHTML);
            document.body.style.overflow = 'hidden';
        }

        function closeHelpModal() {
            const modal = document.getElementById('helpModal');
            if (modal) {
                modal.remove();
                document.body.style.overflow = 'auto';
            }
        }

        function showReportModal() {
            const modalHTML = `
                <div id="reportModal" class="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <div class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" onclick="closeReportModal()"></div>
                    <div class="relative bg-white rounded-2xl max-w-lg w-full p-8 modal-enter shadow-2xl">
                        <button onclick="closeReportModal()" class="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition">
                            <i class="fas fa-times text-gray-600"></i>
                        </button>
                        
                        <div class="text-center mb-6">
                            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-exclamation-triangle text-3xl text-red-600"></i>
                            </div>
                            <h3 class="font-serif text-2xl font-bold text-gray-900">Reportar un Problema</h3>
                            <p class="text-gray-600 mt-2">Ayúdanos a mantener la información actualizada</p>
                        </div>

                        <form onsubmit="submitReport(event)" class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Nombre del lugar *</label>
                                <input type="text" id="reportPlaceName" required class="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none" placeholder="Ej: El Asador Argentino">
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Tipo de problema *</label>
                                <select id="reportIssueType" required class="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none">
                                    <option value="">Seleccionar...</option>
                                    <option value="closed">Lugar cerrado permanentemente</option>
                                    <option value="info">Información incorrecta (dirección, teléfono, horarios)</option>
                                    <option value="prices">Precios desactualizados</option>
                                    <option value="inappropriate">Contenido inapropiado</option>
                                    <option value="duplicate">Lugar duplicado</option>
                                    <option value="other">Otro problema</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Descripción detallada *</label>
                                <textarea id="reportDescription" rows="3" required class="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none" placeholder="Describe el problema con más detalle..."></textarea>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Tu email (opcional)</label>
                                <input type="email" id="reportEmail" class="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none" placeholder="Para contactarte si necesitamos más información">
                            </div>

                            <button type="submit" class="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2">
                                <i class="fas fa-paper-plane"></i> Enviar reporte
                            </button>
                            
                            <p class="text-xs text-gray-500 text-center">Revisaremos tu reporte en 24-48 horas hábiles.</p>
                        </form>
                    </div>
                </div>
            `;
            
            document.body.insertAdjacentHTML('beforeend', modalHTML);
            document.body.style.overflow = 'hidden';
        }

        function closeReportModal() {
            const modal = document.getElementById('reportModal');
            if (modal) {
                modal.remove();
                document.body.style.overflow = 'auto';
            }
        }

        function submitReport(e) {
            e.preventDefault();
            const placeName = document.getElementById('reportPlaceName').value;
            const issueType = document.getElementById('reportIssueType').value;
            const description = document.getElementById('reportDescription').value;
            
            console.log('Reporte enviado:', { placeName, issueType, description });
            
            closeReportModal();
            showToast('¡Reporte enviado! Gracias por ayudarnos a mejorar.');
            addPoints(10);
        }

        function showPrivacyPolicy() {
            const modalHTML = `
                <div id="privacyModal" class="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <div class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" onclick="closePrivacyModal()"></div>
                    <div class="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl modal-enter flex flex-col">
                        
                        <div class="bg-gradient-to-r from-primary to-brand p-6 text-white flex-shrink-0">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <i class="fas fa-shield-alt text-2xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="font-serif text-2xl font-bold">Política de Privacidad</h3>
                                        <p class="text-sm opacity-90">Última actualización: 18 de febrero de 2026</p>
                                    </div>
                                </div>
                                <button onclick="closePrivacyModal()" class="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
                                    <i class="fas fa-times text-xl"></i>
                                </button>
                            </div>
                        </div>

                        <div class="overflow-y-auto p-8 flex-1">
                            <div class="prose prose-gray max-w-none">
                                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                                    <p class="text-sm text-blue-800">
                                        <i class="fas fa-info-circle mr-2"></i>
                                        En SaborMap valoramos tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos tu información personal.
                                    </p>
                                </div>

                                <section class="mb-6">
                                    <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <span class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm">1</span>
                                        Información que recopilamos
                                    </h4>
                                    <ul class="space-y-2 text-gray-600 text-sm ml-10">
                                        <li class="flex items-start gap-2">
                                            <i class="fas fa-check text-primary mt-1 text-xs"></i>
                                            <span><strong>Datos de registro:</strong> Nombre, email y contraseña cuando creas una cuenta.</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <i class="fas fa-check text-primary mt-1 text-xs"></i>
                                            <span><strong>Información de perfil:</strong> Foto de perfil, preferencias gastronómicas y biografía (opcional).</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <i class="fas fa-check text-primary mt-1 text-xs"></i>
                                            <span><strong>Datos de uso:</strong> Lugares que buscas, favoritos guardados, reseñas escritas y check-ins.</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <i class="fas fa-check text-primary mt-1 text-xs"></i>
                                            <span><strong>Ubicación:</strong> Solo con tu permiso, para mostrarte lugares cercanos.</span>
                                        </li>
                                    </ul>
                                </section>

                                <section class="mb-6">
                                    <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <span class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm">2</span>
                                        Cómo usamos tu información
                                    </h4>
                                    <div class="grid md:grid-cols-2 gap-3 ml-10">
                                        <div class="bg-gray-50 p-3 rounded-lg">
                                            <i class="fas fa-search text-primary mb-2"></i>
                                            <p class="text-sm font-semibold text-gray-900">Personalización</p>
                                            <p class="text-xs text-gray-600">Recomendaciones basadas en tus gustos</p>
                                        </div>
                                        <div class="bg-gray-50 p-3 rounded-lg">
                                            <i class="fas fa-map-marker-alt text-primary mb-2"></i>
                                            <p class="text-sm font-semibold text-gray-900">Geolocalización</p>
                                            <p class="text-xs text-gray-600">Mostrar restaurantes cerca de ti</p>
                                        </div>
                                        <div class="bg-gray-50 p-3 rounded-lg">
                                            <i class="fas fa-gift text-primary mb-2"></i>
                                            <p class="text-sm font-semibold text-gray-900">Recompensas</p>
                                            <p class="text-xs text-gray-600">Gestionar puntos y canjes</p>
                                        </div>
                                        <div class="bg-gray-50 p-3 rounded-lg">
                                            <i class="fas fa-bullhorn text-primary mb-2"></i>
                                            <p class="text-sm font-semibold text-gray-900">Comunicaciones</p>
                                            <p class="text-xs text-gray-600">Noticias y actualizaciones (si aceptas)</p>
                                        </div>
                                    </div>
                                </section>

                                <section class="mb-6">
                                    <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <span class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm">3</span>
                                        Protección de datos
                                    </h4>
                                    <p class="text-sm text-gray-600 ml-10 mb-3">
                                        Implementamos medidas de seguridad técnicas y organizativas para proteger tu información:
                                    </p>
                                    <ul class="space-y-2 text-gray-600 text-sm ml-10">
                                        <li><i class="fas fa-lock text-green-500 mr-2"></i>Encriptación SSL en todas las conexiones</li>
                                        <li><i class="fas fa-server text-green-500 mr-2"></i>Servidores seguros con acceso restringido</li>
                                        <li><i class="fas fa-user-shield text-green-500 mr-2"></i>Autenticación de dos factores (opcional)</li>
                                        <li><i class="fas fa-trash-alt text-green-500 mr-2"></i>Eliminación permanente si decides borrar tu cuenta</li>
                                    </ul>
                                </section>

                                <section class="mb-6">
                                    <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <span class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm">4</span>
                                        Tus derechos
                                    </h4>
                                    <div class="bg-orange-50 border border-orange-200 rounded-lg p-4 ml-10">
                                        <ul class="space-y-2 text-sm text-gray-700">
                                            <li><strong>Acceso:</strong> Puedes solicitar una copia de todos tus datos.</li>
                                            <li><strong>Rectificación:</strong> Corregir información incorrecta en tu perfil.</li>
                                            <li><strong>Cancelación:</strong> Eliminar tu cuenta y datos permanentemente.</li>
                                            <li><strong>Oposición:</strong> Rechazar el uso de datos para marketing.</li>
                                        </ul>
                                    </div>
                                </section>

                                <section class="mb-6">
                                    <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <span class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm">5</span>
                                        Cookies y tecnologías similares
                                    </h4>
                                    <p class="text-sm text-gray-600 ml-10">
                                        Usamos cookies esenciales para el funcionamiento del sitio y cookies analíticas (Google Analytics) para mejorar la experiencia. 
                                        Puedes gestionar tus preferencias en cualquier momento desde la configuración de tu navegador.
                                    </p>
                                </section>

                                <div class="border-t border-gray-200 pt-4 mt-6">
                                    <p class="text-sm text-gray-500 text-center">
                                        ¿Preguntas sobre privacidad? Escríbenos a 
                                        <a href="mailto:privacidad@sabormap.com" class="text-primary hover:underline">privacidad@sabormap.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="border-t border-gray-200 p-4 bg-gray-50 flex-shrink-0 flex justify-between items-center">
                            <button onclick="downloadPrivacyPDF()" class="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center gap-2 transition">
                                <i class="fas fa-download"></i> Descargar PDF
                            </button>
                            <div class="flex gap-3">
                                <button onclick="closePrivacyModal()" class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition">
                                    Cerrar
                                </button>
                                <button onclick="acceptPrivacy()" class="px-6 py-2 bg-primary text-white rounded-lg hover:bg-red-600 font-medium transition flex items-center gap-2">
                                    <i class="fas fa-check"></i> Entendido
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.insertAdjacentHTML('beforeend', modalHTML);
            document.body.style.overflow = 'hidden';
        }

        function closePrivacyModal() {
            const modal = document.getElementById('privacyModal');
            if (modal) {
                modal.querySelector('.modal-enter').style.opacity = '0';
                setTimeout(() => {
                    modal.remove();
                    document.body.style.overflow = 'auto';
                }, 300);
            }
        }

        function acceptPrivacy() {
            localStorage.setItem('sabormap_privacy_accepted', 'true');
            localStorage.setItem('sabormap_privacy_date', new Date().toISOString());
            showToast('Has aceptado la Política de Privacidad');
            closePrivacyModal();
            addPoints(5);
        }

        function downloadPrivacyPDF() {
            showToast('Generando PDF... Descarga iniciada');
        }

        function showTermsOfUse() {
            const modalHTML = `
                <div id="termsModal" class="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <div class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" onclick="closeTermsModal()"></div>
                    <div class="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl modal-enter flex flex-col">
                        
                        <div class="bg-gradient-to-r from-gray-900 to-gray-800 p-6 text-white flex-shrink-0">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                                        <i class="fas fa-file-contract text-2xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="font-serif text-2xl font-bold">Términos de Uso</h3>
                                        <p class="text-sm opacity-90">Versión 2.0 - Vigente desde 18/02/2026</p>
                                    </div>
                                </div>
                                <button onclick="closeTermsModal()" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                                    <i class="fas fa-times text-xl"></i>
                                </button>
                            </div>
                        </div>

                        <div class="overflow-y-auto p-8 flex-1">
                            <div class="prose prose-gray max-w-none">
                                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6 rounded-r-lg">
                                    <p class="text-sm text-yellow-800">
                                        <i class="fas fa-exclamation-circle mr-2"></i>
                                        <strong>Importante:</strong> Al usar SaborMap, aceptas estos términos. Si no estás de acuerdo, por favor no uses nuestros servicios.
                                    </p>
                                </div>

                                <section class="mb-6">
                                    <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <span class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 text-sm font-bold">1</span>
                                        Definiciones
                                    </h4>
                                    <div class="bg-gray-50 rounded-lg p-4 ml-10 text-sm text-gray-600 space-y-2">
                                        <p><strong>"SaborMap"</strong> se refiere a la plataforma web y sus servicios asociados.</p>
                                        <p><strong>"Usuario"</strong> es cualquier persona que accede o utiliza SaborMap.</p>
                                        <p><strong>"Contenido"</strong> incluye reseñas, fotos, comentarios y cualquier información publicada.</p>
                                        <p><strong>"Local"</strong> se refiere a restaurantes, bares y establecimientos listados.</p>
                                    </div>
                                </section>

                                <section class="mb-6">
                                    <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <span class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 text-sm font-bold">2</span>
                                        Uso de la plataforma
                                    </h4>
                                    <div class="ml-10 space-y-3">
                                        <div class="flex items-start gap-3">
                                            <i class="fas fa-check-circle text-green-500 mt-1"></i>
                                            <div>
                                                <p class="font-semibold text-gray-900 text-sm">Uso permitido</p>
                                                <p class="text-sm text-gray-600">Buscar restaurantes, leer reseñas, publicar opiniones honestas, guardar favoritos y participar en el programa de recompensas.</p>
                                            </div>
                                        </div>
                                        <div class="flex items-start gap-3">
                                            <i class="fas fa-times-circle text-red-500 mt-1"></i>
                                            <div>
                                                <p class="font-semibold text-gray-900 text-sm">Uso prohibido</p>
                                                <ul class="text-sm text-gray-600 mt-1 space-y-1 list-disc list-inside">
                                                    <li>Publicar contenido falso o engañoso</li>
                                                    <li>Reseñas falsas o pagadas sin disclosure</li>
                                                    <li>Spam o contenido promocional no autorizado</li>
                                                    <li>Acoso a otros usuarios o locales</li>
                                                    <li>Scraping o uso automatizado sin permiso</li>
                                                    <li>Reproducir contenido sin autorización</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section class="mb-6">
                                    <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <span class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 text-sm font-bold">3</span>
                                        Contenido generado por usuarios
                                    </h4>
                                    <div class="ml-10 space-y-3 text-sm text-gray-600">
                                        <p>Al publicar contenido en SaborMap:</p>
                                        <ul class="space-y-2 list-disc list-inside">
                                            <li>Garantizas que tienes derecho a publicar ese contenido</li>
                                            <li>Nos otorgas una licencia no exclusiva para mostrarlo</li>
                                            <li>Aceptas que otros usuarios puedan interactuar con él</li>
                                            <li>Puedes eliminar tu contenido en cualquier momento</li>
                                        </ul>
                                        <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
                                            <p class="text-blue-800 text-xs">
                                                <i class="fas fa-camera mr-1"></i>
                                                Las fotos de platos y locales deben ser tomadas por ti o tener permiso de uso.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section class="mb-6">
                                    <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <span class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 text-sm font-bold">4</span>
                                        Sistema de recompensas
                                    </h4>
                                    <div class="ml-10 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4 border border-orange-200">
                                        <ul class="space-y-2 text-sm text-gray-700">
                                            <li class="flex items-start gap-2">
                                                <i class="fas fa-coins text-yellow-500 mt-1"></i>
                                                <span>Los puntos son virtuales y no tienen valor monetario real.</span>
                                            </li>
                                            <li class="flex items-start gap-2">
                                                <i class="fas fa-gift text-yellow-500 mt-1"></i>
                                                <span>Los premios están sujetos a disponibilidad y pueden cambiar sin previo aviso.</span>
                                            </li>
                                            <li class="flex items-start gap-2">
                                                <i class="fas fa-ban text-yellow-500 mt-1"></i>
                                                <span>Detectamos fraude (reseñas falsas, múltiples cuentas) = eliminación de puntos y baneo.</span>
                                            </li>
                                            <li class="flex items-start gap-2">
                                                <i class="fas fa-calendar-alt text-yellow-500 mt-1"></i>
                                                <span>Los puntos expiran después de 12 meses de inactividad.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </section>

                                <section class="mb-6">
                                    <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <span class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 text-sm font-bold">5</span>
                                        Responsabilidades y limitaciones
                                    </h4>
                                    <div class="ml-10 space-y-2 text-sm text-gray-600">
                                        <div class="bg-red-50 border-l-4 border-red-400 p-3 rounded-r">
                                            <p class="font-semibold text-red-900 mb-1">SaborMap no garantiza:</p>
                                            <ul class="space-y-1 list-disc list-inside text-red-800">
                                                <li>La exactitud de la información de terceros (horarios, precios)</li>
                                                <li>La disponibilidad de mesas o productos en los locales</li>
                                                <li>La calidad del servicio en los establecimientos listados</li>
                                            </ul>
                                        </div>
                                        <p class="mt-3">Recomendamos siempre verificar directamente con el local antes de visitar. Las reseñas son opiniones personales y no representan la opinión de SaborMap.</p>
                                    </div>
                                </section>

                                <section class="mb-6">
                                    <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <span class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 text-sm font-bold">6</span>
                                        Modificaciones y terminación
                                    </h4>
                                    <p class="text-sm text-gray-600 ml-10">
                                        Podemos modificar estos términos en cualquier momento. Los cambios importantes se notificarán por email o notificación en la app. 
                                        Continuar usando el servicio después de los cambios implica aceptación. Podemos suspender cuentas que violen estos términos.
                                    </p>
                                </section>

                                <section class="mb-6">
                                    <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <span class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 text-sm font-bold">7</span>
                                        Ley aplicable
                                    </h4>
                                    <p class="text-sm text-gray-600 ml-10">
                                        Estos términos se rigen por las leyes de la República Argentina. Cualquier disputa se resolverá en los tribunales de la Ciudad Autónoma de Buenos Aires.
                                    </p>
                                </section>

                                <div class="border-t border-gray-200 pt-4 mt-6">
                                    <p class="text-sm text-gray-500 text-center">
                                        ¿Dudas sobre los términos? Escríbenos a 
                                        <a href="mailto:legal@sabormap.com" class="text-primary hover:underline">legal@sabormap.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="border-t border-gray-200 p-4 bg-gray-50 flex-shrink-0 flex justify-between items-center">
                            <button onclick="downloadTermsPDF()" class="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center gap-2 transition">
                                <i class="fas fa-download"></i> Descargar PDF
                            </button>
                            <div class="flex gap-3">
                                <button onclick="closeTermsModal()" class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition">
                                    Cerrar
                                </button>
                                <button onclick="acceptTerms()" class="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-medium transition flex items-center gap-2">
                                    <i class="fas fa-check"></i> Acepto los términos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.insertAdjacentHTML('beforeend', modalHTML);
            document.body.style.overflow = 'hidden';
        }

        function closeTermsModal() {
            const modal = document.getElementById('termsModal');
            if (modal) {
                modal.querySelector('.modal-enter').style.opacity = '0';
                setTimeout(() => {
                    modal.remove();
                    document.body.style.overflow = 'auto';
                }, 300);
            }
        }

        function acceptTerms() {
            localStorage.setItem('sabormap_terms_accepted', 'true');
            localStorage.setItem('sabormap_terms_date', new Date().toISOString());
            showToast('Has aceptado los Términos de Uso');
            closeTermsModal();
            addPoints(5);
        }

        function downloadTermsPDF() {
            showToast('Generando PDF... Descarga iniciada');
        }

        function filterBlog(category) {
            document.querySelectorAll('.blog-filter').forEach(btn => {
                btn.classList.remove('active', 'bg-primary', 'text-white');
                btn.classList.add('bg-gray-100', 'text-gray-700');
                
                if (btn.dataset.filter === category) {
                    btn.classList.add('active', 'bg-primary', 'text-white');
                    btn.classList.remove('bg-gray-100', 'text-gray-700');
                }
            });

            const articles = document.querySelectorAll('.blog-article');
            
            articles.forEach(article => {
                if (category === 'all') {
                    article.classList.remove('hidden');
                } else {
                    if (article.dataset.category === category) {
                        article.classList.remove('hidden');
                    } else {
                        article.classList.add('hidden');
                    }
                }
            });

            const categoryNames = {
                'all': 'Últimos artículos',
                'trends': 'Tendencias',
                'recipes': 'Recetas',
                'interviews': 'Entrevistas'
            };
            
            showToast(`Mostrando: ${categoryNames[category]}`);
        }

        function showAllArticles() {
            const hiddenArticles = document.querySelectorAll('.blog-article.hidden');
            hiddenArticles.forEach(article => {
                article.classList.remove('hidden');
                article.classList.add('animate-fade-in');
            });

            const btn = event.target.closest('button');
            btn.innerHTML = '<i class="fas fa-check mr-2"></i> Todos los artículos cargados';
            btn.classList.add('bg-green-100', 'text-green-800', 'cursor-default');
            btn.classList.remove('hover:bg-gray-200', 'group');
            btn.onclick = null;

            showToast('¡Todos los artículos disponibles ahora!');
            addPoints(3);
        }

        function submitCriticApplication(e) {
            e.preventDefault();
            
            const form = e.target;
            const nombre = form.nombre.value;
            const telefono = form.telefono.value;
            const motivo = form.motivo.value;
            const instagram = form.instagram.value;
            const blog = form.blog.value;
            
            const mensaje = `*📝 NUEVA SOLICITUD DE CRÍTICO - SaborMap*%0A%0A` +
                `*👤 Nombre:*%0A${nombre}%0A%0A` +
                `*📞 Teléfono:*%0A${telefono}%0A%0A` +
                `*💬 Motivación:*%0A${motivo}%0A%0A` +
                (instagram ? `*📸 Instagram:*%0A${instagram}%0A%0A` : '') +
                (blog ? `*🌐 Blog/YouTube:*%0A${blog}%0A%0A` : '') +
                `*Enviado desde:* SaborMap Web%0A` +
                `*Fecha:* ${new Date().toLocaleString('es-ES')}`;
            
            const numeroWhatsApp = '5356578961';
            const whatsappURL = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
            
            closeCommunityModal('criticModal');
            showToast('Redirigiendo a WhatsApp...');
            
            setTimeout(() => {
                window.open(whatsappURL, '_blank');
            }, 800);
            
            form.reset();
        }

        function showRewardsModal() {
            openCommunityModal('rewardsModal');
        }

        function updateRewardsDisplay() {
            const userPointsEl = document.getElementById('userPoints');
            const userRewardsEl = document.getElementById('userRewards');
            
            if (userPointsEl) {
                userPointsEl.textContent = `${userPoints} pts`;
            }
            
            if (userRewardsEl) {
                if (isRewardsMember || userPoints > 0) {
                    userRewardsEl.classList.remove('hidden');
                } else {
                    userRewardsEl.classList.add('hidden');
                }
            }
            
            const userLevelSection = document.getElementById('userLevelSection');
            const currentPointsDisplay = document.getElementById('currentPointsDisplay');
            const levelProgressBar = document.getElementById('levelProgressBar');
            const currentLevelName = document.getElementById('currentLevelName');
            const nextLevelText = document.getElementById('nextLevelText');
            const joinRewardsSection = document.getElementById('joinRewardsSection');
            
            if (isRewardsMember) {
                if (userLevelSection) userLevelSection.classList.remove('hidden');
                if (joinRewardsSection) joinRewardsSection.classList.add('hidden');
                
                let level = 'Explorador';
                let nextLevelPoints = 150;
                let progress = 0;
                
                if (userPoints >= 1000) {
                    level = 'Gourmet Master';
                    nextLevelPoints = 0;
                    progress = 100;
                } else if (userPoints >= 500) {
                    level = 'Foodie Experto';
                    nextLevelPoints = 1000;
                    progress = ((userPoints - 500) / 500) * 100;
                } else if (userPoints >= 150) {
                    level = 'Crítico';
                    nextLevelPoints = 500;
                    progress = ((userPoints - 150) / 350) * 100;
                } else {
                    level = 'Explorador';
                    nextLevelPoints = 150;
                    progress = (userPoints / 150) * 100;
                }
                
                if (currentLevelName) currentLevelName.textContent = level;
                if (currentPointsDisplay) currentPointsDisplay.textContent = userPoints;
                if (levelProgressBar) levelProgressBar.style.width = `${progress}%`;
                
                if (nextLevelText) {
                    if (nextLevelPoints > 0) {
                        const pointsNeeded = nextLevelPoints - userPoints;
                        nextLevelText.textContent = `${pointsNeeded} puntos para el siguiente nivel`;
                    } else {
                        nextLevelText.textContent = '¡Has alcanzado el nivel máximo! 🏆';
                    }
                }
            } else {
                if (userLevelSection) userLevelSection.classList.add('hidden');
                if (joinRewardsSection) joinRewardsSection.classList.remove('hidden');
            }
        }

        // Prevenir zoom en inputs en iOS
        document.querySelectorAll('input, select, textarea').forEach(el => {
            el.addEventListener('focus', () => {
                document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0');
            });
            el.addEventListener('blur', () => {
                document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
            });
        });

        // Pull to refresh
        let touchStartY = 0;
        document.addEventListener('touchstart', e => {
            touchStartY = e.touches[0].clientY;
        });

        document.addEventListener('touchend', e => {
            const touchEndY = e.changedTouches[0].clientY;
            if (touchEndY - touchStartY > 150 && window.scrollY === 0) {
                showToast('Actualizando...');
                setTimeout(() => location.reload(), 500);
            }
        });

        // Scroll horizontal con rueda del mouse
        document.addEventListener('wheel', function(e) {
            const menuContainer = e.target.closest('.menu-tabs-wrapper');
            if (menuContainer) {
                const scrollContainer = menuContainer.querySelector('.menu-tabs-scroll');
                if (scrollContainer) {
                    if (e.deltaY !== 0) {
                        e.preventDefault();
                        scrollContainer.scrollLeft += e.deltaY;
                        updateMenuNavButtons();
                    }
                }
            }
        }, { passive: false });

        // Tecla Escape
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
                closeHelpModal();
                closeReportModal();
                closePrivacyModal();
                closeTermsModal();
                ['registerPlaceModal', 'criticModal', 'rewardsModal', 'eventsModal', 'blogModal'].forEach(id => {
                    closeCommunityModal(id);
                });
            }
        });

        // ============================================
// SISTEMA DE AUTENTICACIÓN SABORMAP
// ============================================

// Estado global de autenticación
let currentUser = null;
let authToken = null;

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', () => {
    checkAuthStatus();
    initAuthEventListeners();
});

// Verificar estado de sesión
function checkAuthStatus() {
    const storedUser = localStorage.getItem('sabormap_user');
    const storedToken = localStorage.getItem('sabormap_token');
    
    if (storedUser && storedToken) {
        currentUser = JSON.parse(storedUser);
        authToken = storedToken;
        updateUIForLoggedUser();
    } else {
        updateUIForGuest();
    }
}

// Actualizar UI para usuario logueado
function updateUIForLoggedUser() {
    const header = document.querySelector('header .flex.items-center.gap-4');
    const authButtons = header.querySelector('.flex.items-center.gap-2:last-child');
    
    if (authButtons) {
        authButtons.remove();
    }
    
    const template = document.getElementById('userLoggedTemplate');
    const clone = template.content.cloneNode(true);
    
    // Actualizar datos del usuario
    const initials = currentUser.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    clone.getElementById('userInitials').textContent = initials;
    clone.getElementById('headerUserName').textContent = currentUser.name.split(' ')[0];
    
    header.appendChild(clone);
    
    // Actualizar dropdown
    document.getElementById('dropdownUserName').textContent = currentUser.name;
    document.getElementById('dropdownUserEmail').textContent = currentUser.email;
    document.getElementById('dropdownPoints').textContent = userPoints;
    document.getElementById('dropdownFavCount').textContent = favorites.length;
}

// Actualizar UI para invitado
function updateUIForGuest() {
    const header = document.querySelector('header .flex.items-center.gap-4');
    const userMenu = header.querySelector('#userMenuContainer');
    
    if (userMenu) {
        userMenu.remove();
    }
    
    const template = document.getElementById('authButtonsTemplate');
    const clone = template.content.cloneNode(true);
    header.appendChild(clone);
}

// Abrir modal de autenticación
function openAuthModal(type) {
    closeAllAuthModals();
    const modalId = type === 'login' ? 'loginModal' : 'registerModal';
    const modal = document.getElementById(modalId);
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Animación de entrada
    setTimeout(() => {
        modal.querySelector('.modal-enter').style.opacity = '1';
        modal.querySelector('.modal-enter').style.transform = 'scale(1)';
    }, 10);
}

// Cerrar modal
function closeAuthModal(modalId) {
    const modal = document.getElementById(modalId);
    const content = modal.querySelector('.modal-enter');
    
    content.style.opacity = '0';
    content.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        
        // Limpiar formularios
        if (modalId === 'loginModal') {
            document.getElementById('loginForm').reset();
        } else if (modalId === 'registerModal') {
            document.getElementById('registerForm').reset();
            document.getElementById('passwordStrength').classList.add('hidden');
        }
    }, 200);
}

// Cerrar todos los modales
function closeAllAuthModals() {
    ['loginModal', 'registerModal', 'forgotPasswordModal'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
}

// Cambiar entre login y registro
function switchAuthModal(type) {
    closeAllAuthModals();
    openAuthModal(type);
}

// Mostrar recuperar contraseña
function showForgotPassword() {
    closeAuthModal('loginModal');
    document.getElementById('forgotPasswordModal').classList.remove('hidden');
}

// Toggle menú de usuario
function toggleUserMenu() {
    const dropdown = document.getElementById('userProfileDropdown');
    const isHidden = dropdown.classList.contains('hidden');
    
    if (isHidden) {
        dropdown.classList.remove('hidden');
        setTimeout(() => {
            dropdown.classList.remove('scale-95', 'opacity-0');
            dropdown.classList.add('scale-100', 'opacity-100');
        }, 10);
    } else {
        dropdown.classList.remove('scale-100', 'opacity-100');
        dropdown.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            dropdown.classList.add('hidden');
        }, 200);
    }
}

// Cerrar menú al hacer click fuera
document.addEventListener('click', (e) => {
    const container = document.getElementById('userMenuContainer');
    const dropdown = document.getElementById('userProfileDropdown');
    
    if (container && !container.contains(e.target) && !dropdown.classList.contains('hidden')) {
        toggleUserMenu();
    }
});

// ============================================
// MANEJO DE FORMULARIOS
// ============================================

// Login
async function handleLogin(e) {
    e.preventDefault();
    const btn = document.getElementById('loginSubmitBtn');
    const originalContent = btn.innerHTML;
    
    // Mostrar loading
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Iniciando sesión...';
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    try {
        // Simulación de API call - reemplazar con tu endpoint real
        const response = await simulateAuthAPI('login', { email, password });
        
        if (response.success) {
            currentUser = response.user;
            authToken = response.token;
            
            // Guardar en localStorage
            const storage = rememberMe ? localStorage : sessionStorage;
            storage.setItem('sabormap_user', JSON.stringify(currentUser));
            storage.setItem('sabormap_token', authToken);
            
            // Sincronizar favoritos
            if (response.user.favorites) {
                favorites = response.user.favorites;
                localStorage.setItem('favorites', JSON.stringify(favorites));
            }
            
            // Sincronizar puntos
            if (response.user.points) {
                userPoints = response.user.points;
                localStorage.setItem('sabormap_points', userPoints);
            }
            
            showToast(`¡Bienvenido de vuelta, ${currentUser.name}! 🎉`);
            closeAuthModal('loginModal');
            updateUIForLoggedUser();
            
            // Redirigir si había una acción pendiente
            const pendingAction = sessionStorage.getItem('pendingAction');
            if (pendingAction) {
                sessionStorage.removeItem('pendingAction');
                executePendingAction(pendingAction);
            }
        } else {
            throw new Error(response.message || 'Credenciales incorrectas');
        }
    } catch (error) {
        showToast(error.message, 'error');
        btn.innerHTML = originalContent;
        btn.disabled = false;
    }
}

// Registro
async function handleRegister(e) {
    e.preventDefault();
    const btn = document.getElementById('registerSubmitBtn');
    const originalContent = btn.innerHTML;
    
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creando cuenta...';
    
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const phone = document.getElementById('regPhone').value;
    const password = document.getElementById('regPassword').value;
    const passwordConfirm = document.getElementById('regPasswordConfirm').value;
    const newsletter = document.getElementById('newsletter').checked;
    
    // Validaciones
    if (password !== passwordConfirm) {
        showToast('Las contraseñas no coinciden', 'error');
        btn.innerHTML = originalContent;
        btn.disabled = false;
        return;
    }
    
    if (password.length < 6) {
        showToast('La contraseña debe tener al menos 6 caracteres', 'error');
        btn.innerHTML = originalContent;
        btn.disabled = false;
        return;
    }
    
    try {
        const response = await simulateAuthAPI('register', {
            name,
            email,
            phone,
            password,
            newsletter
        });
        
        if (response.success) {
            currentUser = response.user;
            authToken = response.token;
            
            localStorage.setItem('sabormap_user', JSON.stringify(currentUser));
            localStorage.setItem('sabormap_token', authToken);
            
            // Bonus de bienvenida
            addPoints(100);
            
            showToast('¡Cuenta creada exitosamente! 🎉 +100 pts de bienvenida');
            closeAuthModal('registerModal');
            updateUIForLoggedUser();
            
            // Mostrar tutorial de bienvenida
            setTimeout(() => showWelcomeTutorial(), 500);
        } else {
            throw new Error(response.message || 'Error al crear cuenta');
        }
    } catch (error) {
        showToast(error.message, 'error');
        btn.innerHTML = originalContent;
        btn.disabled = false;
    }
}

// Recuperar contraseña
async function handleForgotPassword(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const email = document.getElementById('forgotEmail').value;
    
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    
    try {
        // Simular envío
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        showToast('📧 Revisa tu correo para restablecer tu contraseña');
        closeAuthModal('forgotPasswordModal');
        
        setTimeout(() => {
            openAuthModal('login');
            showToast('Se ha enviado un enlace a ' + email);
        }, 300);
    } catch (error) {
        showToast('Error al enviar el correo', 'error');
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-paper-plane"></i><span>Enviar enlace</span>';
    }
}

// Logout
function handleLogout() {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        // Guardar favoritos y puntos en el servidor antes de salir
        syncUserData();
        
        // Limpiar datos locales
        currentUser = null;
        authToken = null;
        localStorage.removeItem('sabormap_user');
        localStorage.removeItem('sabormap_token');
        sessionStorage.removeItem('sabormap_user');
        sessionStorage.removeItem('sabormap_token');
        
        showToast('Sesión cerrada correctamente');
        updateUIForGuest();
        toggleUserMenu(); // Cerrar dropdown
        
        // Recargar para limpiar estado
        setTimeout(() => location.reload(), 1000);
    }
}

// ============================================
// FUNCIONES AUXILIARES
// ============================================

// Toggle visibilidad de contraseña
function togglePassword(inputId, btn) {
    const input = document.getElementById(inputId);
    const icon = btn.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Verificar fuerza de contraseña
function checkPasswordStrength(password) {
    const strengthDiv = document.getElementById('passwordStrength');
    const bars = [
        document.getElementById('strength1'),
        document.getElementById('strength2'),
        document.getElementById('strength3'),
        document.getElementById('strength4')
    ];
    const text = document.getElementById('strengthText');
    
    if (password.length === 0) {
        strengthDiv.classList.add('hidden');
        return;
    }
    
    strengthDiv.classList.remove('hidden');
    
    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.length >= 10) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9!@#$%^&*]/.test(password)) strength++;
    
    const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500'];
    const texts = ['Muy débil', 'Débil', 'Media', 'Fuerte'];
    
    bars.forEach((bar, index) => {
        if (index < strength) {
            bar.className = `flex-1 ${colors[strength - 1]} rounded-full transition-colors duration-300`;
        } else {
            bar.className = 'flex-1 bg-gray-200 rounded-full transition-colors duration-300';
        }
    });
    
    text.textContent = texts[strength - 1] || 'Muy débil';
    text.className = `text-xs ${strength === 4 ? 'text-green-600' : strength === 3 ? 'text-yellow-600' : 'text-red-600'}`;
}

// Login social
function socialLogin(provider) {
    showToast(`Conectando con ${provider}...`);
    
    // Simular redirección OAuth
    setTimeout(() => {
        // En producción, redirigir a: /auth/${provider}
        showToast(`Por favor completa la autenticación con ${provider}`);
    }, 1000);
}

// Sincronizar datos del usuario
async function syncUserData() {
    if (!currentUser || !authToken) return;
    
    try {
        // Sincronizar favoritos y puntos con el servidor
        await simulateAuthAPI('sync', {
            favorites,
            points: userPoints,
            userId: currentUser.id
        });
    } catch (error) {
        console.error('Error al sincronizar:', error);
    }
}

// Simulación de API (reemplazar con fetch real)
function simulateAuthAPI(action, data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            switch(action) {
                case 'login':
                    if (data.email === 'demo@sabormap.com' && data.password === '123456') {
                        resolve({
                            success: true,
                            token: 'fake-jwt-token-' + Date.now(),
                            user: {
                                id: 1,
                                name: 'Usuario Demo',
                                email: data.email,
                                avatar: null,
                                favorites: [],
                                points: 150
                            }
                        });
                    } else {
                        reject(new Error('Credenciales incorrectas. Usa demo@sabormap.com / 123456'));
                    }
                    break;
                    
                case 'register':
                    resolve({
                        success: true,
                        token: 'fake-jwt-token-' + Date.now(),
                        user: {
                            id: Date.now(),
                            name: data.name,
                            email: data.email,
                            phone: data.phone,
                            avatar: null,
                            favorites: [],
                            points: 100
                        }
                    });
                    break;
                    
                case 'sync':
                    resolve({ success: true });
                    break;
                    
                default:
                    reject(new Error('Acción no válida'));
            }
        }, 1000);
    });
}

// Mostrar tutorial de bienvenida
function showWelcomeTutorial() {
    showToast('🎉 ¡Bienvenido a SaborMap! Completa tu perfil para ganar +50 pts');
    // Aquí puedes implementar un tour guiado
}

// Ejecutar acción pendiente después de login
function executePendingAction(action) {
    switch(action) {
        case 'addFavorite':
            // Ejecutar acción de favorito
            break;
        case 'writeReview':
            openReviewModal();
            break;
        default:
            break;
    }
}

// Guardar acción pendiente si el usuario no está logueado
function requireAuthForAction(action) {
    if (!currentUser) {
        sessionStorage.setItem('pendingAction', action);
        showToast('Inicia sesión para continuar');
        openAuthModal('login');
        return false;
    }
    return true;
}

// Inicializar listeners
function initAuthEventListeners() {
    // Cerrar modales con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllAuthModals();
        }
    });
}

        // Inicializar
        renderPlaces();
        updateFavCount();
        updateRewardsDisplay();
   
