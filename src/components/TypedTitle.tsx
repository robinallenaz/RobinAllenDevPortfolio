import { ReactTyped } from 'react-typed';

export default function TypedTitle() {
  const roles = [
    'Full Stack Developer',
    'React Specialist',
    'Node.js Engineer',
    'UI/UX Enthusiast'
  ];

  return (
    <div>
      <div className="text-2xl md:text-3xl font-medium text-github-text/90 font-['Fira_Code']">
        <ReactTyped
          strings={roles}
          typeSpeed={50}
          backSpeed={30}
          backDelay={1500}
          loop
          cursorChar="█"
        />
      </div>
    </div>
  );
}
