// HTML page processor.

// Functions.
	// Create and return an element with multiple attributes. Attribute name-value pairs are given as arrays.
	function createElement(elementName, ...attributes) {
		var Element = document.createElement(elementName)
		for (attribute of attributes) {
			Element.setAttribute(attribute[0], attribute[1])
		}
		return Element
	}

// Preprocessing (processing prior to loading the body written in the page file).
	// Set the <html> lang attribute to 'en-US'.
	document.documentElement.setAttribute('lang', 'en-US')

	// Head.
	const head = document.head
		// Default page stylesheet.
		head.prepend(createElement('link', ['href', '../stylesheets/page.css'], ['rel', 'stylesheet']))
		// Set viewport width to the device width.
		head.prepend(createElement('meta', ['content', 'width=device-width']))
		// The character encoding.
		head.prepend(createElement('meta', ['charset', 'utf-8']))
			

// Post-processing (processing after loading the body written in the page file).
window.addEventListener('DOMContentLoaded', () => {
	// Elements defined in the page's script.
		// Main.
		const main = document.querySelector('main')
			// Copy the document title into a top-level heading and prepend that heading to the top of the main element.
			const topHeading = document.createElement('h1')
			topHeading.innerHTML = document.title
			main.prepend(topHeading)
})