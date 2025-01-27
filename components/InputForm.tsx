interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export default function InputForm({ label, ...props }: InputFormProps) {
  return (
    <label className="form-control w-full">
      <div className="label ">
        <span className="label-text">{label}</span>
      </div>
      <input {...props} className="input input-bordered w-full" />
    </label>
  );
}
