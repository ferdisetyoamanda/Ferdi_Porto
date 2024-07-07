const links = [
  {
    href: "#",
    text_id: "beranda",
    text_en: "home",
  },
  {
    href: "#about",
    text_id: "tentang",
    text_en: "about",
  },
  {
    href: "#portfolio",
    text_id: "portofolio",
    text_en: "portfolio",
  },
  // {
  //   href: "#contact",
  //   text_id: "kontak",
  //   text_en: "contact",
  // },
];

const socials = [
  {
    link: "https://github.com/ferdisetyoamanda ",
    logo: "Github",
  },
  {
    link: "https://www.linkedin.com/in/ferdi-setyo-amanda-922238247/",
    logo: "Linkedin",
  },
  {
    link: "https://www.instagram.com/ferdisetyo33/",
    logo: "Instagram",
  },
  {
    link: "https://www.facebook.com/setyo.amanda/",
    logo: "Facebook",
  },
];

const portfolios = [
  {
    featured: true,
    title_id: "Aplikasi ThrowMe",
    title_en: "ThrowMe App",
    description_id:
      "Di ThrowMe, misi kami adalah untuk menghilangkan masalah yang disebabkan oleh sampah. Oleh karena itu, melalui inovasi dan kolaborasi, kami telah mengembangkan solusi yang dapat memberikan lokasi tempat sampah di sekitar Anda dan cara yang benar untuk mengelola sampah Anda. Pelajari lebih lanjut tentang bagaimana ThrowMe mengatasi masalah sampah.",
    description_en:
      "At ThrowMe, our mission is to eliminate problems caused by garbage. Therefore, through innovation and collaboration we have developed a solution that can give you the location of the trash can around you and the proper and correct way to manage your waste. Learn more about how ThrowMe eliminates the garbage problem.",
    tech: [
      "VS Code",
      "React Js",
      "Strapi",
      "Bootstrap",
      "Mapbox API",
      "Railways",
      "Netlify",
    ],
    repository: "https://github.com/ArdiantoN19/ThrowMe-Project",
    image: "img/throwme.jpg",
    site: "https://throwme.netlify.app/",
  },
  {
    featured: true,
    title_id: "Aplikasi Catatanku",
    title_en: "Catatanku App",
    description_id:
      "Aplikasi ini dibangun untuk membantu Anda menyimpan catatan penting agar tidak terlewat. Dibangun secara sederhana untuk menyerupai aplikasi catatan umum.",
    description_en:
      "This application was built to help you save important notes so you don't miss them. Built simply to resemble a typical notes application.",
    tech: ["VS Code", "React Js", "Notes Dicoding API", "Netlify"],
    repository: "https://github.com/ferdisetyoamanda/aplikasi_catanku",
    image: "img/note.jpg",
    site: "https://catatankubyferdiuseapi.netlify.app/",
  },
  {
    featured: true,
    title_id: "Catatanku Lokal",
    title_en: "Local Catatanku",
    description_id:
      "Aplikasi catatan ini adalah aplikasi yang dibuat untuk memenuhi tugas saat mengikuti kegiatan KampusMerdeka.",
    description_en:
      "This note application is an application made to fulfill tasks when participating in KampusMerdeka activities.",
    tech: ["VS Code", "React JS", "CSS", "Netlify"],
    repository: "https://github.com/ferdisetyoamanda/catatanlocalversi1",
    image: "img/catatankulokal.jpg",
    site: "https://catatankubyferdiversi1.netlify.app/",
  },
];

const projects = [
  {
    title_id: "Club Finder",
    title_en: "Club Finder",
    description_id:
      "Aplikasi ini adalah aplikasi yang mencari minuman di bar.",
    description_en:
      "This app is an app that searches for a drink in a bar.",
    tech: ["JavaScropt (ES6+)", "Webpack", "Drink API Dicoding"],
    repository: "https://github.com/ferdisetyoamanda/Club_Finder",
    site: "https://club-finder-ferdixdicoding.netlify.app/",
  },
];

export { links, socials, portfolios, projects };
