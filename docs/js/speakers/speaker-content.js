var speakers = [
  [{
    'producer-img': 'resource/zhangyi.jpeg',
    'producer-name': '王鹏',
    'producer-introduction': '华为公司培训服务部',
    'producer-information': '13年IT行业经验，10年加入华为公司，曾参与华为云存储核心模块设计与开发。当前在运营商培训服务部负责云计算及DevOps相关培训方案开发与交付。本人对面向对象编程思想及DDD有着深刻的理解，并在多个项目中有应用经验。',
    'producer-topic': '领域统一语言的实践模式',
    'topic-information': '贫血模型盛行的直接原因是冯诺依曼架构本身是面向过程的，更深层的原因是程序员对领域知识的认识模糊。所以DDD的前提是正确认识领域知识，将其和具体的技术实现区隔开。DDD中领域建模的本质是用概念封装领域知识，并将其拼接在一起组成领域。但概念的本质又是什么？(对职责的抽象)。如何合理的提取概念(内聚，自治)并将其拼接成领域(约束关联，形成聚合)？',
  },
    {
      'producer-img': 'resource/zhangyi.jpeg',
      'producer-name': '王鹏',
      'producer-introduction': '华为公司培训服务部',
      'producer-information': '13年IT行业经验，10年加入华为公司，曾参与华为云存储核心模块设计与开发。当前在运营商培训服务部负责云计算及DevOps相关培训方案开发与交付。本人对面向对象编程思想及DDD有着深刻的理解，并在多个项目中有应用经验。',
      'producer-topic': '领域统一语言的实践模式',
      'topic-information': '领域驱动设计是建立在领域统一语言（Ubiquitous Language）的基础上的。如何能在业务、开发、运维等不同角色间，构建统一语言，并围绕容易语言构建模型，是很多DDD的实践者以及团队所关注的问题。在本专题中，我们将关注统一语言的发现和使用的过程，以及其为团队所带来的收益。',
    }
  ], [
    {
      'producer-img': 'resource/wangwei.jpeg',
      'producer-name': '周宇刚',
      'producer-introduction': 'ThoughtWorks高级咨询师',
      'producer-information': 'ThoughtWorks高级咨询师，DDD实践家 10年企业级应用开发经验，主要负责软件交付和持续交付咨询。从09年开始关注领域驱动设计，是Stack Overflow DDD标签 All Time Top Answerer 之一，曾在多个行业领域中实战过DDD。',
      'producer-topic': 'CQRS、Event Sourcing和领域驱动设计的渊源',
      'topic-information': '在微观的OOP设计中，有查询和命令分离的说法。在架构设计中，也有读写模型分离的风格。本演讲旨在向中国领域驱动设计社区介绍CQRS（查询、命令职责分离）及其常见的事件溯源架构风格，以及这两个架构风格对领域驱动设计的促进',
    }, {
      'producer-img': 'resource/wangwei.jpeg',
      'producer-name': '周宇刚',
      'producer-introduction': 'ThoughtWorks高级咨询师',
      'producer-information': 'ThoughtWorks高级咨询师，DDD实践家 10年企业级应用开发经验，主要负责软件交付和持续交付咨询。从09年开始关注领域驱动设计，是Stack Overflow DDD标签 All Time Top Answerer 之一，曾在多个行业领域中实战过DDD。',
      'producer-topic': '领域驱动设计与演进式架构',
      'topic-information': '2017年，Neal Ford、Rebecca Parson、Patric Kua合著的新书《构建演进式架构》一书问世。一种新的架构治理模式被介绍给业界。演进式架构中对于incremental、guided、multi-dimension三个维度的阐述定义了一种全新的构建架构纬度快速反馈的管理方法。在本专题中，我们会专注演进式架构中三个维度的具体业界实践案例，希望让听众对演进式架构能有进一步的认知。',
    }], [
    {
      'producer-img': 'resource/yangyun.jpeg',
      'producer-name': '张逸',
      'producer-introduction': '民航信息技术总监',
      'producer-information': '架构编码实践者，IT文艺工作者，大数据平台架构师，兼爱OO与FP，热衷于编程语言学习与技艺提升，致力于将主流领域驱动设计与函数式编程、响应式编程以及微服务架构完美结合。\n' +
      '张逸的个人微信公众号为「逸言」。',
      'producer-topic': '领域驱动架构透析与架构解耦',
      'topic-information': '全面解构分层架构的本质与设计原则，并通过探索经典分层架构，领域驱动设计四层架构的演进，结合依赖倒置原则，clean architecture，六边形架构与微服务架构分析领域驱动架构的设计方法与过程，进而在架构层面达到解耦的目的。',
    }, {
      'producer-img': 'resource/yangyun.jpeg',
      'producer-name': '张逸',
      'producer-introduction': '民航信息技术总监',
      'producer-information': '架构编码实践者，IT文艺工作者，大数据平台架构师，兼爱OO与FP，热衷于编程语言学习与技艺提升，致力于将主流领域驱动设计与函数式编程、响应式编程以及微服务架构完美结合。\n' +
      '张逸的个人微信公众号为「逸言」。',
      'producer-topic': '领域驱动设计与演进式架构',
      'topic-information': '2017年，Neal Ford、Rebecca Parson、Patric Kua合著的新书《构建演进式架构》一书问世。一种新的架构治理模式被介绍给业界。演进式架构中对于incremental、guided、multi-dimension三个维度的阐述定义了一种全新的构建架构纬度快速反馈的管理方法。在本专题中，我们会专注演进式架构中三个维度的具体业界实践案例，希望让听众对演进式架构能有进一步的认知。',
    }], [
    {
      'producer-img': 'resource/zhuao.jpeg',
      'producer-name': '王海文',
      'producer-introduction': '用友网络科技股份有限公司高级技术架构师',
      'producer-information': '长期从事大型企业管理软件的领域建模，架构设计。专注于ERP中供应链领域以及智能制造领域的软件研发，涉及ERP，智能工厂，物联网以及云架构方面的研究和实践。对领域驱动设计理论有深入的研究，并在大型toB软件系统中使用DDD的系统分析方法进行落地实践。在运用DDD对软件研发过程优化，传统企业管理软件微服务化，微服务设计等方面有着丰富的架构设计经验。',
      'producer-topic': '基于DDD的领域建模中的模版和工具实践',
      'topic-information': '随着微服务的火热，领域驱动设计（DDD）的架构思想也越来越被企业和研发团队所重视。基于领域驱动设计的思想，从战略设计的角度进行领域分析，分解，一直到战术设计的聚合，服务，工厂，资源库设计，包括分层架构设计，事件驱动设计等等这些理论知识大家也都耳熟能详，但是如何在实践中落地，有哪些工具和模版可以规范化的帮助架构师进行领域建模，业界在这方面的分享并不多，演讲者在大型企业服务软件项目中经过实践总结出一套模版，结合工具来落地，在项目应用中取得了很好的效果。',
    }, {
      'producer-img': 'resource/zhuao.jpeg',
      'producer-name': '王海文',
      'producer-introduction': '用友网络科技股份有限公司高级技术架构师',
      'producer-information': '长期从事大型企业管理软件的领域建模，架构设计。专注于ERP中供应链领域以及智能制造领域的软件研发，涉及ERP，智能工厂，物联网以及云架构方面的研究和实践。对领域驱动设计理论有深入的研究，并在大型toB软件系统中使用DDD的系统分析方法进行落地实践。在运用DDD对软件研发过程优化，传统企业管理软件微服务化，微服务设计等方面有着丰富的架构设计经验。',
      'producer-topic': '领域驱动设计与架构师',
      'topic-information': '随着领域驱动设计实践的展开，团队的技术带头人（Tech Lead）或者架构师（Architect）的工作模式也在发生着变化。架构师的职责从原来的为团队定义架构要素，逐步向为团队提供快速反馈演进。在这一专题中，我们会邀请国内技术团队的一线架构师和技术带头人，通过他们的实际经验的分享，为听众阐明在实践DDD的团队中，架构师的工作到底是什么样的。',
    }], [
    {
      'producer-img': 'resource/zhouxianjing.jpeg',
      'producer-name': '刘光聪',
      'producer-introduction': '中兴通讯技术规划部资深系统架构师',
      'producer-information': '敏捷技术教练；就职于中兴通讯，任职资深系统架构师，致力于机器学习算法理论的研究与应用实践；Linux基金会Acumos AI项目TSC（技术控制委员会）成员；热衷于敏捷软件开发，极限编程实践。',
      'producer-topic': '拥抱Kubernetes：领域模型与内核设计',
      'topic-information': '阐述Kubernetes系统架构与核心原理，挖掘Kubernetes内在的领域模型，揭开Kubernetes运行时的核心机制。\n' +
        '<ul>' +
      '<li>1.深入理解Kubernetes的系统架构与未来演进趋势，从DDD的视角挖掘Kubernetes设计的精髓</li>' +
      '<li>2.通过核心领域对象的剖析，深入Kubernetes运行时的内核，一览容器编排实现的核心技术</li>' +
      '<li>3.深入探讨诸如Kubernetes大型软件系统中DDD方法论的实践，及其微服务架构的具体应用</li>'+
      '</ul>',
    }, {
      'producer-img': 'resource/zhouxianjing.jpeg',
      'producer-name': '刘光聪',
      'producer-introduction': '中兴通讯技术规划部资深系统架构师',
      'producer-information': '敏捷技术教练；就职于中兴通讯，任职资深系统架构师，致力于机器学习算法理论的研究与应用实践；Linux基金会Acumos AI项目TSC（技术控制委员会）成员；热衷于敏捷软件开发，极限编程实践。',
      'producer-topic': '领域驱动设计与企业级云IT架构',
      'topic-information': '作为IT系统治理和架构治理的一种工具，企业级架构被很多大型企业广泛采用。但在实际工作当中，企业级架构的定义和治理如何能够和快速变化的业务诉求相匹配，与快速创新的企业愿景相一致，这些问题一直有待解决。DDD作为一种面向响应力的软件和系统设计原则，在企业架构实践中大有用武之地。本专题将专注讨论领域驱动的企业级架构的设计方法和实践。',
    }], [
    {
      'producer-img': 'resource/xuxiaobin.jpeg',
      'producer-name': '许晓斌',
      'producer-introduction': '阿里巴巴高级技术专家',
      'producer-information': '<p>阿里巴巴/AliExpress 高级技术专家，从事微服务，DevOps，Java研发相关工作。著有《Maven实战》，并参与翻译《Cucumber，行为驱动开发》《七周七语言续》等书。</p>' + '<p>LinkedIn: https://www.linkedin.com/in/juvenxu/</p>',
      'producer-topic': '领域驱动与响应式设计',
      'topic-information': '在2017年的DDD中国峰会中，围绕领域驱动设计和函数式编程（Function Programming）的Unconference起到了意想不到的效果。与会者针对如何能够将DDD的原则和实践与FP结合到一起进行了深入的讨论。今年，我们将进一步关注DDD与FP、无服务器架构（Serverless）、流式编程（Flow based programming） 的结合点，希望能够一窥未来领域驱动设计在响应式设计中起到的作用。',
    }, {
      'producer-img': 'resource/xuxiaobin.jpeg',
      'producer-name': '许晓斌',
      'producer-introduction': '阿里巴巴高级技术专家',
      'producer-information': '<p>阿里巴巴/AliExpress 高级技术专家，从事微服务，DevOps，Java研发相关工作。著有《Maven实战》，并参与翻译《Cucumber，行为驱动开发》《七周七语言续》等书。</p>' + '<p>LinkedIn: https://www.linkedin.com/in/juvenxu/</p>',
      'producer-topic': '领域驱动与响应式设计',
      'topic-information': '在2017年的DDD中国峰会中，围绕领域驱动设计和函数式编程（Function Programming）的Unconference起到了意想不到的效果。与会者针对如何能够将DDD的原则和实践与FP结合到一起进行了深入的讨论。今年，我们将进一步关注DDD与FP、无服务器架构（Serverless）、流式编程（Flow based programming） 的结合点，希望能够一窥未来领域驱动设计在响应式设计中起到的作用。',
    }]
];
