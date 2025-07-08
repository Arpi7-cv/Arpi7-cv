import prompts from "../data/ai-prompts.json";

export default function PromptsTips() {
  return (
    <section className="glass-card">
      <h2 className="section-title">AI Prompts & Tips</h2>
      <ul>
        {prompts.map((item, idx) => (
          <li key={idx} className="prompt-item">
            <h3 className="prompt-title">{item.title}</h3>
            <pre className="prompt-text">{item.prompt}</pre>
          </li>
        ))}
      </ul>
    </section>
  );
}