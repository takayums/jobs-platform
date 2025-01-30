interface TextareaFormProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export default function Textarea({
  label,
  error,
  ...props
}: TextareaFormProps) {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <textarea
        className="textarea textarea-bordered h-24"
        {...props}
      ></textarea>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </label>
  );
}
