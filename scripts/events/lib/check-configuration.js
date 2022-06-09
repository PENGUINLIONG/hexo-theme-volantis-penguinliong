module.exports =(hexo) => {
  try {
    let config = hexo.config;
    let themeConfig = hexo.theme.config;
    if (!config.title) {
      return `title 未配置！
请在站点配置 _config.yml 中配置 title
see: https://hexo.io/zh-cn/docs/configuration
title is not configured!`
    }
    if (!config.description) {
      return `description 未配置！
请在站点配置 _config.yml 中配置 description
description主要用于SEO，告诉搜索引擎一个关于您站点的简单描述，通常建议在其中包含您网站的关键词。
see: https://hexo.io/zh-cn/docs/configuration
description is not configured!`
    }
    if (`backstretch` in themeConfig?.plugins) {
      return `jquery.backstretch 在 5.0 版本被移除, 被 parallax 替代
jquery.backstretch was removed in version 5.0, replaced by parallax
see: https://volantis.js.org/v5/theme-settings/#幻灯片背景-视差滚动效果`
    }
    if ("valinecount" in themeConfig?.article?.body?.top_meta||"valinecount" in themeConfig?.article?.body?.bottom_meta||"valinecount" in themeConfig?.article?.body?.meta_library) {
      return `ValineCount 在 5.0 版本被移除
ValineCount has been removed in version 5.0
see: https://volantis.js.org/v5/theme-settings/#文章布局配置`
    }
    if (themeConfig?.comments?.service=="valine"||themeConfig?.comments?.service=="minivaline") {
      return `Valine 在 5.0 版本被移除
Valine has been removed in version 5.0
see: https://volantis.js.org/v5/theme-settings/#选择评论系统`
    }
  } catch (error) {}
  hexo.log.info(`Check environment configuration success!`);
  return true;
};

