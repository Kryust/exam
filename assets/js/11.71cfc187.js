(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{319:function(_,v,t){"use strict";t.r(v);var a=t(6),i=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"数据库系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据库系统"}},[_._v("#")]),_._v(" 数据库系统")]),_._v(" "),v("h2",{attrs:{id:"_1-数据库系统设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据库系统设计"}},[_._v("#")]),_._v(" 1.数据库系统设计")]),_._v(" "),v("h3",{attrs:{id:"_1-1-学习导航"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-学习导航"}},[_._v("#")]),_._v(" 1.1 学习导航")]),_._v(" "),v("p",[_._v("需要学习的内容如下：")]),_._v(" "),v("ul",[v("li",[_._v("数据库模式")]),_._v(" "),v("li",[_._v("ER模型")]),_._v(" "),v("li",[_._v("关系代数与元组演算")]),_._v(" "),v("li",[_._v("规范化理论")]),_._v(" "),v("li",[_._v("并发控制")]),_._v(" "),v("li",[_._v("数据库完整性约束")]),_._v(" "),v("li",[_._v("分布式数据库")]),_._v(" "),v("li",[_._v("数据仓库与数据挖掘")])]),_._v(" "),v("h3",{attrs:{id:"_1-2-三级模式两级映射"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-三级模式两级映射"}},[_._v("#")]),_._v(" 1.2 三级模式两级映射")]),_._v(" "),v("p",[_._v("数据库三级模式两级映射是（常考）题")]),_._v(" "),v("p",[_._v("三级模式两级映射这种设计属于层次型的"),v("a",{attrs:{href:"https://so.csdn.net/so/search?q=%E6%9E%B6%E6%9E%84&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[_._v("架构"),v("OutboundLink")],1),_._v("设计，这种层次型设计为我们应用数据库提供了很多方面的便利，同时，让整个系统的可维护性和应变能力变得更好。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924091459679.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("物理数据库：在计算机上面表现形式是一个文件。SQLServer、MySQL等。")]),_._v(" "),v("p",[v("strong",[_._v("三级模式详细如下：")])]),_._v(" "),v("ul",[v("li",[v("code",[_._v("内模式")]),_._v("：又叫物理数据库层次，和物理层的数据库直接关联，管的是如何去存储这一系列的数据，数据要存到物理文件上面，按什么格式来存储，如何去优化；它主要的关注点是数据的存放。")]),_._v(" "),v("li",[v("code",[_._v("概念模式")]),_._v("：平常用数据库时，表这一级别，数据库中会有很多表，这些表对应的就是概念模式，这一级模式中将数据分成若干张表，这些表是根据我们的业务，根据我们的应用来划分出来的。表之间会有相应的关联。")]),_._v(" "),v("li",[v("code",[_._v("外模式")]),_._v("：它所对应的是数据库中的视图，外模式的应用让我们对数据的控制有了更进一步的手段，更加灵活的一些处置方式。如：在概念模式中用户信息表，该表包含多种用户信息，用户名，密码等，在应用过程中，如果任何一个功能模块都能直接去调用用户的所有信息，这不是很安全；并且如果概念模式中的表发生了变化，应用程序如果直接去调用这些表，那么应用程序也会跟着变。但是如果加了一层外模式之后，会将原来的数据表进行一定的处理之后形成相应的数据表。登录时候只需要用户名，密码调出来，形成一个视图，给登录模块用，在内部调用时候，只需要用户信息，不需要用户密码，则可以建一个视图，不包含密码，增加了安全性。也增加了灵活性。")])]),_._v(" "),v("p",[v("strong",[_._v("两级映射详细如下：")])]),_._v(" "),v("ul",[v("li",[v("code",[_._v("外模式-概念模式映射")]),_._v("：表通过相应的操作得到视图，其实表和视图之间是有一种映射关系的，这种映射关系被称之为外模式-概念模式映射。有了这一级映射，当表发生变化，我们只需要改映射，而不需要改应用程序。")]),_._v(" "),v("li",[v("code",[_._v("概念模式-内模式映射")]),_._v("：主要管内部的存储形式和表的情况的一种映射关系；当存储结构进行改变时，只需调整这种映射关系，而不需要修改用户的应用程序，就能应对这种变化。")])]),_._v(" "),v("h3",{attrs:{id:"_1-3-数据库的设计过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-数据库的设计过程"}},[_._v("#")]),_._v(" 1.3 数据库的设计过程")]),_._v(" "),v("p",[_._v("主要分为三个阶段：")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("需求分析")])]),_._v(" "),v("li",[v("code",[_._v("概念结构设计")])]),_._v(" "),v("li",[v("code",[_._v("逻辑结构设计")])]),_._v(" "),v("li",[v("code",[_._v("物理设计")])])]),_._v(" "),v("p",[_._v("需求分析：整个系统对数据有什么样的要求，有从用户收集过来的，同时有转换的过程中产生的需求。")]),_._v(" "),v("p",[_._v("概念结构设计：主要表达形式就是ER模型。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924091641663.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("h3",{attrs:{id:"_1-4-er模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-er模型"}},[_._v("#")]),_._v(" 1.4 ER模型")]),_._v(" "),v("p",[_._v("集成的方法：")]),_._v(" "),v("p",[_._v("✔ 多个局部E-R图一次集成")]),_._v(" "),v("p",[_._v("✔ 逐步集成，用累加的方式一次集成两个局部E-R")]),_._v(" "),v("p",[_._v("集成产生的冲突及解决办法")]),_._v(" "),v("p",[_._v("✔ 属性冲突： 包括属性域冲突和属性取值冲突")]),_._v(" "),v("p",[_._v("✔ 命名冲突： 包括同名异义和异名同义")]),_._v(" "),v("p",[_._v("✔ 结构冲突： 包括同一 对象在不同应用中具有不同的抽象，以及同一实体在不同局部E-R图中所包含的属性个数和属性排列次序不完全相同。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924091709457.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("学生和课程是多对多的关系：一个学生记录可以对应多个课程的记录，反之，一个课程可以供多个学生来选择。")]),_._v(" "),v("h3",{attrs:{id:"_1-5-er模型转关系模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-er模型转关系模式"}},[_._v("#")]),_._v(" 1.5 ER模型转关系模式")]),_._v(" "),v("p",[_._v("一个实体转为一个关系模式：")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("1：1联系")]),_._v("：两个实体各转成一个关系模式，中间的联系可以转成单独的一个关系模式，也可以把联系合并到与之关联的两端的任意一端的实体上。一对一联系最少转成两个关系模式。一个实体转成一个关系模式，把联系记录到任一实体上记录下来。")]),_._v(" "),v("li",[v("code",[_._v("1：n联系")]),_._v("：每一个实体转成单独的一个关系模式；可以将单独将联系转成一个关系模式，这种做法可以，但不是必须的。也可以把这种联系记录到n，也就是多的一端；\n如：员工和部门的关系就是一对多，把这种联系只能记录在员工端，即在员工表中加上一个部门号。一对多的联系中，最少要转成两个关系模式，联系可以合并到多的一端。")]),_._v(" "),v("li",[v("code",[_._v("m：n联系")]),_._v("：学生和课程多对多的联系，学生表转成一个单独的实体，课程表转成一个单独的实体，选课的联系也必须转成一个单独的实体。多对多的联系，至少要转成3个关系模式。")])]),_._v(" "),v("blockquote",[v("p",[_._v("熟记：")]),_._v(" "),v("ol",[v("li",[_._v("一个实体型转为一个关系模式 ： 1：1联系 、1：n联系、m：n联系")]),_._v(" "),v("li",[_._v("三个以上实体间的一个多元联系")])])]),_._v(" "),v("h3",{attrs:{id:"_1-6-关系代数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-关系代数"}},[_._v("#")]),_._v(" 1.6 关系代数")]),_._v(" "),v("p",[v("strong",[_._v("并")]),_._v("：将两个集合的内容并到一起，两个集合当中都有的数据只显示一次。")]),_._v(" "),v("p",[v("strong",[_._v("交")]),_._v("：将公共部分找出来，形成新的关系。")]),_._v(" "),v("p",[v("strong",[_._v("差")]),_._v("：我有的你没有；S1-S2，结果集是S1有但S2没有。将S1中公共部分去掉。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924092134301.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[v("strong",[_._v("笛卡尔积")]),_._v("：笛卡尔积的符号是一个乘号，笛卡尔的结果是：前三个字段来自于S1，后三个字段来自于S2，在笛卡尔积中会把两个参与笛卡尔积操作的集合的属性一一的列出来，成为笛卡尔积最终的结果，这是包含那些数据列的问题。（笛卡尔积不会将相同的字段给去掉）\n包含那些记录：记录是这样原则产生的，S1的第一条记录要跟S2的一、二、三的每一条记录要做一次组合，形成一条新的记录。S1的第二第三条记录也是依次和S2的第一、第二、第三条记录做拼接。这样就得到了笛卡尔积。\n笛卡尔积结果的属性的个数是参与操作的两个属性树之和；\n而记录数是两个记录数之积。")]),_._v(" "),v("p",[v("strong",[_._v("投影")]),_._v("：对S1做投影，结果就是只有投影下来的哪几列数据了，没有投影的那部分数据就丢弃了；所以投影是选列的一种操作，选出哪些我需要的列；\n如图：对S1的 Sno和Sname做了投影，所以结果集就只有Sno和Sname；")]),_._v(" "),v("p",[v("strong",[_._v("选择")]),_._v("：选择选的记录，选的是行。对S1做选择操作，Sno=No0003，这一条记录就被选出来了，在投影和选择操作过程中，值得我们注意的一点是：在选择列也好，选择行也好，有的时候在写它的选择和投影操作的属性的时候，有时用的是属性名，有时用的是数字编码代号，以第一个投影操作来看，我们可以写出它的等价形式：π 1,2 (S1)；\n在选择操作中也可以有同样的写法。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924092211104.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[v("strong",[_._v("联接")]),_._v("：一般联接操作下面会写联接的条件，如：S1.Sno = S2.Sno。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/2020092409230228.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[v("code",[_._v("联接和笛卡尔积有啥区别")]),_._v("：最大的区别：联接会把S1，S2都有的字段只保留一个。有时在联接过程中没有写条件，被称为自然连接，自然连接的条件是：这两个关系当中，相同的字段做等值。在S1、S2中，相同的字段只有Sno，所以不写条件默认就是S1的S1.Sno = S2.Sno。")]),_._v(" "),v("blockquote",[v("p",[_._v("细节注意：")]),_._v(" "),v("p",[_._v("在做自然联接之后，要对某些字段做选择，只需要Sno、Sname、Age。可以写 π Sno,Sname,Age；也可以写成 π 1,2,4。值得特别注意的地方是：Sno我们只会保留一个。")])]),_._v(" "),v("h2",{attrs:{id:"_2-规范化理论"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-规范化理论"}},[_._v("#")]),_._v(" 2.规范化理论")]),_._v(" "),v("h3",{attrs:{id:"_2-1-函数依赖"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-函数依赖"}},[_._v("#")]),_._v(" 2.1 函数依赖")]),_._v(" "),v("p",[_._v("函数："),v("code",[_._v("f(x) = x^2")]),_._v("；对于确定的x的值，都有唯一的f(x)的值与之对应。\n此时我们就说x能够确定f(x)，这就是一种函数依赖。\n如：学号能够函数确定姓名。反之则不行，因为姓名可能重名。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924125800258.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[v("strong",[_._v("部分函数依赖理论")]),_._v("：A、B的组合键确定C，并且A确定C")]),_._v(" "),v("p",[_._v("主键是两个属性的组合键，主键当中的一部分可以确定某一个属性，就是部分函数依赖。\n如：学号，课程号，姓名；学号和课程号的组合键可以确定姓名，于此同时，学号也可以确定姓名。")]),_._v(" "),v("p",[v("strong",[_._v("传递函数依赖")]),_._v("：A可以确定B，B又可以确定C，这时可以得到一个推论：A确定C。\n强调了一点：B不能确定A，因为如果B能够反过来确定A，说明A和B等价，就不存在传递性的讲法了。")]),_._v(" "),v("h3",{attrs:{id:"_2-2-价值与用途"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-价值与用途"}},[_._v("#")]),_._v(" 2.2 价值与用途")]),_._v(" "),v("p",[_._v("非规范化的关系模式，肯能存在的问题包括：数据冗余、更新异常、插入异常、删除异常。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924125854328.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("h3",{attrs:{id:"_2-3-键"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-键"}},[_._v("#")]),_._v(" 2.3 键")]),_._v(" "),v("ol",[v("li",[v("p",[v("code",[_._v("超键")]),_._v("：唯一标识元组，可以是单个属性，也可以是属性的组合。\n超键和候选键的唯一区别区别：超键可能存在冗余属性，而候选键不存在冗余属性。\n所以，在超键的基础上消除多余的属性，就成为了候选键，候选键也是能够唯一标识元组。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("主键")]),_._v("：候选键和主键的区别：候选键可以有多个，主键只能有一个。")])])]),_._v(" "),v("p",[_._v("（选总统时候选人可以有多个，但是选出来的总统只能有一个）。在数据库中，几个字段都可以设置为主键，但是只能挑选其中的一个设置为主键。")]),_._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[v("code",[_._v("外键")]),_._v("：别的关系的主键，因为很多时候我们要对表做关联。")])]),_._v(" "),v("p",[_._v("（比如：员工表中一般会设置部门号，部门号用来和部门表进行关联，那么部门号对于员工表就是一个外键。）外键的提出就是关联查询的时候用到的。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924125908997.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[v("strong",[_._v("求候选键：（常考）")])]),_._v(" "),v("ul",[v("li",[_._v("将关系模式的函数依赖关系用到“有向图”的方式表示")]),_._v(" "),v("li",[_._v("找入度为0的属性，并以该属性集合为起点，尝试遍历有向图，若能正常遍历图中所有的结点，则该属性即为关系模式的候选键。")]),_._v(" "),v("li",[_._v("若入度为0的属性集不能遍历图中所有的结点，则需要尝试性将一些中间结点（既有入度，也有出度的结点）并入入度为0的属性集中，直至该集合能遍历所有的结点，集合为候选键。")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924130023801.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("例1：选A，入度：对于一个节点，指向该节点的为入度，从该节点指出的为出度。\n例2：候选键是ABCD的组合键，ABCD的任何一个字母都不能遍历全图，只有将他们组合起来才能遍历全图。\n例3：选B。A和B作为中间节点，都能遍历所有节点。")]),_._v(" "),v("h3",{attrs:{id:"_2-4-范式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-范式"}},[_._v("#")]),_._v(" 2.4 范式")]),_._v(" "),v("blockquote",[v("p",[_._v("范式是必考，要求掌握。")])]),_._v(" "),v("p",[_._v("范式会分为第一范式，第二范式，第三范式， BC范式以及更高级别的第四范式。")]),_._v(" "),v("p",[_._v("范式在级别不断提高的时候，规范化程度是越来越高了。也就更有可能去解决插入异常，删除异常，数据冗余的问题。")]),_._v(" "),v("p",[_._v("与此同时也带来了问题，即规范化程度越高，往往数据的粒度越小。")]),_._v(" "),v("p",[_._v("要将范式提高级别，基本上走的方式都是数据表的拆分，越到高级别的范式，拆分的越细。\n将数据一步步拆分的细的时候，往往又带来性能方面的问题。所以一般采取比较平衡、折中的方式。即将范式做到第三范式左右即可。")]),_._v(" "),v("p",[_._v("要达到第二范式必先达到第一范式；以此类推，范式可以跨越。")]),_._v(" "),v("p",[_._v("范式的级别：")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("第一范式")]),_._v("：属性值都是不可分的原子值，所谓原子值就是该属性无法再拆分为几个属性。")]),_._v(" "),v("li",[v("code",[_._v("第二范式")]),_._v("：第一范式消除了非主属性对候选键的部分依赖，就到第二范式。")]),_._v(" "),v("li",[v("code",[_._v("第三范式")]),_._v("：第二范式消除非主属性对候选键的传递依赖，就到第三范式。")]),_._v(" "),v("li",[v("code",[_._v("BC范式")]),_._v("：第三范式消除主属性对候选键的传递依赖。就到BC范式。")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924130047349.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("主属性和非主属性的意思：所谓主属性，就是该属性属于候选键的一部分，（以第二范式的图为例，主属性有SNO，CNO都是主属性。而GRADE、CREDIT是非主属性）。所以判断主属性和非主属性，核心就在于那些是候选关键字。（将候选关键字列出来，在任何候选关键字中出现过的属性都是主属性）。")]),_._v(" "),v("h3",{attrs:{id:"_2-5-第一范式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-第一范式"}},[_._v("#")]),_._v(" 2.5 第一范式")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924130152276.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("以上关系不满足第一范式，因为该表中分为系名称和高级职称人数。而高级职称人数又可以分为教授和副教授，这就不满足第一范式的要求。\n如果要改成第一范式，将高级职称人数去掉，直接就是系名称，教授，副教授。")]),_._v(" "),v("h3",{attrs:{id:"_2-6-第二范式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-第二范式"}},[_._v("#")]),_._v(" 2.6 第二范式")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924130217392.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("以上表SNO（学号）CNO（课程号）GRADE（成绩）CREDIT（学分）")]),_._v(" "),v("p",[_._v("在以上关系中主键是SNO和CNO的组合键，SNO和CNO组合起来才能确定成绩；因为一个学生可以选多门课程（S01就选了C01，C02，C03上面课程），我们仅仅用课程号或者学号都不能确定成绩，必须是两者的组合键才能确定成绩，而学分是可以通过课程号来确定的，所以我们要求这一个关系模式的主键（候选键），候选键就是SNO和CNO的组合键。")]),_._v(" "),v("p",[_._v("部分函数依赖带来的问题？")]),_._v(" "),v("ul",[v("li",[v("p",[v("code",[_._v("数据冗余")]),_._v("：学分存了很多次，这是不必要的，因为每一门学科都有固定的学分。学分好课程号的对应关 系存一个就可以了。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("更新异常")]),_._v("：要更新学分的时候只更新了两条记录肯定不行。更新部分不更新部分导致更新异常。")])]),_._v(" "),v("li",[v("p",[_._v("插入遗产：比如有一门新的课程C08，学分是6分，现在该课程还没人选，要想先将C08，6学分的信息录入到该表中，会无法录入，因为没有学号，系统不让录入，因为学号是主键。主键必须有值，不能为空。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("删除异常")]),_._v("：比如学生毕业将他们的成绩信息全部清除，则学分信息也一并被删除掉了。（学分信息下届学生同样适用，应当予以保留）。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("解决方案")]),_._v("：将CNO（课程号）和CREDIT（学分）两个字段提取出来，做一个新的关系模式。在原来的关系模式中将学分列去掉，注意：不能去掉课程号字段，因为数据会不完整。")])])]),_._v(" "),v("h3",{attrs:{id:"_2-7-第三范式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-第三范式"}},[_._v("#")]),_._v(" 2.7 第三范式")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924130401978.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("以上表显然已达到第二范式的要求，因为已标识出SNO是主键，知道这一点，不用再细致去分析，也知道，它已经属于第二范式了，因为它的主键只有单属性，单属性是不可能有部分函数依赖存在的，所以如果说我们求出来是单属性的关键字，那就不存在部分函数依赖的可能。\n该表虽然已经达到第二范式，单仍然有数据冗余等一系列的问题（更新，插入，删除异常）。")]),_._v(" "),v("p",[_._v("解决方案："),v("code",[_._v("将DNO，DNAME，LOCATION独立出来，成为一个关系模式")]),_._v("。这样就打破现有的这种传递依赖了，原来的关系模式就只剩下前三个字段了（SNO、SName、DNO）。")]),_._v(" "),v("h3",{attrs:{id:"_2-8-bc范式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-bc范式"}},[_._v("#")]),_._v(" 2.8 BC范式")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924130431868.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("SJ是一个候选键，ST也是一个候选键（因为ST中T可确定J）。\nSTJ都是主属性，在这个关系模式中没有非主属性。既然没有非主属性，所以肯定满足第二范式和第三范式的。因为第二范式是消除非主属性对候选键的部分函数依赖，而第三范式是消除非主属性对候选键的传递依赖。现在连非主属性都没有了，自然这些依赖也就不存在了。")]),_._v(" "),v("p",[_._v("任何判断是否是BC范式？\nR属于BCNF当且仅当其F中每个依赖的决定因素必定包含R的某个候选码、（通俗讲就是：我们将所有的函数依赖写出来，函数依赖的左边部分必须是候选键，因为函数依赖里面，左边部分，就是它所谓的决定因素）。")]),_._v(" "),v("p",[_._v("上图有哪些函数依赖，函数依赖包括 “SJ确定T”，还有“T确定J”，对于第一个函数依赖，明显左边部分是一个候选键，而对于第二个函数依赖左边部分不是一个候选键，所以我们判断，这不是BCNF，或者说该关系模式还没有达到BCNF的级别要求。")]),_._v(" "),v("h3",{attrs:{id:"_2-9-模式分解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-模式分解"}},[_._v("#")]),_._v(" 2.9 模式分解")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924130538629.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("在之前讲范式的过程中，当范式级别不够时候，是将模式进行拆分，拆分下来后级别就上去了，在拆分过程中，需要考虑到一些因素，拆分时有不同的拆分的机制，原则需要注意，模式的分解拆分，主要讲两个方面。")]),_._v(" "),v("h3",{attrs:{id:"_2-10-保持函数依赖分解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-10-保持函数依赖分解"}},[_._v("#")]),_._v(" 2.10 保持函数依赖分解")]),_._v(" "),v("p",[_._v("分解之前有哪些函数依赖，分解之后这些函数依赖仍然存在。")]),_._v(" "),v("p",[_._v("例子：有一个关系模式，总共有A、B、C三个属性，R（A、B、C），然后有函数依赖，A确定B，B确定C，将其分成两个关系模式，R1（A、B），R2（B、C），这种分发就保持了函数依赖。因为，A和B都在R1中，所以R1保持了A到B的函数依赖，R2有B和C两个属性，所以B到C的函数依赖，被R2保存下来，所以两个函数依赖都被保存下来了，这就代表保持了函数依赖。")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("假设将其拆分成R1（A、B）和R3（A、C），就没有保持函依赖，因为A确定B保存下来了，B确定C没有保存下来，所以这种形式没有保持函数依赖。")])]),_._v(" "),v("li",[v("p",[_._v("能够将原关系模式当中的所有函数依赖关系，都将它写到新的拆分出来的这些关系当中来，代表函数一来就保持下来了。如果有缺失就不行。（对于冗余性质的函数依赖不要求保留。）")])]),_._v(" "),v("li",[v("p",[_._v("假设R1（A、B），R2（B、C），R3（A、C），R3就是冗余的函数依赖，因为R1、R2的分解保持了函数依赖，因为A确定B，B确定C，就已经能将A确定C推导出来了。")])])]),_._v(" "),v("h3",{attrs:{id:"_2-11-无损分解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-11-无损分解"}},[_._v("#")]),_._v(" 2.11 无损分解")]),_._v(" "),v("p",[_._v("什么是无损分解和有损分解：")]),_._v(" "),v("ul",[v("li",[_._v("有损：不能还原。将原关系模式R拆分之后，无法再还原成为R。")]),_._v(" "),v("li",[_._v("无损：可以还原。如果可以通过链接操作将拆分后的关系模式，又可以组合起来，链接起来形成原来的关系模式，就是无损。")])]),_._v(" "),v("h2",{attrs:{id:"_3-数据库并发控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据库并发控制"}},[_._v("#")]),_._v(" 3. 数据库并发控制")]),_._v(" "),v("h3",{attrs:{id:"_3-1-并发基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-并发基本概念"}},[_._v("#")]),_._v(" 3.1 并发基本概念")]),_._v(" "),v("p",[_._v("事务：将多个操作封装起来，把它看做一个整体来进行操作（要么全做，要么全不做）。为什么要有事务机制呢？\n因为很多的操作有关联性，本身就是一个整体，如果不一次性执行完，会产生一系列的问题。")]),_._v(" "),v("p",[_._v("事务的几大特性")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("原子性")]),_._v("：要么全做，要么全不做。事务操作是一个原子性操作，即不可再拆分来做。")]),_._v(" "),v("li",[v("code",[_._v("一致性")]),_._v("：指事务在执行之前，数据是保持一致的状态，执行之后也是一致的状态。如：银行转账前后两个账号的钱的总和始终是一致的（类比能量守恒的状态）。")]),_._v(" "),v("li",[v("code",[_._v("隔离性")]),_._v("：事务之间是独立进行的，隔离的，互不影响。")]),_._v(" "),v("li",[v("code",[_._v("持续性")]),_._v("：事务执行之后，它的结果影响是持续的。")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924130838958.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("h3",{attrs:{id:"_3-2-存在的问题实例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-存在的问题实例"}},[_._v("#")]),_._v(" 3.2 存在的问题实例")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("丢失更新")]),_._v("：T1、T2两个事务，各司其职的运行，T1读取A并进行自减5写回的操作。T2读取A自减8写回操作。逻辑上来讲，T1、T2都执行完，A应该减13，但真正的结果是只减掉了8，即A=2，因为T2写回时会把T1的结果覆盖掉，即丢失更新。")]),_._v(" "),v("li",[v("code",[_._v("不可重复读")]),_._v("：T1在读A、B求和，并二次求和做验算，但是在T1第二次求和过程中，T2对A进行了更新，导致T1的两次运算结果不同，验算不对。即重复读第二次时候，值以及不一样了——不可重复读。")]),_._v(" "),v("li",[v("code",[_._v("读“脏”数据")]),_._v("：不是真正的数据，只是一个临时值，T1读取了A的值20，加50写回70，此时T2读取了A=70的值去进行它自己的操作，但是T1最后进行ROLLBACK操作（回滚，之间的所有操作将被复原），A的值回复为20。此时T2读到的A的值就是一个“脏”数据。")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924130914376.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("h3",{attrs:{id:"_3-3-封锁协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-封锁协议"}},[_._v("#")]),_._v(" 3.3 封锁协议")]),_._v(" "),v("p",[_._v("为了解决以上问题，提出了封锁协议：")]),_._v(" "),v("ol",[v("li",[_._v("S 锁是读锁，X锁是写锁。读锁加上之后，别人还可以对这个数据加读锁，但是不能加写锁，而写锁加上之后不能在之上加任何的锁。")]),_._v(" "),v("li",[_._v("三级封锁协议和二级封锁协议，释放时间不一样，二级封锁协议，读完后即可释放，三级封锁协议是直到事务结束才释放。三级封锁协议以上三种情况都可应对。")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924130940661.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("h2",{attrs:{id:"_4-数据库的完整性约束"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-数据库的完整性约束"}},[_._v("#")]),_._v(" 4. 数据库的完整性约束")]),_._v(" "),v("h3",{attrs:{id:"_4-1-数据库的完整约束"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-数据库的完整约束"}},[_._v("#")]),_._v(" 4.1 数据库的完整约束")]),_._v(" "),v("p",[_._v("数据库的完整性约束：")]),_._v(" "),v("ul",[v("li",[_._v("实体完整性约束")]),_._v(" "),v("li",[_._v("参照完整性约束")]),_._v(" "),v("li",[_._v("用户自定义完整性约束")]),_._v(" "),v("li",[_._v("触发器")])]),_._v(" "),v("p",[_._v("数据库的完整性约束主要有三种：")]),_._v(" "),v("ul",[v("li",[_._v("实体完整性约束：使用数据库的时候通过给数据表定义主键。实体完整性约束，约束的是主键，它的值不能为空，不能重复。")]),_._v(" "),v("li",[_._v("参照完整性约束：外键的完整性约束。")]),_._v(" "),v("li",[_._v("用户自定义完整性约束：用户可以设置该属性值的情况要求；比如：输入的是年龄，就不允许输入负数，也不允许输入200以上的值。就可以设置自定义完整性约束。")])]),_._v(" "),v("p",[_._v("以上三种完整性约束都是一种提高数据可靠性的一种机制，数据有问题，就不应该让它录入进数据库。")]),_._v(" "),v("p",[_._v("但这三种完整性约束都只能应对简单的情况，复杂情况不能应对，所以此时又有一种新的机制---"),v("code",[_._v("触发器")]),_._v("：触发器可以写脚本来约束数据库数据的一些要求。所以更加复杂的要求使用触发器来完成的。")]),_._v(" "),v("h3",{attrs:{id:"_4-2-数据库安全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-数据库安全"}},[_._v("#")]),_._v(" 4.2 数据库安全")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924220239669.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("h3",{attrs:{id:"_4-3-数据库的备份"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-数据库的备份"}},[_._v("#")]),_._v(" 4.3 数据库的备份")]),_._v(" "),v("p",[_._v("数据库的备份恢复分为： 静态备份和动态备份。")]),_._v(" "),v("ol",[v("li",[_._v("冷备份也称为静态备份，是将数据库正常关闭，在停止状态下，将数据库的文件全部备份（复制）下来。")]),_._v(" "),v("li",[_._v("热备份也称为动态备份，是利用备份软件，在数据库正常运行的状态下，将数据库中的数据文件备份出来。")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924220316625.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("备份的另外一种分类方式：依据数据备份的量来进行区分的。")]),_._v(" "),v("ul",[v("li",[_._v("完全备份： 备份所有的数据")]),_._v(" "),v("li",[_._v("差量备份： 仅备份上一次完全备份之后变化的数据")]),_._v(" "),v("li",[_._v("增量备份： 备份上一次备份之后变化的数据")])]),_._v(" "),v("p",[_._v("制定一个备份策略：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924220523569.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[v("code",[_._v("周一的增量备份针对周日的完全备份的版本，在完全版本的基础上删除了哪些东西，增加了哪些东西，修改了什么东西等都在增量备份中体现")]),_._v("。假设周一备份完发生故障，恢复数据先恢复周日的完全版，再在周日完全版的基础上恢复周一的增量版。")]),_._v(" "),v("p",[_._v("同理：周二的增量是针对周一的，周三的增量是针对周二的，周三数据出故障：先恢复周日，在恢复周一，在恢复周二，最后恢复周三的。周四的差量备份是直接针对周日的完全备份来记录的。这种变化量跨度大，恢复时候方便。增量和差量有机的结合，是有利用备份和恢复的。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924220537105.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("转储就是备份：海量指所有数据，增量指上一次转储之后的。 静态就是不运行状态，动态是运行状态。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/2020092422060295.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("h3",{attrs:{id:"_4-4-数据库故障与恢复"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-数据库故障与恢复"}},[_._v("#")]),_._v(" 4.4 数据库故障与恢复")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/2020092422064019.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("h3",{attrs:{id:"_4-5-数据仓库与数据挖掘"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-数据仓库与数据挖掘"}},[_._v("#")]),_._v(" 4.5 数据仓库与数据挖掘")]),_._v(" "),v("p",[v("strong",[_._v("数据仓库")])]),_._v(" "),v("ul",[v("li",[_._v("面向主题")]),_._v(" "),v("li",[_._v("集成的")]),_._v(" "),v("li",[_._v("相对稳定的（非易失的）")]),_._v(" "),v("li",[_._v("反映历史变化（随着时间变化）")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924220653645.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("数据库和数据仓库的差异：")]),_._v(" "),v("ol",[v("li",[_._v("数据库： 数据库是根据业务的需求看需要记录那些数据，就将其记录下来。（面向应用）")]),_._v(" "),v("li",[_._v("数据集市：部门级的数据仓库。")])]),_._v(" "),v("p",[v("strong",[_._v("数据挖掘")])]),_._v(" "),v("p",[_._v("数据挖掘的方法分类：")]),_._v(" "),v("ol",[v("li",[_._v("决策树")]),_._v(" "),v("li",[_._v("神经网络")]),_._v(" "),v("li",[_._v("遗传算法")]),_._v(" "),v("li",[_._v("关联规则挖掘算法")])]),_._v(" "),v("p",[_._v("分类：")]),_._v(" "),v("ol",[v("li",[_._v("关联分析： 挖掘出隐藏在数据间的相互关系")]),_._v(" "),v("li",[_._v("序列模式分析： 侧重点是分析数据间的前后关系（因果关系）")]),_._v(" "),v("li",[_._v("分类分析： 为每一个记录赋予一个标记再按标记分类")]),_._v(" "),v("li",[_._v("聚类分析：分类分析法的逆过程")])]),_._v(" "),v("h3",{attrs:{id:"_4-6-反规范化技术"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-反规范化技术"}},[_._v("#")]),_._v(" 4.6 反规范化技术")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924220736652.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("反规范化的技术手段：就是规范化的逆过程，以牺牲空间和规范化程度来换取时间。")]),_._v(" "),v("p",[_._v("技术手段有如下及几种：")]),_._v(" "),v("ul",[v("li",[_._v("增加派生性冗余列")]),_._v(" "),v("li",[_._v("增加冗余列")]),_._v(" "),v("li",[_._v("重新组表")]),_._v(" "),v("li",[_._v("分割表")])]),_._v(" "),v("h2",{attrs:{id:"_5-大数据的基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-大数据的基本概念"}},[_._v("#")]),_._v(" 5. 大数据的基本概念")]),_._v(" "),v("h3",{attrs:{id:"_5-1-基本了解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-基本了解"}},[_._v("#")]),_._v(" 5.1 基本了解")]),_._v(" "),v("p",[_._v("大数据技术：对海量数据进行处理的相关技术；\n这些数据具备什么特点？\n数据量极大，要求处理的速度极快，数据具有多样性，并且数据具备一定的价值。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924220801342.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("h3",{attrs:{id:"_5-2-大数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-大数据"}},[_._v("#")]),_._v(" 5.2 大数据")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/20200924220820700.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("大数据处理系统应该具有的重要特征")]),_._v(" "),v("ul",[v("li",[_._v("高度可扩展性")]),_._v(" "),v("li",[_._v("高性能")]),_._v(" "),v("li",[_._v("高度容错")]),_._v(" "),v("li",[_._v("支持异构环境")]),_._v(" "),v("li",[_._v("较短的分析延迟")]),_._v(" "),v("li",[_._v("易用且开放的接口")]),_._v(" "),v("li",[_._v("较低成本")]),_._v(" "),v("li",[_._v("向下兼容性")])]),_._v(" "),v("p",[_._v("现在大数据往往和云计算，虚拟化等技术结合起来来分析；云计算可以将一些闲置资源利用起来，成本较低。")])])}),[],!1,null,null,null);v.default=i.exports}}]);