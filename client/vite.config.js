import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/admin_login": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/admin_logout": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/admin_auth": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/teacher_login": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/teacher_logout": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/teacher_auth": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/student_login": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/student_logout": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/student_auth": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/parent_login": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/parent_logout": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/parent_auth": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/student_parent": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/students": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/par_stu_assesments": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/par_stu_assignments": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/teacher_subjects": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/subject_students": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/student_assesments": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/student_assignments": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/subject_assignments": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/subject_assessments": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/assignments": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/assessments": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/logged_student_assignments": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/logged_student_assessments": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/new_subject_teacher": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/subject_teachers": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/parents": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/teachers": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/studentId": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api/staffs": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
