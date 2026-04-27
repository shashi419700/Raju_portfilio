const projects = [
  {
    title: "3D Portfolio Website",
    desc: "Modern futuristic portfolio using React and Tailwind CSS.",
  },
  {
    title: "Student Management System",
    desc: "Academic project for student records and management.",
  },
  {
    title: "E-Commerce UI",
    desc: "Premium product showcase website design.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <h3 className="text-4xl font-bold text-center text-cyan-400 mb-14">
        Projects
      </h3>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 p-8 rounded-3xl border border-white/10 hover:scale-105 transition"
          >
            <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
            <p className="text-slate-300">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}