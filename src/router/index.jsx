import { BrowserRouter, Route, Routes } from "react-router"

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/">


        </Route>
        <Route path="*" element={<h1>Page not found | 404</h1>} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default Router