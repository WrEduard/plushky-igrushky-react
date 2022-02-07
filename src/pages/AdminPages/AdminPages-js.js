document.addEventListener('DOMContentLoaded', () => {
	document.addEventListener('click', documentClick);
	document.getElementById('discountCheckbox').addEventListener('change', checkCheckbox);
})

function documentClick(event) {
	const targetElement = event.target;

	// Клік по кнопці "Вихід"
	if (targetElement.id === 'exit') {
		window.open('./index.html', "_self");
	}
	if (targetElement.id === 'submit-product') {
		event.preventDefault();
		const form = document.forms[0];
		sendNewProductToServer(productToJSON(form));
	}
}

// Перевіряємо чекбокс "Знижка"
function checkCheckbox() {
	const checkbox = document.getElementById('discountCheckbox');
	const discountInput = document.getElementById('discountInput');

	if (checkbox.checked) {
		discountInput.disabled = false;
	} else {
		discountInput.disabled = true;
		discountInput.value = '';
	}
}

// Функція формування json-файлу з інформацією про товар
function productToJSON({ ...form }) {
	const newProduct = {
		"title": title.value,
		"price": {
			"initialPrice": +priceWithoutDiscount.value, "discount": discountInput ? +discountInput.value : 0,
			"priceWithDiscount": null,
		},
		"description": description.value,
		"quantity": 3,
		"labels": [],
		"mainImage": {
			"source": mainImage.value
		},
		"height": +height.value,
		"type": typeProduct.options[typeProduct.selectedIndex].value,
		"images": [],
	}

	if (labelNew.checked) {
		newProduct.labels.push("NEW");
	};

	if (discountCheckbox.checked) {
		newProduct.labels.push("SALE");
	};

	if (newProduct.price.discount > 0) {
		newProduct.price.priceWithDiscount = newProduct.price.initialPrice - (newProduct.price.initialPrice * newProduct.price.discount / 100);

	};

	const images = document.querySelectorAll('.images-wrapper input');
	images.forEach((img) => {
		if (img.value) {
			newProduct.images.push(img.value);
		}
	});
	console.log(newProduct);
	return JSON.stringify(newProduct);
}
