import { AppSidebar } from "./components/app-sidebar"
import DataProvider from "./components/data-provider"
import MobileHeader from "./components/mobile-header"
import { SidebarProvider } from "./components/ui/sidebar"
import TalentPoolPage from "./pages/talent-pool"

function App() {
  return (
    <SidebarProvider
      style={{
        "--sidebar": "#fff",
        "--sidebar-width": "290px",
      } as React.CSSProperties}
      className="block"
    >
      <DataProvider>
        <MobileHeader />
        <div className="flex w-full mt-16 md:mt-0">
          <AppSidebar />
          <TalentPoolPage />
        </div>
      </DataProvider>
    </SidebarProvider>
  )
}

export default App
