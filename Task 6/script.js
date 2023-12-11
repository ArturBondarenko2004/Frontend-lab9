class Notification {
	constructor() {
	  this.container = document.createElement('div');
	  this.container.style.position = 'fixed';
	  this.container.style.bottom = '20px';
	  this.container.style.right = '20px';
	  this.container.style.width = '400px'; 
	  this.container.style.padding = '20px'; 
	  this.container.style.borderRadius = '15px';
	  this.container.style.display = 'none';
	  document.body.appendChild(this.container);
 
	  this.queue = [];
	  this.isShowing = false;
	  this.timeoutId = null;
	}
 
	show(message, style) {
	  const notification = document.createElement('div');
	  notification.textContent = message;
	  notification.style.marginBottom = '10px';
	  notification.style.height = '60px'; 
 
	  switch (style) {
		 case 'success':
			notification.style.backgroundColor = '#4CAF50';
			notification.style.color = 'white';
			notification.style.fontSize = '25px';
			notification.style.borderRadius = '15px';
			break;
		 case 'error':
			notification.style.backgroundColor = '#FF0000';
			notification.style.color = 'white';
			notification.style.fontSize = '25px';
			notification.style.borderRadius = '15px';
			break;
		 default:
			notification.style.backgroundColor = '	#FFFF00';
			notification.style.color = 'white';
			notification.style.fontSize = '25px';
			notification.style.borderRadius = '15px';
	  }
 
	  this.queue.push({ notification, style });
	  this.showNext();
	}
 
	showNext() {
	  if (!this.isShowing && this.queue.length > 0) {
		 const { notification, style } = this.queue.shift();
		 this.container.appendChild(notification);
		 this.container.style.display = 'block';
		 this.isShowing = true;
 
		 if (this.timeoutId) {
			clearTimeout(this.timeoutId);
		 }
 
		 this.timeoutId = setTimeout(() => {
			this.close(notification);
		 }, 3000);
	  }
	}
 
	close(notification) {
	  this.container.removeChild(notification);
	  this.isShowing = false;
 
	  if (this.queue.length === 0) {
		 this.container.style.display = 'none';
	  } else {
		 this.showNext();
	  }
	}
 }
 
 const notification = new Notification();
 
 function showSuccessNotification() {
	notification.show('Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.', 'success');
 }
 
 function showErrorNotification() {
	notification.show('єПомилка!єПомилка!єПомилка!єПомилка!єПомилка!', 'error');
 }
 
 function showDefaultNotification() {
	notification.show('Lorem ipsum dolor sit amet.');
 }
 
 showSuccessNotification();
 showErrorNotification();
 showDefaultNotification();
 