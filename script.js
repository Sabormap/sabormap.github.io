
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
   
