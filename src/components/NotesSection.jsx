const notes = [
  {
    title: "AI Introduction (Markdown)",
    file: "/notes/ai-intro.md",
    type: "markdown",
    description: "Basics of AI concepts."
  },
  {
    title: "Data Structures (PDF)",
    file: "/notes/data-structures.pdf",
    type: "pdf",
    description: "Complete data structures notes."
  }
];

export default function NotesSection() {
  return (
    <section className="glass-card">
      <h2 className="section-title">Student Notes & Materials</h2>
      <ul>
        {notes.map((note, idx) => (
          <li key={idx} className="note-item">
            <a href={note.file} target="_blank" rel="noopener noreferrer" className="note-link">
              {note.title}
            </a>
            <span className="note-desc">{note.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}