import { BrowserRouter, Route, Routes } from "react-router";
import Administrador from "./components/pages/Administrador";
import DetalleProducto from "./components/pages/DetalleProducto";
import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";
import CardProducto from "./components/pages/producto/CardProducto";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import Footer from "./components/shared/Footer";
import Menu from "./components/shared/Menu";

function App() {
  return (
    <>
    <BrowserRouter>
      <Menu></Menu>
      <main>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}>Inicio</Route>
           <Route path="/detalle" element={<DetalleProducto></DetalleProducto>}>Detalle</Route>
           <Route path="/administrador" element={<Administrador></Administrador>}>Administrador</Route>           
              <Route path="/administrador/crear" element={ <FormularioProducto></FormularioProducto>}>Crear</Route>
                 <Route path="/administrador/editar" element={ <FormularioProducto></FormularioProducto>}>Editar</Route>
                    <Route path="*" element={<Error404></Error404>}>Error</Route>

        </Routes>
             
      </main>
      <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
