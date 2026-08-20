"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import "./project.css";

const ARTICLES_API = "https://website-back-end.vercel.app/api/articles";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    let isMounted = true;

    async function fetchProject() {
      try {
        const response = await fetch(ARTICLES_API);

        if (!response.ok) {
          throw new Error("Unable to load project details");
        }

        const articles = await response.json();
        const foundProject = Array.isArray(articles)
          ? articles.find((article) => article._id === id)
          : null;

        if (isMounted) {
          if (!foundProject) {
            throw new Error("Project not found");
          }
          setProject(foundProject);
        }
      } catch (fetchError) {
        if (isMounted) {
          setError(fetchError.message || "Unable to load project details");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchProject();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (isLoading) {
    return <p className="project-status">Loading project...</p>;
  }

  if (error || !project) {
    return (
      <main className="project-details">
        <p className="project-status project-error">{error || "Project not found"}</p>
        <Link className="project-back-link" href="/our-work">
          Back to Our Work
        </Link>
      </main>
    );
  }

  return (
    <main className="project-details">
      <Link className="project-back-link" href="/our-work">
        Back to Our Work
      </Link>
      <article className="project-content">
        <div className="project-header">
        {project.image && (
          <img className="project-image" src={project.image} alt={project.title || "Project"} />
        )}</div>
        <div className="project-copy">
          {project.Type && <span className="project-type">{project.Type}</span>}
          <h1>{project.title}</h1>
          
          {project.body && <p className="project-body">{project.body}</p>}
          <div className="project-meta">
            {project.createdAt && (
              <span>Created: {new Date(project.createdAt).toLocaleDateString()}</span>
            )}
            {project.updatedAt && (
              <span>Updated: {new Date(project.updatedAt).toLocaleDateString()}</span>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}