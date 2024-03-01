import { TechStackTagComponent } from "../vite-env";

function TechStackTag({ name }: TechStackTagComponent) {
  return (
    <div className="bg-borderContrastGreenColor font-extrabold font-consolas text-black h-fit w-fit px-2 rounded-md cursor-pointer mr-2 mb-2 transition delay-75 ease-out hover:scale-[1.1]">
      {name}
    </div>
  );
}

function TechStackSection() {
  return (
    <div className="max-h-full mb-4">
      <p className="text-themeWhite font-consolas font-semibold">Tech Stack:</p>

      <div className="flex flex-wrap mt-2">
        <TechStackTag name="Python" />
        <TechStackTag name="Django" />
        <TechStackTag name="MongoDB" />
        <TechStackTag name="Express.js" />
        <TechStackTag name="React.js" />
        <TechStackTag name="Node.js" />
        <TechStackTag name="JavaScript" />
        <TechStackTag name="TypeScript" />
        <TechStackTag name="Firebase" />
        <TechStackTag name="Vite.js" />
        <TechStackTag name="TailwindCSS" />
        <TechStackTag name="HTML" />
        <TechStackTag name="CSS" />
        <TechStackTag name="GraphQL" />
        <TechStackTag name="Vercel" />
        <TechStackTag name="Markdown" />
        <TechStackTag name="Git" />
        <TechStackTag name="Docker" />
      </div>
    </div>
  );
}

function StrengthsAndWeaknesses() {
  return (
    <div className="max-h-full">
      <p className="text-themeWhite font-semibold font-consolas">
        Strengths and Weaknesses
      </p>
      <p className="text-themeLightGray font-consolas mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed facere
        cumque necessitatibus sunt, temporibus voluptate ab, optio itaque
        laborum, quia laudantium quaerat dolores perferendis sequi animi totam
        reiciendis maiores rerum perspiciatis eveniet aut a. Accusantium odit
        illo eligendi soluta minus quibusdam. Eveniet molestiae optio, nulla
        tenetur dolorum similique odio reprehenderit, sapiente recusandae, minus
        veritatis aspernatur? Assumenda ipsa similique a quidem recusandae quae
        modi ullam iste fugit facere perferendis saepe quisquam quia, dolorem,
        reiciendis impedit ab eius sed esse! Cupiditate facere iusto minus eius
        cumque vitae eum, nisi debitis voluptatem explicabo pariatur unde
        doloremque est velit? Expedita iusto esse delectus, repudiandae animi
        molestiae ut explicabo, autem tenetur maiores labore ipsa inventore.
        Facere consequatur neque, ab, debitis quidem rerum sint veritatis ipsum
        suscipit architecto eius. Exercitationem sequi, sapiente sed repellendus
        non voluptatum quas ipsum suscipit impedit nostrum velit quaerat,
        consequuntur reprehenderit quibusdam amet molestias aut inventore
        architecto laudantium, delectus laboriosam fugit pariatur odit.
        Voluptatum ipsum, facere perferendis ea dignissimos quis odit vitae
        veritatis beatae? Quo iusto quae, repellat esse quisquam voluptatum
        ullam fugiat praesentium? Provident rerum necessitatibus omnis libero,
        dolores soluta, quae quo blanditiis iste amet asperiores esse odit
        mollitia quia voluptatem fugit perferendis aut reprehenderit
        consectetur, animi molestias quas. Atque maxime in consequuntur sapiente
        incidunt soluta provident corporis nisi repellendus repellat repudiandae
        id, ad enim doloribus accusamus expedita impedit corrupti, possimus
        minima ullam. Hic, consequuntur corrupti, sunt accusamus consequatur
        placeat animi facere nihil vero nulla molestiae nam iusto temporibus
        reprehenderit totam, maxime repellat doloribus ab voluptatem iste est et
        quas! Est sint libero id porro tempore numquam magnam at fugiat
        assumenda hic ipsam voluptas alias veniam molestias nobis, voluptate
        enim, quis totam doloribus? Adipisci dolores, inventore laudantium
        obcaecati quod facere esse? Sed nam eaque praesentium ullam, ad
        accusamus velit illo eius laborum quos?
      </p>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="overflow-y-scroll scrollBar pl-2 max-h-full">
      <TechStackSection />
      <StrengthsAndWeaknesses />
    </div>
  );
}

export default AboutMe;
