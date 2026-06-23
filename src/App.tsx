import { useState, useEffect } from 'react'
import { Github, Mail, ExternalLink, Code2, Database, Cpu, ChevronDown, Moon, Sun, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// 导入生成的背景图片
import heroBg from '@/assets/hero-tech-background.png'

const skills = [
  { icon: <Database className="w-6 h-6" />, name: 'Java后端', desc: 'Java，Springboot，Mysql，Redis' },
  { icon: <Code2 className="w-6 h-6" />, name: 'C++', desc: 'duilib，BLAS，底层优化' },
  { icon: <Cpu className="w-6 h-6" />, name: 'AI 技术', desc: '机器学习、深度学习，LLM，agent' },
]

const projects = [
  {
    title: '巴西餐饮SaaS系统',
    desc: '面向巴西本地餐饮商家的外卖SaaS平台，服务巴西本土中小餐厅、连锁餐饮，提供店铺管理、订单履约、本地支付结算一体化服务，支撑日均万级订单交易',
    tags: ['Java', 'Springboot', 'Mysql', 'Redis'],
    link: '#',
  },
  {
    title: '电商秒杀系统',
    desc: '电商促销秒杀系统，面向C端用户提供限时限量抢购场景，支持商品预热、实时库存扣减、用户限购管控、订单异步生成，解决瞬时高并发下的超卖、重复下单问题，保障促销活动平稳运行',
    tags: ['Redis', 'Lua', 'Kafka'],
    link: 'https://github.com/HJhunterM/seckill',
  },
  {
    title: 'RAG知识库问答系统',
    desc: '基于 LangChain 与 本地 Qwen 大模型构建的轻量级 RAG 知识库问答系统，支持对 PDF 文档内容进行语义检索与大模型问答生成，可用于介绍履历、回答问题',
    tags: ['LLM', 'RAG', 'Agent','Vibe Coding'],
    link: 'https://rag.mhj-ai.xyz',
  },
]

function Navbar({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (value: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false)

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
          MHJ
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
          <button onClick={() => scrollToSection('qa')} className="text-muted-foreground hover:text-foreground transition-colors">
            Q&A
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
            <span className="text-gradient">马泓剑</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            热爱技术，专注于构建优雅、高性能的 Web 应用
            <br />
            用代码创造价值，用设计传递理念
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="glow" size="lg" onClick={() => document.getElementById('qa')?.scrollIntoView({ behavior: 'smooth' })}>
              履历介绍 <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              个人优势
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-10">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <span className="text-muted-foreground">
              <Mail className="w-6 h-6" />
            </span>
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
            <Card className="glass-card hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle>技术背景</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  拥有 2 年 Java 开发经验，熟悉分布式、微服务架构。<br />
                  能够结合 AI 独立完成全栈项目的开发与部署。<br />
                  对 AI 新技术充满热情，积极探索 agent 的实际应用。
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle>职业目标</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  致力于成为技术专家，深入理解后端技术栈。<br />
                  希望通过技术创造有价值的产品，用代码改变世界。<br />
                  持续学习，不断突破自己的技术边界。
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle>教育背景</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  高中：南京师范大学附属中学<br />
                  本科：东北大学 通信工程<br />
                  硕士：东南大学 电子信息（人工智能应用）<br />
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle>工作经历</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  同花顺 iFinD（2023.8-2024.7） C++开发<br />
                  华为 计算产品线（2024.8-2024.12） 研发工程师<br />
                  滴滴 国际化外卖（2025.6-2025.12）Java后端开发
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
        <p className="text-center text-muted-foreground mb-12">掌握多种开发技术，持续扩展技术深度</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <Card key={skill.name} className="glass-card hover:scale-105 transition-transform duration-300">
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
          <span className="text-gradient">项目</span> 经历
        </h2>
        <p className="text-center text-muted-foreground mb-12">一些我参与或独立完成的项目</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card key={project.title} className="glass-card hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-center">{project.title}</CardTitle>
                <CardDescription className="text-justify">{project.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs bg-primary/20 text-primary">
                      {tag}
                    </span>
                  ))}
                  {project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function QA() {
  const qaItems = [
    {
      question: 'Q1: 你第一家公司在同花顺做的是C++，不是后端吗？',
      answer: 'A: 校招面试时应聘的是服务端岗位，入职后由于业务安排被调到iFinD客户端团队，主要负责金融终端的业务开发。虽然方向和预期有偏差，但这段经历让我积累了工程开发经验，同时也参与了部分服务端工作，比如风控内容审核系统的后端逻辑等。',
    },
    {
      question: 'Q2: 为什么一年后去了华为呢？',
      answer: 'A: Windows客户端与我长期的方向选择不太匹配，当时华为这边有个高性能计算的机会，技术门槛很高，涉及芯片级优化，我觉得是个很难得的学习机会，就过去了。虽然方向偏底层，但能接触到高水平的团队和工程规范，对我的技术成长帮助很大。',
    },
    {
      question: 'Q3: 为什么在华为只干了四个月呢？是试用期没通过吗？',
      answer: 'A: 我所在的数学库组是刚成立的，成员主要由内部转岗和外部社招组成，还在搭建阶段。年底时组织进行了较大调整，团队发展方向发生变化。综合考虑职业规划以及自己长期想做服务端开发，因此选择离开',
    },
    {
      question: 'Q4: 在2025年1月-5月，就是你入职滴滴前，这段gap你在干什么？为什么选择滴滴？',
      answer: 'A: 这段时间前半段，主要是照顾家人以及处理家庭事务，后半段时间，我仔细思考了之后的职业方向，决定还是坚持原来的后端，完成了一个高并发电商秒杀项目(Github开源)。当时滴滴重启巴西外卖SaaS业务，有从 0 到 1 的机会，和我的技术方向也匹配，就加入了。',
    },
    {
      question: 'Q5: 你有后端开发经验吗？我们这岗位需要3年以上Java经验的，你凭什么能胜任？',
      answer: 'A: 虽然职业经历比较曲折，但我真正的后端实战经验主要来自滴滴。在滴滴期间我是Account服务的Owner，也是支付核心链路的重要开发者，参与了账户体系、支付链路、分布式事务、性能优化等核心工作。另外在去滴滴之前我独立完成了一个高并发电商秒杀项目，对Redis、Kafka、MySQL、SpringBoot等技术进行了系统实践。我认为自己已经具备独立承担后端业务开发的核心能力。',
    },
    {
      question: 'Q6: 在滴滴为什么只待了6个月？',
      answer: 'A: 滴滴国际化外卖SaaS属于0-1项目，团队在短时间内快速扩张。MVP版本上线后业务进入新的阶段，组织进行了调整，杭州团队有缩减。我在期间的工作交付是得到认可的，服务上线后零线上问题，合作方反馈也不错。这段经历让我完整参与了一个国际化SaaS项目从0到1的落地过程，并承担了账户体系和支付核心链路开发工作，收获非常大。',
    },
    {
      question: 'Q7: 那你2026年到现在，这段gap在干什么？',
      answer: 'A: 从滴滴出来后，我先休息调整了一段时间，之后主要做了三件事：1、系统学习 AI Agent 开发，探索后端技术与 AI 能力的结合；2、复盘过往项目，把 SaaS 支付系统的技术点做了系统梳理，也完善了自己的开源项目；3、认真看机会，不想随便入职又很快离开，希望找到一家能长期发展的公司。现在技术栈和状态都已经调整好了，可以全力投入下一份工作。',
    },
    {
      question: 'Q8: 你现在的职业规划是？为什么我们应该相信你会稳定？',
      answer: 'A: 我现在想在某一业务领域长期深耕，持续积累经验，成为这一领域的专家，不想再由于各种原因频繁换赛道，所以现在找工作也比较慎重，偏向业务相对成熟、团队相对稳定的小组。具体就是后端或者AI应用全栈开发。前期的职业道路可能也是在探索、试错，但每段都让我拿到了不同的能力。现在我对未来的发展比较明确，希望可以加入，和团队一起成长。',
    },
  ]

  return (
    <section id="qa" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            常见 <span className="text-gradient">疑问</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">关于我的一些常见问题，希望可以帮助您解惑</p>
          
          <div className="space-y-6">
            {qaItems.map((item, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
          <a href="https://rag.mhj-ai.xyz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            mhj-ai.xyz
          </a>
          {' '}· 用 ❤️ 和代码构建
        </p>
      </div>
    </footer>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-background text-foreground`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <QA />
      </main>
      <Footer />
    </div>
  )
}

export default App
