class Tab {
	constructor(container) {
		 this.container = container;
		 this.tabs = [];
		 this.contents = [];
	}
	addTab(label, content) {
		 const tab = document.createElement("li");
		 tab.textContent = label;

		 this.tabs.push(tab);
		 this.container.querySelector("ul").appendChild(tab);

		 const contentDiv = document.createElement("div");
		 contentDiv.classList.add("content");
		 contentDiv.innerHTML = content;

		 this.contents.push(contentDiv);
		 this.container.appendChild(contentDiv);

		 tab.addEventListener("click", () => this.selectTab(this.tabs.indexOf(tab)));
	}
	selectTab(index) {
		 for (let i = 0; i < this.tabs.length; i++) {
			  this.tabs[i].classList.remove("active");
			  this.contents[i].classList.remove("active");
		 }

		 this.tabs[index].classList.add("active");
		 this.contents[index].classList.add("active");
	}
}

const tabs = new Tab(document.querySelector("#tabs"));

tabs.addTab("Вкладка 1", "<p>Lorem ipsum dolor sit amet.</p>");
tabs.addTab("Вкладка 2", "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempore.</p>");
tabs.addTab("Вкладка 3", "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi optio repellat libero, nulla distinctio cumque.</p>");

tabs.selectTab(0);