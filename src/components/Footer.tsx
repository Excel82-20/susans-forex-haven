const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-sm font-semibold text-primary">
          Susan Shrestha
        </span>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved. Trading involves risk.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
