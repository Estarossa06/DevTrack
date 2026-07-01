import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import DashboardPage from "../pages/DashboardPage";
import ProjectsPage from "../pages/ProjectsPage";
import TasksPage from "../pages/TasksPage";
import SkillsPage from "../pages/SkillsPage";
import GoalsPage from "../pages/GoalsPage";
import ProfilePage from "../pages/ProfilePage";
import SettingsPage from "../pages/SettingsPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Rutas públicas */}

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Rutas privadas */}

        <Route element={<MainLayout />}>

          <Route path="/" element={<DashboardPage />} />

          <Route path="/projects" element={<ProjectsPage />} />

          <Route path="/tasks" element={<TasksPage />} />

          <Route path="/skills" element={<SkillsPage />} />

          <Route path="/goals" element={<GoalsPage />} />

          <Route path="/profile" element={<ProfilePage />} />

          <Route path="/settings" element={<SettingsPage />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}