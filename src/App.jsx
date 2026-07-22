import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CustomCursor from './components/ui/CustomCursor'
import ScrollProgressBar from './components/ui/ScrollProgressBar'
import BackToTop from './components/ui/BackToTop'
import LoadingScreen from './components/ui/LoadingScreen'
import ErrorBoundary from './components/layout/ErrorBoundary'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <ErrorBoundary fallback={<div className="p-10 text-center">Something went wrong. Please refresh.</div>}>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgressBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <main>
                <Home />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <BackToTop />
    </ErrorBoundary>
  )
}
