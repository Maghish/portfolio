import Tag from "./Tag";

export default function TagsBox() {
  return (
    <div className="w-full flex flex-wrap gap-x-[5px] gap-y-[5px] justify-center">
      <Tag text="Node.js Enthuistant" />
      <Tag text="Discord Bot Developer" />
      <Tag text="Full-Stack Developer" />
      <Tag text="15 years old" />
    </div>
  );
}
