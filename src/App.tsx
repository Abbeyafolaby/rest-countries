import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import Countries from "./components/Countries"
import MainLayout from './layouts/MainLayout'
import CountryDetails from './pages/CountryDetails'

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Countries />}/>
        <Route path=':name' element={<CountryDetails />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
