interface InputProps {
  label: string;
  htmlFor: string;
  id: string;
  type: "text" | "email" | "tel";
  placeholder: string;
}

export default function Input(props: InputProps) {
  const { htmlFor, id, type, placeholder, label, ...nativeProps } = props;
  return (
    <div className="pt-30">
      <label
        htmlFor={htmlFor}
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        id={id}
        name={id}
        aria-describedby={id}
        placeholder={placeholder}
        {...nativeProps}
      />
    </div>
  );
}
