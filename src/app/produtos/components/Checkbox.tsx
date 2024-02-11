export default function Checkbox({ id, title, name }: { id: string; title: string, name:string }) {
  return (
    <div className="flex gap-3 items-center text-orange-600">
      <input type="checkbox" id={id} name={name} />
      <label htmlFor={id}>{title}</label>
    </div>
  );
}
