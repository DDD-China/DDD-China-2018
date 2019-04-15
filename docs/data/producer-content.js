var producers = [
  {
    'producer-img': '../resource/zhangyi.jpeg',
    'producer-name': '张逸',
    'producer-introduction': '编码实践、加固设计、领域驱动实践领先者',
    'producer-information': '致力于编码实践、架构设计、领域驱动、大数据分析，并在金融、制造业、医疗、通信、企业架构、互联网诸多行业有丰富的开发与设计经验。',
    'producer-topic': '领域驱动设计与企业应用架构',
    'topic-information': '作为IT系统治理和架构治理的一种工具，企业级架构被很多大型企业广泛采用。但在实际工作当中，企业级架构的定义和治理如何能够和快速变化的业务诉求相匹配，与快速创新的企业愿景相一致，这些问题一直有待解决。DDD作为一种面向响应力的软件和系统设计原则，在企业架构实践中大有用武之地。本专题将专注讨论领域驱动的企业级架构的设计方法和实践。',
    'speakers': [
      {
        'img': '../resource/liuguangcong.jpeg',
        'name': '刘光聪',
        'introduction': '中兴通讯技术规划部资深系统架构师',
        'information': '敏捷技术教练；就职于中兴通讯，任职资深系统架构师，致力于机器学习算法理论的研究与应用实践；Linux基金会Acumos AI项目TSC（技术控制委员会）成员；热衷于敏捷软件开发，极限编程实践。',
        'topic': '应用DDD/DCI构建高性能AI推理引擎',
        'topic-information': '机器学习主要包括训练和推理两个基本过程，本次演讲重点关注推理引擎的优化和实现技术。重点介绍AI推理服务的架构设计与领域模型，探究DDD在C++领域的实现模式。'
      }
    ]
  },
  {
    'producer-img': '../resource/wangwei.jpeg',
    'producer-name': '王威',
    'producer-introduction': 'ThoughtWorks首席架构师',
    'producer-information': '曾为国内外电信设备制造、电信运营商、金融、能源、电子商务等一线企业提供敏捷转型、架构重构、架构评估、微服务架构咨询服务。先后主导参与了若干个微服务架构转型项目。',
    'producer-topic': '领域驱动的业务中台',
    'topic-information': '2014年，微服务概念的火热带动了DDD的概念被业界重新认知。在微服务架构设计中，DDD被认为是微服务架构设计的指导思想。我们将继续关注业界是如何通过领域驱动设计的方法，来指导微服务架构的落地和实践的。同时，我们也更加关注服务网格（Service Mesh)等最新技术实践，及其给服务设计带来的影响。',
  },
  {
    'producer-img': '../resource/yangyun.jpeg',
    'producer-name': '杨云',
    'producer-introduction': 'ThoughtWorks首席咨询师',
    'producer-information': '20年软件开发经验，对函数式编程关注多年，在多个生产项目中实际使用Scala编程语言开发。2011年建立的Haskell函数式编程群可能是国内历史最长，人数最多的函数式编程讨论群。曾任支付宝架构师。',
    'producer-topic': '领域统一语言的实践模式',
    'topic-information': '领域驱动设计是建立在领域统一语言（Ubiquitous Language）的基础上的。如何能在业务、开发、运维等不同角色间，构建统一语言，并围绕容易语言构建模型，是很多DDD的实践者以及团队所关注的问题。在本专题中，我们将关注统一语言的发现和使用的过程，以及其为团队所带来的收益。',
    'speakers': [
      {
        'img': '../resource/wangpeng.jpeg',
        'name': '王鹏',
        'introduction': '华为公司培训服务部，云计算培训方案开发与交付负责人',
        'information': '13年IT行业经验，10年加入华为公司，曾参与华为云存储核心模块设计与开发。当前在运营商培训服务部负责云计算及DevOps相关培训方案开发与交付。本人对面向对象编程思想及DDD有着深刻的理解，并在多个项目中有应用经验。',
        'topic': '领域建模的易与难',
        'topic-information': '贫血模型盛行的直接原因是冯诺依曼架构本身是面向过程的，更深层的原因是程序员对领域知识的认识模糊。所以DDD的前提是正确认识领域知识，将其和具体的技术实现区隔开。DDD中领域建模的本质是用概念封装领域知识，并将其拼接在一起组成领域。但概念的本质又是什么？(对职责的抽象)。如何合理的提取概念(内聚，自治)并将其拼接成领域(约束关联，形成聚合)？'
      }
    ]
  },
  {
    'producer-img': '../resource/zhuao.jpeg',
    'producer-name': '朱傲',
    'producer-introduction': '戴姆勒大中华区高级架构师',
    'producer-information': '致力于将领域驱动设计应用于企业数字化平台的建设，作为顾问持续在各企业推广实施领域驱动设计，涉及PaaS，CRM，供应链，汽车销售等领域。架构师应对软件的复杂度，需要的不仅是领域模型，而是持续的演进。',
    'producer-topic': '领域驱动设计与架构师',
    'topic-information': '随着领域驱动设计实践的展开，团队的技术带头人（Tech Lead）或者架构师（Architect）的工作模式也在发生着变化。架构师的职责从原来的为团队定义架构要素，逐步向为团队提供快速反馈演进。在这一专题中，我们会邀请国内技术团队的一线架构师和技术带头人，通过他们的实际经验的分享，为听众阐明在实践DDD的团队中，架构师的工作到底是什么样的。',
    'speakers': [
      {
        'img': '../resource/wanghaiwen.jpeg',
        'name': '王海文',
        'introduction': '用友网络科技股份有限公司 高级技术架构师',
        'information': '长期从事大型企业管理软件的领域建模，架构设计。专注于ERP中供应链领域以及智能制造领域的软件研发，涉及ERP，智能工厂，物联网以及云架构方面的研究和实践。对领域驱动设计理论有深入的研究，并在大型toB软件系统中使用DDD的系统分析方法进行落地实践。在运用DDD对软件研发过程优化，传统企业管理软件微服务化，微服务设计等方面有着丰富的架构设计经验。',
        'topic': '基于DDD的领域建模中的模版和工具实践',
        'topic-information': '随着微服务的火热，领域驱动设计（DDD）的架构思想也越来越被企业和研发团队所重视。基于领域驱动设计的思想，从战略设计的角度进行领域分析，分解，一直到战术设计的聚合，服务，工厂，资源库设计，包括分层架构设计，事件驱动设计等等这些理论知识大家也都耳熟能详，但是如何在实践中落地，有哪些工具和模版可以规范化的帮助架构师进行领域建模，业界在这方面的分享并不多，演讲者在大型企业服务软件项目中经过实践总结出一套模版，结合工具来落地，在项目应用中取得了很好的效果。'
      }
    ]
  },
  {
    'producer-img': '../resource/zhouxianjing.jpeg',
    'producer-name': '禚娴静',
    'producer-introduction': 'ThoughtWorks高级咨询师',
    'producer-information': '多年企业和互联网应用的一线开发经验，参与和主导过多个大型敏捷项目的技术交付、遗留系统重构和微服务架构转型工作，译有《遗留系统重建》《基础实施即代码》，享受跳跃的代码和专注带来的乐趣。',
    'producer-topic': '领域驱动设计与演进式架构',
    'topic-information': '2017年，Neal Ford、Rebecca Parson、Patric Kua合著的新书《构建演进式架构》一书问世。一种新的架构治理模式被介绍给业界。演进式架构中对于incremental、guided、multi-dimension三个维度的阐述定义了一种全新的构建架构纬度快速反馈的管理方法。在本专题中，我们会专注演进式架构中三个维度的具体业界实践案例，希望让听众对演进式架构能有进一步的认知。',
    'speakers': [
      {
        'img': '../resource/zhouyugang.jpeg',
        'name': '周宇刚',
        'introduction': 'ThoughtWorks高级咨询师',
        'information': 'ThoughtWorks高级咨询师，DDD实践家 10年企业级应用开发经验，主要负责软件交付和持续交付咨询。从09年开始关注领域驱动设计，是Stack Overflow DDD标签 All Time Top Answerer 之一，曾在多个行业领域中实战过DDD。',
        'topic': '端口和适配器架构：DDD好帮手',
        'topic-information': 'Alistair Cockburn于2005年在其博客中提出了“端口与适配器”架构，建议使用“端口”隔离应用输入/输出的对象/方式，旨在保护应用不会由于部署方式、底层技术的变化而快速腐化，无法演化前进。在本地分享中，我将使用一个实际案例，解释该架构的使用方式以及其和领域驱动设计的互补性。'
      },
      {
        'img': '../resource/zhangyi.jpeg',
        'name': '张逸',
        'introduction': '民航信息技术总监',
        'information': '架构编码实践者，IT文艺工作者，大数据平台架构师，兼爱OO与FP，热衷于编程语言学习与技艺提升，致力于将主流领域驱动设计与函数式编程、响应式编程以及微服务架构完美结合。' +
        '张逸的个人微信公众号为「逸言」。',
        'topic': '领域驱动架构透析与架构解耦',
        'topic-information': '全面解构分层架构的本质与设计原则，并通过探索经典分层架构，领域驱动设计四层架构的演进，结合依赖倒置原则，clean architecture，六边形架构与微服务架构分析领域驱动架构的设计方法与过程，进而在架构层面达到解耦的目的。'
      }
    ]
  },
  {
    'producer-img': '../resource/xuxiaobin.jpeg',
    'producer-name': '许晓斌',
    'producer-introduction': '阿里巴巴高级技术专家',
    'producer-information': '<p>阿里巴巴/AliExpress 高级技术专家，从事微服务，DevOps，Java研发相关工作。著有《Maven实战》，并参与翻译《Cucumber，行为驱动开发》《七周七语言续》等书。</p>' + '<p>LinkedIn: https://www.linkedin.com/in/juvenxu/</p>',
    'producer-topic': '领域驱动与反应式架构',
    'topic-information': '在2017年的DDD峰会中，围绕领域驱动设计和函数式编程（Function Programming）的Unconference起到了意想不到的效果。与会者针对如何能够将DDD的原则和实践与FP结合到一起进行了深入的讨论。今年，我们将进一步关注DDD与FP、无服务器架构（Serverless）、流式编程（Flow based programming） 的结合点，希望能够一窥未来领域驱动设计在反应式架构中起到的作用。',
  }
]
