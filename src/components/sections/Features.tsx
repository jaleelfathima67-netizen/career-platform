import { Database, Monitor, Award, Users, TrendingUp, Zap } from 'lucide-react';

const features = [
  {
    icon: <Database className="w-6 h-6 text-brand" />,
    title: "Data Science & AI",
    description: "Equip your data teams with proficiency in Python, Machine Learning, and GenAI to extract actionable insights."
  },
  {
    icon: <Monitor className="w-6 h-6 text-brand" />,
    title: "Product Leadership",
    description: "Master the art of building scalable products with enterprise-grade product management frameworks."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-brand" />,
    title: "Business Analytics",
    description: "Transform raw data into strategic business decisions with advanced analytical techniques."
  },
  {
    icon: <Users className="w-6 h-6 text-brand" />,
    title: "Executive Training",
    description: "Tailored leadership programs for C-suite and middle management to drive digital transformation."
  },
  {
    icon: <Zap className="w-6 h-6 text-brand" />,
    title: "Agile Development",
    description: "Streamline your engineering processes with modern agile methodologies and devops practices."
  },
  {
    icon: <Award className="w-6 h-6 text-brand" />,
    title: "Certified Credentials",
    description: "Industry-recognized certifications that validate the skills of your workforce."
  }
];

export function Features() {
  return (
    <section id="programs" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Customized Training for Every Need
          </h2>
          <p className="text-muted-foreground text-lg">
            Our programs are co-developed with industry giants and taught by veterans to ensure your team learns what actually matters in the market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl border border-border bg-white hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
