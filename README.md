# Kyle Kent - Personal Portfolio

<!-- ![Portfolio Screenshot](placeholder.png): Replace placeholder.png with an actual screenshot link after deploying or locally -->

This repository contains the source code for my personal portfolio website, designed to showcase my skills, work experience, and personal projects as a Frontend Software Engineer.

**Live Demo:** [portfolio](https://kladenets.github.io/portfolio/) <!-- Replace with your actual deployment link -->

---

## ✨ Features

- **Responsive Design:** Adapts seamlessly to desktop, tablet, and mobile devices.
- **Dark Mode:** Supports system preference and includes a manual toggle for user control (using `next-themes`).
- **Full-Page Scroll Snapping:** Smooth, section-by-section scrolling experience.
- **Animations:** Subtle and engaging animations on scroll using Framer Motion.
- **Structured Content:** Sections for Introduction, Skills, Work Experience, Personal Projects, and Contact Information.
- **Modern Tech Stack:** Built with cutting-edge frontend technologies.

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (v13+ with App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **UI Components:** Built with [React](https://reactjs.org/)
- **Dark Mode:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Deployment:** [Github Pages](https://docs.github.com/en/pages)
- **AI Assistant** [Google AI Studio](https://aistudio.google.com/welcome)

---

## 🛠️ Getting Started

To run this project locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Kladenets/your-repo-name.git # Replace with your repo URL
    cd your-repo-name
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 📂 Project Structure (Simplified)

```
.
├── app/ # Next.js App Router (Pages, Layouts)
│ ├── globals.css # Global Styles & Tailwind directives
│ ├── layout.tsx # Root Layout
│ ├── page.tsx # Main Page (renders sections)
│ └── providers.tsx # Provider for next-themes
├── components/ # Reusable React Components
│ ├── AnimatedText.tsx
│ ├── Footer.tsx
│ ├── Header.tsx
│ ├── ThemeToggle.tsx
│ └── sections/ # Section-specific components
│ ├── contact.tsx
│ ├── experience.tsx
│ ├── introduction.tsx
│ ├── projects.tsx
│ └── skills.tsx
├── next.config.mjs # Next.js configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json # TypeScript configuration
```

---

## License

This project is licensed under the MIT License - see the `LICENSE` file for details (Optional: Add a LICENSE file if desired).

---

## Contact

Kyle Kent - [develop@kylekent.dev](mailto:develop@kylekent.dev)
