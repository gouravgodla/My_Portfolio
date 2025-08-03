export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I put working with clients first and encourage open communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "CryptoPlace",
    des: "Developed a blockchain analytics platform delivering real-time crypto insights and data visualization",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/gouravgodla/cryptoplace",
  },
  {
    id: 2,
    title: "StackJournal",
    des: "Built a responsive blog web application using React, Node.js, Express.js, and EJS templating engine.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/gouravgodla/blog-application-nodejs",
  },
  {
    id: 3,
    title: " Evently",
    des: " Developed a full-stack event management platform using Next.js, TypeScript, and Node.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/gouravgodla/evently-project",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Gourav was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Gourav's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Gourav is the ideal partner.",
    name: "Michael Johnson",
    title: "",
  },
  {
    quote:
      "Working with Gourav has been a transformative experience. His ability to solve complex problems with clean, maintainable code made our development process smooth and efficient.",
    name: "Sarah Thompson",
    title: "",
  },
  {
    quote:
      "Gourav consistently delivers top-notch work. His deep understanding of full-stack development and attention to detail helped us launch our platform ahead of schedule.",
    name: "David Lee",
    title: "",
  },
  {
    quote:
      "What sets Gourav apart is his passion for learning and adapting quickly. He brought fresh ideas to our frontend revamp and improved our performance metrics significantly.",
    name: "Priya Mehra",
    title: "",
  },
  {
    quote:
      "I was impressed by Gourav's ability to take ownership of critical backend features and integrate them seamlessly with the frontend. He's a valuable team player.",
    name: "Alex Kim",
    title: "",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Development",
    desc: "Engineered a full-stack e-commerce platform using React.js, Tailwind CSS, Node.js, and Clerk for authentication. Implemented secure APIs, responsive UI, and optimized both frontend and backend performance for a seamless user journey.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Client App Dev - Freelance",
    desc: "Designed and delivered a cross-platform mobile app using React.js/Next.js and Firebase. Managed end-to-end development, ensuring smooth deployment and client satisfaction.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/gouravgodla/",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/gouravgodla",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/gouravgodla/",
  },
];
