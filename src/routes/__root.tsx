import { Layout } from "@/components/layout";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import "@/index.css";

export const Route = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});
