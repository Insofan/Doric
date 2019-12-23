import { DoricViewNode, LEFT, RIGHT, CENTER_X, CENTER_Y, TOP, BOTTOM, toPixelString, toRGBAString } from "./DoricViewNode";

export class DoricTextNode extends DoricViewNode {
    textElement!: HTMLElement
    build(): HTMLElement {
        const div = document.createElement('div')
        div.style.display = "flex"
        this.textElement = document.createElement('span')
        div.appendChild(this.textElement)
        div.style.justifyContent = "center"
        div.style.alignItems = "center"
        return div
    }

    blendProps(v: HTMLParagraphElement, propName: string, prop: any) {
        switch (propName) {
            case 'text':
                this.textElement.innerText = prop
                break
            case 'textSize':
                v.style.fontSize = toPixelString(prop)
                break
            case 'textColor':
                v.style.color = toRGBAString(prop)
                break
            case 'textAlignment':
                const gravity: number = prop
                if ((gravity & LEFT) === LEFT) {
                    v.style.justifyContent = "flex-start"
                } else if ((gravity & RIGHT) === RIGHT) {
                    v.style.justifyContent = "flex-end"
                } else if ((gravity & CENTER_X) === CENTER_X) {
                    v.style.justifyContent = "center"
                }
                if ((gravity & TOP) === TOP) {
                    v.style.alignItems = "flex-start"
                } else if ((gravity & BOTTOM) === BOTTOM) {
                    v.style.alignItems = "flex-end"
                } else if ((gravity & CENTER_Y) === CENTER_Y) {
                    v.style.alignItems = "center"
                }
                break
            default:
                super.blendProps(v, propName, prop)
                break
        }
    }

}