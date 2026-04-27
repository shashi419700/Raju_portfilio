const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React JS",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "GitHub",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <h3 className="text-4xl font-bold text-center text-cyan-400 mb-14">
        My Skills
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/10 p-6 rounded-3xl text-center border border-white/10 hover:scale-105 transition"
          >
            <p className="font-semibold">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}