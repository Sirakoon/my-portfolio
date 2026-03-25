import { HashRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import CV from "./components/CV"

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" storageKey="theme">
      <HashRouter>
        <Routes>
          <Route path="/" element={<CV />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App