# Adopt a Pet — React Router Practice

A pet adoption browsing app built as part of Codecademy's **Adopt a Pet** React Router v6 lesson. This repository contains the course starter project with routing implementation and additional fixes for API errors and image loading.

This is a learning project that uses local mock data, rather than live adoption listings.

## Features

- Browse pets and filter them by animal type.
- Search by pet name or shelter state abbreviation.
- Open individual pet detail pages.
- Navigate between pages with React Router v6.
- Highlight the active navigation link.
- Redirect to a dedicated page when pet details cannot be loaded.
- Display an error message when pet listings fail to load.
- Show local fallback images when remote pet photos cannot be loaded.

## Built With

- React 18
- React Router DOM 6
- Create React App (`react-scripts`)
- Mock Service Worker (MSW)
- Jest and React Testing Library
- CSS

## Getting Started

Install Node.js with npm, then run the following commands from the project directory:

```bash
npm ci
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. If port 3000 is occupied, use the address shown by the development server.

The app starts its mock service worker before rendering. No Petfinder API key or separate backend is required.

## Routes

| Path                     | Page                                              |
| ------------------------ | ------------------------------------------------- |
| `/`                      | All pets                                          |
| `/:type`                 | Pets of a selected type, such as `/dog` or `/cat` |
| `/:type/:id`             | Individual pet details                            |
| `/search?name=<query>`   | Search results                                    |
| `/pet-details-not-found` | Missing or unavailable pet details                |

## Project Structure

```text
public/                 Static assets and mock service worker
src/
  api/petfinder/        Fetch helpers for the mock API
  components/           Navigation, search form, pet cards, and hero
  mocks/                Request handlers and sample JSON data
  pages/                Home, search, detail, and missing-details pages
  App.js                Router configuration
  App.test.js           App tests
  index.js              Mock API startup and React entry point
```

## Testing and Build

Run tests interactively:

```bash
npm test
```

Run tests once:

```bash
npm test -- --watchAll=false --runInBand
```

The current tests cover rendering the home page and displaying an error when pet listings fail to load.

Create a production build:

```bash
npm run build
```

The output is written to `build/`. When hosting the app, configure a fallback to `index.html` for client-side routes and serve the assets from the domain root. The mock service worker requires HTTPS when hosted; localhost is supported for development. Mock data is currently enabled for both development and production builds.

## Practice and Improvements

React Router concepts used in this project include:

- `createBrowserRouter`, `createRoutesFromElements`, and `RouterProvider`
- Nested routes and shared layouts with `Outlet`
- Route parameters with `useParams`
- Query parameters with `useSearchParams` and `createSearchParams`
- Navigation with `Link`, `NavLink`, `useNavigate`, and `Navigate`

Additional fixes include:

- Waiting for the mock API to start before rendering the app.
- Checking HTTP response status and handling failed listing requests.
- Treating a missing search query as an empty string.
- Updating the hero heading based on the selected animal type.
- Using root-relative banner paths and local fallback images.
- Replacing the default Create React App test with tests for this app.

## Known Limitations

- Listings are static sample data and may not reflect real adoption availability.
- Some pets have no matching detail record and will show the missing-details page.
- Remote image links may be unavailable. Fallback images keep the layout usable but do not restore the original photos.

## Acknowledgments

Based on the [Codecademy Adopt a Pet — React Router v6 project](https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-front-end-development/tracks/fscj-22-react-part-ii/modules/wdcp-22-react-router-60d12e07-e364-45e4-9102-8d919d464f5e/projects/adopt-a-pet-react-router-v6).

The starter code, sample data, and supplied assets come from the learning project. Routing work and the improvements described above were completed on top of that starter code.

## License

See [LICENSE](./LICENSE) for the MIT license supplied with the starter project. The existing copyright notice has been preserved.
