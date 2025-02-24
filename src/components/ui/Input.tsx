export const Input: React.FC<{ value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder?: string }> = ({ value, onChange, placeholder }) => (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input"
    />
  );