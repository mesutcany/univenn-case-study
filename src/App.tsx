import { AppSidebar } from "./components/app-sidebar"
import { SidebarProvider } from "./components/ui/sidebar"
import TalentPoolPage from "./pages/talent-pool"

function App() {
  return (
    <div>
      <SidebarProvider style={{
        "--sidebar-width": "290px",
      } as React.CSSProperties}>
        <AppSidebar />
        <TalentPoolPage />
      </SidebarProvider>
    </div>
  )
}

export default App
