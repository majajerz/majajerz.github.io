import Link from "next/link";
import CaseImage from "../CaseImage";
export default function Project1() {
  return (
    <div className="case-content" id="top">
      <h1>{"Dieter Rams"}</h1>
      <p className="intro">
        {"Single-page scrolling website · Mobile UI design & Figma prototype"}
      </p>
      <section className="objectives content-stack" id="objectives">
        <h2>{"Objectives"}</h2>
        <p>
          {
            "Design a single-page mobile website introducing Dieter Rams and three of his works. Use layout, typography, color, and navigation to reflect his restrained design approach."
          }
        </p>
      </section>
      <section className="section content-stack lead-media" id="finished">
        <h2>{"Final design & prototype"}</h2>
        <div className="final-presentation">
          <figure className="design-overview">
            <CaseImage
              src="/case-studies/project-1/project-1-8cfc87f4-cropped.jpg"
              alt="Overview of the finished mobile website screens"
              width={800}
              height={1437}
              blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAVAAwDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAABBf/EACMQAAEDAgUFAAAAAAAAAAAAAAEAAgQDERITIkFRFDFxscH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDsx4gdJNUuOZgDb7WBJ7DykdFy72tigCobNtp+pSkAIFQPrOAaRp5vunqUkH//2Q=="
              title="Dieter Rams"
              year={2026}
            />
          </figure>
          <div className="video-column" id="prototype">
            <div className="video-player">
              <video
                controls
                playsInline
                preload="none"
                poster="/case-studies/project-1/project-1-5b737618.jpg"
                aria-label="Dieter Rams mobile prototype walkthrough"
              >
                <source
                  src="/case-studies/videos/project-1.mp4"
                  type="video/mp4"
                />
                {"Your browser cannot play this recording."}
              </video>
            </div>
            <p className="prototype-action">
              <a
                className="prototype-link"
                href="https://www.figma.com/proto/JFz9YhQU48QEGtf15TRBN1/Demo--Project-1-MAJA?node-id=1-55&t=LwoBfhHbe7WYSemB-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Open the interactive Figma prototype ↗"}
              </a>
            </p>
          </div>
        </div>
        <p>
          {
            "I gave each of Rams’s designs space within a restrained layout. Visitors can scroll through the page, jump between the three works using the menu, and return to the top. "
          }
        </p>
      </section>
      <section className="section content-stack" id="process">
        <h2>{"Process & development"}</h2>
        <p>
          {
            "I arranged the content vertically, with left-aligned text and a menu at the top right. Generous space around each object was intended to echo the restraint of Rams’s work and give each piece its own moment. "
          }
        </p>
        <div className="compact-process">
          <figure>
            <CaseImage
              src="/case-studies/project-1/research.jpg"
              alt="Dieter Rams research and content planning"
              width={959}
              height={1600}
              blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAUAAwDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBAwb/xAAgEAABBAIBBQAAAAAAAAAAAAABAAIRIQMSQSIxUXGB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANKXdR1+2nYZF37UGdidI4nynGNo4lBWJOUiT3TucW0EIQf/2Q=="
              title="Dieter Rams"
              year={2026}
            />
          </figure>
          <figure>
            <CaseImage
              src="/case-studies/project-1/sketch.jpg"
              alt="Hand-drawn scrolling website wireframe"
              width={862}
              height={1400}
              blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAUAAwDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAECAwb/xAAeEAACAgICAwAAAAAAAAAAAAABAgARAyESMTJBUf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDpBzORjegdCqlI3IWwo/LibxcWZKaUCuoGuQccbt3q9xYmvEpPsQhA/9k="
              title="Dieter Rams"
              year={2026}
            />
          </figure>
        </div>
      </section>
      <section className="section content-stack" id="visuals">
        <h2>{"Visual direction & components"}</h2>
        <p>
          {
            "The neutral palette draws from the wood tones and natural colors I noticed in Rams’s pieces. It keeps the surrounding interface quiet so the objects remain the focus. "
          }
        </p>
        <div className="style-board">
          <CaseImage
            src="/case-studies/project-1/styles-cropped.jpg"
            alt="Typography, palette, components and image style sheet"
            width={1141}
            height={465}
            blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAFAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIF/8QAHhAAAgMAAQUAAAAAAAAAAAAAAQIAAxFBBAUSEyH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABURAQEAAAAAAAAAAAAAAAAAAABB/9oADAMBAAIRAxEAPwDav6FAieK1As6gn18b95lVdvpsrV8A0bmCIhY//9k="
            title="Dieter Rams"
            year={2026}
          />
        </div>
      </section>
      <section className="section content-stack" id="reflection">
        <h2>{"Reflection & outcomes"}</h2>
        <p>
          {
            "This project introduced me to Figma’s prototyping tools and reusable styles. The in-class demo helped me get started, but organizing interactions across frames was a challenge. I later realized that nested frames could have simplified the structure. "
          }
        </p>
        <p>
          {
            "I’m happy with the restrained visual direction. In another pass, I would reduce the amount of text and spend more time testing the flow between sections. "
          }
        </p>
      </section>
      <div className="end">
        <Link href="/case-studies/assignment-2/" style={{ color: "black" }}>
          {"← Assignment 2"}
        </Link>
        <Link href="/case-studies/project-2/" style={{ color: "black" }}>
          {"Project 2 →"}
        </Link>
      </div>
    </div>
  );
}
