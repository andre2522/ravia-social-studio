import { useState, useEffect } from "react";
import { Clock, TrendingUp, Zap, Instagram, Youtube, Linkedin, FileText, LayoutGrid, Video, Lightbulb, CalendarDays, Target, BarChart3, Sparkles, X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Lista de 20 nomes diferentes (fora do componente para evitar recriação)
const names = [
  'Ana', 'Maria', 'João', 'Pedro', 'Carla', 'Lucas', 'Julia', 'Rafael', 
  'Fernanda', 'Bruno', 'Mariana', 'Gabriel', 'Beatriz', 'Thiago', 'Isabela',
  'Felipe', 'Camila', 'Rodrigo', 'Larissa', 'Gustavo'
];

const Index = () => {

  const [showUrgencyBanner, setShowUrgencyBanner] = useState(true);
  const [notification, setNotification] = useState<{ name: string; id: number } | null>(null);

  // Função para capturar parâmetros UTM da URL atual e redirecionar
  const handleGetStarted = () => {
    if (typeof window === 'undefined') return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = new URLSearchParams();
    
    // Captura todos os parâmetros UTM
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    utmKeys.forEach(key => {
      const value = urlParams.get(key);
      if (value) {
        utmParams.append(key, value);
      }
    });
    
    // Constrói a URL de destino com os UTMs
    const baseUrl = 'https://ravia.app/cadastro';
    const finalUrl = utmParams.toString() 
      ? `${baseUrl}?${utmParams.toString()}`
      : baseUrl;
    
    // Redireciona
    window.location.href = finalUrl;
  };

  // Sistema de notificações - uma a cada 5 segundos
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const notificationId = Date.now();
      setNotification({ name: randomName, id: notificationId });

      // Remove a notificação após 4.5 segundos (antes da próxima aparecer)
      setTimeout(() => {
        setNotification(null);
      }, 4500);
    };

    // Mostra a primeira notificação após 3 segundos
    showNotification();

    // Depois, mostra uma notificação a cada 5 segundos
    const interval = setInterval(() => {
      showNotification();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Glow Effect */}
      <div className="fixed inset-0 bg-gradient-glow pointer-events-none" />
      
      {/* Urgency Banner */}
      {showUrgencyBanner && (
        <div className="relative z-20 bg-gradient-to-r from-primary/35 via-primary/45 to-primary/35 border-b border-primary/60 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
          <div className="container mx-auto px-3 sm:px-4 py-2.5 sm:py-3 md:py-4">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm md:text-base lg:text-lg relative z-10 pr-8 sm:pr-0">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary animate-pulse flex-shrink-0" />
                <span className="text-foreground font-bold text-center leading-tight">
                  <span className="text-primary font-extrabold text-sm sm:text-base md:text-lg lg:text-xl">Apenas hoje</span>
                  <span className="text-white/95 text-xs sm:text-sm md:text-base"> - Teste grátis por 7 dias sem cartão</span>
                </span>
              </div>
              <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 md:px-4 md:py-2 rounded-full bg-background/95 text-primary font-extrabold text-[10px] sm:text-xs md:text-sm border-2 border-primary/60 shadow-lg backdrop-blur-sm">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
                <span className="hidden xs:inline sm:hidden md:inline">Restam </span>poucas vagas
              </span>
              <button
                onClick={() => setShowUrgencyBanner(false)}
                className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 p-1 sm:p-1.5 hover:bg-primary/40 rounded-full transition-colors"
                aria-label="Fechar banner"
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-foreground/90" />
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Header */}
      <header className="relative z-10 px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 border-b border-border/50 bg-background/95 backdrop-blur-md sticky top-0">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="relative group cursor-pointer">
            <img 
              src="/logo-a.png" 
              alt="Ravia" 
              className="h-8 sm:h-10 md:h-14 lg:h-16 transition-all duration-300 group-hover:scale-105" 
            />
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
            <Button 
              variant="heroOutline" 
              size="sm" 
              onClick={handleGetStarted}
              className="hover:scale-105 hover:shadow-glow/50 transition-all duration-300 font-semibold text-xs sm:text-sm px-3 sm:px-4"
            >
              <span className="hidden sm:inline">Começar agora</span>
              <span className="sm:hidden">Começar</span>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-4 sm:px-6 pt-12 sm:pt-16 pb-16 sm:pb-24">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm font-medium mb-6 sm:mb-8">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              IA para Redes Sociais
            </span>
          </div>
          
          <h1 className="animate-fade-up-delay-1 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-4 sm:mb-6 px-2">
            Crie todo o conteúdo das suas redes sociais{" "}
            <span className="text-gradient">em minutos</span>
          </h1>
          
          <p className="animate-fade-up-delay-2 text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-10 px-2">
            Sem estresse e sem precisar de agência. Posts, Reels, Stories, roteiros de vídeos, descrições e ideias estratégicas feitos sob medida para o seu negócio.
          </p>
          
          <div className="animate-fade-up-delay-3 mb-4 sm:mb-6">
            <Button 
              type="button" 
              variant="hero" 
              size="lg" 
              onClick={handleGetStarted}
              className="relative w-full sm:w-auto px-6 sm:px-12 py-5 sm:py-7 text-base sm:text-lg md:text-xl font-bold shadow-glow hover:scale-110 hover:shadow-[0_0_40px_hsl(41_100%_47%_/_0.6)] transition-all duration-300 animate-pulse-glow group overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform duration-500" />
                Começar grátis
              </span>
            </Button>
          </div>
          
          <p className="animate-fade-up-delay-3 text-xs sm:text-sm text-muted-foreground px-4">
            Teste grátis por 7 dias — sem cartão de crédito e cancelamento fácil.
          </p>
        </div>
      </section>

      {/* Social Icons Floating */}
      <section className="relative z-10 py-8 sm:py-12 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-16 opacity-30">
            <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-foreground animate-float" style={{ animationDelay: '0s' }} />
            <Youtube className="w-8 h-8 sm:w-10 sm:h-10 text-foreground animate-float" style={{ animationDelay: '0.5s' }} />
            <Linkedin className="w-8 h-8 sm:w-10 sm:h-10 text-foreground animate-float" style={{ animationDelay: '1s' }} />
            <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-foreground animate-float" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-24 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Você sabe que precisa aparecer nas redes, mas...
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground px-2">
              O tempo é curto, a criatividade falha e manter consistência é quase impossível.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
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
      <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
              Com a Ravia, é <span className="text-gradient">simples</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Você diz o que precisa e o conteúdo aparece pronto. Posts para a semana, roteiros de Reels, ideias virais, calendários completos — tudo criado no estilo da sua marca.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
      <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-24 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
              Tudo em um só lugar
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Crie conteúdo para todas as suas redes sociais em uma única plataforma. Sem precisar alternar entre ferramentas.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            <PlatformCard 
              name="Instagram" 
              icon={<Instagram className="w-6 h-6" />} 
              color="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400"
              description="Posts, Reels e Stories"
            />
            <PlatformCard 
              name="TikTok" 
              icon={<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>} 
              color="bg-black"
              description="Vídeos virais e trends"
            />
            <PlatformCard 
              name="YouTube" 
              icon={<Youtube className="w-6 h-6" />} 
              color="bg-red-600"
              description="Roteiros e descrições"
            />
            <PlatformCard 
              name="LinkedIn" 
              icon={<Linkedin className="w-6 h-6" />} 
              color="bg-blue-600"
              description="Conteúdo profissional"
            />
            <PlatformCard 
              name="Blogs" 
              icon={<FileText className="w-6 h-6" />} 
              color="bg-orange-500"
              description="Artigos e textos"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-24 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
              Transforme sua <span className="text-gradient">presença digital</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Veja os resultados reais que você pode alcançar quando tem o conteúdo certo, na hora certa, para todas as suas redes sociais.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <BenefitCard
              icon={<Clock className="w-7 h-7" />}
              title="Economize horas"
              description="Crie em minutos o que levaria dias"
              stat="90% menos tempo"
              detail="De horas para minutos na criação de conteúdo"
            />
            <BenefitCard
              icon={<Target className="w-7 h-7" />}
              title="Consistência"
              description="Publique sem falhar um dia sequer"
              stat="100% de frequência"
              detail="Calendário completo sempre atualizado"
            />
            <BenefitCard
              icon={<BarChart3 className="w-7 h-7" />}
              title="Crescimento"
              description="Construa autoridade e atraia clientes"
              stat="3x mais engajamento"
              detail="Conteúdo otimizado para resultados"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-24">
        <div className="container mx-auto max-w-3xl">
          <div className="relative bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-card overflow-hidden">
            <div className="absolute inset-0 bg-gradient-glow opacity-50" />
            <div className="relative z-10 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Comece agora seu teste grátis
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                Crie seu primeiro mês inteiro de conteúdo hoje mesmo.
              </p>
              
              <div className="mb-4 sm:mb-6">
                <Button 
                  type="button" 
                  variant="hero" 
                  size="lg" 
                  onClick={handleGetStarted}
                  className="relative w-full sm:w-auto px-6 sm:px-12 py-5 sm:py-7 text-base sm:text-lg md:text-xl font-bold shadow-glow hover:scale-110 hover:shadow-[0_0_40px_hsl(41_100%_47%_/_0.6)] transition-all duration-300 animate-pulse-glow group overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform duration-500" />
                    Começar grátis
                  </span>
                </Button>
              </div>
              
              <p className="text-xs sm:text-sm text-muted-foreground">
                Sem cartão. Sem compromisso. Aproveite enquanto está disponível.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-4 sm:px-6 py-8 sm:py-12 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <img src="/logo-a.png" alt="Ravia" className="h-8 sm:h-10 md:h-14 lg:h-16" />
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm px-2">
            <a 
              href="https://ravia.app/privacy-policy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Privacidade
            </a>
            <span className="text-muted-foreground/50 hidden sm:inline">•</span>
            <a 
              href="https://ravia.app/terms-of-use" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Termos de Uso
            </a>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2 px-2">
            © 2025 Barba Negócios Digitais. Todos os direitos reservados.
          </p>
          <p className="text-[10px] sm:text-xs text-muted-foreground/70 px-2">
            CNPJ: 51.406.641/0001-81
          </p>
        </div>
      </footer>

      {/* Notification System */}
      {notification && (
        <div 
          key={notification.id}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 animate-slide-in-right max-w-[calc(100vw-2rem)] sm:max-w-none"
        >
          <div className="relative bg-gradient-to-br from-background/98 via-card/95 to-background/98 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)] border-2 border-primary/60 w-[calc(100vw-2rem)] sm:w-auto sm:min-w-[280px] md:min-w-[320px]">
            {/* Brilho pulsante dourado */}
            <div className="absolute inset-0 bg-primary/10 rounded-xl sm:rounded-2xl animate-pulse" />
            {/* Borda interna dourada */}
            <div className="absolute inset-[2px] border border-primary/30 rounded-xl sm:rounded-2xl pointer-events-none" />
            
            <div className="relative flex items-center gap-2 sm:gap-3">
              {/* Ícone de check */}
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/50">
                <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-primary animate-scale-in" />
              </div>
              
              {/* Conteúdo */}
              <div className="flex-1 min-w-0">
                <p className="text-foreground font-bold text-xs sm:text-sm md:text-base leading-tight truncate sm:whitespace-normal">
                  <span className="text-primary font-extrabold">{notification.name}</span> se cadastrou grátis
                </p>
                <p className="text-muted-foreground text-[10px] sm:text-xs mt-0.5 font-medium">
                  há poucos segundos • Teste de 7 dias
                </p>
              </div>

              {/* Badge de urgência */}
              <div className="flex-shrink-0 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-primary/20 border border-primary/40">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />
              </div>
            </div>

            {/* Barra de progresso animada */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-primary/10 rounded-b-xl sm:rounded-b-2xl overflow-hidden">
              <div className="h-full bg-primary animate-progress-bar" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const PainPointCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 group">
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-xs sm:text-sm">{description}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-glow/20 transition-all duration-300 group">
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-xs sm:text-sm">{description}</p>
  </div>
);

const BenefitCard = ({ icon, title, description, stat, detail }: { icon: React.ReactNode; title: string; description: string; stat: string; detail: string }) => (
  <div className="group relative p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-glow/20 transition-all duration-300">
    <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
        {icon}
      </div>
      <div className="space-y-2">
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient mb-1">
          {stat}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3">{description}</p>
        <p className="text-[10px] sm:text-xs text-primary/80 font-medium">{detail}</p>
      </div>
    </div>
    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
  </div>
);

const PlatformCard = ({ name, icon, color, description }: { name: string; icon: React.ReactNode; color: string; description: string }) => (
  <div className="group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-glow/20 transition-all duration-300 cursor-pointer">
    <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl ${color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
        {icon}
      </div>
      <div>
        <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-[10px] sm:text-xs text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
  </div>
);

export default Index;
