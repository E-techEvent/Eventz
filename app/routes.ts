import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.jsx"),
    route("/events", "routes/events.jsx" ),
    route("/contact", "routes/contact.jsx"),
    route("/events/:id", "routes/events/$id.jsx"),
    route("/auth/signup", "routes/auth/sign-up.jsx"),
    route("/auth/signin", "routes/auth/sign-in.jsx"),
    
    // User Dashboard Routes
    
    // Admin Dashboard Routes with nested structure
    route("/dashboard/admin/","routes/dashboards/admin/layout.jsx",[
        index("routes/dashboards/admin/index.jsx"),
        route("users","routes/dashboards/admin/users.jsx"),
        route("organizers","routes/dashboards/admin/organizers.jsx"),
        route("organizers/:id","routes/dashboards/admin/organizers_id.jsx"),
        route("events", "routes/dashboards/admin/events.jsx" ),
        route("bookings", "routes/dashboards/admin/bookings.jsx"),
        route("bookings/:id", "routes/dashboards/admin/bookings_id.jsx"),
        route("reviews", "routes/dashboards/admin/reviews.jsx"),
        route( "settings", "routes/dashboards/admin/settings.jsx"),
        route( "events/:id", "routes/dashboards/admin/singleEvent.jsx"),
        route( "events/:id/edit", "routes/dashboards/admin/editEvent.jsx"),

    ])
    
    
    // Organizer Dashboard Routes

] satisfies RouteConfig;