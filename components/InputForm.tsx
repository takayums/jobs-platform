interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}
export default function InputForm({ label, error, ...props }: InputFormProps) {
  return (
    <label className="form-control w-full">
      <div className="label ">
        <span className="label-text">{label}</span>
      </div>
      <input {...props} className="input input-bordered w-full" />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </label>
  );
}
