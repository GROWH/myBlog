module.exports = {
  "title": "赵欢的博客",
  "description": "记录生活的点点滴滴...",
  "dest": "dist",   //该属性表示的是项目打包以后文件生成的目录   
  "base": "/myBlog/",   //该属性表示的是项目打包以后文件生成的目录   
  "head": [   //该属性表示的是 html 文档的 head 标签中需要额外插入的其它标签
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",   //主题
  "themeConfig": {    //主题的配置信息
    plugins: ['@vuepress/back-to-top', '@vuepress/nprogress', '@vuepress/blog'],  //插件-回到顶部,进度条，博客分类，
    valineConfig: {     // valine 评论功能配置信息
      appId: 'qci5c3yR7eblKvro9tPHpdWU-gzGzoHsz',// your appId
      appKey: '4EXXo7k7OMsYPNb9InUv7b3S', // your appKey
      placeholder: '尽情留下你想说的话吧~',           // 评论框占位符
      avatar: 'wavatar',           // 评论用户的头像类型
      highlight: true,         // 代码高亮
      recordIP: true,         // 记录评论者的IP
    },
    "nav": [   //导航栏的配置信息
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "分类",
        "icon": "reco-home",
        "items": [
          {
            "text": "前端",
            "link": "/blogs/front/",
            "icon": "reco-home"
          },
          {
            "text": "面试宝典",
            "link": "/blogs/interview/",
            "icon": "reco-home"
          },
          {
            "text": "教程大全",
            "link": "/blogs/tools/",
            "icon": "reco-home"
          }
        ]
      },
      // {
      //   "text": "列表",
      //   "link": "/",
      //   "icon": "reco-home"
      // },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "留言板",
        "link": "/docs/message-board/message.md",
        "icon": "reco-date"
      },
      {
        "text": "快速预览",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/GROWH",
            "icon": "reco-github"
          },
          {
            "text": "CSDN",
            "link": "https://blog.csdn.net/qq_43274386?spm=1001.2101.3001.5343",
            "icon": "reco-blog"
          },
          {
            "text": "掘金",
            "link": "https://juejin.cn/user/17209722158430",
            "icon": "reco-juejin"
          }
        ]
      },
      {
        "text": "关于我",
        "icon": "reco-message",
        "link": "/docs/theme-reco/"
      }
    ],
    "sidebar": {   //侧边栏的导航信息
      "/docs/theme-reco/": [
        {
          title: "关于我",
          children: [
            "",   // 空字符串对应的是 README.md
            "theme", // 对应 theme.md
            "plugin",  // 对应plugin.md
            "api" // 对应api.md
          ]
        }
      ],
      "/blogs/front/": [
        {
          title: "前端",
          children: [
            "",
            "1",
            "2",
            "3",  //这块名字不能是中文，会报错。 侧边栏显示内容来自.md的title内容
          ]
        }
      ],
      "/blogs/interview/": [
        {
          title: "面试宝典",
          children: [
            "",
            "1",
            "2",
            "3",
          ]
        }
      ],
      "/blogs/tools/": [
        {
          title: "教程大全",
          children: [
            "",
            "1",
            "2",
            "3",
          ]
        }
      ],
    },
    "type": "blog",  //表示当前项目的类型，默认是blog。还有docs等
    "blogConfig": {   //表示的是导航栏的配置信息
      // "category": {
      //   "location": 2,  //在导航栏中的位置在第二个
      //   "text": "分类",
      // },
      "tag": {
        "location": 3,   //在导航栏中的位置在第三个
        "text": "列表"
      },
    },
    "friendLink": [     //友情链接
      {
        "title": "白开水",
        "desc": "越努力，越热爱，越幸运",
        "email": "1197585247@qq.com",
        "link": "https://blog.csdn.net/qq_43274386?spm=1001.2101.3001.5343"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      },
      {
        "title": "小蜜蜂",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://blog.csdn.net/qq_43274386?spm=1001.2101.3001.5343"
      }
    ],
    "logo": "/logo.png",   //表示的是导航栏最左侧的logo图片
    "search": true,    //该属性表示是否有搜索功能
    "searchMaxSuggestions": 10,  //最多的搜索建议条目
    "lastUpdated": "Last Updated",   //该属性表示每篇文章底部现实的“最后一次更新时间”的文案  ---每个文件git最后提交的时间
    "author": "zhaohuan",   //作者名字，在每一篇文章的作者署名中都会沿用该名称
    "authorAvatar": "/avatar.png",   //表示作者的图像，与logo一样的规则路径
    // "sidebar": 'auto', // 侧边栏配置
    // "sidebarDepth": 2, // 侧边栏显示2级
    "record": "xxxx",     //备案信息
    "startYear": "2020"   //该属性表示博客的开始时间（只需要写年份就可以了）
    /**
     *  record: ICP备案号

        recordLink： ICP 备案指向的链接

        cyberSecurityRecord： 公安部备案文案

        cyberSecurityLink： 公安部备案指向链接

        如果项目不是部署在个人服务器上的话，这四个属性可以忽略不管
     */
  },
  "markdown": {
    "lineNumbers": true   //代码块显示行号
  }
}