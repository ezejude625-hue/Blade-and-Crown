import { Scissors } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Scissors className="h-5 w-5 text-primary" />
          <span className="font-display text-lg font-bold tracking-wide">BLADE & CROWN</span>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Blade & Crown Barbershop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
