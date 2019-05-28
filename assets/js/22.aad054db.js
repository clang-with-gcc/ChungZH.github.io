(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{329:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("本文讲解一个基本的数据结构："),s("code",[t._v("队列")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"队列的概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#队列的概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 队列的概念")]),t._v(" "),s("p",[t._v("队列是一种特殊的线性结构。它只允许在队列的头部(head)进行删除操作，即“出队”。只能在尾部(tail)进行插入操作，即“入队”。当队列中没有元素时（即 head == tail），称为空队列。在我们的日常生活中，有很多情况都符合队列的特性。如：买票时，每个卖票的窗口就是一个队列。在这个队列中，新来的人总是在队列的最后面，早来的人就在前面，也越早能买到票。我们可以把这种情况称为“先进先出(First In First Out, FIFO)”原则。")]),t._v(" "),s("h2",{attrs:{id:"队列的定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#队列的定义","aria-hidden":"true"}},[t._v("#")]),t._v(" 队列的定义")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" queue "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 队列的主体，用来存储数据 ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 队头")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" tail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 队尾")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("上面的代码定义了一个结构体类型，我们可以将它放在 main 函数的外面。")]),t._v(" "),s("p",[s("strong",[t._v("注意：struct 结构体的定义末尾有一个分号")])]),t._v(" "),s("h2",{attrs:{id:"队列的实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#队列的实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 队列的实现")]),t._v(" "),s("p",[t._v("我们先举一个例子，让大家理解队列。")]),t._v(" "),s("p",[t._v("键盘输入十个数，把这些数放进队列里。然后把这个序列从左到右边输出边删除这些数。")]),t._v(" "),s("p",[t._v("这里需要用到“入队”和“出队”两个操作。我们先来学习一下这两个操作的逻辑。")]),t._v(" "),s("p",[t._v("首先，我们要把 head 和 tail 变量初始化成 0。")]),t._v(" "),s("p",[t._v("入队：")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加 1 到队尾")]),t._v("\ndata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntail"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("出队：")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将队头出队")]),t._v("\nhead"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("下面开始实现。")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<iostream>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" queue "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 队列的主体，用来存储数据 ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 队头")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" tail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 队尾")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tqueue q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tail "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化为0")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tcin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 入队")]),t._v("\n\t\tq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tail"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tcout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 出队")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tcout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("代码很简单。")]),t._v(" "),s("p",[t._v("输入：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1 2 3 4 5 6 7 8 9 10\n")])])]),s("p",[t._v("输出：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1 2 3 4 5 6 7 8 9 10\n")])])]),s("p",[t._v("其实 C++ 的 STL 库中已经有了队列的实现。")])])},[],!1,null,null,null);a.default=e.exports}}]);