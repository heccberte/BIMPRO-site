(function () {

	// BURGER
	document.addEventListener('click', burgerInit)

	function burgerInit(e) {
		const burgerIcon = e.target.closest('.burger')
		const burgerNavLink = e.target.closest('.nav__link')

		if (!burgerIcon && !burgerNavLink) {
			return
		}

		if (document.documentElement.clientWidth > 1200) {
			return
		}

		if (burgerIcon) {
			e.preventDefault()
		}

		if (!document.body.classList.contains('body--opened-menu')) {
			document.body.classList.add('body--opened-menu')
		} else {
			document.body.classList.remove('body--opened-menu')
		}
	}
	// МОДАЛЬНОЕ ОКНО
	const modalWindow = document.querySelector('.modal')
	const openModal = document.querySelectorAll('.link-modal')
	const modalCancel = document.querySelector('.modal__cancel')
	openModal.forEach(el => {
		el.addEventListener('click', (e) => {
			e.preventDefault()
			document.body.classList.add('modal--show')
		})
	})
	
	modalWindow.addEventListener('click', (e) => {
		e.preventDefault()
		const target = e.target
		if (target.closest('.modal__cancel') || target.classList == 'modal') {
			document.body.classList.remove('modal--show')
		}
	})

	// СЛАЙДЕР HEADER
	const swiper = new Swiper('.header-hero__slider', {

		spaceBetween: 22,
		slidesPerView: 1,

		// Navigation arrows
		navigation: {
			nextEl: '.header-hero__slider-next',
			prevEl: '.header-hero__slider-prev',
		},

		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: "true",
		},

		autoplay: {
			delay: 3000,
			stopOnLastSlide: false,
			disableOneInteraction: false
		}
	});
	// СЛАЙДЕР INFORMATION
	new Swiper('.information__swiper', {

		spaceBetween: 22,
		slidesPerView: 1,

		// Navigation arrows
		navigation: {
			nextEl: '.information__slider-next',
			prevEl: '.information__slider-prev',
		},

		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: "true",
		},

		autoplay: {
			delay: 3000,
			stopOnLastSlide: false,
			disableOneInteraction: false
		}
	});
// Слайдер сми о нас
	new Swiper('.about-news__swiper', {

		spaceBetween: 22,
		slidesPerView: 1,

		pagination: {
			el: '.about-news__pagination',
			type: 'fraction',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.about-news__slider-next',
			prevEl: '.about-news__slider-prev',
		},

		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: "true",
		},
	});

	new Swiper('.news__swiper', {

		spaceBetween: 22,
		slidesPerView: 1,

		pagination: {
			el: '.news__pagination',
			type: 'fraction',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.news__slider-next',
			prevEl: '.news__slider-prev',
		},

		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: "true",
		},
	});

	// ТАБЫ

	const tabControls = document.querySelector('.tab-controls')
	const tabControlList = document.querySelectorAll('.tab-controls__item')

	tabControlList.forEach(el => {
		el.addEventListener('click', (e) => {
			const tabControlItem = e.currentTarget
			const tabControlIcon = tabControlItem.querySelector('.tab-controls__icon')
			const iconActive = document.querySelector('.tab-controls__icon--active')
			if (!tabControlIcon) return
			if (tabControlIcon.classList.contains('tab-controls__icon--active')) return


			if (iconActive) {
				iconActive.classList.remove('tab-controls__icon--active')
			}
			
			tabControlIcon.classList.add('tab-controls__icon--active')
		})
	})

	tabControls.addEventListener('click', toggleTab)

	function toggleTab(e) {

		const tabControl = e.target.closest('.tab-controls__link')

		if (!tabControl) return
		e.preventDefault()
		if (tabControl.classList.contains('tab-controls__link--active')) return

		const tabContentID = tabControl.getAttribute('href')
		const tabContent = document.querySelector(tabContentID)
		const activeControl = document.querySelector('.tab-controls__link--active')
		const activeContent = document.querySelector('.tab-content--show')


		if (activeControl) {
			activeControl.classList.remove('tab-controls__link--active')
		}

		if (activeContent) {
			activeContent.classList.remove('tab-content--show')
		}
		


		tabControl.classList.add('tab-controls__link--active')
		tabContent.classList.add('tab-content--show')
	}


	// АККОРДЕОН

	const accordionLists = document.querySelectorAll('.accordion-list')


	accordionLists.forEach(el => {

		el.addEventListener('click', (e) => {

			const accordionList = e.currentTarget
			const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
			const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

			const accordionControl = e.target.closest('.accordion-list__control')

			if (!accordionControl) return
			e.preventDefault()
			const accordionItem = accordionControl.parentElement;
			const accordionContent = accordionControl.nextElementSibling;

			if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
				accordionOpenedItem.classList.remove('accordion-list__item--opened');
				accordionOpenedContent.style.maxHeight = null;
			}

			accordionItem.classList.toggle('accordion-list__item--opened')

			if (accordionItem.classList.contains('accordion-list__item--opened')) {
				accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
			} else {
				accordionContent.style.maxHeight = null;
			}

		});
	});

		// КЛИК ССЫЛОК ПРОЕКТОВ

		const projectsList = document.querySelectorAll('.projects__link')
		const resetProjectsList = document.querySelector('.projects__link--reset')
		
		resetProjectsList.addEventListener('click', () => {
			projectsList.forEach(el => {
				el.classList.remove('projects__link--active')
			})
	})

		projectsList.forEach(el => {
			el.addEventListener('click', (e) => {
				e.preventDefault()
				el.classList.toggle('projects__link--active')

				if (el.classList.contains('projects__link--reset')) {
					el.classList.remove('projects__link--active')
					return
				}
			})
		})

		const projectItemLink = document.querySelectorAll('.projects__item-link')
		projectItemLink.forEach(el => {
			el.addEventListener('click', (e) => {
				e.preventDefault()
			})
		})

		// ПРОГРАММ2 ССЫЛКИ

		const programLinks = document.querySelectorAll('.program2__tab-link')
		programLinks.forEach(el => {
			el.addEventListener('click', (e) => {
				e.preventDefault()
				const programID = el.getAttribute('href')
				const programContent = document.querySelector(programID)
				const prgmContentActive = document.querySelector('.program2__tab-content--show')
				const prgmLinkActive = document.querySelector('.program2__tab-link--active')
				// const programIcon = el.querySelector('')
			
				if (prgmLinkActive) {
					prgmLinkActive.classList.remove('program2__tab-link--active')
				}

				if (prgmContentActive) {
					prgmContentActive.classList.remove('program2__tab-content--show')
				}

				el.classList.add('program2__tab-link--active')
				programContent.classList.add('program2__tab-content--show')
			})
		})

		const programItems = document.querySelectorAll('.program2__tab-item')
		programItems.forEach(el => {
			el.addEventListener('click', (e) => {
				const programItem = e.currentTarget
				const programIcon = programItem.querySelector('.program-controls__icon')
				const programItemActive = document.querySelector('.program-controls__icon--active')

				if (!programIcon) return
				if (programIcon.classList.contains('tab-controls__icon--active')) return

				if (programItemActive) {
					programItemActive.classList.remove('program-controls__icon--active')
				}

				programIcon.classList.add('program-controls__icon--active')
			})
		})
		
})()