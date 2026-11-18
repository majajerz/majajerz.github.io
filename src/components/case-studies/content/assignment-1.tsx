import Link from "next/link";
import CaseImage from "../CaseImage";
export default function Assignment1() {
  return (
    <div className="case-content" id="top">
      <h1>{"Dissect a Single Web Page"}</h1>
      <p className="intro">
        {
          "A collaborative analysis of ChatGPT’s homepage across desktop and mobile."
        }
      </p>
      {"\n"}
      <section className="objectives content-stack" id="objectives">
        <h2>{"Objectives"}</h2>
        <p>
          {
            "Analyze the main elements of an assigned web page on desktop and mobile, using annotations to explain its structure and usability."
          }
        </p>
      </section>
      {"\n"}
      <div className="pair" id="analysis">
        <figure>
          <div className="plate">
            <CaseImage
              src="/case-studies/assignment-1/assignment-1-49255f62.jpg"
              alt="Annotated desktop interface analysis"
              width={2200}
              height={1233}
              blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAHAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEG/8QAFRABAQAAAAAAAAAAAAAAAAAAADH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A1cUAf//Z"
              title="Dissect a Single Web Page"
              year={2026}
            />
          </div>
          <figcaption>
            {"01   Desktop analysis :  annotated interface"}
          </figcaption>
        </figure>
        <figure>
          <div className="plate phone">
            <CaseImage
              src="/case-studies/assignment-1/assignment-1-edf2f5d4.jpg"
              alt="Annotated mobile interface analysis"
              width={2200}
              height={1322}
              blurDataURL="data:image/jpeg;base64,/9j/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAHAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEG/8QAFhABAQEAAAAAAAAAAAAAAAAAAAEx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANXNUAf/2Q=="
              title="Dissect a Single Web Page"
              year={2026}
            />
          </div>
          <figcaption>
            {"02   Mobile analysis :  annotated interface"}
          </figcaption>
        </figure>
      </div>
      {"\n"}
      <section className="section content-stack" id="context">
        <h2>{"Subject: ChatGPT"}</h2>
        <p>
          {
            "ChatGPT was assigned to our group for a comparison of desktop and mobile interfaces. We annotated the pages to identify their main elements. "
          }
        </p>
      </section>
      {"\n"}
      <section className="section content-stack" id="findings">
        <h2>{"What we noticed"}</h2>
        <p>
          {
            "The message field gave the page a clear starting point, while suggested prompts offered examples of what to ask. Desktop arranged those prompts in a horizontal row; mobile stacked them vertically while keeping the same focus on starting a conversation. "
          }
        </p>
      </section>
      {"\n"}
      <section className="section content-stack" id="process">
        <h2>{"Working together in Miro"}</h2>
        <p>
          {
            "I contributed to the group discussion and annotations in Miro. We used the shared board to ask questions and check our interpretations as we identified the different parts of the interface. "
          }
        </p>
      </section>
      {"\n"}
      <section className="section content-stack" id="reflection">
        <h2>{"Reflection"}</h2>
        <p>
          {
            "With a small foundation in HTML, I was used to thinking about how a page was coded. This exercise shifted my attention to how its elements guide someone through it, and introduced me to working collaboratively in Miro. "
          }
        </p>
        <p>
          {
            "I still enjoyed some of the visually chaotic examples, even when they were difficult to navigate. That distinction stayed with me: a page can be fun to look at and still be frustrating to use. "
          }
        </p>
      </section>
      {"\n"}
      <div className="end">
        <a href="#" style={{ color: "black" }}>
          {"↑ Back to top"}
        </a>
        <Link href="/case-studies/assignment-2/" style={{ color: "black" }}>
          {"Assignment 2 →"}
        </Link>
      </div>
    </div>
  );
}
