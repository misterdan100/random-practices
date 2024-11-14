import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import DashboardPage from './pages/DashboardPage'
import NotesPage from './pages/NotesPage'

export default function Router() {
  return (
    <BrowserRouter >
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<DashboardPage />} index/>
                <Route path='/notes' element={<NotesPage />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
