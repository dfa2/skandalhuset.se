import { defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  //documentDriven: true, // Enables proper content structuring
  sources: [
    {
      prefix: '/gigs', // Ensure the API can recognize this as `/api/_content/query/gigs`
      driver: 'fs' // File system storage for JSON/MD files
    }
  ],
  markdown: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: []
  }
});