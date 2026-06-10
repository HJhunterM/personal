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
      answer: 'A: 我准备校招、面试同花顺都是服务端岗位，入职后被调到另一个部门（iFinD）做Windows C++客户端，说是缺人，无奈～主管也知道我的情况，让我参与了部分服务端的开发',
    },
    {
      question: 'Q2: 为什么一年后去了华为呢？',
      answer: 'A: Windows客户端不是我想要的方向，技术栈过于老旧，主管后面也没有兑现给我换到后端组的承诺，且当时华为主动联系我，学校、专业都比较对口，我觉得高性能计算方向还可以，虽然偏底层，但是有技术深度，同时也是AI模型的底座，薪资也有小幅上涨，于是就去了',
    },
    {
      question: 'Q3: 为什么在华为只干了四个月呢？是试用期没通过吗？',
      answer: 'A: 不是，是组织架构调整，协商后离开。我所在的数学库组是刚刚成立，人员由别的部门内转 + 外面社招组成，组织不稳定，年底大调整，最终选择离开',
    },
    {
      question: 'Q4: 在2025年1月-5月，就是你入职滴滴前，这段gap你在干什么？为什么选择滴滴？',
      answer: 'A: 这段时间前半段，主要是照顾家人（母亲乳腺癌手术+化疗）、处理家中私事，后半段时间，我仔细思考了后面的职业方向，决定还是选择原来的后端，自己做了一个电商秒杀项目，当时滴滴重启巴西外卖业务，我觉得是个机会，凭着这个项目和后端技术栈，最终加入外卖SaaS组',
    },
    {
      question: 'Q5: 你有后端开发经验吗？我们这岗位需要3年以上Java经验的，你凭什么能胜任？',
      answer: 'A: 有的，在大一时，我就已经选修了Java，当时课设做了个图书管理系统，属于是初窥门径。硕士校招时进一步补全了后端技术栈，包括Springboot、数据库、分布式等等。华为之后的gap也做了个开源的秒杀项目，实操能力强。虽然职业经历有些曲折，但最终于2025年6月加入滴滴，正式开始了后端生涯',
    },
    {
      question: 'Q6: 在滴滴为什么只待了6个月？你很不稳定啊？',
      answer: 'A: （汗）是由于业务线调整。滴滴的国际化外卖SaaS组，也是刚成立（巧了）。当时先在杭州招了11个，后面leader晚于我们一个月才入职（美团空降），而且是异地base成都，他在成都入职后，招了20几个后端，还有外包的前端和测试。年底项目 MVP 版本在巴西上线，杭州这边的业务线面临调整，可能是由于控制成本、减少异地管理压力。经过综合考虑，选择了离开',
    },
    {
      question: 'Q7: 那你2026年到现在，这段gap在干什么？',
      answer: 'A: 年前出去旅游了，散散心。因为连续两年这样子，感觉可能也是天意，出去走了走。年后在关注市场行情，openclaw当时很火，感觉 AI 已经在改变程序员工作的范式，这段时间一是在学习AI、Agent相关，二是复盘、梳理过往项目，复习后端技术栈，三是调整心态，最近开始投递后端以及Agent相关岗位',
    },
    {
      question: 'Q8: 你现在的职业规划是？',
      answer: 'A: 我现在想在某一业务领域长期深耕，持续积累经验，成为这一领域的专家，不想再由于各种原因频繁换赛道，所以现在找工作也比较慎重，偏向业务相对成熟、团队相对稳定的小组。具体就是后端或者AI应用全栈开发。前期的职业道路可能也是在探索、试错，现在我对未来的发展比较明确，希望可以加入，一起合作',
    },
    {
      question: 'Q9: 你的期望薪资是？',
      answer: 'A: 希望可以按照岗位要求、定级、面评、个人能力等综合核定，具体面议',
    },
  ]

  return (
    <section id="qa" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            常见 <span className="text-gradient">疑问</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">关于我和技术的一些常见问题( HR 必看～)</p>
          
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
