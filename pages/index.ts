import { defineNuxtModule, extendPages } from '@nuxt/kit'
import { resolve } from 'pathe'

export default defineNuxtModule({
  setup() {
    extendPages((pages) => {
      // Add /test page
      pages.push({
        name: 'Product Details Page',
        path: '/products/[id]',
        file: resolve(__dirname, './products/[id].vue')
      })
    })
  }
})
