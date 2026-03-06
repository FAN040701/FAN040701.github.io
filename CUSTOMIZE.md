# 个人主页定制指南

本网站基于 [Martin Saveski 的 Jekyll 模板](https://github.com/msaveski/www_personal) 构建。

## 本地预览

```bash
cd /path/to/website
jekyll serve --port 4000
```

浏览器访问 http://127.0.0.1:4000  
Jekyll 开启了自动重建，修改文件保存后**刷新浏览器**即可看到最新效果。

---

## 需要修改的文件

### 1. `_data/main_info.yaml` — 基本信息

| 字段 | 说明 |
|------|------|
| `name` | 你的姓名 |
| `title` | 职位 / 研究方向 / 所在机构 |
| `email` | 联系邮箱 |
| `profile_pic` | 头像图片路径（相对于网站根目录） |
| `bsky` | Bluesky 主页链接（不用可留空）|
| `twitter` | Twitter / X 主页链接 |
| `linkedin` | LinkedIn 主页链接 |
| `github` | GitHub 主页链接 |
| `google_scholar` | Google Scholar 主页链接 |
| `google_analystics_tracking_id` | Google Analytics ID（可选，不用留空）|

---

### 2. `index.html` — 自我介绍（Bio）

找到 `<!-- ========== BIO ========== -->` 区块，修改其中的文字为你自己的研究方向和个人背景介绍。

---

### 3. `_data/publications.yaml` — 论文列表

每篇论文一个条目，格式如下：

```yaml
- title: "论文标题"
  authors: "<b>你的姓名</b>, 合作者 A, 合作者 B"
  venue: "CONF'24: 会议/期刊全名. 2024."
  paper_pdf: "/assets/publications/paper1/paper.pdf"  # 或外部 URL
  code: "https://github.com/yourrepo"   # 可选
  slides: "/assets/publications/paper1/slides.pdf"   # 可选
  poster: "/assets/publications/paper1/poster.pdf"   # 可选
  video: "https://youtube.com/..."      # 可选
  data: "https://..."                   # 可选
  selected: y  # y = 出现在"精选"标签页；n = 只在"全部"中显示
```

论文 PDF 等附件放入 `assets/publications/论文文件夹/` 目录下。

---

### 4. `_data/experience.yaml` — 经历时间线

每条经历一个条目，`category` 决定显示在时间线的哪一侧：

| `category` 值 | 显示位置 | 适用场景 |
|---------------|----------|----------|
| `work`        | 左侧     | 工作、实习 |
| `school`      | 右侧     | 教育经历 |

```yaml
- place: "单位 / 学校名称"
  time: "2020 - 2024"         # 时间段
  title: "职位 / 学历"
  subtitle: "部门 / 专业"      # 支持 <br/> 换行
  category: "work"            # 或 "school"
```

---

### 5. 头像照片

将你的照片文件放入 `assets/profile-pics/` 目录，然后在 `_data/main_info.yaml` 的 `profile_pic` 字段中填写对应路径，例如：

```yaml
profile_pic: "/assets/profile-pics/my_photo.jpg"
```

---

### 6. CV / 简历（可选）

将简历 PDF 文件放到：

```
assets/cv/cv_web.pdf
```

`index.html` 中已有指向该路径的下载链接，放入文件后即自动生效。

---

### 7. `_layouts/default.html` — 导航栏（可选）

如需增减导航栏的链接项，编辑以下区块：

```html
<ul class="navbar-list">
  <li class="navbar-item"><a class="navbar-link" href="/index.html#bio">Bio</a></li>
  <li class="navbar-item"><a class="navbar-link" href="/index.html#publications">Publications</a></li>
  <li class="navbar-item"><a class="navbar-link" href="/index.html#resume">Vita</a></li>
</ul>
```
### 8. `_layouts/default.html` footer


---

## 目录结构说明

```
.
├── _data/                  # 数据文件（主要在这里修改内容）
│   ├── main_info.yaml      # 基本个人信息
│   ├── publications.yaml   # 论文列表
│   └── experience.yaml     # 经历时间线
├── _layouts/
│   └── default.html        # 页面整体布局（含导航栏、页脚）
├── assets/
│   ├── profile-pics/       # 头像图片
│   ├── publications/       # 论文 PDF、幻灯片等附件
│   └── cv/                 # 简历 PDF
├── libs/                   # CSS / JS 依赖库（无需修改）
├── index.html              # 主页内容（Bio 区块在此修改）
└── _config.yml             # Jekyll 配置（baseurl 等）
```
