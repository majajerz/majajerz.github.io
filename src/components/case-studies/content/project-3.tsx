import Link from "next/link";
import CaseImage from "../CaseImage";
import ProcessMosaic from "../ProcessMosaic";
export default function Project3() {
  return (
    <div className="case-content" id="top">
      <h1>{"Exhibition Folio & Augmented Reality"}</h1>
      <p className="intro">
        {
          "Jim Arendt · In the Making · South Carolina State Museum · Printed lookbook & AR experience"
        }
      </p>
      <section className="objectives content-stack" id="objectives">
        <h2>{"Objectives"}</h2>
        <p>
          {
            "Design a printed folio introducing Jim Arendt for the South Carolina State Museum’s In the Making exhibition. Combine paper construction, expressive typography, and augmented reality to communicate the artist’s life and work."
          }
        </p>
      </section>
      <section className="section content-stack lead-media" id="folio">
        <h2>{"Final folio"}</h2>
        <div
          className="folio-photo-row"
          style={{ gridTemplateColumns: "1.3333fr .75fr" }}
        >
          <figure>
            <CaseImage
              src="/case-studies/project-3/img_8485.jpg"
              alt="Jim Arendt folio front cover"
              width={1800}
              height={1350}
              blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAJAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAP/xAAgEAABBAEEAwAAAAAAAAAAAAABAAIDERIEBRMzMXFy/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABYRAAMAAAAAAAAAAAAAAAAAAAABMf/aAAwDAQACEQMRAD8AtveRlLWl9cRIxJ82k6ezpYcrvAXaNvXYz0kw9EXwEUDp/9k="
              title="Exhibition Folio & Augmented Reality"
              year={2026}
            />
          </figure>
          <figure>
            <CaseImage
              src="/case-studies/project-3/img_8491.jpg"
              alt="Folio back cover with credits and AR access code"
              width={1350}
              height={1800}
              blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQD/xAAhEAACAQMEAwEAAAAAAAAAAAABAhEAAwQSExRRBQYVIf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAVEQEBAAAAAAAAAAAAAAAAAAAAQf/aAAwDAQACEQMRAD8Ar+TfPsPH5F1bZuxpDECIpnBLPYJdixDsJPQY0VmePb6jZW3ecF5hYg/ndKYA2sVVZGQyTpYyRJpB/9k="
              title="Exhibition Folio & Augmented Reality"
              year={2026}
            />
          </figure>
        </div>
        <p>
          {
            "The denim strips in the second spread echo the material Arendt tears and incorporates into his work. I wanted the folio’s construction to make that connection tangible as visitors unfold it. "
          }
        </p>
        <div
          className="folio-photo-row"
          style={{ gridTemplateColumns: "1.4068fr 1.6516fr" }}
        >
          <figure>
            <CaseImage
              src="/case-studies/project-3/img_8487.jpg"
              alt="Artist biography and portrait panels"
              width={1800}
              height={1279}
              blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAIAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMF/8QAHRAAAgICAwEAAAAAAAAAAAAAAQIAAwURBBMxYf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEx/9oADAMBAAIRAxEAPwCj8m5MlZ1mwqHbaqT9mriHa3HVu5Zm2QS/vsRJmF//2Q=="
              title="Exhibition Folio & Augmented Reality"
              year={2026}
            />
          </figure>
          <figure>
            <CaseImage
              src="/case-studies/project-3/img_8488.jpg"
              alt="Discontent artwork spread with curved fold-out panels"
              width={1800}
              height={1090}
              blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAHAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAME/8QAIBAAAgIBAwUAAAAAAAAAAAAAAQIAAwUEERITFCExcf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhEDEQA/AL92hQdJ60rPkBkO/wA9TPkrsdbqFZ6yW4AHiNhEQ5Kx/9k="
              title="Exhibition Folio & Augmented Reality"
              year={2026}
            />
          </figure>
        </div>
        <div
          className="folio-photo-row"
          style={{ gridTemplateColumns: "1.2222fr .7541fr" }}
        >
          <figure>
            <CaseImage
              src="/case-studies/project-3/img_8489.jpg"
              alt="Artist timeline across folding panels"
              width={1800}
              height={1473}
              blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAKAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAgT/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABBEFEiEUMUFh4f/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhEDEQA/ADc3s/XSok8gVXIwCeOT8qvTppjbZeVmJPfcT4FXy20B3sYYyx5J2DJoxRoqYVFA9CjJr//Z"
              title="Exhibition Folio & Augmented Reality"
              year={2026}
            />
          </figure>
          <figure>
            <CaseImage
              src="/case-studies/project-3/img_8490.jpg"
              alt="Open folio showing denim textures and artwork"
              width={1357}
              height={1800}
              blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQL/xAAgEAACAAYCAwAAAAAAAAAAAAABAgADBBESITFhBSJx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAQEBAAAAAAAAAAAAAAAAAAABQf/aAAwDAQACEQMRAD8AoSVL4OABYBjbqD/MJaqQJwJY4H2Epc5ypDJ64gg36gyvqQ01GxG031swSnX/2Q=="
              title="Exhibition Folio & Augmented Reality"
              year={2026}
            />
          </figure>
        </div>
      </section>
      <section className="section content-stack" id="ar">
        <h2>{"Augmented reality"}</h2>
        <p>
          {
            "AR adds Arendt’s voice explaining his work and a digital flip-through of additional pieces. It extends what the printed folio can show. "
          }
        </p>
        <p>
          {
            "Scan the QR code, open the web app, and press Start. Then point the camera at each of the two trigger images to activate the content. "
          }
        </p>
        <video
          className="folio-ar-video"
          controls
          playsInline
          preload="none"
          poster="/case-studies/project-3/project-3-c6438574.jpg"
          aria-label="Folio and augmented reality demonstration"
        >
          <source src="/case-studies/videos/project-3.mp4" type="video/mp4" />
          {"Your browser cannot play this recording."}
        </video>
        <p className="video-note">
          {
            "Folio & AR walkthrough · Play to see the printed piece and digital interaction."
          }
        </p>
      </section>
      <section className="section content-stack" id="process">
        <h2>{"Process & development"}</h2>
        <div className="process-part content-stack">
          <h3>{"Research & visual direction"}</h3>
          <p>
            {
              "Denim textures, a navy palette, and lettering reminiscent of jeans patches connect the folio to Arendt’s materials. I was interested in how wear on the printed surfaces might eventually echo worn denim. "
            }
          </p>
        </div>
        <div className="process-part content-stack">
          <h3>{"Sketches, construction & testing"}</h3>
          <p>
            {
              "I built mockups at several sizes and with different papers, working through at least three redesigns. The folds and panel relationships became clearer through making, but heavier final stock changed how the panels aligned. "
            }
          </p>
          <ProcessMosaic
            variant="folio"
            title="Exhibition Folio & Augmented Reality"
            year={2026}
            images={[
              {
                src: "/case-studies/project-3/process-zoom-ins.jpg",
                alt: "Early folio concept and folding sketches",
                width: 1391,
                height: 1800,
                blur: "data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgMG/8QAHBAAAQQDAQAAAAAAAAAAAAAAAQACAxEhMTJR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANO/vwVSUQpm7yg8W52yqR84CD//2Q==",
              },
              {
                src: "/case-studies/project-3/process-design-1.jpg",
                alt: "Adobe cover and timeline design iterations",
                width: 1800,
                height: 1380,
                blur: "data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAJAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQIE/8QAHxAAAgEEAgMAAAAAAAAAAAAAAQIAAxESIQQxNYPB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDPWQ0lQuuIdchu9xI0QO43yvEepPkElH//2Q==",
              },
              {
                src: "/case-studies/project-3/process-design-2.jpg",
                alt: "Artwork placement, denim texture, and panel explorations",
                width: 1800,
                height: 1389,
                blur: "data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAJAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwT/xAAiEAABBAECBwAAAAAAAAAAAAACAAEDERIEITEzNEGBsfD/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AC08BnRjjxxayrdHIDxyEBVkL09OrW6cPuyPU85/PtUf/9k=",
              },
              {
                src: "/case-studies/project-3/process-design-3.jpg",
                alt: "Timeline and cover layout development",
                width: 1270,
                height: 1500,
                blur: "data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAOAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgEF/8QAHRAAAQUBAAMAAAAAAAAAAAAAAgABAxESITFBUf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8AzpSdjy1+LtOO89e76oQA8mi1ea58SjERH310wV//2Q==",
              },
            ]}
          />
        </div>
      </section>
      <section className="section content-stack" id="reflection">
        <h2>{"Reflection & outcomes"}</h2>
        <p>
          {
            "This project expanded how I think about design beyond the screen. Printing, binding, and building the folio taught me how much the final experience depends on materials and craftsmanship. "
          }
        </p>
        <p>
          {
            "I enjoyed the early paper mockups, but moving to heavier stock exposed alignment issues that lighter tests had missed. In future, I would test the complete construction with the final paper earlier and pay closer attention to wear at the hinges. Despite the frustrations, having a physical piece that people can unfold and explore made the process worthwhile. "
          }
        </p>
      </section>
      <div className="end">
        <Link href="/case-studies/project-2/" style={{ color: "black" }}>
          {"← Project 2"}
        </Link>
        <a href="#top" style={{ color: "black" }}>
          {"↑ Back to top"}
        </a>
      </div>
    </div>
  );
}
