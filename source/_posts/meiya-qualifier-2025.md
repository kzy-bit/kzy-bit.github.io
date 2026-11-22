---
title: 美亚资格赛2025
date: 2026-11-22 17:39:18
---

2025 年美亚资格赛电子数据取证题解，附操作截图。

<!-- more -->

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/001.png)

## 1\.请你使用CHAN\_MH\.zip检材回答以下问题这个智能手机是什么操作系统?

iOS 17\.1\.1

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/002.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/003.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/004.png)

## 2\.在这个手机中，有多少组国际移动设备识别码\(IMEI\)号码? \(请以阿拉伯数字作答\)

2

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/005.png)

## 3\.承上题，以下哪一个才是正确的国际移动设备识别码\(IMEI\)号码?

357328098205226

见2题

## 4\.请指出最后使用的使用者身分模组\(SIM\)的集成电路卡识别码\(ICCID\)

89852122206020998419

见2题

## 5\.请指出最后使用的Apple ID是多少？\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

whoishogan@gmail\.com

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/006.png)

## 6\.蓝牙模组中的蓝牙地址是多少？\(请以下格式作答:xx:xx:xx:xx:xx:xx\)

f8:38:80:bb:f5:28

依旧从iDevice\_info\.txt里面找，搜索blue即可索引至此

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/007.png)

## 7\.这个智能手机曾经启动「个人热点」分享网络，请问他的「热点」名称？\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

iPhone

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/008.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/009.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/010.png)

## 8\.这个智能手机没有连接过以下哪一个服务集标识符\(SSID\)

A

A\. Hongn Home

B\. CMHK

C\. 1010 free wifi

D\. ErrorError

SSID就是WiFi名称

下题提到B所以选A

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/011.png)

# 9\.请指出首次连接服务集识别码\(SSID\)名称为" CMHK"的无线区域网络\(Wi\-Fi\)的日期及时间\(请以GMT \+8时区及以下格式作答: yyyy\-MM\-dd HH:mm:ss\)

无答案

## 10\.安装了以下即时哪个通讯软件?i\) WhatsAppii\) WeChatiii\) WhatsApp Businessiv\) QQ

A

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/012.png)

A\. 只有 i\) 和 ii\)

B\. 只有 i\), ii\) 和 iii\)

C\. 只有 i\), ii\) 和 iv\)

D\. 以上皆是

## 11\.承上题，请指出即时通讯软件"WhatsApp"的版本\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

2\.25\.14\.79

法一：

在 iOS 上，每个 App 的数据容器里都有：/var/mobile/Containers/Data/Application/\<UUID\>/Library/Preferences/

典型内容包括：

- 用户设置：开关状态、主题、语言、单位、通知偏好

- 登录状态/账号标识：token、用户 ID（有些 App 会存，但敏感信息更推荐 Keychain）

- 首次启动标记：`hasLaunchedBefore`、引导页是否看过

- 界面状态：上次选中的 tab、列表排序方式、窗口位置（macOS）

- 功能开关：A/B 实验标记、灰度开关

- 缓存类小数据：少量配置、上次同步时间

- App 版本相关标记：如“是否展示过新版本引导”

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/013.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/014.png)

法二:

