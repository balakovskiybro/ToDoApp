
export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`card ${className}`}>{children}</div>
  );
  
export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="card-content">{children}</div>
  );