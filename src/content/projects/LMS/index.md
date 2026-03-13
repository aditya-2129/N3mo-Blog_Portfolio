---
title: "Learning Management System (LMS)"
summary: "A comprehensive Learning Management System built with JavaScript, React, and Tailwind CSS, featuring course management, video processing, and integration with Stripe and other services."
date: "2024-09-15"
draft: false
tags:
- LMS
- JavaScript
- React
- Tailwind CSS
- Stripe
- Video Processing
- Prisma
- MySQL
- Authentication
- UploadThing
- Mux
- TypeScript
- Radix UI
- Lucide Icons
- Axios
- Zod
- React 
- Recharts
- Query String
- Development Tools
demoUrl: https://lms-pink-ten.vercel.app/
repoUrl: https://github.com/leonardoo210399/lms.git
---

# 🎓 Learning Management System (LMS) — Enterprise Education Platform

![LMS Banner](https://cdn-icons-png.flaticon.com/512/6295/6295417.png)

A comprehensive, industry-grade **Learning Management System** built with **Next.js**, **React**, and **Tailwind CSS**. This platform is designed to provide a seamless online education experience, featuring sophisticated course management, high-performance video streaming, and secure financial integrations.

---

## 🛠️ Technology Stack

<div class="tech-stack">

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-F29111?style=for-the-badge&logo=mysql&logoColor=white) ![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white) ![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white) ![Mux](https://img.shields.io/badge/Mux_Video-black?style=for-the-badge&logo=mux&logoColor=white) ![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radix-ui&logoColor=white)

</div>


---

## ✨ Features at a Glance

### 🧑‍🎓 Student Experience
- **Course Discovery**: Advanced filtering and search to find the perfect learning path.
- **Progress Tracking**: Real-time progress bars for every course, with the ability to mark individual chapters as complete.
- **Student Dashboard**: A unified view of all enrolled courses, highlighting ongoing progress and recently accessed materials.
- **Secure Purchases**: Integrated **Stripe** checkout for one-click course enrollment.

### 👩‍🏫 Teacher & Admin Tools
- **Course Studio**: Powerful tools for creating courses, defining chapters, and uploading learning materials.
- **Video Processing**: Powered by **Mux**, allowing for high-quality video uploads and smooth HLS streaming playback.
- **Drag-and-Drop Reordering**: Intuitively rearrange chapters to optimize the learning flow.
- **Teacher Analytics**: High-level data visualization with charts (powered by **Recharts**) to monitor student engagement and total revenue.
- **Rich Text Content**: Edit chapter descriptions with a full feature rich text editor.

### ⚙️ Robust Backend Architecture
- **Authentication**: Enterprise-grade security via **Clerk**.
- **Database Architecture**: Efficient relationships and data mapping using **Prisma ORM** with **MySQL**.
- **File Handling**: High-speed uploads for thumbnails and attachments using **UploadThing**.

---

## 📁 Project Structure

```bash
lms/
├── app/                  # Next.js App Router
│   ├── (dashboard)/      # Student & Teacher Dashboard views
│   ├── (course)/         # Course view & playback logic
│   └── api/              # API Endpoints (Stripe, Mux, UploadThing)
├── components/           # Reusable UI Library (Shadcn UI based)
│   ├── courses/          # Course cards, lists, and filtering
│   ├── editor/           # Rich text editor components
│   └── ui/               # Core atomic components
├── actions/              # Server Actions for data fetching & mutations
├── lib/                  # Shared utilities (Prisma, Stripe config)
└── prisma/               # Database schema & migrations
```

---

## 🚀 Installation & Setup

### 1. Prerequisites
- **Node.js 18+**
- **MySQL Database** (Local or hosted like PlanetScale/Aiven)

### 2. Clone & Install
```bash
git clone https://github.com/leonardoo210399/lms.git
cd lms
npm install
```

### 3. Environment Variables
Create a `.env` file with the following:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
DATABASE_URL=...
STRIPE_API_KEY=...
STRIPE_WEBHOOK_SECRET=...
NEXT_PUBLIC_APP_URL=http://localhost:3000
MUX_TOKEN_ID=...
MUX_TOKEN_SECRET=...
UPLOADTHING_SECRET=...
UPLOADTHING_APP_ID=...
```

### 4. Database Setup
```bash
npx prisma generate
npx prisma db push
```

### 5. Running the App
```bash
npm run dev
```

---

## 🏗️ Database Schema Setup
This project uses **Prisma** to manage the following core models:
- **Course**: Title, description, price, and publication status.
- **Chapter**: Video content, descriptions, and user progress associations.
- **MuxData**: Storage for video assets and playback IDs.
- **Purchase**: Tracks student enrollments and Stripe associations.

---

## 📄 License
Distributed under the **MIT License**.

_Designed & Developed by **Aditya** (aka **aditya-2129**)_


---

| File                                                                                                                | Summary                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [route.ts](https://github.com/leonardoo210399/lms/blob/master/app/api/courses/[courseId]/chapters/reorder/route.ts) | Handles API routes for reordering chapters within a specific course, identified by `courseId`. This involves updating the order of chapters as specified by the user. |

---

</details>

<details closed><summary>app.api.webhook</summary>

---

| File                                                                                    | Summary                                                                                                                                                                  |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [route.ts](https://github.com/leonardoo210399/lms/blob/master/app/api/webhook/route.ts) | Manages API routes for handling webhook events. This could include processing incoming data from external services or systems as specified in the webhook configuration. |

---

</details>

<details closed><summary>app.(course).courses.[courseId]</summary>

---

| File                                                                                                          | Summary                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(course)/courses/[courseId]/page.tsx>)     | Renders the main course page for a specific course identified by `courseId`. This file handles the display of course details, including course content, instructor information, and student interactions.        |
| [layout.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(course)/courses/[courseId]/layout.tsx>) | Defines the layout structure for the course pages, ensuring consistent presentation and navigation elements for courses identified by `courseId`. It may include headers, sidebars, and other layout components. |

---

</details>

<details closed><summary>app.(course).courses.[courseId]._components</summary>

---

| File                                                                                                                                                    | Summary                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [course-sidebar.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(course)/courses/[courseId]/_components/course-sidebar.tsx>)               | Implements the sidebar for course pages, providing navigation links and additional course-related options. It organizes and presents links to various sections of the course. |
| [course-navbar.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(course)/courses/[courseId]/_components/course-navbar.tsx>)                 | Contains the navigation bar for course pages, including elements like course title, user profile, and primary navigation actions.                                             |
| [course-sidebar-item.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(course)/courses/[courseId]/_components/course-sidebar-item.tsx>)     | Defines individual items or links within the course sidebar, allowing users to navigate to specific sections or features of the course.                                       |
| [course-mobile-sidebar.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(course)/courses/[courseId]/_components/course-mobile-sidebar.tsx>) | Provides a mobile-friendly version of the course sidebar, optimizing navigation and layout for smaller screens.                                                               |

---

</details>

<details closed><summary>app.(course).courses.[courseId].chapters.[chapterId]</summary>

| File                                                                                                                           | Summary                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(course)/courses/[courseId]/chapters/[chapterId]/page.tsx>) | Displays the details and contents of a specific chapter within a course, including chapter title, description, and associated resources. It likely manages the layout and presentation of the chapter’s content. |

---

</details>

<details closed><summary>app.(course).courses.[courseId].chapters.[chapterId]._components</summary>

---

| File                                                                                                                                                                           | Summary                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| [course-enroll-button.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(course)/courses/[courseId]/chapters/[chapterId]/_components/course-enroll-button.tsx>)     | Renders a button for enrolling in a course. This button likely initiates the enrollment process or redirects users to a sign-up page.   |
| [course-progress-button.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(course)/courses/[courseId]/chapters/[chapterId]/_components/course-progress-button.tsx>) | Displays a button for tracking or updating course progress. It may show current progress and allow users to mark lessons as complete.   |
| [video-player.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(course)/courses/[courseId]/chapters/[chapterId]/_components/video-player.tsx>)                     | Provides a video player interface for watching course videos. It includes playback controls and may handle video loading and streaming. |

---

</details>

<details closed><summary>app.(auth)</summary>

---

| File                                                                                     | Summary                                                                                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [layout.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(auth)/layout.tsx>) | Manages the layout and structure for authentication-related pages. This file likely sets up common elements such as headers, footers, and sidebars for pages related to user authentication. It might also handle routing or conditional rendering based on user authentication status. |

---

</details>

<details closed><summary>app.(auth).(routes).sign-in.[[...sign-in]]</summary>

---

| File                                                                                                                 | Summary                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(auth)/(routes)/sign-in/[[...sign-in]]/page.tsx>) | Handles the sign-in page for authentication. This file likely includes the form for user login, input validation, and error handling. It may also manage user redirection or display messages based on sign-in status. |

---

</details>

<details closed><summary>app.(auth).(routes).sign-up.[[...sign-up]]</summary>

---

| File                                                                                                                 | Summary                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(auth)/(routes)/sign-up/[[...sign-up]]/page.tsx>) | Handles the sign-up page for new user registration. This file likely includes the form for creating a new account, input validation, and error handling. It may also manage user redirection or display messages based on the registration status. |

---

</details>

---

Here’s the updated "Getting Started" section with the details of the dependencies included:

---

## 🚀 Getting Started

**_Requirements_**

Ensure you have the following dependencies installed on your system:

- **TypeScript**: `^5`
- **Node.js**: Ensure compatibility with the project's requirements
- **Prisma**: `^5.16.1`

**_Project Dependencies_**

- **Core Packages:**

  - **Next.js**: `^14.2.4`
  - **React**: `^18`
  - **Prisma Client**: `^5.16.2`

- **UI & Components:**

  - **Radix UI**: For UI primitives (e.g., `@radix-ui/react-alert-dialog`, `@radix-ui/react-checkbox`, etc.)
  - **Lucide Icons**: `^0.400.0`
  - **Tailwind CSS**: `^3.4.1`
  - **Tailwind CSS Animate**: `^1.0.7`
  - **Class Variance Authority**: `^0.7.0`

- **Utilities:**

  - **Axios**: `^1.7.2`
  - **Zod**: `^3.23.8`
  - **React Hook Form**: `^7.44.3`
  - **React Dropzone**: `^14.2.3`
  - **React Hot Toast**: `^2.4.1`
  - **React Quill**: `^2.0.0`
  - **Stripe**: `^16.2.0`
  - **Recharts**: `^2.12.7`
  - **Query String**: `^9.0.0`
  - **Uploadthing**: `^6.13.2`

- **Development Tools:**
  - **ESLint**: `^8`
  - **ESLint Config Next**: `14.2.4`
  - **PostCSS**: `^8`
  - **Prisma CLI**: `^5.16.1`
  - **TypeScript**: `^5`

### ⚙️ Installation

1. **Clone the lms Repository:**

   ```sh
   git clone https://github.com/leonardoo210399/lms
   ```

2. **Change to the Project Directory:**

   ```sh
   cd lms
   ```

3. **Install the Dependencies:**

   ```sh
   npm install
   ```

### 🤖 Running Locally

1. **Development Server:**

   Start the development server with:

   ```sh
   npm run dev
   ```

2. **Build for Production:**

   Build the application for production with:

   ```sh
   npm run build
   ```

3. **Start Production Server:**

   Start the production server with:

   ```sh
   npm run start
   ```

### 🧪 Testing

To execute tests, run:

```sh
npm test
```

### 🔧 Linting

Run the linter with:

```sh
npm run lint
```

### 🛠️ Post-Install

Generate the Prisma client after installing dependencies with:

```sh
npm run postinstall
```

## 🌍 Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key

# Clerk Sign-In/Sign-Up URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Prisma Configuration
# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="your_database_url"

# UploadThing Configuration
UPLOADTHING_SECRET=your_key
UPLOADTHING_APP_ID=your_key

# Mux Configuration
MUX_TOKEN_ID=your_key
MUX_TOKEN_SECRET=your_key

# Stripe Configuration
STRIPE_API_KEY=your_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET=your_key

# Additional Configurations
NEXT_PUBLIC_TEACHER_ID=your_key
```

## 🚀 Optimizations

### 🛠️ Code Refactoring

1. **Modularization:** Split large components and functions into smaller, reusable modules to improve readability and maintainability.
2. **Code Cleanup:** Removed redundant code, comments, and unused variables to reduce clutter.
3. **Consistent Naming:** Adopted a consistent naming convention for variables, functions, and components to improve code clarity.
4. **TypeScript Conversion:** Converted JavaScript code to TypeScript for better type safety and error checking.

### ⚡ Performance Improvements

1. **Lazy Loading:** Implemented lazy loading for components and images to reduce initial load time.
2. **Memoization:** Used React's `useMemo` and `useCallback` hooks to prevent unnecessary re-renders and optimize performance.
3. **Optimized Queries:** Improved database queries with indexing and optimized filtering to enhance data retrieval speed.
4. **Static Asset Caching:** Configured caching for static assets to reduce server load and improve load times.
5. **Code Splitting:** Utilized dynamic imports to split code into smaller bundles, improving load times for large applications.
6. **Debouncing:** Implemented debouncing for search inputs and other frequent user actions to reduce unnecessary API calls.

### ♿ Accessibility Enhancements

1. **ARIA Roles:** Added ARIA roles to improve accessibility for users relying on screen readers.
2. **Keyboard Navigation:** Ensured that all interactive elements are accessible via keyboard navigation.
3. **Alt Text:** Provided meaningful alt text for images to enhance the experience for visually impaired users.
4. **Color Contrast:** Improved color contrast to ensure readability for users with visual impairments.
5. **Semantic HTML:** Used semantic HTML elements (e.g., `<header>`, `<main>`, `<footer>`) to provide better structure and meaning to the content.
6. **Focus Management:** Managed focus states to improve navigation for keyboard and screen reader users.

### 🔒 Security Enhancements

1. **Input Validation:** Implemented server-side and client-side validation to prevent SQL injection and cross-site scripting (XSS) attacks.
2. **Authentication:** Used secure authentication methods and token handling to protect user data.
3. **Environment Variables:** Secured sensitive information using environment variables.
4. **HTTPS:** Enforced HTTPS for secure data transmission.

### 🎨 UX/UI Improvements

1. **Responsive Design:** Ensured the application is fully responsive and works well on various screen sizes and devices.
2. **Loading Indicators:** Added loading indicators to provide feedback during data fetching operations.
3. **Error Handling:** Implemented comprehensive error handling to gracefully manage and display error messages to users.
4. **User Feedback:** Provided feedback for user actions like form submissions, button clicks, etc.
5. **Improved Forms:** Enhanced form usability with clear labels, validation messages, and accessibility improvements.

By implementing these optimizations, the application not only performs better but also provides a more accessible, secure, and user-friendly experience.

---

## 🛠 Project Roadmap

- [x] `► Initial Setup and Configuration`
- [x] `► Implement Course Management`
- [x] `► Integrate Payment System with Stripe`
- [x] `► Develop Student and Teacher Dashboards`
- [x] `► Add Video Processing and HLS Player`
- [x] `► Implement Authentication with Clerk`
- [x] `► Set Up ORM with Prisma and MySQL`
- [x] `► Enhance UX/UI Design`
- [x] `► Implement Advanced Analytics for Teachers`
- [x] `► Add Admin Protection Features (Optional)`
- [x] `► Optimize Performance and Accessibility`
- [x] `► Final Testing and Debugging`
- [x] `► Deployment and Launch`

---

## 👏 Acknowledgments

We extend our heartfelt thanks to the following individuals and resources who contributed to the success of this project:

- **[OpenAI](https://www.openai.com)**: For providing the powerful GPT models that inspired innovative features and solutions.
- **[Mux](https://mux.com)**: For offering exceptional video processing and HLS streaming services that enhanced our multimedia capabilities.
- **[Stripe](https://stripe.com)**: For delivering a seamless and reliable payment processing system.
- **[Clerk](https://clerk.dev)**: For providing robust authentication services that ensure secure user management.
- **[UploadThing](https://uploadthing.com)**: For facilitating smooth file uploads and management.
- **[Prisma](https://www.prisma.io)**: For offering an intuitive ORM to simplify database interactions.
- **[Tailwind CSS](https://tailwindcss.com)**: For a versatile utility-first CSS framework that streamlined our styling process.
- **[React](https://reactjs.org)** and **[Next.js](https://nextjs.org)**: For powerful tools that enabled the creation of a dynamic and responsive front-end.
- **[Render.com](https://render.com)**: For providing a reliable and scalable database solution.

### Special Thanks

- **Our Community**: For providing valuable feedback and suggestions that guided the development of this project.
- **Open Source Contributors**: For sharing their knowledge and tools, which greatly accelerated our development process.
- **Friends and Family**: For their continuous support and encouragement throughout the development of this project.

---

[**Return**](#-quick-links)

---
