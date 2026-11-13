import { useState } from "react";

function PromptForm({ onGenerate }) {

  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(prompt);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="5"
        placeholder="Enter your story..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button type="submit">
        Generate Scenes
      </button>
    </form>
  );
}

export default PromptForm;