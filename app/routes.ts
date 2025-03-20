import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
    index("routes/home.jsx"),
    { path: "/events", file: "routes/events.jsx" },
    { path: "/contact", file: "routes/contact.jsx" },
    { path: "/event/:id", file: "routes/event/$id.jsx" },
    { path: "/dashboard/user/:userId", file: "routes/dashboards/users/$userId.jsx" },
    { path: "/dashboard/admin/:userId", file: "routes/dashboards/admin/$userId.jsx" },
    { path: "/dashboard/organiser/:userId", file: "routes/dashboards/organizers/$userId.jsx"},
    { path: "/auth/signup", file: "routes/auth/sign-up.jsx" },
    { path: "/auth/signin", file: "routes/auth/sign-in.jsx" },

] satisfies RouteConfig;