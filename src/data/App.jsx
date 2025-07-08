import PromptsTips from "./components/PromptsTips";
import NotesSection from "./components/NotesSection";

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <h1>Arpi7's Profile</h1>
        <p className="subtitle">Student | Tech Enthusiast | AI Explorer</p>
      </header>
      <main>
        <PromptsTips />
        <NotesSection />
      </main>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Arpi7-cv — Built with ❤️ and React
        </p>
      </footer>
    </div>
  );
}