正确的做法是去看`var\mobile\Applications\``group.net``.whatsapp.WhatsApp.shared\Library\Preferences\`中的`group.net``.whatsapp.WhatsApp.shared.plist`这个文件

补充：

`plist` 是一种键值对/树状结构的序列化格式，用来存配置、偏好、元数据、归档对象等。iOS/macOS 大量系统文件和 App 数据都是 plist，比如：

- App 的 `Info.plist`（App 元信息：版本、Bundle ID、权限描述等）

- `Library/Preferences/<BundleID>.plist`（用户偏好）

- 系统配置、LaunchDaemon、entitlements、备份索引等

## 12\.陈民浩的手机中，总共安装3个文件传输软件，封包名称分别为com\.apple\.Sharing\.AirDropUI、com\.lenovo\.anyshare、com\.estmob\.paprika，其中有哪一个软件曾经用来传送/接收文件功能？

C

C\. com\.estmob\.paprika

A\. com\.apple\.Sharing\.AirDropUI

B\. com\.lenovo\.anyshare

C\. com\.estmob\.paprika

**paprika**

![屏幕截图 2026\-11\-04 235141\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/015.png)

- `com.estmob.paprika.plist`（39\.72 KB）：应用的偏好设置文件，保存你在 Paprika 里的各项配置选项

- `com.estmob.paprika.propel`（575 B）：应用内部的属性/配置数据文件

- 多个 `group.com``.estmob.paprika` 文件（87 B \~ 11\.17 KB 不等）：这些是 App Group 共享数据文件

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/016.png)

Documents（文档）和 Library（资源库）文件夹，它们位于应用沙盒的根目录中。

这两个文件夹保存了你在 Paprika 中最核心的用户数据：

- Documents 文件夹（通常存放你的所有数据）：这是 Paprika 存放核心用户文件的地方。你平时在 App 里创建的所有内容，比如食谱、菜单计划、购物清单、食材清单以及应用内的分类文件夹，全部都以数据库或配置文件的形式保存在这里面。如果你之前做过数据备份或导出的文件，通常也会在这个文件夹里。

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/017.png)

- Library 文件夹（存放设置与缓存）：这个文件夹通常包含上一张图里展示的偏好设置文件（Preferences）、缓存（Caches）以及应用内部机制（如 App Group）所需的共享数据。

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/018.png)

核心文件夹（我们最关心的）

- `Preferences` \(13 个文件\) 🌟
这就是之前说的 “注册系统 / 偏好设置”的老巢。
这里面通常会有一个叫 `com.estmob.paprika.plist` 的文件，你在这个 App 里的所有界面设置（比如通知开关、默认单位、排序方式等）都被系统自动写入到这里。

- `Application Support` \(2 个文件\)
存放 App 运行需要的关键支撑数据。对于 Paprika 这种应用，你的 离线食谱数据库、分类文件夹结构、购买记录缓存 很有可能被放在这里面（通常是以 `.sqlite` 或自定义格式存在）。

- `Cookies` \(1 个文件\)
存放 App 内置网页（Webview）产生的 Cookies。如果你在 Paprika 里通过网页端导入了食谱，或者登录过网页端，账号状态可能会保存在这里。

- `WebKit` \(1 个文件\)
纯粹是 App 内部浏览网页产生的缓存，跟你的核心数据无关。

**AirDropUI**

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/019.png)

**anyshare**

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/020.png)

总结：三个应用包里只有**paprika有文件和数据**

## 13\.承上题，与其有传送/接收过资料装置的装置ID是多少? \(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

5402313593439

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/021.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/022.png)

## 14\.承上题，这个装置名称是?\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

Samsung SM\-G930F

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/023.png)

## 15\.承上题，本机装置的装置ID是多少?\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

3836403626142

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/024.png)

包名带 estmob，是 Paprika 食谱管理应用的数据

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/025.png)



## 16\.承上题，陈民浩的手机\(CHAN\_MH\_mobile\.zip\)是传送方或是接收方?

B

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/026.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/027.png)

A\. 传送方

B\. 接收方

C\. 传送及接收方

## 17\.根据传送档案的名称，判断是以下哪一类型? \(单选\)

A\. 屏幕截图

B\. 手机拍摄影片

C\. PDF文件

D\. zip压缩文件

A

接上题

## 18\.承上题，接收至哪一个装置?

A\. CHAN\_MH\_mobile\.zip

B\. blk0\_sda\.bin

C\. FUNG\_CC\_mobile\.zip

D\. LAM\_KH\_Mobile\.zip

E\. WONG\_CW\_mobile\.zip

B

接上题

## 19\.承上题，传送方是通过此文档传输软件的哪个模式作出传送?

A\. SEND\_PARTIALLY

B\. SEND\_PAPRIKA

C\. SEND\_DIRECTLY

D\. SEND\_BYCLOUD

E\. SEND\_BLUETOOTH

C

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/028.png)

## 20\.从来没有安装以下哪个网络浏览器？

BCD

A\. Safari

B\. Chrome

C\. Firefox

D\. edge

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/029.png)

## 21\.承上题，网络浏览器Safari有多少个书签\(Bookmark\)记录？\(请以阿拉伯数字作答\)

9

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/030.png)

## 22\.承上题，曾经通过Safari浏览器用下列哪一个字词进行过搜索?

ABC

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/031.png)

A\. 非法处理尸体最高刑罚

B\. escape room hong kong

C\. cypto wallet

D\. 非法处理尸体

## 23\.有多少个图片文件曾经储存到iCloud?\(请以阿拉伯数字作答\)

2



## 24\.相册中有多少张图片是通过屏幕截图功能取得？\(请以阿拉伯数字作答\)

15

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/032.png)

## 25\.请参考参赛材料FUNG\_CC\_mobile\.zip回答以下问题这部智能手机连接过多少个 Wi\-Fi 网络？\(请以阿拉伯数字作答\)

2

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/033.png)

## 26\.这部智能手机曾经连接过以下哪个无线网络？i\) THREE\_WIFIii\) wanchaiiii\)iPhone\(2\)iv\) Router

A\. 只有 i\)

B\. 只有 ii\) 和 iii\)

C\. 只有 ii\), iii\) 和 iv\)

D\. 以上皆是

B

见上题

## 27\.这部手提手机最早连接\(非热点\)Wi\-Fi的时间是什么？\(请以GMT \+8时区及以下格式作答: yyyy\-MM\-dd HH:mm:ss\)

**2025\-04\-15 19:29:23**

Wi\-Fi 相关数据不在 App 沙盒里，而在系统目录 /var/preferences/SystemConfiguration/ 下

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/034.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/035.png)

补充：

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/036.png)

com\.apple\.wifi\-private\-mac\-networks\.plist \(1\.11 KB\)

如果用户开启了“私有 Wi\-Fi 地址”功能，这个文件会非常详细。

## 28\.承上题，请列出这个连接的服务集识别码\(SSID\)?\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

wanchai

SSID 就是无线网络的名称，你可以通过设备的 Wi\-Fi 设置或路由器管理界面查看。

法一：

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/037.png)

法二：

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/038.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/039.png)

# 29\.承上题，请列出这个连接的登入金钥?\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

## 30\.相册中有两张图像互换格式图片\(gif\)「IMG\_0057\.GIF」及「IMG\_0062\.GIF」，请指出由哪一个软件拍摄?

A\. Infltr

B\. Discreet

C\. Meitu

D\. Prisma

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/040.png)

## 31\.曾经以空投\(AirDrop\)方式成功传送了文件到另外一个装置，以下哪一个陈述是正确的？

A\. 传送了一个图片文件

B\. 传送了两个图片文件

C\. 传送了一个图片文件及一个文件

D\. 传送了一个图片文件及两个文件

C

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/041.png)

在iPhone上，其实有一个存储用户人际互动数据的关键数据库文件var\\mobile\\Library\\CoreDuet\\People

我们定位到这个地方

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/042.png)

/private/var/mobile/Library/CoreDuet/People/interactionC\.db

interactionC\.db是 iOS 系统的核心行为记录数据库，相当于手机的“底层行为黑匣子”它并不存储具体的聊天记录、通话语音或照片等实际内容，而是专门记录“谁（哪个联系人）、在什么时间、通过什么应用、做了什么事”的交互日志。

它像一个超级记账本，记录了设备几乎所有维度的交互元数据：

- 应用启动与退出：你在几点几分打开了哪个 App，使用了多久。

- 通讯交互日志：与通讯录里的谁打过电话、发过 iMessage 或 FaceTime（注意：只记录时间、联系人和频率，不记录文字和录音）。

- 系统服务交互：如解锁屏幕、点击通知、使用 Siri 查询、查看日历日程等。

- Safari 浏览器活动：记录了你访问过的网页标题或搜索记录。

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/043.png)

- 第2行 \(Z\_PK 270\)：`com.apple.mobileslideshow` 调用了 `com.apple.UIKit.activity.AirDrop`

    - 解读：这是系统自带的“照片”App（`mobileslideshow`）在某一时刻使用了“隔空投送”（`AirDrop`）功能。系统记录了这次“调用行为”，但不会把投送的照片实体保存在这里。

- 第3行 \(Z\_PK 271\)：`com.apple.DocumentsApp` 调用了 `com.apple.UIKit.activity.AirDrop`

    - 解读：这是系统自带的“文件”App（`DocumentsApp`）在某一时刻使用了“隔空投送”功能。



## 32\.原生APP「相片」中，有一个图片文件曾经通过空投"AirDrop"方式成功传送，请指出这个图片文件的文件全名\(请包含扩展名，依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

IMG\_0083\.HEIC

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/044.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/045.png)





## 33\.承上题，请写出这个图片文件的开始传送的日期及时间？\(请以GMT \+8时区及以下格式作答: yyyy\-MM\-dd HH:mm:ss\)

2025\-04\-17 09:10:03

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/046.png)

ZLASTSHAREDDATE 的意思是“最后分享时间”。

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/047.png)



## 34\.请指出哪一个多媒体文件同时储存在APP「文件」\(套件识别码: com\.apple\.DocumentsApp\)及APP「照片」\(套件识别码: com\.apple\.mobileslideshow\)中？\(请包含扩展名，依照参赛材料中的原文作答，注意区分大小写、空格及符号\)】

IMG\_0010\.MOV

套件识别码，不知道是啥，上网看看别的师傅的wp原来是找到文件和照片这两个app的包的目录然后看看有哪些文件是重复的两个包里都有的

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/048.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/049.png)

补充：

![屏幕截图 2026\-11\-05 153851\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/050.png)

1. DCIM \(113\)：这是最关键的文件夹，全称是 Digital Camera Images（数字相机图像）。它存放了你用 iPhone 或 iPad 摄像头拍摄的所有原始照片和视频。括号里的 `(113)` 通常表示里面有 113 个子文件夹（例如 `100APPLE`, `101APPLE` 等）。

2. iTunes\_Control \(5\)：这是苹果与电脑（特别是旧版 iTunes）同步多媒体文件时创建的专用文件夹。通常里面包含一个 `Music` 文件夹，存放通过 iTunes 同步导入的 MP3、MP4 等多媒体文件。

3. Books \(2\)：存放通过 Apple Books（图书应用）导入或购买的电子书（如 `.epub`, `.pdf` 格式）。

4. Downloads \(3\)：系统或某些应用的临时下载目录，存放着部分下载文件（3个文件或子文件夹）。

5. MediaAnalysis \(4\)：这是系统后台进程使用的文件夹，用于对媒体文件（如照片、视频）进行分析、生成缩略图或进行内容分类，通常是隐藏的缓存数据。

6. PhotoData \(245\)：这是 iOS “照片”应用程序的核心数据库和缓存文件夹。它不包含你拍摄的原片（原片在 DCIM），但存放着照片应用里的相册信息、收藏夹数据、编辑历史、AI 识别索引等。括号里的 `(245)` 说明这里面包含了 245 个文件或子文件夹，通常这个文件夹占用的空间会比较大。

7. Radio \(3\)：存放与 Apple Music 收音机功能或某些播客/音频相关的缓存或下载文件。

## 35\.请指出在APP「照片」\(套件识别码: com\.apple\.mobileslideshow\)中的图片文件「IMG\_0079\.JPG」是由哪一个APP拍摄？\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

Discreet

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/051.png)

## 36\.承上题，已知该图片文件是由上述APP所拍摄，并其后储存在APP「照片」\(套件识别码: com\.apple\.mobileslideshow\)成「IMG\_0079\.JPG」，请问该图片的原文件名称？ \(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

DiscreetCameraApp\_1744790959352\.png

全局索引discreet，跳转到源文件

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/052.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/053.png)



## 37\.承上题，请指出原文件的建立时间？\(请以GMT \+8时区及以下格式作答: yyyy\-MM\-dd HH:mm:ss\)

2025\-04\-16 16:09:19

见上题

## 38\.请指出在APP「照片」\(套件识别码: com\.apple\.mobileslideshow\)中，储存多媒体文件「IMG\_0014\.MOV」与储存「IMG\_0016\.MOV」之间有没有其他多媒体文件储存到APP「照片」中？

B

A\. 有

B\. 没有

C\. 有拍摄，但没有储存

D\. 无法确认

看师傅们的wp都在说C\_PK的值是连在一起的所以他们是紧紧挨着中间没有别的文件

## 39\.承上题，以下哪个陈述是正确描述上一题的答案？

A\. 制作多媒体文件「IMG\_0015\.MOV」时，直接储存到隐藏相册中

B\. 制作作多媒体文件「IMG\_0015\.MOV」时，直接上传到iCloud

C\. 制作多媒体文件「IMG\_0014\.MOV」时用了缩时摄影

D\. 制作多媒体文件「IMG\_0015\.MOV」时名称被更改为「IMG\_0016\.MOV」

C

## 40\.APP「照片」\(套件识别码: com\.apple\.mobileslideshow\)中，「IMG\_0027\.HEIC」的原地理位置信息\(WGS84\)是？

\(22\.2826216666667, 114\.168525\)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/054.png)

## 41\.曾经通过网络浏览器「Safari」下载了多少个图片文件？

B

A\. 1

B\. 2

C\. 3

D\. 4

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/055.png)

## 42\.多媒体文件「 IMG\_0004\.MOV」曾被修改后再储存成另一个文件，该文件名称是?

A\. IMG\_0085\.mov

B\. IMG\_0086\.mov

C\. IMG\_0087\.mov

D\. IMG\_0088\.mov

A

哦从火眼检材分析里面没有发现这个IMG\_0004\.MOV，这样只能把原始的数据导入DB看元数据分析

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/056.png)

找他的z\_pk\(相当于他的身份证）补充：Z\_PK 是数据库系统自动生成的“自增ID”。当你录像时，系统创建了它，并分配了 82 这个ID。哪怕你后来把名字改成“张三\.mp4”，只要数据库系统认为这还是同一个文件，它就会保留 82 这个ID不变。

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/057.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/058.png)

## 43\.曾经通过人工智能聊天APP "POE"查询一个问题，请列出这个问题的完整句子？\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

What’s that mean

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/059.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/060.png)

导出

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/061.png)

## 44\.承上题，请指出提问的日期及时间\(答题格式: yyyy\-MM\-dd HH:mm:ss 作答, GMT\+8哦\)

2025\-04\-16 13:50:06

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/062.png)

## 45\.承上题，当时使用的是哪一个机器人?\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

gpt4\_1\_mini

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/063.png)

## 46\.承上题，当时的使用者名称是？\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

Duncan

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/064.png)

## 47\.请指出即时通讯软件"WeChat"的 "WeChat ID"\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

wxid\_c9xyspglub7512

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/065.png)

## 48\.承上题，这个"WeChat ID"关注了多少个「视频号」？

2

finderContactTable3只有这个表里面有视频号的信息

FOLLOW是关注数据

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/066.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/067.png)

## 49\.请指出即时通讯软件WhatsApp的WhatsApp  ID\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

85254974406@s\.whatsapp\.net

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/068.png)

## 50\.即时通讯软件WhatsApp中，封存了下列哪个聊天群？

A\. 凤凰VIP会员心得交流群

B\. 币淘 群组1

C\. Sportsmen

D\. Titus Wong Manson Finance

A

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/069.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/070.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/071.png)



## 51\.即时通讯软件WhatsApp中，总共追踪了多少个频道？\(请以阿拉伯数字作答\)

19

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/072.png)

## 52\.即时通讯软件「WhatsApp」中，下列哪个是群组 "Investors" 的管理员？i\) 85254974406@s\.whatsapp\.netii\) 85260927726@s\.whatsapp\.netiii\) 85254961408@s\.whatsapp\.net

B

A\. 只有 i\)

B\. 只有 i\) 和 ii\)

C\. 只有 ii\) 和 iii\)

D\. 以上皆是

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/073.png)

## 53\.即时通讯软件「WhatsApp」中，群组 "Investors" 的群组ID？\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

120363417204753192@g\.us

见上题

## 54\.即时通讯软件「WhatsApp」中，「社群」名称是什么？\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

We are 3

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/074.png)

## 55\.承上题，请指出这个社群的群组图案的哈希值（SHA256格式）。

A\. B1A3706C574F81A3EE084FB9509997E06349E86D904D1DC10B879D1D5ED83125

B\. B8BA258402925E139CAFBBBBBC809EC160B70BB03DBD4D0F3063F58F69D0B956

C\. E43ADC646295BC5011577D4E733B6289D31A5E11ACB45285BE1FF530260DF383

D\. 20E64C78F9926548CEEFB1783991A4AD71A6631F3C86002254342E323A898C6A

A

`/var/mobile/Applications/``group.net``.wh``atsapp.WhatsApp.shared/Media/Profile/1744811344-1744811344.jpg` 为该社群的头像:        

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/075.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/076.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/077.png)

## 56\.即时通讯软件「WhatsApp」中，找出WhatsApp ID:85254961408@s\.whatsapp\.net曾经是在而现在已经不在的群组，请指出该群组的名称。\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

Sportsmen

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/078.png)

## 57\.即时通讯软件「WhatsApp」中，总共出现了多少个「投票」活动？\(请以阿拉伯数字作答\)

15

全局搜索投票消息

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/079.png)

# 58\.承上题，总共在多少个「投票」活动中作出了投票？\(请以阿拉伯数字作答\)

3

## 59\.即时通讯软件「WhatsApp」中，根据群组「 IQ COIN 💰💰💰💰」对话内容正在策划，哪一种犯罪计划？

A\. 诈骗

B\. 抢劫

C\. 谋杀

D\. 以上都不对

A

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/080.png)



## 60\.承上题，该群组建立者的WhatsApp ID是什么？\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

85254974406@s\.whatsapp\.net

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/081.png)

## 61\.承上题，该群组的建立时间是什么？\(请以GMT \+8时区及以下格式作答: yyyy\-MM\-dd HH:mm:ss\)

2025\-04\-25 16:57:55

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/082.png)

## 62\.根据你分析结果。三人因感情瓜葛内讧因而发生这次袭击事件。你怀疑梁燕玲曾到袭击现场，你将你的发现通知警察。警察扩大现场搜索范围，终于在案发现场附近，发现陈民浩名下的小汽车，车上发现一部智能手机。请你以参赛材料LEUNG\_YL\_Mobile\.zip回答以下问题参考LEUNG\_YL\_Mobile\.zip，该手机用作注册iCloud的email?

A\. lingleung1502@gmail\.com

B\. lingleung1502@yahoo\.com\.hk

C\. lingleung1503@gmail\.com

D\. lingl1502@gmail\.com

A

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/083.png)

## 63\.参考LEUNG\_YL\_Mobile\.zip，文件IMG\_0021\.HEIC 所拍摄的相机型号是甚么?

A\. iPhone SE \(3rd generation\)

B\. iPhone SE \(2nd generation\)

C\. iPhone 12 mini

D\. iPhone XR

A

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/084.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/085.png)

## 64\.参考LEUNG\_YL\_Mobile\.zip，文件IMG\_0005\.JPG所拍摄的座标\(WGS 84\)是多少？\(请以纬度,经度的顺序及以下格式作答xx\.xxxxxx,xx\.xxxxxx\)

**22\.337655,114\.139441**

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/086.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/087.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/088.png)

## 65\.参考LEUNG\_YL\_Mobile\.zip，文件IMG\_0022\.JPG是以下哪种方向拍摄?

A\. 不旋转

B\. 旋转180度

C\. 顺时针90度

D\. 逆时针90度

D

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/089.png)

## 66\.文件IMG\_0022\.JPG的建立时间\(GMT \+08:00\)是?\(请以GMT \+8时区及以下格式作答: yyyy\-MM\-dd HH:mm:ss\)

2025\-05\-16 11:33:15

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/090.png)

# 67\.参考LEUNG\_YL\_Mobile\.zip，在WhatsApp 与”85254974406@s\.whatsapp\.net”聊天对话中，于2025\-05\-16 11:33:39时的信息所传送的座标\(WGS 84\)是多少?\(请以纬度,经度顺序及以下格式作答xx\.xxxxxxxxxxxx, xxx\.xxxxxxxxxxxx\)

（22\.278848726819984, 114\.29062196271781）

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/091.png)

## 68\.参考LEUNG\_YL\_Mobile\.zip，在WhatsApp 与 "85254974406@s\.whatsapp\.net”聊天对话中，于2025\-05\-16 11:33:39时的信息所传送的座标\(WGS 84\)所指的餐厅英文名称是? \(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

Fai Kee Seafood Restaurant

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/092.png)

## 69\.参考LEUNG\_YL\_Mobile\.zip，在WhatsApp 中聊天群组ID 120363401289578356里，于2025\-04\-29 08:31:02，机主传送了一个PDF 文件，该PDF的内容是什么？\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

**0xe36D4bCf0132B8Dc7317C2Fb9bfa1845629F6638**

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/093.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/094.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/095.png)

## 70\.参考LEUNG\_YL\_Mobile\.zip，在WhatsApp 中聊天群组ID 120363401289578356里，有多少个参加者？

3

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/096.png)

## 71\.参考LEUNG\_YL\_Mobile\.zip，于2025\-04\-25 17:11:37 时使用WhatsApp 所拨打的手机号码是多少?

A\. 85254962307

B\. 85254961408

C\. 85254974406

D\. 85254993306

C

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/097.png)

## 72\.参考LEUNG\_YL\_Mobile\.zip，总共有多少个WhatsApp的通话记录? \(包括拨打、接收及未接来电\)

A\. 4

B\. 5

C\. 6

D\. 7

D

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/098.png)

## 73\.参考LEUNG\_YL\_Mobile\.zip，WhatsApp 聊天群组ID 120363400622997111 的群组名称是?

A\. Investors

B\. Foodies

C\. We are 3

D\. Happy Sharing within 3

D

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/099.png)



## 74\.参考LEUNG\_YL\_Mobile\.zip，WhatsApp 聊天群组Happy Sharing within 3 于2025\-04\-17 10:12:34 传送的WGS 84座标是多少?

A\. 22\.323436345441, 113\.276894376508

B\. 22\.326923370361, 114\.168403625488

C\. 21\.239876452236, 115\.925422314543

D\. 20\.124955642236, 114\.168403625488

B 

没有完全一样的。B最接近

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/100.png)

## 75\.参考LEUNG\_YL\_Mobile\.zip，Instagram 的版本是?

A\. 375\.2\.0\.15\.82 \(722575504\)

B\. 376\.1\.0\.14\.56 \(722575504\)

C\. 376\.1\.0\.27\.82 \(722575504\)

D\. 376\.0\.0\.17\.23 \(722575504\)

C

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/101.png)

## 76\.参考LEUNG\_YL\_Mobile\.zip，社交媒体软件Instagram 的安装时间?\(请以GMT\+8时区及格式YYYY\-MM\-DD hh:mm:ss作答\)

2025\-04\-26 11:50:47

同样在com\.burbn\.instagram\.plist喂给ai

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/102.png)

或者自己找

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/103.png)

## 77\.跟据你的分析，警察在香港西贡蕉坑，找到一个行李箱，内藏一名女子尸体，身上没有任何身份证明文件，裤袋内搜获一个U盘，根据法医初步检验，死者头部及颈部有明显瘀伤，相信曾发生激烈争执，死因为气管受压导致窒息，死亡时间相信是在2025\-05\-16  0900时至1000时 。调查人员初步检查这个U盘，没有发现可疑资料，现在交由你进行电子数据鉴定工作。请参考参赛材料LEUNG\_YL\_USB\.E01，答以下问题参考LEUNG\_YL\_USB\.E01，这个U盘里有多少个分区？\(请以阿拉伯数字作答\)

2

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/104.png)

我参考的这个，应该是四个分区

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/105.png)

## 78\.参考LEUNG\_YL\_USB\.E01，这个U盘里的分区结构是什么？\(请以英文大写作答\)

MBR

见上题截图分区类型

## 79\.参考LEUNG\_YL\_USB\.E01，以下哪项描述是正确的？i\) U盘的总容量是16GBii\) 文件系统包括 FAT32、exFAT 和 NTFSiii\) exFAT 分区的容量是 16GBiv\) 分区标签名是 "SanDisk"

A\. 只有 i\) 和 ii\)

B\. 只有 i\) 和 iii\)

C\. 只有 ii\) 和 iv\)

D\. 以上皆非

D

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/106.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/107.png)

## 80\.美亚杯\-80单选分值 10资格赛

参考LEUNG\_YL\_USB\.E01，以下哪项描述是正确的？i\) 此U盘曾连接到一台名为 "PC" 的电脑ii\) U盘内存有一个已加密的压缩文件iii\) 已加密的压缩文件的创建日期系 2025\-05\-15

A\. 只有 ii\)

B\. 只有 iii\)

C\. 只有 ii\) 和 iii\)

D\. 以上皆是

C

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/108.png)

补充：

可引导U盘（启动U盘）= 能让电脑从它开机的U盘。

普通U盘只能存文件；可引导U盘经过特殊制作，写入了引导程序（Bootloader）\+ 一个微型系统（如 WinPE、Linux Live）或系统安装镜像。开机时主板 BIOS/UEFI 会按启动顺序去找引导程序，把U盘排到硬盘前面，电脑就会跳过硬盘里的系统，直接从U盘启动。

关键点：

- 必须用工具制作（Rufus、Ventoy、UltraISO 等），光拷文件进去没用

- 两种模式：Legacy 走 MBR 引导扇区，UEFI 走 GPT \+ `\EFI\BOOT\BOOTX64.EFI`，不能混用

- 用途：重装系统、进 PE 修引导、磁盘分区、数据恢复、密码重置

## 81\.承上题，该压缩文件的解压密码是多少？\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

54d\#e\(nm

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/109.png)

## 82\.参考LEUNG\_YL\_USB\.E01，以下哪项描述是正确的？i\) 这是一个可引导U盘ii\) 有一个分区标签名为 "EFI"iii\) 卷标日期为 2025\-05\-15 \(UTC \+8\)iv\) 有一个分区的总容量小于 500 MB

A\. 只有 i\)

B\. 只有 i\) 和 ii\)

C\. 只有 i\), iii\) 和 iv\)

D\. 以上皆是

D

# 83\.tammy\.txt文件的内容是什么？\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/110.png)

`AP3_LEUNG_YL_USB.E01`：这是一个 EnCase 证据文件（`.E01`格式），在电子取证中，它通常是整个硬盘或U盘的精确副本（镜像）。从文件名可以看出，这是案件中一位名叫“梁燕玲”（LEUNG\_YL）的U盘证据。

## 84\.文件“xcontainer”的加密算法是什么？\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

AES\(Twofish\)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/111.png)

导出解压

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/112.png)

这个作为挂载的密钥文件导出解压

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/113.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/114.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/115.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/116.png)



## 85\.分析文档 "xcontainer" 的属性。关于此磁盘镜像，以下哪项描述是正确的？i\) 大小为 4943872 字节ii\) 文件系统是 FAT iii\) 没有嵌入式备份头iv\) 块大小为 128 位

A\. 只有 i\) 和 ii\)

B\. 只有 ii\) 和 iv\)

C\. 只有 ii\), iii\) 和 iv\)

D\. 以上皆是

B

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/117.png)

剩下的在veracrypt的加密卷属性都能看

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/118.png)

## 86\.WinPE 启动后，系统会自动将核心映像挂载在哪个虚拟机？

A\. C:

B\. D:

C\. X:

D\. Z:

X

把计算机检材给它仿真了

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/119.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/120.png)

## 87\.下列哪些 Windows PE 指令在预设环境下无法执行？i\) Powershellii\)\. Eventvwriii\)\. HostnameiV\)\. Diskpart

A\. 只有 i\) 和 ii\)

B\. 只有 iii\) 和 iv\)

C\. 只有 i\), ii\) 和 iii\)

D\. 以上皆是

C

启动 WinPE 之后尝试运行题目中的指令可验证:

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/121.png)

## 88\.必须包含哪个文件，才能启动 Windows PE环境？

A\. WEPE64\.wim

B\. install\.wim

C\. WinPE\.log

D\. hiberfil\.sys

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/122.png)



## 89\.若要判断一个U盘是否为可开机的Windows PE，以下哪些文件必须存在？i\) WEPE64\.wim 或 boot\.wimii\) bootmgriii\) EFI\\Boot\\bootx64\.efiiv\) hiberfil\.sys

A\. 只有 ii 和 iv

B\. 只有 i\), ii\) 和 iii\)

C\. 只有 i\) 和 iv\)

D\. 以上皆是

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/123.png)

## 90\.这个 WinPE U盘的操作环境 \(Operating Environment\) 是基于哪一个 Windows 版本？

A\. Windows 7

B\. Windows 8\.1

C\. Windows 10 PE

D\. Windows 11 PE

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/124.png)

## 91\.该U盘盘有一个加密的文件，该文件所用的加密软件名称是? \(只需回答软件名称，不需要回答软件版本，\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

VeraCrypt

## 92\.参考LEUNG\_YL\_USB\.E01，请列出与IQ Coin有关的虚拟钱包的地址\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号\)

0x548dafDe4B17d7d3C9485E79B3B5018801C7855E

xcontainer挂载后里面有张IQ\_1的图片扫里面的二维码得到地址

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/125.png)

![b62a15c26338b4bf377cfd913507f84e\.jpg](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/126.jpg)

加密货币截图有关题目

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/127.png)

密码是上题找到的钱包地址

![IQ\_Coin\_Transactions\_1\.jpg](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/128.jpg)

![IQ\_Coin\_type\.jpg](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/129.jpg)

## 93\.承上题，这个钱包属于哪一种加密货币\(请以英文大写作答\)

BNB

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/130.png)

## 94\.承上题，这个钱包总共有多少次存入记录？\(请以阿拉伯数字作答\)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/131.png)

## 95\.承上题，存入款项的支账地址是什么？\(请依照参赛材料中的原文作答，注意区分大小写、空格及符号

0x6144ACfdf84bbEC6bccB310516A89D4b3ee48c1A

见94题

## 96\.承上题，这项交易传送了多少BEP\-20 IQ Coin?\(请以阿拉伯数字依照参赛材料中的原文作答，注意区分大小写、空格及符号和不用标点符号 \)

1000000000

1B也就是1000000000

见94题

## 97\.助记词是由加密货币钱包生成的一系列单词，帮助用户恢复其私钥。助记词通常由12到24个单词组成

A\. 正确

B\. 错误

A

## 98\.根据你的信息警察查知这个加密钱包涉及近期一宗巨额诈骗案，请你查出这个钱包余额额度，警察将会进行冻结程序\<br\>请指出包含有疑似助记词的文件的希哈值\(MD5格式\)\(请以阿拉伯数字和英文大写作答\)

183B8E0C6365FEE834479269141A3F91

temp\.txt 里面的单词很像助记词

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/132.png)

![image\.png](https://blog-images-1538649938.cos.ap-guangzhou.myqcloud.com/meiya-qualifier-2025/133.png)



