export const Button: React.FC<{ onClick: () => void; className?: string; variant?: "destructive"; children: React.ReactNode }> = ({ onClick, className, variant, children }) => (
    <button
        onClick={onClick}
        className={`button ${variant === "destructive" ? "button-destructive" : "button-primary"} ${className}`}
    >
        {children}
    </button>
);