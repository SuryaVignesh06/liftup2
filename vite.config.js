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
        mentorRishi: 'mentor-rishi.html',
      },
    },
  },
})
