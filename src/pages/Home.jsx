import { useState } from "react";
import PromptForm from "../components/PromptForm";
import SceneCard from "../components/SceneCard";

function Home() {
  const [scenes, setScenes] = useState([]);

  const generateScenes = async (prompt) => {
    const fakeData = [
      {
        id: 1,
        title: "Scene 1",
        description: "Rabbit challenges turtle"
      },
      {
        id: 2,
        title: "Scene 2",
        description: "Race starts"
      }
    ];

    setScenes(fakeData);
  };

  return (
    <div className="container">
      <h1>AI Cartoon Video Generator</h1>

      <PromptForm onGenerate={generateScenes} />

      {scenes.map(scene => (
        <SceneCard
          key={scene.id}
          scene={scene}
        />
      ))}
    </div>
  );
}

export default Home;