import Typewriter from "typewriter-effect";

export default function TypeEffect() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString(
            "Mentor Goal conçoit des solutions digitales pour aider les écoles à accompagner leurs étudiants vers l'emploi."
          )
          .pauseFor(2500)
          .start();
      }}
    />
  );
}
