import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { CreatTripPage } from "./pages/creat-trip"
import { TripDatailsPage } from "./pages/trip-datails"

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreatTripPage />,
  },

  {
    path: "/trips/:tripID",
    element: <TripDatailsPage />,
  },
])

export function App() {
  return <RouterProvider router={router} />
}
