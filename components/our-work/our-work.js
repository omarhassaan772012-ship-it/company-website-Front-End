"use client";

import { useEffect, useState } from "react";
import "./our-work.css";

function OurWork() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchArticles() {
      try {
        const response = await fetch("https://website-back-end.vercel.app/api/articles");

        if (!response.ok) {
          throw new Error("Unable to load projects");
        }

        const data = await response.json();

        if (isMounted) {
          setArticles(Array.isArray(data) ? data : []);
        }
      } catch (fetchError) {
        if (isMounted) {
          setError(fetchError.message || "Unable to load projects");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchArticles();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="our-work">
      <h2>Our Work</h2>
      <p>Check out some of our recent projects and collaborations.</p>
      <div className="work-gallery">
        {isLoading && <p className="work-status">Loading projects...</p>}
        {!isLoading && error && <p className="work-status work-error">{error}</p>}
        {!isLoading && !error && articles.length === 0 && (
          <p className="work-status">No projects available yet.</p>
        )}
        {!isLoading && !error && articles.map((article) => (
            <div className="card" key={article._id}>
          <article className="work-card" key={article._id}>
            {article.image && (
              <img
                className="work-card-image"
                src={article.image}
                alt={article.title || "Project"}
              />
            )}
            <div className="work-card-content">
              {article.Type && <span className="work-card-type">{article.Type}</span>}
              <h3>{article.title}</h3>
              {/* {article.body && <p>{article.body}</p>} */}
            </div>
          </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurWork;