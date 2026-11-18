import Link from "next/link";
import CaseImage from "../CaseImage";
export default function Assignment2() {
  return (
    <div className="case-content" id="top">
      <h1>{"Information Architecture"}</h1>
      <p className="intro">
        {"A collaborative sitemap study of MR’s website."}
      </p>
      <section className="objectives content-stack" id="objectives">
        <h2>{"Objectives"}</h2>
        <p>
          {
            "Document the structure of the MR website in a sitemap, showing its page hierarchy and navigation connections."
          }
        </p>
      </section>
      <section className="section content-stack lead-media" id="sitemap">
        <h2>{"Sitemap"}</h2>
        <figure className="assignment-image">
          <CaseImage
            src="/case-studies/assignment-2/sitemap.jpg"
            alt="Physical sitemap organized with pink sticky notes and branching connections"
            width={1800}
            height={1400}
            blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAJAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwD/xAAcEAACAgIDAAAAAAAAAAAAAAAAAwExAhEhMkH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEx/9oADAMBAAIRAxEAPwBmZcyS4jXlhMsRXUJ3H//Z"
            title="Information Architecture"
            year={2026}
          />
        </figure>
      </section>
      <section className="section content-stack" id="process">
        <h2>{"Process"}</h2>
        <p>
          {
            "Our group mapped MR’s existing website by following each navigation tab, the pages beneath it, and their links to deeper levels. We organized the pages with sticky notes to make the hierarchy visible. The sitemap made the relationship between top-level navigation and deeper pages easier to see. "
          }
        </p>
        <figure className="assignment-image">
          <CaseImage
            src="/case-studies/assignment-2/site-reference.jpg"
            alt="MR website reference showing navigation categories and homepage content"
            width={1800}
            height={998}
            blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAHAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMF/8QAGxAAAwEBAQEBAAAAAAAAAAAAAQIDBAARIXH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A2L52vuoq6ryEwpCq3oJ62PNO2SdKqzOR9Z29J/fOc4P/2Q=="
            title="Information Architecture"
            year={2026}
          />
        </figure>
      </section>
      <section className="section content-stack" id="reflection">
        <h2>{"Reflection"}</h2>
        <p>
          {
            "I enjoy thinking with sticky notes, so mapping a website physically made the exercise especially engaging. Comparing sites also showed me how much their depth can vary, particularly when a resource-heavy site has many different kinds of information to organize. "
          }
        </p>
      </section>
      <div className="end">
        <Link href="/case-studies/assignment-1/" style={{ color: "black" }}>
          {"← Assignment 1"}
        </Link>
        <Link href="/case-studies/project-1/" style={{ color: "black" }}>
          {"Project 1 →"}
        </Link>
      </div>
    </div>
  );
}
