/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#f0f402',
        },
        normal: '#A8A77A80',
        fire: '#EE813080',
        water: '#6390F080',
        electric: '#F7D02C80',
        grass: '#7AC74C80',
        ice: '#96D9D680',
        fighting: '#C22E2880',
        poison: '#A33EA180',
        ground: '#E2BF6580',
        flying: '#A98FF380',
        psychic: '#F9558780',
        bug: '#A6B91A80',
        rock: '#B6A13680',
        ghost: '#73579780',
        dragon: '#6F35FC80',
        dark: '#70574680',
        steel: '#B7B7CE80',
        fairy: '#D685AD80',
      }
    },
  },
  plugins: [],
  safelist: ['bg-normal', 'bg-fire', 'bg-water', 'bg-electric', 'bg-grass', 'bg-ice', 'bg-fighting', 'bg-poison', 'bg-ground', 'bg-flying', 'bg-psychic', 'bg-bug', 'bg-rock', 'bg-ghost', 'bg-dragon', 'bg-dark', 'bg-steel', 'bg-fairy']
}

