<template>
  <el-row class="bodywidth pc_header">
    <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">LOGO</el-col>
    <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
      <nav class="animenu" role="navigation" aria-label="Menu">
        <button class="animenu__toggle">
          <span class="animenu__toggle__bar"></span>
          <span class="animenu__toggle__bar"></span>
          <span class="animenu__toggle__bar"></span>
        </button>

        <ul class="animenu__nav">
          <li>
            <router-link tag="a" to="/BasicTrade">Basic trade</router-link>
          </li>
          <li>
            <router-link tag="a" to="/BasicTrade">Advanced trade</router-link>
          </li>
          <li>
            <router-link tag="a" to="/BasicTrade">Support</router-link>
          </li>
          <li>
            <router-link tag="a" to="/BasicTrade">Trading tutorial</router-link>
          </li>
          <li>
            <router-link tag="a" to="/BasicTrade">News</router-link>
          </li>
          <li>
            <router-link tag="a" to="/BasicTrade">F.A.Q</router-link>
          </li>
          <li>
            <router-link tag="a" to="/BasicTrade">Coinilb</router-link>
          </li>
          <li>
            <router-link tag="a" to="/BasicTrade">Sign in</router-link>
          </li>
          <li>
            <router-link tag="a" to="/BasicTrade">Sign up</router-link>
          </li>
          <li>
            <div class="language_img"></div>
            <el-popover
              placement="bottom"
              width="80"
              trigger="click">
              <ul class="language_list">
                <li><div class="language_img_cn"></div><span>CN</span></li>
                <li><div class="language_img_ko"></div><span>KO</span></li>
                <li><div class="language_img_ja"></div><span>JA</span></li>
                <li><div class="language_img_en"></div><span>EN</span></li>
              </ul>
              <el-button type="text" slot="reference">EN</el-button>
            </el-popover>
          </li>
        </ul>
      </nav>
    </el-col>
  </el-row>
</template>

<script>
  function init() {
    var animenuToggle = document.querySelector('.animenu__toggle'),
      animenuNav = document.querySelector('.animenu__nav'),
      hasClass = function (elem, className) {
        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
      },
      toggleClass = function (elem, className) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (hasClass(elem, className)) {
          while (newClass.indexOf(' ' + className + ' ') >= 0) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
          }
          elem.className = newClass.replace(/^\s+|\s+$/g, '');
        } else {
          elem.className += ' ' + className;
        }
      },
      animenuToggleNav = function () {
        toggleClass(animenuToggle, "animenu__toggle--active");
        toggleClass(animenuNav, "animenu__nav--open");
      }

    if (!animenuToggle.addEventListener) {
      animenuToggle.attachEvent("onclick", animenuToggleNav);
    }
    else {
      animenuToggle.addEventListener('click', animenuToggleNav);
    }
  }

  export default {
    components: {},
    props: {},
    data() {
      return {}
    },
    watch: {},
    computed: {},
    methods: {},
    created() {
    },
    mounted: init
  }
</script>

<style scoped>
  *,
  *:after,
  *:before {
    box-sizing: border-box
  }

  .animenu__toggle {
    display: none;
    cursor: pointer;
    background-color: #111;
    border: 0;
    padding: 10px;
    height: 40px;
    width: 40px
  }

  .animenu__toggle:hover {
    background-color: #0186ba
  }

  .animenu__toggle__bar {
    display: block;
    width: 20px;
    height: 2px;
    background-color: #fff;
    transition: 0.15s cubic-bezier(0.75, -0.55, 0.25, 1.55)
  }

  .animenu__toggle__bar + .animenu__toggle__bar {
    margin-top: 4px
  }

  .animenu__toggle--active .animenu__toggle__bar {
    margin: 0;
    position: absolute
  }

  .animenu__toggle--active .animenu__toggle__bar:nth-child(1) {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
  }

  .animenu__toggle--active .animenu__toggle__bar:nth-child(2) {
    opacity: 0
  }

  .animenu__toggle--active .animenu__toggle__bar:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg)
  }

  .animenu {
    display: block;
    text-align: right;
  }

  .animenu ul {
    padding: 0;
    list-style: none;
    font: 0 -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
  }

  .animenu li,
  .animenu a {
    display: inline-block;
    font-size: 15px
  }

  .animenu a {
    color: #aaa;
    text-decoration: none
  }

  .animenu__nav {
    text-align: left;
    height: 95px;
    line-height: 95px !important;
    display: flex;
    justify-content: space-around;
  }

  .animenu__nav > li {
    position: relative;
    /*border-right: 1px solid #444*/
  }

  .animenu__nav > li > a {
    /*padding: 0 30px;*/
    /*text-transform: uppercase*/
  }

  .animenu__nav > li:hover > ul,
  .animenu__nav > li:focus-within > ul {
    opacity: 1;
    visibility: visible;
    margin: 0
  }

  .animenu__nav > li:hover > a,
  .animenu__nav > li:focus-within > a {
    color: #fff
  }

  /*.animenu__nav__hasDropdown:before {*/
  /*content: "";*/
  /*position: absolute;*/
  /*border: 4px solid transparent;*/
  /*border-bottom: 0;*/
  /*border-top-color: currentColor;*/
  /*top: 50%;*/
  /*margin-top: -2px;*/
  /*right: 10px*/
  /*}*/

  .animenu__nav__dropdown {
    min-width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    margin: 20px 0 0 0;
    background-color: #373737;
    transition: margin .15s, opacity .15s
  }

  .animenu__nav__dropdown > li {
    width: 100%;
    border-bottom: 1px solid #515151
  }

  .animenu__nav__dropdown > li:first-child > a:after {
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    left: 1em;
    top: -6px;
    border: 6px solid transparent;
    border-top: 0;
    border-bottom-color: inherit
  }

  .animenu__nav__dropdown > li:last-child {
    border: 0
  }

  .animenu__nav__dropdown a {
    padding: 10px;
    width: 100%;
    border-color: #373737
  }

  .animenu__nav__dropdown a:hover,
  .animenu__nav__dropdown a:focus-within {
    background-color: #0186ba;
    border-color: #0186ba;
    color: #fff
  }

  @media screen and (max-width: 850px) {
    .animenu__toggle {
      display: inline-block
    }

    .animenu__nav,
    .animenu__nav__dropdown {
      display: none
    }

    .animenu__nav {
      margin: 10px 0;
      line-height: normal !important;
      display: none !important;
    }

    .animenu__nav > li {
      width: 100%;
      border-right: 0;
      border-bottom: 1px solid #515151
    }

    .animenu__nav > li:last-child {
      border: 0
    }

    .animenu__nav > li:first-child > a:after {
      content: '';
      position: absolute;
      height: 0;
      width: 0;
      right: 1em;
      top: -6px;
      border: 6px solid transparent;
      border-top: 0;
      border-bottom-color: inherit
    }

    .animenu__nav > li > a {
      width: 100%;
      padding: 10px;
      border-color: #111;
      position: relative
    }

    .animenu__nav a:hover {
      background-color: #0186ba;
      border-color: #0186ba;
      color: #fff
    }

    .animenu__nav__dropdown {
      position: static;
      background-color: #373737;
      margin: 0;
      transition: none;
      visibility: visible;
      opacity: 1
    }

    .animenu__nav__dropdown > li:first-child > a:after {
      content: none
    }

    .animenu__nav__dropdown a {
      padding-left: 20px;
      width: 100%
    }
  }

  .animenu__nav--open {
    display: block !important
  }

  .animenu__nav--open .animenu__nav__dropdown {
    display: block
  }
</style>
