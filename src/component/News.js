import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "John Chantarasak",
      title:
        "Sweet, spicy and sour: John Chantarasak’s recipes for Thai salads",
      description:
        "A salty-spiced, citrus-cured tuna salad, a super-fresh apple and dried anchovy plate, and a simple crisp fried egg salad in a salty-sour dressingThis salad is incredibly easy to make at home. At its core, eggs are cracked into smoking-hot oil and shallow-frie…",
      url: "https://amp.theguardian.com/food/2022/may/21/thai-salad-recipes-john-chantarasak-fried-egg-apple-dried-anchovy-citrus-cured-tuna",
      urlToImage:
        "https://i.guim.co.uk/img/media/5fc3185783c1c9ac0dc34b23bbc0c938845c8206/540_460_5512_3309/master/5512.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=67f13cf72b2ebcb6be390e288e7079be",
      publishedAt: "2022-05-21T06:00:14Z",
      content:
        "Yum khai dao fried egg salad\r\nThis salad is incredibly easy to make at home. At its core, eggs are cracked into smoking-hot oil and shallow-fried so the edges and bottom go crisp, the whites puff out… [+7231 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: "John Gruber",
      title: "‘Give Those Glasses to the Bailiff’",
      description: "From season 5 episode 20: The Boy Who Knew Too Much",
      url: "https://www.youtube.com/watch?v=Y1JROKUJsNo",
      urlToImage: "https://i.ytimg.com/vi/Y1JROKUJsNo/hqdefault.jpg",
      publishedAt: "2022-05-21T00:02:42Z",
      content:
        "The Simpsons really has predicted so much. Maybe Apple should pivot Project Titan into a monorail project.\n\n\n ★",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Jörg Wirtgen",
      title:
        "Apple M1 gegen Intel und AMD bei Video- und Fotobearbeitung | c’t uplink 43.2",
      description:
        "Rechnet Apples Mac Studio die Konkurrenz an die Wand? Wir diskutieren, welche Anwendungen wirklich vom M1 Ultra profitieren und wo Intel oder AMD besser sind.",
      url: "https://www.heise.de/news/Apple-M1-gegen-Intel-und-AMD-bei-Video-und-Fotobearbeitung-c-t-uplink-43-2-6546707.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/3/6/1/8/1/1/signal-2022-05-19-164622_001-570ba1961de43e64.jpeg",
      publishedAt: "2022-05-21T04:30:00Z",
      content:
        "So schnell, stromsparend und leise rechnet kein anderer PC: Der Mac Studio scheint das zu sein, wo Apple mit seinen M1-Prozessoren immer hin wollte. Doch das Ding kostet eine Menge -- kaum vorstellba… [+2213 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Filipe Espósito",
      title: "Feature request: HomePod should have a true surround mode",
      description:
        "HomePod, Apple’s smart speaker, has some great features when it comes to pairing multiple speakers together. Thanks to AirPlay 2, users can play the same audio on different HomePods around the house or even use a stereo pair as standard Apple TV speakers. How…",
      url: "https://9to5mac.com/2022/05/20/feature-request-homepod-should-have-a-true-surround-mode/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/11/HomePod-mini-new-colors.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-05-21T00:00:03Z",
      content:
        "HomePod, Apple’s smart speaker, has some great features when it comes to pairing multiple speakers together. Thanks to AirPlay 2, users can play the same audio on different HomePods around the house … [+2515 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Christine McKee)",
      title:
        "Deals: save $1,000 on Sonance Outdoor Speakers at Best Buy, with streaming powered by Sonos",
      description:
        "An incredible deal at $1,000 off at Best Buy, this Sonance Mag Series 6.1-Channel Outdoor Streaming Sound System powered by Sonos delivers AirPlay 2 and Apple Music support.Save $1,000 on this Sonos Outdoor Speaker Sound System powered by SonosPriced at $1,69…",
      url: "https://appleinsider.com/articles/22/05/21/deals-save-1000-on-sonance-outdoor-speakers-at-best-buy-with-streaming-powered-by-sonos",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/48511-94682-sonance-mag-outdoor-sound-system-xl.jpg",
      publishedAt: "2022-05-21T05:01:04Z",
      content:
        "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1261 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: "岡本玄介",
      title: "macOSの壁紙やアイコンを懐かしの1984年 Macintosh風にするセット",
      description:
        "現行macOSの壁紙やアイコンを、1984年のレトロなMacintosh用OSのように表示するアプリ「OS (Old School)」。",
      url: "https://www.gizmodo.jp/2022/05/old-macintosh-in-current-mac.html",
      urlToImage:
        "https://assets.media-platform.com/gizmodo/dist/images/2022/05/19/220520_masos-w960.jpg",
      publishedAt: "2022-05-21T02:00:00Z",
      content:
        "Ben VesseymacOS1984 MacintoshOS (Old School)\r\n5166\r\n5hello.SlackEvernote166 2Windows\r\nIntroducing OS (Old School)...\r\nTransport yourself, and your desktop, back to 1984. This retro icon and wallpaper… [+403 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "Chris' Klippel",
      title: "Electronic Arts bientôt racheté par Apple, Disney ou Amazon ?",
      description:
        "Selon un rapport de Kotaku, Electronic Arts envisagerait de se faire racheter très prochainement ou chercherait à fusionner !",
      url: "https://www.presse-citron.net/?p=499644",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2022/05/electronic-arts-vente.jpg",
      publishedAt: "2022-05-21T05:00:39Z",
      content:
        "Plus que jamais, lindustrie du jeu vidéo est en train de prendre des tournures complètement folles avec des rachats à coup de milliards de dollars, des acquisitions surprises et une guerre des servic… [+2045 chars]",
    },
    {
      source: {
        id: null,
        name: "/FILM",
      },
      author: "Joshua Meyer",
      title: "Lupita Nyong'o Leaves Apple TV+ Crime Series Lady In The Lake",
      description:
        "Lupita Nyong'o has dropped out of the upcoming Apple TV+ series, \"Lady in the Lake,\" based on the New York Times-bestselling crime novel by Laura Lippman. Nyong'o was set to costar opposite Natalie Portman, who is also executive producing the series, which is…",
      url: "https://www.slashfilm.com/870514/lupita-nyongo-leaves-apple-tv-crime-series-lady-in-the-lake/",
      urlToImage:
        "https://www.slashfilm.com/img/gallery/lupita-nyongo-leaves-apple-tv-crime-series-lady-in-the-lake/l-intro-1653098987.jpg",
      publishedAt: "2022-05-21T02:12:02Z",
      content:
        'In the book, per Lippman\'s website, Sherwood is one of the two missing women and her ghost "is determined to keep her secrets and her dignity." She appears to "the ambitious Maddie," scolding her for… [+1291 chars]',
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Geoffroy Husson",
      title:
        "Nouveau hub USB-C Anker, les smartphones les plus vendus du premiers trimestre et design du Renault Scénic Vision – Tech’spresso",
      description:
        "Vous n’avez pas eu le temps de suivre l’actualité hier ? Voici ce qui a marqué le vendredi 20 mai : un nouveau hub USB-C chez Anker, les smartphones les plus vendus au premier trimestre et un concept car pour amener le prochain Scénic de Renault. Pour ne manq…",
      url: "https://www.frandroid.com/actualites-generales/1342505_nouveau-hub-usb-c-anker-les-smartphones-les-plus-vendus-du-premiers-trimestre-et-design-du-renault-scenic-vision-techspresso",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2022/05/renault-scenic-vision-concept-2022-1600-08-1652957586644253-v0-h.jpeg",
      publishedAt: "2022-05-21T06:01:33Z",
      content:
        "Vous navez pas eu le temps de suivre lactualité hier? Voici ce qui a marqué le vendredi 20 mai : un nouveau hub USB-C chez Anker, les smartphones les plus vendus au premier trimestre et un concept ca… [+2136 chars]",
    },
    {
      source: {
        id: null,
        name: "Wwwhatsnew.com",
      },
      author: "Nelson Herrera",
      title:
        "Qué es Google Wallet y qué ofrece esta completa y renovada billetera virtual",
      description:
        "Sabemos que Google siempre está al pendiente de renovar y modernizar la gran mayoría de sus ramas de aplicaciones y servicios, como lo es perfectamente Google Pay, su app para llevar a cabo pagos desde móviles Android. Y hablando de renovar, una de las notici…",
      url: "https://wwwhatsnew.com/2022/05/21/que-es-google-wallet-y-que-ofrece-esta-completa-y-renovada-billetera-virtual/",
      urlToImage:
        "https://wwwhatsnew.com/wp-content/uploads/2022/05/De-que-se-trata-Google-Wallet-y-que-ofrece-esta-renovada-billetera-virtual.jpg",
      publishedAt: "2022-05-21T06:00:39Z",
      content:
        "Sabemos que Google siempre está al pendiente de renovar y modernizar la gran mayoría de sus ramas de aplicaciones y servicios, como lo es perfectamente Google Pay, su app para llevar a cabo pagos des… [+2359 chars]",
    },
    {
      source: {
        id: null,
        name: "Cnbeta.com",
      },
      author: "study875",
      title: "Apple Music推Essential Anniversaries收藏集 收录艺术家代表专辑",
      description:
        "Apple Music 近期推出了名为“Essential Anniversaries”的特别音乐收藏集，其中就收录了英国摇滚乐队电台司令（Radiohead）在 25 年前发行的《OK Computer》。 阅读全文",
      url: "https://hot.cnbeta.com/articles/music/1271971.htm",
      urlToImage:
        "https://static.cnbetacdn.com/article/2022/0521/2e6bb9e4cec1d3a.webp",
      publishedAt: "2022-05-21T02:20:25Z",
      content:
        "OK Computer Radiohead Thom Yorke \r\n St Catherine's Court Nigel Godrich 1994 Godrich Radiohead  \r\n 70 Miles Davis Bitches Brew Can \r\nKarma PoliceFitter Happier\r\nNo Surprises Yorke Radiohead",
    },
    {
      source: {
        id: null,
        name: "Cnbeta.com",
      },
      author: "study875",
      title: "Pixel Watch细节曝光：Exynos 9110配协处理器 内置32GB存储",
      description:
        "援引科技媒体 9to5Google 报道，Pixel Watch 将采用三星的 Exynos 9110 处理器，并会配备一款辅助处理器。该辅助处理器的任务是 Offload 主处理器上的各项任务。只是这个辅助处理器是否隶属于 Tensor 品牌，目前还有待观察。 阅读全文",
      url: "https://www.cnbeta.com/articles/tech/1271963.htm",
      urlToImage:
        "https://static.cnbetacdn.com/article/2022/0521/83ce8818083bf3a.webp",
      publishedAt: "2022-05-21T01:53:53Z",
      content:
        "Snapdragon Wear 4100+ QCC1110 AOD 64K Offload AOD \r\nOffloadPixel Watch\r\nPixel Watch 32GB Wear OS YouTube Music Spotify Apple Watch \r\nGoogleGalaxy Watch 41.5GBPixel WatchRAMWear OS\r\nPixel WatchFitbit … [+18 chars]",
    },
    {
      source: {
        id: null,
        name: "New Atlas",
      },
      author: "C.C. Weiss",
      title: "All-electric VW camper van becomes the eco RV the world demands",
      description:
        "All-electric camper vans have been slow to materialize, limited to concept cars and a very select few compact vans scattered about Europe. What the world has really been wanting to see is a pop-up Volkswagen Bulli camper van with comfortable floor plan and pu…",
      url: "https://newatlas.com/automotive/flowcamper-frieda-volt-electric-camper-van/",
      urlToImage:
        "https://assets.newatlas.com/dims4/default/ea79036/2147483647/strip/true/crop/2362x1240+0+235/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Ff0%2Ffc%2F889ea24d4680a60ef12a7a9411aa%2Fflow-friedavolt-seite-m.jpeg",
      publishedAt: "2022-05-21T04:30:01Z",
      content:
        "All-electric camper vans have been slow to materialize, limited to concept cars and a very select few compact vans scattered about Europe. What the world has really been wanting to see is a pop-up Vo… [+5335 chars]",
    },
    {
      source: {
        id: null,
        name: "Himasoku.com",
      },
      author: "himasoku123",
      title:
        "【画像あり】アップル社、とんでもない外見の車を開発かｗｗｗｗｗｗｗｗｗ",
      description:
        "1: 名無しさん＠おーぷん 22/05/20(金) 17:56:55 ID:aKAW\n 自動運転とカメラとVRを採用多分電気自動車https://vrscout.com/news/the-apple-car-could-feature-vr-technology-and-no-windows/ \n\n\n\n\n\n\n\n2: 名無しさん＠おーぷん 22/05/20(金) 17:57:17 ID:efZE\n マウ...",
      url: "http://himasoku.com/archives/52186187.html",
      urlToImage:
        "https://livedoor.blogimg.jp/himasoku123/imgs/3/f/3fdd8739-s.jpg",
      publishedAt: "2022-05-21T01:06:43Z",
      content:
        "Apple\r\nAppleiPhoneSE\r\nApple\r\nApple Watch\r\nAppleiPhone\r\n4: 22/05/20() 17:57:57 ID:7QgV\r\n5: 22/05/20() 17:58:20 ID:D6Y4\r\n12: 22/05/20() 17:59:40 ID:GzkI\r\n17: 22/05/20() 18:00:47 ID:D6Y4\r\n8: 22/05/20() … [+1030 chars]",
    },
    {
      source: {
        id: null,
        name: "Googlewatchblog.de",
      },
      author: "Jens",
      title:
        "Android & iOS: Jede dritte App ist veraltet oder super-veraltet; bis zu 1,5 Millionen Zombie-Apps in den Stores",
      description:
        "Es gibt praktisch nichts, wofür sich in den großen App Stores von Apple und Google keine App findet, zumindest im Rahmen der technischen Möglichkeiten. Irgendwann hat irgendjemand für irgendwas eine App entwickelt und diese für alle Nutzer zum Download in den…",
      url: "https://www.googlewatchblog.de/2022/05/android-ios-jede-app/",
      urlToImage:
        "https://www.googlewatchblog.de/wp-content/uploads/bugdroid.jpg",
      publishedAt: "2022-05-21T06:00:33Z",
      content:
        "Es gibt praktisch nichts, wofür sich in den großen App Stores von Apple und Google keine App findet, zumindest im Rahmen der technischen Möglichkeiten. Irgendwann hat irgendjemand für irgendwas eine … [+1908 chars]",
    },
    {
      source: {
        id: null,
        name: "Nextpit.de",
      },
      author: "Jade Bryan",
      title:
        "Apples VR-Headset fast fertig? Hardware angeblich schon Vorstand präsentiert",
      description:
        "Apple soll sein AR- oder VR-Headset bereits dem Vorstand präsentiert haben. Kommt die neue Hardware etwa schon mit dem iPhone 14?(Dies ist ein Teaser - klick hier, um den kompletten Beitrag zu lesen)",
      url: "https://www.nextpit.de/apple-vr-headset-fast-fertig-hardware-vorstand-praesentiert",
      urlToImage:
        "https://fscl01.fonpit.de/userfiles/7734655/image/Apple-mixed-reality-headset-similar-Lynx-R1-AR-VR-device.jpg",
      publishedAt: "2022-05-21T06:00:01Z",
      content:
        "Informationen des Leakers Mark Gurman zufolge hat Apple sein erstes AR/VR-Headset dem Vorstand präsentiert. Somit wird es immer wahrscheinlicher, dass Apple das Headset zusammen mit dem iPhone 14 vor… [+1712 chars]",
    },
    {
      source: {
        id: null,
        name: "Techbang.com",
      },
      author: "bigdatadigest",
      title: "關機也沒用！Apple低功耗能模式讓手機關機後仍有可能被惡意軟體監控",
      description:
        "當你發現你的iPhone被駭了之後，你的第一反應會是什麼？ \n當你發現你的iPhone被駭了之後，你的第一反應會是什麼？ 有不少人應該會選擇先關機，再尋找解決方法，畢竟一關天下無難事，沒什麼是關機解決不了的。 \n以前選擇關機或許還是一條可行之路，但現在，德國達姆施塔特技術大學的研究人員研發了一種NASTY惡意軟體，即使是當你主動選擇關機，也不能保證完全阻止攻擊者的行為。 \n攻擊者仍然可以在未經使用者允許的情況下利用和入侵啟用藍牙的晶片，以便在設備上安裝惡意軟體。而該功能針對的正是iPhone更新到iOS 15，手…",
      url: "https://www.techbang.com/posts/96462-apples-iphone-hack",
      urlToImage:
        "https://cdn2.techbang.com/system/excerpt_images/96462/original/53a23990449896480d9b93d3159ade51.jpg?1653032493",
      publishedAt: "2022-05-21T01:00:00Z",
      content:
        "iPhone  \r\nNASTY \r\niPhoneiOS 15Find My \r\n15ACM516519\r\n \r\niPhoneiPhoneFind MyiPhone \r\niPhone \r\niOS 15Find My After Power OffJiska Classen \r\nNFCUWBPegasusiPhone \r\n \r\niPhone  \r\niPhone 11 \r\nEclypsiumJohn … [+106 chars]",
    },
    {
      source: {
        id: null,
        name: "Basicthinking.de",
      },
      author: "Fabian Peters",
      title:
        "Neues Headquater: So arbeitet der Streamingdienst Deezer in Paris",
      description:
        "Mit über 90 Millionen Songs, Hörbüchern, Podcasts und Radiosendern bietet Deezer einen der größten Audio-Kataloge der Welt an. Mitte März 2022 feierte der Streamingdienst 15-jähriges Jubiläum und die Eröffnung eines neuen Headhunters in Paris. Im Standort-Por…",
      url: "https://www.basicthinking.de/blog/2022/05/21/neues-headquater-so-arbeitet-streamingdienst-deezer-in-paris/",
      urlToImage:
        "https://www.basicthinking.de/blog/wp-content/uploads/2022/05/deezer.jpg",
      publishedAt: "2022-05-21T05:00:52Z",
      content:
        "Mit über 90 Millionen Songs, Hörbüchern, Podcasts und Radiosendern bietet Deezer einen der größten Audio-Kataloge der Welt an. Mitte März 2022 feierte der Streamingdienst 15-jähriges Jubiläum und die… [+1822 chars]",
    },
    {
      source: {
        id: null,
        name: "Geekpark.net",
      },
      author: null,
      title: "极客荐｜ Mac 硬盘空间告急，你可以试试这几款免费清理工具",
      description:
        "在选购 Mac 时，昂贵的增加自带存储空间成本，往往是让很多购买用户肉痛的选择，因此不少用户在预算有限的情况下，选择配置更倾向于选择更大的运行内存而非存储空间。\n这也让 macOS 存储空间捉襟见肘成为不少 Mac 用户头疼的问题：毕竟内存不够用还能「杀后台」缓解，存储空间频繁告急，往往无从下手。\n\n与 Windows PC 不同，macOS 的载体 MacBook 系列如今大多数产品都已经演变为了将内存颗粒直接焊在主板上的设计，甚至 Mac mini、iMac 这些传统意义上的台式机产品线在更新 M1 系列处理…",
      url: "http://www.geekpark.net/news/302525",
      urlToImage:
        "https://imgslim.geekpark.net/uploads/image/file/39/7c/397c45fa3650f7e27feb29bf4b7ee6fa.png",
      publishedAt: "2022-05-21T04:04:50Z",
      content:
        "Mac \r\n macOS Mac \r\n Windows PC macOS MacBook Mac miniiMac M1 macOS C \r\n iCloud / iTunes macOS \r\n Mac macOS GB \r\n macOS macOS \r\nmacOS \r\n macOS Apple Logo- Mac \r\n macOS iCloud iCloud \r\n Apple TV \r\nApp … [+431 chars]",
    },
    {
      source: {
        id: null,
        name: "Netafull.net",
      },
      author: "コグレマサト",
      title:
        "Apple Watchが持ち主の「心房細動」の可能性を通知 → 病院に行って兆候が確認される",
      description:
        "Apple Watchで命が救われたというニュースは思いの外、見かける気がします。Apple、Apple Watch Series 7のプロモーション動画「緊急電話」というのもその一つです。 Apple Watchには転...\n投稿 Apple Watchが持ち主の「心房細動」の可能性を通知 → 病院に行って兆候が確認される は ネタフル に最初に表示されました。",
      url: "https://netafull.net/apple-watch/0112720.html",
      urlToImage:
        "https://netafull.net/wp-content/uploads/2022/05/apple-watch-7-heart.jpg",
      publishedAt: "2022-05-21T03:30:00Z",
      content:
        "Apple WatchAppleApple Watch Series 7\r\nApple WatchSOS\r\nApple Watch\r\npic.twitter.com/rEKPdNOISw\r\n— Hi_Lo@ (@Grandblue_mica) May 20, 2022\r\nSSTR\r\nAppleWatch\r\n— Hi_Lo@ (@Grandblue_mica) May 20, 2022\r\nAppl… [+170 chars]",
    },
  ];
  constructor() {
    super();
    console.log("i am constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container align-items-center my-2">
        <h3>DailyNews - Top Headlines</h3>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 50)}
                  description={element.description.slice(0, 80)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
          ;
        </div>
      </div>
    );
  }
}
