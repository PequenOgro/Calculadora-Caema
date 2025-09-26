// src/plugins/Vuetify.ts
import 'vuetify/styles'               // estilos base do Vuetify (obrigatório)
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// (opcional, mas recomendado se você usa <v-icon>)
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  // opcional:
  // theme: { defaultTheme: 'light' },
})

export default vuetify
