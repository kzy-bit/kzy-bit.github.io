# Hexo 个人博客

文章用 Markdown 编写，GitHub Pages 托管生成的网站，腾讯云 COS 存放公开配图。示例文章自带一张图片，解压后就可以本地预览。

## 本地预览和写文章

安装 Node.js 24 和 Git。在解压后的 `hexo-blog` 目录打开终端。

```powershell
npm ci
npm run server
```

打开 `http://localhost:4000` 查看。在 Windows PowerShell 中，如果执行策略阻止 `npm.ps1`，可以把命令里的 `npm` 改为 `npm.cmd`。

- 在 `_config.yml` 里修改博客标题、描述，并可以加上 `author: 你的昵称`。
- 在 `source/_posts/hello-blog.md` 里修改示例文章，或打开另一个终端运行 `npx hexo new "文章标题"`，再编辑 `source/_posts/` 下生成的 Markdown 文件。
- 用 `npm run build` 生成静态页面到 `public/`。

## 发布到 GitHub Pages

1. 登录 GitHub，创建空的公开仓库，仓库名为 `你的用户名.github.io`。创建时将 README、.gitignore 和许可证选项留空。
2. 在解压后的项目目录运行以下命令，把第一行的 `YOUR_GITHUB_NAME` 换成你的 GitHub 用户名。Git 首次提交时若提示缺少作者信息，按提示设置提交显示名和邮箱。

   ```powershell
   $githubName = 'YOUR_GITHUB_NAME'
   git init -b main
   git add .
   git commit -m "Initialize Hexo blog"
   git remote add origin "https://github.com/$githubName/$githubName.github.io.git"
   git push -u origin main
   ```

3. 在仓库的 **Settings → Pages → Build and deployment** 中，将 **Source** 设为 **GitHub Actions**。
4. 打开 **Actions**，选择 **Publish Hexo to GitHub Pages**，在 `main` 分支上点击 **Run workflow**。部署成功后，**Settings → Pages** 会显示正式地址。此后，每次推送到 `main` 都会重新发布。工作流会自动给 Hexo 设置 GitHub Pages 返回的网址。

参考 [Hexo 部署到 GitHub Pages](https://hexo.io/docs/github-pages.html) 和 [GitHub Pages 工作流说明](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

## 把腾讯云 COS 用作图床

1. 在腾讯云对象存储中创建专门放公开博客配图的存储桶，把访问权限设为 **公有读私有写**。在 **文件列表** 中上传图片，建议用 `blog/2026/deep-field.jpg` 这样的路径组织文件。
2. 给存储桶绑定自己的图片子域名。在 **域名与传输管理 → 自定义源站域名** 添加域名，选择 **默认源站**，按控制台提示添加 CNAME 记录并配置 HTTPS 证书。腾讯云对绑定到中国大陆地域存储桶的域名有备案要求。2024 年起新建的桶，其默认域名会触发文件下载，使用自定义域名可正常预览图片。[腾讯云配置步骤](https://cloud.tencent.com/document/product/436/102509)
3. 在图片的文件详情中获取使用自定义域名的公开 HTTPS 地址。确认访客可以匿名访问且无需临时签名，然后把地址填进文章。也可以把项目里的 `source/_posts/hello-blog/deep-field.jpg` 上传到 COS，直接替换示例文章中的相对路径。

   ```markdown
   ![哈勃望远镜拍摄的星系群](https://img.example.com/blog/2026/deep-field.jpg)
   ```

直接通过腾讯云控制台上传图片即可。Hexo 和 GitHub Actions 只需要 Markdown 中的图片地址，源码和仓库都无需配置腾讯云密钥。首次发布前可以用本地预览确认图片出现在正文里。
