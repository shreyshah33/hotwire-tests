import { Controller } from "@hotwired/stimulus"
import { TemplateInstance } from "https://cdn.skypack.dev/@github/template-parts"

export default class extends Controller {
  static get targets() { return [ "template", "fieldset" ] }
  static get values() { return { placeholder: String } }

  insert({ target }) {
    const id = (new Date()).getTime().toString()
    const template = new TemplateInstance(this.templateTarget, { [this.placeholderValue]: id })

    target.before(template)
  }

  remove({ target }) {
    const fieldset = this.fieldsetTargets.find(fieldset => fieldset.contains(target))

    if (fieldset) fieldset.remove()
  }

  hide({ target }) {
    const fieldset = this.fieldsetTargets.find(fieldset => fieldset.contains(target))

    if (fieldset) fieldset.hidden = true
  }
}
