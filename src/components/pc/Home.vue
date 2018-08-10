<template>
    <div id="home" class="home">
      <div class="header_home_background"></div>
      <canvas id="canvas" class="canvas"></canvas>
      <div class="main-greeting-wrapper">
        <el-row>
          <el-col :span="24"><div class="main-greeting-wrapper_txt1"><span>Healthy Volume</span></div></el-col>
          <el-col :span="24"><div class="main-greeting-wrapper_txt2"><span>Real trading</span></div></el-col>
        </el-row>
      </div>
      <div class="begin-traiding">
        <el-row :gutter="100">
          <el-col :span="24">
            <h3>Easy way to begin trading</h3>
            <span>The easiest way to start trading from registration to the beginning of trading</span>
          </el-col>
          <el-col :span="8">
            <div class="begin-traiding-step-img">
              <img src="../../assets/images/illustration_registration.svg" alt="">
            </div>
            <h5>REGISTRATION</h5>
            <span>Enter your details on our website and begin to trade with our stock exchange</span>
          </el-col>
          <el-col :span="8">
            <div class="begin-traiding-step-img">
              <img src="../../assets/images/illustration_registration.svg" alt="">
            </div>
            <h5>REGISTRATION</h5>
            <span>Enter your details on our website and begin to trade with our stock exchange</span>
          </el-col>
          <el-col :span="8">
            <div class="begin-traiding-step-img">
              <img src="../../assets/images/illustration_registration.svg" alt="">
            </div>
            <h5>REGISTRATION</h5>
            <span>Enter your details on our website and begin to trade with our stock exchange</span>
          </el-col>
        </el-row>
      </div>
      <div class="main-start">
        <div class="container-fluid">
          <div class="main-universal-description">
            <h3>Start trading today</h3>
            <span>Be always up to date with the latest news</span>
          </div>
          <div class="main-universal-start">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item prop="email">
                <el-input placeholder="Enter your email"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">Start trading</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <div class="main-news">
        <div class="container-fluid">
          <div class="main-news-wrapper">
            <div class="main-universal-description">
              <h3>Latest world news crypto-currency</h3>
              <span>Be always up to date with the latest news</span>
            </div>
            <div class="main-universal-start">
              <el-button>Read more</el-button>
            </div>
            <div class="main-news-list">
              <el-row>
                <el-col :span="8">
                  <el-card class="box-card">
                    <div class="new-wrap">
                      <div class="new-date sprite">
                        <i class="el-icon-date"></i>
                        <span>07.08.18</span>
                      </div>
                      <div class="new-preview-desc">
                        <h5>A Pro-Crypto Gamer Hid Free Bitcoin in No Man’s Sky</h5>
                        <p>Looking to find some free bitcoin? A pair of planets on the No Man’s Sky action survival game are hiding 0.004 BTC, according to Hackernoon. Players can claim the bitcoin by finding the corresponding communications stations in the game.</p>
                        <el-button type="text">Continue reading</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="8">
                  <el-card class="box-card">
                    <div class="new-wrap">
                      <div class="new-date sprite">
                        <i class="el-icon-date"></i>
                        <span>07.08.18</span>
                      </div>
                      <div class="new-preview-desc">
                        <h5>A Pro-Crypto Gamer Hid Free Bitcoin in No Man’s Sky</h5>
                        <p>Looking to find some free bitcoin? A pair of planets on the No Man’s Sky action survival game are hiding 0.004 BTC, according to Hackernoon. Players can claim the bitcoin by finding the corresponding communications stations in the game.</p>
                        <el-button type="text">Continue reading</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="8">
                  <el-card class="box-card">
                    <div class="new-wrap">
                      <div class="new-date sprite">
                        <i class="el-icon-date"></i>
                        <span>07.08.18</span>
                      </div>
                      <div class="new-preview-desc">
                        <h5>A Pro-Crypto Gamer Hid Free Bitcoin in No Man’s Sky</h5>
                        <p>Looking to find some free bitcoin? A pair of planets on the No Man’s Sky action survival game are hiding 0.004 BTC, according to Hackernoon. Players can claim the bitcoin by finding the corresponding communications stations in the game.</p>
                        <el-button type="text">Continue reading</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        components: {

        },
        props: {},
        data() {
            return {}
        },
        watch: {},
        computed: {},
        methods: {},
        created() {
        },
      mounted() {
        var canvas = document.querySelector('canvas'),
          ctx = canvas.getContext('2d')
        canvas.width = window.innerWidth;
        canvas.height = 500;
        ctx.lineWidth = .3;
        ctx.strokeStyle = (new Color(150)).style;

        // var mousePosition = {
        // 	x: 30 * canvas.width / 100,
        // 	y: 30 * canvas.height / 100
        // };
        var mousePosition = {
          x:  canvas.width - 100,
          y:  canvas.height - 60
        };

        var dots = {
          nb: 299,
          distance: 100,
          d_radius: 150,
          array: []
        };

        function colorValue(min) {
          return Math.floor(Math.random() * 255 + min);
        }

        function createColorStyle(r,g,b) {
          return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
        }

        function mixComponents(comp1, weight1, comp2, weight2) {
          return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
        }

        function averageColorStyles(dot1, dot2) {
          var color1 = dot1.color,
            color2 = dot2.color;

          var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
            g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
            b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
          // return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
          return createColorStyle(40, 154, 222);
        }

        function Color(min) {
          min = min || 0;
          this.r = colorValue(min);
          this.g = colorValue(min);
          this.b = colorValue(min);
          // this.style = createColorStyle(this.r, this.g, this.b);
          this.style = createColorStyle(40, 154, 222);
        }

        function Dot(){
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;

          this.vx = -.5 + Math.random();
          this.vy = -.5 + Math.random();

          this.radius = Math.random()*1.5;

          this.color = new Color();
        }

        Dot.prototype = {
          draw: function(){
            ctx.beginPath();
            ctx.fillStyle = this.color.style;
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
          }
        };

        function createDots(){
          for(var i = 0; i < dots.nb; i++){
            dots.array.push(new Dot());
          }
        }

        function moveDots() {
          for(var i = 0; i < dots.nb; i++){

            var dot = dots.array[i];

            if(dot.y < 0 || dot.y > canvas.height){
              dot.vx = dot.vx;
              dot.vy = - dot.vy;
            }
            else if(dot.x < 0 || dot.x > canvas.width){
              dot.vx = - dot.vx;
              dot.vy = dot.vy;
            }
            dot.x += dot.vx/4;
            dot.y += dot.vy/4;
          }
        }

        function connectDots() {
          for(var i = 0; i < 60; i++){
            for(var j = 0; j < 60; j++){
              var i_dot = dots.array[i];
              var j_dot = dots.array[j];

              if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
                if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
                  ctx.beginPath();
                  ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
                  ctx.moveTo(i_dot.x, i_dot.y);
                  ctx.lineTo(j_dot.x, j_dot.y);
                  ctx.stroke();
                  ctx.closePath();
                }
              }
            }
          }
        }

        function drawDots() {
          for(var i = 0; i < dots.nb; i++){
            var dot = dots.array[i];
            dot.draw();
          }
        }

        function animateDots() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          moveDots();
          connectDots();
          drawDots();

          requestAnimationFrame(animateDots);
        }

        //----------------------跟着鼠标动--------------------
        document.getElementById('home').addEventListener('mousemove', function(e){
          mousePosition.x = e.pageX;
          mousePosition.y = e.pageY;
        });

        document.getElementById('home').addEventListener('mouseleave', function(e){
          mousePosition.x = canvas.width / 2;
          mousePosition.y = canvas.height / 2;
        });
        //----------------------跟着鼠标动--------------------

        createDots();
        requestAnimationFrame(animateDots);

      }
    }
</script>

<style scoped>

</style>
