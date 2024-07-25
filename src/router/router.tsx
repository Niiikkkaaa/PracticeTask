import { createBrowserRouter } from "react-router-dom";

import { BaseLayout } from "pages/BaseLayout/BaseLayout";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    path: "/",
  },
]);

export default router;
