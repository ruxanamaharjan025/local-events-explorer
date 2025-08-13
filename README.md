# Local Event Explorer

A React app to explore and filter local events by title, city, and category.

## Features

- Search events by title
- Filter events by city and category
- Responsive design with Tailwind CSS
- Clean, modular component structure

## Project Structure

```
src/
  components/
    NavBar/
      NavBar.jsx
    EventList.jsx
    EventCard.jsx
    FilterBar.jsx
  layouts/
    MainLayout.jsx
  pages/
    HomePage.jsx
  data/
    events.json
  App.jsx
```

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm start
   ```

3. **Open in your browser:**
   ```
   http://localhost:3000
   ```

## Customization

- Add or edit events in `src/data/events.json`.
- Update styles using [Tailwind CSS](https://tailwindcss.com/).

## Contributing

Pull requests are welcome! For major changes, please open an issue first.

## License

[MIT](LICENSE)
