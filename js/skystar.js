// poem
var words=[
    '放心打车吧，我在',
    '一起吃遍天下美食哦',
    '以后不开心了告诉我，不许偷偷哭',
    '当然开心的事也要告诉我(*^▽^*)',
    '偏爱是什么感觉呢？一生来体会好不好',
    '双向奔赴真的很幸福',
    '亲亲抱抱举高高~~~~',
    '曾是惊鸿照影来',
    '当年明月在',
    '永远爱小可',
    '偷偷表白一个叫WMK的女孩',
    '咱俩有钱了天天吃榴莲',
    '不许生闷气',
    '不要瞎寻思好不好',
    '养个猫猫叫小可，一叫俩回头',
    '快快攒够钱,娶你',
    '金窝银窝不如咱俩小窝',
    '不想去外面吃，要吃你'



    
    // '南风知不知',
    // '我见青山多妩媚',
    // '料青山见我也应如是',
    // '取次花丛懒回顾',
    // '半缘修道半缘君',
    // '三笑徒然当一痴',
    // '人生若只如初见',
    // '我余光中都是你',
    // '人生自是有情痴',
    // '此恨不关风与月',
    // '因为你，我多少适应了这个世界',
    // '春蚕到死丝方尽',
    // '蜡炬成灰泪始干',
    '今夜何夕',
    '见此良人',
    '愿我如星君如月',
    '夜夜流光相皎洁',
    '情不所起',
    '一往而深',
    '玲珑骰子安红豆',
    '入骨相思知不知',
    '多情只有春庭月',
    '尤为离人照落花',
    // '若有知音见采',
    // '不辞唱遍阳春',
    // '休言半纸无多重',
    // '万斛离愁尽耐担',
    // '夜月一帘幽梦',
    // '和光同尘',
    // '杳霭流玉',
    // '月落星沉',
    // '霞姿月韵',
    // '喜上眉梢',
    // '醉后不知天在水',
    // '满船星梦压星河',
    // '落花人独立',
    // '微雨燕双飞',
    // '掬水月在手',
    // '弄花香满衣',
    // '夜深忽梦少年事',
    // '唯梦闲人不梦君',
    // '垆边人似月',
    // '皓腕凝霜雪',
    // '众里嫣然通一顾',
    // '人间颜色如尘土',
    // '若非群玉山头见',
    // '会向瑶台月下逢',
    // '沉鱼落雁鸟惊喧',
    // '羞花闭月花愁颤',
    // '解释春风无限恨',
    // '沉香亭北倚阑干'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '今晚，整片星空将为你一人闪烁';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },28000)
      setTimeout(function(){
        textone.innerHTML = '像我的喜欢，被你看穿';
        texttwo.innerHTML = '摊位上一朵艳阳，我悄悄出现你身旁';
        textthree.innerHTML = '你慌乱的模样，我微笑安静欣赏';
      },155000)
      setTimeout(function(){
        textone.innerHTML = '我顶着大太阳，只想为你撑伞';
        texttwo.innerHTML = '你靠在我肩膀，深呼吸怕遗忘';
        textthree.innerHTML = '因为捞鱼的蠢游戏我们开始交谈';
      },172000)
      setTimeout(function(){
        textone.innerHTML = '多希望话题不断园游会永不打烊';
        texttwo.innerHTML = '气球在我手上，我牵着你瞎逛';
        textthree.innerHTML = '有话想对你讲，眼睛却装忙';
      },184000)
      setTimeout(function(){
        textone.innerHTML = '鸡蛋糕跟你嘴角果酱我都想要尝';
        texttwo.innerHTML = '园游会影片在播放';
        textthree.innerHTML = '这个世界约好一起逛';
      },196000)


 
