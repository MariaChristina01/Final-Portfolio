// ===== YOUR DETAILS (from your CV). Edit here and the page updates. =====
// Optional project screenshots can be added as image: "/images/project-name.jpg".
export const ME = {
  name: "Maria Christina T. Castillejo",
  initials: "MC",
  role: "BSIT student · System developer and aspiring data analyst",
  intro: "I build systems from planning to testing, fix what breaks, and turn data into clear insights.",
  email: "castillejochristina56@gmail.com",
  linkedin: "https://www.linkedin.com/in/maria-christina-castillejo",
  location: "Santa Rosa, Laguna, Philippines",
  about: [
    "I’m a 4th-year BSIT student at Asia Technological School of Science and Arts. I’m looking for a data analytics role where I can grow my skills in data cleaning, visualization, and interpretation, and use data to support better decisions.",
    "I also lead system development projects, from planning to testing. I can troubleshoot problems and handle basic system administration.",
    "I work across the system development process: planning workflows, building frontend and backend features, improving the user experience, testing and debugging, and documenting the finished system.",
  ],
  skills: [
    { group: "Data analytics", items: ["Data cleaning", "Data processing", "Data interpretation"] },
    { group: "Data visualization", items: ["Power BI", "Excel charts", "Dashboard creation"] },
    { group: "Microsoft Excel", items: ["PivotTables", "Formulas", "Data organization", "Reporting"] },
    { group: "System development", items: ["System planning", "Workflow design", "Frontend development", "Backend development", "UI/UX improvement", "System testing", "Debugging", "Technical documentation"] },
    { group: "System administration", items: ["File management", "System monitoring", "User support"] },
    { group: "Technical support", items: ["Troubleshooting", "Basic system maintenance"] },
    { group: "Reporting and documentation", items: ["Report generation", "Technical documentation"] },
    { group: "Professional", items: ["Time management", "Adaptability", "Willingness to learn", "Professionalism", "Work ethic"] },
  ],
  projects: [
    {
      name: "CurriMap – Academic Curriculum Mapping Platform",
      type: "Web", date: "May 2026", tags: "",
      images: [
        { src: "/images/CurriMap.png", alt: "CurriMap curriculum pathway visualization" },
        { src: "/images/CurriMap%20(1).png", alt: "CurriMap dashboard and curriculum summary" },
        { src: "/images/CurriMap%20(2).png", alt: "CurriMap competency alignment and curriculum mapping charts" },
      ],
      desc: "A curriculum mapping platform designed for academic pathway visualization.",
      points: [
        "Led the full-stack development and project planning.",
        "Managed project workflows, feature planning, and task delegation for smooth progress and timely delivery.",
        "Built a scalable frontend and backend for curriculum data, subject prerequisites, and student records.",
        "Coordinated UI/UX improvements and system optimization to make it more intuitive and user-friendly.",
      ],
    },
    {
      name: "Self-Service Kiosk for Coffee Shops – Ordering and Payment System",
      type: "Kiosk", date: "Feb 2026 – Apr 2026", tags: "",
      images: [
        { src: "/images/Self-Service%20Kiosk.png", alt: "Cafe Maestro self-service ordering welcome screen" },
        { src: "/images/Self-Service%20Kiosk%20(1).png", alt: "Cafe Maestro point-of-sale cashier dashboard" },
        { src: "/images/Self-Service%20Kiosk%20(2).png", alt: "Cafe Maestro drink selection screen" },
      ],
      desc: "A self-service kiosk system for coffee shop ordering and payment.",
      points: [
        "Led the development and overall project management.",
        "Oversaw system architecture, feature implementation, and workflow design to improve ordering efficiency.",
        "Developed interactive ordering interfaces and backend transaction handling for real-time order management.",
        "Collaborated on system testing and optimization for a smooth, responsive kiosk experience.",
      ],
    },
    {
      name: "Convenience Store Management System – Point-of-Sale and Inventory Platform",
      type: "Desktop", date: "Oct 2024 – Nov 2024", tags: "C# · .NET Framework · Windows Forms · OleDb / Microsoft Jet (Access) · Visual Studio",
      desc: "A desktop point-of-sale and inventory system for a convenience store.",
      points: [
        "Led development covering product management, customer ordering, payment processing, and sales reporting.",
        "Built role-based login with separate Admin and Cashier interfaces, including account registration and an admin panel for managing user accounts and access levels.",
        "Developed product and category management with add, update, and delete, search and filter by name and category, and availability status.",
        "Implemented an ordering and checkout workflow that generates customer IDs, tracks per-customer order lists, computes totals and change, and records completed transactions.",
        "Automated inventory control: stock is deducted on each order and products are marked unavailable when stock runs out.",
        "Designed an admin dashboard and date-filterable transaction reports showing total customers and total earnings.",
        "Created a custom UI with a borderless layout, sidebar navigation, embedded child forms, and icon-based controls for cashiers and admins.",
      ],
    },
  ],
  education: [
    { school: "Asia Technological School of Science and Arts", level: "Bachelor of Science in Information Technology (College)", years: "2023 – Present" },
    { school: "St. Ignatius Academy Cabuyao Branch", level: "Senior High School", years: "2021 – 2023" },
    { school: "Aplaya National High School (Annex 1)", level: "Junior High School", years: "2017 – 2021" },
    { school: "Santa Rosa Elementary School Central II", level: "Elementary", years: "2011 – 2017" },
  ],
  certifications: [
    { name: "Networking Basics", date: "Sep 2025" },
    { name: "Digital Safety and Security Awareness", date: "Apr 2026" },
    { name: "Introduction to Cybersecurity", date: "Apr 2026" },
    { name: "3D Printing and Digital Fabrication: Transforming Ideas into Innovation", date: "Sep 2026" },
    { name: "AI is Getting Smarter: Navigating Human Relevance, Connection, and Character in the Era of Cheap Intelligence", date: "Sep 2026" },
    { name: "Role of AI in Process Control Systems", date: "Sep 2026" },
    { name: "Cybersecurity", date: "Oct 2026" },
  ],
};
