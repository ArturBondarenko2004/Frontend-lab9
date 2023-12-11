class Slider {
	constructor(element) {
		 this.element = element;
		 this.slides = this.element.querySelectorAll('.slide');
		 this.currentSlideIndex = 0;
		 document.getElementById('prevButton').addEventListener('click', () => this.showPreviousSlide());
		 document.getElementById('nextButton').addEventListener('click', () => this.showNextSlide());
		 this.updateSlide();
	}

	showNextSlide() {
		 this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
		 this.updateSlide();
	}
	showPreviousSlide() {
		 this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
		 this.updateSlide();
	}

	updateSlide() {
		 this.slides.forEach((slide, index) => {
			  slide.style.display = index === this.currentSlideIndex ? 'block' : 'none';
		 });
	}
}

const slider = new Slider(document.querySelector('.slider'));
