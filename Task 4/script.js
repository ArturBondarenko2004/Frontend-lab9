class Form {
	constructor(element) {
		 this.element = element;
		 this.fields = [];
		 this.buttons = [];

		 this.onSubmit = this.onSubmit.bind(this);
		 this.element.addEventListener("submit", this.onSubmit);
	}

	addField(field) {
		 this.fields.push(field);
		 this.element.appendChild(field);
	}

	addButton(button) {
		 this.buttons.push(button);
		 this.element.appendChild(button);
		 button.addEventListener("click", this.onSubmit);
	}

	onSubmit(event) {
		 event.preventDefault();

		 for (let i = 0; i < this.fields.length; i++) {
			  const field = this.fields[i];

			  if (!field.value.trim()) {
					this.markFieldAsError(field);
					return;
			  }
			  if (field.tagName === "SELECT" && !field.value) {
					this.markFieldAsError(field);
					return;
			  } else {
					this.clearError(field);
			  }
		 }

		 const checkbox = this.fields.find(field => field.type === "checkbox");

		 if (checkbox && !checkbox.checked) {
			  alert("Ви повинні погодитися з політикою конфіденційності");
			  return;
		 }

		 alert("Форма відправлена!");
	}

	markFieldAsError(field) {
		 field.classList.add("error");
	}

	clearError(field) {
		 field.classList.remove("error");
	}
}

const form = new Form(document.querySelector("#form"));
const input1 = document.createElement("input");
input1.type = "text";
input1.placeholder = "Ім'я";
form.addField(input1);

const input2 = document.createElement("input");
input2.type = "text";
input2.placeholder = "Прізвище";
form.addField(input2);

const select = document.createElement("select");
const option1 = document.createElement("option");
option1.value = "Ukraine";
option1.textContent = "Україна";
const option2 = document.createElement("option");
option2.value = "China";
option2.textContent = "Китай";
const option3 = document.createElement("option");
option3.value = "USA";
option3.textContent = "США";
select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);
form.addField(select);

const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.name = "agree";
form.addField(checkbox);

const privacyLabel = document.createElement("label");
privacyLabel.textContent = "Політика конфіденційності";
privacyLabel.htmlFor = "agree";
form.element.appendChild(privacyLabel);

const button = document.createElement("button");
button.type = "submit";
button.textContent = "Відправити";
form.addButton(button);
