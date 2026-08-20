"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./our-work.css";

function OurWork() {
  const pathname = usePathname();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    let isMounted = true;

    async function fetchArticles() {
      try {
        const response = await fetch("/api/articles");

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

  const serviceTypes = [
    "all",
    ...new Set(
      articles
        .map((article) => article.Type?.trim())
        .filter(Boolean)
    ),
  ];
  const filteredArticles = selectedType === "all"
    ? articles
    : articles.filter((article) => article.Type?.trim() === selectedType);
  const displayedArticles = pathname === "/"
    ? filteredArticles.slice(0, 3)
    : filteredArticles;

  return (
    <div className="our-work">
      <h2>Our Work</h2>
      <p>Check out some of our recent projects and collaborations.</p>
      {!isLoading && !error && articles.length > 0 && (
        <div className="service-filters" aria-label="Filter projects by service">
          {serviceTypes.map((type) => (
            <div key={type} className="service-filter-container">
            {type === "all" && pathname !== "/our-work" ? (
              <Link
                className="service-filter"
                href="/our-work"
              >
                View All
              </Link>
            ) : type === "all" ? (
              <button
                className={selectedType === "all" ? "service-filter active" : "service-filter"}
                type="button"
                onClick={() => setSelectedType("all")}
              >
                All
              </button>
            ) : (
              <button
                className={selectedType === type ? "service-filter active" : "service-filter"}
                type="button"
                onClick={() => setSelectedType(type)}
              >
                {type}
              </button>
            )}
            </div>
          ))}
        </div>
      )}
      <div className="work-gallery">
        {isLoading && <p className="work-status">Loading projects...</p>}
        {!isLoading && error && <p className="work-status work-error">{error}</p>}
        {!isLoading && !error && articles.length === 0 && (
          <p className="work-status">No projects available yet.</p>
        )}
        {!isLoading && !error && articles.length > 0 && displayedArticles.length === 0 && (
          <p className="work-status">No projects found for this service.</p>
        )}
        {!isLoading && !error && displayedArticles.map((article, index) => (
          <div className="card" key={article._id}>
            <Link className="work-card-link" href={`/project/${article._id}`}>
              <article
                className="work-card"
                data-aos="fade-left"
                data-aos-delay={300 + index * 150}
              >
                {(article.image || article.imae) && (
                  <img
                    className="work-card-image"
                    src={article.image || article.imae}
                    alt={article.title || "Project"}
                  />
                )}
                <div className="work-card-content">
                  {article.Type && <span className="work-card-type">{article.Type}</span>}
                  <h3>{article.title}</h3>
                </div>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurWork;