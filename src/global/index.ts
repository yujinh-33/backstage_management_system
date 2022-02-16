import { App } from 'vue'
import registerElement from './register-element'
import naive from './register-naive'

export function registerApp(app: App): void {
  // registerElement(app)
  app.use(registerElement)
  app.use(naive)
}
