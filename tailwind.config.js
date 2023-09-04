module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        backgroundI: "url('/fondoBg.png')",
      },
      colors: {
        'regal-opa': '#243c5a',
      },
    },
  },
  mode: 'jit',
  content: ['./node_modules/flowbite/**/*.js'],
  plugins: [require('flowbite/plugin')],
}
