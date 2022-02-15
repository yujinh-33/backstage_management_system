import 'element-plus/lib/theme-chalk/base.css'
import type { App } from 'vue'
import { ElButton } from 'element-plus'

const components = [ElButton]

export default function (app: App): void {
  components.forEach((item) => {
    app.component(item.name, item)
  })
}
