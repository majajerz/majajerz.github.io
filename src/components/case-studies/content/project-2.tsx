import Link from "next/link";
import CaseImage from "../CaseImage";
import ProcessMosaic from "../ProcessMosaic";
export default function Project2() {
  return (
    <div className="case-content" id="top">
      <h1>{"Tagged Bird, Do Not Disturb"}</h1>
      <p className="intro">
        {
          "Ad Council Campaign · Billboards, digital advertising, website & widget"
        }
      </p>
      <section className="objectives content-stack" id="objectives">
        <h2>{"Objectives"}</h2>
        <p>
          {
            "Create a public awareness campaign about a South Carolina law protecting tagged pigeons, including three billboards, digital ads, a responsive website, and a proposed widget. Help viewers recognize the birds and understand why they should be left undisturbed."
          }
        </p>
      </section>
      <section id="billboards" className="content-stack">
        <div className="full">
          <figure>
            <CaseImage
              src="/case-studies/project-2/hero.jpg"
              alt="01 · Text-heavy billboard"
              width={1800}
              height={1200}
              blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAIAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAbEAEAAgMBAQAAAAAAAAAAAAABAgMAERIhMf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAXEQEBAQEAAAAAAAAAAAAAAAABEQAh/9oADAMBAAIRAxEAPwCy9vpvjIjNgoHKeuUFsk2dR37p+4xjBW4HhDf/2Q=="
              title="Tagged Bird, Do Not Disturb"
              year={2026}
            />
            <figcaption>{"Text-heavy billboard"}</figcaption>
          </figure>
        </div>
        <div className="row">
          <figure>
            <CaseImage
              src="/case-studies/project-2/billboard2.jpg"
              alt="02 · Image-heavy billboard"
              width={1300}
              height={867}
              blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAIAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAME/8QAGxAAAgMBAQEAAAAAAAAAAAAAAQIAAxEEIXH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAGBEAAgMAAAAAAAAAAAAAAAAAABEBITH/2gAMAwEAAhEDEQA/ANXbf0N0hUSxlIwZnp+y9KWLSgsUhwo0ExEbJAdI/9k="
              title="Tagged Bird, Do Not Disturb"
              year={2026}
            />
            <figcaption>{"Image-heavy billboard"}</figcaption>
          </figure>
          <figure>
            <CaseImage
              src="/case-studies/project-2/billboard3.jpg"
              alt="03 · Combined image and text billboard"
              width={1300}
              height={867}
              blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAIAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAdEAACAgIDAQAAAAAAAAAAAAABAwACERIEEyGh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAYEQADAQEAAAAAAAAAAAAAAAAAARESMf/aAAwDAQACEQMRAD8Aocxy2kBLtdtQRjB+yxHJZdQ7KWXYeYzERUq6TzPD/9k="
              title="Tagged Bird, Do Not Disturb"
              year={2026}
            />
            <figcaption>{"50/50 billboard"}</figcaption>
          </figure>
        </div>
      </section>
      <section className="section content-stack" id="campaign">
        <h2>{"The campaign"}</h2>
        <p>
          {
            "For this student brief, I developed an Ad Council awareness campaign around S.C. Code § 50-11-853. The message addresses people who might take home a tired-looking tagged pigeon without realizing it is protected. "
          }
        </p>
        <p>
          {
            "The text-heavy billboard pairs the slogan with a pigeon so an unfamiliar phrase has an immediate visual reference. A close crop of the face gives the image-heavy version an expressive, slightly goofy character. The 50/50 version balances the full bird with the copy. "
          }
        </p>
      </section>
      <section className="section content-stack" id="desktop">
        <h2>{"Desktop website"}</h2>
        <p>
          {
            "I organized the site around Code, Tag, and More. Code introduces the law and penalties; Tag explains how to recognize a banded pigeon; More links to the AU band database and state statute. The playful identity leads into direct information for someone who has found a bird. "
          }
        </p>
        <div className="row">
          <figure>
            <CaseImage
              src="/case-studies/project-2/web.jpg"
              alt="Desktop · Campaign landing page"
              width={1300}
              height={975}
              blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAJAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQAD/8QAIBAAAQIFBQAAAAAAAAAAAAAAAQACAwQSITERExQVUf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAwDAQACEQMRAD8ATmux5zwwxRBLrEeJOVq2BWXE6m7srZQwpNoVP//Z"
              title="Tagged Bird, Do Not Disturb"
              year={2026}
            />
          </figure>
          <figure>
            <CaseImage
              src="/case-studies/project-2/web2.jpg"
              alt="Desktop · Supporting information"
              width={1300}
              height={975}
              blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAJAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQED/8QAHhABAAEEAgMAAAAAAAAAAAAAAQIAAwQREjEFExT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/EABcRAAMBAAAAAAAAAAAAAAAAAAABEQL/2gAMAwEAAhEDEQA/AE858g5U/UXi3vUeKB1SeHy+S0TVkRCW3butWqdUKeqpD//Z"
              title="Tagged Bird, Do Not Disturb"
              year={2026}
            />
          </figure>
        </div>
        <video
          className="website-video"
          controls
          playsInline
          preload="none"
          poster="/case-studies/project-2/desktop-poster.jpg"
          aria-label="Desktop website prototype recording"
        >
          <source
            src="/case-studies/videos/project-2-desktop.mp4"
            type="video/mp4"
          />
          {"Your browser cannot play this recording."}
        </video>
        <p className="view-note">
          {"Desktop prototype walkthrough · Play to explore the interaction."}
        </p>
        <p>
          <a
            className="text-link"
            href="https://www.figma.com/proto/D5mntaICQJPfChvzoje82J/Project-Pigeon?node-id=339-749&t=KEQUzrYCaaLYJFSW-1&scaling=scale-down&content-scaling=fixed&page-id=317%3A498"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Open desktop Figma prototype ↗"}
          </a>
        </p>
      </section>
      <section className="section content-stack" id="mobile">
        <h2>{"Mobile website"}</h2>
        <p>
          {
            "On mobile, the content stacks vertically while retaining the same Code, Tag, and More navigation and campaign identity. "
          }
        </p>
        <video
          className="website-video mobile-video"
          controls
          playsInline
          preload="none"
          poster="/case-studies/project-2/mobile-poster.jpg"
          aria-label="Mobile website prototype recording"
        >
          <source
            src="/case-studies/videos/project-2-mobile.mp4"
            type="video/mp4"
          />
          {"Your browser cannot play this recording."}
        </video>
        <p className="view-note">
          {
            "Mobile prototype walkthrough · Play to see the scrolling experience."
          }
        </p>
        <p>
          <a
            className="text-link"
            href="https://www.figma.com/proto/D5mntaICQJPfChvzoje82J/Project-Pigeon?node-id=324-499&p=f&t=VIXmamVDyTFAeQ6t-1&scaling=scale-down&content-scaling=fixed&page-id=317%3A497&starting-point-node-id=324%3A499"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Open mobile Figma prototype ↗"}
          </a>
        </p>
      </section>
      <section className="section content-stack" id="ads">
        <h2>{"Instagram & digital ads"}</h2>
        <p>
          {
            "The Instagram layout took several passes to balance the illustration, slogan, and Ad Council logo within a square. I brought it closer to the text-heavy billboard, whose tagged-foot illustration felt especially relevant to the message. "
          }
        </p>
        <p>
          {
            "The horizontal banner relies on bold typography. The vertical skyscraper gives the illustration more space, using the same slogan and palette to connect it to the campaign. "
          }
        </p>
        <div className="combined-ads">
          <figure>
            <CaseImage
              src="/case-studies/project-2/social.jpg"
              alt="Instagram advertisement"
              width={786}
              height={1823}
              blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAcAAwDASIAAhEBAxEB/8QAGQAAAQUAAAAAAAAAAAAAAAAABgECAwQF/8QAJhAAAQMCBAYDAAAAAAAAAAAAAQIDEQAEEiFBURUWMTLB8CNx0f/EABYBAQEBAAAAAAAAAAAAAAAAAAACA//EABoRAAIDAQEAAAAAAAAAAAAAAAECAAMRInH/2gAMAwEAAhEDEQA/AB1aLfLEpaSMu3SPvenNptFJ+S4WkjoA3Pmio2dtEC3bKo6lOXudWGbRospxWzQMaIFS7BBpiphZ7MTj1qlQJZfVtK581LzQ2e1t0DaR+0MlR9NJM6CszSrHTpgcjBP/2Q=="
              title="Tagged Bird, Do Not Disturb"
              year={2026}
            />
            <figcaption>{"Instagram"}</figcaption>
          </figure>
          <figure>
            <CaseImage
              src="/case-studies/project-2/banner.jpg"
              alt="Horizontal banner advertisement"
              width={402}
              height={874}
              blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAaAAwDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUBAwQG/8QAIxAAAQQCAQMFAAAAAAAAAAAAAQACAxEEEgUTFDEhUXGS4f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8Ae99JuQMXIA9wBaO+cLrDyvouflm5IyTtDs0OEztTsQ3WzQC2cTLyDsaQznI26hrcG6ofqSlh6JJS6ukfPkn0VouhYo/KlCD/2Q=="
              title="Tagged Bird, Do Not Disturb"
              year={2026}
            />
            <figcaption>{"Horizontal banner"}</figcaption>
          </figure>
          <figure>
            <CaseImage
              src="/case-studies/project-2/skyscraper.jpg"
              alt="Vertical skyscraper advertisement"
              width={1400}
              height={759}
              blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAGAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQF/8QAHhAAAQQCAwEAAAAAAAAAAAAAAgABAxESEwQhMdH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A39c5CFT04O+dheXxUceTbCxtfd+oiD//2Q=="
              title="Tagged Bird, Do Not Disturb"
              year={2026}
            />
            <figcaption>{"Vertical skyscraper"}</figcaption>
          </figure>
        </div>
      </section>
      <section className="section content-stack" id="widget">
        <h2>{"Widget"}</h2>
        <p>
          {
            "The widget is a proposed band-code lookup inspired by pet microchip searches. A finder would enter the code to look for information and next steps before taking the bird home. The lookup is a design concept, not a working service. "
          }
        </p>
        <div className="widget-pair">
          <figure>
            <CaseImage
              src="/case-studies/project-2/widget-art.jpg"
              alt="Widget · Check That Tag"
              width={620}
              height={620}
              blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAMAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgQF/8QAHhAAAgICAgMAAAAAAAAAAAAAAQIDEQAEEiEiMWH/xAAVAQEBAAAAAAAAAAAAAAAAAAABBP/EABkRAQADAQEAAAAAAAAAAAAAAAEAAhEDBP/aAAwDAQACEQMRAD8AEEaFEVhQU2xuuvmPc03n2C0XFUAAAJ9ZowxBo0cs3koNX0LGT7TvBIFR2IIvs5IetbaEDllcWf/Z"
              title="Tagged Bird, Do Not Disturb"
              year={2026}
            />
          </figure>
          <figure>
            <CaseImage
              src="/case-studies/project-2/widget.jpg"
              alt="Widget · Phone home screen"
              width={866}
              height={1772}
              blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAZAAwDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMCBAX/xAAlEAACAQMCBgMBAAAAAAAAAAABAgMAERIEIRMiMTNCcRRhgUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAGBEBAQEBAQAAAAAAAAAAAAAAAREAAhL/2gAMAwEAAhEDEQA/ACSLTzlcocpLbsbi569b/dErtp2EcTGNQBshIFTK4LG/ES+N7X3t6/KRq8lkTieSKw9GjiObzzKOdGX5D8pEKgAA+Nv5S9WJJZsmk45xHMu9vqt+but7qzpe1+0q3EM3/9k="
              title="Tagged Bird, Do Not Disturb"
              year={2026}
            />
          </figure>
        </div>
      </section>
      <section className="section content-stack" id="process">
        <h2>{"Process & development"}</h2>
        <div className="process-part content-stack">
          <h3>{"Moodboard"}</h3>
          <p>
            {
              "I explored bold color, graphic shapes, and an expressive pigeon to catch attention quickly. A slightly amusing tone made the unfamiliar subject feel approachable. "
            }
          </p>
          <div className="full">
            <figure>
              <CaseImage
                src="/case-studies/project-2/mood.jpg"
                alt="Moodboard of campaign references"
                width={1300}
                height={1040}
                blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAKAAwDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgMEBf/EACEQAAEDAwQDAAAAAAAAAAAAAAECAxEABBIhMUFREzJh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAXEQEAAwAAAAAAAAAAAAAAAAAAAREx/9oADAMBAAIRAxEAPwDWubo22alqk84qOmsCB3VNm+XG1FThXCyNoj5RpYZ28SOT6junNtoSDihIkzoKnJLf/9k="
                title="Tagged Bird, Do Not Disturb"
                year={2026}
              />
            </figure>
          </div>
        </div>
        <div className="process-part content-stack">
          <h3>{"Personas & audience"}</h3>
          <p>
            {
              "Suburban Sam, the Everyman, cares about wildlife but may take a tired bird home without understanding the consequences. Handler Hank, the Sage, is an experienced homing-pigeon breeder and racer who wants the birds to continue their journeys safely. "
            }
          </p>
          <p>
            {
              "Sam informed the clear introduction for people unfamiliar with the law. Hank directed attention to recognizing bands and finding useful information. "
            }
          </p>
          <div className="row personas">
            <figure>
              <CaseImage
                src="/case-studies/project-2/sam.jpg"
                alt="Suburban Sam persona"
                width={1300}
                height={841}
                blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAIAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAME/8QAHBAAAQQDAQAAAAAAAAAAAAAAAAECAxExUVKh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAT/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8A0wxMpbdjalUjZ36ASwf/2Q=="
                title="Tagged Bird, Do Not Disturb"
                year={2026}
              />
            </figure>
            <figure>
              <CaseImage
                src="/case-studies/project-2/hank.jpg"
                alt="Handler Hank persona"
                width={1300}
                height={841}
                blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAIAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAdEAACAgEFAAAAAAAAAAAAAAABAwACBBEhQVOi/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIh/9oADAMBAAIRAxEAPwC/AUthba99DtyBLghPZ6ERK1jCj//Z"
                title="Tagged Bird, Do Not Disturb"
                year={2026}
              />
            </figure>
          </div>
        </div>
        <div className="process-part content-stack">
          <h3>{"Sketches & explorations"}</h3>
          <p>
            {
              "Early sketches included a pigeon in a hat, but the drawings kept resembling ducks or geese. Studying pigeons helped me refine the character, with the banded foot central to the idea. "
            }
          </p>
          <p>
            {
              "In Illustrator, I vectorized the drawings and tested layouts, colors, and the balance of image and type. Several flat-feeling versions preceded the brighter direction that tied the three billboards together. "
            }
          </p>
          <ProcessMosaic
            variant="campaign"
            title="Tagged Bird, Do Not Disturb"
            year={2026}
            images={[
              {
                src: "/case-studies/project-2/sketch-1.jpg",
                alt: "Campaign sketchbook page 1",
                width: 1500,
                height: 1262,
                blur: "data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAKAAwDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQIDBv/EABkQAQEAAwEAAAAAAAAAAAAAAAECABEhcf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDSNhsa6403Ia7kJBK33uFAJ8wP/9k=",
              },
              {
                src: "/case-studies/project-2/sketch-2.jpg",
                alt: "Campaign sketchbook page 2",
                width: 1500,
                height: 1246,
                blur: "data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAKAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwb/xAAeEAEAAgICAwEAAAAAAAAAAAABAhEAAwQSEzFBsf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCkVNc6eskatsvBhcbrXK1t7bKVx9geOTRfX3gcYHjwsPv64H//2Q==",
              },
              {
                src: "/case-studies/project-2/sketch-3.jpg",
                alt: "Campaign sketchbook page 3",
                width: 905,
                height: 1500,
                blur: "data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAUAAwDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUBAwQG/8QAHhAAAgIDAAMBAAAAAAAAAAAAAQIAEQMEIRIiQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A6YAJYUBQPgkq4I6LmZ8rOxUFgB+Hsvxt6DkBDs7GTHm8karvkb6+VmwI11YvghCB/9k=",
              },
              {
                src: "/case-studies/project-2/explorations.jpg",
                alt: "Adobe billboard composition explorations",
                width: 1300,
                height: 1245,
                blur: "data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAALAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwIF/8QAIBAAAgIBAwUAAAAAAAAAAAAAAQIDEQASISIEUWFxsf/EABUBAQEAAAAAAAAAAAAAAAAAAAED/8QAGBEAAgMAAAAAAAAAAAAAAAAAACEBAlH/2gAMAwEAAhEDEQA/AN8KS0paOQWCBbbN67YsHGIDQyeGNnDRAGmILb3fI5XRxrHEypdar3Yn7k5SCun/2Q==",
              },
            ]}
          />
        </div>
      </section>
      <section className="section content-stack" id="reflection">
        <h2>{"Reflection & outcomes"}</h2>
        <p>
          {
            "This felt closer to a real-world design brief than my previous projects because one identity had to work across so many formats. I enjoyed developing the birds and the bold visual language, while the billboard templates and Ad Council requirements pushed me to work within tighter constraints. "
          }
        </p>
        <p>
          {
            "The biggest learning curve was adapting the campaign into Figma, especially sizing and arranging the desktop layout. I would revisit those proportions and refine the interactions. Building the campaign showed me both how much I enjoy visual identity work and where I want to strengthen my web design skills. "
          }
        </p>
      </section>
      <div className="end">
        <a href="#top">{"↑ Back to top"}</a>
        <Link href="/case-studies/project-1/">{"← Project 1"}</Link>
        <Link href="/case-studies/project-3/">{"Project 3 →"}</Link>
      </div>
    </div>
  );
}
