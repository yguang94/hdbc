const canvasStar = class canvasStar {
    star (id, SHeight, SWidth) {
        let flag = navigator.userAgent.match(
            /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        );
        console.log(flag);
        if (flag){
            console.log(666);
        }else{
            let canvas = document.querySelector('canvas'),
                ctx = canvas.getContext('2d')
            // canvas.width = window.innerWidth;
            // canvas.height = window.innerHeight - 100;
            canvas.width = SHeight;
            canvas.height = SWidth;
            ctx.lineWidth = .3;
            ctx.strokeStyle = (new Color(150)).style;

            // let mousePosition = {
            // 	x: 30 * canvas.width / 100,
            // 	y: 30 * canvas.height / 100
            // };
            let mousePosition = {
                x: canvas.width - 100,
                y: canvas.height - 60
            };

            let dots = {
                nb: 1500,      //动画光点数量
                distance: 100,
                d_radius: 150,
                array: []
            };

            function colorValue(min) {
                return Math.floor(Math.random() * 255 + min);
            }

            function createColorStyle(r, g, b) {
                return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
            }

            function mixComponents(comp1, weight1, comp2, weight2) {
                return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
            }

            function averageColorStyles(dot1, dot2) {
                let color1 = dot1.color,
                    color2 = dot2.color;

                let r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
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

            function Dot() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;

                this.vx = -.5 + Math.random();
                this.vy = -.5 + Math.random();

                this.radius = Math.random() * 1.8; //光点大小

                this.color = new Color();
            }

            Dot.prototype = {
                draw: function () {
                    ctx.beginPath();
                    ctx.fillStyle = this.color.style;
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                    ctx.fill();
                }
            };

            function createDots() {
                for (let i = 0; i < dots.nb; i++) {
                    dots.array.push(new Dot());
                }
            }

            function moveDots() {
                for (let i = 0; i < dots.nb; i++) {

                    let dot = dots.array[i];

                    if (dot.y < 0 || dot.y > canvas.height) {
                        dot.vx = dot.vx;
                        dot.vy = -dot.vy;
                    }
                    else if (dot.x < 0 || dot.x > canvas.width) {
                        dot.vx = -dot.vx;
                        dot.vy = dot.vy;
                    }
                    dot.x += dot.vx;      //x轴光点运行速度
                    dot.y += dot.vy ;      //y轴光点运行速度
                }
            }

            function connectDots() {
                for (let i = 0; i < 160; i++) {
                    for (let j = 0; j < 160; j++) {
                        let i_dot = dots.array[i];
                        let j_dot = dots.array[j];

                        if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > -dots.distance && (i_dot.y - j_dot.y) > -dots.distance) {
                            if ((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > -dots.d_radius && (i_dot.y - mousePosition.y) > -dots.d_radius) {
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
                for (let i = 0; i < dots.nb; i++) {
                    let dot = dots.array[i];
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
            document.getElementById(id).addEventListener('mousemove', function (e) {
                mousePosition.x = e.pageX;
                mousePosition.y = e.pageY;
            });

            document.getElementById(id).addEventListener('mouseleave', function (e) {
                mousePosition.x = canvas.width;
                mousePosition.y = canvas.height;
            });
            //----------------------跟着鼠标动--------------------
            createDots();
            requestAnimationFrame(animateDots);
        }
    }
}

export default new canvasStar()