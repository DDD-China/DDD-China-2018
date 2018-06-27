var speakers = [{
    'speaker-img': '../resource/speakers/alberto-brandolini.jpg',
    'speaker-name': 'Alberto Brandolini',
    'speaker-introduction': '全球软件巨匠',
    'speaker-information': '' +
    '<span class="bold-text">Alberto Brandolini</span><br>' +
    '<p>全球软件巨匠，Event Storming 之父</p>',
    'speaker-topic': '<span class="bold-text">「why ddd matters today」</span><br>',
    'speaker-outline': ''
}, {
    'speaker-img': '../resource/speakers/xiaoran.jpg',
    'speaker-name': '肖然',
    'speaker-introduction': '精益方法布道师',
    'speaker-information': `
     < span class = "bold-text" > 肖然 <  / span >  < br >
      ThoughtWorks咨询和设计总监，精益方法布道师 < br >
      国内最早的敏捷精益方法实践者，适应性领导力及领域驱动架构方法首席讲师及教练。
      作为咨询顾问长期辅导国内外知名企业进行精益企业的建设，近期在多个大型开发团
      队推广领域驱动设计方法及微服务架构。
       `,
    'speaker-topic': `
     < span class = "bold-text" > 「为不确定性架构」 <  / span >  < br >
      第四次工业革命引爆了一个科技驱动的新时代，软件成为了这个时代的核心竞争力。
      然而在行业光环下的软件工程人员们日子并不好过，高速乃至颠覆性的发展给我们制造了大量的不确定性，
      迫使我们去思考新的技术架构方式来适应这个时代。正是在这样的背景下，领域驱动设计的方式再次进入
      了我们的视野，成为了我们响应不确定性的重要方法。
       `,
    'speaker-outline': `
     < ul >
     < li > 不确定性的悖论 <  / li >
     < li > 架构设计的达摩克利斯之剑 <  / li >
     < li > 面向不确定性演进 <  / li >
     < li > 微服务架构红眼病 <  / li >
     <  / ul >
     `,
}, {
    'speaker-img': '../resource/speakers/zhangyi.png',
    'speaker-name': '张逸',
    'speaker-introduction': '编码实践、加固设计、领域驱动实践领先者',
    'speaker-information': `
     < span class = "bold-text" > 张逸 <  / span >  < br >
      编码实践、加固设计、领域驱动实践领先者 < br >
      致力于编码实践、架构设计、领域驱动、大数据分析，并在金融、
      制造业、医疗、通信、企业架构、互联网诸多行业有丰富的开发与设计经验。
       `,
    'speaker-topic': `
     < span class = "bold-text" > 「Bounded Context的实践意义」 <  / span >  < br >
      Bounded Context作为DDD战略设计的重要入口与概念，可以与微服务设计有机地结合起来。 < br >
      本演讲会深入剖析Bounded Context的本质原理，提供切实可行的方法帮助团队成员发现
      Bounded Context，探讨Bounded Context的边界，并结合Event Sourcing、微服务架构、
      六边形架构模式、用户故事地图，总结出从架构到编码实现的实践意义。
       `,
    'speaker-outline': `
     < ul >
     < li > Bounded Context的本质意义 <  / li >
     < li > 如何发现合理的Bounded Context Bounded Context的边界 <  / li >
     < li > Bounded Context之间的通信 <  / li >
     < li > 从战略架构到战术实现 <  / li >
     <  / ul >
     `,
}, {
    'speaker-img':
        '../resource/speakers/panjiayu.png',
    'speaker-name':
        '潘加宇',
    'speaker-introduction':
        'UMLChina 首席专家<br>UMLChina 创始人',
    'speaker-information':
    '<span class="bold-text">潘加宇</span><br>UMLChina创始人，潜心研究需求和设计技能。' +
    '2002年开始对外提供UML需求和设计的技术指导和训练服务。到现在为止，已经上门为超过260家的组' +
    '织提供服务，覆盖了国内各个领域的领袖企业，包括通信、企业管理、电子商务、房地产、网络游戏、' +
    '地理信息、物流、数码设备、医疗设备、工业控制.....等领域。',
    'speaker-topic':
    '<span class = "bold-text">「复杂领域模型的建模」</span><br>' +
    '一个反映领域内涵的领域模型是领域驱动设计成功的根本。目前许多有关领域驱动设计的探讨集中于如何实现领域驱动设计，' +
    '所举例子的领域模型中涉及到的类的数量很少，导致有的开发人员虽然掌握了实现领域驱动设计的一些技能，却在面对量多' +
    '而且复杂的领域概念和逻辑时，不知道如何下手来建立恰当的领域模型。本演讲介绍领域建模的一些关键要点，有助于改善这一现象。',
    'speaker-outline':
    '<ul>' +
    '<li>建模要素讲解</li>' +
    '<li>一个领域建模过程的案例展示</li>' +
    '</ul>'
}, {
    'speaker-img': '../resource/speakers/lixin.png',
    'speaker-name': '李新',
    'speaker-introduction': '骨灰级程序员',
    'speaker-information': `
     < span class = "bold-text" > 李新 <  / span >  < br >
      代码20 + 年，精通从C++到Golang，用Java实现过互联网大型分布式系统，用Scala设
      计过现代通信网络。像计算机一样思考，追求代码架构设计的大道至简。
       `,
    'speaker-topic': `
     < span class = "bold-text" > 「你的领域架构落地了吗？」 <  / span >  < br >
      领域驱动的架构设计要求从业务分析到代码实现都采用统一语言，
      即最后的实现代码是完整表达出了我们的领域建模的。然而我们发
      现很多团队在采用DDD的时候并没有能够做到这一点，让领域模型
      流于了形式，没有发挥统一语言的核心作用。本次演讲中将为大家
      介绍一些工具通过可视化的方式来帮助团队甄别领域模型的代码落
      地，促进领域模型的维护成为团队每个人的责任。

       `,
    'speaker-outline': `
     < ul >
     < li > 领域模型从产生到落地  <  / li >
     < li > 经典的模型实现模式  <  / li >
     < li > 可视化你的领域模型  <  / li >
     < li > tequila：模型守护！ <  / li >
     <  / ul >
     `,
}, {
    'speaker-img': '../resource/speakers/tengyun.png',
    'speaker-name': '滕云',
    'speaker-introduction': '实现领域驱动设计译者',
    'speaker-information': `
     < span class = "bold-text" > 腾云 <  / span >  < br >
      《实现领域驱动设计》译者 < br >
      ThoughtWorks咨询师，6年 + 一线编码经验，3年 + 领域驱动设计实践经验，
      技术专研领域包括DDD、Spring生态圈、DevOps、Linux以及软件匠艺；
      译有《实现领域驱动设计》和《人件》等书。

       `,
    'speaker-topic': `
     < span class = "bold-text" > 「DDD——没那么难」 <  / span >  < br >
      DDD社区一直不乏思想领袖，但是要将DDD落地确是另一回事情。
      本次演讲主要面向希望在项目上实际实施DDD的听众，包含DDD中
      的战略设计和战术设计，也包含DDD与微服务的关系分析。
       `,
    'speaker-outline': `
     < ul >
     < li > DDD限界上下文划分 <  / li >
     < li > DDD与微服务  <  / li >
     < li > 聚合根识别  <  / li >
     < li > 实体和值对象  <  / li >
     < li > 领域服务  <  / li >
     < li > 六边形架构 <  / li >
     <  / ul >
     `,
}, {
    'speaker-img': '../resource/speakers/kouyu.png',
    'speaker-name': '寇宇',
    'speaker-introduction': '微服务架构、系统监控、企业架构规划专家',
    'speaker-information': `
     < span class = "bold-text" > 寇宇 <  / span >  < br >
      融数数据研发总监，微服务架构、系统监控、企业架构规划专家 < br >
      融数数据研发总监，专注于微服务架构、系统监控、企业架构规划等领域。曾就职与IBM、苏宁易购、神州数码等企业。

       `,
    'speaker-topic': `
     < span class = "bold-text" > 「微服务治理及监控」 <  / span >  < br >
      微服务架构理念，如何利用领域驱动设计对传统单体架构或者SOA架构的系统进行微服务架构改造，进而构建微服务架构体系；
      介绍微服务治理方案和微服务架构下的系统监控方法。

       `,
    'speaker-outline': `
     < ul >
     < li > 微服务架构及其特点 <  / li >
     < li > 微服务划定和抽象 <  / li >
     < li > 微服务架构选型 <  / li >
     < li > 微服务治理与监控 <  / li >
     <  / ul >
     `,
}, {
    'speaker-img': '../resource/speakers/zhangqunhui.png',
    'speaker-name': '张群辉',
    'speaker-introduction': '阿里盒马架构总监<br>领域驱动设计国内最早的一批实践者',
    'speaker-information': '<span class="bold-text">张群辉</span><br>' +
    '阿里盒马架构总监，领域驱动设计国内最早的一批实践者<br>' +
    '15 + 年技术及管理实战经验，前阿里基础机构事业部工程效率总监，' +
    '长期一线指导大型复杂系统的架构设计，DevOps、微服务架构及领域驱动' +
    '设计国内最早的一批实践者。崇尚实践出真知，一直奋斗在技术一线。',
    'speaker-topic':
    '<span class="bold-text">「DDD@盒马」</span><br>' +
    '盒马作为阿里巴巴新零售的排头兵，第一次真正意义上涉入零售行业，' +
    '创建中国新零售模式下的供应链体系，颠覆传统ERP是盒马技术最近几年不停探索的重点。' +
    '互联网 + 传统零售业务复杂，领域模型在这个复杂的体系里变得尤为重要，' +
    '有别于传统互联网电商架构，本演讲将会深入浅出阐述领域驱动开发在盒马模式下如何演化，' +
    '落地，如何在互联网架构下完整实施具有阿里特点的领域驱动设计模式',
    'speaker-outline':
    '<ul>' +
    '<li>领域模型：基于对象 vs 基于数据库</li>' +
    '<li>领域模型下的依赖注入</li>' +
    '<li>repository的实现方式</li>' +
    '<li>领域模型下的部署架构</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/huangxiaohui.jpg',
    'speaker-name':
        '黄晓辉',
    'speaker-introduction':
        '点融网站业务系统设计及开发负责人',
    'speaker-information':
    '<span class="bold-text">黄晓辉</span><br>' +
    '现就职于点融，一家上海的互联网金融公司，曾就职于摩根士丹利、微软等公司。目前' +
    '主要负责点融网站业务系统的设计和开发。专注于互联网金融业务架构设计、微服务实践' +
    '、REST规范和技术团队建设。',
    'speaker-topic': '<span class = "bold-text">「团队技术进阶之路 - 以DDD为切入点」</span><br>' +
    '问题背景：团队在技术上成长缓慢，需要更快更好的完成各项业务需求；' +
    ' 解决方案：以DDD为理论和实践框架，发挥“鲶鱼效应”，促进团队学习，' +
    '并最终在新的层次上提供综合技术能力； 方案介绍：经历了 引入 - 讨论 ' +
    '- 概念验证 - 小范围实践 - 全面推进 - 反思 - 重新设计 等多个阶段，' +
    '在各个阶段让团队自己去发现并总结经验教训，从而在实践中得到成长； ' +
    '实施后的效果：团队在编码规范，代码架构，业务建模等方面形成了一套统' +
    '一的方法论，并且进一步引入了BDD的实践，在开发质量和效率上都得到了提供。',
    'speaker-outline':
    '<ul>' +
    '<li>实施DDD前所在团队遇到的问题&背景</li>' +
    '<li>具体的实施步骤</li>' +
    '<li>从领域模型的讨论开始</li>' +
    '<li>POC & 遇到的问题</li>' +
    '<li>在团队中扩大实践范围 & 遇到的问题</li>' +
    '<li>反思</li>' +
    '<li>重新设计</li>' +
    '<li>总结</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/zhouxuefeng.jpg',
    'speaker-name':
        '周雪峰',
    'speaker-introduction':
        '衡睿教育CEO，微软最有价值专家（MVP）',
    'speaker-information':
    '<span class="bold-text">周雪峰</span><br>' +
    '衡睿教育CEO，微软最有价值专家（MVP）<br>' +
    '瑞通（北京）高级技术培训中心高级讲师，微软最有影响力开发者，微软CPE Idol，' +
    '具有多年基于.NET平台的互联网项目的架构经验及团队管理经验,十多年来一直从事' +
    'IT企业的管理，咨询和培训工作；具有丰富的IT企业管理经验，咨询和教学经验。',
    'speaker-topic': '<span class = "bold-text">「领域驱动设计与Scrum项目管理」</span><br>' +
    '问题背景：领域驱动设计架构和Scrum敏捷项目管理方法论相结合，改进组织治理。' +
    ' 解决方案选型：三个医疗行业项目（江西省医院信息化管理系统，江西省新农合信' +
    '息管理系统，江西省临床试验信息管理系统），技术架构为微软的DDD框架（AutoNL' +
    'ayered），项目管理方法论为：Scrum 方案介绍：使用Scrum敏捷项目管理方法论，' +
    '管理基于DDD的项目，结合Scrum的DDD框架各自的优势，提升开发效率，实现软件工' +
    '厂化的组织改进。 实施后效果：提高开发效率，改进软件开发流程与绩效考核，实' +
    '现了组织的技术资产原始积累，与组件化开发。',
    'speaker-outline':
    '<ul>' +
    '<li>Scrum和DDD的完美结合</li>' +
    '<li>三方（产品经理，项目经理和程序员）领域模型设计会</li>' +
    '<li>启动Scrum流程（计划会议，进行Scrum，演示）</li>' +
    '<li>用DDD实现的软件工厂</li>' +
    '<li>DDD案例分享：江西省新农合信息管理系统</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/zhangjianfeng.jpg',
    'speaker-name':
        '张建锋',
    'speaker-introduction':
        '资深DDD实践者',
    'speaker-information':
    '<span class="bold-text">张建锋</span><br>' +
    '千岛源/共同创始人<br>' +
    '原红帽公司 JBoss 应用服务器核心开发组成员。毕业于北京邮电大学和' +
    '清华大学，曾供职于金山软件，IONA 科技公司和红帽软件。 对于 JavaEE ' +
    '的各项规范比较熟悉；开源技术爱好者，喜欢接触各类开源项目，学习优秀' +
    '之处并加以借鉴，认为阅读好的源码就和阅读一本好书一样让人感到愉悦；' +
    '在分布式计算，企业应用设计，移动行业应用，Devops 等技术领域有丰富的' +
    '实战经验和自己的见解；愿意思考软件背后蕴涵的管理思想，认为软件技术' +
    '是一种高效管理的实现方式，有志于将管理学和软件开发进行结合。',
    'speaker-topic': '<span class = "bold-text">「微服务架构下CDI在领域驱动设计中的精妙应用」</span><br>' +
    'CDI规范是JavaEE中揭示软件对象设计的部分，最早来源于GavinKing的Seam框架。在DDD设计中，' +
    '可以运用大量的CDI规范定义技术来灵活的对应用软件设计构造。和Spring框架相比，CDI可塑造' +
    '性更强，企业可以自行开发定义出一套符合自身业务特点的业务框架，做到软件复用和易维护。' +
    '通过配合使用Rest，消息，JPA，流式数据，事务处理等技术，CDI可以实现一套高效稳定的DDD ' +
    'Java开发框架。更重要的是，它是可扩展可伸缩的，既能部署成经典的war包应用；又可以结合' +
    'kubernetes，开发微服务体系的应用。',
    'speaker-outline': '' +
    '<ul>' +
    '<li>DDD用Java语言的实现设计思路</li>' +
    '<li>应用CDI规范定义对象 </li>' +
    '<li>DDD开发框架的实现介绍</li>' +
    '<li>如何实现灵活部署</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/kangjiangmei.jpeg',
    'speaker-name':
        '亢江妹',
    'speaker-introduction':
        'ThoughtWorks首席业务分析师，中国区业务分析实践负责人',
    'speaker-information':
    '<span class="bold-text">亢江妹</span><br>' +
    'ThoughtWorks首席业务分析师，中国区业务分析实践负责人<br>' +
    '在敏捷/精益产品需求分析、大企业需求管理、行业研究等方面，有丰富的实战和教练经验；' +
    '她也是业务分析师(IIBA)、产品经理的活跃参与者，是DnA(Design and Analysis)社区、' +
    'ThoughtWorks中国行业研究社区的发起人，也是ThoughtWorks商业洞见的主编。',
    'speaker-topic': '<span class = "bold-text">「DDD落地：BA和架构师的完美结对」</span><br>' +
    '如果领域驱动设计，仅限于技术架构讨论的范畴，显然无法让DDD的真正价值落地，即如何' +
    '“让业务领域驱动架构设计”。本话题中，将结合项目实例与你分享BA和架构师如何完美结对，' +
    '来梳理业务需求、进行产品规划，识别和划分业务领域、子领域、领域边界，建立概念关系模型' +
    '，梳理和定义业务服务需求，在“业务侧”和“技术侧”建立统一共同的语言，真正让DDD落地，' +
    '并提供BA和架构师结对实践的实用技巧。',
    'speaker-outline':
    '<ul>' +
    '<li>4种常用的业务梳理模式，快速建立业务背景上下文</li>' +
    '<li>业务领域、划分子领域的划分模式及案例 </li>' +
    '<li>如何建立业务概念关系模型</li>' +
    '<li>梳理定义服务需求</li>' +
    '<li>业务概念模型与信息架构、技术架构如何相互映射？</li>' +
    '<li>BA和架构师完美结对的Tips</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/zhouyugang.jpeg',
    'speaker-name':
        '周宇刚',
    'speaker-introduction':
        'ThoughtWorks高级咨询师，DDD实践家',
    'speaker-information':
    '<span class="bold-text">周宇刚</span><br>' +
    'ThoughtWorks高级咨询师，DDD实践家<br>' +
    '10年企业级应用开发经验，主要负责软件交付和持续交付咨询。从09年开始关注领域驱动设计，' +
    '是Stack Overflow DDD标签 All Time Top Answerer 之一，曾在多个行业领域中实战过DDD。',
    'speaker-topic':
    '<span class = "bold-text">「DDD落地：BA和架构师的完美结对」</span><br>' +
    '如果领域驱动设计，仅限于技术架构讨论的范畴，显然无法让DDD的真正价值落地，即如何“让业务' +
    '领域驱动架构设计”。本话题中，将结合项目实例与你分享BA和架构师如何完美结对，来梳理业务需求、' +
    '进行产品规划，识别和划分业务领域、子领域、领域边界，建立概念关系模型，梳理和定义业务服务需求，' +
    '在“业务侧”和“技术侧”建立统一共同的语言，真正让DDD落地，并提供BA和架构师结对实践的实用技巧。' +
    'CDI规范是JavaEE中揭示软件对象设计的部分，最早来源于GavinKing的Seam框架。在DDD设计中，',
    'speaker-outline':
    '<ul>' +
    '<li>4种常用的业务梳理模式，快速建立业务背景上下文</li>' +
    '<li>业务领域、划分子领域的划分模式及案例 </li>' +
    '<li>如何建立业务概念关系模型</li>' +
    '<li>梳理定义服务需求</li>' +
    '<li>业务概念模型与信息架构、技术架构如何相互映射？</li>' +
    '<li>BA和架构师完美结对的Tips</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/zhangxiaolong.jpg',
    'speaker-name':
        '张晓龙',
    'speaker-introduction':
        '中兴通讯虚拟化架构师',
    'speaker-information':
    '<span class="bold-text">张晓龙</span><br>' +
    '中兴通讯虚拟化架构师<br>' +
    '2008年毕业于哈尔滨工程大学计算机应用专业，爱好编程，业余时间喜欢写一些技术类文章。' +
    '2008年就职于ZTE，参与过大型通信软件的开发，擅长TDD和重构等XP实践。近年来参与虚拟化' +
    '产品的研发，同时负责提升全员的DDD能力，从DDD导入到DDD训练营，不断的给学员传递DDD的' +
    '思想和实践技能，目前DDD已在多个团队有效落地，并得到大家的一致认可。除过程序员，个人' +
    '在组织中还有一些其它标签，比如架构师、咨询师和技术教练等。个人的简书地址：' +
    'http://www.jianshu.com/u/1381dc29fed9。熟练掌握C++/Golang/Python/Java等编程语言，' +
    '这一年主要使用的编程语言是Golang，同时Golang也成了DDD落地的主要语言。这一年在简书上也写' +
    '了多篇与DDD相关的技术文章，比如《软件设计的演变过程》，《Golang事务模型》，' +
    '《DDD分层架构的三种模式》，《Implement Domain Object in Golang》，' +
    '《FizzBuzzWhizz in Python from OO and FP》。',
    'speaker-topic':
    '<span class = "bold-text">「DDD分层架构的三种模式」</span><br>' +
    '问题背景：在这个快速应对需求变化的时代，代码容易被实现成意大利面条式，同时重复代码多，又好像有一些不同，' +
    '很多程序员都掉进了这个让人痛苦不堪的焦油坑，无法自拔。软件设计就是在长期以来让软件容易应对变化，' +
    '提高可修改性和可维护性，从而降低软件开发成本。方案介绍：通过分层设计，分离关注点，凸显领域模型，' +
    '降低层与层之间的依赖，同时有利于各层逻辑的复用或替换。《领域驱动设计－软件核心复杂性应对之道》这本书中，' +
    '提出了传统的四层架构，层与层之间遵循松散分层架构，即上层可以调用任意下层。我们在实践中，' +
    '将基础设施层分为横向的和纵向的，横向的API提供给领域层调用，纵向的API提供给应用层和用户界面层调用，' +
    '其中领域层、应用层和用户界面层遵循严格分层架构，即上层仅能调用相邻的下层，这就是“L”型分层架构。' +
    '将DCI应用在分层架构中，将出现五层架构模式，相对于传统的四层架构模式，基础设施层、应用层和用户界面层保持不变，' +
    '将领域层分离成新领域层（Object/Role）和环境层（Context）。在一些复杂的领域，一次事务涉及很多次消息的交互，' +
    '这时Context层就非常复杂，很有必要把Context层分离成新Context层（Action和Specification）和事务层' +
    '（Transaction DSL)。新Context层基本单位是一次同步消息或异步消息的交互（记作Action），' +
    '新Context层的Specification是Action或一组紧密相关的Action（记作Procedure）是否执行的开关，' +
    '而事务层可以看做是大Context层。在实践中，我们抽取出Golang事务模型，基本版参见简书的文章《Golang事务模型》，' +
    '地址http://www.jianshu.com/p/b7e874f6d3e8，一直在演进，目前已被多个团队使用。' +
    'DDD六层架构模式可以看做是DDD五层架构模式在特定领域的一种变体。通过依赖导致原则，改善分层架构，即六边形架构。' +
    '六边形架构在产品级有一些应用，比如平台聚合内部的各种能力，对外统一提供为Restful接口。' +
    '六边形架构也可以用于不同层组件的协作开发，即在明确组件功能后就可以专注开发，待到联调阶段，' +
    '该组件的多个用户分别通过端口适配器方式再与该组件进行集成。实施后效果说明：事务层代码和流程图一一对应，' +
    '领域层代码通过小类大对象设计，代码层次清晰，有效的控制了软件的实现复杂度，并且得到了团队所有成员的普遍认可。',
    'speaker-outline':
    '<ul>' +
    '<li>DDD回顾</li>' +
    '<li>分层架构简介 </li>' +
    '<li>传统的四层架构模式</li>' +
    '<li>引入DCI后的五层架构模式，特定领域的六层架构模式</li>' +
    '<li>六边形架构</li>' +
    '<li>收益</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/zhangye.png',
    'speaker-name':
        '张晔',
    'speaker-introduction':
        '中兴通讯公司级研发教练，架构技术狂热爱好者。',
    'speaker-information':
    '<span class="bold-text">张晔</span><br>' +
    '中兴通讯公司级研发教练，架构技术狂热爱好者。<br>' +
    '擅长C++，python，golang等编程语言，具备丰富的领域建模、代码质量提升、自动化测试、DevOps等实战经验。' +
    '对深圳软件技术社区发展推广亦有贡献，组织多次社区活动（APAC、GDCR、编码道场等）。目前对形式化方法TLA+' +
    '和微服务架构具有浓厚兴趣。<br>' +
    '工作之余喜欢读书、音乐、羽毛球、旅游以及研究新事物。',
    'speaker-topic':
    '<span class = "bold-text">「DDD驱动测试体系建设」</span><br>' +
    '本次演讲将全方位介绍DDD方法在中兴通讯测试体系设计和落地过程中所启到的关键性作用。' +
    '内容既涵盖从传统自动化测试到基于领域驱动测试的思想转变，也包含随着DDD实践的不断深入对自动化测试框架逐步演进，' +
    '再到运用DDD战略设计对云测试平台的微服务划分。不但包含DDD战略设计，也包括DDD的战术设计；不但包含DDD在单体架' +
    '构的应用，还包括DDD在微服务架构的应用；不但包含DDD在测试执行框架的实践，还包括DDD在云测试平台的实践；不但包' +
    '含DDD的python语言的实现，还包括golang语言的实现。<br>' +
    '整个测试体系目前在中兴通讯DevOps中发挥着重要作用，本次演讲还会对测试体系建设的不同阶段所面临的不同问题和相' +
    '应解决方案进行描述，相信能满足不同类型的听众。',
    'speaker-outline':
    '<ul>' +
    '<li>中兴通讯DevOps实践简介</li>' +
    '<li>传统的自动化测试介绍</li>' +
    '<li>基于领域驱动的自动化测试</li>' +
    '<li>基于云的测试平台建设</li>' +
    '<li>DDD实践心得总结</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/huangliang.png',
    'speaker-name':
        '黄亮',
    'speaker-introduction':
        'ThoughtWorks资深咨询师，DDD实践布道者',
    'speaker-information':
        '<span class="bold-text">黄亮</span><br>ThoughtWorks资深咨询师，DDD实践布道者，十三年应用开发与架构经验，热爱技术，喜欢Coding。专注于软件架构与持续交付领域，为不同领域的客户提供专业的技术改进与咨询服务，尤其擅长于JAVA技术栈与微服务架构。',
    'speaker-topic':
    '<span class = "bold-text">「从OO到DDD」</span><br>' +
    '有人说DDD是OO的一个正确的作法，当我们实践DDD的过程中，很多OO问题依然会遇到，在本主题中，我们将带您探索OO本质，分析并解决DDD实践遇到的各种OO问题。',
    'speaker-outline':
    '<ul>' +
    '<li>OO本质</li>' +
    '<li>从OO到DDD</li>' +
    '<li>实践DDD中遇到的一些OO问题</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/hurong.jpeg',
    'speaker-name':
        '胡戎',
    'speaker-introduction':
        '中国电子第六研究所前端负责人，CNode讲师，graphql.cn维护者',
    'speaker-information':
        '<span class="bold-text">胡戎</span><br>中国电子第六研究所前端负责人，CNode讲师，graphql.cn维护者，负责多个大型航天项目',
    'speaker-topic':
    '<span class = "bold-text">「领域驱动的FRP复合范式在复杂前端应用的实践」</span><br>' +
    '多数据源复杂应用中如何管理数据流，结合OOP和FRP的的复合范式构建大型的复杂应用程序。react redux rxjs采用redux基于OOP管理uiModal' +
    '以及Domain Modal，根据FRP的编程思想通过RxJS设计并管理单向数据流。',
    'speaker-outline':
    '<ul>' +
    '<li>介绍OOP和FRP</li>' +
    '<li>介绍OOP和FRP在大型前端应用的技术选型</li>' +
    '<li>举例介绍RXJS管理数据流常见的业务场景</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/wangyang.jpg',
    'speaker-name':
        '王洋',
    'speaker-introduction':
        '猫眼娱乐/商品电商技术负责人<br>美团点评《领域驱动设计》课程主讲人',
    'speaker-information':
    '<span class="bold-text">王洋</span><br>猫眼娱乐商品电商技术负责人，同时也是美团点评《领域驱动设计》课程的主讲；' +
    '加入猫眼娱乐（原美团电影事业部）之前，曾就职于支付宝、创新工场，参与支付宝钱包、花呗、网商银行等产品的研发；' +
    '硕士毕业于西安交通大学，专注于新型编程模型的研究',
    'speaker-topic':
    '<span class = "bold-text">「领域驱动与O2O电商的养成记」</span><br>' +
    '问题背景：随着互联网技术不断深入到电影行业的各个环节，猫眼需要搭建一套围绕影院的O2O电商体系，引导用户在线上购买影院的各种服务，线下去消费服务<br><br>' +
    '解决方案选型：顶层架构使用领域驱动的思想建模，包括限界上下文、聚合根等技术，局部根据场景需要，也会使用一些常用的设计模式<br><br>' +
    '方案介绍：战略层面包括供应链、交易、消费、资金等限界上下文，框架层面使用父子工程构建了可水平扩展的分层框架，战术层面则使用聚合根、实体、值对象、CQRS等手段分解代码的复杂性，同时根据业务特点抽象出商品渠道、订单引擎、资金流等模型<br><br>' +
    '实施后效果说明：目前整套电商体系的扩展性较好，以较低的成本陆续支持了卖品、衍生品、电影票、演出等多类型的交易场景，也支持验券、物流、投币等消费场景；同时在pv过亿的情况下保持了较高的性能和稳定性<br>',
    'speaker-outline':
    '<ul>' +
    '<li>领域术语的管理和维护</li>' +
    '<li>分层框架的设计和实践</li>' +
    '<li>限界上下文的提取和维护</li>' +
    '<li>系统之间的组织方式</li>' +
    '<li>业务演进带来的矛盾点</li>' +
    '<li>潜在模型的抽象和分析</li>' +
    '<li>遇到的困难和总结</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/liuxuebin.jpg',
    'speaker-name':
        '刘学斌',
    'speaker-introduction':
        '畅捷通信息技术有限公司云产品研发部专家、架构师',
    'speaker-information':
    '<span class="bold-text">刘学斌</span><br>畅捷通信息技术有限公司专家、架构师，近20年软件开发经验，擅长领域驱动设计建模、' +
    '微服务架构设计、应用安全开发、持续集成、DevOps、业务分析建模、开发流程设计等领域。有大型企业组织（700+人团队）实施持续集成、' +
    '应用安全开发、DevOps、架构设计实践经验。目前任职用友畅捷通云产品研发部，专职企业云产品微服务架构设计、企业云产品建模' +
    '（领域建模、物理建模、流程建模），坚信并实践建模解决复杂业务问题之道。',
    'speaker-topic':
    '<span class = "bold-text">「DDD在微服务架构企业云产品中的实践」</span><br>' +
    '公司早在8年前开发了一套面向小型企业供应链管理软件包产品，目前每年销量近3W套，在国内同类市场中有相当高的市场占有率。近几年来，' +
    '互联网技术的发展和普及，以及公有云方式的社会化商业基础设施的完善，市场也逐步开始接受企业应用公有云服务。作为老牌的企业应用产品' +
    '开发商，面对互联网浪潮的机遇和挑战，公司决定采用最新的互联网技术和方法开发一套面向小型企业用户的云应用产品。小型企业的特点是数' +
    '量多、个体差异大、单个企业业务交易量相对不高，为了能快速应对变化（业务变化、市场变化等），我们采用微服务架构进行架构设计、引入' +
    'DevOps作为基础支撑、采用DDD进行分析以及架构设计（DDD战略设计）、用统一过程（UP）及UML 2.0进行建模（业务建模、系统建模、领域' +
    '建模、物理建模），整体提高软件内在质量。目前产品已经基本定型，预计年底全国上市，整个产品研发从流程、方法、微服务架构、平台等方' +
    '面一次完整的成功实践，我们对此充满信心。',
    'speaker-outline':
    '<ul>' +
    '<li>前言</li>' +
    '<li>背景</li>' +
    '<li>问题分析</li>' +
    '<li>设计目标和思路</li>' +
    '<li>研发实践</li>' +
    '<li>组织架构</li>' +
    '<li>开发规范</li>' +
    '<li>开发流程</li>' +
    '<li>分析设计方法</li>' +
    '<li>架构方案</li>' +
    '<li>租户模式</li>' +
    '<li>应用架构</li>' +
    '<li>总体技术架构</li>' +
    '<li>模块技术架构</li>' +
    '<li>一致性方案</li>' +
    '<li>总结</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/dinghui.jpg',
    'speaker-name':
        '丁辉',
    'speaker-introduction':
        '中兴通讯公司级敏捷教练和代码大全、代码设计训练营教练',
    'speaker-information':
    '<span class="bold-text">丁辉</span><br>中兴通讯公司级敏捷教练和代码大全、代码设计训练营教练，13年软件开发经验，8年项目' +
    '管理和流程改进经验，指导并参多个团队由传统研发模式向敏捷研发模式转型（其中超过100人的大型团队成功项目级敏捷转型5个）。 在敏' +
    '捷导入、指导团队转型、CI、核心技术实践、自组织团队建设等方面具有丰富的实战经验； 对如何提升员工代码设计能力和提升代码内在质量' +
    '、遗留代码重构、DDD/DSL架构设计等方面也有较多理解和解决思路； 精益创业教练，曾指导多个创业团队产品设计、团队运作、技术架构。',
    'speaker-topic':
    '<span class = "bold-text">「康威定律中的DDD-DDD架构与团队组织调整」</span><br>' +
    'DDD实现了业务逻辑、系统逻辑、部署逻辑的分层和解耦，但是如果组织架构没有跟随这种结构，往往导致领域划分和人员的组织形式不匹配，' +
    '导致领域和人员的一种映射，而来带来额外的沟通成本和组织壁垒，这种情况久而久之又反过来对领域的合理划分造成逐步的侵蚀，渐渐的领域' +
    '对象又开始耦合起来，原理清晰的分层又开始腐化了。在我们最初实践DDD的时候，有些团队规模庞大，采用DDD之后，团队职责还是按组件方式' +
    '划分，就出现过这种对DDD架构腐化的情况，人员拆分始终面临难题：人员纵拆又要兼顾解决公共层维护问题。我知道的团队，先后经历过绝对纵' +
    '拆、基于功能的复用的纵拆辅助少量的横拆，最后随着DDD的深入，把领域层进行基于语义的拆分，人员也基于领域的纵拆+基于领域本身分层的' +
    '语义复用的横拆，目前看比较顺畅的解决了DDD架构和组织治理的问题。',
    'speaker-outline':
    '<ul>' +
    '<li>DDD对领域的划分</li>' +
    '<li>开发团队人员纵拆带来的好处和挑战</li>' +
    '<li>领域层基于语义的再次分层</li>' +
    '<li>开发团队人员按领域纵拆+按领域层基础语义层横拆结合</li>' +
    '<li>现场交流</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/fuhaiyin.jpeg',
    'speaker-name':
        '付银海',
    'speaker-introduction':
        '泰然城CTO',
    'speaker-information':
    '<span class="bold-text">付银海</span><br>17年软件研发从业经历，现任泰然城CTO，曾在美国工作多年，历任元宝铺CTO负责技术团' +
    '队管理，主持公司技术研发、体系和品质管控等工作；全球最大的企业级软件公司ORACLE（甲骨文）上海研发中心首席工程师；C3 ENERGY中国' +
    '研发中心研发总监；阿里巴巴B2B平台技术部架构师；Perficient.com研发中心技术经理。',
    'speaker-topic':
    '<span class = "bold-text">「领域驱动设计－创业公司治理」</span><br>' +
    '真实的实践案例<br>' +
    '创业公司的坑<br>' +
    '如何引入领域设计支付结算方式<br>',
    'speaker-outline':
    '<ul>' +
    '<li>团队基因：<br>' +
    '<ol><li>技术驱动VS业务驱动</li><li>理想VS现实</li></ol></li>' +
    '<li>成长现实：<br>' +
    '<ol><li>小－》大</li><li>简单－》复杂</li><li>牛人－》团队</li><li>技术追赶业务</li></ol></li>' +
    '<li>面临问题：<br>' +
    '<ol><li>业务无法堆叠</li><li>系统边界混乱</li><li>信息传递失真</li><li>团队边界模糊</li><li>跨组协作困难</li></ol></li>' +
    '<li>解决方案：<br>' +
    '<ol><li>继续野蛮生长</li><li>请到大牛CTO</li><li>渐进优化改良</li><li>极端推倒重来</li></ol></li>' +
    '<li>问题本质：<br>' +
    '<ol><li>没有领域</li><li>领域脆弱－抽象不够</li><li>实施困难－抽象过度</li><li>没有取舍－断舍离－杀伐决断</li></ol></li>' +
    '<li>实践分享：<br>示例：EasyUI+SpringMVC+Spring+MyBatis的领域驱动架构' +
    '<ol>' +
    '<li>2010～2012  C3 Energy：（60TECH）架构图＋岗位设定－－－－－－－－－－－－－－－过度抽象</li>' +
    '<li>2015～2016 元宝铺：（70TECH）专家设计领域＋DBA落地实现＋技术团队宣讲－－－－－－技术等待</li>' +
    '<li>2016～2017 旺资金融：（10TECH）旺资设计图－－－－－－－－－－－－－－－－－－－－精简实现</li>' +
    '<li>2017～未来10年 领域划分－团队划分－成本压力－工期压力－跨部门沟通－服务化治理－－改良＋推倒</li>' +
    '</ol></li>' +
    '<li>经验总结：<br>' +
    '<ol><li>升纬思考VS降纬执行</li><li>的度如何把握</li><li>技能要求</li><li>边界划定VS担当冲锋</li><li>技术人员能力成长：执行力，推动力，领导力，哲学力</li></ol></li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/fangang.jpg',
    'speaker-name':
        '范钢',
    'speaker-introduction':
        '航天信息股份有限公司首席架构师<br>《大话重构》作者，软件架构及重构客座讲师',
    'speaker-information':
    '<span class="bold-text">范钢</span><br>航天信息首席架构师，《大话重构》作者，哈工大软件工程硕士，软件架构及重构的客座讲师。' +
    '大型遗留系统改造专业户，多次参与大型遗留系统改造、软件系统重构等重大项目。长期关注大型业务系统品质保证、防止腐化以及技术改造等问' +
    '题，在实践互联网转型及大数据转型方面有丰富的经验。',
    'speaker-topic':
    '<span class = "bold-text">「领域驱动：看我如何拥抱需求变更」</span><br>' +
    '客户对软件的需求总是在变，但软件企业在实现变更的过程中常常带来软件的腐化。许多系统在经过多年的维护、无数次的需求变更后，' +
    '软件设计慢慢开始迷失方向。解决需求变更与软件腐化最有效的方案无疑是领域驱动设计。本演讲通过真实的案例，一个电商网站支付功' +
    '能的变更过程，演示软件腐化的过程，分析软件腐化的根源，采用领域驱动设计是怎样应对需求变更的、怎样避免软件腐化的，进而探讨' +
    '怎样的软件架构可以支持领域驱动设计，以及支持架构的演进，去面对互联网的高并发访问，大数据的架构转型。',
    'speaker-outline':
    '<ul>' +
    '<li>软件开发的痛点：<br>' +
    '<ol><li>需求不断在变更</li><li>需求变更引发软件退化</li><li>需求变更 + 软件退化 = 软件设计迷失方向</li></ol></li>' +
    '<li>问题的分析：<br>' +
    '<ol><li>软件是对真实世界的模拟，但真实世界十分复杂</li><li>人在认识真实世界的时候总是有一个从简单到复杂的过程</li><li>因此软件需求变更成为一种必然，并且总是由简单向复杂转变</li><li>但在软件由简单向复杂转变过程中，设计容易迷失方向</li></ol></li>' +
    '<li>解决方案：<br>' +
    '<ol><li>将软件设计与真实世界对应起来，建立领域模型</li><li>用领域模型指导软件开发</li><li>每次变更的时候，重新回到领域模型进行变更</li><li>用领域模型变更指导软件变更</li></ol></li>' +
    '<li>案例：电商网站支付功能的变更过程' +
    '<ol><li>第一个版本的简单支付功能</li><li>商品折扣的变更及其设计</li><li>支付方式的变更及其设计</li><li>秒杀、预订、闪购、众筹等功能的变更（涉及缓存、异步化、分布式等架构调整）</li><li>软件设计开始迷失方向</li></ol></li>' +
    '<li>采用领域驱动的设计变更过程：' +
    '<ol><li>第一个版本的简单支付功能（建立领域模型）</li><li>商品折扣的变更及其设计（先在领域模型基础上变更）</li><li>支付方式的变更及其设计（领域驱动支持设计的变更）</li><li>秒杀、预订、闪购、众筹等功能的变更（如何应对演化式架构调整）</li></ol></li>' +
    '<li>软件架构如何支持领域驱动设计：<br>示例：EasyUI+SpringMVC+Spring+MyBatis的领域驱动架构' +
    '<ol><li>如何支持增删改业务</li><li>如何支持查询业务</li><li>如何支持架构的演进（单机→集群→读写分离→大数据）</li></ol></li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/linweixiang.jpeg',
    'speaker-name':
        '林炜翔',
    'speaker-introduction':
        '传统投行业老码农，FP应用实践者，技术业务两手抓',
    'speaker-information':
        '<span class="bold-text">林炜翔</span><br>传统投行业老码农，FP应用实践者，技术业务两手抓',
    'speaker-topic':
    '<span class = "bold-text">「DDD with functional programming paradiagm」</span><br>' +
    'actor based microservice>无副作用流程规划>actor 分流数据>微服务扩展，业务，测试，数据等合理分离',
    'speaker-outline':
        '使用FP编程风格拆分业务流程的作用域，以便于微服务扩展，业务，测试，数据等合理分离'
}, {
    'speaker-img':
        '../resource/speakers/jinxinming.jpg',
    'speaker-name':
        '金新明',
    'speaker-introduction':
        '汇丰集团首席风控架构师',
    'speaker-information':
    '<span class="bold-text">金新明</span><br>现任职汇丰集团首席风控架构师，有20多年的国际性跨行' +
    '业大型系统开发和设计经验，是软件建模集成和架构设计方面的专家。他曾引入基于模型的架构开发并且实现金' +
    '融行业第一个从前端到后台的基于模型代码生成系统。<br>' +
    '金新明博士参与了多个500强企业的超大型复杂系统设计和企业架构设计，曾任职于多家国际大型银行，对各个' +
    '层面的架构设计都有深入的了解和实际经验。他有智能控制（华南理工大学）和先进软件工程（曼彻斯特大学）博士学位。',
    'speaker-topic':
    '<span class = "bold-text">「基于模型的架构设计」</span><br>' +
    'DDD是基于模型的架构设计的一种方法，将其放在这个大背景下讨论它的演变过程并结合自己十多年来在基于模型的软件' +
    '开发方面的经验。在当前微服务和云计算的技术趋势下，如何认识领域驱动设计的必要性和发展方向。',
    'speaker-outline':
    '<ul>' +
    '<li>领域驱动设计 Vs. 基于模型的架构设计</li>' +
    '<li>DDD 和基于模型的软件开发</li>' +
    '<li>DDD和DevOps, MicroSevice</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/wangli.jpg',
    'speaker-name':
        '王立',
    'speaker-introduction':
        '厦门云雾科技有限公司创始人/总经理',
    'speaker-information':
    '<span class="bold-text">王立</span><br>前阿里资深工程师，国内最早一批实践和推广DDD的践行者，' +
    '建立了一套适用于DDD的敏捷开发过程，长期聚焦于领域分析、彩色UML建模，擅长复杂业务的模型提炼与架构设计，' +
    '主张在聚合的实现在可以采用微单体时就尽量不要采用微服务，现任厦门云雾科技有限公司创始人/总经理。',
    'speaker-topic':
    '<span class = "bold-text">「DDD实践中的一些思考」</span><br>' +
    '事项跟踪管理是一个公司内部应用，解决各个部门主管对下属工作的安排与跟踪问题，项目采用DDD开发，' +
    '每个事项以及内部任务状态的流转“自治”，并根据状态与操作者角色提供操作入口，项目极其短小精悍，' +
    '深入浅出，可以简明扼要地把DDD实践中的采用的基本思想、套路、实践模式解释清楚，经验具有普遍性和' +
    '可复制性，非常适用于初步接触DDD的开发团队学习。',
    'speaker-outline':
    '<ul>' +
    '<li>项目背景</li>' +
    '<li>业务分析</li>' +
    '<li>架构设计</li>' +
    '<li>领域实现</li>' +
    '<li>状态管理</li>' +
    '<li>持久层与缓存</li>' +
    '<li>读写分离</li>' +
    '<li>性能优化</li>' +
    '<li>总结</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/yudanni.jpeg',
    'speaker-name':
        '余丹妮',
    'speaker-introduction':
        `有多年IT咨询界的经验，涉及零售，政府，媒体，金融，医疗等多个行业，
        曾担任年轻女学生科技创业项目的导师。目前为美国某电商提供咨询交付服务。`,
    'speaker-information':
        `<span class="bold-text">余丹妮</span><br>有多年IT咨询界的经验，涉及零售，政府，媒体，金融，医疗等多个行业，
    曾担任年轻女学生科技创业项目的导师。目前为美国某电商提供咨询交付服务。`,
    'speaker-topic':
        `<span class = "bold-text">「新业务背景下业务与系统的共同演进」</span><br>
    领域驱动设计强调以业务为核心，对业务领域进行抽象和建模。我们在做大多数领域建模活动时假设了一个前提条件，
    就是业务本身是清晰和确定的，并且有业务专家可以解答领域相关的疑问。<br>
    然而最近我们看到企业越来越多采用精益的方法来开展新业务，在有业务目标和初步业务概念的前提下进行各种试验来确定，
    演进和改善业务。在这种情况下使用传统方法进行领域建模会发现模型可能每天都在变。那是否领域驱动设计在这样的情况下不相关呢？<br>
    我们将分享一个项目案例。案例中的企业使用大量的试验和反馈环来更新和改善业务，
    我们将会探索软件系统和业务是如何共同演进，以及DDD的概念是如何在这个过程中支撑业务和系统的演进。`,
    'speaker-outline':
    '<ul>' +
    '<li>统一语言</li>' +
    '<li>架构演进</li>' +
    '<li>Domain的封装</li>' +
    '<li>Context Map的治理演进。</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/huangbangwei.jpeg',
    'speaker-name':
        '黄邦伟',
    'speaker-introduction':
        `2004《基于用例的面向方面的软件开发》与2012《软件工程的本质》的作者。
        从2000年开始提供面向对象、领域划分、可变化设计、以及产品线工程的咨询。
        客户包括三星（韩国）、索尼（日本）、华为（中国）、等其他企业。`,
    'speaker-information':
        `<span class="bold-text">黄邦伟</span><br>
    2004《基于用例的面向方面的软件开发》与2012《软件工程的本质》的作者。<br>
    从2000年开始提供面向对象、领域划分、可变化设计、以及产品线工程的咨询。<br>
    客户包括三星（韩国）、索尼（日本）、华为（中国）、等其他企业。`,
    'speaker-topic':
        `<span class = "bold-text">「基于Domain、Use Case与Aspect思维的端到端可变化设计」</span><br>
    软件开发其中最头疼的问题之一是如何应对需求的变化，减少系统的耦合。大部分软件设计方法都是从0到1，领域驱动设计也不例外。
    Aspect思维就围绕着N+1，extension的设计方法，以便应对需求时间和空间的变化（variability in time and space）。
    另外，Use Case思维把可变化性从设计前移到需求的划分，让你更早更有效的处理变化。
    本议题建立在2004《基于用例的面向方面的软件开发》的基础以及多年的经验提炼。`,
    'speaker-outline':
    '<ul>' +
    '<li>Aspect面向方面思维</li>' +
    '<li>领域划分可变化设计从需求开始</li>' +
    '<li>建立可扩展的需求架构</li>' +
    '<li>端到端可变化设计</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/yangyun.jpeg',
    'speaker-name':
        '杨云',
    'speaker-introduction':
        'ThoughtWorks首席咨询师',
    'speaker-information':
    '<span class="bold-text">杨云</span><br><span class="bold-text">ThoughtWorks首席咨询师</span><br>20年软件开发经验，一直从事技术工作，ThoughtWorks首席咨询师，' +
    '曾任支付宝架构师。 对函数式编程关注多年，在多个生产项目中实际使用Scala编程语言开发。 2011年建立的Haskell' +
    '函数式编程群可能是国内历史最长，人数最多的函数式编程讨论群。',
    'speaker-topic':
    '<span class = "bold-text">「DDD是一种纪律」</span><br>' +
    'DDD是一种模型驱动的软件设计方法，其难点不在于项目前期的大块的软件建模，而在于在软件持续更新的过程中保持模型' +
    '和代码的一致。现在主流的函数式编程语言，比如Scala和Haskell的类型系统具有很强的建模能力和表意能力，有助于以' +
    '较小的代价维持模型代码一致，甚至将更多的模型内容体现在代码中。',
    'speaker-outline':
    '<ul>' +
    '<li>了解如何在实际项目中因地制宜的采取一些力所能及的DDD技术。</li>' +
    '<li>对函数式编程和DDD的结合取得一定认识。</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/wuxuefeng.png',
    'speaker-name':
        '吴雪峰',
    'speaker-introduction':
        'ThoughtWorks软件架构师',
    'speaker-information':
    '<span class="bold-text">吴雪峰</span><br><span class="bold-text">ThoughtWorks软件架构师</span><br>主要负责敏捷软件开发与软件架构设计。他具有10+年软件架构设计经验，' +
    '从事于分布式系统、电子商务、医疗、电信行业的软件开发、架构设计及敏捷实践。擅长Java/Scala技术，DDD、微服务架构、' +
    'Reactive分布式软件架构、DevOps以及精益实践。',
    'speaker-topic':
    '<span class = "bold-text">「用函数式思想理解DDD」</span><br>' +
    '函数式编程和DDD都是最近热门的趋势，并且都不容易理解。通过一个小例子讨论用两个热门趋势的概念碰撞产生火花，' +
    '使得参会快速理解函数式和DDD思想的精髓。',
    'speaker-outline':
    '<ul>' +
    '<li>类型建模 vs 数据库建模</li>' +
    '<li>函数和管道 vs 工作流</li>' +
    '<li>业务领域语言 DSL</li>' +
    '<li>重新理解聚合和边界上下文</li>' +
    '</ul>'
}, {
    'speaker-img':
        '../resource/speakers/dongnaiwen.jpg',
    'speaker-name':
        '董乃文',
    'speaker-introduction':
    '微软(中国)有限公司<br>' +
    '首席技术顾问',
    'speaker-information':
    '<span class="bold-text">董乃文</span><br>现任微软（中国）有限公司首席技术顾问，20多年的计算机软件行业工作经验，' +
    '积极推动云计算、大数据、人工智能等创新技术在制造业、零售业、新媒体、在线游戏等行业的技术推广与合作。作为标准化专家工作' +
    '组成员参加多个云计算、大数据、SOA等国家技术标准的制定工作。曾负责多个ERP、CRM等软件产品的设计和研发工作，积极推动新开' +
    '发方法和自动化工具在大规模产品研发团队的运用，特别是领域工程、架构设计、软件产品线、集成产品开发、敏捷开发等模式的深入' +
    '实践，曾任北京软件行业协会软件过程改进协会秘书处副秘书长等积极推动创新开发方法和技术的社区共享。',
    'speaker-topic':
    '<span class = "bold-text">「领域驱动设计（DDD）与微服务：模式与实践」</span><br>' +
    'Domain-driven design (DDD) & Microservices: patterns and practices<br>' +
    '基于微服务（Microservices）的体系结构中，应用程序在可独立开发、测试、部署和版本控制的一系列服务上生成，开发者可以设' +
    '计出全天候高可用的云规模应用及服务，部署在本地数据中心和云端，便捷地缩放应用的规模，在持续运行中实现无缝衔接的敏捷开发' +
    '和全生命周期管理。使用面向领域驱动设计的模式，可以降低微服务中的业务复杂性，实现的更高级的微服务。',
    'speaker-outline':
    '<ul>' +
    '<li>微服务（Microservices）体系结构</li>' +
    '<li>领域驱动设计与微服务的关键模式</li>' +
    '<li>应用DDD微服务打造端到端应用的参考案例与分享</li>' +
    '</ul>'
}
]
