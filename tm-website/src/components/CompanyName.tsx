type CompanyNameProps = {
  variant?: 'nav' | 'footer';
};

export default function CompanyName({ variant = 'nav' }: CompanyNameProps) {
  return (
    <span className={`company-name company-name--${variant}`}>
      <span className="company-name__main">
        <span className="company-name__accent">T & M</span>
        {' '}Industries
      </span>
      <span className="company-name__sub">Pvt. Ltd.</span>
    </span>
  );
}
