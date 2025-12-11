import { Clock, TrendingUp, Zap, Instagram, Youtube, Linkedin, FileText, LayoutGrid, Video, Lightbulb, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoRavia from "@/assets/logo-ravia.png";

const Index = () => {

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Glow Effect */}
      <div className="fixed inset-0 bg-gradient-glow pointer-events-none" />
      
      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-lg blur-sm -m-2" />
            <img src={logoRavia} alt="Ravia" className="h-10 relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
          </div>
          <Button variant="heroOutline" size="sm">
            Entrar
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-16 pb-24">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              IA para Redes Sociais
            </span>
          </div>
          
          <h1 className="animate-fade-up-delay-1 text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6">
            Crie todo o conteúdo das suas redes sociais{" "}
            <span className="text-gradient">em minutos</span>
          </h1>
          
          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Sem estresse e sem precisar de agência. Posts, Reels, Stories, roteiros de vídeos, descrições e ideias estratégicas feitos sob medida para o seu negócio.
          </p>
          
          <div className="animate-fade-up-delay-3 mb-6">
            <Button type="button" variant="hero" size="lg" className="px-10">
              Começar grátis
            </Button>
          </div>
          
          <p className="animate-fade-up-delay-3 text-sm text-muted-foreground">
            Teste grátis por 7 dias — sem cartão de crédito e cancelamento fácil.
          </p>
        </div>
      </section>

      {/* Social Icons Floating */}
      <section className="relative z-10 py-12 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-8 md:gap-16 opacity-30">
            <Instagram className="w-10 h-10 text-foreground animate-float" style={{ animationDelay: '0s' }} />
            <Youtube className="w-10 h-10 text-foreground animate-float" style={{ animationDelay: '0.5s' }} />
            <Linkedin className="w-10 h-10 text-foreground animate-float" style={{ animationDelay: '1s' }} />
            <FileText className="w-10 h-10 text-foreground animate-float" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="relative z-10 px-6 py-24 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Você sabe que precisa aparecer nas redes, mas...
            </h2>
            <p className="text-lg text-muted-foreground">
              O tempo é curto, a criatividade falha e manter consistência é quase impossível.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <PainPointCard
              icon={<Clock className="w-6 h-6" />}
              title="Tempo escasso"
              description="Você mal tem tempo para o negócio, imagine para criar conteúdo todo dia."
            />
            <PainPointCard
              icon={<Zap className="w-6 h-6" />}
              title="Agências caras"
              description="Contratar uma agência ou social media fica caro demais para o momento."
            />
            <PainPointCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Concorrência avança"
              description="Enquanto isso, seus concorrentes ganham espaço e você perde visibilidade."
            />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Com a Ravia, é <span className="text-gradient">simples</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Você diz o que precisa e o conteúdo aparece pronto. Posts para a semana, roteiros de Reels, ideias virais, calendários completos — tudo criado no estilo da sua marca.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<LayoutGrid className="w-8 h-8" />}
              title="Posts prontos"
              description="Textos, legendas e hashtags otimizadas para engajamento."
            />
            <FeatureCard
              icon={<Video className="w-8 h-8" />}
              title="Roteiros de vídeo"
              description="Reels, TikToks e Shorts com ganchos que prendem a atenção."
            />
            <FeatureCard
              icon={<Lightbulb className="w-8 h-8" />}
              title="Ideias virais"
              description="Trends do momento adaptadas para o seu nicho."
            />
            <FeatureCard
              icon={<CalendarDays className="w-8 h-8" />}
              title="Calendário completo"
              description="Planejamento mensal com datas especiais e estratégia."
            />
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="relative z-10 px-6 py-16 bg-card/30">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Tudo em um só lugar:
          </p>
          <div className="flex justify-center items-center gap-4 md:gap-8 overflow-x-auto pb-2">
            <PlatformBadge name="Instagram" icon={<Instagram className="w-5 h-5" />} color="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400" />
            <PlatformBadge name="TikTok" icon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>} color="bg-black" />
            <PlatformBadge name="YouTube" icon={<Youtube className="w-5 h-5" />} color="bg-red-600" />
            <PlatformBadge name="LinkedIn" icon={<Linkedin className="w-5 h-5" />} color="bg-blue-600" />
            <PlatformBadge name="Blogs" icon={<FileText className="w-5 h-5" />} color="bg-orange-500" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Transforme sua presença digital
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard
              icon="⏱️"
              title="Economize horas"
              description="Crie em minutos o que levaria dias"
            />
            <BenefitCard
              icon="📅"
              title="Consistência"
              description="Publique sem falhar um dia sequer"
            />
            <BenefitCard
              icon="🚀"
              title="Crescimento"
              description="Construa autoridade e atraia clientes"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="container mx-auto max-w-3xl">
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-card overflow-hidden">
            <div className="absolute inset-0 bg-gradient-glow opacity-50" />
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Comece agora seu teste grátis
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Crie seu primeiro mês inteiro de conteúdo hoje mesmo.
              </p>
              
              <div className="mb-6">
                <Button type="button" variant="hero" size="lg" className="px-10">
                  Começar grátis
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Sem cartão. Sem compromisso. Aproveite enquanto está disponível.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-lg blur-sm -m-2" />
              <img src={logoRavia} alt="Ravia" className="h-8 relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Ravia. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

const PainPointCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 group">
    <div className="w-12 h-12 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-glow/20 transition-all duration-300 group">
    <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

const BenefitCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="text-center group">
    <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{icon}</div>
    <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

const PlatformBadge = ({ name, icon, color }: { name: string; icon: React.ReactNode; color: string }) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors duration-300 group shrink-0">
    <div className={`w-7 h-7 rounded-full ${color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>
    <span className="text-foreground font-medium text-sm">{name}</span>
  </div>
);

export default Index;
