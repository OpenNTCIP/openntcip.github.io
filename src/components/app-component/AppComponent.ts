import { LitElement, html, customElement, property } from 'lit-element'
import '../layout-component/LayoutComponent'

@customElement('my-app')
export class AppComponent extends LitElement {
	constructor() {
		super()
	}

	render() {
		return html` <layout-component></layout-component> `
	}

	createRenderRoot() {
		return this
	}
}
