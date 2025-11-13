import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X, ChevronDown, Leaf, Award, Factory, Users, Users as UsersIcon, Package, Recycle, Droplet, ArrowRight } from 'lucide-react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import macpetLogo from './assets/macpet_logo_transparent.png'
import macpetFactory from './assets/macpet_factory.jfif'
import productSegments from './assets/product_segments_new.png'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  const statsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const stats = [
    { icon: Package, value: '1 bilhão+', label: 'Itens Fabricados' },
    { icon: UsersIcon, value: '1.000+', label: 'Clientes Atendidos' },
    { icon: Factory, value: '15+', label: 'Anos de Mercado' },
    { icon: Award, value: '500+', label: 'Moldes Desenvolvidos' },
    { icon: Package, value: '2 bilhão+', label: 'Itens Fabricados' },
    { icon: UsersIcon, value: '2.000+', label: 'Clientes Atendidos' },
    { icon: Factory, value: '30+', label: 'Anos de Mercado' },
    { icon: Award, value: '1000+', label: 'Moldes Desenvolvidos' },
  ]

  const products = [
    {
      title: 'Preformas',
      description: 'Pré-formas fabricadas com alta precisão dimensional e controle de qualidade contínuo.',
      features: ['Diversas gramaturas', 'Alta transparência', 'Produção em escala']
    },
    {
      title: 'Frascos PET',
      description: 'Frascos, garrafas e potes com excelente desempenho em envase automático.',
      features: ['Rotulagem aplicada', 'Modelos personalizados', 'Diversos formatos']
    },
    {
      title: 'Tampas',
      description: 'Tampas compatíveis garantindo vedação segura e encaixe perfeito.',
      features: ['Vedação segura', 'Cores personalizadas', 'Diversos sistemas']
    },
    {
      title: 'Desenvolvimento',
      description: 'Embalagens PET exclusivas, feitas sob medida para cada necessidade.',
      features: ['Projeto 3D', 'Fabricação de molde', 'Testes finais']
    }
  ]

  const certifications = [
    { icon: Leaf, title: 'Carbono Neutro', desc: 'Certificação Carbon Free GHG Protocol' },
    { icon: Award, title: 'ISO 9001:2015', desc: 'Gestão de qualidade certificada' },
    { icon: Recycle, title: '100% Renovável', desc: 'Energia de fontes limpas' },
    { icon: Droplet, title: 'Selo Clima Paraná', desc: 'Registro de emissões de GEE' },
  ]

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <motion.img 
              src={macpetLogo} 
              alt="MACPET Logo" 
              className="mr-2" 
              style={{ width: '220px', height: 'auto', objectFit: 'contain' }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </motion.div>
          
          <div className="hidden md:flex items-center gap-10">
            <motion.a 
              href="#home" 
              className="text-gray-800 hover:text-red-600 transition-all duration-300 font-medium relative group"
              whileHover={{ y: -2 }}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
            <motion.a 
              href="#produtos" 
              className="text-gray-800 hover:text-red-600 transition-all duration-300 font-medium relative group"
              whileHover={{ y: -2 }}
            >
              Produtos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
            <motion.a 
              href="#sustentabilidade" 
              className="text-gray-800 hover:text-red-600 transition-all duration-300 font-medium relative group"
              whileHover={{ y: -2 }}
            >
              Sustentabilidade
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
            <motion.a 
              href="#qualidade" 
              className="text-gray-800 hover:text-red-600 transition-all duration-300 font-medium relative group"
              whileHover={{ y: -2 }}
            >
              Qualidade
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
            <motion.a 
              href="#contato" 
              className="text-gray-800 hover:text-red-600 transition-all duration-300 font-medium relative group"
              whileHover={{ y: -2 }}
            >
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="hidden md:block bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Fale Conosco
            </Button>
          </motion.div>

          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-5">
              <a href="#home" className="text-gray-800 hover:text-red-600 transition-colors font-medium">Home</a>
              <a href="#produtos" className="text-gray-800 hover:text-red-600 transition-colors font-medium">Produtos</a>
              <a href="#sustentabilidade" className="text-gray-800 hover:text-red-600 transition-colors font-medium">Sustentabilidade</a>
              <a href="#qualidade" className="text-gray-800 hover:text-red-600 transition-colors font-medium">Qualidade</a>
              <a href="#contato" className="text-gray-800 hover:text-red-600 transition-colors font-medium">Contato</a>
              <Button className="bg-red-600 hover:bg-red-700 w-full text-white">
                Fale Conosco
              </Button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${macpetFactory})` }}
        >
          <motion.div 
            style={{ opacity, scale }}
            className="absolute inset-0 bg-black/60"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 text-shadow leading-tight" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Indústria de <span className="text-red-500">Embalagens PET</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 leading-relaxed text-shadow px-4" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Produzimos embalagens PET com alto padrão de qualidade, confiança, tecnologia e desempenho para <strong>atender indústrias que precisam de consistência e escala</strong>.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a 
                href="#produtos" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-5 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center min-w-[280px]"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Conheça Nossos Produtos
              </motion.a>
              <motion.a 
                href="#contato" 
                className="bg-white hover:bg-gray-100 text-red-600 font-bold text-lg px-10 py-5 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center min-w-[280px] border-2 border-white"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Solicitar Orçamento
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-white" size={40} />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div ref={statsRef} className="stats-scroll-container">
            <div className="stats-scroll-content">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center flex-shrink-0 w-1/2 md:w-1/4 px-6"
                >
                  <stat.icon className="mx-auto mb-6 text-red-400" size={56} />
                  <div className="text-5xl font-bold mb-3">{stat.value}</div>
                  <div className="text-gray-400 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Nossos Produtos
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Do conceito ao produto final, entregamos soluções completas para marcas que exigem excelência.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-5">{product.title}</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">{product.description}</p>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center text-gray-700 text-lg"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2.5 h-2.5 bg-red-600 rounded-full mr-4" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" className="w-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-lg py-6 transition-all duration-300">
                    Saiba Mais
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Product Segments Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-28"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center leading-tight">
              Segmentos de Produto
            </h3>
            <p className="text-lg md:text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto leading-relaxed">
              Atendemos envasadoras com embalagens PET prontas para <strong>linhas automatizadas</strong>. Nossos processos garantem regularidade, compatibilidade dimensional e qualidade no acabamento.
            </p>
            <div className="flex justify-center">
              <motion.img
                src={productSegments}
                alt="Segmentos de Produto Macpet"
                className="w-full max-w-6xl rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustentabilidade" className="py-28 bg-gradient-to-br from-white via-gray-50 to-red-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Compromisso com a Sustentabilidade
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A MACPET utiliza materiais recicláveis e biodegradáveis em suas embalagens, minimizando o impacto ambiental e promovendo o consumo circular consciente.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl text-center transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <cert.icon className="mx-auto mb-6 text-red-600" size={56} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{cert.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="qualidade" className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Qualidade <span className="text-red-600">Macpet</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Na Macpet, a qualidade é a base de tudo o que fazemos. Desde a seleção da matéria-prima até o produto final, garantimos excelência em cada etapa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-700 text-lg leading-relaxed space-y-6"
            >
              <p>
                Nossos processos de fabricação são rigorosamente controlados e certificados, assegurando que cada embalagem PET atenda aos mais altos padrões de desempenho e segurança.
              </p>
              <p>
                Investimos continuamente em tecnologia de ponta e capacitação de nossa equipe para oferecer soluções inovadoras e confiáveis, que superam as expectativas de nossos clientes.
              </p>
              <p>
                Acreditamos que a qualidade não é apenas um diferencial, mas um compromisso fundamental com a satisfação e o sucesso dos nossos parceiros.
              </p>
            </motion.div>
            <motion.img
              src={macpetFactory} // Reusing factory image for now, can be replaced with a quality-specific image later
              alt="Controle de Qualidade Macpet"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Pronto para Inovar?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Entre em contato conosco e descubra como podemos criar a embalagem perfeita para o seu produto.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-red-600 hover:bg-red-700 text-lg px-12 py-7 text-white text-shadow-sm shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center mx-auto">
                Fale com um Especialista <ArrowRight className="ml-3" size={24} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="py-16 bg-gray-950 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <motion.img 
                src={macpetLogo} 
                alt="MACPET Logo" 
                className="mb-6 w-auto h-auto max-w-[200px]"
                style={{ objectFit: 'contain' }} 
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <p className="text-gray-400 leading-relaxed text-lg">
                Indústria de Embalagens PET com alto padrão de qualidade e compromisso ambiental.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Contato</h4>
              <p className="text-gray-400 mb-3 text-lg">41 99712-0605</p>
              <p className="text-gray-400 mb-3 text-lg">41 3874-5500</p>
              <p className="text-gray-400 text-lg">Almirante Tamandaré / PR</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Links Rápidos</h4>
              <div className="flex flex-col gap-3">
                <a href="#home" className="text-gray-400 hover:text-red-400 transition-colors text-lg">Home</a>
                <a href="#produtos" className="text-gray-400 hover:text-red-400 transition-colors text-lg">Produtos</a>
                <a href="#sustentabilidade" className="text-gray-400 hover:text-red-400 transition-colors text-lg">Sustentabilidade</a>
                <a href="#contato" className="text-gray-400 hover:text-red-400 transition-colors text-lg">Contato</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-base">
            <p>2025© Todos os direitos reservados Macpet Indústria de Embalagens LTDA.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

