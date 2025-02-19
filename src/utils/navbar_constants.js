import { lazy } from "react";
import Layout from "../components/Layout";



export const ICON_PATH = '/src/assets/icons/'

const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const MusicPage = lazy(() => import("../pages/MusicPage"));
const Annoncement = lazy(() => import("../pages/Annoncement"));
const Profile = lazy(() => import("../pages/Profile"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const NotFound = lazy(() => import("../pages/NotFound"));


//   { path: "/login", name: "Login", Component: LoginPage, Layout: Layout }
export const PUBLIC_ROUTES = [

  { 
    id:1,
    path: "/", 
    name: "Dashboard",
    Component: DashboardPage,
    Layout: Layout, 
    icon:`${ICON_PATH}dashboard.png`
  },

  { id:2, path: "/music", name: "Music", Component: MusicPage, Layout: Layout, icon:`${ICON_PATH}music_note.png` ,children:[
      { path: "upload", name: "Upload", Component: "" ,icon:`${ICON_PATH}upload_file.png`,},
      { path: "custom", name: "Custom", Component: "" ,icon:`${ICON_PATH}queue_music.png`,},
      { path: "library", name: "Library", Component: "",icon:`${ICON_PATH}library_music.png`, }
  ] },

  { id:3, path: "/announcement", name: "Announcement", Component: Annoncement, Layout: Layout,icon:`${ICON_PATH}announcement.png`,
    children:[
      { path: "upload", name: "Upload", Component: "",icon:`${ICON_PATH}upload_file.png` },
      { path: "record", name: "Record", Component: "",icon:`${ICON_PATH}queue_music.png` },
      { path: "text", name: "Text", Component: "",icon:`${ICON_PATH}keyboard_alt.png` },
      { path: "library", name: "Library", Component: "",icon:`${ICON_PATH}library_music.png` }
  ]
   },
   
  { id:4, path: "/profile", name: "Profile", Component: Profile, Layout: Layout,icon:`${ICON_PATH}person.png` }

];

export const PROTECTED_ROUTES = [
//   { path: "/", name: "Dashboard", Component: DashboardPage, Layout: AdminLayout,id:1 },
//   { path: "/music", name: "Music", Component: MusicPage, Layout: AdminLayout,id:2 },
//   { path: "/announcement", name: "Announcement", Component: Annoncement, Layout: AdminLayout,id:3 },
//   { path: "/profile", name: "Profile", Component: Profile, Layout: AdminLayout,id:4 }
];
