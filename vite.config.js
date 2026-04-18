import { defineConfig } from 'vite'

export default defineConfig({
  base: '/liftup2/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        cohortZero: 'cohort-zero.html',
        apply: 'apply.html',
        mentors: 'mentors.html',
        rishi: 'mentors/rishi.html',
        'syed-khasif': 'mentors/syed-khasif.html',
        surya: 'mentors/surya.html',
      },
    },
  },
})
