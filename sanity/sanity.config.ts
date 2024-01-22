import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// import {visionTool} from "@sanity/vision"
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'blog with nextjs',

  projectId: 's2aiexam',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
