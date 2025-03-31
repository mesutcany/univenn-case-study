import { AppSidebar } from "./components/app-sidebar"
import { SidebarProvider } from "./components/ui/sidebar"

function App() {
  return (
    <div>
      <SidebarProvider style={{
        "--sidebar-width": "290px",
      } as React.CSSProperties}>
        <AppSidebar />
      </SidebarProvider>
    </div>
  )
}

export default App
