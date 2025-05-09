document.addEventListener('DOMContentLoaded', function() {
    // 更新当前日期
    updateCurrentDate();
    
    // 加载模拟热搜数据
    loadHotSearchData();
});

function updateCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    const formattedDate = `${year}年${month}月${day}日 ${hours}:${minutes} 更新`;
    document.getElementById('current-date').textContent = formattedDate;
}

function loadHotSearchData() {
    // 模拟热搜数据
    const hotSearchData = [
        { id: 1, title: "国庆假期全国接待国内游客8.26亿人次", heat: "4825万", image: "https://picsum.photos/id/10/800/600" },
        { id: 2, title: "iPhone15系列全系降价", heat: "4368万", image: "https://picsum.photos/id/20/800/600" },
        { id: 3, title: "国庆消费成绩单亮眼", heat: "3956万", image: "https://picsum.photos/id/30/800/600" },
        { id: 4, title: "假期结束多地返程高速拥堵", heat: "3524万", image: "https://picsum.photos/id/40/800/600" },
        { id: 5, title: "亚运会闭幕式", heat: "3270万", image: "https://picsum.photos/id/50/800/600" },
        { id: 6, title: "韩国选手亚运赛场连续两次犯规仍晋级", heat: "3105万", image: "https://picsum.photos/id/60/800/600" },
        { id: 7, title: "假日消费韧性彰显中国经济活力", heat: "2893万", image: "https://picsum.photos/id/70/800/600" },
        { id: 8, title: "亚运会中国队金牌数创历史新高", heat: "2647万", image: "https://picsum.photos/id/80/800/600" },
        { id: 9, title: "成都大熊猫基地挤爆了", heat: "2531万", image: "https://picsum.photos/id/90/800/600" },
        { id: 10, title: "国庆长城景区游客爆满", heat: "2419万", image: "https://picsum.photos/id/100/800/600" },
        { id: 11, title: "大学生连续熬夜备考患上血栓", heat: "2317万", image: "https://picsum.photos/id/110/800/600" },
        { id: 12, title: "海底捞回应拒绝办会员卡", heat: "2201万", image: "https://picsum.photos/id/120/800/600" },
        { id: 13, title: "多地气温跳水", heat: "2147万", image: "https://picsum.photos/id/130/800/600" },
        { id: 14, title: "中秋国庆假期全国交通运输平稳有序", heat: "2034万", image: "https://picsum.photos/id/140/800/600" },
        { id: 15, title: "假期长线游订单量增长6成", heat: "1967万", image: "https://picsum.photos/id/150/800/600" },
        { id: 16, title: "央视主持人朱迅罕见现身健身房", heat: "1875万", image: "https://picsum.photos/id/160/800/600" },
        { id: 17, title: "AI生成梵高为杭州亚运会作画", heat: "1796万", image: "https://picsum.photos/id/170/800/600" },
        { id: 18, title: "演员于明加自曝离婚", heat: "1728万", image: "https://picsum.photos/id/180/800/600" },
        { id: 19, title: "女子去男友家收拾厨房时哭了", heat: "1653万", image: "https://picsum.photos/id/190/800/600" },
        { id: 20, title: "北京环球影城排队5小时", heat: "1587万", image: "https://picsum.photos/id/200/800/600" },
        { id: 21, title: "苹果新系统WiFi连接有问题", heat: "1531万", image: "https://picsum.photos/id/210/800/600" },
        { id: 22, title: "中国女排战胜意大利队", heat: "1492万", image: "https://picsum.photos/id/220/800/600" },
        { id: 23, title: "五月天演唱会门票遭粉丝吐槽", heat: "1430万", image: "https://picsum.photos/id/230/800/600" },
        { id: 24, title: "美国再次加息25个基点", heat: "1396万", image: "https://picsum.photos/id/240/800/600" },
        { id: 25, title: "今年双十一电商平台取消价格保护", heat: "1347万", image: "https://picsum.photos/id/250/800/600" },
        { id: 26, title: "医生提醒柿子空腹不能吃", heat: "1285万", image: "https://picsum.photos/id/260/800/600" },
        { id: 27, title: "大学生做主播月入10万", heat: "1243万", image: "https://picsum.photos/id/270/800/600" },
        { id: 28, title: "西湖景区游客已达最大承载量", heat: "1197万", image: "https://picsum.photos/id/280/800/600" },
        { id: 29, title: "多家航空公司宣布恢复国际航线", heat: "1158万", image: "https://picsum.photos/id/290/800/600" },
        { id: 30, title: "中国队乒乓球混双夺冠", heat: "1121万", image: "https://picsum.photos/id/300/800/600" },
        { id: 31, title: "吴艳妮200米夺冠", heat: "1087万", image: "https://picsum.photos/id/310/800/600" },
        { id: 32, title: "男子景区扮孙悟空供游客合影", heat: "1043万", image: "https://picsum.photos/id/320/800/600" },
        { id: 33, title: "苏炳添结束职业生涯", heat: "1009万", image: "https://picsum.photos/id/330/800/600" },
        { id: 34, title: "天猫双十一活动时间公布", heat: "979万", image: "https://picsum.photos/id/340/800/600" },
        { id: 35, title: "男孩景区被大熊猫抱大腿", heat: "943万", image: "https://picsum.photos/id/350/800/600" },
        { id: 36, title: "新加坡航空公司推出优惠票价", heat: "916万", image: "https://picsum.photos/id/360/800/600" },
        { id: 37, title: "研究称常吃辣增加痴呆风险", heat: "882万", image: "https://picsum.photos/id/370/800/600" },
        { id: 38, title: "长假结束注意收心", heat: "854万", image: "https://picsum.photos/id/380/800/600" },
        { id: 39, title: "西安兵马俑酒店走红", heat: "819万", image: "https://picsum.photos/id/390/800/600" },
        { id: 40, title: "假期返程高峰将至", heat: "794万", image: "https://picsum.photos/id/400/800/600" },
        { id: 41, title: "媒体评不文明旅游行为", heat: "765万", image: "https://picsum.photos/id/410/800/600" },
        { id: 42, title: "男子连买30套房欲开民宿亏本", heat: "738万", image: "https://picsum.photos/id/420/800/600" },
        { id: 43, title: "专家称不必囤药", heat: "710万", image: "https://picsum.photos/id/430/800/600" },
        { id: 44, title: "杭州亚运会最后一个比赛日", heat: "685万", image: "https://picsum.photos/id/440/800/600" },
        { id: 45, title: "国外旅游景点掀起中文热", heat: "662万", image: "https://picsum.photos/id/450/800/600" },
        { id: 46, title: "四川方言版报站火了", heat: "638万", image: "https://picsum.photos/id/460/800/600" },
        { id: 47, title: "女子用餐付款时被告知已有人买单", heat: "614万", image: "https://picsum.photos/id/470/800/600" },
        { id: 48, title: "旅游地吃早餐被收1500元", heat: "592万", image: "https://picsum.photos/id/480/800/600" },
        { id: 49, title: "贵州通报三名幼童失联", heat: "571万", image: "https://picsum.photos/id/490/800/600" },
        { id: 50, title: "主播靠烤红薯月入30万", heat: "548万", image: "https://picsum.photos/id/500/800/600" }
    ];
    
    renderHotSearchList(hotSearchData);
    
    // 默认选中第一条热搜
    if (hotSearchData.length > 0) {
        showHotSearchDetail(hotSearchData[0]);
        
        // 默认选中第一个列表项
        const firstItem = document.querySelector('.hot-search-list li');
        if (firstItem) {
            firstItem.classList.add('active');
        }
    }
}

function renderHotSearchList(data) {
    const hotSearchList = document.getElementById('hot-search-items');
    
    data.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', item.id);
        
        const rankClass = index < 3 ? 'rank top-3' : 'rank';
        
        listItem.innerHTML = `
            <span class="${rankClass}">${index + 1}</span>
            <span class="title">${item.title}</span>
            <span class="heat">${item.heat}</span>
        `;
        
        listItem.addEventListener('click', function() {
            // 移除所有激活状态
            document.querySelectorAll('.hot-search-list li').forEach(li => {
                li.classList.remove('active');
            });
            
            // 添加当前激活状态
            this.classList.add('active');
            
            // 显示详情
            const selectedItem = data.find(d => d.id === parseInt(this.getAttribute('data-id')));
            if (selectedItem) {
                showHotSearchDetail(selectedItem);
            }
        });
        
        hotSearchList.appendChild(listItem);
    });
}

function showHotSearchDetail(item) {
    const imageElement = document.getElementById('hot-search-image');
    const titleElement = document.getElementById('selected-title');
    
    // 设置图片
    imageElement.src = item.image;
    imageElement.alt = item.title;
    
    // 设置标题
    titleElement.textContent = item.title;
} 