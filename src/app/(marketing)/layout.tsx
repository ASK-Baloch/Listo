const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
        {/* NAVBAR CODE */}
      <main className="pt-40 pb-20 bg-slate-100">
        {children}
        </main>
        {/* FOOTER CODE */}
    </div>
  );
};

export default MarketingLayout;
