# 静态html专题神器
通过纯前端jquery编写，快速制作产品专题，把psd高效转化为html

## version6前版本使用说明
1. psd切图，图片命名为产品型号，如aaa_xx.jpg，放在与页面同目录的images文件夹里
2. 按照第一行提示输入数据，点击选项确认,也可同时设置全局数据
3. 点击"add"添加，按提示操作table
4. 稍微拖动文字，产生文字控件，按提示操作文字
5. 点击结束，生成专题，Chrome检查，复制html下代码
6. 把代码放到如vscode等工具，进行格式化

## version7版本使用说明
1. psd切图，图片命名为产品型号，如aaa_xx.jpg，放在与页面同目录的images文件夹里
2. 按照第一行提示输入数据，点击选项确认,也可同时设置全局数据
3. 点击"add"添加，按提示操作版块
4. 点击文字，产生文字控件，按提示操作文字，注意文字位置通过input键盘事件移动，awds，fthg，jilk，上下左右方向键
5. 点击结束，生成专题，Chrome检查，复制html下代码
6. 把代码放到如vscode等工具，进行格式化

## 最新说明

version4用于引入思源黑体，无需思源的，可用version3的微软雅黑。version4需要把SourceHanSansCN-Medium.ttf放在与productHelper.html同级目录，完成所有步骤后，结合[font-spider](http://font-spider.org/index.html)，可优化ttf大小。

version5为特殊版本，把version4的字体文件放到images文件夹里，另外为兼容老版富文本编辑器bug，换行替换为```<font style="font-family: Microsoft YaHei"><br /></font>```。

version6在version5的基础上，增加思源黑体多种ttf的选择。包括Bold、ExtraLight、Light、Medium、Normal、Regular。

version7是响应式版本，删除version6中的hr，margin，h3，取消鼠标移动，改为awsd，fthg，jilk，上下左右移动方向

近期发现已在使用的各版本思源黑体行高有问题，具体表现为在IE浏览器下字体位置偏高，官方已有相关issue https://github.com/adobe-fonts/source-han-sans/issues/88，已发布新版本2.002修复该问题

## 界面

1. 随意修改文字大小行高，且随意拖动，修改样式和布局方便
![专题神器图例1](./readmeImage/autoProduct1.png)

2. 文字多种颜色可选，且支持自定义设置颜色
![专题神器图例2](./readmeImage/autoProduct2.png)

3. 创建板块方便，展开控件即可编辑
![专题神器图例3](./readmeImage/autoProduct3.png)

4. 结束编辑，完成制作
![专题神器图例4](./readmeImage/autoProduct4.png)

5. 代码优雅简洁，易抽取，易嵌套，易修改
![专题神器图例5](./readmeImage/autoProduct5.png)

6. 响应式
![专题神器图例6](./readmeImage/autoProduct6.png)

### version6前起始界面
* 初始选项
    1. input：输入产品型号
    2. select-option：选择td是否使用宽度auto，是：3->5，否：4->5
    3. input：输入中间td宽度
    4. input：不使用宽度auto时，两边td宽度
    5. input：table宽度
	6. select-option：选择字体
    7. input：确认以上设置

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

### version7起始界面
* 初始选项
    1. input：输入产品型号
    2. input：设计稿宽度
	3. select-option：选择字体
    4. input：确认以上设置

* 添加div
    1. button：add

* 编辑完成
    1. button：end去除所有额外js、class、事件

### version6前table界面
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

### version7div界面
* 控制器
	1. button：控制器显示/隐藏

* div属性
	1. select-option：文字总体居中/居左
	2. button：添加p
	3. button：移除p
	4. button：移除版块
    5. texrarea：全局颜色记录(输入更多颜色产生)

### version6前h3/p界面- （文字拖动触发）
1. spinner：文字大小
2. spinner：文字行高
3. colorpicker：选择文字颜色
4. input：输入文字颜色
5. input：输入margin-top
6. input：输入margin-left
7. select-option：文字个别居中/居左
8. button：文字位置重置
9. textarea：文字内容

### version7p界面- （文字点击触发）
1. spinner：文字大小
2. spinner：文字行高
3. colorpicker：选择文字颜色
4. input：输入文字颜色
5. select-option：文字个别居中/居左
6. button：文字位置重置
7. textarea：文字内容
8. input：控制方向

## version6前程序说明
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

## version7程序说明
* 阶段一
    1. 初始化全局起始界面数据
		* init()
	2. 输入起始界面数据
	3. 数据校验
		* validateData(productName, uiWidth, fontFamily)
	4. 提交临时数据到全局数据
		* submitValue(productName, uiWidth, fontFamily)
	5. 如table已存在，则修改table样式，并清空其控制器
		* modifyTable
    6. 全局定义p样式：字体大小/行高/颜色
        * click事件

* 阶段二
    1. “add”点击，添加div内容，插入可视化控制器
		* addContent()
		* addController()
	2. 第一次加table，需要在外层添加div
		* addDiv()
	3. 添加table，其中区别1-9和10-99个table的图片名处理
		* addTable()
		* addTable19()
		* addTable10()
	4. 添加控制器，包括界面和事件
		* addControllerFace()
		* addControllerEvent()
	5. 清除之前事件捆绑，加入div界面控件
		* addP()
		* removeP()
		* removeTable()
    6. 全局颜色记录
        * initialGlobalColor()

* 阶段三
	1. “addp”点击，清除p控件内事件捆绑，添加帮助模块
		* pHelper()
	2. 点击获取数据内容，计算当前文字属于第几个div和div内第几个p，清除旧帮助模块，产生新帮助模块
		* removePHelper(ptableNum, pNum)
		* addPControllerFace(ptableNumber,pNumber)
		* setPControllerFace(ptableNumber,pNumber)
		* PFontSize(ptableNumber,pNumber)
		* PFontSizeSpinner(ptableNumber,pNumber)
		* PLineHeight(ptableNumber,pNumber)
		* PLineHeightSpinner(ptableNumber,pNumber)
		* PColor(ptableNumber,pNumber)
		* PColorMore(ptableNumber,pNumber)
		* PAlign(ptableNumber,pNumber)
		* PResetPosition(ptableNumber,pNumber)
		* PTextarea(ptableNumber,pNumber)
		* pDirection(ptableNumber,pNumber)
		* pDirectionFocus(ptableNumber,pNumber)

* 阶段四
	1. “end”点击，清除文字拖动事件
	2. 清除各输入、帮助模块、js、css、事件、class、id
