class Modal {
	constructor(modalId) {
		 this.modal = document.getElementById(modalId);
		 this.header = document.getElementById('modalHeader');
		 this.content = document.getElementById('modalContent');

		 this.draggable = false;
		 this.startX = 0;
		 this.startY = 0;

		 this.header.addEventListener('mousedown', (e) => this.startDrag(e));
		 document.addEventListener('mousemove', (e) => this.drag(e));
		 document.addEventListener('mouseup', () => this.stopDrag());
	}

	open() {
		 this.modal.style.display = 'block';
	}

	close() {
		 this.modal.style.display = 'none';
	}

	setContent(html) {
		 this.content.innerHTML = html;
	}

	startDrag(e) {
		 e.preventDefault();
		 this.draggable = true;
		 const coord = this.modal.getBoundingClientRect();
		 //top, left, right, bottom, width та height.
		 this.startX = e.clientX - coord.left;
		 this.startY = e.clientY - coord.top;
	}

	drag(e) {
		 if (this.draggable) {
			  const newX = e.clientX - this.startX;
			  const newY = e.clientY - this.startY;

			  this.modal.style.left = `${newX}px`;
			  this.modal.style.top = `${newY}px`;
		 }
	}

	stopDrag() {
		 this.draggable = false;
	}
}

const modal = new Modal('ModalWindow');

const openButton = document.getElementById('openButton');
const closeBtn = document.getElementById('closeBtn');

openButton.addEventListener('click', () => modal.open());
closeBtn.addEventListener('click', () => modal.close());

modal.setContent('<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, consectetur?</p>');