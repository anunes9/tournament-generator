import "primeflex/primeflex.css" // flex
import "primeicons/primeicons.css" //icons
import "primereact/resources/primereact.min.css" //core css
import "primereact/resources/themes/lara-light-indigo/theme.css" //theme
import { GamesComponent } from "./components/Games"
import { TeamsComponent } from "./components/Teams"
import { ResultsComponent } from "./components/Results"
import { TabView, TabPanel } from 'primereact/tabview'
import { Toast } from 'primereact/toast'
import { useRef, useState } from "react"

const App = () => {
  const toast = useRef<Toast>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  // const width = Math.min(window.screen.width, 760)

  return (
    <>
      {/* <Image src="/banner.png" alt="banner" width={`${width}`} /> */}
      <p className="font-bold text-4xl m-0 mt-1 text-center">Padel Games</p>
      <p className="text-lg m-0 mt-1 text-center">Tournament Generator</p>

      <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
        <TabPanel header="Teams" leftIcon="pi pi-user mr-2">
          <TeamsComponent
            handleSuccess={(detail: string) => {
              toast.current?.show({ severity: 'success', summary: 'Success', detail})
              setActiveIndex(1)
            }}
          />
        </TabPanel>

        <TabPanel header="Games" leftIcon="pi pi-calendar ml-2">
          <GamesComponent
            showToast={(detail: string) => {
              toast.current?.show({ severity: 'success', summary: 'Success', detail})
            }}
          />
        </TabPanel>

        <TabPanel header="Results" leftIcon="pi pi-search mr-2">
          <ResultsComponent />
        </TabPanel>
      </TabView>

      <Toast ref={toast} position="bottom-right" />
    </>
  )
}

export default App
