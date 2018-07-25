# 静态html专题神器
通过纯前端jquery编写，快速制作产品专题，把psd高效转化为html

## 使用说明
1. psd切图，图片命名为产品型号，如aaa_xx.jpg，放在与页面同目录的images文件夹里
2. 按照第一行提示输入数据，点击选项确认,也可同时设置全局数据
3. 点击"add"添加，按提示操作table
4. 稍微拖动文字，产生文字控件，按提示操作文字
5. 点击结束，生成专题，Chrome检查，复制html下代码
6. 把代码放到如Dreamweaver等工具，进行格式化

## 界面

div

table1

tr

td td td


table2

tr

td td td

...

### 起始界面
* 初始选项
    1. input：输入产品型号
    2. select-option：选择td是否使用宽度auto，是：3->5，否：4->5
    3. input：输入中间td宽度
    4. input：不使用宽度auto时，两边td宽度
    5. input：table宽度
    6. input：确认以上设置

* 无bug配置(其余尺寸待测)
    1. 1200+360 no-auto
    2. 1200+1920 auto
    3. 1000+100 no-auto

* 添加table
    1. button：add

* 添加垂直参考线
    1. button：添加垂直参考线

* 编辑完成
    1. button：end去除所有额外js、class、事件

### table界面（起始界面->二->触发）
* 控制器
	1. button：控制器显示/隐藏

* table属性
	1. input：table高度
	2. select-option：文字总体居中/居左
	3. button：添加h3
	4. button：添加p
	5. button：移除table内h3/p
	6. button：移除table
	7. button：添加水平参考线
    8. texrarea：全局颜色记录(输入更多颜色产生)

### h3/p界面- （文字拖动触发）
1. spinner：文字大小
2. spinner：文字行高
3. colorpicker：选择文字颜色
4. input：输入文字颜色
5. input：输入margin-top
6. input：输入margin-left
7. select-option：文字个别居中/居左
8. button：文字位置重置
9. textarea：文字内容

## 程序说明
* 阶段一
    1. 初始化全局起始界面数据
		* init()
	2. 输入起始界面数据
	3. 数据校验
		* validateData(productName,optionVal,middleWidth,sideWidth,tableWidth)
	4. 提交临时数据到全局数据
		* submitValue(productName,1,middleWidth,0,tableWidth)
		* submitValue(productName,0,middleWidth,sideWidth,0)
	5. 如table已存在，则修改table样式，并清空参考线及其控制器
		* modifyMFTable()
		* modifyTLTable()
	6. 添加垂直参考线
		* vhrControllerFace();
		* vhrControllerSet();
		* vhrControllerEvent();
    7. 全局修改h3/p字体大小/行高/粗细/颜色
        * click事件

* 阶段二
    1. “add”点击，添加table内容，插入可视化控制器
		* addContent()
		* addController()
	2. 第一次加table，需要在外层添加div
		* addDiv()
	3. 添加table，其中区别1-9和10-99个table的图片名处理
		* addTable()
		* addTable19()
		* addTable10()
	4. 设置table样式
		* setTLTableCSS()
		* setMFTableCSS()
	5. table添加tr/td
		* addTLtrtd()
		* addMFtrtd()
	6. 添加控制器，包括界面和事件
		* addControllerFace()
		* addControllerEvent()
	7. 清除之前事件捆绑，加入table界面控件
		* changeTableHeight()
		* setTdAlign()
		* addH3()
		* addP()
		* removeH3P()
		* removeTable()
	8. 添加水平参考线
		* addHhr()
		* hhrControllerFace(hhrTableNumber,hhrLength,buttonThis)
		* hhrControllerSet(hhrTableNumber,hhrLength,buttonThis)
		* hhrControllerEvent(hhrTableNumber,hhrLength,buttonThis)
    9. 全局颜色记录
        * initialGlobalColor()

* 阶段三
	1. “addh3”或“addp”点击，清除h3、p控件内事件捆绑，添加帮助模块
		* h3Helper()
		* pHelper()
	2. 拖动获取数据内容，计算当前文字属于第几个table和table内第几个h3/p,
		* 若拖动对象相同，
			* 位移不超过20px，恢复原位，
			* 超过20px，视为移动，
		* 若对象不同，清除旧帮助模块，产生新帮助模块
            * removeH3Helper(h3tableNum,h3Num)
            * addH3ControllerFace(h3tableNumber,h3Number)
            * setH3ControllerFace(h3tableNumber,h3Number)
            * //h3FontSize(h3tableNumber,h3Number)
            * h3FontSizeSpinner(h3tableNumber,h3Number)
            * //h3LineHeight(h3tableNumber,h3Number)
            * h3LineHeightSpinner(h3tableNumber,h3Number)
            * h3Color(h3tableNumber,h3Number)
            * h3ColorMore(h3tableNumber,h3Number)
            * h3Align(h3tableNumber,h3Number)
            * h3ResetPosition(h3tableNumber,h3Number)
            * h3Textarea(h3tableNumber,h3Number)
            * h3MarginTop(h3tableNumber,h3Number);
            * h3MarginLeft(h3tableNumber,h3Number);
            * p同理，把以上出现h3的地方改为p

* 阶段四
	1. “end”点击，清除文字拖动事件
	2. 清除各输入、帮助模块、js、css、事件、class、id