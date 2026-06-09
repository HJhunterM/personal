import { useState, useEffect } from 'react'
import { Github, Mail, Linkedin, ExternalLink, Code2, Database, Globe, Cpu, ChevronDown, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// 导入生成的背景图片
import heroBg from '@/assets/hero-tech-background.png'

const skills = [
  { icon: <Code2 className="w-6 h-6" />, name: '前端开发', desc: 'React, Vue, TypeScript' },
  { icon: <Database className="w-6 h-6" />, name: '后端开发', desc: 'Node.js, Python, Java' },
  { icon: <Globe className="w-6 h-6" />, name: '全栈应用', desc: '端到端系统架构' },
  { icon: <Cpu className="w-6 h-6" />, name: 'AI 技术', desc: '机器学习, 大模型应用' },
]

const projects = [
  {
    title: 'AI 智能助手平台',
    desc: '基于大语言模型的智能对话系统，支持多轮对话、知识库检索和个性化推荐',
    tags: ['React', 'Python', 'LLM'],
    link: '#',
  },
  {
    title: '企业级数据可视化平台',
    desc: '实时数据监控与分析仪表盘，支持多维度数据展示和交互式图表',
    tags: ['TypeScript', 'D3.js', 'WebSocket'],
    link: '#',
  },
  {
    title: '全栈电商系统',
    desc: '完整的电商平台，包含商品管理、订单系统、支付集成和数据分析',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    link: '#',
  },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-card shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button onClick={() => scrollToSection('hero')} className="text-xl font-bold text-gradient">
          MHJ-AI
        </button>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-foreground transition-colors">
            关于我
          </button>
          <button onClick={() => scrollToSection('skills')} className="text-muted-foreground hover:text-foreground transition-colors">
            技能
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-foreground transition-colors">
            项目
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-foreground transition-colors">
            联系
          </button>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          <Button variant="glow" size="sm" onClick={() => scrollToSection('contact')}>
            联系我
          </Button>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景图片 */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6">
            开发者 · 技术爱好者 · 终身学习者
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            你好，我是{' '}
            <span className="text-gradient">MHJ</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            热爱技术，专注于构建优雅、高性能的 Web 应用
            <br />
            用代码创造价值，用设计传递理念
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="glow" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              查看项目 <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              联系我
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-10">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:hello@mhj-ai.xyz" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </button>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            关于 <span className="text-gradient">我</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">热爱编程，持续学习，追求技术深度</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>技术背景</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  拥有 1-2 年 Java 开发经验，熟悉后端架构与数据库设计。
                  同时精通前端开发，能够独立完成全栈项目的开发与部署。
                  对 AI 技术充满热情，正在探索大模型在实际业务中的应用。
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>职业目标</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  致力于成为全栈技术专家，深入理解从前端到后端的完整技术栈。
                  希望通过技术创造有价值的产品，用代码改变世界。
                  持续学习，不断突破自己的技术边界。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          专业 <span className="text-gradient">技能</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">掌握全栈开发技术，持续扩展技术深度</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <Card key={skill.name} className="glass-card glow-border hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4 text-primary">
                  {skill.icon}
                </div>
                <CardTitle className="text-lg">{skill.name}</CardTitle>
                <CardDescription>{skill.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          精选 <span className="text-gradient">项目</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">展示一些我参与或独立完成的项目</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card key={project.title} className="glass-card glow-border hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs bg-primary/20 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    查看详情 <ExternalLink className="ml-2 w-3 h-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            联系 <span className="text-gradient">我</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">有项目合作或技术交流？欢迎联系我</p>
          
          <Card className="glass-card">
            <CardContent className="p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <p className="text-lg text-primary">消息已发送！我会尽快回复你。</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">姓名</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="你的名字"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">邮箱</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">消息</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary transition-all min-h-[120px]"
                      placeholder="请输入你的消息..."
                      required
                    />
                  </div>
                  <Button type="submit" variant="glow" className="w-full">
                    发送消息 <Mail className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()}{' '}
          <a href="https://www.mhj-ai.xyz" className="text-primary hover:underline">
            www.mhj-ai.xyz
          </a>
          {' '}· 用 ❤️ 和代码构建
        </p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
