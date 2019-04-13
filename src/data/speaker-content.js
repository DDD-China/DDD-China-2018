var speakers = [
  [{
    'producer-img': '../resource/wangpeng.jpeg',
    'producer-name': '王鹏',
    'producer-introduction': '华为公司LS云计算培训方案架构师',
    'producer-information': '13年IT行业经验，10年加入华为公司，曾参与华为云存储核心模块设计与开发。当前在运营商培训服务部负责云计算及DevOps相关培训方案开发与交付。本人对面向对象编程思想及DDD有着深刻的理解，并在多个项目中有应用经验。',
    'producer-topic': '领域建模的易与难',
    'topic-information': '贫血模型盛行的直接原因是冯诺依曼架构本身是面向过程的，更深层的原因是程序员对领域知识的认识模糊。所以DDD的前提是正确认识领域知识，将其和具体的技术实现区隔开。DDD中领域建模的本质是用概念封装领域知识，并将其拼接在一起组成领域。但概念的本质又是什么？(对职责的抽象)。如何合理的提取概念(内聚，自治)并将其拼接成领域(约束关联，形成聚合)？',
  },
    {
      'producer-information': '13年IT行业经验，10年加入华为公司，曾参与华为云存储核心模块设计与开发。当前在运营商培训服务部负责云计算及DevOps相关培训方案开发与交付。本人对面向对象编程思想及DDD有着深刻的理解，并在多个项目中有应用经验。',
      'producer-topic': '领域统一语言的实践模式',
      'topic-information': '领域驱动设计是建立在领域统一语言（Ubiquitous Language）的基础上的。如何能在业务、开发、运维等不同角色间，构建统一语言，并围绕容易语言构建模型，是很多DDD的实践者以及团队所关注的问题。在本专题中，我们将关注统一语言的发现和使用的过程，以及其为团队所带来的收益。',
    }
  ], [
    {
      'producer-img': '../resource/zhouyugang.jpeg',
      'producer-name': '周宇刚',
      'producer-introduction': 'ThoughtWorks高级咨询师',
      'producer-information': 'ThoughtWorks高级咨询师，DDD实践家 10年企业级应用开发经验，主要负责软件交付和持续交付咨询。从09年开始关注领域驱动设计，是Stack Overflow DDD标签 All Time Top Answerer 之一，曾在多个行业领域中实战过DDD。',
      'producer-topic': '端口和适配器架构：DDD好帮手',
      'topic-information': 'Alistair Cockburn于2005年在其博客中提出了“端口与适配器”架构，建议使用“端口”隔离应用输入/输出的对象/方式，旨在保护应用不会由于部署方式、底层技术的变化而快速腐化，无法演化前进。在本地分享中，我将使用一个实际案例，解释该架构的使用方式以及其和领域驱动设计的互补性。',
    }, {
      'producer-img': '../resource/zhouyugang.jpeg',
      'producer-name': '周宇刚',
      'producer-introduction': 'ThoughtWorks高级咨询师',
      'producer-information': 'ThoughtWorks高级咨询师，DDD实践家 10年企业级应用开发经验，主要负责软件交付和持续交付咨询。从09年开始关注领域驱动设计，是Stack Overflow DDD标签 All Time Top Answerer 之一，曾在多个行业领域中实战过DDD。',
      'producer-topic': '领域驱动设计与演进式架构',
      'topic-information': '2017年，Neal Ford、Rebecca Parson、Patric Kua合著的新书《构建演进式架构》一书问世。一种新的架构治理模式被介绍给业界。演进式架构中对于incremental、guided、multi-dimension三个维度的阐述定义了一种全新的构建架构纬度快速反馈的管理方法。在本专题中，我们会专注演进式架构中三个维度的具体业界实践案例，希望让听众对演进式架构能有进一步的认知。',
    }], [
    {
      'producer-img': '../resource/zhangyi.jpeg',
      'producer-name': '张逸',
      'producer-introduction': '民航信息技术总监',
      'producer-information': '架构编码实践者，IT文艺工作者，大数据平台架构师，兼爱OO与FP，热衷于编程语言学习与技艺提升，致力于将主流领域驱动设计与函数式编程、响应式编程以及微服务架构完美结合。\n' +
      '张逸的个人微信公众号为「逸言」。',
      'producer-topic': '领域驱动架构透析与架构解耦',
      'topic-information': '全面解构分层架构的本质与设计原则，并通过探索经典分层架构，领域驱动设计四层架构的演进，结合依赖倒置原则，clean architecture，六边形架构与微服务架构分析领域驱动架构的设计方法与过程，进而在架构层面达到解耦的目的。',
    }, {
      'producer-img': '../resource/zhangyi.jpeg',
      'producer-name': '张逸',
      'producer-introduction': '民航信息技术总监',
      'producer-information': '架构编码实践者，IT文艺工作者，大数据平台架构师，兼爱OO与FP，热衷于编程语言学习与技艺提升，致力于将主流领域驱动设计与函数式编程、响应式编程以及微服务架构完美结合。\n' +
      '张逸的个人微信公众号为「逸言」。',
      'producer-topic': '领域驱动设计与演进式架构',
      'topic-information': '2017年，Neal Ford、Rebecca Parson、Patric Kua合著的新书《构建演进式架构》一书问世。一种新的架构治理模式被介绍给业界。演进式架构中对于incremental、guided、multi-dimension三个维度的阐述定义了一种全新的构建架构纬度快速反馈的管理方法。在本专题中，我们会专注演进式架构中三个维度的具体业界实践案例，希望让听众对演进式架构能有进一步的认知。',
    }], [
    {
      'producer-img': '../resource/liuguangcong.jpeg',
      'producer-name': '刘光聪',
      'producer-introduction': '中兴通讯技术规划部资深系统架构师',
      'producer-information': '敏捷技术教练；就职于中兴通讯，任职资深系统架构师，致力于机器学习算法理论的研究与应用实践；Linux基金会Acumos AI项目TSC（技术控制委员会）成员；热衷于敏捷软件开发，极限编程实践。',
      'producer-topic': '应用DDD/DCI构建高性能AI推理引擎',
      'topic-information': '机器学习主要包括训练和推理两个基本过程，本次演讲重点关注推理引擎的优化和实现技术。重点介绍AI推理服务的架构设计与领域模型，探究DDD在C++领域的实现模式。',
    }, {
      'producer-img': '../resource/liuguangcong.jpeg',
      'producer-name': '刘光聪',
      'producer-introduction': '中兴通讯技术规划部资深系统架构师',
      'producer-information': '敏捷技术教练；就职于中兴通讯，任职资深系统架构师，致力于机器学习算法理论的研究与应用实践；Linux基金会Acumos AI项目TSC（技术控制委员会）成员；热衷于敏捷软件开发，极限编程实践。',
      'producer-topic': '领域驱动设计与企业应用架构',
      'topic-information': '作为IT系统治理和架构治理的一种工具，企业级架构被很多大型企业广泛采用。但在实际工作当中，企业级架构的定义和治理如何能够和快速变化的业务诉求相匹配，与快速创新的企业愿景相一致，这些问题一直有待解决。DDD作为一种面向响应力的软件和系统设计原则，在企业架构实践中大有用武之地。本专题将专注讨论领域驱动的企业级架构的设计方法和实践。',
    }],
    [
      {
        'producer-img': '../resource/speakers/zhangqunhui.png',
        'producer-name': '张群辉',
        'producer-introduction': '阿里盒马架构总监',
        'producer-information': '15 + 年技术及管理实战经验，前阿里基础机构事业部工程效率总监，长期一线指导大型复杂系统的架构设计，DevOps、微服务架构及领域驱动设计国内最早的一批实践者。崇尚实践出真知，一直奋斗在技术一线。',
        'producer-topic': '盒马核心系统架构演进',
        'topic-information': '在过去两年的时间里，盒马一直在从0到1的路上舍命狂奔，两年时间迅速开启百家店铺。面对市场及业务的高速发展，盒马技术团队要如何通过基础架构革命来应对多商家开发，多商家隔离，稳定性隔离以及盒马经济体服务共建的系统需求？</br>盒马于2018云栖大会推出新零售REX系列，其中REX OS的底层技术架构NBD承载了盒马开发者生态圈建设的重任。在NBF框架下，盒马开始全面采用基于服务、重在扩展、强调编排的系统建设新模式，同时也展开了免于运维，去除应用，代码托管的崭新开发运维模式。',
      },
      {
        'producer-img': '',
        'producer-name': '',
        'producer-introduction': '',
        'producer-information': '',
        'producer-topic': '领域驱动设计与企业应用架构',
        'topic-information': '作为IT系统治理和架构治理的一种工具，企业级架构被很多大型企业广泛采用。但在实际工作当中，企业级架构的定义和治理如何能够和快速变化的业务诉求相匹配，与快速创新的企业愿景相一致，这些问题一直有待解决。DDD作为一种面向响应力的软件和系统设计原则，在企业架构实践中大有用武之地。本专题将专注讨论领域驱动的企业级架构的设计方法和实践。',
      }
    ],
    [
      {
        'producer-img': '../resource/speakers/panjiayu.jpg',
        'producer-name': '潘加宇',
        'producer-introduction': 'UMLChina创始人，首席专家',
        'producer-information': '在1999年还是一名程序员时，利用业余时间创建了UMLChina，潜心研究需求和设计技能。2002年开始对外提供UML需求和设计的技术指导和训练服务。到现在为止，已经上门为超过280家的组织提供服务，覆盖了国内各个领域的领袖企业，包括通信、企业管理、电子商务、房地产、网络游戏、地理信息、物流、数码设备、医疗设备、工业控制.....等领域。',
        'producer-topic': '状态机是表达和封装领域逻辑的利器',
        'topic-information': '状态机是对象的灵魂，如果对象的状态机无法描述或者不值得描述，那么这个对象的价值是很小的。良好的状态机模型可以帮助我们定义类的合适操作。</br>本演讲剖析常见的一些状态机建模的错误，并演示状态机如何在领域建模中封装领域逻辑。',
      },
      {
        'producer-img': '',
        'producer-name': '',
        'producer-introduction': '',
        'producer-information': '',
        'producer-topic': '领域驱动设计与企业应用架构',
        'topic-information': '作为IT系统治理和架构治理的一种工具，企业级架构被很多大型企业广泛采用。但在实际工作当中，企业级架构的定义和治理如何能够和快速变化的业务诉求相匹配，与快速创新的企业愿景相一致，这些问题一直有待解决。DDD作为一种面向响应力的软件和系统设计原则，在企业架构实践中大有用武之地。本专题将专注讨论领域驱动的企业级架构的设计方法和实践。',
      }
    ],
    [
      {
        'producer-img': '../resource/speakers/tengyun.png',
        'producer-name': '滕云',
        'producer-introduction': 'ThoughtWorks软件工程师',
        'producer-information': 'ThoughtWorks软件架构师，一线编码者，软件美追求者，DDD推崇者，具有多个大中型系统的DDD落地实践经验，同时对DevOps有浓厚兴趣，译有《实现领域驱动设计》等书。',
        'producer-topic': 'DDD的为与不为',
        'topic-information': '实践DDD与以正确的方式实践DDD是两回事情，DDD与其他软件技术一样有其自身的道或者套路，这些是通过反复的行业实践以及不断的试错之后总结出来的，而不是随便在网上找几篇文章读读就能获得的。在本次演讲中，我将分享到我在多个项目实践DDD的过程中所总结出来的一些经验和技法。',
      },
      {
        'producer-img': '',
        'producer-name': '',
        'producer-introduction': '',
        'producer-information': '',
        'producer-topic': '领域驱动设计与架构师',
        'topic-information': '随着领域驱动设计实践的展开，团队的技术带头人（Tech Lead）或者架构师（Architect）的工作模式也在发生着变化。架构师的职责从原来的为团队定义架构要素，逐步向为团队提供快速反馈演进。在这一专题中，我们会邀请国内技术团队的一线架构师和技术带头人，通过他们的实际经验的分享，为听众阐明在实践DDD的团队中，架构师的工作到底是什么样的。',
      }
    ],
    [
      {
        'producer-img': '../resource/speakers/zhangxiaolong.png',
        'producer-name': '张晓龙',
        'producer-introduction': '中兴通讯资深软件架构师',
        'producer-information': '多年软件架构和开发经验，爱读书，爱运动，爱编程，爱分享，对于大型软件的重构具有丰富的实战经验。近几年指导多个团队积极实践 DDD，包括开发领域和测试领域，取得了比较好的效果。 ',
        'producer-topic': '基于 FP 的 DDD 实践',
        'topic-information': '问题背景：你是一名数学老师，在某次课距离下课还有十分钟时，你决定做数形状的游戏（数三角形和数四边形），于是在黑板上画了一个图，接着引导同学们做这个游戏。</br>解决方案选型：不管是数三角形还是数四边形，既可以基于 OO 建立领域模型，也可以基于 FP 建立领域模型，但是基于 FP 建立的领域模型与领域语义之间的 Gap 最小且维护成本最低</br>方案介绍：首先将数三角形或四边形的方法描述成计算机可以执行的形式化算法，并且要求这种描述的抽象层次高且非常贴合领域，然后提炼领域模型，最后通过代码表达领域模型</br>实施后效果说明：领域专家和软件专家无障碍的沟通领域问题，同时代码维护成本低',
      },
      {
        'producer-img': '',
        'producer-name': '',
        'producer-introduction': '',
        'producer-information': '',
        'producer-topic': '领域驱动与反应式架构',
        'topic-information': '在2017年的DDD峰会中，围绕领域驱动设计和函数式编程（Function Programming）的Unconference起到了意想不到的效果。与会者针对如何能够将DDD的原则和实践与FP结合到一起进行了深入的讨论。今年，我们将进一步关注DDD与FP、无服务器架构（Serverless）、流式编程（Flow based programming） 的结合点，希望能够一窥未来领域驱动设计在反应式架构中起到的作用。',
      }
    ],
    [{
      'producer-img': '../resource/wanghaiwen.jpeg',
      'producer-name': '王海文',
      'producer-introduction': '用友网络科技股份有限公司高级技术架构师',
      'producer-information': '长期从事大型企业管理软件的领域建模，架构设计。专注于ERP中供应链领域以及智能制造领域的软件研发，涉及ERP，智能工厂，物联网以及云架构方面的研究和实践。对领域驱动设计理论有深入的研究，并在大型toB软件系统中使用DDD的系统分析方法进行落地实践。在运用DDD对软件研发过程优化，传统企业管理软件微服务化，微服务设计等方面有着丰富的架构设计经验。',
      'producer-topic': '基于DDD的领域建模中的模版和工具实践',
      'topic-information': '随着微服务的火热，领域驱动设计（DDD）的架构思想也越来越被企业和研发团队所重视。基于领域驱动设计的思想，从战略设计的角度进行领域分析，分解，一直到战术设计的聚合，服务，工厂，资源库设计，包括分层架构设计，事件驱动设计等等这些理论知识大家也都耳熟能详，但是如何在实践中落地，有哪些工具和模版可以规范化的帮助架构师进行领域建模，业界在这方面的分享并不多，演讲者在大型企业服务软件项目中经过实践总结出一套模版，结合工具来落地，在项目应用中取得了很好的效果。',
    }, {
      'producer-img': '../resource/wanghaiwen.jpeg',
      'producer-name': '王海文',
      'producer-introduction': '用友网络科技股份有限公司高级技术架构师',
      'producer-information': '长期从事大型企业管理软件的领域建模，架构设计。专注于ERP中供应链领域以及智能制造领域的软件研发，涉及ERP，智能工厂，物联网以及云架构方面的研究和实践。对领域驱动设计理论有深入的研究，并在大型toB软件系统中使用DDD的系统分析方法进行落地实践。在运用DDD对软件研发过程优化，传统企业管理软件微服务化，微服务设计等方面有着丰富的架构设计经验。',
      'producer-topic': '领域驱动设计与架构师',
      'topic-information': '随着领域驱动设计实践的展开，团队的技术带头人（Tech Lead）或者架构师（Architect）的工作模式也在发生着变化。架构师的职责从原来的为团队定义架构要素，逐步向为团队提供快速反馈演进。在这一专题中，我们会邀请国内技术团队的一线架构师和技术带头人，通过他们的实际经验的分享，为听众阐明在实践DDD的团队中，架构师的工作到底是什么样的。',
    }],[
    {
      'producer-img': '../resource/wangjian.png',
      'producer-name': '王健',
      'producer-introduction': 'ThoughtWorks高级咨询师',
      'producer-information': '一直从事国内外大型企业级软件的设计与开发，保持着对技术的热爱，享受着编码的快乐，热衷于技术分享，阿里云MVP。十年前开始接触DDD，一直在工作中运用与不断学习。近两年关注在应用DDD进行大型企业企业数字中台规划与落地，平台化建设，遗留系统服务化相关工作。',
      'producer-topic': '当我们谈中台时我们在谈些什么？',
      'topic-information': '以实际案例出发，从之中的坑和反思。重新思考什么是中台和中台的根本目的，整理归纳目前行业对于中台的各种认识。从企业IT长远发展的高度，结合三地平线理论，规模化创新的必要与难点，以用户为中心，再次认识中台概念。并结合DDD在中台项目中的实际应用，让大家对于中台的概念和路线更加清晰明确。',
    }, {
      'producer-img': '../resource/wangjian.png',
      'producer-name': '王健',
      'producer-introduction': '',
      'producer-information': '',
      'producer-topic': '领域驱动的业务中台',
      'topic-information': '2014年，微服务概念的火热带动了DDD的概念被业界重新认知。在微服务架构设计中，DDD被认为是微服务架构设计的指导思想。我们将继续关注业界是如何通过领域驱动设计的方法，来指导微服务架构的落地和实践的。同时，我们也更加关注服务网格（Service Mesh)等最新技术实践，及其给服务设计带来的影响。',
    }],[
    {
      'producer-img': '../resource/xupo.png',
      'producer-name': '徐泼',
      'producer-introduction': '美团酒旅研发中心高级技术专家',
      'producer-information': '美团高级技术专家，10年开发和架构设计经验，涉及通信行业企业级应用、虚拟游戏社区、实物电商、社交SNS、汽车O2O、旅游电商领域；擅长面向对象设计和领域驱动设计，专注大型软件的面向服务系统架构设计和互联网Web系统架构设计，对复杂业务领域建模具有丰富的设计实战经验。现负责美团度假商品中心和供应链团队，并担任旅游度假业务架构师，主导旅游度假电商平台架构设计，结合领域驱动设计，深入旅游电商领域，对DDD在旅游电商平台架构演进的实践有深刻的理解和体会。',
      'producer-topic': 'DDD在旅游电商架构演进中的实践',
      'topic-information': '大型互联网企业在经历了中国互联网的高速发展，在高并发、高可用和高性能方面沉淀了较多的经验，随着互联网对传统领域的逐步改造和传统领域业务线上化率的不断提升，互联网应用的架构需要同时面对业务领域复杂性和服务稳定性的两大挑战。DDD始终强调的是在致力于为复杂业务系统设计和开发软件时，专注领域高于一切。在这互联网和传统企业级应用逐步汇合的时代，领域驱动设计的思想在互联网软件架构设计中起到了非常大的指导作用。',
    }, {
      'producer-img': '../resource/wanghaiwen.jpeg',
      'producer-name': '',
      'producer-introduction': '',
      'producer-information': '',
      'producer-topic': '领域驱动设计与演进式架构',
      'topic-information': '2017年，Neal Ford、Rebecca Parson、Patric Kua合著的新书《构建演进式架构》一书问世。一种新的架构治理模式被介绍给业界。演进式架构中对于incremental、guided、multi-dimension三个维度的阐述定义了一种全新的构建架构纬度快速反馈的管理方法。在本专题中，我们会专注演进式架构中三个维度的具体业界实践案例，希望让听众对演进式架构能有进一步的认知。',
    }],[
    {
      'producer-img': '../resource/likaihang.png',
      'producer-name': '李凯航',
      'producer-introduction': '中兴通讯操作系统技术专家',
      'producer-information': '中兴通讯操作系统产品系统架构师、技术专家，主要研究方向为嵌入式虚拟化、电信级服务器虚拟化、微内核技术、物联网操作系统、领域驱动设计、函数式设计、代数式设计、软件形式化设计及验证技术等，曾担任公司级光传输平台、分组交换平台产品的核心架构设计师。',
      'producer-topic': '领域模型与形式化验证技术',
      'topic-information': '    软件安全性主要取决于领域模型的设计是否安全、正确，领域驱动设计为需求原型分析、设计、开发、测试、交付提供了一种高效统一的端到端产品设计思路，但整个过程缺少针对领域模型正确性的推导与验证过程，这个过程中领域经验占主导成分，特性团队中人员的构成、背景、经验以及对领域的理解程度都会影响领域模型设计的正确性，因此领域驱动设计需要有一种客观性的理论方法来保证领域模型设计阶段就有一个可量化、能够验证的模型才能从根本上解决上述问题',
    }, {
      'producer-img': '../resource/wanghaiwen.jpeg',
      'producer-name': '',
      'producer-introduction': '',
      'producer-information': '',
      'producer-topic': '领域统一语言的实践模式',
      'topic-information': '领域驱动设计是建立在领域统一语言（Ubiquitous Language）的基础上的。如何能在业务、开发、运维等不同角色间，构建统一语言，并围绕容易语言构建模型，是很多DDD的实践者以及团队所关注的问题。在本专题中，我们将关注统一语言的发现和使用的过程，以及其为团队所带来的收益',
    }],[
    {
      'producer-img': '../resource/jiwei.png',
      'producer-name': '季炜',
      'producer-introduction': 'ThoughtWorks高级咨询师',
      'producer-information': '为众多客户提供敏捷转型、精益创新及业务流程优化等管理咨询服务，涉及领域包括金融、电信、互联网等领域。季炜对设计思维、需求条目化管理、领域驱动设计、LeSS、Scrum、Kanban等实践有深入了解。目前专注于帮助客户采纳精益和敏捷的原则与方法，提升产品价值，提高研发效率和质量的研究和实践工作。',
      'producer-topic': '复杂业务场景下的业务架构梳理到技术架构设计 - UX与架构师的完美结对',
      'topic-information': '领域驱动设计强调基于业务领域来设计系统架构，业务领域的划分强依赖于领域专家的支持。但在复杂场景下，你会发现这样的领域专家根本不存在。整体的业务依赖于多个领域专家，且他们的视角和认知不同统一。主系统依赖上百个外围系统，使用的是20年前的语言。而且业务一致性与稳定性又是系统建设的根本。那么在这样的背景下我们该如何梳理业务架构，如何设计技术架构，本次分享将用一个真实案例做主线，为您介绍揭晓答案。',
    }, {
      'producer-img': '../resource/wanghaiwen.jpeg',
      'producer-name': '',
      'producer-introduction': '',
      'producer-information': '',
      'producer-topic': '领域驱动设计与架构师',
      'topic-information': '随着领域驱动设计实践的展开，团队的技术带头人（Tech Lead）或者架构师（Architect）的工作模式也在发生着变化。架构师的职责从原来的为团队定义架构要素，逐步向为团队提供快速反馈演进。在这一专题中，我们会邀请国内技术团队的一线架构师和技术带头人，通过他们的实际经验的分享，为听众阐明在实践DDD的团队中，架构师的工作到底是什么样的。',
    }],[
    {
      'producer-img': '../resource/baiyanlei.png',
      'producer-name': '白彦磊',
      'producer-introduction': ' 广联达科技股份有限公司土建产品部技术架构部经理',
      'producer-information': '目前任广联达公司核心产品技术架构部经理；从业8年，一直从事工程造价领域的图形类产品的研发，历任开发工程师，研发经理等职；\n' +
      '主要负责核心产品的系统分析、架构设计、技术团队培养、敏捷研发等工作；\n' +
      '16年开始尝试在产品中应用DDD方法，17年起主导实践DDD方法推动产品的架构升级，以应对业务发展，产品转型的挑战，目前已取得较好的阶段成果。',
      'producer-topic': '化繁为简--DDD驱动复杂业务软件架构的演进',
      'topic-information': '本产品是建筑行业的图形类产品，产品领域涉及建筑力学、工程造价等多个专业领域知识；同时软件规模大（代码量354万+），150+人员共同研发。\n' +
      '近两年来，业务发展及产品转型加速，架构需持续演化以应对业务创新、并行研发、持续交付的挑战；而行业产品的复杂度源于业务，如何对复杂业务做出有效的抽象建模是架构的核心。\n' +
      '我们以DDD方法为指导，以领域建模、业务抽象为核心，以分层解耦，可视化为主要策略，结合组件化、可测试接口设计、依赖倒置等技术方法对架构进行重构，以达到控制系统复杂度的目的，从而使产品具有高可扩展、并行研发、可持续交付的特性；一年多来，架构重构完成了多业务模块的业务建模、边界定义，支撑了云、人工智能技术的引入；实现了10+特性团队并行研发，产品整体发布周期缩短到1~3个月，单业务实现2~3周独立发布，有效支撑了业务发展及产品转型；同时驱动组织结构向外科手术式团队转型；',
    }, {
      'producer-img': '../resource/wanghaiwen.jpeg',
      'producer-name': '',
      'producer-introduction': '',
      'producer-information': '',
      'producer-topic': '领域驱动设计与演进式架构',
      'topic-information': '2017年，Neal Ford、Rebecca Parson、Patric Kua合著的新书《构建演进式架构》一书问世。一种新的架构治理模式被介绍给业界。演进式架构中对于incremental、guided、multi-dimension三个维度的阐述定义了一种全新的构建架构纬度快速反馈的管理方法。在本专题中，我们会专注演进式架构中三个维度的具体业界实践案例，希望让听众对演进式架构能有进一步的认知。',
    }],[
    {
      'producer-img': '../resource/yaoxiaofeng.png',
      'producer-name': '姚晓峰',
      'producer-introduction': '美团配送技术部  技术架构部经理',
      'producer-information': '长期从事业务系统的领域建模、架构设计和一线开发工作。专注于企业业务系统和财务核算系统建设，涉及的行业有互联网企业、贸易企业、工业企业、第三方物流企业和出版企业，深度理解相应领域业务知识。对领域驱动设计理论有深入的研究，并在系统建设中使用DDD的分析和设计理念进行落地实践。',
      'producer-topic': '领域驱动设计在美团配送运力支撑业务系统建设中的实践',
      'topic-information': '美团配送运力支撑业务系统经过几年的快速迭代建设，业务逻辑复杂且耦合严重, 代码难理解，可维护性和可扩充性差，随着系统复杂度的增加开发迭代效率逐步下降，需要对系统进行架构优化。\n' +
      '主体思路是在服务拆分的基础上，使用DDD的系统分析和设计理念对系统进行合理抽象，分层，提炼出领域对象模型。经过本次系统改造及重构，对配送运力支持业务系统进行了良好的领域抽象建模，对象职责清楚，分离了系统的复杂度，降低了系统的耦合性，代码重用性良好，降低了系统的开发难度，提升了系统的开发效率。',
    }, {
      'producer-img': '../resource/wanghaiwen.jpeg',
      'producer-name': '',
      'producer-introduction': '',
      'producer-information': '',
      'producer-topic': '领域驱动设计与架构师',
      'topic-information': '随着领域驱动设计实践的展开，团队的技术带头人（Tech Lead）或者架构师（Architect）的工作模式也在发生着变化。架构师的职责从原来的为团队定义架构要素，逐步向为团队提供快速反馈演进。在这一专题中，我们会邀请国内技术团队的一线架构师和技术带头人，通过他们的实际经验的分享，为听众阐明在实践DDD的团队中，架构师的工作到底是什么样的。',
    }],[
    {
      'producer-img': '../resource/png.jpeg',
      'producer-name': '和坚',
      'producer-introduction': 'ThoughtWorks高级咨询师',
      'producer-information': '十余年IT从业经验，曾担任某互联网金融公司CTO。从技术到金融，从金融到风控，从风控到互联网，从互联网到咨询。不断走出舒适区，体验多维的人生。',
      'producer-topic': '如何让DDD落地',
      'topic-information': '在使用DDD方法来实际进行开发的项目中，其实从领域到实际的代码还是有一个距离的。这个演讲就是通过一个实际的示例看到如何从业务领域的分析落地到代码实现的，并能够感受到经过这样一个过程，如果需要根据聚合拆分微服务的时候，DDD如何让这一切变的就像打个响指那么简单。',
    }, {
      'producer-img': '../resource/wanghaiwen.jpeg',
      'producer-name': '',
      'producer-introduction': '',
      'producer-information': '',
      'producer-topic': '领域统一语言的实践模式',
      'topic-information': '领域驱动设计是建立在领域统一语言（Ubiquitous Language）的基础上的。如何能在业务、开发、运维等不同角色间，构建统一语言，并围绕容易语言构建模型，是很多DDD的实践者以及团队所关注的问题。在本专题中，我们将关注统一语言的发现和使用的过程，以及其为团队所带来的收益。',
    }],
    [
      {
        'producer-img': '../resource/speakers/fangang.png',
        'producer-name': '范钢',
        'producer-introduction': '航天信息金税本部首席架构师',
        'producer-information': '航天信息首席架构师，《大话重构》作者，哈工大软件工程硕士，软件架构及重构的客座讲师。大型遗留系统改造专业户，多次参与大型遗留系统改造、软件系统重构等重大项目。长期关注大型业务系统品质保证、防止腐化以及技术改造等问题，在实践微服务转型及大数据转型方面有丰富的经验。',
        'producer-topic': 'DDD促进传统架构微服务转型',
        'topic-information': '当今社会是一个新技术快速迭代的时代，新技术的迭代虽然为研发团队带来了许多挑战，但更多的是大量新的机遇，以及它们背后的新兴领域、新兴市场。然而，这又是一个激烈竞争的舞台，如何在这个舞台上获得成功呢？带着这样的思考，我用一个鲜活的案例，揭示了一个传统团队如何进行微服务转型；转型过程中的困局，以及如何DDD破解这个困局；DDD指导下的微服务转型后的惊人效果。',
      },
      {
        'producer-img': '',
        'producer-name': '',
        'producer-introduction': '',
        'producer-information': '',
        'producer-topic': '领域驱动设计与演进式架构',
        'topic-information': '2017年，Neal Ford、Rebecca Parson、Patric Kua合著的新书《构建演进式架构》一书问世。一种新的架构治理模式被介绍给业界。演进式架构中对于incremental、guided、multi-dimension三个维度的阐述定义了一种全新的构建架构纬度快速反馈的管理方法。在本专题中，我们会专注演进式架构中三个维度的具体业界实践案例，希望让听众对演进式架构能有进一步的认知。',
      }
    ],
    [
      {
        'producer-img': '../resource/speakers/caojian.png',
        'producer-name': '曹剑',
        'producer-introduction': '四川好医生药业集团CTO',
        'producer-information': '16年软件开发工作经验。先后在微软全球技术服务中心、IT独立软件与解决方案开发商、纯互联网公司、传统公司业务互联网化领域工作；分别承担微软资深讲师、ESS技术主管、技术总监、CTO、总经理助理等职位，现任四川好医生药业集团CTO。17年软件开发经验，13年项目管理经验，10年互联网应用架构经验；擅长软件分析与业务建模、并在7年前就落地DDD方法与经典架构、CQRS架构、2年前落地微服务架构风格等；擅长的后端技术包括C#、Asp.net core WebApi、EF core等；开发或管理过的软件产品70多个，涉及的领域较广，包括钢铁行业、房地产行业、知识产权行业、政府部门等内部业务软件与公众服务平台；也包括纯互联网的B2B、B2C平台；现在涉及到的是互联网医疗产品并整合传统医疗业务。17年培训与演讲经验，曾获西南地区唯一微软金话筒讲师，并获得微软多个内部技术证书。',
        'producer-topic': '在一个实际复杂业务中落地DDD方法与相关架构',
        'topic-information': '一般介绍DDD的文章举的例子都非常简单，并没有很好的体现DDD的核心思想与设计落地，一旦遇到复杂业务，不知如何利用DDD实现设计与编码落地。本次演讲通过企业实际完成的一个相对复杂的费用管理系统（涉及预算、费用申请、费用执行、借还款等），从这个系统初步需求方接触、通过统一语言沟通需求并形成核心模型、利用DDD经典架构编码落地、设计与编码的最佳实践、某些功能利用微服务架构风格处理的全过程。整个分析到设计、设计到架构、架构到编码的过程都遵循DDD的思想与模式，并且整个系统模型与开发在公司内部都是一次过审。',
      },
      {
        'producer-img': '',
        'producer-name': '',
        'producer-introduction': '',
        'producer-information': '',
        'producer-topic': '领域驱动设计与企业应用架构',
        'topic-information': '作为IT系统治理和架构治理的一种工具，企业级架构被很多大型企业广泛采用。但在实际工作当中，企业级架构的定义和治理如何能够和快速变化的业务诉求相匹配，与快速创新的企业愿景相一致，这些问题一直有待解决。DDD作为一种面向响应力的软件和系统设计原则，在企业架构实践中大有用武之地。本专题将专注讨论领域驱动的企业级架构的设计方法和实践。',
        }
    ],
    [
      {
        'producer-img': '../resource/speakers/xuzebin.jpg',
        'producer-name': '许泽彬',
        'producer-introduction': '阿里巴巴淘宝技术专家',
        'producer-information': '就职于阿里，目前负责淘宝应用架构升级。曾参与淘宝用户增长设施与平台建设；负责过分布式调用链跟踪框架和系统、 前阿里分布式数据库同步系统核心开发 (中美异地机房数据同步产品) 。',
        'producer-topic': '淘宝应用架构升级——反应式架构的探索与实践',
        'topic-information': '随着阿里淘宝业务和机器规模的不断增长，在机器资源利用率，系统稳定性，业务快速创新方面，受到的挑战越来越大，如何解决以上问题？反应式架构（反应式宣言）为解决以上问题阐述了理念和方式。目前淘宝在反应式架构方面的探索已经走在落地实践的路上，在初步落地之后，一些应用的性能甚至提升了50%+，RT 下降了40%+，我们认为，这块的收益仅仅是刚刚开始…',
      },
      {
        'producer-img': '',
        'producer-name': '',
        'producer-introduction': '',
        'producer-information': '',
        'producer-topic': '领域驱动与反应式架构',
        'topic-information': '在2017年的DDD峰会中，围绕领域驱动设计和函数式编程（Function Programming）的Unconference起到了意想不到的效果。与会者针对如何能够将DDD的原则和实践与FP结合到一起进行了深入的讨论。今年，我们将进一步关注DDD与FP、无服务器架构（Serverless）、流式编程（Flow based programming） 的结合点，希望能够一窥未来领域驱动设计在反应式架构中起到的作用。',
      }
    ],
    [
      {
        'producer-img': '../resource/speakers/wangli.png',
        'producer-name': '王立',
        'producer-introduction': '腾讯科技深圳有限公司微信支付平台架构中心T4级专家',
        'producer-information': '十八年从业经验，曾经就职于阿里巴巴、神州数码等上市公司，长期从事敏捷团队指导、系统分析与架构设计，主导过支付宝会员产品线的开发，担任过省级银行的研发管理顾问、电商创业公司的技术总监、系统分析师和首席架构师等，熟悉各种分析模式并擅长UML业务建模，是国内最早一批DDD（领域驱动开发）实践者，2006起担任阿里技术研究院讲师，并于2017年担任中国首届DDD大会讲师，2018年担任厦门互联网技术峰会讲师，立志于长期在业务建模与DDD架构设计方面深耕发展。',
        'producer-topic': 'DDD实践中的那些坑',
        'topic-information': '在实施DDD的过程中，我们需要经过大量试错才能知道正确的路径，本场演讲理论联系实际，听众能够快速从很多典型案例中来获取这些干货经验，降低试错成本，本次分享分别从基本认知、战略模式、战术模式三个层面精要列举实践中的误区与反模式、以及解决方案，干货满满，让听众不虚此行！',
      },
      {
        'producer-img': '',
        'producer-name': '',
        'producer-introduction': '',
        'producer-information': '',
        'producer-topic': '领域驱动设计与架构师',
        'topic-information': '随着领域驱动设计实践的展开，团队的技术带头人（Tech Lead）或者架构师（Architect）的工作模式也在发生着变化。架构师的职责从原来的为团队定义架构要素，逐步向为团队提供快速反馈演进。在这一专题中，我们会邀请国内技术团队的一线架构师和技术带头人，通过他们的实际经验的分享，为听众阐明在实践DDD的团队中，架构师的工作到底是什么样的。',
      }
    ],
    [
        {
            'producer-img': '../resource/speakers/kangjiangmei.png',
            'producer-name': '亢江妹',
            'producer-introduction': 'ThoughtWorks精益产品创新咨询师、首席商业分析师',
            'producer-information': '十八年从业经验，在敏捷/精益产品需求分析、大企业需求管理、行业研究等方面，有丰富的实战和教练经验；她也是业务分析师(IIBA)、产品经理的活跃参与者，是DnA(Design and Analysis)社区、ThoughtWorks中国行业研究社区的发起人，也是ThoughtWorks商业洞见的主编。',
            'producer-topic': '当我们在谈论业务架构时，我们到底在谈论什么',
            'topic-information': '在大型企业里，新的业务和产品创新，在经历了从0到1的阶段，往往遇到了一个成长瓶颈。创新的团队变了法地折腾产品，但效果甚微。产品只是业务的一部分，要想使产品能够真正变成“自负盈亏”的业务，实现战略目标，离不开强有力的业务架构规划。那业务架构到底是什么？如何进行业务架构规划？中间遇到的阻力和障碍是什么，如何赢得组织支持？创新团队架构、产品应用架构和业务能力架构之间如何协同？',
        },
        {
            'producer-img': '',
            'producer-name': '',
            'producer-introduction': '',
            'producer-information': '',
            'producer-topic': '领域驱动设计与企业应用架构',
            'topic-information': '作为IT系统治理和架构治理的一种工具，企业级架构被很多大型企业广泛采用。但在实际工作当中，企业级架构的定义和治理如何能够和快速变化的业务诉求相匹配，与快速创新的企业愿景相一致，这些问题一直有待解决。DDD作为一种面向响应力的软件和系统设计原则，在企业架构实践中大有用武之地。本专题将专注讨论领域驱动的企业级架构的设计方法和实践。',
        }
    ],
    [
        {
            'producer-img': '../resource/speakers/taowen.png',
            'producer-name': '陶文',
            'producer-introduction': '滴滴出行平台技术部首席架构师',
            'producer-information': '从事过母婴电商系统，运维平台，监控系统，营销平台等各种类型的研发工作。在自己的创业公司完整实践过DDD的思想。对业务软件具有丰富的成功和失败经验。热爱造轮子和框架。目前在做工单系统与平台治理相关的工作。',
            'producer-topic': 'Every Entity as A Microservice',
            'topic-information': '背景：业务软件架构导致Accountabillity成为问题<br>解决方案介绍：把业务逻辑的因果关系进行细粒度的拆分，把代码写成完整的流程<br>实施后的效果：Entity的粒度更小，但是每个Entity都很完整，能够对某个流程负责<br>',
        },
        {
            'producer-img': '',
            'producer-name': '',
            'producer-introduction': '',
            'producer-information': '',
            'producer-topic': '领域驱动设计与反应式架构',
            'topic-information': '在2017年的DDD峰会中，围绕领域驱动设计和函数式编程（Function Programming）的Unconference起到了意想不到的效果。与会者针对如何能够将DDD的原则和实践与FP结合到一起进行了深入的讨论。今年，我们将进一步关注DDD与FP、无服务器架构（Serverless）、流式编程（Flow based programming） 的结合点，希望能够一窥未来领域驱动设计在反应式架构中起到的作用。',
        }
    ],
    [
        {
            'producer-img': '../resource/speakers/yaoanfeng.png',
            'producer-name': '姚安峰',
            'producer-introduction': 'ThoughtWorks首席咨询师',
            'producer-information': '从事精益、敏敏捷等软件产品研发⽅方法的践⾏行行与推⼴广，对从业务探索、产品与服务设计、演进式架构、敏敏捷开发、持续交付、数据运营等端到端数字化业务的⽅方法与实践及其规模化应⽤用有深⼊入研究和丰富实践经验。⽬目前致⼒力力于帮助各⾏行行业客户实现数字化转型，建⽴立数字时代的精益研发体系，提升规模化创新能⼒力力。近两年年来，研究的重点放在数字化业务管理理的组织治理理与动态投资组合管理理，最⼤大化投资成效。2016年年翻译出版了了著作《精益企业》。',
            'producer-topic': '演进式架构的平台化落地',
            'topic-information': '阐述比DDD和微服务更宽泛的演进式架构理念，并分享我们在客户通过工具平台落地演进式架构的思考。1. 什么事演进式架构，2. Guided，3. Incremental Changes，4. 在平台落地演进式架构守护。',
        },
        {
            'producer-img': '',
            'producer-name': '',
            'producer-introduction': '',
            'producer-information': '',
            'producer-topic': '领域驱动的业务中台',
            'topic-information': '2014年，微服务概念的火热带动了DDD的概念被业界重新认知。在微服务架构设计中，DDD被认为是微服务架构设计的指导思想。我们将继续关注业界是如何通过领域驱动设计的方法，来指导微服务架构的落地和实践的。同时，我们也更加关注服务网格（Service Mesh)等最新技术实践，及其给服务设计带来的影响。',
        }
    ],
    [
        {
            'producer-img': '../resource/speakers/meixuesong.png',
            'producer-name': '梅雪松',
            'producer-introduction': 'ThoughtWorks资深咨询师',
            'producer-information': '个人介绍待更新',
            'producer-topic': '从性能优化看中台建设',
            'topic-information': '从性能问题引出中台建设要考虑的问题。1是服务拆分不合理导致的性能问题，例如服务调用栈过长；2是聚合拆分不合理导致的性能问题。<br>演讲的目的是唤醒大家关注问题域，回归业务本质，而不是用技术手段把问题搞复杂。<br>针对第2个问题，华为有个案例，从前台获取订单后，中台要做库存预留，性能问题严重。技术人员采用非常复杂的技术手段来解决，性能有提升，但可维护性非常差，质量没保障。通过服务化复盘，发现聚合拆分不合理，从业务方案可以非常容易解决性能问题。',
        },
        {
            'producer-img': '',
            'producer-name': '',
            'producer-introduction': '',
            'producer-information': '',
            'producer-topic': '领域驱动的业务中台',
            'topic-information': '2014年，微服务概念的火热带动了DDD的概念被业界重新认知。在微服务架构设计中，DDD被认为是微服务架构设计的指导思想。我们将继续关注业界是如何通过领域驱动设计的方法，来指导微服务架构的落地和实践的。同时，我们也更加关注服务网格（Service Mesh)等最新技术实践，及其给服务设计带来的影响。',
        }
    ],
    [
        {
            'producer-img': '../resource/speakers/xinghaitao.png',
            'producer-name': '邢海涛',
            'producer-introduction': '灵雀云企业应用架构部 首席微服务架构师',
            'producer-information': '计算机应用硕士(英国), 灵雀云微服务首席专家，近20年软件开发经验，8年亚马逊高级软件工程师。个人专注PaaS应用和分布式系统架构设计。',
            'producer-topic': '微服务的容器化实践',
            'topic-information': '结合在灵雀云工作期间，为各行业客户设计并实施面向微服务的容器PaaS平台的经历，讲述Spring Cloud集成Kubernates的最佳实践，以及以Istio为代表的Service Mesh和Kubernates集成的前瞻探索。',
        },
        {
            'producer-img': '',
            'producer-name': '',
            'producer-introduction': '',
            'producer-information': '',
            'producer-topic': '领域驱动的业务中台',
            'topic-information': '2014年，微服务概念的火热带动了DDD的概念被业界重新认知。在微服务架构设计中，DDD被认为是微服务架构设计的指导思想。我们将继续关注业界是如何通过领域驱动设计的方法，来指导微服务架构的落地和实践的。同时，我们也更加关注服务网格（Service Mesh)等最新技术实践，及其给服务设计带来的影响。',
        }
    ],
    [
        {
            'producer-img': '../resource/speakers/maochao.png',
            'producer-name': '毛超',
            'producer-introduction': 'ThoughtWorks高级咨询师',
            'producer-information': '多年一线开发和架构经验，在大型团队中担任Tech Lead和架构师。并曾为物流、在线教育，房地产、通信等领域的领军企业提供服务。在工作过程中先后参与了多个大型产品的系统架构设计与实施，为客户提供软件架构评估、大型遗留系统重构规划和实施、DDD、Micro Service架构转型规划等服务。',
            'producer-topic': '可视化的遗留系统微服务改造',
            'topic-information': '遗留系统通常在一个企业中有着特殊的含义，一方面它只管中烟，包含着丰富的业务知识，产生大量收益；另一方面它异常复杂，功能繁多，结构紊乱，无法快速响应变化，让开发人员望而却步。近些年微服务架构思想深入人心，越来越多的人开始使用微服务架构、DDD等在遗留系统上进行尝试，但在落地的战术层面却依然碰到诸如服务如何划分，代码耦合度过高，数据库大而复杂等一系列问题。这次分享我会尝试用一系列可视化方法和工具来回答这些问题，保证改造过程中的高可操作性。',
        },
        {
            'producer-img': '',
            'producer-name': '',
            'producer-introduction': '',
            'producer-information': '',
            'producer-topic': '领域驱动的业务中台',
            'topic-information': '2014年，微服务概念的火热带动了DDD的概念被业界重新认知。在微服务架构设计中，DDD被认为是微服务架构设计的指导思想。我们将继续关注业界是如何通过领域驱动设计的方法，来指导微服务架构的落地和实践的。同时，我们也更加关注服务网格（Service Mesh)等最新技术实践，及其给服务设计带来的影响。',
        }
    ],
    [
        {
            'producer-img': '../resource/speakers/liteng.png',
            'producer-name': '李腾',
            'producer-introduction': 'ThoughtWorks资深企业系统架构师',
            'producer-information': '专注方向为企业信息架构设计，超过15年软件开发和行业咨询经验。先后为国内外电信、政府服务、零售、在线旅游行业的客户提供软件咨询和交付服务。作为技术管理顾问主导了多个大型开发团队的敏捷和微服务架构转型管理，对于企业大型遗留系统重构规划和实施有丰富的经验。',
            'producer-topic': '出行生态系统中台化演进的DDD实践',
            'topic-information': '出行领域正在涌现不同的业务形态，越来越多的参与方正在加入出行系统生态。当交易系统的后台开始中台化，并且进一步向生态支撑系统演进时，我们如何使用领域设计驱动的方法帮助可视化系统的演进过程，在系统重构过程中确定演进的方向，复杂生态支撑系统的中台设计又会面临什么新的挑战。我们将分享在一个真实系统演进过程中的相关实践',
        },
        {
            'producer-img': '',
            'producer-name': '',
            'producer-introduction': '',
            'producer-information': '',
            'producer-topic': '领域驱动的业务中台',
            'topic-information': '2014年，微服务概念的火热带动了DDD的概念被业界重新认知。在微服务架构设计中，DDD被认为是微服务架构设计的指导思想。我们将继续关注业界是如何通过领域驱动设计的方法，来指导微服务架构的落地和实践的。同时，我们也更加关注服务网格（Service Mesh)等最新技术实践，及其给服务设计带来的影响。',
        }
    ],
    [
        {
            'producer-img': '../resource/speakers/huangquanbin.png',
            'producer-name': '黄权彬',
            'producer-introduction': 'ThoughtWorks资深企业系统架构师',
            'producer-information': '十年多开发与架构经验，近些年专注于微服务架构与领域驱动设计的实践，专注于分布式系统架构设计，具备多年金融领域专业的架构设计与技术改进经验，擅长JAVA技术栈。',
            'producer-topic': '出行生态系统中台化演进的DDD实践',
            'topic-information': '出行领域正在涌现不同的业务形态，越来越多的参与方正在加入出行系统生态。当交易系统的后台开始中台化，并且进一步向生态支撑系统演进时，我们如何使用领域设计驱动的方法帮助可视化系统的演进过程，在系统重构过程中确定演进的方向，复杂生态支撑系统的中台设计又会面临什么新的挑战。我们将分享在一个真实系统演进过程中的相关实践',
        },
        {
            'producer-img': '',
            'producer-name': '',
            'producer-introduction': '',
            'producer-information': '',
            'producer-topic': '领域驱动的业务中台',
            'topic-information': '2014年，微服务概念的火热带动了DDD的概念被业界重新认知。在微服务架构设计中，DDD被认为是微服务架构设计的指导思想。我们将继续关注业界是如何通过领域驱动设计的方法，来指导微服务架构的落地和实践的。同时，我们也更加关注服务网格（Service Mesh)等最新技术实践，及其给服务设计带来的影响。',
        }
    ],
    [
        {
            'producer-img': '../resource/speakers/jinming.png',
            'producer-name': '金明',
            'producer-introduction': '万留科技 CTO',
            'producer-information': 'ScaleWorks 云创始人及首席架构师，原ThoughtWorks首席咨询师，拥有超过十年的互联网产品以及云平台的研发及管理经验，为国内外中国银行、支付宝等多家中大型企业提供了技术变革及数字化转型的咨询服务，多次在国内外软件大会上做主题演讲，并译有《敏捷软件开发实践》、《项目百态》等书籍。',
            'producer-topic': '金融支付系统的改造之路',
            'topic-information': '金融支付业务包含大量的支付产品，网银支付、扫码支付、快捷支付等等。不同的支付产品涉及到不同上通道的支付系统对接，并影响到下游商户的业务场景集成。来自技术、清算、计费、风控等方面的复杂性，让支付系统不断膨胀，使得支付系统的稳定性、可用性和可维护性都带来了很多挑战。在这个项目中，我们通过梳理支付产品的领域行为，沉淀出了统一的支付引擎，按照领域划分了微服务子系统，打通了系统用户的多个金融账户，形成了比较统一的支付中台系统。此外，我们移除了原系统的陈旧技术栈，实现了比较完整的DevOps、持续交付和生产实时监控。',
        },
        {
            'producer-img': '',
            'producer-name': '',
            'producer-introduction': '',
            'producer-information': '',
            'producer-topic': '领域统一语言的实践模式',
            'topic-information': '领域驱动设计是建立在领域统一语言（Ubiquitous Language）的基础上的。如何能在业务、开发、运维等不同角色间，构建统一语言，并围绕容易语言构建模型，是很多DDD的实践者以及团队所关注的问题。在本专题中，我们将关注统一语言的发现和使用的过程，以及其为团队所带来的收益。',
        }
    ],
    [
        {
            'producer-img': '../resource/speakers/wuxuefeng.png',
            'producer-name': '吴雪峰',
            'producer-introduction': 'ThoughtWorks资深架构咨询师',
            'producer-information': '主要负责敏捷软件开发与软件架构设计。他具有10+年软件架构设计经验，从事于分布式系统、电子商务、医疗、电信行业的软件开发、架构设计及敏捷实践。擅长Java/Scala技术，DDD、微服务架构、Reactive分布式软件架构、DevOps以及精益实践。',
            'producer-topic': '系统分层模型适配实践',
            'topic-information': '架构腐化是系统开发过程中非常头疼的事情。使用DDD分层架构参考实践，可以在系统初始设计的时候领域明确出来。问题是开发过程中不知不觉层次模糊，那么架构师有没有实践能有效阻止架构腐化？本次Session从中国解放军踢正步得到灵感，介绍一个非常简单的实践，有效阻止分层架构腐化。',
        },
        {
            'producer-img': '',
            'producer-name': '',
            'producer-introduction': '',
            'producer-information': '',
            'producer-topic': '领域统一语言的实践模式',
            'topic-information': '领域驱动设计是建立在领域统一语言（Ubiquitous Language）的基础上的。如何能在业务、开发、运维等不同角色间，构建统一语言，并围绕容易语言构建模型，是很多DDD的实践者以及团队所关注的问题。在本专题中，我们将关注统一语言的发现和使用的过程，以及其为团队所带来的收益。',
        }
    ],
    [
        {
            'producer-img': '../resource/speakers/tangcheng.png',
            'producer-name': '唐成',
            'producer-introduction': 'ThoughtWorks IoT 团队技术专家',
            'producer-information': '擅长于领域驱动设计，演进式软件架构。曾先后为国内外航空产业、汽车制造、电器制造等领域的领军企业提供软硬件架构咨询、大型遗留系统重构规划、微服务架构转型规划、软硬件系统交付等服务。他从事了 10 年的嵌入式系统设计开发和 5 年互联网系统设计开发工作，参与过大量各种类型的项目，因此在 IoT 领域积累了丰富的经验。',
            'producer-topic': '物联网平台的反应式设计',
            'topic-information': '物联网平台的天然属性决定了它需要面对业务规模的快速增长，在云端资源利用率、功能组件快速演进方面面临严峻挑战。反应式架构帮助人们构建具备即时响应、弹性、适应性及消息驱动特征的系统，在主流企业级软件开发中已开始起步，这样的架构能否应用在物联网平台中？ThoughtWorks IoT PaaS 在探索中前行。',
        },
        {
            'producer-img': '',
            'producer-name': '',
            'producer-introduction': '',
            'producer-information': '',
            'producer-topic': '领域驱动与反应式架构',
            'topic-information': '在2017年的DDD峰会中，围绕领域驱动设计和函数式编程（Function Programming）的Unconference起到了意想不到的效果。与会者针对如何能够将DDD的原则和实践与FP结合到一起进行了深入的讨论。今年，我们将进一步关注DDD与FP、无服务器架构（Serverless）、流式编程（Flow based programming） 的结合点，希望能够一窥未来领域驱动设计在反应式架构中起到的作用。',
        }
    ],
    [
        {
            'producer-img': '../resource/speakers/xuxiaobin.jpeg',
            'producer-name': '许晓斌',
            'producer-introduction': '阿里巴巴AliExpress高级技术专家',
            'producer-information': '目前在AliExpress从事微服务实施、研发效率提升相关工作。《Maven实战》作者，《Cucumber：行为驱动开发》合译者，曾经是Maven中央仓库的维护者，参与开发Maven仓库管理软件Nexus。推崇敏捷开发方法和DevOps的理念，关注Scalability、领域驱动设计、编程语言等技术领域。业余喜欢读书和咖啡。',
            'producer-topic': '从微服务到 FaaS',
            'topic-information': '随着微服务架构的普及，大量的组织从中受益并极大地提升了研发效率。伴随着巨型应用被拆分成很多的分布式应用，如何处理运维成本和分布式问题成了大家比较关心的问题，我们看到了 Spring Boot，Spring Cloud, Docker 和 Kubernetes 等技术成为了行业主流。至此我不禁开始反思，开发者真正想要的是什么？我们的业务开发真的应该关心 Kubernetes 吗？本主题由此展开讨论 serverless 和 FaaS 技术，分析行业产品，旨在探索其最核心的价值，以及这一技术会对我们技术架构会产生怎样深远的影响。',
        },
        {
            'producer-img': '',
            'producer-name': '',
            'producer-introduction': '',
            'producer-information': '',
            'producer-topic': '领域驱动与反应式架构',
            'topic-information': '在2017年的DDD峰会中，围绕领域驱动设计和函数式编程（Function Programming）的Unconference起到了意想不到的效果。与会者针对如何能够将DDD的原则和实践与FP结合到一起进行了深入的讨论。今年，我们将进一步关注DDD与FP、无服务器架构（Serverless）、流式编程（Flow based programming） 的结合点，希望能够一窥未来领域驱动设计在反应式架构中起到的作用。',
        }
    ],
];
