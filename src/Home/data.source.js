import React from 'react';
export const Nav10DataSource = {
  wrapper: { className: 'header1 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header1-logo',
    children:
      'http://www.zzuli.edu.cn/_upload/tpl/03/a9/937/template937/images/logo.png',
  },
  Menu: {
    className: 'header1-menu',
    children: [
      { name: 'item0', a: { children: '导航一', href: '' } },
      { name: 'item1', a: { children: '导航二', href: '' } },
      { name: 'item2', a: { children: '导航三', href: '' } },
      { name: 'item3', a: { children: '导航四', href: '' } },
    ],
  },
  mobileMenu: { className: 'header1-mobile-menu' },
  help: { className: 'help', children: '' },
  user: {},
};
export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title jzav2ztdo3a-editor_css',
    children: (
      <>
        <p>郑州轻工业大学&nbsp;&nbsp;</p>
        <p>在线考试系统</p>
      </>
    ),
  },
  content: {
    className: 'banner0-content',
    children: (
      <>
        <p>一站式考试解决方案</p>
      </>
    ),
  },
  button: { className: 'banner0-button', children: 'Learn More' },
};
export const Teams00DataSource = {
  wrapper: { className: 'home-page-wrapper teams0-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page teams0' },
  BannerAnim: {
    className: 'banner-anim',
    children: [
      {
        name: 'elem0',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          children: [
            {
              name: 'image',
              children:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565693619128&di=ed21bdaf2b817fe4e02d0d6a7ad1f47e&imgtype=0&src=http%3A%2F%2Fwww.hbjhart.com%2Fd%2Ffile%2Fjianghanyishuzhiyexueyuantuanzhiwei%2Fxinwendongtai%2F2018-11-13%2F1c3da8079ae885b724598547aa1cb289.jpg',
              className: 'teams0-image',
            },
            {
              name: 'content',
              children: (
                <>
                  <p>
                    独立思考能力是科学研究和创造发明的一项必备才能.在历史上任何一个较重要的科学上的创造和发明,都是和创造发明者的独立地深入地看问题的方法分不开的。
                  </p>
                </>
              ),
              className: 'teams0-content',
            },
            {
              name: 'title',
              children: (
                <>
                  <p>华罗庚</p>
                </>
              ),
              className: 'teams0-h1',
            },
            {
              name: 'content2',
              children: (
                <>
                  <p>
                    <br />
                  </p>
                </>
              ),
              className: 'teams0-content',
            },
          ],
        },
      },
    ],
  },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>一站式服务</p>
          </>
        ),
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
          },
          title: { className: 'content0-title', children: '一站式业务接入' },
          content: {
            children: (
              <>
                <p>一键接入，全平台考试通用</p>
              </>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
          },
          title: {
            className: 'content0-title',
            children: (
              <>
                <p>一站式统计分析</p>
              </>
            ),
          },
          content: {
            children: (
              <>
                <p>自动生成考试结果</p>
              </>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
          },
          title: {
            className: 'content0-title',
            children: (
              <>
                <p>一站式数据处理</p>
              </>
            ),
          },
          content: {
            children: (
              <>
                <p>
                  定制数据分析，快速掌握考试情况<br />
                </p>
              </>
            ),
          },
        },
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>提供专业的服务</p>
          </>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <>
            <p>基于郑州轻工业大学强大的基础资源</p>
          </>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>数据透明</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>数据云端处理，快速准确。</p>
              </>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>可配置化</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>支持单题，整卷答题模式，有效防止作弊。</p>
              </>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>高度智能</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>智能批改瞬间完成，数据准确无误。</p>
              </>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '移动' },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>同时支持电脑端和移动端。摆脱设备限制。</p>
              </>
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>多样化</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>
                  支持各种常见题型，提供普通试卷，随机试卷等多种类型。并且支持试题随机混排。
                </p>
              </>
            ),
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>数据分析</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>一站式数据分析，全方位掌握学习情况。</p>
              </>
            ),
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <>
        <span>
          ©2018 <a href="http://www.zzuli.edu.cn">郑州轻工业大学</a> All Rights
          Reserved
        </span>
      </>
    ),
  },
};
