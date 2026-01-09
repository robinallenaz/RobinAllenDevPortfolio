import React from 'react';
import { Project } from '../lib/data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectShowcaseProps {
  project: Project;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <div className="rounded-xl border border-github-border bg-github-darker/50 p-4 transition-colors hover:bg-github-darker">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {project.icon && (
              <project.icon className="h-5 w-5 text-green-500" />
            )}
            <h3 className="text-xl font-semibold text-github-text">
              {project.title}
            </h3>
          </div>
          <div className="flex space-x-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-github-text hover:text-blue-400 transition-all duration-300 ease-out hover:scale-110"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-github-text hover:text-blue-400 transition-all duration-300 ease-out hover:scale-110"
              >
                <FaExternalLinkAlt className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm text-github-text/80">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-github-darker px-3 py-1 text-xs text-github-accent hover:text-blue-400 transition-all duration-300 ease-out hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>
        <ul className="list-disc list-inside space-y-1 text-sm text-github-text/80">
          {project.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        
        {/* Spotify Embed Player */}
        {project.spotifyEmbedUrl && (
          <div className="mt-4">
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: '12px' }}
              src={project.spotifyEmbedUrl}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>
  );
}
