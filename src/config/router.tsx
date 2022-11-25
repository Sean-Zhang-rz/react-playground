import { createBrowserRouter } from "react-router-dom";
import Test from '../pages/Test/index'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>
  },
  {
    path: '/test',
    element: <Test></Test>
  },
]);
export default router