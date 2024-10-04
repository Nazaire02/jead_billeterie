import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from './pages/Accueil/Accueil.tsx';
import BuyTicket from './pages/BuyTicket/BuyTicket.tsx';
import MyTicket from "./pages/MyTicket/MyTicket.tsx";
import Apropos from "./pages/Apropos/Apropos.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Accueil />,
      },
      {
        path: "buy-ticket/:step",
        element: <BuyTicket />,
      },
      {
        path: "my-ticket",
        element: <MyTicket/>,
      },
      {
        path: "discover-us",
        element: <Apropos/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
  )
