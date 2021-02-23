/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'click count': '点击数量',
    'cost': '成本',
    'cooldown': '冷却',
    'export': '导出',
    'import': '导入',
    'get': '获得',
    'hover on': '悬浮在',
    'left': '剩余',
    'locked': '未解锁',
    'max pps': '最大 pps',
    'myst upgrade': '神秘升级',
    'myst upgrades': '神秘升级',
    'need': '需要',
    'omega rune': '欧米咖符文',
    'overall score': '总分',
    'owo': '哇',
    'playtime': '游戏时间',
    'play time(hour': '游戏时长 (小时',
    'reach': '达到',
    'rebuild': '重建',
    'save': '保存',
    'speed /': '速度 /',
    'time left': '时间剩余',
    'upgrade': '升级',
    'upgrades': '升级',
    'bps': '方块每秒',
    'click': '点击',
    'cheat': '作弊',
    'cancel': '取消',
    'score': '分数',
    'toggle': '切换',
    'time speed x': '时间速度 x',
    'token': '令牌',
    'block': '方块',
    'reset': '重置',
    'status': '状态',
    'to beyond': '超越',
    'used': '用过',
    'buildings': '建筑',
    'building mult.': '建筑相乘。',
    'auto': '自动',
    'base value': '基值',
    'block/s': '方块/秒',
    'blocks': '方块',
    'blocks)': '方块)',
    'blocks use/click': '方块 使用/点击',
    'boost used': '已用提升',
    'build': '建造',
    'building': '建筑',
    '-play time(hour': '-游戏时间(小时',
    '-pure bpc': '-净每次点击获得的方块',
    '-pure bps': '-净每秒获得的方块',
    '-click count': '-点击次数',
    '-max pps': '-最大pps',
    ' need': ' 需要',
    '-bps mult.': '-净每秒获得的方块倍数',
    '-bpc mult.': '-每次点击获得的方块倍数',
    '-block used': '-已用的方块',
    '-boost used': '-已用的提升',
    '-bu eff mult.': '-bu eff倍数',
    '-building mult.': '-建筑倍数',
    '-buildings': '-建筑',
    'chance': '几率',
    'hover on tree': '悬浮在树上',
    'multiplier: x': '倍数: x',
    'power': '能量',
    ' base value': ' 基数',
    'beyond point': '超越点',
    'bupc mult.': 'bu每次点击倍数',
    'gain': '获得',
    'production by x': '产量 x',
    'power/s': '能量/秒',
    'rebuild count': '重建数量',
    'rebuild multiplier: x': '重建倍数: x',
    'rotation tree': '旋转的树',
    'rune': '符文',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    'each rebuilding multiply': '每个重建乘以',
    'each building multiply': '每座建筑乘以',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "total ": "总计",
    "-token ": "-令牌",
    "-total ": "-总计",
    "block ": "方块",
    "cost: ": "成本: ",
    " cost": " 成本",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "\n": "",
    " blocks": " 方块",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);